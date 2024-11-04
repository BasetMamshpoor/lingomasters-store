import Reurn from '@icons/return.svg'
import Protection from '@icons/protection.svg'
import OnlineShopping from '@icons/online-shopping.svg'
import Delivery from '@icons/delivery.svg'
import X from '@icons/x.svg'
import Telegram from '@icons/telegram.svg'
import Instagram from '@icons/instagram.svg'
import Youtube from '@icons/youtube.svg'
import Aparat from '@icons/aparat.svg'
import Tiktok from '@icons/tik_tok.svg'
import Whatsapp from '@icons/whatsapp.svg'
import Pinterest from '@icons/pinterest.svg'
import Facebook from '@icons/facebook.svg'
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
                        <div className="container px-2">
                            <div className="flex flex-col items-center sm:gap-20 gap-4">
                                <div className="flex lg:flex-row flex-col items-center sm:gap-10 gap-4 w-full">
                                    <div className="flex flex-col gap-6 lg:max-w-[411px] w-full">
                                        <p className="font-Metal sm:text-3xl">{process.env.NEXT_PUBLIC_LOGO}</p>
                                        <p className="text-natural_gray-950 sm:text-sm text-xs leading-6">
                                            در قسمت فروشگاهی لینگومسترز ما کتاب های زبان می فروشیم و به یادگیری شما در زبان های مختلف کمک می کنیم .<br />
                                            همچنین شما می توانید در این قسمت کتاب های زبان خود را بفروش برسانید</p>
                                    </div>
                                    <div className="grow flex sm:flex-row flex-col w-full justify-between sm:items-center gap-2 sm:text-sm text-xs text-natural_gray-900">
                                        <div className="flex flex-col sm:gap-6 gap-2">
                                            <Link href="/">صفحه اصلی</Link>
                                            <Link href="">پشتیبانی</Link>
                                            <Link href="">درباره ما</Link>
                                            <Link href="">تماس با ما</Link>
                                        </div>
                                        <div className="flex flex-col sm:gap-6 gap-2">
                                            <Link href="/rules">قوانین و مقررات</Link>
                                            <Link href="">اخبار و اطلاعیه ها</Link>
                                            <Link href="/faq">سوالات متداول خریداران</Link>
                                            <Link href="/faq">سوالات متداول فروشندگان</Link>
                                        </div>
                                        <div className="flex flex-col sm:gap-6 gap-2">
                                            <Link href="/checkout/cart">سبد خرید</Link>
                                            <Link href="/ordertracking">پیگیری سفارش</Link>
                                            <Link href="">فروشنده شوید</Link>
                                            <Link href="">ورود و ثبت نام</Link>
                                        </div>
                                        <div className="flex items-center justify-evenly sm:gap-6 gap-2 sm:mt-0 mt-10">
                                            <Link href=""><img src="/images/image 9.png" className='mix-blend-multiply' alt="" /></Link>
                                            <Link href="" className='sm:hidden'><img src="/images/etehadie.png" className='mix-blend-multiply' alt="" /></Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="centerOfParent sm:gap-4 gap-2">
                                    <a href="" ><X /></a>
                                    <a href="" ><Telegram /></a>
                                    <a href="" ><Instagram /></a>
                                    <a href="" ><Youtube /></a>
                                    <a href="" ><Aparat /></a>
                                    <a href="" ><Tiktok /></a>
                                    <a href="" ><Whatsapp /></a>
                                    <a href="" ><Pinterest /></a>
                                    <a href="" ><Facebook /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center justify-center py-5 bg-[linear-gradient(90deg,_#366CDA_0%,_rgba(106,_135,_193,_0.80)_100%)]">
                        <p className='text-white sm:text-base text-xs'>تمامی حقوق این وبسایت متعلق به لینگومسترز می باشد.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Footer;