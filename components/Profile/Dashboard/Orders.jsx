import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Chevron from "@icons/arrow-left.svg";

const Orders = ({title, count, items, status}) => {
    return (
        <>
            <div className="flex flex-col justify-between gap-3 p-4 bg-natural_gray-100 rounded-xl">
                <div className="flex items-center justify-between border-b pb-2">
                    <p className="text-natural_gray-950 text-xs md:text-sm lg:text-base font-bold">{title}</p>
                    <p className="text-xs md:text-sm text-natural_gray-950">{count}</p>
                </div>
                <div className="flex flex-col gap-3">
                    {items?.map(i => (
                        <Link
                            href={`/profile/orders?tab=${status === 'pending' ? "paid" : status === 'delivered' ? "delivered" : "returned"}&id=${i.id}`}
                            key={i.id} className="flex items-center justify-between">
                            <div className="flex items-center gap-2">
                                <Image src={i.image || "/images/english-book.png"} alt={i.title} width={100}
                                       height={100}
                                       className="w-16 h-16"/>
                                <div className="flex flex-col gap-2">
                                    <div className="flex items-center gap-1">
                                        <p className="text-xs lg:text-sm">{i.title}</p>
                                        <div
                                            className="flex items-center justify-center bg-primary-50 px-2 py-1 rounded-xl text-xs">{i.category}
                                        </div>
                                    </div>
                                    <p className="text-xs text-natural_gray-800">{new Date(i.date).toLocaleString('fa-IR', {
                                        year: "numeric",
                                        month: "long",
                                        day: "numeric",
                                    })}</p>
                                </div>
                            </div>
                            <div><Chevron/></div>
                        </Link>
                    ))}
                </div>
                <Link
                    href={`/profile/orders?tab=${status === 'pending' ? "paid" : status === 'delivered' ? "delivered" : "returned"}`}
                    className="flex items-center justify-center gap-2 ">
                    <p className="text-xs text-primary-500">مشاهده همه</p>
                    <Chevron className="w-5 h-5 fill-primary-500"/>
                </Link>
            </div>
        </>
    );
};

export default Orders;