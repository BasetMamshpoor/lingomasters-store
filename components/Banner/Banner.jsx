import Cart from '@icons/cart.svg';
import formatCurrency from "@/helpers/formatCurrency";
import { Skeleton } from "@heroui/react";

const Banner = ({ withTag = true, data }) => {
    return (
        <>
            {!data ?
                <div className="flex items-center ww-full sm:mx-0 mx-2">
                    <div dir='rtl' className="bg-white lg:p-6 py-4 px-2 flex flex-col lg:gap-8 gap-4 lg:h-[236px] h-[156px] w-full sm:grow-0 grow">
                        <div className={`flex items-center gap-1`}>
                            <Skeleton className='w-1/2 h-4' />
                        </div>
                        <div className="centerOfParent grow">
                            <Skeleton className='w-1/3 h-4' />
                        </div>
                        <Skeleton className='lg:h-12 h-8 w-full rounded  centerOfParent gap-1 text-white lg:p-4 p-2 pr-3' />
                    </div>
                    <Skeleton className="centerOfParent sm:grow flex-shrink-0 lg:w-[302px] lg:h-[300px] sm:w-[165px] w-[156] h-[168px]" />
                </div>
                : <div className="flex items-center ww-full sm:mx-0 mx-2">
                    <div dir='rtl' className="transition-all hover:border-primary-600 border-l border-y border-white bg-primary-50 lg:p-6 py-4 px-2 flex flex-col lg:gap-8 gap-4 lg:h-[236px] h-[156px] w-full sm:grow-0 grow rounded-l-lg">
                        <div className={`flex items-center justify-${withTag ? 'between' : 'center'} gap-1`}>
                            <p className='line-clamp-1 lg:text-xl text-sm leading-6'>{data?.title}</p>
                            {withTag && data?.category && <span className="lg:px-3 px-2.5 lg:py-1 py-0 lg:text-base text-[10px] centerOfParent h-8 rounded-[20px] bg-natural_gray-200 text-natural_gray-950 font-semibold">{data.category}</span>}
                        </div>
                        <div className="centerOfParent grow">
                            <p className='text-green-600 lg:text-2xl text-xs hasToman'>{formatCurrency(data?.price)}</p>
                        </div>
                        <button className='effect-2 lg:h-12 h-8 w-full bg-primary-600 rounded lg:text-base text-xs centerOfParent gap-1 text-white lg:p-4 p-2 pr-3'><Cart className='fill-white' /> افزودن به سبد خرید</button>
                    </div>
                    <div className="centerOfParent sm:grow flex-shrink-0 lg:w-[302px] lg:h-[300px] sm:w-[165px] w-[156] h-[168px]">
                        <img src={data?.images} className='flex-shrink-0 w-full h-full object-contain' />
                    </div>
                </div>}
        </>
    );
};

export default Banner;