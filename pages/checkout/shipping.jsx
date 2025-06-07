import Header from "@/components/Checkout/Header";
import formatCurrency from "@/helpers/formatCurrency";
import Address from "@/components/Checkout/Address";
import SendDownloadLink from "@/components/Checkout/SendDownloadLink";
import {CartContext} from "@/providers/CartContextProvider";
import React, {useContext, useState} from "react";
import Payment from "@/components/Payment";
import Link from "next/link";
import {addToast, Alert, Button, Radio, RadioGroup, Spinner} from "@heroui/react";
import {useRouter} from "next/router";
import usePostRequest from "@/hooks/usePostRequest";
import {Information} from "@/providers/InformationProvider";
import CheckCoupon from "@/components/CheckCoupon";

const steps = ['سبد خرید', 'نکمیل سفارش', 'پرداخت']

const Shipping = () => {
    const {push, asPath} = useRouter()
    const {state, isLoading: loading, dispatch} = useContext(CartContext)
    const {wallet} = useContext(Information)
    const has_download = state.items.find(i => i.is_download === 1)
    const ship = state.items.find(i => i.is_download === 0)

    const [selected, setSelected] = useState('1')
    const [selectedAddress, setSelectedAddress] = useState({})
    const [coupon, setCoupon] = useState()
    const {sendPostRequest, isLoading} = usePostRequest()


    const handlePay = async () => {
        if (!selectedAddress.address_id || !selectedAddress.payment_method) {
            addToast({
                title: 'خطا',
                description: 'لطفا آدرس  و نحوه ارسال را انتخاب کنید',
                color: 'danger'
            })
            return
        }
        const {
            data: Data,
            status,
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest("POST", `/order${selected === '2' ? "/wallet" : ""}`, {
            code: coupon?.code || null, ...state,
            ...selectedAddress,
        }, false, true)
        if (success) {
            if (selected === '1') {
                push(Data.url)
            } else {
                addToast({
                    title: 'پرداخت با موفقیت انجام شد',
                    description: successMessage,
                    color: 'success',
                })
                push('/profile/wallet')
            }
            dispatch({type: "CLEAR"})
        } else
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger',
                endContent: status === 400 ? <Link href={`/profile/wallet?backUrl=${asPath}`}
                                                   className="border border-rose-600 text-sm whitespace-nowrap p-1 rounded">افزایش
                    موجودی</Link> : undefined
            })
    }

    const isPost = selectedAddress.payment_method === "post";
    const final_price = (coupon ? coupon.total_after_off : state.total_after_off) + (isPost ? parseInt(state.shipping_cost) : 0);

    return (
        <>
            {!!state.itemsCounter && <main dir="rtl">
                <div className="container flex flex-col gap-20">
                    <Header page='اطلاعات ارسال' active={2} steps={steps}/>
                    <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-6 gap-y-4">
                        <div
                            className="col-span-6 flex flex-col gap-8 p-6 border border-natural_gray-100 rounded-lg bg-white">
                            <RadioGroup
                                orientation="horizontal"
                                label="انتخاب روش ارسال"
                                className='w-full'
                                color='success'
                                style={{
                                    "--heroui-success": "196 94% 25%",
                                }}
                                value={selectedAddress.payment_method}
                                onValueChange={e => setSelectedAddress(p => ({...p, payment_method: e}))}>
                                <Radio value="tipax" classNames={{label: 'text-xs'}}>تیپاکس</Radio>
                                <Radio value="post" classNames={{label: 'text-xs'}}>پست پیشتاز</Radio>
                            </RadioGroup>
                            {!isPost && <Alert title="ارسال با تیپاکس" color="warning"
                                               description="هزینه ارسال با توجه به وزن سبد خرید و مسافت  تعیین میشود و هزینه آن در محل تحویل دریافت می گردد."/>}
                            {ship && <Address address_id={selectedAddress.address_id} setAddress={setSelectedAddress}/>}
                            {has_download && <SendDownloadLink/>}
                        </div>
                        <div className="col-span-2">
                            <div
                                className="flex flex-col gap-10 p-4 h-fit border border-natural_gray-100 rounded-lg bg-white">
                                <div className="flex flex-col gap-3">
                                    <div
                                        className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">قیمت کالاها</span>
                                        <span className="hasToman text-sm">{loading ?
                                            <Spinner variant="dots" size="sm"
                                                     color="success"/> : formatCurrency(state.total)}</span>
                                    </div>
                                    {state.total !== state.total_after_off && <div
                                        className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs text-red-500">تخفیف</span>
                                            <span
                                                className="text-red-500 text-xs">{loading ?
                                                <Spinner variant="dots" size="sm"
                                                         color="success"/> : "(" + Math.ceil(100 - (state.total_after_off / state.total * 100)) + '%)'}</span>
                                        </div>
                                        <span
                                            className="hasToman  text-sm">{loading ?
                                            <Spinner variant="dots" size="sm"
                                                     color="success"/> : formatCurrency(state.total - state.total_after_off)}</span>
                                    </div>}
                                    {isPost && <div
                                        className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">هزینه ارسال</span>
                                        <span className="hasToman text-sm">{loading ?
                                            <Spinner variant="dots" size="sm"
                                                     color="success"/> : formatCurrency(state.shipping_cost)}</span>
                                    </div>}
                                    {coupon && <div
                                        className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs text-red-500">کد تخفیف</span>
                                            <span
                                                className="text-red-500 text-xs">({coupon.discount_percentage + '%'})</span>
                                        </div>
                                        <span
                                            className="hasToman  text-sm">{formatCurrency(coupon.discount_amount)}</span>
                                    </div>}
                                    <div
                                        className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">قیمت نهایی</span>
                                        <span
                                            className="hasToman text-sm text-green-600">{loading ?
                                            <Spinner variant="dots" size="sm"
                                                     color="success"/> : formatCurrency(final_price)}</span>
                                    </div>
                                    <CheckCoupon state={state} setCoupon={setCoupon}/>
                                    <Payment price={coupon?.price} isLoading={isLoading || loading} handlePay={handlePay}
                                             selected={selected} setSelected={setSelected} final_price={final_price}/>
                                </div>
                            </div>
                        </div>
                        <div
                            className="lg:hidden flex h-16 border-t px-8 items-center justify-between fixed z-30 bg-white w-ful left-0 right-0 bottom-0">
                            <Button
                                isLoading={isLoading}
                                type='button'
                                isDisabled={state.total_after_off > wallet?.balance && selected === "2"}
                                onPress={handlePay}
                                color="success" style={{
                                "--heroui-success": "140 82% 33%",
                            }} className="text-white"
                                radius='sm'>پرداخت {selected === "1" ? "آنلاین" : "با کیف پول"}</Button>
                            <div className="flex flex-col items-end gap-2 sm:text-sm text-xs">
                                <span>قیمت نهایی</span>
                                <span className="hasToman text-green-600">{loading ?
                                    <Spinner variant="dots" size="sm"
                                             color="success"/> : formatCurrency(final_price)}</span>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </main>}
        </>
    );
};

export default Shipping;