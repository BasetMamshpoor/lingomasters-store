import addComma from "@/helpers/addComma";
import Image from "next/image";

import Cart from '@icons/cart.svg';

const Banner = ({ withTag = true }) => {
    return (
        <>
            <div className="flex items-center ww-full sm:mx-0 mx-2">
                <div dir='rtl' className="bg-primary-50 lg:p-6 py-4 px-2 flex flex-col lg:gap-8 gap-4 lg:h-[236px] h-[156px] w-full sm:grow-0 grow">
                    <div className={`flex items-center justify-${withTag ? 'between' : 'center'} gap-1`}>
                        <p className='line-clamp-1 lg:text-xl text-sm leading-6'>طلسم مکالمه برای یادگیری تست </p>
                        {withTag && <span className="lg:px-3 px-2.5 lg:py-1 py-0 lg:text-base text-[10px] centerOfParent h-8 rounded-[20px] bg-natural_gray-200 text-natural_gray-950 font-semibold">صوتی</span>}
                    </div>
                    <div className="text-center grow">
                        <p className='text-green-600 lg:text-2xl text-xs'>{addComma(250000)} <span className='text-sm'>تومان</span></p>
                    </div>
                    <button className='lg:h-12 h-8 w-full bg-primary-600 rounded lg:text-base text-xs centerOfParent gap-1 text-white lg:p-4 p-2 pr-3'><Cart /> افزودن به سبد خرید</button>
                </div>
                <div className="centerOfParent sm:grow flex-shrink-0 lg:w-[302px] lg:h-[300px] sm:w-[165px] w-[156] h-[168px]">
                    <img src='/images/banner.jpg' className='flex-shrink-0 w-full h-full object-contain' />
                </div>
            </div>
        </>
    );
};

export default Banner;