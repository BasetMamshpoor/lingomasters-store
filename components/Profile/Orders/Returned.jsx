import React from 'react';
import Chevron from "@icons/arrow-left.svg";
import OrderItem from "@/components/Profile/Orders/OrderItem";
import formatCurrency from "@/helpers/formatCurrency";

const Returned = ({
                      created_at,
                      tracking_code,
                      total_price,
                      returned_date,
                      returned_reason,
                      items,
                      id, returned_status,
                      onSelectItem
                  }) => {
    return (
        <>
            <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                <div className="flex flex-col pb-6 border-b border-gray-200 w-full gap-4">
                    <div className="flex w-full">
                        <div className="flex flex-col gap-4 flex-grow">
                            <div className="flex items-center gap-2">
                                <p className="text-xs">وضعیت:</p>
                                {returned_status === "pending" ? <div
                                    className="flex items-center justify-center px-2 py-1  rounded-xl text-xs  bg-warning-50 text-warning-700">
                                    درحال بررسی
                                </div> : <div
                                    className="flex items-center justify-center px-2 py-1 bg-rose-50 text-rose-700 rounded-xl text-xs whitespace-nowrap">مرجوع
                                    شده</div>}
                            </div>
                            <div
                                className="flex flex-wrap gap-4">
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
                                    <p className="text-xs lg:text-sm text-success-700 hasToman">{formatCurrency(total_price)}</p>
                                </div>
                                {returned_date && <div className="flex items-center gap-2 ">
                                    <p className="text-xs">تاریخ مرجوعی:</p>
                                    <p className="text-xs lg:text-sm">{new Date(returned_date).toLocaleString(`fa-Ir`, {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric',
                                    })}</p>
                                </div>}
                                {returned_reason && <div className="flex items-center gap-2">
                                    <p className="text-xs">دلیل مرجوعی :</p>
                                    <p className="text-xs lg:text-sm">{returned_reason}</p>
                                </div>}
                            </div>
                        </div>
                        <div onClick={() => onSelectItem(id)}
                             className="flex justify-end gap-1 cursor-pointer">
                            <p className="text-sm text-primary-700 items-center whitespace-nowrap">جزئیات سفارش</p>
                            <Chevron className="h-5 w-5 fill-primary-700"/>
                        </div>
                    </div>
                </div>
                {
                    items?.map(e => <OrderItem key={e.id} {...e} />)
                }
            </div>
        </>
    )
        ;
};

export default Returned;