//icons
import Left from '@icons/arrow-left.svg'
import Cart from '@icons/cart.svg';
import Minus from '@icons/minus.svg';
import Plus from '@icons/plus.svg';
import Share from '@icons/share.svg'
import Heart from '@icons/heart.svg'
import Star from '@icons/magic-star.svg'
import FillHeart from '@icons/fill-heart.svg'
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg'

import Image from 'next/image';
import Link from 'next/link';



const Banner = () => {
    return (
        <>
            <div className="flex flex-col items-stretch gap-9">
                <div className="flex flex-col gap-10 p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center lg:justify-end justify-between">
                            <div className="lg:hidden flex items-center gap-6">
                                <Heart />
                                <Share />
                            </div>
                            <Link href='' className="flex items-center gap-1 self-end">
                                <span className='text-primary-700'>۵ فروشنده دیگر</span>
                                <div className="centerOfParent"><Left className='w-4 h-4 fill-primary-700' /></div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="centerOfParent max-w-[148px] mx-auto w-full h-auto flex-shrink-0">
                                <Image
                                    src="/images/product.png"
                                    alt="Responsive example"
                                    width={0}
                                    height={0} sizes='100vw'
                                    className='w-full h-full object-contain' />
                            </div>
                            <div className="centerOfParent flex-col gap-1 w-full">
                                <h1 className='text-xl font-semibold'>کتاب طلسم مکالمه</h1>
                                <p className='text-natural_gray-600 text-xs'>(کد کتاب: 587848)</p>
                                <div className="centerOfParent"><Flag /></div>
                                <div className="flex items-center gap-1">
                                    <div className="centerOfParent"><Star className='w-5 h-5 fill-warning' /></div>
                                    <div className="flex items-center gap-2">
                                        <span className='text-natural_gray-950 text-xs'>4.8</span>
                                        <span className='text-neutral-700 text-[10px]'>از 80 نفر</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch gap-3">
                                <div className="h-[30px] flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className=' text-natural_gray-900 text-xs'>تعداد جلد</span>
                                    <span className='text-sm'>پکیج ۵ تایی</span>
                                </div>
                                <div className="h-[30px] flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 text-xs'>تخفیف</span>
                                    <span className='text-red-500 text-sm'>۵۰٪ تخفیف</span>
                                </div>
                                <div className="h-[60px] flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 text-xs'>خرید از سعید اسدی</span>
                                    <span className='text-green-500 text-sm'>۲۰۰.۰۰۰ تومان</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="centerOfParent">
                        {(3 < 2 ?
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
                                className="disabled:opacity-50 bg-primary-600 p-2 text-sm text-white rounded centerOfParent gap-2 ">
                                <Cart />
                                <span>افزودن به سبد خرید</span>
                            </button>)
                        }
                    </div>
                </div>
                <div className="centerOfParent gap-20 p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-4">
                        <span className="text-natural_gray-950 text-sm">ارزان‌ترین قیمت</span>
                        <span className="text-green-600 text-sm">23.000.000 تومان</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-natural_gray-950 text-sm">گران‌ترین قیمت</span>
                        <span className="text-red-600 text-sm">23.000.000 تومان</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;