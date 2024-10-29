import axios from 'axios';
import { useEffect, useState } from 'react';

const useGetRequest = (url, page = 1, obj) => {
    const [data, setData] = useState()
    const [paginations, setPaginations] = useState()
    const [reload, setReload] = useState()

    useEffect(() => {
        const get = async () => {
            if (!url) 
                return
            await axios.get(url, { params: { ...obj, page } })
                .then(res => {
                    const { data, ...pagination } = res.data.response
                    setData(data)
                    setPaginations(pagination)
                })
                .catch(err => alert(err.response?.data.message || `ایراد در لود اطلاعات ${url}`))
        }
        get()
    }, [url, reload, page])

    return [data, setData, setReload, paginations, setPaginations]
};

export default useGetRequest;