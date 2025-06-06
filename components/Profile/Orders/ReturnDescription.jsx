import React from 'react';
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg";
import Image from "next/image";
import Elements from "@icons/elements.svg";
import Download from "@icons/download.svg";

const ReturnDescription = () => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="hidden md:flex flex-col pb-6 border-b border-gray-200 w-full gap-6 ">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-xs">وضعیت:</p>
                        <div
                            className="flex items-center justify-center px-2 py-1 bg-warning-50 rounded-xl text-xs text-warning-700">در
                            در انتظار برسی
                        </div>
                        {/*<div*/}
                        {/*    className="flex items-center justify-center px-2 py-1 bg-rose-50 rounded-xl text-xs text-rose-700">در*/}
                        {/*    مرجوع شده*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex items-center justify-between w-full">
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
                            <button
                                className="px-4 py-2 flex items-center justify-center border border-secondary-500 rounded-md text-secondary-500 text-xs md:text-sm lg:text-base ">
                                از مرجوع کردن کالا منصرف شدم
                            </button>
                        </div>
                    </div>
                </div>
                <div className="md:hidden flex flex-col pb-6 border-b border-gray-200 w-full gap-6 ">
                    <div className="flex justify-between items-center w-full">
                        <p className="text-xs">وضعیت:</p>
                        <div
                            className="flex items-center justify-center px-2 py-1 bg-warning-50 rounded-xl text-xs text-warning-700">در
                            در انتظار برسی
                        </div>
                        {/*<div*/}
                        {/*    className="flex items-center justify-center px-2 py-1 bg-rose-50 rounded-xl text-xs text-rose-700">در*/}
                        {/*    مرجوع شده*/}
                        {/*</div>*/}
                    </div>
                    <div className="flex flex-col gap-4 w-full">
                        <div className="flex items-center gap-4">
                            <Image src="/images/product.png" alt="/" width={100} height={100}/>
                            <div className="flex flex-col gap-3">
                                <div className="flex flex-col gap-2">
                                    <p className="text-base font-bold">کتاب طلسم مکالمه <span className="font-medium">( پکیج ۵ تایی)</span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                        <p className="text-xs">کتاب چاپی</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4">
                                    <p className="text-xs text-natural_gray-900 ">تعداد:</p>
                                    <p className="text-xs text-natural_gray-950 font-medium">1 عدد</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-sm">مبلغ مرسوله:</p>
                                    <p className="text-sm lg:text-sm hasToman text-success-700">{(20000)?.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                        <button
                            className="px-4 py-2 flex items-center justify-center border border-secondary-500 rounded-md text-secondary-500 text-xs md:text-sm lg:text-base ">
                            از مرجوع کردن کالا منصرف شدم
                        </button>
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
                        <p className="text-xs text-natural_gray-900">روش پرداخت :</p>
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
                        <p className="text-base font-bold text-natural_gray-900">اطلاعات مرجوعی :</p>
                        <p className="text-xs md:text-base"></p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">تاریخ مرجوعی:</p>
                        <p className="text-xs md:text-base">{new Date().toLocaleString(`fa-Ir`, {
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                        })}</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900">کد پیگیری مرجوعی :</p>
                        <p className="text-xs md:text-base">-</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900"> مبلغ مرجوعی :</p>
                        <p className="text-xs md:text-base">-</p>
                    </div>
                    <div className="flex items-center justify-between">
                        <p className="text-xs text-natural_gray-900"> دلیل مرجوعی :</p>
                        <p className="text-xs md:text-base">کتاب پاره بود</p>
                    </div>
                    <div className="flex flex-col md:flex-row md:items-center  gap-2 justify-between">
                        <p className="text-xs text-natural_gray-900 whitespace-nowrap"> دانلود ویدیو مرجوعی :</p>
                        <div className="flex justify-end w-full">
                            <div
                                className="flex items-center p-2 md:px-3 md:py-4 gap-4 border border-dashed border-natural_gray-300 rounded-xl w-fit">
                                <div className="flex items-center gap-2 md:pl-8">
                                    <div
                                        className="flex items-center justify-center rounded-full bg-natural_gray-50 w-8 h-8">
                                        <Download className="w-4 h-4"/>
                                    </div>
                                    <div className="flex flex-col">
                                        <p className="text-xs md:text-sm text-natural_gray-950 font-medium">دانلود ویدیو
                                            مرجوعی</p>
                                        <p className="text-xs text-gray-400">10MB max</p>
                                    </div>
                                </div>
                                <button
                                    className="flex items-center justify-center px-4 py-2 bg-primary-950 rounded-md text-white text-xs md:text-sm font-medium">دانلود
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ReturnDescription;