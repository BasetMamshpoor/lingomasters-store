import React, {useState} from 'react';
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg"
import Image from "next/image";
import Elements from "@icons/elements.svg"
import useGetRequest from "@/hooks/useGetRequest";
import OrderItem from "@/components/Profile/Orders/OrderItem";

const CurrentOrders = ({created_at, tracking_code, total_price, status, items, id, onSelectItem}) => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex justify-between pb-6 border-b border-gray-200 w-full ">
                    <div className="grid grid-rows-4 md:grid-cols-2 lg:flex justify-between items-center w-5/6">
                        <div className="flex items-center gap-2">
                            <p className="text-xs">وضعیت:</p>
                            <div
                                className={`flex items-center justify-center px-2 py-1 rounded-xl text-xs ${
                                    status === 'approved'
                                        ? 'bg-success-50 text-success-700'
                                        : status === 'pending'
                                            ? 'bg-warning-50 text-warning-700'
                                            : status === 'rejected'
                                                ? 'bg-error-50 text-error-700'
                                                : status === 'delivered'
                                                    ? 'bg-primary-50 text-primary-700'
                                                    : status === 'shipped'
                                                        ? 'bg-info-50 text-info-700'
                                                        : ''
                                }`}
                            >
                                {status === 'approved' && 'در حال آماده سازی'}
                                {status === 'pending' && 'در انتظار تایید فروشنده'}
                                {status === 'rejected' && 'رد شده'}
                                {status === 'shipped' && 'تحویل داده شد'}
                                {status === 'delivered' && 'ارسال شده'}
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xs">تاریخ ثبت سفارش:</p>
                            <p className="text-xs lg:text-sm">{new Date(created_at).toLocaleString('fa-Ir', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xs">کد پیگیری سفارش :</p>
                            <p className="text-xs lg:text-sm">{tracking_code}</p>
                        </div>
                        <div className="flex items-center gap-2">
                            <p className="text-xs">مبلغ :</p>
                            <p className="text-xs lg:text-sm text-success-700 hasToman">{(total_price)?.toLocaleString()}</p>
                        </div>
                    </div>
                    <div onClick={() => onSelectItem(id)} className="flex justify-end gap-1 cursor-pointer">
                        <p className="text-sm text-primary-700 items-center whitespace-nowrap">جزئیات سفارش</p>
                        <Chevron className="h-5 w-5 fill-primary-700"/>
                    </div>
                </div>
                <div className="flex flex-col gap-6">
                    {items?.map(f => <OrderItem key={f.id} {...f} />)}
                </div>
            </div>
        </>
    );
};

export default CurrentOrders;