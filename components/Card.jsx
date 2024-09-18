import Image from "next/image";

import Heart from '@icons/heart.svg';
import FillHeart from '@icons/fill-heart.svg';
import Cart from '@icons/cart.svg';
import English from '@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg';


import Link from "next/link";
import formatCurrency from "@/helpers/formatCurrency";

const Card = ({ withLabel = true, solid = false, offRed = false }) => {
    return (
        <>
            <div dir='ltr' className={`relative select-none overflow-hidden flex flex-col items-stretch sm:gap-3 gap-1 sm:max-w-[302px] w-full h-[405px] sm:h-[528px] flex-shrink-0 rounded-lg border border-natural_gray-${solid ? "400" : '100'} md:p-6 p-4 bg-white`}>
                <div className="centerOfParent sm:max-w-[254px] max-w-[210px] w-full sm:h-[250px] h-[200px] flex-shrink-0 rounded-lg mix-blend-darken">
                    <Image
                        src="/images/Slider/1.jpg"
                        alt="Responsive example"
                        width={0}
                        height={0} sizes='100vw'
                        className='w-full h-full object-contain' />
                </div>
                <div className="grow flex flex-col justify-between">
                    <div className="flex items-center justify-between gap-1">
                        <div className="centerofParent cursor-pointer"><Heart /></div>
                        <p className='line-clamp-1 sm:text-lg text-sm leading-6' dir='rtl'>طلسم مکالمه برای شما دانش آموزان</p>
                    </div>
                    <div className="flex items-center self-end">
                        <span className="sm:px-3 px-2.5 sm:py-1 py-0 sm:text-base text-[10px] centerOfParent h-8 rounded-[20px] bg-primary-100 text-primary-950 font-semibold">چاپی</span>
                    </div>
                    <div className="w-full flex flex-col items-end" dir='rtl'>
                        <div className="flex items-center gap-4">
                            <span className='py-[2px] px-3 rounded-lg bg-red-50 text-red-600 sm:text-lg text-xs inline-block'>20%</span>
                            <del className={`${offRed ? 'text-red-300' : 'text-natural_gray-400 '} sm:text-base text-xs hasToman`}>{formatCurrency(250000)}</del>
                        </div>
                        <p className='text-primary-700 sm:text-2xl text-xs hasToman'>{formatCurrency(250000)}</p>
                    </div>
                    <div className="flex items-center sm:gap-6 gap-4 sm:max-w-64 max-w-52 w-full">
                        <button className="centerOfParent bg-primary-500 p-4 sm:w-[60px] w-11 sm:h-12 h-8 rounded-md"><Cart /></button>
                        <Link href='' className='sm:text-base text-xs sm:h-12 h-8 flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded border-secondary-500 sm:border-[1.5px] border text-secondary-500 centerOfParent'>مشاهده</Link>
                    </div>
                </div>
                {withLabel && <div className="absolute centerOfParent w-[136px] -rotate-45 px-[11px] py-[7px] bg-red-200 -left-9 top-3 sm:text-lg text-xs text-red-950">20%</div>}
                <div className="absolute right-1 top-1 centerOfParent w-10 h-10 p-1"><English /></div>
            </div>
        </>
    );
};

export default Card;
