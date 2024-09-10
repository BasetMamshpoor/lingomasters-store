import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import Card from '../Card'; // Import your Card component
import Link from 'next/link';

const Slider = ({ title, icon}) => {

    return (
        <>
            <div className="my-12" dir='rtl'>
                <div className="max-w-[1280px] w-full mx-auto flex flex-col gap-4">
                    <div className="flex items-center justify-between px-4">
                        <div className="centerOfParent gap-4">
                            <div className="centerOfParent">{icon}</div>
                            <p className='sm:text-xl font-semibold'>{title}</p>
                        </div>
                        <Link href='' className='centerOfParent sm:w-[140px] w-[95px] sm:h-12 h-8 sm:text-base text-xs sm:px-6 px-4 sm:py-4 py-2 rounded bg-primary-600 text-white whitespace-nowrap'>مشاهده همه</Link>
                    </div>
                    <div className="w-full relative slider">
                        <Swiper
                            modules={[Navigation]}
                            spaceBetween={0}
                            slidesPerView={1.2} // Start with 1.5 slides for mobile
                            centeredSlides={false}
                            loop={true}
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
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                            <SwiperSlide>
                                <Card />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Slider;
