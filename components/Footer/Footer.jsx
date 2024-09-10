import Reurn from '@icons/return.svg'
import Protection from '@icons/protection.svg'
import OnlineShopping from '@icons/online-shopping.svg'
import Delivery from '@icons/delivery.svg'

const Footer = () => {
    return (
        <>
            <div className="relative">
                <div className="container">
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
                                <span className='text-natural_gray-950 sm:text-sm text-[10px] opacity-80 line-clamp-1'>پرداخت امن از طریق درگاه مطمين</span>
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
            </div>
        </>
    );
};

export default Footer;