import React from 'react';
import Dats from "@icons/threedots.svg"
import Image from "next/image";
import Elements from "@icons/elements.svg";
import Multiply from "@icons/check-circle.svg";
import {
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Modal,
    ModalContent, ModalBody, ModalFooter, Button, useDisclosure, Alert, Spinner,
} from "@heroui/react";
import Link from "next/link";
import ModalOrders from "@/components/profile/Orders/ModalOrders";
import useGetRequest from "@/hooks/useGetRequest";
import formatCurrency from "@/helpers/formatCurrency";
import OrderProgress from "@/components/OrderProgress";

const OrderDetails = ({orderId}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [data, , , , , isLoading] = useGetRequest(`/buyer/order/show/${orderId}`)
    return (
        <>
            {isLoading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : <div dir="rtl" className="flex flex-col gap-10">
                    <OrderProgress status={data.status}/>
                    <div className="flex flex-col gap-6 p-6 border bg-white border-natural_gray-200 rounded-xl">
                        <div className="w-full flex justify-end">
                            <Dropdown
                                dir={'rtl'}
                                classNames={{
                                    trigger: 'cursor-pointer',
                                }}
                                placement='right-start'>
                                <DropdownTrigger>
                                    <div className="centerOfParent">
                                        <Dats className='fill-secondary-500'/>
                                    </div>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem
                                        onClick={onOpen}
                                        classNames={{title: 'font-semibold flex items-center gap-2 sm:text-sm text-xs'}}
                                        key="cancel"
                                        className="text-danger"
                                        color="danger">
                                        لغو سفارش
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <ModalOrders onOpenChange={onOpenChange} isOpen={isOpen}/>
                        <div className="flex flex-col gap-6 pb-6 border-b">
                            {data.items?.map(e => (
                                <div key={e.id} className="flex items-center gap-2">
                                    <Image src={e.image || "/images/product.png"} alt={e.title} width={100}
                                           height={100}/>
                                    <div
                                        className="flex items-center flex-col md:flex-row md:justify-between gap-4 md:w-full">
                                        <div className="flex flex-col gap-2">
                                            <p className="text-xs lg:text-base font-bold ">{e.title}<span
                                                className="font-medium mr-2">(پکیج {e.Volume_number} تایی)</span>
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                                <p className="text-md">{e.category}</p>
                                            </div>
                                            <p className="text-xs lg:text-base">تعداد : {e.quantity} عدد</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs">مبلغ مرسومه:</p>
                                            <p className="text-xs lg:text-sm text-success-700 hasToman">{(e.price)?.toLocaleString()}</p>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className="flex flex-col gap-4 tems-center">
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">تاریخ ثبت سفارش :</p>
                                <p className="text-xs md:text-sm">{new Date(data.created_at).toLocaleDateString('fa-IR', {
                                    year: 'numeric',
                                    day: '2-digit',
                                    month: 'long',
                                    weekday: 'long'
                                })}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">کد پیگیری سفارش :</p>
                                <p className="text-xs md:text-sm">{data.tracking_code}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">شماره موبایل تحویل گیرنده :</p>
                                <p className="text-xs md:text-sm">{data.mobile}</p>
                            </div>
                            <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
                                <p className="text-xs text-natural_gray-900 whitespace-nowrap">آدرس :</p>
                                <div className="flex w-full justify-end">
                                    <p className="text-xs md:text-base">{data.address}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">روش پرداخت :</p>
                                <p className="text-xs md:text-sm">{data.payment_method}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">روش ارسال :</p>
                                <p className="text-xs md:text-sm">{data.sending_method}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">هزینه ارسال :</p>
                                <p className="text-xs md:text-sm">{(data.sending_price)}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">مبلغ نهایی :</p>
                                <p className="text-xs md:text-sm  text-success-800">{formatCurrency(data.total_price)} تومان</p>
                            </div>
                        </div>
                    </div>
                    {(data.status === "shipped" || data.status === "delivered") && <div
                        className="flex flex-col px-4 py-6 md:px-6 md:py-10 gap-6 md:gap-8 border border-natural_gray-200 bg-white rounded-xl">
                        <div className="flex flex-col gap-8 md:gap-16 ">
                            <div className="flex flex-col gap-4 md:gap-6 ">
                                <p className="text-sm md:text-base">برای پیگیری سفارش خود کد پیگیری را وارد کنید</p>
                                <div className="flex flex-col gap-1">
                                    <label className="text-xs">کد پیگیری سفارش شما</label>
                                    <input type="text" placeholder="متن"
                                           className="border border-gray-200 px-3 py-2 rounded-md text-sm"/>
                                </div>
                            </div>
                            <div className="flex flex-col gap-4 text-xs md:text-base">
                                <p className="">بعد از پیگیری حالت های زیر را مشاهده می کنید:</p>
                                <p className="text-rose-600">لغو شده: سفارش شما بعد از ثبت و قبل از ارسال لغو شده
                                    است.</p>
                                <p className="text-warning-600">مرجوع شده: سفارش شما بعد از ثبت و ارسال بازگردانده شده
                                    است.</p>
                                <p className="text-primary-700">در حال بسته بندی: سفارش شما ثبت شده و در حال بسته بندی
                                    است.</p>
                                <p className="text-success-700">ارسال شده: سفارش شما بسته بندی شده و توسط پست ارسال شده
                                    است.</p>
                            </div>
                            <button
                                className="px-6 py-4 flex items-center justify-center bg-primary-600 rounded-md w-full text-white text-xs md:text-base md:font-bold">ثبت
                            </button>
                        </div>
                        <p className=" text-rose-600 flex justify-center items-center text-xs md:text-sm">برای مشاهده
                            وضعیت
                            خود در مرحله تحویل به پست می توانید کد رهگیری پیامک شده به شماره موبایل که وارد کردید را در
                            سایت <Link href="https://www.post.ir" target="_blank">/https://www.post.ir</Link> وارد کنید
                        </p>
                    </div>}
                </div>}
        </>
    );
};

export default OrderDetails;