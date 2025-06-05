import React, {useContext, useEffect} from 'react';
import Left from "@icons/arrow-left.svg";
import ReportTabs from "@/components/Profile/Reports/ReportTabs";
import Link from "next/link";
import Deposit from "@/components/Profile/Wallet/Deposit";
import Withdraw from "@/components/Profile/Wallet/Withdraw";
import {addToast, Spinner} from "@heroui/react";
import {useRouter} from "next/router";
import {Information} from "@/providers/InformationProvider";

const Wallet = () => {
    const {query, push} = useRouter()
    const {wallet, reloadWallet} = useContext(Information)


    useEffect(() => {
        if (query.backFrom === 'payment' && query.backUrl)
            addToast({
                description: 'مایل هستید به صفحه قبل برگردید؟',
                color: 'warning',
                endContent: <div className="flex items-center gap-2">
                    <button className="border p-1 rounded text-xs"
                            onClick={() => push(query.backUrl)}>بله
                    </button>
                </div>
            })
    }, [query]);

    useEffect(() => {
        reloadWallet(Math.random())
    }, []);

    return (
        <>
            <div className="flex flex-col gap-20">
                <div className="flex flex-col items-center gap-6">
                    <div
                        className="relative overflow-hidden p-6 rounded-2xl sm:w-[411px] w-full bg-[radial-gradient(128.8%_133.57%_at_109.25%_68.49%,_#B9DAFF_0%,_#4B89E6_100%)]">
                        <img src='/images/wallet.png'
                             className='absolute  top-0 bottom-0 left-0 right-0 w-full h-full object-cover'/>
                        <div className="relative z-[1] flex flex-col gap-6 text-white text-sm">
                            <div className="flex items-center gap-2 justify-between text-base">
                                <p>موجودی کل</p>
                                <p className='hasToman'>{wallet ? wallet?.all.toLocaleString() :
                                    <Spinner variant="dots" color="white" size="sm"/>}</p>
                            </div>
                        </div>
                    </div>
                    <div className="flex items-center gap-6 sm:w-[411px] w-full">
                        <Withdraw amount={wallet?.all} setReload={reloadWallet}/>
                        <Deposit/>
                    </div>
                </div>
                <div className="flex flex-col gap-10">
                    <div className="flex items-center justify-between">
                        <p className="font-bold">گزارشات اخیر</p>
                        <Link href="/profile/reports" className="flex items-center gap-2 text-primary-600 text-sm">
                            مشاهده همه گزارشات
                            <Left className="fill-primary-700 w-5 h-5"/>
                        </Link>
                    </div>
                    <ReportTabs/>
                </div>
            </div>

        </>
    );
};

export default Wallet;