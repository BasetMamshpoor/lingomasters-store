import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from '../Card';
import Link from 'next/link';
import { Skeleton } from "@nextui-org/react";

const Slider = ({ title, icon, loop, to, edu, data }) => {

    return (
        <>
            <div className="my-12" dir='rtl'>
                <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-4">
                    <div className="flex items-center justify-between px-4">
                        <div className="centerOfParent gap-4">
                            <div className="centerOfParent">{icon}</div>
                            <p className='sm:text-xl font-semibold'>{title}</p>
                        </div>
                        <Link href={to} className='centerOfParent sm:w-[140px] w-[95px] sm:h-12 h-8 sm:text-base text-xs sm:px-6 px-4 sm:py-4 py-2 rounded bg-primary-600 text-white whitespace-nowrap'>مشاهده همه</Link>
                    </div>
                    <div className="w-full relative slider">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={10}
                            slidesPerView={1.2} // Start with 1.5 slides for mobile
                            centeredSlides={false}
                            loop={loop ? true : false}
                            navigation
                            breakpoints={{
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
                                1080: {
                                    slidesPerView: 3.5,
                                },
                                1160: {
                                    slidesPerView: 3.8,
                                },
                                1230: {
                                    slidesPerView: 4.05,
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
                                : data?.map(p => <SwiperSlide key={p.id}>
                                    <Card data={p} withTag={edu ? false : true} solid={edu ? true : false} offRed={edu ? true : false} edu={edu} withLabel={edu ? false : true} />
                                </SwiperSlide>)}
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
