import React from 'react';
import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import Link from "next/link";
import Image from "next/image";
import Seller from "@icons/seller.svg";
import Chevron from "@icons/chevron-right.svg";
import Verified from "@icons/verified.svg";
import User from "@icons/user-tick.svg";
import Loudspeaker from "@icons/loudspeaker.svg"
import Division from "@icons/division-seller.svg"
import Globe from "@icons/globe-alt.svg"
import Route from "@icons/route.svg"
import Corner from "@icons/corner-left-down.svg"
import Users from "@icons/user-tick.svg"
import VerifiedSeller from "@icons/verified.svg"
import Cart from "@icons/cart.svg"
import Target from "@icons/target.svg"
import Chat from "@icons/chat-alt.svg"

const Index = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-20 ">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem href="/news">استخدام اساتید</BreadcrumbItem>
                </Breadcrumbs>
                <div className="flex flex-col">
                    <div className="hidden lg:flex items-center justify-center gap-6">
                        <Seller className="fill-primary-600 w-10 h-10"/>
                        <p className="text-3xl">فروشنده شوید</p>
                    </div>
                    <Link href="/" className="lg:hidden flex gap-1 ">
                        <Chevron className=" w-6 h-6"/>
                        <p className="text-sm md:text-base">فروشنده شوید</p>
                    </Link>
                    <div className="flex flex-col lg:flex-row items-center lg:justify-between">
                        <div className="flex flex-col gap-6 md:gap-10 lg:gap-40 order-2 lg:order-1">
                            <div className="flex flex-col gap-2 md:gap-4 lg:gap-10">
                                <p className="text-base font-bold md:font-black md:text-xl lg:font-medium lg:text-3xl">در
                                    فروشگاه لینگومسترز کتاب های خود را بفروشید</p>
                                <p className="text-xs md:text-base lg:text-lg">شما میتوانید در فروشگاه لینگومسترز کتاب
                                    های زبان خود را بدون دردسر و به صورت آنلاین بفروشید</p>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[10px] md:text-sm lg:text-lg">اگر میخوای فروشنده بشی وارد شو!!!</p>
                                <Link href=""
                                      className="px-4 py-2 lg:px-6 lg:py-3 flex items-center justify-center rounded-md bg-primary-600 text-sm lg:text-base text-white">
                                    وررود فروشندگان
                                </Link>
                            </div>
                        </div>
                        <div className="order-1 lg:order-2">
                            <Image src="/images/intersect.png" alt="" width={100} height={100}
                                   className="w-full h-full"/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-20 items-center">
                    <div className="flex items-center gap-1 lg:gap-6">
                        <Verified className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                        <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">مزایایی که لینگومسترز
                            برای فروشندگان داره</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-y-20 gap-x-6 w-full">
                        <div className="relative mx-auto h-56 flex-grow w-full">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <User className="absolute w-[60px] h-[60px] -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-4 lg:gap-10">
                                    <p className="text-sm font-bold lg:font-medium lg:text-lg">پنل فروشنده</p>
                                    <p className="text-xs md:text-sm lg:text-base">پنل فروشنده را برای همه آسان
                                        نموده‌ایم، اما اگر به کمک نیاز دارید. کافیست تیکت بفرستید.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-56 flex-grow w-full">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Loudspeaker
                                    className="absolute w-[60px] h-[60px] -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-4 lg:gap-10">
                                    <p className="text-sm font-bold lg:font-medium lg:text-lg">تبلیغات مفید</p>
                                    <p className="text-xs md:text-sm lg:text-base">اگر محصولی را می‌خواهید زودتر به فروش
                                        برسانید میتوانید از دکمه تبلیغ استفاده کنید.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-56 flex-grow w-full">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Division className="absolute w-[60px] h-[60px] -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-4 lg:gap-10">
                                    <p className="text-sm font-bold lg:font-medium lg:text-lg">تخفیف</p>
                                    <p className="text-xs md:text-sm lg:text-base">هر زمانی که بخواهید می‌توانید برای
                                        محصولات خودتان تخفیف ایجاد و به اشتارک بگذارید.</p>
                                </div>
                            </div>
                        </div>
                        <div className="relative mx-auto h-56 flex-grow w-full">
                            <div
                                className="absolute -top-10 left-1/2 -translate-x-1/2 w-24 h-24 bg-primary-200 rounded-lg z-0"></div>
                            <div
                                className="relative bg-white bg-opacity-20 backdrop-blur-[20px] rounded-xl h-full shadow-lg z-10">
                                <Globe className="absolute w-[60px] h-[60px] -top-7 left-1/2 -translate-x-1/2 z-20"/>
                                <div
                                    className="flex flex-col items-center justify-center h-full pt-4 px-4 text-center gap-4 lg:gap-10">
                                    <p className="text-sm font-bold lg:font-medium lg:text-lg">فروش آنلاین</p>
                                    <p className="text-xs md:text-sm lg:text-base">بدون واسطه محصولات خود را به فرروش
                                        برسانید</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col gap-10 items-center">
                    <div className="flex items-center gap-1 lg:gap-6">
                        <Route className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                        <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">فرآیند فروش در
                            لینگومسترز</p>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row justify-between px-8 lg:px-20 py-6 gap-20">
                        <div className="flex flex-col gap-4 order-2 lg:order-1 lg:w-2/3">
                            <div className="flex justify-center items-center bg-primary-950 rounded-lg w-9">
                                <Corner className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                            </div>
                            <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">ورود به پنل فروشندگان</p>
                            <p className="text-xs md:text-base lg:text-xl">پس از ورود، تمام اطلاعات خواسته شده را به صورت کامل پر میکنید و دکمه ثبت رو میزنید. این اطلاعات برای ادمین ارسال میشوند تا بررسی شوند و شما وارد پنل کاربریتان میشوید. تا زمانی که ادمین اطلاعات شما رو تایید کنه شما فرصت دارید پروفایلتان را تکمیل کنید.</p>
                        </div>
                        <div className="relative rounded-[57px] order-1 lg:order-2 w-1/2 lg:w-1/3">
                            <Image src="/images/image.png" alt="" width={100} height={100} className="w-full" />
                            <div className="bg-primary-600 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center absolute bottom-5 -right-4 sm:bottom-7 sm:-right-6 md:bottom-8 md:-right-7 lg:bottom-10 lg:-right-10">
                                <Users className="fill-white w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row justify-between px-8 lg:px-20 py-6 gap-20 bg-[#F4F5F6]">
                        <div className="relative rounded-[57px] w-1/2 lg:w-1/3">
                            <Image src="/images/image.png" alt="" width={100} height={100} className="w-full" />
                            <div className="bg-primary-600 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center absolute bottom-5 -left-4 sm:bottom-7 sm:-left-6 md:bottom-8 md:-left-7 lg:bottom-10 lg:-left-10">
                                <VerifiedSeller className="fill-white w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:w-2/3">
                            <div className="flex justify-center items-center bg-primary-950 rounded-lg w-9">
                                <Corner className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                            </div>
                            <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">احراز هویت </p>
                            <p className="text-xs md:text-base lg:text-xl">پس از احراز هویت توسط ادمین شما به پنل کاربری خود دسترسی پیدا خواهید کرد و میتوانید محصولات خود را برای فروش اماده کنید.</p>
                        </div>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row justify-between px-8 lg:px-20 py-6 gap-20">
                        <div className="flex flex-col gap-4 order-2 lg:order-1 lg:w-2/3">
                            <div className="flex justify-center items-center bg-primary-950 rounded-lg w-9">
                                <Corner className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                            </div>
                            <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">ورود به پنل فروشندگان</p>
                            <p className="text-xs md:text-base lg:text-xl">پس از ورود، تمام اطلاعات خواسته شده را به صورت کامل پر میکنید و دکمه ثبت رو میزنید. این اطلاعات برای ادمین ارسال میشوند تا بررسی شوند و شما وارد پنل کاربریتان میشوید. تا زمانی که ادمین اطلاعات شما رو تایید کنه شما فرصت دارید پروفایلتان را تکمیل کنید.</p>
                        </div>
                        <div className="relative rounded-[57px] order-1 lg:order-2 w-1/2 lg:w-1/3">
                            <Image src="/images/image.png" alt="" width={100} height={100} className="w-full" />
                            <div className="bg-primary-600 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center absolute bottom-5 -right-4 sm:bottom-7 sm:-right-6 md:bottom-8 md:-right-7 lg:bottom-10 lg:-right-10">
                                <Cart className="fill-white w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"/>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center flex-col lg:flex-row justify-between px-8 lg:px-20 py-6 gap-20 bg-[#F4F5F6]">
                        <div className="relative rounded-[57px] w-1/2 lg:w-1/3">
                            <Image src="/images/image.png" alt="" width={100} height={100} className="w-full" />
                            <div className="bg-primary-600 rounded-full p-2 sm:p-3 lg:p-4 flex items-center justify-center absolute bottom-5 -left-4 sm:bottom-7 sm:-left-6 md:bottom-8 md:-left-7 lg:bottom-10 lg:-left-10">
                                <Target className="fill-white w-5 h-5 sm:w-7 sm:h-7 md:w-9 md:h-9 lg:w-12 lg:h-12"/>
                            </div>
                        </div>
                        <div className="flex flex-col gap-4 lg:w-2/3">
                            <div className="flex justify-center items-center bg-primary-950 rounded-lg w-9">
                                <Corner className="fill-primary-800 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                            </div>
                            <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">ورود به پنل فروشندگان</p>
                            <p className="text-xs md:text-base lg:text-xl">پس از ورود، تمام اطلاعات خواسته شده را به صورت کامل پر میکنید و دکمه ثبت رو میزنید. این اطلاعات برای ادمین ارسال میشوند تا بررسی شوند و شما وارد پنل کاربریتان میشوید. تا زمانی که ادمین اطلاعات شما رو تایید کنه شما فرصت دارید پروفایلتان را تکمیل کنید.</p>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center gap-10">
                    <p className="flex items-center justify-center text-sm font-bold md:text-base lg:font-medium lg:text-3xl">اگر میخوای فروشنده بشی وارد شو!!!</p>
                    <div className="flex items-center justify-center">
                        <Link href=""
                              className="px-4 py-2 lg:px-6 lg:py-3 flex items-center justify-center rounded-md bg-primary-600 text-sm lg:text-base text-white">
                            وررود فروشندگان
                        </Link>
                    </div>
                </div>
                <div className="flex flex-col gap-10 items-center justify-center">
                    <div className="flex items-center gap-1 lg:gap-6">
                        <Chat className="fill-primary-700 w-5 h-5 md:w-6 md:h-6 lg:w-10 lg:h-10"/>
                        <p className="text-sm font-bold md:text-lg lg:font-medium lg:text-3xl">رضایت‌مندی فروشندگان
                            لینگومسترز</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Index;