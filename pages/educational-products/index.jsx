import Filter from "@/components/Category/Filter";
import FiltersEdu from "@/components/Category/FiltersEdu";
import Products from "@/components/Category/Products";
import SortBy from "@/components/Category/SortBy";
import Book from '@icons/book3.svg';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const ProductsEdu = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const router = useRouter()
    const [isRouterReady, setIsRouterReady] = useState(false);

    useEffect(() => {
        if (router.isReady) {
            setIsRouterReady(true);
        }
    }, [router.isReady]);
    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            {isRouterReady && <FiltersEdu setCurrentPage={setCurrentPage} />}
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 px-4'>
                            <div className='lg:hidden flex items-center justify-between'>
                                <div className="flex items-center gap-4">
                                    <Book className='fill-[#243464] w-6 h-6' />
                                    <h1 className="font-semibold">وسایل کمک آموزشی</h1>
                                </div>
                                <div className="centerOfParent">
                                    {isRouterReady && <Filter setCurrentPage={setCurrentPage} />}
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className="">
                                    <div className="lg:flex hidden items-center gap-4">
                                        <Book className='fill-[#243464] w-8 h-8' />
                                        <h1 className="text-xl font-semibold">وسایل کمک آموزشی</h1>
                                    </div>
                                </div>
                                <SortBy setCurrentPage={setCurrentPage} />
                            </div>
                            {isRouterReady && <Products edu currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsEdu;