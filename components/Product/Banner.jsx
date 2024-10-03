//icons
import Left from '@icons/arrow-left.svg'
import Cart from '@icons/cart.svg';
import Minus from '@icons/minus.svg';
import Plus from '@icons/plus.svg';
import Share from '@icons/share.svg'
import Heart from '@icons/heart.svg'
import Star from '@icons/magic-star.svg'
import Right from '@icons/chevron-right.svg'
import FillHeart from '@icons/fill-heart.svg'
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg'

import Image from 'next/image';
import Link from 'next/link';
import { BreadcrumbItem, Breadcrumbs } from '@nextui-org/react';
import formatCurrency from '@/helpers/formatCurrency';



const Banner = ({ product = {} }) => {

    const { title, rate, id, language, is_like, category, seller,image, subject, age_group, page_number, product_type_id, price,off_percent } = product

    return (
        <>
            <div className="lg:hidden flex flex-col">
                <div className="py-3">
                    <Breadcrumbs
                        separator='/'
                        classNames={{ list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600' }}
                        itemClasses={{
                            separator: "px-2 text-natural_gray-600"
                        }}>
                        <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs' href="/">صفحه اصلی</BreadcrumbItem>
                        <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs' href="/category/printed">کتاب های چاپی</BreadcrumbItem>
                        <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{title}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="py-3 flex items-center gap-2 cursor-pointer">
                    <div className="centerOfParent"><Right className='fill-primary-600' /></div>
                    <span className='sm:text-base text-sm font-semibold'>بازگشت</span>
                </div>
            </div>
            <div className="flex flex-col items-stretch gap-9">
                <div className="flex flex-col gap-10 sm:p-4 px-3 py-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center lg:justify-end justify-between">
                            <div className="lg:hidden flex items-center gap-6">
                                <Heart />
                                <Share />
                            </div>
                            <Link href='' className="flex items-center gap-1 self-end">
                                <span className='sm:text-base text-sm text-primary-700'>۵ فروشنده دیگر</span>
                                <div className="centerOfParent"><Left className='w-4 h-4 fill-primary-700' /></div>
                            </Link>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="centerOfParent max-w-[148px] mx-auto w-full h-auto flex-shrink-0">
                                <Image
                                    src={image}
                                    alt="Responsive example"
                                    width={0}
                                    height={0} sizes='100vw'
                                    className='w-full h-full object-contain' />
                            </div>
                            <div className="centerOfParent flex-col gap-1 w-full">
                                <h1 className='sm:text-xl text-base font-semibold'>{title}</h1>
                                <p className='text-natural_gray-600 text-xs'>(کد کتاب: {id})</p>
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
                                <div className="h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 sm:text-xs text-[10px]'>تعداد جلد</span>
                                    <span className='sm:text-sm text-xs'>پکیج ۵ تایی</span>
                                </div>
                                <div className="h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 sm:text-xs text-[10px]'>تخفیف</span>
                                    <span className='text-red-500 sm:text-sm text-xs'>{off_percent} تخفیف</span>
                                </div>
                                <div className="sm:h-[60px] h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 sm:text-xs text-[10px]'>خرید از {seller?.name}</span>
                                    <span className='text-green-500 sm:text-sm text-xs hasToman'>{formatCurrency(price)}</span>
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
                                <span className='sm:text-base text-sm centerOfParent text-natural_gray-800'>{1}</span>
                                <button type='button' className='centerOfParent bg-none border-0'>
                                    {1 < 2 ?
                                        <Minus className="cursor-pointer w-4 h-4" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: paint })} /> :
                                        <Minus className="cursor-pointer w-4 h-4" onClick={() => dispatch({ type: "DECREASE", payload: paint })} />
                                    }
                                </button>
                            </div>
                            : <button type='button' onClick={() => dispatch({ type: "ADD_ITEM", payload: paint })} disabled={false}
                                className="disabled:opacity-50 bg-primary-600 p-2 text-sm text-white rounded centerOfParent gap-2 ">
                                <Cart className='sm:w-6 sm:h-6 w-4 h-4 fill-white' />
                                <span className='sm:text-base text-xs'>افزودن به سبد خرید</span>
                            </button>)
                        }
                    </div>
                </div>
                <div className="centerOfParent gap-20 p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-4">
                        <span className="text-natural_gray-950 sm:text-sm text-xs">ارزان‌ترین قیمت</span>
                        <span className="text-green-600 sm:text-sm text-xs hasToman">{formatCurrency(23054032)}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-natural_gray-950 sm:text-sm text-xs">گران‌ترین قیمت</span>
                        <span className="text-red-600 sm:text-sm text-xs hasToman">{formatCurrency(23054032)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;