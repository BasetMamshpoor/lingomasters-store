import Filter from "@/components/Category/Filter";
import Filters from "@/components/Category/Filters";
import Products from "@/components/Seller/Products";
import SortBy from "@/components/Category/SortBy";
import {useRouter} from "next/router";
import {useState} from "react";
import Users from "@icons/users.svg";
import useGetRequest from "@/hooks/useGetRequest";

const Seller = () => {
    const router = useRouter()
    const {id} = router.query
    const [currentPage, setCurrentPage] = useState(1)

    const [data, , , , , isLoading] = useGetRequest(`/product/seller/info/${id}`)

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:flex lg:col-span-3 flex-col gap-8'>
                            <div
                                className="rounded-lg border border-natural_gray-100 bg-white lg:flex hidden flex-col items-center gap-10 py-6 px-4">
                                <div className="flex items-center gap-4">
                                    <Users className="fill-primary-950 w-12 h-12"/>
                                    <div className="flex flex-col gap-3">
                                        <p className="">{!isLoading && data.seller}</p>
                                        <p className="text-natural_gray-950 text-sm">{!isLoading && data.number} نفر نظر
                                            داده اند</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col item-center gap-4">
                                        <span
                                            className="text-success-600 text-sm text-center">{!isLoading && data.satisfaction}%</span>
                                        <span className="text-natural_gray-950 text-xs">رضایت از کالاها</span>
                                    </div>
                                    <div className="flex flex-col item-center gap-4">
                                        <span
                                            className="text-success-600 text-sm text-center">{!isLoading && data.rating}%</span>
                                        <span className="text-natural_gray-950 text-xs">تامین به موقع</span>
                                    </div>
                                    <div className="flex flex-col item-center gap-4">
                                        <span
                                            className="text-success-600 text-sm text-center">{!isLoading && data.not_returned_percent}%</span>
                                        <span className="text-natural_gray-950 text-xs">بدون مرجوعی</span>
                                    </div>
                                </div>
                            </div>
                            {router.isReady && <Filters setCurrentPage={setCurrentPage}/>}
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 px-4'>
                            <div className='lg:hidden flex items-center justify-between'>
                                <div className=""></div>
                                <div className="centerOfParent">
                                    {router.isReady && <Filter setCurrentPage={setCurrentPage}/>}
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className=""></div>
                                <SortBy setCurrentPage={setCurrentPage}/>
                            </div>
                            <div
                                className="rounded-lg border border-natural_gray-100 bg-white lg:hidden flex flex-col items-center gap-10 py-6 px-4">
                                <div className="flex items-center gap-4">
                                    <Users className="fill-primary-950 w-8 h-8"/>
                                    <div className="flex flex-col gap-3">
                                        <p className="text-sm">{!isLoading && data.seller}</p>
                                        <p className="text-natural_gray-950 text-xs">{!isLoading && data.number} نفر نظر
                                            داده اند</p>
                                    </div>
                                </div>
                                <div className="flex items-center gap-2">
                                    <div className="flex flex-col item-center gap-4">
                                        <span
                                            className="text-success-600 text-center text-sm">{!isLoading && data.satisfaction}%</span>
                                        <span className="text-natural_gray-950 text-xs">رضایت از کالاها</span>
                                    </div>
                                    <div className="flex flex-col item-center gap-4">
                                        <span
                                            className="text-success-600 text-center text-sm">{!isLoading && data.rating}%</span>
                                        <span className="text-natural_gray-950 text-xs">تامین به موقع</span>
                                    </div>
                                    <div className="flex flex-col item-center gap-4">
                                        <span
                                            className="text-success-600 text-center text-sm">{!isLoading && data.not_returned_percent}%</span>
                                        <span className="text-natural_gray-950 text-xs">بدون مرجوعی</span>
                                    </div>
                                </div>
                            </div>
                            {router.isReady &&
                                <Products isSeller currentPage={currentPage} setCurrentPage={setCurrentPage}/>}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Seller;