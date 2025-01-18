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
        setMessage(null); // Reset message on new request

        try {
            const headers = {
                ...(isFormData ? {'Content-Type': 'multipart/form-data'} : {}),
                ...(useToken ? {'Authorization': `${JSON.parse(Cookies.get('token')).token_type} ${JSON.parse(Cookies.get('token')).access_token}`} : {}) // Set token if useToken is true
            };

            const response = await axios({
                url,
                method,
                data: body,
                headers
            });

            const {message} = response.data; // Extract message from response
            setMessage(message);
            return {success: true, data: response.data, errorMessage: null}; // Return success with data
        } catch (err) {
            const errorMessage = err.response?.data.message || err.message || 'Something went wrong.';
            setError(errorMessage);
            return {success: false, data: null, errorMessage}; // Return failure with error message
        } finally {
            setIsLoading(false);
        }
    };

    return {isLoading, error, message, sendPostRequest};
}

export default usePostRequest;