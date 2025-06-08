import Search from '@icons/search-order.svg'
import usePostRequest from "@/hooks/usePostRequest";
import React, {useState} from "react";
import {addToast, Button} from "@heroui/react";

const OrderTracking = () => {
    const {sendPostRequest, isLoading} = usePostRequest()
    const [tracking, setTracking] = useState()
    const handleSubmit = async e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const Data = Object.fromEntries(form.entries())
        const {success, data, errorMessage} = await sendPostRequest('POST', '/buyer/order/tracking', Data)
        if (success) {
            setTracking(data.response.data)
        } else {
            addToast({
                title: "خطلا",
                description: errorMessage,
                color: 'danger'
            })
        }
    }
    return (
        <>
            <div className="bg-white" dir='rtl'>
                <div className="container py-10">
                    <div
                        className="flex items-center lg:justify-center lg:text-black text-primary-600 justify-start gap-4 mb-16">
                        <div className="centerOfParent"><Search className='w-8 h-8'/></div>
                        <h1 className='lg:text-2xl font-semibold'>پیگیری سفارش</h1>
                    </div>
                    <p className='sm:text-base text-xs text-natural_gray-950 mb-6'>سفارش های شما حداقل بین 1 تا 3 روز
                        کاری پس از ثبت سفارش به اداره پست و توسط پست پیشتاز ارسال می شوند</p>
                    <p className='sm:text-base text-xs text-natural_gray-950 mb-16'>برای مشاهده کد پیگیری از قسمت
                        پروفایل خود از قسمت سفارش ها کد پیگیری سفارش ثبت شده را مشاهده کنید.</p>
                    <div
                        className="lg:py-10 sm:py-6 py-4 lg:px-6 sm:px-4 px-2 border rounded-xl mx-auto lg:w-[410px] sm:w-[330px] w-full">
                        <form className="flex flex-col gap-16 mb-8" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-10">
                                <p className='sm:text-sm text-xs'>برای پیگیری سفارش خود کد پیگیری را وارد کنید</p>
                                <div className="flex flex-col gap-2">
                                    <label className='sm:text-sm text-xs' htmlFor="input">کد پیگیری سفارش شما</label>
                                    <input type="text" placeholder='کد رهگیری'
                                           className='border px-4 py-2 rounded-lg '/>
                                </div>
                            </div>
                            <Button type="submit" isLoading={isLoading}
                                    className='effect-2 py-3 px-6 centerOfParent w-full bg-primary-600 text-white rounded sm:text-base text-sm'>ثبت
                            </Button>
                        </form>
                        {tracking === "cancelled" &&
                            <p className="text-rose-600">لغو شده: سفارش شما بعد از ثبت و قبل از ارسال لغو شده
                                است.</p>}
                        {tracking === "returned" &&
                            <p className="text-warning-600">مرجوع شده: سفارش شما بعد از ثبت و ارسال بازگردانده شده
                                است.</p>}
                        {tracking === "pending" &&
                            <p className="text-primary-700">در حال بسته بندی: سفارش شما ثبت شده و در حال بسته بندی
                                است.</p>}
                        {tracking === "delivered" &&
                            <p className="text-success-700">ارسال شده: سفارش شما بسته بندی شده و توسط پست ارسال شده
                                است.</p>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderTracking;