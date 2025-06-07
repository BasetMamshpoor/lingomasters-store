import React, {useState} from 'react';
import {Tab, Tabs, Alert, Spinner} from "@heroui/react";
import CurrentOrders from "@/components/Profile/Orders/CurrentOrders"
import OrderDetails from "@/components/Profile/Orders/OrderDetails"
import Delivered from "@/components/Profile/Orders/Delivered";
import DeliveryDetails from "@/components/Profile/Orders/DeliveryDetails";
import Returned from "@/components/Profile/Orders/Returned"
import ReturnDescription from "@/components/Profile/Orders/ReturnDescription"
import Cancelled from "@/components/Profile/Orders/Canceled"
import CancellationDetails from "@/components/Profile/Orders/CancellationDetails"
import {useRouter} from "next/router";
import useGetRequest from "@/hooks/useGetRequest";
import Pagination from "@/components/Pagination/Pagination";
import Right from "@icons/chevron-right.svg";

const Orders = () => {
    const router = useRouter();
    const {id} = router.query;

    const selected = router.query.tab || "paid";

    const handleTabChange = (key) => {
        router.replace({
            pathname: router.pathname,
            query: {tab: key},
        });
        setCurrentPage(1);
    };

    const showDetails = Boolean(id);
    const [currentPage, setCurrentPage] = useState(1)

    const [orders, , , pagination, , isLoading] = useGetRequest(`buyer/order?status=${selected}`, currentPage)


    return (
        <>
            {showDetails ? (
                <>
                    <div className="flex items-center w-fit gap-3 text-primary-600 cursor-pointer"
                         onClick={() => router.replace({pathname: router.pathname, query: {tab: selected}})}>
                        <Right className='fill-primary-700'/>
                        بازگشت
                    </div>

                    {selected === "paid" && <OrderDetails orderId={id}/>}
                    {selected === "delivered" && <DeliveryDetails orderId={id}/>}
                    {selected === "returned" && <ReturnDescription orderId={id}/>}
                    {selected === "cancelled" && <CancellationDetails orderId={id}/>}
                </>
            ) : (<div className="container flex w-full flex-col gap-6">
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
                        panel: "gap-6 flex flex-col",
                    }}
                    selectedKey={selected}
                    onSelectionChange={handleTabChange}
                    color="primary"
                    variant="underlined"
                >
                    <Tab
                        key="paid"
                        title="سفارشات جاری"
                    >
                        {isLoading ?
                            <div className="w-full centerOfParent"><Spinner color="success" label="درحال بارگزاری"/>
                            </div> : orders?.length > 0 ? orders.map(e => (
                                <CurrentOrders
                                    key={e.id}
                                    {...e}
                                    onSelectItem={(orderId) =>
                                        router.replace({
                                            pathname: router.pathname,
                                            query: {id: orderId, tab: "paid"},
                                        })
                                    }
                                />
                            )) : <Alert title="خالی است" description="سفارشی با این وضعیت وجود ندارد"/>}
                    </Tab>
                    <Tab
                        key="delivered"
                        title="تحویل شده"
                    >
                        {isLoading ?
                            <div className="w-full centerOfParent"><Spinner color="success" label="درحال بارگزاری"/>
                            </div> : orders?.length > 0 ? orders.map(e => (
                                <Delivered
                                    key={e.id}
                                    {...e}
                                    onSelectItem={(orderId) =>
                                        router.replace({
                                            pathname: router.pathname,
                                            query: {id: orderId, tab: "delivered"},
                                        })
                                    }
                                />
                            )) : <Alert title="خالی است" description="سفارشی با این وضعیت وجود ندارد"/>}

                    </Tab>
                    <Tab
                        key="returned"
                        title="مرجوع شده"
                    >
                        {isLoading ?
                            <div className="w-full centerOfParent"><Spinner color="success" label="درحال بارگزاری"/>
                            </div> : orders?.length > 0 ? orders.map(e => (
                                <Returned
                                    key={e.id}
                                    {...e}
                                    onSelectItem={(orderId) =>
                                        router.replace({
                                            pathname: router.pathname,
                                            query: {id: orderId, tab: "returned"},
                                        })
                                    }
                                />
                            )) : <Alert title="خالی است" description="سفارشی با این وضعیت وجود ندارد"/>}

                    </Tab>
                    <Tab
                        key="cancelled"
                        title="لغو شده"
                    >
                        {isLoading ?
                            <div className="w-full centerOfParent"><Spinner color="success" label="درحال بارگزاری"/>
                            </div> : orders?.length > 0 ? orders.map(e => (
                                <Cancelled
                                    key={e.id}
                                    {...e}
                                    onSelectItem={(orderId) =>
                                        router.replace({
                                            pathname: router.pathname,
                                            query: {id: orderId, tab: "cancelled"},
                                        })
                                    }
                                />
                            )) : <Alert title="خالی است" description="سفارشی با این وضعیت وجود ندارد"/>}

                    </Tab>
                </Tabs>
                <div className="centerOfParent">
                    <Pagination total={pagination?.total} per_page={pagination?.per_page} currentPage={currentPage}
                                onChange={setCurrentPage}/>
                </div>
            </div>)}
        </>
    );
};

export default Orders;