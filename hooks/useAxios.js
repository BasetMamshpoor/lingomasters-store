import axios from 'axios'
import { useContext } from 'react'
// import { Authorization } from 'providers/AuthContextProvider';

const useAxios = () => {
        // const { tokens } = useContext(Authorization)


    const AxiosPrivate = axios.create({
        headers: {
            "Content-Type": "application/json",
            // Authorization: `${tokens?.token_type} ${tokens?.access_token}`
        }
    });
    const AxiosPublic = axios.create({
        headers: {
            "Content-Type": "application/json",
        },
    });

    return { AxiosPrivate, AxiosPublic }
}

export default useAxios;