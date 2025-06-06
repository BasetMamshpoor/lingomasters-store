import React from 'react';
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg"
import Image from "next/image";
import Elements from "@icons/elements.svg"
const CurrentOrders = () => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex justify-between pb-6 border-b border-gray-200 w-full ">
                    <div className="grid grid-rows-4 md:grid-cols-2 lg:flex justify-between items-center w-5/6">
                        <div className="flex items-center gap-2">
                            <p className="text-xs">وضعیت:</p>
                            <div
                                className="flex items-center justify-center px-2 py-1 bg-warning-50 rounded-xl text-xs text-warning-700">در
                                انتظار تحویل
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xs">تاریخ ثبت سفارش:</p>
                            <p className="text-xs lg:text-sm">{new Date().toLocaleString('fa-Ir',{
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xs">کد پیگیری سفارش :</p>
                            <p className="text-xs lg:text-sm">124879653</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xs">مبلغ :</p>
                            <p className="text-xs lg:text-sm text-success-700 hasToman">{(260000)?.toLocaleString()}</p>
                        </div>
                    </div>
                    <Link href="/" className="flex justify-end gap-1">
                        <p className="text-sm text-primary-700 items-center whitespace-nowrap">جزئیات سفارش</p>
                        <Chevron className="h-5 w-5 fill-primary-700" />
                    </Link>
                </div>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-4">
                        <Image src="/images/product.png" alt="/" width={100} height={100}/>
                        <div className="flex flex-col gap-2">
                            <p className="text-base font-bold">کتاب طلسم مکالمه <span className="font-medium">( پکیج ۵ تایی)</span></p>
                            <div className="flex items-center gap-4">
                                <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                <p className="text-md">کتاب چاپی</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Image src="/images/product.png" alt="/" width={100} height={100}/>
                        <div className="flex flex-col gap-2">
                            <p className="text-base font-bold">کتاب طلسم مکالمه <span className="font-medium">( پکیج ۵ تایی)</span></p>
                            <div className="flex items-center gap-4">
                                <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                <p className="text-md">کتاب چاپی</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CurrentOrders;