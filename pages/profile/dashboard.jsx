import React from 'react';
import Image from "next/image";
import Chevron from "@icons/arrow-left.svg"
import Link from "next/link";
import "swiper/css";
import "swiper/css/navigation";
import Slider from "@/components/Profile/Dashboard/Slider";
import useGetRequest from "@/hooks/useGetRequest";
import Orders from "@/components/Profile/Dashboard/Orders";

const Dashboard = () => {
    const [data] = useGetRequest('/buyer/dashboard');
    return (
        <>
            <div className="flex flex-col gap-20 w-full">
                <div className="flex flex-col gap-6 w-full">
                    <p className="text-sm md:text-base lg:text-lg text-primary-950 font-bold">سفارشات من</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">
                        <Orders title="سفارشات جاری" status="pending" {...data?.pending} />
                        <Orders title="سفارشات تحویل شده" status="delivered" {...data?.delivered} />
                        <Orders title="سفارشات مرجوع شده" status="returned" {...data?.returned} />
                    </div>
                </div>
                <Slider data={data?.recently} title="مشاهدات اخیر"/>
                <Slider off title="تخفیف خورده‌ها" to="/products?discount=true"/>
                <Slider data={data?.product} to="/product" title="پکیج‌های آموزشی لینگومسترز"/>
            </div>
        </>
    );
};

export default Dashboard;