import React from 'react';
import Icon from "@icons/about.svg"
import Image from "next/image";
import Call from "@icons/call.svg"
import Link from "next/link";
import Youtube from "@icons/youtube.svg";
import Insta from "@icons/instagram.svg";
import Whats from "@icons/whatsapp.svg";
import Tel from "@icons/telegram.svg";
import Apa from "@icons/aparat.svg";
import Tik from "@icons/tik_tok.svg";
import Pi from "@icons/pinterest.svg";
import Fac from "@icons/facebook.svg";
import X from "@icons/x.svg";

const AboutUs = () => {
    return (
        <>
            <div dir="rtl" className="container flex flex-col gap-20">
                <div className="flex flex-col items-center justify-between bg-primary-50 lg:grid lg:grid-cols-2">
                    <div className="flex flex-col gap-10 p-5 sm:p-20">
                        <div className="flex items-center gap-2 ml-auto relative">
                            <Image unoptimized width={100} height={100} className="absolute right-60 bottom-0"
                                   src="/images/Group-44.png" alt=""/>
                            <p className="text-2xl">درباره لینگومسترز</p>
                            <Icon className="w-8 h-8 fill-primary-700"/>
                        </div>
                        <p className="text-right">تیم لینگومسترز: تیم لینگومسترز متشکل از گروهی از برجسته‌ترین
                            فارغ‌التحصیلان زبان‌های خارجی است که پس از سال‌ها تحصیل، تدریس، تألیف و نشر در رده‌های سنی و
                            مقاطع مختلف تحصیلی، هم در داخل و هم در خارج از ایران، تصمیم به فراهم‌آوردن مناسب‌ترین بستر
                            تخصصی برای اساتید و زبان‌آموزان علاقه‌مند به یادگیری زبان‌های خارجی گرفته‌اند.
                            <br/>
                            تیم لینگومسترز همواره در تلاش است تا با به‌روزرسانی مستمر و ارائه خدمات نوآورانه، رضایت
                            زبان‌آموزان و اساتید خود را جلب نماید.</p>

                    </div>
                    <div className="p-10 ">
                        <Image unoptimized width={100} height={100} className="w-full h-full" src="/images/about-us.png"
                               alt=""/>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="grid grid-cols-1 gap-7 justify-center p-7 sm:grid-cols-2 md:grid-cols-3">
                        <div
                            className="flex items-center flex-col gap-6 py-6 px-4 rounded-lg shadow-lg bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(231,_237,_255,_0.40)_100%)]">
                            <div
                                className="flex justify-center items-center p-3 text-sm sm:text-lg text-white rounded-lg w-full bg-[linear-gradient(90deg,_rgba(43,_73,_162,_0.90)_0%,_rgba(87,_124,_235,_0.70)_100%)]">
                                هدف ها و انگیزه ها
                            </div>
                            <p className="text-natural_gray-950 text-right text-xs sm:text-sm">
                                این تیم با هدف ایجاد یک فضای آموزشی پویا و موثر، به دنبال برآورده‌کردن نیازهای
                                زبان‌آموزان در زمینه‌های مختلف تحصیلی، کاری، تفریحی و ... است. آن‌ها با بهره‌گیری از
                                تجربیات عملی و نظری خود، برنامه‌ها و دوره‌های آموزشی متنوعی را طراحی کرده‌اند تا بتوانند
                                به نیازهای متفاوت زبان‌آموزان پاسخ دهند.
                            </p>
                        </div>
                        <div
                            className="flex items-center flex-col gap-6 py-6 px-4 rounded-lg shadow-lg bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(231,_237,_255,_0.40)_100%)]">
                            <div
                                className="flex justify-center items-center p-3 text-sm sm:text-lg text-white rounded-lg w-full bg-[linear-gradient(90deg,_rgba(43,_73,_162,_0.90)_0%,_rgba(87,_124,_235,_0.70)_100%)]">
                                تجربه و تخصص
                            </div>
                            <p className="text-natural_gray-950 text-right text-xs sm:text-sm">
                                اعضای تیم لینگومسترز دارای تجربه‌های گسترده‌ای در زمینه تدریس زبان‌های خارجی هستند. این
                                تجربه‌ها شامل آموزش در مدارس، دانشگاه‌ها، مؤسسات آموزشی و همچنین آموزش آنلاین است. علاوه
                                بر این، آن‌ها در زمینه تألیف و نشر منابع آموزشی تخصص دارند و تا کنون کتاب‌ها و مقالات
                                متعددی را در زمینه یادگیری زبان‌های خارجی منتشر کرده‌اند.
                            </p>
                        </div>
                        <div
                            className="flex items-center flex-col gap-6 py-6 px-4 rounded-lg shadow-lg bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(231,_237,_255,_0.40)_100%)]">
                            <div
                                className="flex justify-center items-center p-3 text-sm sm:text-lg text-white rounded-lg w-full bg-[linear-gradient(90deg,_rgba(43,_73,_162,_0.90)_0%,_rgba(87,_124,_235,_0.70)_100%)]">
                                بستر تخصصی آموزش
                            </div>
                            <p className="text-natural_gray-950 text-right text-xs sm:text-sm">
                                لینگومسترز بستری مناسب و تخصصی را برای آموزش زبان‌های خارجی فراهم کرده است. این بستر
                                شامل دوره‌های آموزشی آنلاین و حضوری، منابع آموزشی متنوع، و امکاناتی برای ارتباط مستقیم
                                با اساتید مجرب است. هدف اصلی این بستر، ایجاد محیطی است که در آن زبان‌آموزان بتوانند به
                                راحتی و با کیفیت بالا، زبان مورد نظر خود را یاد بگیرند.
                            </p>
                        </div>
                        <div
                            className="flex items-center flex-col gap-6 py-6 px-4 rounded-lg shadow-lg bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(231,_237,_255,_0.40)_100%)]">
                            <div
                                className="flex justify-center items-center p-3 text-sm sm:text-lg text-white rounded-lg w-full bg-[linear-gradient(90deg,_rgba(43,_73,_162,_0.90)_0%,_rgba(87,_124,_235,_0.70)_100%)]">
                                دوره های آموزشی
                            </div>
                            <p className="text-natural_gray-950 text-right text-xs sm:text-sm">
                                دوره‌های آموزشی لینگومسترز به گونه‌ای طراحی شده‌اند که نیازهای مختلف زبان‌آموزان را پوشش
                                دهند. این دوره‌ها شامل آموزش زبان‌های مختلف از مبتدی تا پیشرفته، دوره‌های آمادگی برای
                                آزمون‌های بین‌المللی، دوره‌های تخصصی برای اهداف کاری و تجاری، و دوره‌های تفریحی و فرهنگی
                                می‌باشند.
                            </p>
                        </div>
                        <div
                            className="flex items-center flex-col gap-6 py-6 px-4 rounded-lg shadow-lg bg-[linear-gradient(180deg,_rgba(255,_255,_255,_0.40)_0%,_rgba(231,_237,_255,_0.40)_100%)]">
                            <div
                                className="flex justify-center items-center p-3 text-sm sm:text-lg text-white rounded-lg w-full bg-[linear-gradient(90deg,_rgba(43,_73,_162,_0.90)_0%,_rgba(87,_124,_235,_0.70)_100%)]">
                                پشتیبانی و مشاوره
                            </div>
                            <p className="text-natural_gray-950 text-right text-xs sm:text-sm">
                                تیم لینگومسترز علاوه بر ارائه دوره‌های آموزشی، خدمات پشتیبانی و مشاوره نیز به
                                زبان‌آموزان ارائه می‌دهد. این خدمات شامل مشاوره در زمینه انتخاب دوره‌های مناسب، راهنمایی
                                برای مطالعه و یادگیری بهتر، و پشتیبانی فنی در استفاده از بستر آموزشی آنلاین می‌باشند.
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col justify-center items-center gap-5 p-7 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                            <p className="text-2xl ">راه های ارتباط با ما</p>
                            <Call className="w-8 h-8 fill-primary-700"/>
                        </div>
                        <p className="text-sm sm:text-lg">با مشارکت در شبکه های اجتماعی در قرعه کشی میلیونی لینگومسترز
                            شرکت داده می شوید.</p>
                    </div>
                    <div className="flex items-center justify-center gap-2 sm:gap-5"
                    >
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE} target="_blank"
                              rel="noopener noreferrer">
                            <Youtube className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM} target="_blank"
                              rel="noopener noreferrer">
                            <Insta className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP} target="_blank"
                              rel="noopener noreferrer">
                            <Whats className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM} target="_blank"
                              rel="noopener noreferrer">
                            <Tel className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_APARAT} target="_blank"
                              rel="noopener noreferrer">
                            <Apa className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_TIKTOK} target="_blank"
                              rel="noopener noreferrer">
                            <Tik className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_PINTEREST} target="_blank"
                              rel="noopener noreferrer">
                            <Pi className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK} target="_blank"
                              rel="noopener noreferrer">
                            <Fac className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                        <Link href={process.env.NEXT_PUBLIC_SOCIAL_X} target="_blank" rel="noopener noreferrer">
                            <X className="w-6 h-7 sm:w-16 sm:h-16 md:w-20 md:h-20"/>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};
export default AboutUs;