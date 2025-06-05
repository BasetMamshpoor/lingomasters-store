import {useContext} from 'react';
import formatCurrency from '@/helpers/formatCurrency';

import SellerIcon from '@icons/sellers.svg';
import Minus from '@icons/minus.svg';
import Plus from '@icons/plus.svg';
import Cart from '@icons/cart.svg';
import {CartContext} from "@/providers/CartContextProvider";
import {addToast} from "@heroui/react";

const Sellers = ({sellers = [], baseProduct}) => {
    const {state, dispatch} = useContext(CartContext);

    const getIdp = (sellerId) => `${baseProduct.id}_${sellerId}`;

    const getQuantity = (idp) => {
        const item = state.items.find(i => i.idp === idp);
        return item ? item.quantity : 0;
    };

    const handleAddToCart = (seller) => {
        const idp = getIdp(seller.seller_id);
        if (state.seller_id && state.seller_id !== seller.seller_id) {
            addToast({
                title: 'خطا',
                description: "شما فقط می‌توانید از یک فروشنده در هر سبد خرید استفاده کنید.",
                color: 'danger'
            })
            return;
        }

        const payload = {
            ...baseProduct,
            idp,
            selected_seller: seller
        };

        dispatch({type: 'ADD_ITEM', payload});
    };

    const handleIncrease = (seller) => {
        const idp = getIdp(seller.seller_id);
        const payload = {
            ...baseProduct,
            idp
        };
        dispatch({type: 'INCREASE', payload});
    };

    const handleDecrease = (seller) => {
        const idp = getIdp(seller.seller_id);
        const payload = {
            ...baseProduct,
            idp
        };
        dispatch({type: 'DECREASE', payload});
    };

    const handleRemove = (seller) => {
        const idp = getIdp(seller.seller_id);
        const payload = {
            ...baseProduct,
            idp
        };
        dispatch({type: 'REMOVE_ITEM', payload});
    };

    return (
        <>
            {!!sellers.length &&
                <div
                    className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52"
                    id='seller'>
                    <div className="centerOfParent gap-2 w-fit">
                        <div className="centerOfParent"><SellerIcon className='w-5 h-5'/></div>
                        <span className='sm:text-base text-sm text-primary-950'>فروشندگان</span>
                    </div>
                    <ul className="flex flex-col gap-8">
                        {sellers.map((s) => {
                            const idp = getIdp(s.seller_id);
                            const quantity = getQuantity(idp);

                            return (
                                <li className='flex items-center justify-between gap-1' key={s.id0}>
                                    <span
                                        className='sm:text-base text-[10px] text-primary-950 line-clamp-1 w-28'>{s.name}</span>

                                    <div className="w-20">
                                        {s.discounted_price !== s.price ?
                                            <div className="flex gap-2">
                                                <div
                                                    className="centerOfParent bg-rose-100 text-rose-600 h-fit text-sm px-2 rounded">
                                                    {s.discount_percentage}%
                                                </div>
                                                <div className="flex flex-col gap-1">
                                                    <span className='sm:text-base text-[10px] text-green-600 hasToman'>
                                                        {formatCurrency(s.discounted_price)}
                                                    </span>
                                                    <del className='sm:text-base text-[10px] text-natural_gray-600'>
                                                        {formatCurrency(s.price)}
                                                    </del>
                                                </div>
                                            </div> :
                                            <span className='sm:text-base text-[10px] text-green-600 hasToman'>
                                                {formatCurrency(s.price)}
                                            </span>
                                        }
                                    </div>

                                    <div className="sm:w-[176px] w-[80px]">
                                        {quantity > 0 ? (
                                            <div
                                                className='flex items-center gap-2 h-10 mx-auto py-1 px-2 border border-natural_gray-300 rounded justify-between w-fit'>
                                                <button type='button' className="centerOfParent bg-none border-0"
                                                        onClick={() => handleIncrease(s)}>
                                                    <Plus className="cursor-pointer w-4 h-4"/>
                                                </button>
                                                <span className='centerOfParent text-natural_gray-800'>{quantity}</span>
                                                <button type='button' className='centerOfParent bg-none border-0'>
                                                    {quantity < 2 ? (
                                                        <Minus className="cursor-pointer w-4 h-4"
                                                               onClick={() => handleRemove(s)}/>
                                                    ) : (
                                                        <Minus className="cursor-pointer w-4 h-4"
                                                               onClick={() => handleDecrease(s)}/>
                                                    )}
                                                </button>
                                            </div>
                                        ) : (
                                            <button type='button'
                                                    onClick={() => handleAddToCart(s)}
                                                    disabled={false}
                                                    className="disabled:opacity-50 bg-primary-600 p-2 text-sm text-white rounded centerOfParent gap-2 mx-auto">
                                                <Cart className='fill-white'/>
                                                <span className='sm:inline-block hidden'>افزودن به سبد خرید</span>
                                            </button>
                                        )}
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>}
        </>
    );
};

export default Sellers;
