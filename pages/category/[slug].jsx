import Filter from "@/components/Category/Filter";
import Filters from "@/components/Category/Filters";
import Products from "@/components/Category/Products";
import SortBy from "@/components/Category/SortBy";
import { useRouter } from "next/router";
import {useContext, useEffect, useState} from "react";

import Book from '@icons/book-open.svg'
import {Category} from "@/providers/CategoriesProviders";

const ProductsList = () => {
    const router = useRouter()
    const {slug}=router.query;
    const {categories} = useContext(Category)
    const [category, setCategory] = useState(categories.find(c => c.slug === slug))
    const [currentPage, setCurrentPage] = useState(1)

    useEffect(() => {
        const category = JSON.parse(localStorage.getItem('category'))
        const { slug } = router.query
        const thisCategory = category.find(c => c.slug === slug)
        setCategory(thisCategory)
    }, [router.query])

    return (
        <>
            <section className='py-12' dir="rtl">
                <div className="container">
                    <div className='grid lg:grid-cols-12 grid-cols-1'>
                        <div className='hidden lg:block lg:col-span-3 bg-white'>
                            {router.isReady && <Filters setCurrentPage={setCurrentPage} />}
                        </div>
                        <div className='flex flex-col lg:col-span-9 gap-4 px-4'>
                            <div className='lg:hidden flex items-center justify-between'>
                                <div className="flex items-center gap-4">
                                    <Book className='fill-[#243464] w-6 h-6' />
                                    <h1 className="font-semibold">{category?.title}</h1>
                                </div>
                                <div className="centerOfParent">
                                    {router.isReady && <Filter setCurrentPage={setCurrentPage} />}
                                </div>
                            </div>
                            <div className='flex items-center justify-between'>
                                <div className="">
                                    <div className="lg:flex hidden items-center gap-4">
                                        <Book className='fill-[#243464] w-8 h-8' />
                                        <h1 className="text-xl font-semibold">{category?.title}</h1>
                                    </div>
                                </div>
                                <SortBy setCurrentPage={setCurrentPage} />
                            </div>
                            {router.isReady && <Products currentPage={currentPage} setCurrentPage={setCurrentPage} />}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ProductsList;