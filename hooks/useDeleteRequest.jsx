import {useState} from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import {addToast} from "@heroui/react";

const useDeleteRequest = () => {
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const deleteData = async (url, headers = {}) => {
        const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : {};
        setIsLoading(true);
        setIsSuccess(false);
        try {
            const response = await axios.delete(url, {
                headers: {
                    ...headers,
                    Authorization: `${token.token_type} ${token.access_token}`,
                },
            });
            setIsSuccess(true);
            addToast({
                title: 'حذف شد',
                color: 'success',
                description: response.data.message
            });
            return {success: true};
        } catch (err) {
            setIsSuccess(false);
            addToast({
                title: 'خطا',
                color: 'danger',
                description: err.response.data.message
            });
        } finally {
            setIsLoading(false);
        }
    };

    return {deleteData, isLoading, isSuccess};
};

export default useDeleteRequest;