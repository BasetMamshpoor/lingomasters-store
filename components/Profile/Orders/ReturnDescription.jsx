import React from 'react';
import InformationOrder from "@/components/Profile/Orders/InformationOrder";
import useGetRequest from "@/hooks/useGetRequest";
import {Spinner} from "@heroui/react";
import OrderItem from "@/components/Profile/Orders/OrderItem";

const ReturnDescription = ({orderId}) => {
    const [data, , , , , isLoading] = useGetRequest(`/buyer/order/show/${orderId}`)

    return (
        <>
            {isLoading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                    <div className="flex flex-col pb-6 border-b border-gray-200 w-full gap-6 ">
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
                        {data.items?.map(e => <OrderItem key={e.id} {...e} />)}
                    </div>
                    <div className="flex flex-col gap-4">
                        <InformationOrder {...data} />
                        <p className="text-base font-bold text-natural_gray-900">اطلاعات مرجوعی :</p>
                        {data.date && <div className="flex items-center justify-between">
                            <p className="text-xs text-natural_gray-900">تاریخ مرجوعی:</p>
                            <p className="text-xs md:text-base">{new Date(data.date).toLocaleString(`fa-Ir`, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</p>
                        </div>}
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-natural_gray-900"> دلیل مرجوعی :</p>
                            <p className="text-xs md:text-base">{data.reason}</p>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default ReturnDescription;