import { createContext, useEffect, useReducer } from 'react';
import { useRouter } from 'next/router';
import reducer from '@/func/reducer';


const initState = {
    items: [],
    itemsCounter: 0,
    total: 0,
    total_after_off: 0,
    seller_id: null,
}

export const CartContext = createContext()

const CartContextProvider = ({ children }) => {
    const router = useRouter()

    const [state, dispatch] = useReducer(reducer, initState)

    useEffect(() => {
        const storage = JSON.parse(localStorage.getItem("cart"));
        if (storage) {
            dispatch({
                type: "INIT_STORED_CART",
                payload: storage
            });
        }
    }, []);

    return (
        <>
            <CartContext.Provider value={{ state, dispatch }}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;