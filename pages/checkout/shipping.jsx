import Spin from "@icons/loader.svg";
import Header from "@/components/Checkout/Header";
import formatCurrency from "@/helpers/formatCurrency";
import Address from "@/components/Checkout/Address";
import SendDownloadLink from "@/components/Checkout/SendDownloadLink";


const Shipping = () => {

    return (
        <>
            <main dir="rtl">
                <div className="container flex flex-col gap-20">
                    <Header page='سبد خرید' active={2} />
                    <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-6 gap-y-4">
                        <div className="col-span-6 flex flex-col gap-8 p-6 border border-natural_gray-100 rounded-lg bg-white">
                            <Address />
                            <SendDownloadLink />
                        </div>
                        <div className="col-span-2">
                            <div className="flex flex-col gap-10 p-4 h-fit border border-natural_gray-100 rounded-lg bg-white">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">قیمت کالاها</span>
                                        <span className="hasToman text-sm">{formatCurrency(200000)}</span>
                                    </div>
                                    <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">تخفیف</span>
                                        <span className="text-red-500 text-sm">۵۰٪ تخفیف</span>
                                    </div>
                                    <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">هزینه ارسال</span>
                                        <span className="hasToman text-sm">{formatCurrency(40000)}</span>
                                    </div>
                                    <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">قیمت نهایی</span>
                                        <span className="hasToman text-sm text-green-600">{formatCurrency(240000)}</span>
                                    </div>
                                    <div className="flex flex-col">
                                        <label className="block my-2 text-xs font-medium">کد تخفیف</label>
                                        <div className="flex">
                                            <button type="button" className="inline-flex items-center px-2 text-xs text-white bg-primary-600 rounded-e-0 border-gray-300 border-e-0 rounded-s">
                                                {false ? <Spin className="animate-spinner-ease-spin" /> : "ثبت کد"}
                                            </button>
                                            <input type="text" id="website-admin" className="rounded-none rounded-e bg-gray-50 border text-gray-900 focus:ring-primary-500 focus:border-primary-500 block flex-1 min-w-0 w-full text-sm border-gray-300 px-2.5 py-1.5" />
                                        </div>
                                    </div>
                                </div>
                                <button className="text-white bg-green-600 rounded h-12 lg:flex hidden items-center justify-center ">پرداخت</button>
                                <div className="lg:hidden flex h-16 border-t px-8 items-center justify-between fixed bg-white w-ful left-0 right-0 bottom-0">
                                    <button className="text-white bg-green-600 rounded h-10 px-5 sm:text-sm text-xs centerOfParent ">پرداخت</button>
                                    <div className="flex flex-col items-end gap-2 sm:text-sm text-xs">
                                        <span>قیمت نهایی</span>
                                        <span className="hasToman text-green-600">{formatCurrency(240000)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className=""></div>
                </div>
            </main>
        </>
    );
};

export default Shipping;