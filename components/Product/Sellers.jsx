import formatCurrency from '@/helpers/formatCurrency';

import SellerIcon from '@icons/sellers.svg'
import Minus from '@icons/minus.svg'
import Plus from '@icons/plus.svg'
import Cart from '@icons/cart.svg'

const Sellers = () => {
    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-2" id='seller'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><SellerIcon className='w-5 h-5'/></div>
                    <span className='sm:text-base text-sm text-primary-950'>فروشندگان</span>
                </div>
                <ul className="flex flex-col gap-8">
                    {[...Array(8)].map((_, i) => {
                        return <li className='flex items-center justify-between gap-1' key={i}>
                            <span className='sm:text-base text-[10px] text-primary-950 line-clamp-1'>سعید اسدی</span>
                            <span className='sm:text-base text-[10px] text-natural_gray-950'>ارسال امروز</span>
                            <span className='sm:text-base text-[10px] text-green-600'>{formatCurrency(2000000)} تومان</span>
                            <div className="sm:flex-[176px_0_0] flex-[0_0_80px]">
                                {(i < 2 ?
                                    <div className='flex items-center gap-2 h-10 mx-auto py-1 px-2 border border-natural_gray-300 rounded justify-between w-fit'>
                                        <button type='button' className="centerOfParent bg-none border-0" onClick={() => dispatch({ type: 'INCREASE', payload: paint })}>
                                            <Plus className="cursor-pointer w-4 h-4" />
                                        </button>
                                        <span className='centerOfParent text-natural_gray-800'>{1}</span>
                                        <button type='button' className='centerOfParent bg-none border-0'>
                                            {1 < 2 ?
                                                <Minus className="cursor-pointer w-4 h-4" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: paint })} /> :
                                                <Minus className="cursor-pointer w-4 h-4" onClick={() => dispatch({ type: "DECREASE", payload: paint })} />
                                            }
                                        </button>
                                    </div>
                                    : <button type='button' onClick={() => dispatch({ type: "ADD_ITEM", payload: paint })} disabled={false}
                                        className="disabled:opacity-50 bg-primary-600 p-2 text-sm text-white rounded centerOfParent gap-2 mx-auto">
                                        <Cart />
                                        <span className='sm:inline-block hidden'>افزودن به سبد خرید</span>
                                    </button>)
                                }
                            </div>
                        </li>
                    })}
                </ul>
            </div>
        </>
    );
};

export default Sellers;