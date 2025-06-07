import React from 'react';
import {
    Alert, Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Modal,
    ModalBody,
    ModalContent, ModalFooter, Spinner, useDisclosure
} from "@heroui/react";
import Dats from "@icons/threedots.svg";
import Multiply from "@icons/check-circle.svg";
import Image from "next/image";
import Elements from "@icons/elements.svg";
import Link from "next/link";
import ModalMar from "@/components/profile/Orders/ModalMar";
import useGetRequest from "@/hooks/useGetRequest";
import formatCurrency from "@/helpers/formatCurrency";

const DeliveryDetails = ({orderId}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [data, , , , , isLoading] = useGetRequest(`/buyer/order/show/${orderId}`)
    return (
        <>
            {isLoading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : <div dir="rtl" className="flex flex-col gap-10">
                    <div className="flex flex-col gap-6 p-6 border border-natural_gray-200 rounded-xl">
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
                                        onPress={onOpen}
                                        classNames={{title: 'font-semibold flex items-center gap-2 sm:text-sm text-xs'}}
                                        key="cancel"
                                        className="text-danger"
                                        color="danger">
                                        <p className="">
                                            درخواست مرجوعی
                                        </p>
                                    </DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <ModalMar onOpenChange={onOpenChange} isOpen={isOpen}/>
                        <div className="flex flex-col gap-6 pb-6 border-b">
                            {data.items.map((e, index) => (
                                <div key={e.id} className="flex items-center gap-2">
                                    <Image src={e.image || "/images/product.png"} alt={e.title} width={100}
                                           height={100}/>
                                    <div
                                        className="flex items-center flex-col md:flex-row md:justify-between gap-4 w-full">
                                        <div className="flex flex-col gap-2 grow">
                                            <p className="text-xs lg:text-base font-bold ">{e.title}<span
                                                className="font-medium">( پکیج {e.Volume_number} تایی)</span>
                                            </p>
                                            <div className="flex items-center gap-4">
                                                <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                                <p className="text-md">کتاب چاپی</p>
                                            </div>
                                            <p className="text-xs lg:text-base">تعداد : {e.quantity} عدد</p>
                                        </div>
                                        <div className="flex items-center md:items-end flex-col gap-2">
                                            <div className="flex items-center gap-2">
                                                <p className="text-xs">مبلغ مرسومه:</p>
                                                <p className="text-xs lg:text-sm text-success-700 hasToman">{(e.price)?.toLocaleString()}</p>
                                            </div>
                                            <div
                                                className="px-6 py-2 flex items-center justify-center rounded-md border border-secondary-500 text-secondary-500 text-xs md:text-base whitespace-nowrap w-full md:w-fit">
                                                ثبت نظر
                                            </div>
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
                                <p className="text-xs md:text-sm text-natural_gray-900">تاریخ تحویل :</p>
                                <p className="text-xs md:text-sm">{new Date(data.delivery_date).toLocaleDateString('fa-IR', {
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
                                <p className="text-xs md:text-sm hasToman">{data.sending_price}</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-xs md:text-sm text-natural_gray-900">مبلغ نهایی :</p>
                                <p className="text-xs md:text-sm hasToman text-success-800">{formatCurrency(data.total_price)}</p>
                            </div>
                        </div>
                    </div>
                </div>}
        </>
    );
};

export default DeliveryDetails;