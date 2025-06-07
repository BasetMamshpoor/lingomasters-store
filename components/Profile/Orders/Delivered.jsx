import React from 'react';
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg";
import Image from "next/image";
import Elements from "@icons/elements.svg";

const Delivered = ({created_at, tracking_code, total_price, delivery_date, items, id, onSelectItem}) => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex justify-between gap-6 pb-6 border-b border-gray-200 w-full lg:gap-4">
                    <div className="flex flex-wrap gap-x-8 gap-y-4 w-full">
                        <div className="flex items-center gap-4 px-3">
                            <p className="text-xs">وضعیت:</p>
                            <div
                                className="flex items-center justify-center px-2 py-1 bg-success-50 rounded-xl text-xs text-success-700 whitespace-nowrap">در
                                انتظار تحویل
                            </div>
                        </div>
                        <div className="flex items-center gap-2 px-3">
                            <p className="text-xs">تاریخ ثبت سفارش:</p>
                            <p className="text-xs lg:text-sm">{new Date(created_at).toLocaleString('fa-IR', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</p>
                        </div>
                        <div className="flex items-center gap-2 px-3">
                            <p className="text-xs">کد پیگیری سفارش :</p>
                            <p className="text-xs lg:text-sm">{tracking_code}</p>
                        </div>
                        <div className="flex items-center gap-2 px-3">
                            <p className="text-xs">مبلغ :</p>
                            <p className="text-xs lg:text-sm text-success-700 hasToman">{(total_price)?.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center gap-2 px-3">
                            <p className="text-xs">تاریخ تحویل سفارش:</p>
                            <p className="text-xs lg:text-sm">{new Date(delivery_date).toLocaleString(`fa-IR`, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</p>
                        </div>
                    </div>
                    <div onClick={() => onSelectItem(id)} className="flex justify-end gap-1 cursor-pointer">
                        <p className="text-sm text-primary-700 items-center whitespace-nowrap">جزئیات سفارش</p>
                        <Chevron className="h-5 w-5 fill-primary-700"/>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {items.map((item, index) => (
                        <div key={item.key} className="flex items-center gap-4">
                            <Image src={item.image || "/images/product.png"} alt={item.title} width={100} height={100}/>
                            <div className="flex flex-col gap-2">
                                <p className="text-base font-bold">{item.title} <span
                                    className="font-medium">( پکیج {item.Volume_number} تایی)</span>
                                </p>
                                <div className="flex items-center gap-4">
                                    <Elements/>
                                    <p className="text-md">{item.category}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
};

export default Delivered;