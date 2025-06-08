import React, {useEffect, useRef} from 'react';
import {useRouter} from "next/router";
import Right from '@icons/chevron-right.svg'
import useGetRequest from "@/hooks/useGetRequest";
import {addToast, Button, Popover, PopoverContent, PopoverTrigger, Spinner} from "@heroui/react";
import TicketMessage from "@/Components/Profile/Support/TicketMessage";
import ChatInput from "@/Components/Profile/Support/ChatInput";
import timeAgo from "@/helpers/timeago";
import usePostRequest from "@/hooks/usePostRequest";

const Ticket = () => {
    const {back, query} = useRouter()
    const [data, setData, setReload, pa, setp, isLoading] = useGetRequest(query.id && `/tickets/${query.id}`,)

    const ref = useRef();
    const inputRef = useRef();
    const {sendPostRequest, isLoading: loading} = usePostRequest()

    useEffect(() => {
        if (inputRef.current) {
            inputRef.current.scrollIntoView({behavior: 'smooth'});
        }
        if (ref.current) {
            console.log(111)
            ref.current.scrollTo({
                top: ref.current.scrollHeight,
                behavior: 'smooth'
            });
        }
    },);
    const handleClose = async () => {
        const {
            success,
            errorMessage,
            successMessage
        } = await sendPostRequest('POST', `/tickets/close/${query.id}`, undefined, true)
        if (success) {
            addToast({
                title: "بسته شد",
                description: successMessage,
                color: "success"
            })
            back()
        } else
            addToast({
                title: "بسته نشد",
                description: errorMessage,
                color: "danger"
            })
    }

    return (
        <>
            <div className="flex flex-col gap-6 mb-10">
                <div className="flex items-center w-fit gap-3 text-primary-600 cursor-pointer" onClick={back}>
                    <Right className='fill-primary-700'/>
                    بازگشت
                </div>
                {isLoading ?
                    <Spinner color="success"/>
                    : <div className="grid lg:grid-cols-12 gap-6">
                        <div
                            className="lg:col-span-8 order-2 lg:p-6 py-6 px-2 border border-natural_gray-200 rounded-xl flex flex-col gap-2">
                            <p className="centerOfParent text-primary-700 font-semibold">{data.subject}</p>
                            <div className="overflow-y-auto max-h-[602px] flex-1" ref={ref}>
                                {data.messages.map((item, index) => (
                                    <TicketMessage key={item.id} {...item} />
                                ))}
                            </div>
                            {data.status !== 'closed' &&
                                <ChatInput id={data.id} refView={inputRef} setReload={setReload}/>}
                        </div>
                        <div
                            className="lg:col-span-4 lg:order-2 order-1 p-6 rounded-xl bg-primary-100 flex flex-col gap-6 justify-between relative">
                            <img src="/images/Vector%20Lines.png" alt=""
                                 className="absolute top-0 bottom-0 left-0 right-0 w-full h-full object-contain"/>
                            <div className="flex flex-col gap-6 items-center relative  z-[1]">
                                <p className="text-primary-700 font-bold">اطلاعات تیکت</p>
                                <div className="flex flex-col gap-2 w-full">
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">شماره تیکت</p>
                                        <p className="text-xs text-primary-950">{data.ticket_number}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">عنوان تیکت</p>
                                        <p className="text-xs text-primary-950">{data.subject}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">زمان ایجاد تیکت</p>
                                        <p className="text-xs text-primary-950">{new Intl.DateTimeFormat('fa-IR', {
                                            year: 'numeric',
                                            month: '2-digit',
                                            day: '2-digit'
                                        }).format(new Date(data.created_at))}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">آخرین به‌روزرسانی</p>
                                        <p className="text-xs text-primary-950">{timeAgo(data.updated_at)}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">تعداد کل پاسخ‌ها</p>
                                        <p className="text-xs text-primary-950">{data.messages_count}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">دپارتمان تیکت</p>
                                        <p className="text-xs text-primary-950">{data.department}</p>
                                    </div>
                                    <div className="flex items-center justify-between">
                                        <p className="text-xs text-natural_gray-900">وضعیت</p>
                                        <p className="text-xs"
                                           style={{color: data.status === 'answered' ? 'green' : data.status === 'closed' ? 'red' : 'orange'}}>
                                            {data.status === 'answered' ? 'پاسخ داده شده' : data.status === 'closed' ? 'بسته شده' : 'در انتظار بررسی'}
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="lg:flex hidden flex-col gap-6  relative z-[1]">
                                <div className="flex flex-col gap-4">
                                    <p className="font-semibold text-sm text-primary-950">بستن تیکت</p>
                                    <p className="text-natural_gray-500 text-xs">بسته شدن تیکت به منزله‌ی پایان گفتگو و
                                        پیگیری از سوی کارشناسان لینگومسترز می‌باشد, لطفا در نظر داشته باشید اگر سفارش یا
                                        درخواست شما انجام نگرفته است, تیکت را نبندید.</p>
                                </div>
                                <Popover>
                                    <PopoverTrigger>
                                        <Button type="button"
                                                className=" w-full bg-primary-600 rounded py-2 text-sm text-white">بستن
                                            تیکت
                                        </Button>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="p-4 flex flex-col gap-10">
                                            <p className="text-natural_gray-950 font-bold sm:text-base text-sm">آیا
                                                مطمئن به بستن تیکت هستید؟</p>
                                            <div className="flex items-center gap-6">
                                                <Button isLoading={loading} color="danger" radius="sm" size="sm"
                                                        className="max-w-full w-full"
                                                        onPress={handleClose}>بستن</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                            </div>
                        </div>
                        <div className="lg:hidden flex flex-col gap-6  relative  z-[1] order-3">
                            <div className="flex flex-col gap-4">
                                <p className="font-semibold text-sm text-primary-950">بستن تیکت</p>
                                <p className="text-natural_gray-500 text-xs">بسته شدن تیکت به منزله‌ی پایان گفتگو و
                                    پیگیری از سوی کارشناسان لینگومسترز می‌باشد, لطفا در نظر داشته باشید اگر سفارش یا
                                    درخواست شما انجام نگرفته است, تیکت را نبندید.</p>
                            </div>
                            <Popover>
                                <PopoverTrigger>
                                    <Button type="button"
                                            className=" w-full bg-primary-600 rounded py-2 text-sm text-white">بستن
                                        تیکت
                                    </Button>
                                </PopoverTrigger>
                                <PopoverContent>
                                    <div className="p-4 flex flex-col gap-10">
                                        <p className="text-natural_gray-950 font-bold sm:text-base text-sm">آیا
                                            مطمئن به بستن تیکت هستید؟</p>
                                        <div className="flex items-center gap-6">
                                            <Button isLoading={loading} color="danger" radius="sm" size="sm"
                                                    className="max-w-full w-full"
                                                    onPress={handleClose}>بستن</Button>
                                        </div>
                                    </div>
                                </PopoverContent>
                            </Popover>
                        </div>
                    </div>}
            </div>
        </>
    );
};

export default Ticket;