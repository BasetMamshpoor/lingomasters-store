import Filters from "@/components/Category/Filters";
import Products from "@/components/Category/Products";
import SortBy from "@/components/Category/SortBy";
import { useRouter } from "next/router";

const ProductsList = () => {
    const router = useRouter()
    const { slug, sort } = router.query

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className='grid grid-cols-12 gap-4'>
                        <div className='col-span-3 bg-white'>
                            {/* {router.isReady && <Filters category={slug} router={router} />} */}
                        </div>
                        <div className='flex flex-col col-span-9'>
                            <div className='flex items-center'>
                                <SortBy router={router} sort={router.query.sort} />
                                <div className=""></div>
                            </div>
                            <Products category={slug} />
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsList;