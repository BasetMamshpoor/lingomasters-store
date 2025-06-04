import {createContext} from 'react';
import useGetRequest from "@/hooks/useGetRequest";
import Loading from "@/components/Loading";


export const Category = createContext()

const CategoriesProviders = ({children}) => {
    const [categories = [], , , , , isLoading] = useGetRequest('/category')

    return (
        <>
            <Category.Provider value={{categories}}>
                {isLoading ? <Loading/> : children}
            </Category.Provider>
        </>
    );
};

export default CategoriesProviders;