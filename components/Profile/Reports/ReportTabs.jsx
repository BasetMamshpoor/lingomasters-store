import React  from 'react';
import {Tab, Tabs} from "@heroui/react";
import Withdraw from "@/components/Profile/Reports/Withdraw";
import Deposit from "@/components/Profile/Reports/Deposit";
import Penalty from "@/components/Profile/Reports/Penalty";
import Wallet from "@/components/Profile/Reports/Wallet";
import Lingomasters from "@/components/Profile/Reports/Lingomasters";

const ReportTabs = () => {
    return (
        <>
            <div className="flex flex-col gap-8 w-full">
                <Tabs
                    aria-label="Tabs variants"
                    variant='underlined'
                    fullWidth
                    classNames={{
                        tabList: 'border-b pb-0 gap-2 w-full',
                        cursor: "shadow-none w-full",
                        tabContent: 'w-full sm:text-sm text-xs',
                        tab: "py-4 h-fit ",
                        panel: 'w-full'
                    }}
                    style={{
                        "--heroui-success": "38 87% 56%",
                    }}
                    color='success'>
                    <Tab key="payment" title="پرداخت">
                        <Wallet/>
                    </Tab>
                    <Tab key="lingo_payment" title="پرداخت از طریق لینگومستر">
                        <Lingomasters/>
                    </Tab>
                    <Tab key="withdraw" title="برداشت">
                        <Withdraw/>
                    </Tab>
                    <Tab key="deposit" title="افزایش موجودی">
                        <Deposit/>
                    </Tab>
                    <Tab key="penalty" title="جریمه‌ها">
                        <Penalty />
                    </Tab>
                </Tabs>
            </div>
        </>
    );
};

export default ReportTabs;