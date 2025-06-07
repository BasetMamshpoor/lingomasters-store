import React from 'react';
import Image from "next/image";
import Chevron from "@icons/arrow-left.svg"
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "@/components/Profile/Dashboard/Slider";

const Dashboard = () => {
    const data = [
        {
            id: "1",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "250000",
            discount: "20",
            discount_top: "1"
        },
        {
            id: "2",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "300000",
            discount: "50",
            discount_top: "1"
        },
        {
            id: "3",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "350000",
            discount: "33",
            discount_top: "1"
        },
        {
            id: "4",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "350000",
            discount: "0",

            discount_top: "1"
        },
        {
            id: "6",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "350000",
            discount: "78",
            discount_top: "1"
        },
        {
            id: "7",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "350000",
            discount: "22",
            discount_top: "1"
        },
        {
            id: "8",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "350000",
            discount: "55",
            discount_top: "1"
        },
        {
            id: "9",
            image: "/images/cards-dashboard.png",
            title: "طلسم مکالمه",
            type: "چاپی",
            price: "350000",
            discount: "58",
            discount_top: "1"
        },
    ]
    return (
        <>
            <div className="flex flex-col gap-20 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <p className="text-sm md:text-base lg:text-lg text-primary-950 font-bold">سفارشات من</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <div className="flex flex-col justify-between gap-4 p-4 bg-natural_gray-100 rounded-xl">
                            <div className="flex items-center justify-between">
                                <p className="text-natural_gray-950 text-xs md:text-sm lg:text-base font-bold">سفارشات
                                    جاری</p>
                                <p className="text-xs md:text-sm text-natural_gray-950">2</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/images/english-book.png" alt="small" width={100} height={100}
                                           className="w-16 h-16"/>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs lg:text-sm">کتاب مکالمه و گرامر</p>
                                            <div
                                                className="flex items-center justify-center bg-primary-50 px-2 py-1 rounded-xl text-xs">کتاب
                                                چاپی
                                            </div>
                                        </div>
                                        <p className="text-xs text-natural_gray-800">{new Date().toLocaleString('fa-Ir', {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                    </div>
                                </div>
                                <Link href="/"><Chevron/></Link>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/images/english-book.png" alt="small" width={100} height={100}
                                           className="w-16 h-16"/>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs lg:text-sm">کتاب مکالمه و گرامر</p>
                                            <div
                                                className="flex items-center justify-center bg-primary-50 px-2 py-1 rounded-xl text-xs">کتاب
                                                چاپی
                                            </div>
                                        </div>
                                        <p className="text-xs text-natural_gray-800">{new Date().toLocaleString('fa-Ir', {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                    </div>
                                </div>
                                <Link href="/"><Chevron/></Link>
                            </div>
                            <Link href="/" className="flex items-center justify-center gap-2 ">
                                <p className="text-xs text-primary-500">مشاهده همه</p>
                                <Chevron className="w-5 h-5 fill-primary-500"/>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between gap-4 p-4 bg-natural_gray-100 rounded-xl">
                            <div className="flex items-center justify-between">
                                <p className="text-natural_gray-950 text-xs md:text-sm lg:text-base font-bold">سفارشات
                                    تحویل شده</p>
                                <p className="text-xs md:text-sm text-natural_gray-950">2</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/images/english-book.png" alt="small" width={100} height={100}
                                           className="w-16 h-16"/>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs lg:text-sm">کتاب مکالمه و گرامر</p>
                                            <div
                                                className="flex items-center justify-center bg-primary-50 px-2 py-1 rounded-xl text-xs">کتاب
                                                چاپی
                                            </div>
                                        </div>
                                        <p className="text-xs text-natural_gray-800">{new Date().toLocaleString('fa-Ir', {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                    </div>
                                </div>
                                <Link href="/"><Chevron/></Link>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-2">
                                    <Image src="/images/english-book.png" alt="small" width={100} height={100}
                                           className="w-16 h-16"/>
                                    <div className="flex flex-col gap-2">
                                        <div className="flex items-center gap-1">
                                            <p className="text-xs lg:text-sm">کتاب مکالمه و گرامر</p>
                                            <div
                                                className="flex items-center justify-center bg-primary-50 px-2 py-1 rounded-xl text-xs">کتاب
                                                چاپی
                                            </div>
                                        </div>
                                        <p className="text-xs text-natural_gray-800">{new Date().toLocaleString('fa-Ir', {
                                            year: "numeric",
                                            month: "long",
                                            day: "numeric",
                                        })}</p>
                                    </div>
                                </div>
                                <Link href="/"><Chevron/></Link>
                            </div>
                            <Link href="/" className="flex items-center justify-center gap-2 ">
                                <p className="text-xs text-primary-500">مشاهده همه</p>
                                <Chevron className="w-5 h-5 fill-primary-500"/>
                            </Link>
                        </div>
                        <div className="flex flex-col justify-between gap-4 p-4 bg-natural_gray-100 rounded-xl">
                            <div className="flex items-center justify-between">
                                <p className="text-natural_gray-950 text-xs md:text-sm lg:text-base font-bold">سفارشات
                                    مرجوع شده</p>
                                <p className="text-xs md:text-sm text-natural_gray-950">0</p>
                            </div>
                            <div className="flex items-center justify-between">
                                {/*<div className="flex items-center gap-2">*/}
                                {/*    <Image src="/images/english-book.png" alt="small" width={100}  height={100} className="w-16 h-16"/>*/}
                                {/*    <div className="flex flex-col gap-2">*/}
                                {/*        <div className="flex items-center gap-1">*/}
                                {/*            <p className="text-xs lg:text-sm">کتاب مکالمه و گرامر</p>*/}
                                {/*            <div className="flex items-center justify-center bg-primary-50 px-2 py-1 rounded-xl text-xs">کتاب چاپی</div>*/}
                                {/*        </div>*/}
                                {/*        <p className="text-xs text-natural_gray-800">{new Date().toLocaleString('fa-Ir',{*/}
                                {/*            year: "numeric",*/}
                                {/*            month: "long",*/}
                                {/*            day: "numeric",*/}
                                {/*        }) }</p>*/}
                                {/*    </div>*/}
                                {/*</div>*/}
                                {/*<Link href="/"><Chevron /></Link>*/}
                            </div>
                            <Link href="/" className="flex  justify-center gap-2 ">
                                <p className="text-xs text-primary-500">مشاهده همه</p>
                                <Chevron className="w-5 h-5 fill-primary-500"/>
                            </Link>
                        </div>
                    </div>
                </div>
                <Slider data={data} />
            </div>
        </>
    );
};

export default Dashboard;