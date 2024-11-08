import Search from '@icons/search-order.svg'

const Ordertracking = () => {
    return (
        <>
            <div className="bg-white" dir='rtl'>
                <div className="container py-10">
                    <div className="flex items-center lg:justify-center lg:text-black text-primary-600 justify-start gap-4 mb-16">
                        <div className="centerOfParent"><Search className='w-8 h-8' /></div>
                        <h1 className='lg:text-2xl font-semibold'>پیگیری سفارش</h1>
                    </div>
                    <p className='sm:text-base text-xs text-natural_gray-950 mb-6'>سفارش های شما حداقل بین 1 تا 3 روز کاری پس از ثبت سفارش به اداره پست و توسط پست پیشتاز ارسال می شوند</p>
                    <p className='sm:text-base text-xs text-natural_gray-950 mb-16'>برای مشاهده کد پیگیری از قسمت پروفایل خود از قسمت سفارش ها کد پیگیری سفارش ثبت شده را مشاهده کنید.</p>
                    <div className="lg:py-10 sm:py-6 py-4 lg:px-6 sm:px-4 px-2 border rounded-xl mx-auto lg:w-[410px] sm:w-[330px] w-full ">
                        <div className="flex flex-col gap-16">
                            <div className="flex flex-col gap-10">
                                <p className='sm:text-sm text-xs'>برای پیگیری سفارش خود کد پیگیری را وارد کنید</p>
                                <div className="flex flex-col gap-2">
                                    <label className='sm:text-sm text-xs' htmlFor="input">کد پیگیری سفارش شما</label>
                                    <input type="text" placeholder='متن' className='border px-4 py-2 rounded-lg ' />
                                </div>
                            </div>
                            <button type='button' className='effect-2 py-3 px-6 centerOfParent w-full bg-primary-600 text-white rounded sm:text-base text-sm'>ثبت</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Ordertracking;