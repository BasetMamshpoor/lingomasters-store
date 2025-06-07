import {createContext, useEffect, useReducer} from 'react';
import {useRouter} from 'next/router';
import reducer from '@/func/reducer';
import usePostRequest from "@/hooks/usePostRequest";
import {addToast} from "@heroui/react";


const initState = {
    items: [],
    itemsCounter: 0,
    total: 0,
    total_after_off: 0,
    seller_id: null,
}

export const CartContext = createContext()

const CartContextProvider = ({children}) => {
    const {asPath} = useRouter()
    const {sendPostRequest, isLoading} = usePostRequest()

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

    const checkCart = async (items) => {
        const {
            success,
            errorMessage,
            data
        } = await sendPostRequest("POST", "/order/checkCart", {items, seller_id: state.seller_id});

        if (success) {
            dispatch({type: "UPDATE_CART_FROM_API", payload: data.response.data});
        } else {
            addToast({
                title: "خطا در بررسی سبد خرید",
                description: errorMessage || "مشکلی در بررسی سبد خرید شما پیش آمده است.",
                color: "danger",
            })
        }
    };

    useEffect(() => {
        if (asPath === '/checkout/cart' || asPath === '/checkout/shipping')
            if (state.items.length > 0 && !isLoading) {
                checkCart(state.items);
            }
    }, [asPath]);


    return (
        <>
            <CartContext.Provider value={{state, dispatch, isLoading}}>
                {children}
            </CartContext.Provider>
        </>
    );
};

export default CartContextProvider;