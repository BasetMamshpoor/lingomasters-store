import axios from 'axios';
import {useEffect, useState} from 'react';
import Cookies from 'js-cookie';
import {useRouter} from "next/router";
import {addToast} from "@heroui/react";

const useGetRequest = (url, page = 1, obj) => {
    const {push, pathname} = useRouter();
    const [data, setData] = useState();
    const [paginations, setPaginations] = useState();
    const [reload, setReload] = useState();
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : {};
        const get = async () => {
            if (!url) return;
            setIsLoading(true);
            await axios.get(url, {
                params: {...obj, page},
                headers: {
                    'Authorization': `${token.token_type} ${token.access_token}`
                }
            })
                .then(res => {
                    const {data, ...pagination} = res.data.response;
                    setData(data);
                    setPaginations(pagination);
                })
                .catch(err => {
                    if (err.response?.status === 401 && pathname.startsWith('/profile')) {
                        push('/auth/login');
                    } else if (err.response?.status !== 401 && err.response?.data.message) {
                        addToast({
                            title: err.response?.data.message,
                            color: 'danger'
                        })
                    }
                })
                .finally(() => {
                    setIsLoading(false);
                });
        };
        get();
    }, [url, reload, page, obj]);

    return [data, setData, setReload, paginations, setPaginations, isLoading];
};

export default useGetRequest;