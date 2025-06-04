import React from 'react';
import Image from "next/image";
import Star from "@icons/star.svg"
import England from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg"
import Bin from "@icons/bin.svg"
import Link from "next/link";
import Like from "@/components/Like";

const Webinars =
    ({
         date,
         discount,
         id,
         image,
         language,
         price,
         professor,
         rate,
         rate_count,
         time,
         title,
         max_capacity,
         is_like
     }) => {
        const finalPrice = price - (price * discount) / 100;
        return (
            <>
                <div
                    className="flex flex-col items-center justify-center p-4 border border-natural_gray-100 rounded-xl gap-6 flex-1">
                    <Image width={100} height={100} src={image || "/images/webinar.png"} alt={title}
                           className="w-full"/>
                    <div className="flex flex-col gap-8 w-full">
                        <div className="flex flex-col gap-4 w-full">
                            <div className="flex w-full justify-between ">
                                <div className="flex flex-col gap-1">
                                    <p className="text-lg">{title}</p>
                                    <div className="flex items-center  gap-1">
                                        <Star className="w-4 h-4 fill-secondary-300"/>
                                        <p className="text-xs">{rate}</p>
                                        <p className="text-[8px] text-natural_gray-500">
                                            از {rate_count} نظر
                                        </p>
                                    </div>
                                    <Image width={24} height={24} src={language} alt={title}
                                           className="w-6"/>
                                </div>
                                <Like id={id} isLike={is_like} url='/webinar-reserve'/>
                            </div>
                            <div className="flex flex-col gap-2 items-center">
                                <div className="flex items-center gap-4 w-full">
                                    <div
                                        className="flex items-center gap-4 p-2 flex-1 whitespace-nowrap w-1/2 bg-primary-50 rounded-md">
                                        <p className="text-natural_gray-700 text-xs">استاد</p>
                                        <p className="text-sm">{professor}</p>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-2 flex-1 whitespace-nowrap w-1/2 bg-primary-50 rounded-md">
                                        <p className="text-natural_gray-700 text-xs">موضوع</p>
                                        <p className="text-sm">{title}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <div
                                        className="flex items-center gap-4 p-2 flex-1 whitespace-nowrap w-1/2 bg-primary-50 rounded-md">
                                        <p className="text-natural_gray-700 text-xs">تاریخ</p>
                                        <p className="text-xs">{new Date(date).toLocaleDateString('fa-IR', {
                                            year: 'numeric',
                                            month: 'long',
                                            day: '2-digit'
                                        })}</p>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-2 flex-1 whitespace-nowrap w-1/2 bg-primary-50 rounded-md">
                                        <p className="text-natural_gray-700 text-xs">ساعت</p>
                                        <p className="text-sm">{time}</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-4 w-full">
                                    <div
                                        className="flex items-center gap-4 p-2 flex-1 whitespace-nowrap w-1/2 bg-primary-50 rounded-md">
                                        <p className="text-natural_gray-700 text-xs">ظرفیت</p>
                                        <p className="text-sm">{max_capacity} نفر</p>
                                    </div>
                                    <div
                                        className="flex items-center gap-4 p-2 flex-1 whitespace-nowrap w-1/2 bg-primary-50 rounded-md">
                                        <p className="text-natural_gray-700 text-xs">قیمت</p>
                                        <p className="text-sm hasToman">{finalPrice?.toLocaleString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link href={`/webinar/${id}`}
                          className="bg-primary-600 px-4 py-2 flex items-center justify-center w-full rounded-md text-white text-base">ثبت
                        نام وبینار</Link>
                </div>
            </>
        );
    };

export default Webinars;