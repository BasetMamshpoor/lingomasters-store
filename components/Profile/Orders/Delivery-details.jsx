import React from 'react';
import {
    Alert, Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Modal,
    ModalBody,
    ModalContent, ModalFooter, useDisclosure
} from "@heroui/react";
import Dats from "@icons/threedots.svg";
import Multiply from "@icons/check-circle.svg";
import Image from "next/image";
import Elements from "@icons/elements.svg";
import Link from "next/link";
import ModalMar from "@/components/profile/Orders/ModalMar";

const DeliveryDetails = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    return (
        <>
            <div dir="rtl" className="flex flex-col gap-10">
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
                                <DropdownItem onPress={onOpen}
                                              classNames={{title: 'font-semibold flex items-center gap-2 sm:text-sm text-xs'}}
                                              key="cancel"
                                              className="text-danger"
                                              color="danger">
                                    <Multiply className="fill-rose-600"/>
                                    <p className="">
                                        درخواست مرجوعی
                                    </p>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <ModalMar onOpenChange={onOpenChange} isOpen={isOpen} />
                    <div className="flex flex-col gap-6 pb-6 border-b">
                        <div className="flex items-center gap-2">
                            <Image src="/images/product.png" alt="/" width={100} height={100}/>
                            <div className="flex items-center flex-col md:flex-row md:justify-between gap-4 w-full">
                                <div className="flex flex-col gap-2">
                                    <p className="text-xs lg:text-base font-bold ">کتاب طلسم مکالمه <span
                                        className="font-medium">( پکیج ۵ تایی)</span>
                                    </p>
                                    <div className="flex items-center gap-4">
                                        <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                                        <p className="text-md">کتاب چاپی</p>
                                    </div>
                                    <p className="text-xs lg:text-base">تعداد : 1 عدد</p>
                                </div>
                                <div className="flex items-center md:items-end flex-col gap-2 w-full">
                                    <div className="flex items-center gap-2">
                                        <p className="text-xs">مبلغ مرسومه:</p>
                                        <p className="text-xs lg:text-sm text-success-700 hasToman">{(260000)?.toLocaleString()}</p>
                                    </div>
                                    <Link href="/" className="px-6 py-2 flex items-center justify-center rounded-md border border-secondary-500 text-secondary-500 text-xs md:text-base whitespace-nowrap w-full md:w-fit">
                                        ثبت نظر
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-4 tems-center">
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">تاریخ ثبت سفارش :</p>
                            <p className="text-xs md:text-sm">{new Date().toLocaleDateString('fa-IR', {
                                year: 'numeric',
                                day: '2-digit',
                                month: 'long',
                                weekday: 'long'
                            })}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">تاریخ تحویل :</p>
                            <p className="text-xs md:text-sm">{new Date().toLocaleDateString('fa-IR', {
                                year: 'numeric',
                                day: '2-digit',
                                month: 'long',
                                weekday: 'long'
                            })}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">کد پیگیری سفارش :</p>
                            <p className="text-xs md:text-sm">124879653</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">شماره موبایل تحویل گیرنده :</p>
                            <p className="text-xs md:text-sm">09123654597</p>
                        </div>
                        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between">
                            <p className="text-xs text-natural_gray-900 whitespace-nowrap">آدرس :</p>
                            <div className="flex w-full justify-end">
                                <p className="text-xs md:text-base">تهران ، میدان دانشجو ، خیابان سرو ، کوچه بهشت ، پلاک 56
                                    ،
                                    طبقه 12، واحد 34</p>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">روش پرداخت :</p>
                            <p className="text-xs md:text-sm">کیف پول</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">هزینه ارسال پست :</p>
                            <p className="text-xs md:text-sm hasToman">{(40000)?.toLocaleString()}</p>
                        </div>
                        <div className="flex items-center justify-between">
                            <p className="text-xs md:text-sm text-natural_gray-900">مبلغ نهایی :</p>
                            <p className="text-xs md:text-sm hasToman">{(260000)?.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default DeliveryDetails;