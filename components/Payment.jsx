import React, {useContext} from 'react';
import {Button, Radio, RadioGroup} from "@heroui/react";
import Link from "next/link";
import {useRouter} from "next/router";
import {Information} from "@/providers/InformationProvider";

const Payment = ({selected, setSelected, isLoading, price, handlePay, final_price}) => {
    const {asPath} = useRouter()
    const {student, wallet} = useContext(Information)
    const balance = wallet?.balance

    return (
        <>
            <RadioGroup
                className='w-full'
                color='success'
                style={{
                    "--heroui-success": "196 94% 25%",
                }}
                value={selected}
                onValueChange={setSelected}>
                <Radio value="1" classNames={{label: 'text-xs'}}>پرداخت آنلاین</Radio>
                <Radio isDisabled={!student} value="2" classNames={{label: 'text-xs'}}>پرداخت با
                    کیف‌پول</Radio>
            </RadioGroup>
            {selected === "2" && <div
                className="relative overflow-hidden p-6 rounded-2xl w-full bg-[radial-gradient(128.8%_133.57%_at_109.25%_68.49%,_#B9DAFF_0%,_#4B89E6_100%)]">
                <img src='/images/wallet.png'
                     className='absolute  top-0 bottom-0 left-0 right-0 w-full h-full object-cover'/>
                <div className="relative z-[1] flex flex-col items-center gap-5 text-white text-sm">
                    <div className="flex items-center gap-1">
                        <p>موجودی: </p>
                        <p className={`${(final_price || price) < balance ? "text-success-700" : ""} hasToman`}>{balance.toLocaleString()}</p>
                    </div>
                    {(final_price || price) > balance && <>
                        <div className="flex items-center gap-1">
                            <p>مبلغ قابل شارژ:</p>
                            <p className='hasToman'>{((final_price || price) - balance).toLocaleString()}</p>
                        </div>
                        <Link href={`/profile/wallet?backUrl=${asPath}`}
                              className="border border-white text-sm whitespace-nowrap px-2 py-1 rounded">افزایش
                            موجودی</Link>
                    </>}
                </div>
            </div>}
            <Button
                isLoading={isLoading}
                isDisabled={(final_price || price) > balance && selected === "2"}
                type='button'
                onPress={handlePay}
                color="success"
                style={{
                    "--heroui-success": "140 82% 33%",
                }}
                className="w-full text-white"
                radius='sm'>پرداخت {selected === "1" ? "آنلاین" : "با کیف پول"}</Button>
        </>
    );
};

export default Payment;