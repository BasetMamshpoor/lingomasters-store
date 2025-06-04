import {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';

function usePostRequest() {
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
    const [message, setMessage] = useState(null);

    const sendPostRequest = async (method = "POST", url, body, isFormData = false, useToken = true) => {
        setIsLoading(true);
        setError(null);
        setMessage(null);

        try {
            const headers = {
                ...(isFormData ? {'Content-Type': 'multipart/form-data'} : {}),
                ...(useToken && Cookies.get('token') ? {'Authorization': `${JSON.parse(Cookies.get('token')).token_type} ${JSON.parse(Cookies.get('token')).access_token}`} : {})
            };

            const response = await axios({
                url,
                method,
                data: body,
                headers
            });

            const {message} = response.data;
            setMessage(message);
            return {success: true, data: response.data, errorMessage: null, successMessage: message};

        } catch (err) {
            const errorMessage = err.response?.data.message || err.message || 'Something went wrong.';
            setError(errorMessage);
            return {success: false, data: null, errorMessage, status: err.response?.status};

        } finally {
            setIsLoading(false);
        }
    };

    return {isLoading, error, message, sendPostRequest};
}

export default usePostRequest;