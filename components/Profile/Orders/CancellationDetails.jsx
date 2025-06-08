import React from 'react';
import Image from "next/image";
import Elements from "@icons/elements.svg";
import Download from "@icons/download.svg";
import InformationOrder from "@/components/Profile/Orders/InformationOrder";
import {Spinner} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import OrderItem from "@/components/Profile/Orders/OrderItem";

const CancellationDetails = ({orderId}) => {
    const [data, , , , , isLoading] = useGetRequest(`/buyer/order/show/${orderId}`)

    return (
        <>
            {isLoading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : data &&
                <div dir="rtl" className="flex flex-col p-6 gap-6 bg-white border border-natural_gray-200 rounded-xl">
                    <div className="flex flex-col pb-6 border-b border-gray-200 w-full gap-6 ">
                        {data.items?.map(e => <OrderItem key={e.id} {...e} />)}
                    </div>
                    <div className="flex flex-col gap-4">
                        <InformationOrder {...data} />
                        <p className="text-base font-bold text-natural_gray-900">اطلاعات لغو :</p>

                        <div className="flex items-center justify-between">
                            <p className="text-xs text-natural_gray-900">تاریخ لغو:</p>
                            <p className="text-xs md:text-sm">{new Date(data.rejected_date).toLocaleString(`fa-Ir`, {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric',
                            })}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs text-natural_gray-900"> لغو شده توسط:</p>
                            <p className="text-xs md:text-sm">{data.rejected_reason}</p>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default CancellationDetails;