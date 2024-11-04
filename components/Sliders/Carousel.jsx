// import Swiper core and required modules
import { Navigation, Pagination, A11y, Autoplay } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import Left from '@icons/left.svg';
import Right from '@icons/right.svg';

import Image from 'next/image';
import Link from 'next/link';
import { Skeleton } from "@nextui-org/react";

const Carousel = ({ data }) => {
    return (
        <>
            <div className="relative mt-4 lg:mb-[140px] sm:mb-20 mb-[60px]" dir='ltr'>
                <Swiper
                    modules={[Navigation, Pagination, A11y, Autoplay]}
                    slidesPerView={1.5}
                    centeredSlides={true}
                    spaceBetween={30}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        // disableOnInteraction: true,
                    }}
                    navigation={{
                        nextEl: '.custom-next', // Custom next button
                        prevEl: '.custom-prev', // Custom previous button
                    }}
                    pagination={{
                        clickable: true,
                        el: '.swiper-pagination',
                        bulletClass: 'custom-bullet',
                        bulletActiveClass: 'custom-bullet-active',
                    }}
                >
                    {!data ? [...Array(4)].map((_, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Skeleton className="w-full h-full min-h-[537px]" />
                            </SwiperSlide>
                        )
                    })
                        : data.map(s => {
                            return (
                                <SwiperSlide key={s.id}>
                                    <Link href={s.link}>
                                        <div className="w-full h-full max-h-[537px]">
                                            <picture>
                                                <source
                                                    srcSet={s.mobil_image || "/images/Slider/sm.jpg"}
                                                    media="(max-width: 639px)" />
                                                <source
                                                    srcSet={s.tablet_image || "/images/Slider/md.jpg"}
                                                    media="(min-width: 640px) and (max-width: 1023px)" />
                                                <source
                                                    srcSet={s.laptop_image || "/images/Slider/lg.jpg"}
                                                    media="(min-width: 1024px)" />
                                                <Image
                                                    src={s.laptop_image || "/images/Slider/lg.jpg"}
                                                    alt="Responsive example"
                                                    width={0}
                                                    height={0} sizes='100vw'
                                                    className='w-full h-full object-cover' />
                                            </picture>
                                        </div>
                                    </Link>
                                </SwiperSlide>
                            )
                        })}
                </Swiper>
                <div className="swiper-pagination !left-1/2 items-center justify-center !bottom-6 !-translate-x-1/2 hidden lg:flex"></div>
                <div className="hidden lg:block">
                    <div className="custom-prev absolute z-10 left-[15.3%] top-1/2 transform -translate-y-1/2 rounded-full p-2 cursor-pointer">
                        <Left />
                    </div>
                    <div className="custom-next absolute z-10 right-[15.5%] top-1/2 transform -translate-y-1/2 rounded-full p-2 cursor-pointer">
                        <Right />
                    </div>
                </div>
            </div>
        </>
    );
};

export default Carousel;