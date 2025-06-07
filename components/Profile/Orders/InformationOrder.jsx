import React from 'react';
import formatCurrency from "@/helpers/formatCurrency";

const InformationOrder = ({
                              created_at,
                              tracking_code,
                              mobile,
                              address,
                              payment_method,
                              sending_method,
                              sending_price,
                              total_price,delivery_date
                          }) => {
    return (
        <>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">تاریخ ثبت سفارش :</p>
                    <p className="text-xs md:text-sm">{new Date(created_at).toLocaleDateString('fa-IR', {
                        year: 'numeric',
                        day: '2-digit',
                        month: 'long',
                        weekday: 'long'
                    })}</p>
                </div>
                {delivery_date && <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">تاریخ تحویل :</p>
                    <p className="text-xs md:text-sm">{new Date(delivery_date).toLocaleDateString('fa-IR', {
                        year: 'numeric',
                        day: '2-digit',
                        month: 'long',
                        weekday: 'long'
                    })}</p>
                </div>}
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">کد پیگیری سفارش :</p>
                    <p className="text-xs md:text-sm">{tracking_code}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">شماره موبایل تحویل گیرنده :</p>
                    <p className="text-xs md:text-sm">{mobile}</p>
                </div>
                <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
                    <p className="text-xs text-natural_gray-900 whitespace-nowrap">آدرس :</p>
                    <div className="flex w-full justify-end">
                        <p className="text-xs md:text-base">{address}</p>
                    </div>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">روش پرداخت :</p>
                    <p className="text-xs md:text-sm">{payment_method}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">روش ارسال :</p>
                    <p className="text-xs md:text-sm">{sending_method}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">هزینه ارسال :</p>
                    <p className="text-xs md:text-sm hasToman">{sending_price}</p>
                </div>
                <div className="flex items-center justify-between">
                    <p className="text-xs md:text-sm text-natural_gray-900">مبلغ نهایی :</p>
                    <p className="text-xs md:text-sm hasToman text-success-800">{formatCurrency(total_price)}</p>
                </div>
            </div>
        </>
    );
};

export default InformationOrder;