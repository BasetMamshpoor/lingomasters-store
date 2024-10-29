import Category from "@icons/category.svg";
import Store from "@icons/store.svg";
import Plus from "@icons/plus.svg";
import Minus from "@icons/minus.svg";
import Trush from "@icons/bin.svg";

import Image from "next/image";
import Link from "next/link";
import formatCurrency from "@/helpers/formatCurrency";
import { useContext } from "react";
import { CartContext } from "@/providers/CartContextProvider";

const Products = ({ download }) => {
    const { state, dispatch } = useContext(CartContext)
    const items = state.items.filter(i => download ? i.is_download === 1 : i.is_download === 0)
    return (
        <>
            {items.length ? items.map((p, i) => {
                return (
                    <>
                        <div className='flex flex-col items-stretch overflow-hidden relative' key={p.idp} id='product'>
                            <div className='flex gap-6 grow'>
                                <Link href={`/product/${p.id}`} className='h-[90px] w-[90px] flex-shrink-0'>
                                    <Image placeholder='blur' blurDataURL='/images/product.png' width={100} height={100} unoptimized={true} src={p.image || '/images/product.png'} alt="" />
                                </Link>
                                <div className='grow flex flex-col gap-2'>
                                    <h3 className='font-semibold sm:text-base text-sm'>{p.title}</h3>
                                    <div className='flex items-start mb-2 flex-col gap-2'>
                                        <div className='centerOfParent gap-2'>
                                            <div className='centerOfParent'>
                                                <Category className='sm:w-6 sm:h-6 w-4 h-4' />
                                            </div>
                                            <p className="sm:text-sm text-xs">{p.category}</p>
                                        </div>
                                        <div className='centerOfParent gap-2'>
                                            <div className='centerOfParent'>
                                                <Store className='sm:w-6 sm:h-6 w-4 h-4' />
                                            </div>
                                            <p className="sm:text-sm text-xs">{p.selected_seller.name}</p>
                                        </div>
                                    </div>
                                    <div className={`md:flex items-center justify-between hidden w-full`}>
                                        <div className='flex items-center gap-1 flex-wrap md:flex-row flex-col-reverse'>
                                            <p className='text-xl text-green-500 flex items-center hasToman'>{formatCurrency(p.off_price || p.price)}</p>
                                            {p.off_price && <del className='text-natural_gray-400 text-sm  flex items-center hasToman'>{formatCurrency(p.price)}</del>}
                                        </div>
                                        <div className='flex items-center gap-2 p-2 border border-natural_gray-300 rounded justify-between w-fit'>
                                            <button type='button' className="centerOfParent" onClick={() => dispatch({ type: 'INCREASE', payload: p })}>
                                                <Plus className="fill-primary-700 cursor-pointer w-4 h-4" />
                                            </button>
                                            <span className='sm:text-base centerOfParent text-natural_gray-800'>{p.quantity}</span>
                                            <button type='button' className='centerOfParent'>
                                                {p.quantity < 2 ?
                                                    <Trush className="fill-red-700 cursor-pointer w-5 h-5" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: p })} /> :
                                                    <Minus className="fill-primary-700 cursor-pointer w-4 h-4" onClick={() => dispatch({ type: "DECREASE", payload: p })} />
                                                }
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className={`flex items-center justify-between md:hidden`}>
                                <div className='flex items-center flex-wrap md:flex-row flex-col-reverse'>
                                    <p className='text-sm text-green-500 flex items-center hasToman'>{formatCurrency(p.off_price || p.price)}</p>
                                    {p.off_price && <del className='text-natural_gray-400 text-xs hasToman'>{formatCurrency(p.price)}</del>}
                                </div>
                                <div className='flex md:hidden items-center gap-2 border border-natural_gray-300 justify-between p-2 rounded'>
                                    <button className={`centerOfParent ${p.quantity >= p.sizes?.stock ? 'opacity-50 pointer-events-none' : ''}`} onClick={() => dispatch({ type: "INCREASE", payload: p })}>
                                        <Plus className='fill-primary-700 w-4 h-4' />
                                    </button>
                                    <span className='text-sm centerOfParent text-natural_gray-800'>{p.quantity}</span>
                                    <button className='centerOfParent'>
                                        {p.quantity < 2 ?
                                            <Trush className='fill-red-600 w-5 h-5' onClick={() => dispatch({ type: "REMOVE_ITEM", payload: p })} /> :
                                            <Minus className='fill-primary-700 w-4 h-4' onClick={() => dispatch({ type: "DECREASE", payload: p })} />
                                        }
                                    </button>
                                </div>
                            </div>
                        </div>
                        {items.length - 1 !== i && <hr className="border-primary-100" />}
                    </>
                )
            }) :
                <div className='centerOfParent w-full'>
                    <div className='w-[280px] h-[280px] flex flex-col items-center gap-4'>
                        {/* <img src={img.src} alt="" /> */}
                        <p className="text-xl font-bold">سبد خرید شما خالی است.</p>
                    </div>
                </div>
            }
        </>
    );
};

export default Products;