import Image from "next/image";

import Heart from '@icons/heart.svg';
import FillHeart from '@icons/fill-heart.svg';
import Cart from '@icons/cart.svg';
import English from '@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg';


import Link from "next/link";
import formatCurrency from "@/helpers/formatCurrency";
import { useContext } from "react";
import { CartContext } from "@/providers/CartContextProvider";
import { useRouter } from "next/router";

const Card = ({ data = {}, withLabel = true, solid = false, offRed = false, withTag = true, edu = false }) => {
    const { push } = useRouter()
    const { dispatch } = useContext(CartContext)

    const handleClick = () => {
        dispatch({ type: 'ADD_ITEM', payload: { ...data, idp: data.id + "_" + data.selected_seller.id } })
        push('/checkout/cart')
    }

    return (
        <>
            <div dir='ltr' className={`relative select-none overflow-hidden flex flex-col items-stretch sm:gap-3 gap-1 sm:max-w-[302px] w-full h-[405px] sm:h-[528px] flex-shrink-0 rounded-lg border border-natural_gray-${solid ? "400" : '100'} md:p-6 p-4 bg-white`}>
                <div className="centerOfParent sm:max-w-[254px] max-w-[210px] w-full sm:h-[250px] h-[200px] flex-shrink-0 rounded-lg mix-blend-darken">
                    <Image
                        src={data.image || "/images/Slider/1.jpg"}
                        alt="Responsive example"
                        width={0}
                        height={0} sizes='100vw'
                        className='w-full h-full object-contain' />
                </div>
                <div className="grow flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-1">
                        <div className="centerofParent cursor-pointer">{data.is_like ? <FillHeart className='fill-red-500' /> : <Heart />}</div>
                        <p className='line-clamp-1 sm:text-lg text-sm leading-6' dir='rtl'>{data.title}</p>
                    </div>
                    {withTag && <div className="flex items-center self-end">
                        <span className="sm:px-3 px-2.5 sm:py-1 py-0 sm:text-base text-[10px] centerOfParent h-8 rounded-[20px] bg-primary-100 text-primary-950 font-semibold">{data.category}</span>
                    </div>}
                    <div className="w-full flex flex-col items-end" dir='rtl'>
                        {data.off_price && <div className="flex items-center gap-4">
                            <span className='py-[2px] px-3 rounded-lg bg-red-50 text-red-600 sm:text-lg text-xs inline-block'>{data.discount_percentage}%</span>
                            <del className={`${offRed ? 'text-red-300' : 'text-natural_gray-400 '} sm:text-base text-xs hasToman`}>{formatCurrency(data.price)}</del>
                        </div>}
                        <p className='text-primary-700 sm:text-2xl text-xs hasToman'>{formatCurrency(data.off_price || data.price)}</p>
                    </div>
                    <div className="flex items-center sm:gap-6 gap-4 sm:max-w-64 max-w-52 w-full">
                        <button onClick={handleClick} className="centerOfParent bg-primary-500 p-4 sm:w-[60px] w-11 sm:h-12 h-8 rounded-md"><Cart className='fill-white' /></button>
                        <Link href={`/${edu ? 'educational-products' : 'product'}/${data.id}`} className='sm:text-base text-xs sm:h-12 h-8 flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>مشاهده</Link>
                    </div>
                </div>
                {withLabel && data.discount_percentage && <div className="absolute centerOfParent w-[136px] -rotate-45 px-[11px] py-[7px] bg-red-200 -left-9 top-3 sm:text-lg text-xs text-red-950">{data.discount_percentage}%</div>}
                <div className="absolute right-1 top-1 centerOfParent w-10 h-10 p-1"><English /></div>
            </div>
        </>
    );
};

export default Card;
