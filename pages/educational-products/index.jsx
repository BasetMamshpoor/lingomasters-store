import Filter from "@/components/Category/Filter";
import FiltersEdu from "@/components/Category/FiltersEdu";
import Products from "@/components/Category/Products";
import SortBy from "@/components/Category/SortBy";
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
                        <div className='flex flex-col lg:col-span-9 gap-4'>
                            <div className='flex items-center justify-between'>
                                <div className=""> </div>
                                <div className="flex items-center gap-6">
                                    <div className="lg:hidden centerOfParent">
                                        {isRouterReady && <Filter edu setCurrentPage={setCurrentPage} />}
                                    </div>
                                    <SortBy setCurrentPage={setCurrentPage} />
                                </div>
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