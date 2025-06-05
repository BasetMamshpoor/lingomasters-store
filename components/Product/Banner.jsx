//icons
import Left from '@icons/arrow-left.svg'
import Cart from '@icons/cart.svg';
import Minus from '@icons/minus.svg';
import Plus from '@icons/plus.svg';
import Share from '@icons/share.svg'
import Right from '@icons/chevron-right.svg'
import Trush from "@icons/bin.svg";

import Image from 'next/image';
import Link from 'next/link';
import {addToast, BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import formatCurrency from '@/helpers/formatCurrency';
import {CartContext} from '@/providers/CartContextProvider';
import {useContext} from 'react';
import {IsInCart, quantityItem} from '@/helpers/functions';
import Like from "@/components/Like";
import Rate from "@/components/Rate";


const Banner = ({product = {}}) => {

    const {
        title,
        id, rate_count,
        sellers, average_rate,
        category,
        category_slug,
        image, min_price, max_price,
        page_number, is_like,
        off_price, language,
        price, flag,
        discount_percentage, rate,
        selected_seller
    } = product
    const {state, dispatch} = useContext(CartContext)

    const idp = id + "_" + selected_seller?.id;

    return (
        <>
            <div className="lg:hidden flex flex-col">
                <div className="py-3">
                    <Breadcrumbs
                        separator='/'
                        classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                        itemClasses={{
                            separator: "px-2 text-natural_gray-600"
                        }}>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                            href="/">صفحه اصلی</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                            href={`/category/${category_slug}`}>{category}</BreadcrumbItem>
                        <BreadcrumbItem
                            className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{title}</BreadcrumbItem>
                    </Breadcrumbs>
                </div>
                <div className="py-3 flex items-center gap-2 cursor-pointer">
                    <div className="centerOfParent"><Right className='fill-primary-600'/></div>
                    <span className='sm:text-base text-sm font-semibold'>بازگشت</span>
                </div>
            </div>
            <div className="flex flex-col items-stretch gap-9">
                <div className="flex flex-col gap-10 sm:p-4 px-3 py-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-2">
                        <div className="flex items-center lg:justify-end justify-between">
                            <div className="lg:hidden flex items-center gap-6">
                                <Like isLike={is_like} url='/product' id={id}/>
                                <button
                                    type="button"
                                    className="centerOfParent cursor-pointer"
                                    aria-label="اشتراک‌گذاری"
                                    onClick={() => {
                                        navigator.share({
                                            title: title,
                                            url: window.location.href,
                                        }).then(() => {
                                            addToast({
                                                description: 'لینک محصول با موفقیت به اشتراک گذاشته شد.',
                                                color: 'success',
                                            });
                                        }).catch(() => {
                                            addToast({
                                                description: 'اشتراک‌گذاری لغو شد یا پشتیبانی نمی‌شود.',
                                                color: 'warning',
                                            });
                                        });

                                    }}
                                >
                                    <Share/>
                                </button>
                            </div>
                            {!!sellers.length &&
                                <Link href='#sellers' className="lg:hidden flex items-center gap-1 self-end">
                                <span
                                    className='sm:text-base text-sm text-primary-700'>{sellers?.length} فروشنده دیگر</span>
                                    <div className="centerOfParent"><Left className='w-4 h-4 fill-primary-700'/></div>
                                </Link>}
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="centerOfParent max-w-[148px] mx-auto w-full h-auto flex-shrink-0">
                                <Image
                                    src={image}
                                    alt="Responsive example"
                                    width={0}
                                    height={0} sizes='100vw'
                                    className='w-full h-full object-contain'/>
                            </div>
                            <div className="centerOfParent flex-col gap-1 w-full">
                                <h1 className='sm:text-xl text-base font-semibold'>{title}</h1>
                                <p className='lg:hidden text-natural_gray-600 text-xs'>(کد کتاب: {id})</p>
                                <div className="lg:hidden centerOfParent">
                                    <Image src={flag} width={24} height={24}
                                           alt={language}/></div>
                                <div className="lg:hidden flex items-center gap-1">
                                    <Rate rate={rate} id={id} url="/product"/>
                                    <div className="flex items-center gap-2">
                                        <span className='text-natural_gray-950 text-xs'>{average_rate}</span>
                                        <span className='text-neutral-700 text-[10px]'>از {rate_count} نفر</span>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-col items-stretch gap-3">
                                <div className="h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span className='text-natural_gray-900 sm:text-xs text-[10px]'>تعداد جلد</span>
                                    <span className='sm:text-sm text-xs'>{page_number}</span>
                                </div>
                                {selected_seller && <>
                                    {discount_percentage &&
                                        <div className="h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                            <span className='text-natural_gray-900 sm:text-xs text-[10px]'>تخفیف</span>
                                            <span
                                                className='text-red-500 sm:text-sm text-xs'>{discount_percentage} تخفیف</span>
                                        </div>}
                                    <div
                                        className="sm:h-[60px] h-8 flex items-center justify-between bg-natural_gray-50 px-3">
                                    <span
                                        className='text-natural_gray-900 sm:text-xs text-[10px]'>خرید از {selected_seller?.title}</span>
                                        <span
                                            className='text-green-500 sm:text-sm text-xs hasToman'>{formatCurrency(off_price || price)}</span>
                                    </div>
                                </>}
                            </div>
                        </div>
                    </div>
                    {selected_seller && <div className="centerOfParent">
                        {(IsInCart(state, idp) ?
                            <div
                                className='flex items-center gap-2 h-10 mx-auto py-1 px-2 border border-natural_gray-300 rounded justify-between w-fit'>
                                <button type='button' className="centerOfParent bg-none border-0"
                                        onClick={() => dispatch({
                                            type: 'INCREASE',
                                            payload: {...product, idp}
                                        })}>
                                    <Plus className="cursor-pointer w-6 h-6 fill-primary-600"/>
                                </button>
                                <span
                                    className='sm:text-base text centerOfParent text-natural_gray-800'>{quantityItem(state, idp)}</span>
                                <button type='button' className='centerOfParent bg-none border-0'>
                                    {quantityItem(state, idp) < 2 ?
                                        <Trush className="cursor-pointer w-6 h-6 fill-red-500" onClick={() => dispatch({
                                            type: "REMOVE_ITEM",
                                            payload: {...product, idp}
                                        })}/> :
                                        <Minus className="cursor-pointer w-6 h-6 fill-primary-600"
                                               onClick={() => dispatch({
                                                   type: "DECREASE",
                                                   payload: {
                                                       ...product,
                                                       idp
                                                   }
                                               })}/>
                                    }
                                </button>
                            </div>
                            : <button type='button' onClick={() => {
                                if (state.seller_id && state.seller_id !== selected_seller.id) {
                                    addToast({
                                        title: 'خطا',
                                        description: "شما فقط می‌توانید از یک فروشنده در هر سبد خرید استفاده کنید.",
                                        color: 'danger'
                                    })
                                    return;
                                }

                                dispatch({
                                    type: "ADD_ITEM",
                                    payload: {...product, idp}
                                });
                            }} disabled={false}
                                      className="effect-2 disabled:opacity-50 bg-primary-600 p-2 text-sm text-white rounded centerOfParent gap-2 ">
                                <Cart className='sm:w-6 sm:h-6 w-4 h-4 fill-white'/>
                                <span className='sm:text-base text-xs'>افزودن به سبد خرید</span>
                            </button>)
                        }
                    </div>}
                </div>
                <div className="centerOfParent gap-20 p-4 bg-white border border-neutral-100 rounded-lg">
                    <div className="flex flex-col gap-4">
                        <span className="text-natural_gray-950 sm:text-sm text-xs">ارزان‌ترین قیمت</span>
                        <span className="text-green-600 sm:text-sm text-xs hasToman">{formatCurrency(min_price)}</span>
                    </div>
                    <div className="flex flex-col gap-4">
                        <span className="text-natural_gray-950 sm:text-sm text-xs">گران‌ترین قیمت</span>
                        <span className="text-red-600 sm:text-sm text-xs hasToman">{formatCurrency(max_price)}</span>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;