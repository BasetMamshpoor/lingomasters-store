import Filter from "@/components/Category/Filter";
import FiltersEdu from "@/components/Category/FiltersEdu";
import Products from "@/components/Category/Products";
import SortBy from "@/components/Category/SortBy";

const ProductsEdu = () => {

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            <FiltersEdu />
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4'>
                            <div className='flex items-center justify-between'>
                                <div className=""> </div>
                                <div className="flex items-center gap-6">
                                    <div className="lg:hidden centerOfParent">
                                        <Filter edu />
                                    </div>
                                    <SortBy />
                                </div>
                            </div>
                            <Products edu />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsEdu;