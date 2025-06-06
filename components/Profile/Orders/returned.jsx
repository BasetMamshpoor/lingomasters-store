import React from 'react';
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg";
import Image from "next/image";
import Elements from "@icons/elements.svg";
import {Button} from "@heroui/react";
import Download from "@icons/download.svg"
const Returned = () => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex flex-col pb-6 border-b border-gray-200 w-full gap-4">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-4 flex-grow">
                            <div className="flex items-center gap-2">
                                <p className="text-xs">وضعیت:</p>
                                <div className="flex items-center justify-center px-2 py-1 bg-rose-50 rounded-xl text-xs text-rose-700">
                                    لغو شده
                                </div>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-xs">تاریخ ثبت سفارش:</p>
                                    <p className="text-xs lg:text-sm">{new Date().toLocaleString('fa-Ir', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="text-xs">کد سفارش :</p>
                                    <p className="text-xs lg:text-sm">124879653</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs">قیمت :</p>
                                    <p className="text-xs lg:text-sm text-success-700 hasToman">{(260000)?.toLocaleString()}</p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="text-xs">تاریخ مرجوعی:</p>
                                    <p className="text-xs lg:text-sm">{new Date().toLocaleString(`fa-Ir`, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="text-xs"> کد پیگیری مرجوعی:</p>
                                    <p className="text-xs lg:text-sm">-</p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="text-xs">مبلغ مرجوعی:</p>
                                    <p className="text-xs lg:text-sm">{(20000)?.toLocaleString()}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col gap-8">
                            <Link href="/" className="flex justify-end gap-1">
                                <p className="text-sm text-primary-700 items-center whitespace-nowrap">جزئیات سفارش</p>
                                <Chevron className="h-5 w-5 fill-primary-700"/>
                            </Link>
                            <button
                                className="hidden px-4 py-2 md:flex items-center justify-center border border-secondary-500 rounded-md text-secondary-500 text-xs md:text-sm lg:text-base ">
                                از مرجوع کردن کالا منصرف شدم
                            </button>
                        </div>
                    </div>
                    <button
                        className="px-4 py-2 flex md:hidden items-center justify-center border border-secondary-500 rounded-md text-secondary-500 text-xs md:text-sm lg:text-base ">
                        از مرجوع کردن کالا منصرف شدم
                    </button>
                </div>
                <div className="flex  flex-col md:flex-row  justify-between gap-6">
                    <div className="flex items-center gap-4">
                        <Image src="/images/product.png" alt="/" width={100} height={100}/>
                        <div className="flex flex-col gap-3">
                            <div className="flex flex-col gap-2">
                                <p className="text-base font-bold">کتاب طلسم مکالمه <span className="font-medium">( پکیج ۵ تایی)</span>
                                </p>
                                <div className="flex items-center gap-4">
                                    <Elements/>
                                    <p className="text-md">کتاب چاپی</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <p className="text-xs text-natural_gray-900 ">دلیل مرجوعی:</p>
                                <p className="text-sm text-natural_gray-950 font-medium">کتاب پاره بود</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center px-4 py-5 gap-4 border border-dashed border-natural_gray-300 rounded-xl">
                        <div className="flex items-center gap-2 flex-1">
                            <div className="flex items-center justify-center rounded-full bg-natural_gray-50 w-8 h-8">
                                <Download className="w-4 h-4"/>
                            </div>
                            <div className="flex flex-col">
                                <p className="text-sm text-natural_gray-950 font-medium">دانلود ویدیو مرجوعی</p>
                                <p className="text-xs text-gray-400">10MB max</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-center px-4 py-2 bg-primary-950 rounded-md text-white text-sm font-medium">دانلود</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Returned;