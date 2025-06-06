import React from 'react';
import {Tab, Tabs,Alert} from "@heroui/react";
import Current_orders from "@/components/profile/Orders/Current-orders"
import OrderDetails from "@/components/profile/Orders/Order-details"
import Delivered from "@/components/profile/Orders/delivered";
import DeliveryDetails from "@/components/profile/Orders/Delivery-details";
import Returned from "@/components/profile/Orders/returned"
import ReturnDescription from "@/components/profile/Orders/ReturnDescription"
import Canceled from "@/components/profile/Orders/Canceled"
import CancellationDetails from "@/components/profile/Orders/CancellationDetails"

const Index = () => {
    return (
        <div className="container flex w-full flex-col gap-6">
            <div className="flex items-center justify-center w-full">
                <Alert
                    color="warning"
                    title="توجه داشته باشید:"
                    description="جهت مرجوع کالا خریدار بایستی حین باز کردن بسته پستی دوربین خود را در حالت افقی و پایه ثابت قرار داده و از باز کردن بسته فیلم واضحی ضبط نماید و در صورت هرگونه پاره شدگی فیلم و عکس های مربوطه را به همراه درخواست مرجوع کالا و توضیحات کامل بلافاصله بعد از دریافت به  پشتیبانی ارسال نماید"
                />
            </div>
            <Tabs
                aria-label="Options"
                fullWidth
                classNames={{
                    tabList: "justify-between w-full relative p-0 gap-2 md:gap-4 lg:gap-6 text-red-500",
                    cursor: "w-full h-full bg-primary-800 rounded-xl ",
                    tab: "px-0 h-12 w-full border border-natural_gray-200 rounded-xl",
                    tabContent: "group-data-[selected=true]:text-white",
                    panel: "gap-6",
                }}
                color="primary"
                variant="underlined"
            >
                <Tab
                    key="Current orders"
                    title="سفارشات جاری"
                >
                    <Current_orders/>
                    <OrderDetails/>
                </Tab>
                <Tab
                    key="delivered"
                    title="تحویل شده"
                >
                    <Delivered/>
                    <DeliveryDetails/>
                </Tab>
                <Tab
                    key="returned"
                    title="مرجوع شده"
                >
                    <Returned/>
                    <ReturnDescription/>
                </Tab>
                <Tab
                    key="canceled"
                    title="لغو شده"
                >
                    <Canceled/>
                    <CancellationDetails/>
                </Tab>
            </Tabs>
        </div>
    );
};

export default Index;