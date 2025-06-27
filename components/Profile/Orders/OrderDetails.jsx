import React, {useState} from 'react';
import Dats from "@icons/threedots.svg"
import {
    Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Button, useDisclosure, Spinner, addToast,
} from "@heroui/react";
import Link from "next/link";
import ModalOrders from "@/components/Profile/Orders/ModalOrders";
import useGetRequest from "@/hooks/useGetRequest";
import OrderProgress from "@/components/OrderProgress";
import InformationOrder from "@/components/Profile/Orders/InformationOrder";
import OrderItem from "@/components/Profile/Orders/OrderItem";
import usePostRequest from "@/hooks/usePostRequest";

const OrderDetails = ({orderId}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [data, , , , , loading] = useGetRequest(`/buyer/order/show/${orderId}`)
    const {sendPostRequest, isLoading} = usePostRequest();
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
            {loading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : data && <div dir="rtl" className="flex flex-col gap-10">
                <OrderProgress status={data.status}/>
                <div className="flex flex-col gap-6 p-6 border bg-white border-natural_gray-200 rounded-xl">
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
                                    onClick={onOpen}
                                    classNames={{title: 'font-semibold flex items-center gap-2 sm:text-sm text-xs'}}
                                    key="cancel"
                                    className="text-danger"
                                    color="danger">
                                    لغو سفارش
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <ModalOrders onOpenChange={onOpenChange} isOpen={isOpen} id={orderId}/>
                    <div className="flex flex-col gap-6 pb-6 border-b">
                        {data.items?.map(e => <OrderItem key={e.id} {...e} />)}
                    </div>
                    <InformationOrder {...data}/>
                </div>
                {(data.status === "shipped" || data.status === "delivered") && <div
                    className="flex flex-col px-4 py-6 md:px-6 md:py-10 gap-6 md:gap-8 border border-natural_gray-200 bg-white rounded-xl">
                    <form className="flex flex-col gap-8 md:gap-16 " onSubmit={handleSubmit}>
                        <div className="flex flex-col gap-4 md:gap-6 ">
                            <p className="text-sm md:text-base">برای پیگیری سفارش خود کد پیگیری را وارد کنید</p>
                            <div className="flex flex-col gap-1">
                                <label className="text-xs">کد پیگیری سفارش شما</label>
                                <input type="text" placeholder="متن" name="code"
                                       className="border border-gray-200 px-3 py-2 rounded-md text-sm"/>
                            </div>
                        </div>
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
                        <Button type='submit' isLoading={isLoading}
                                className="px-6 py-4 flex items-center justify-center bg-primary-600 rounded-md w-full text-white text-xs md:text-base md:font-bold">ثبت
                        </Button>
                    </form>
                    <p className=" text-rose-600 flex justify-center items-center text-xs md:text-sm">برای مشاهده
                        وضعیت
                        خود در مرحله تحویل به پست می توانید کد رهگیری پیامک شده به شماره موبایل که وارد کردید را در
                        سایت <Link href="https://tracking.post.ir/"
                                   target="_blank">https://tracking.post.ir/</Link> وارد کنید
                    </p>
                </div>}
            </div>}
        </>
    );
};

export default OrderDetails;