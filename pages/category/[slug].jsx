import Filter from "@/components/Category/Filter";
import Filters from "@/components/Category/Filters";
import Products from "@/components/Category/Products";
import SortBy from "@/components/Category/SortBy";
import { useRouter } from "next/router";

const ProductsList = () => {
    const router = useRouter()
    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            {router.isReady && <Filters />}
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4'>
                            <div className='flex items-center justify-between'>
                                <div className=""> </div>
                                <div className="flex items-center gap-6">
                                    <div className="lg:hidden centerOfParent">
                                        {router.isReady && <Filter />}
                                    </div>
                                    <SortBy />
                                </div>
                            </div>
                            <Products />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsList;