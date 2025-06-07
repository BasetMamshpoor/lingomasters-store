import React from 'react';
import Chevron from "@icons/arrow-left.svg";
import OrderItem from "@/components/Profile/Orders/OrderItem";

const Returned = ({created_at, tracking_code, total_price, delivery_date, items, id, onSelectItem}) => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex flex-col pb-6 border-b border-gray-200 w-full gap-4">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-4 flex-grow">
                            <div className="flex items-center gap-2">
                                <p className="text-xs">وضعیت:</p>
                                <div
                                    className="flex items-center justify-center px-2 py-1 bg-rose-50 rounded-xl text-xs text-rose-700">
                                    لغو شده
                                </div>
                            </div>
                            <div
                                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-between flex-wrap gap-4">
                                <div className="flex items-center gap-2">
                                    <p className="text-xs">تاریخ ثبت سفارش:</p>
                                    <p className="text-xs lg:text-sm">{new Date(created_at).toLocaleString('fa-Ir', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</p>
                                </div>
                                <div className="flex items-center gap-2 ">
                                    <p className="text-xs">کد سفارش :</p>
                                    <p className="text-xs lg:text-sm">{tracking_code}</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <p className="text-xs">قیمت :</p>
                                    <p className="text-xs lg:text-sm text-success-700 hasToman">{(total_price)?.toLocaleString()}</p>
                                </div>
                                {delivery_date && <div className="flex items-center gap-2 ">
                                    <p className="text-xs">تاریخ مرجوعی:</p>
                                    <p className="text-xs lg:text-sm">{new Date(delivery_date).toLocaleString(`fa-Ir`, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</p>
                                </div>}
                            </div>
                        </div>
                        <div onClick={() => onSelectItem(id)} className="flex justify-end gap-1 cursor-pointer">
                            <p className="text-sm text-primary-700 items-center whitespace-nowrap">جزئیات سفارش</p>
                            <Chevron className="h-5 w-5 fill-primary-700"/>
                        </div>
                    </div>
                </div>
                {items?.map(e => <OrderItem key={e.id} {...e} />)}
            </div>
        </>
    );
};

export default Returned;