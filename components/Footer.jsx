import Reurn from '@icons/return.svg'
import Protection from '@icons/protection.svg'
import OnlineShopping from '@icons/online-shopping.svg'
import Delivery from '@icons/delivery.svg'
import X from '@icons/x.svg'
import Youtube from '@icons/youtube.svg'
import Insta from "@icons/instagram.svg";
import Whats from "@icons/whatsapp.svg";
import Tel from "@icons/telegram.svg";
import Apa from "@icons/aparat.svg";
import Tik from "@icons/tik_tok.svg";
import Pi from "@icons/pinterest.svg";
import Fac from "@icons/facebook.svg";
import Left from '@icons/arrow-left.svg'
import Link from 'next/link'

const Footer = () => {
    return (
        <>
            <div className="relative mt-40" dir='rtl'>
                <div className="container absolute left-1/2 lg:bottom-[85%] sm:bottom-[82%] bottom-[91%] -translate-x-1/2">
                    <div className="grid lg:grid-cols-4 grid-cols-2 sm:gap-10 gap-2 sm:p-6 p-3 rounded-lg bg-primary-100" dir='rtl'>
                        <div className="py-3 px-4 flex items-center gap-4 bg-white rounded-2xl">
                            <div className="centerOfParent"><Delivery /></div>
                            <div className="flex flex-col">
                                <p className='text-natural_gray-950 sm:text-base text-xs'>شرایط ارسال</p>
                                <span className='text-natural_gray-950 sm:text-sm text-[10px] opacity-80 line-clamp-1'>ارسال به سراسر کشور</span>
                            </div>
                        </div>
                        <div className="py-3 px-4 flex items-center gap-4 bg-white rounded-2xl">
                            <div className="centerOfParent"><OnlineShopping /></div>
                            <div className="flex flex-col">
                                <p className='text-natural_gray-950 sm:text-base text-xs'>خرید آنلاین</p>
                                <span className='text-natural_gray-950 sm:text-sm text-[10px] opacity-80 line-clamp-1'>پرداخت امن از طریق درگاه مطمئن</span>
                            </div>
                        </div>

                        <div className="py-3 px-4 flex items-center gap-4 bg-white rounded-2xl">
                            <div className="centerOfParent"><Protection /></div>
                            <div className="flex flex-col">
                                <p className='text-natural_gray-950 sm:text-base text-xs'>ضمانت ارسال</p>
                                <span className='text-natural_gray-950 sm:text-sm text-[10px] opacity-80 line-clamp-1'>ضمانت ارسال کالا</span>
                            </div>
                        </div>

                        <div className="py-3 px-4 flex items-center gap-4 bg-white rounded-2xl">
                            <div className="centerOfParent"><Reurn /></div>
                            <div className="flex flex-col">
                                <p className='text-natural_gray-950 sm:text-base text-xs'>مرجوعی کالا</p>
                                <span className='text-natural_gray-950 sm:text-sm text-[10px] opacity-80 line-clamp-1'>تا ۷ روز ضمانت عودت کالا</span>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="">
                    <div className="flex flex-col items-center gap-20 lg:pt-[120px] sm:pt-[140px] pt-[120px] pb-10 bg-[linear-gradient(90deg,_#B5C7DF_0%,_#E8EFF8_100%)]">
                        <div className="container px-3">
                            <div className="flex flex-col items-center sm:gap-20 gap-4">
                                <div className="flex lg:flex-row flex-col items-center  gap-x-4 sm:gap-y-10 gap-y-4 w-full">
                                    <div className="flex flex-col gap-6 lg:max-w-[411px] w-full">
                                        <p className="font-Metal sm:text-3xl">{process.env.NEXT_PUBLIC_LOGO}</p>
                                        <p className="text-natural_gray-950 sm:text-sm text-xs leading-6">
                                            در قسمت فروشگاهی لینگومسترز ما کتاب های زبان می فروشیم و به یادگیری شما در
                                            زبان های مختلف کمک می کنیم .<br/>
                                            همچنین شما می توانید در این قسمت کتاب های زبان خود را بفروش برسانید</p>
                                    </div>
                                    <div
                                        className="grow grid sm:grid-cols-4 grid-cols-1 w-full gap-2 sm:text-sm text-xs text-natural_gray-900">
                                        <div className="flex flex-col gap-4 justify-between">
                                            <Link className='effect-3'
                                                  href="/">
                                                <span>صفحه اصلی</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/contact-us">
                                                <span>پشتیبانی</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/about-us">
                                                <span>درباره ما</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/contact-us">
                                                <span>تماس با ما</span>
                                                <Left/></Link>
                                        </div>
                                        <div className="flex flex-col gap-4 justify-between">
                                            <Link className='effect-3'
                                                  href="/rules">
                                                <span>قوانین و مقررات</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="https://lingomasters.ir/news">
                                                <span>اخبار و اطلاعیه ها</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/faq?ru=buyer">
                                                <span>سوالات متداول خریداران</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/faq?ru=seller">
                                                <span>سوالات متداول فروشندگان</span>
                                                <Left/></Link>
                                        </div>
                                        <div className="flex flex-col gap-4 justify-between">
                                            <Link className='effect-3'
                                                  href="/checkout/cart">
                                                <span>سبد خرید</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/ordertracking">
                                                <span>پیگیری سفارش</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/become-seller">
                                                <span>فروشنده شوید</span>
                                                <Left/></Link>
                                            <Link className='effect-3'
                                                  href="/auth/login">
                                                <span>ورود و ثبت نام</span>
                                                <Left/></Link>
                                        </div>
                                        <div
                                            className="flex sm:flex-col self-end gap-2 items-center sm:justify-start justify-center sm:w-fit w-full h-fit">
                                            <div className="">
                                                <img src={'/images/etehadie.png'} alt={'etehadie'}
                                                     className="w-full max-h-24 object-contain"
                                                />
                                            </div>
                                            <a referrerPolicy='origin' target='_blank'
                                               className=""
                                               href='https://trustseal.enamad.ir/?id=511544&Code=b5B03h3L84P1noEJN4Gvb8Ma1dJOBQub'>
                                                <img
                                                    className="w-full max-h-24 object-contain mix-blend-multiply"
                                                    referrerPolicy='origin'
                                                    src="/images/enamad_1024.png"
                                                    alt='' code='b5B03h3L84P1noEJN4Gvb8Ma1dJOBQub'/>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <div className="centerOfParent gap-2">
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE} target="_blank"
                                          rel="noopener noreferrer">
                                        <Youtube/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM} target="_blank"
                                          rel="noopener noreferrer">
                                        <Insta/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP} target="_blank"
                                          rel="noopener noreferrer">
                                        <Whats/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM} target="_blank"
                                          rel="noopener noreferrer">
                                        <Tel/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_APARAT} target="_blank"
                                          rel="noopener noreferrer">
                                        <Apa/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_TIKTOK} target="_blank"
                                          rel="noopener noreferrer">
                                        <Tik/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_PINTEREST} target="_blank"
                                          rel="noopener noreferrer">
                                        <Pi/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK} target="_blank"
                                          rel="noopener noreferrer">
                                        <Fac/>
                                    </Link>
                                    <Link href={process.env.NEXT_PUBLIC_SOCIAL_X} target="_blank"
                                          rel="noopener noreferrer">
                                        <X/>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className="flex items-center justify-center py-5 bg-[linear-gradient(90deg,_#366CDA_0%,_rgba(106,_135,_193,_0.80)_100%)]">
                        <p className='text-white sm:text-base text-xs'>تمامی حقوق این وبسایت متعلق به لینگومسترز می
                            باشد.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;