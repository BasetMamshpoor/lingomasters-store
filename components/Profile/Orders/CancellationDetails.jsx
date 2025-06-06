import React from 'react';
import Image from "next/image";
import Elements from "@icons/elements.svg";
import Download from "@icons/download.svg";

const CancellationDetails = () => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex flex-col pb-6 border-b border-gray-200 w-full gap-6 ">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-2 w-full">
                        <div className="flex items-center gap-4">
                            <Image src="/images/product.png" alt="/" width={100} height={100}/>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-bold">کتاب طلسم مکالمه <span className="font-medium">( پکیج ۵ تایی)</span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                        <p className="text-md">کتاب چاپی</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-xs text-natural_gray-900 ">تعداد:</p>
                                    <p className="text-sm text-natural_gray-950 font-medium">1 عدد</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2">
                                <p className="text-xs">مبلغ مرسوله:</p>
                                <p className="text-xs lg:text-sm hasToman text-success-700">{(20000)?.toLocaleString()}</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-4">
                    <div className="flex items-center justify-between ">
                        <p className="text-xs text-natural_gray-900">تاریخ ثبت سفارش:</p>
                        <p className="text-xs md:text-base">{new Date().toLocaleString('fa-Ir', {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">کد پیگیری سفارش :</p>
                        <p className="text-xs md:text-base">124879653</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">شماره موبایل تحویل گیرنده :</p>
                        <p className="text-xs md:text-base">124879653</p>
                    </div>
                    <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
                        <p className="text-xs text-natural_gray-900 whitespace-nowrap">آدرس :</p>
                        <div className="flex w-full justify-end">
                            <p className="text-xs md:text-base">تهران ، میدان دانشجو ، خیابان سرو ، کوچه بهشت ، پلاک 56
                                ،
                                طبقه 12، واحد 34</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">روش پرداخت:</p>
                        <p className="text-xs md:text-base">کیف پول</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">هزینه ارسال پست :</p>
                        <p className="text-xs md:text-base  hasToman">{(400000)?.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">مبلغ نهایی:</p>
                        <p className="text-xs md:text-base text-success-700 hasToman">{(260000)?.toLocaleString()}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-base font-bold text-natural_gray-900">اطلاعات لغو :</p>
                        <p className="text-xs md:text-base">-</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">تاریخ لغو:</p>
                        <p className="text-xs md:text-base">{new Date().toLocaleString(`fa-Ir`, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">کد پیگیری لغو مرسوله :</p>
                        <p className="text-xs md:text-base">-</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900"> لغو شده توسط:</p>
                        <p className="text-xs md:text-base">کاربر</p>
                        {/*<p className="text-xs md:text-base">سیستم</p>*/}
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900"> هزینه لغو مرسوله:</p>
                        <p className="text-xs md:text-base hasToman">{(40000)?.toLocaleString()}</p>
                        {/*<p className="text-xs md:text-base hasToman">رایگان</p>*/}
                    </div>
                </div>
            </div>
        </>
    );
};

export default CancellationDetails;