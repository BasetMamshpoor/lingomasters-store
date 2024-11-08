import Brush from "@icons/brush.svg";
import Header from "@/components/Checkout/Header";
import Products from "@/components/Checkout/Products";
import formatCurrency from "@/helpers/formatCurrency";
import { useContext } from "react";
import { CartContext } from "@/providers/CartContextProvider";
import Link from "next/link";

const Cart = () => {
    const { state, dispatch } = useContext(CartContext)
    return (
        <>
            <main dir="rtl">
                <div className="container flex flex-col gap-20">
                    <Header page='سبد خرید' active={1} />
                    <div className="grid lg:grid-cols-8 grid-cols-1 lg:gap-6 gap-y-4">
                        <div className="col-span-6 p-6 border border-natural_gray-100 rounded-lg bg-white flex flex-col gap-10">
                            <div className="flex items-center justify-between">
                                <p className="font-bold">سبد خرید شما</p>
                                {!!state.itemsCounter && <div className="centerOfParent cursor-pointer" onClick={() => dispatch({ type: "CLEAR" })}><Brush /></div>}
                            </div>
                            <div className="flex flex-col gap-6 items-stretch">
                                <Products />
                            </div>
                        </div>
                        {!!state.itemsCounter && <div className="col-span-2">
                            <div className="flex flex-col gap-10 p-4 h-fit border border-natural_gray-100 rounded-lg bg-white">
                                <div className="flex flex-col gap-3">
                                    <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">قیمت کالاها</span>
                                        <span className="hasToman text-sm">{formatCurrency(state.total)}</span>
                                    </div>
                                    {state.total !== state.total_after_off && <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <div className="flex items-center gap-1">
                                            <span className="text-xs text-red-500">تخفیف</span>
                                            <span className="text-red-500 text-xs">({Math.ceil(100 - (state.total_after_off / state.total * 100)) + '%'})</span>
                                        </div>
                                        <span className="hasToman">{formatCurrency(state.total - state.total_after_off)}</span>
                                    </div>}
                                    <div className="flex items-center rounded h-8 justify-between px-3 bg-natural_gray-50">
                                        <span className="text-xs">قیمت نهایی</span>
                                        <span className="hasToman text-sm text-green-600">{formatCurrency(state.total_after_off)}</span>
                                    </div>
                                </div>
                                <Link href='/checkout/shipping' className="effect-2 text-white bg-primary-600 rounded h-12 lg:flex hidden items-center justify-center">ادامه ثبت سفارش</Link>
                                <div className="lg:hidden flex h-16 border-t px-8 items-center justify-between fixed z-30 bg-white w-ful left-0 right-0 bottom-0">
                                    <Link href='/checkout/shipping' className="text-white bg-primary-600 rounded h-10 px-5 sm:text-sm text-xs centerOfParent">ادامه ثبت سفارش</Link>
                                    <div className="flex flex-col items-end gap-2 sm:text-sm text-xs">
                                        <span>قیمت نهایی</span>
                                        <span className="hasToman text-green-600">{formatCurrency(state.total_after_off)}</span>
                                    </div>
                                </div>
                            </div>
                        </div>}
                    </div>
                    <div className=""></div>
                </div>
            </main>
        </>
    );
};

export default Cart;