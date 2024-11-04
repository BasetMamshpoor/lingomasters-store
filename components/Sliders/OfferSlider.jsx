import { Navigation, Pagination, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css/navigation'
import 'swiper/css';
import Link from 'next/link';
import Card from '../Card';

import Left from '@icons/arrow-left.svg';
import { Skeleton } from '@nextui-org/react';

const Slider = ({ data, to }) => {
    return (
        <>
            <div className="slider relative lg:mb-[140px] sm:mb-20 mb-[60px]">
                <div className="max-w-[1280px] w-full mx-auto lg:rounded-lg lg:py-16 sm:pb-16 pb-8 lg:pr-0 pr-1 bg-gradient-to-l from-[#2B49A2E5] to-[#597EECCC]">
                    <div dir='rtl' className='w-full flex items-center lg:flex-row flex-col lg:gap-0 gap-4'>

                        <div className='lg:w-[311px] w-full flex-shrink-0 pt-6 flex flex-col lg:gap-0 gap-2 justify-between items-center'>
                            <div className="lg:w-[247px] sm:[328px] w-[156px] lg:h-24 sm:h-12 h-9 centerOfParent rounded-b-2xl bg-primary-50 absolute top-0">
                                <span className='text-primary-950 lg:text-2xl sm:text-base text-sm font-semibold'>تخفیف‌ها</span>
                            </div>
                            <div className="w-full sm:px-8 px-4 flex items-center sm:py-4 pt-5 justify-between lg:flex-col gap-1 text-white lg:h-48">
                                <p className='sm:text-2xl text-sm'>پیشنهاد لینگومسترز</p>
                                <Link href={to || '/'} className='flex items-center gap-2 sm:text-xl text-sm'>مشاهده همه <span><Left className='sm:w-6 sm:h-6 w-4 h-4 fill-white' /></span></Link>
                            </div>
                        </div>

                        <div className="w-full overflow-hidden">
                            <Swiper
                                modules={[Navigation, Pagination, A11y]}
                                navigation
                                spaceBetween={10}
                                centeredSlides={false}
                                breakpoints={{
                                    0: {
                                        slidesPerView: 0.8,
                                    },
                                    300: {
                                        slidesPerView: 1.2,
                                    },
                                    319: {
                                        slidesPerView: 1.25,
                                    },
                                    400: {
                                        slidesPerView: 1.5,
                                    },
                                    460: {
                                        slidesPerView: 1.8,
                                    },
                                    500: {
                                        slidesPerView: 2,
                                    },
                                    570: {
                                        slidesPerView: 2.3,
                                    },
                                    640: {
                                        slidesPerView: 2.1,
                                    },
                                    700: {
                                        slidesPerView: 2.3,
                                    },
                                    768: {
                                        slidesPerView: 2.5,
                                    },
                                    825: {
                                        slidesPerView: 2.7,
                                    },
                                    910: {
                                        slidesPerView: 3,
                                    },
                                    975: {
                                        slidesPerView: 3.2,
                                    },
                                    1024: {
                                        slidesPerView: 2.2,
                                    },
                                    1080: {
                                        slidesPerView: 2.5,
                                    },
                                    1160: {
                                        slidesPerView: 2.7,
                                    },
                                    1230: {
                                        slidesPerView: 3,
                                    },
                                    1270: {
                                        slidesPerView: 3.1,
                                    },
                                }}
                            >
                                {!data ? [...Array(5)].map((_, i) => {
                                    return (
                                        <SwiperSlide key={i} dir='ltr' className={`relative select-none overflow-hidden flex flex-col items-stretch sm:gap-3 gap-4 sm:max-w-[302px] w-full h-[405px] sm:h-[528px] flex-shrink-0 rounded-lg md:p-6 p-4 bg-white`}>
                                            <Skeleton className="sm:max-w-[254px] max-w-[210px] w-full sm:h-[250px] h-[200px] flex-shrink-0 rounded-lg mix-blend-darken" />
                                            <div className="grow flex flex-col gap-4 mt-4">
                                                <Skeleton className='rounded w-1/2 h-6 self-end' />
                                                <Skeleton className='rounded w-1/4 h-6' />
                                                <div className="flex items-center sm:gap-6 gap-4 sm:max-w-64 max-w-52 w-full">
                                                    <Skeleton className="p-4 sm:w-[60px] w-11 sm:h-12 h-8 rounded-md" />
                                                    <Skeleton className='sm:text-base text-xs sm:h-12 h-8 flex-[1_0_0] sm:px-6 px-4 sm:py-4 py-2 rounded ' />
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    )
                                })
                                    : data.map(p => <SwiperSlide key={p.id}>
                                        <Card data={p} />
                                    </SwiperSlide>)}

                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;