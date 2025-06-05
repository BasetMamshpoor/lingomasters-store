import Category from "@icons/category.svg";
import Store from "@icons/store.svg";
import Plus from "@icons/plus.svg";
import Minus from "@icons/minus.svg";
import Trush from "@icons/bin.svg";
import Download from "@icons/download.svg";
import Left from "@icons/arrow-left.svg";

import Image from "next/image";
import Link from "next/link";
import formatCurrency from "@/helpers/formatCurrency";
import {useContext} from "react";
import {CartContext} from "@/providers/CartContextProvider";

const Products = ({download}) => {
    const {state, dispatch} = useContext(CartContext)
    return (
        <>
            {state.itemsCounter ? state.items.map((p, i) => {
                    return (
                        <>
                            <div className='flex flex-col items-stretch overflow-hidden relative' key={p.idp} id='product'>
                                <div className='flex gap-6 grow'>
                                    <div className="flex flex-col gap-6 justify-between">
                                        <Link href={`/product/${p.id}`} className='h-[90px] w-[90px] flex-shrink-0'>
                                            <Image placeholder='blur' blurDataURL='/images/product.png' width={100}
                                                   height={100} unoptimized={true} src={p.image || '/images/product.png'}
                                                   alt=""/>
                                        </Link>
                                        <div
                                            className='flex items-center gap-2 p-2 border border-natural_gray-300 rounded justify-between w-fit'>
                                            <button type='button' className="centerOfParent"
                                                    onClick={() => dispatch({type: 'INCREASE', payload: p})}>
                                                <Plus className="fill-primary-700 cursor-pointer w-4 h-4"/>
                                            </button>
                                            <span
                                                className='sm:text-base centerOfParent text-natural_gray-800'>{p.quantity}</span>
                                            <button type='button' className='centerOfParent'>
                                                {p.quantity < 2 ?
                                                    <Trush className="fill-red-700 cursor-pointer w-5 h-5"
                                                           onClick={() => dispatch({type: "REMOVE_ITEM", payload: p})}/> :
                                                    <Minus className="fill-primary-700 cursor-pointer w-4 h-4"
                                                           onClick={() => dispatch({type: "DECREASE", payload: p})}/>
                                                }
                                            </button>
                                        </div>
                                    </div>
                                    <div className='grow flex flex-col gap-2'>
                                        <h3 className='font-semibold sm:text-base text-sm'>{p.title}</h3>
                                        <div className='flex items-start mb-2 flex-col gap-2'>
                                            <div className='centerOfParent gap-2'>
                                                <div className='centerOfParent'>
                                                    <Category className='sm:w-6 sm:h-6 w-4 h-4'/>
                                                </div>
                                                <p className="sm:text-sm text-xs">{p.category}</p>
                                            </div>
                                            <div className='centerOfParent gap-2'>
                                                <div className='centerOfParent'>
                                                    <Store className='sm:w-6 sm:h-6 w-4 h-4'/>
                                                </div>
                                                <p className="sm:text-sm text-xs">{p.selected_seller.name}</p>
                                            </div>
                                            {!!p.is_download && <div className='centerOfParent gap-2'>
                                                <div className='centerOfParent'>
                                                    <Download className='sm:w-6 sm:h-6 w-4 h-4'/>
                                                </div>
                                                <p className="sm:text-sm text-xs">دانلودی</p>
                                            </div>}
                                        </div>
                                        <div className={`flex items-center justify-between w-full`}>
                                            <div className='flex items-center gap-1 flex-wrap md:flex-row flex-col-reverse'>
                                                <p className='md:text-xl text-sm text-green-500 flex items-center hasToman'>{formatCurrency(p.discount_price || p.price)}</p>
                                                {p.discount_price && <del
                                                    className='text-natural_gray-400 md:text-sm text-xs flex items-center hasToman'>{formatCurrency(p.price)}</del>}
                                            </div>
                                        </div>
                                        <Link href={`/product/${p.id}`} className="flex items-center gap-2 self-end">
                                            <span className="text-primary-600 text-sm">جزئیات</span>
                                            <div className="centerOfParent"><Left
                                                className='md:w-5 w-4 md:h-5 h-4 fill-primary-600'/></div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                            {state.items.length - 1 !== i && <hr className="border-primary-100"/>}
                        </>
                    )
                }) :
                <div className='centerOfParent w-full'>
                    <div className='w-[280px] h-[280px] flex flex-col items-center gap-4'>
                        <p className="text-xl font-bold">سبد خرید {download ? 'دانلودی' : null} شما خالی است.</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Products;