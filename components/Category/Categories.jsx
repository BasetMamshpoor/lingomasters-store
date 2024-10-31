import Icon from '@icons/category.svg';
import Link from 'next/link';
import { Skeleton } from '@nextui-org/react';

const Categories = ({ data }) => {
    return (
        <>
            <div className="my-12">
                <div className="container flex flex-col gap-12">
                    <div className="centerOfParent w-full">
                        <div className="centerOfParent gap-4">
                            <p className='lg:text-2xl text-black sm:text-base text-sm'>انواع دسته بندی کتاب ها</p>
                            <div className="centerOfParent"><Icon /></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly flex-wrap gap-4 w-full overflow-hidden [&>*]:w-[139px]">
                        {!data ? [...Array(8)].map((p, i) => {
                            return <div key={i} className="flex flex-col items-center gap-6">
                                <Skeleton className="flex rounded-full w-12 h-12" />
                                <Skeleton className="h-3 w-1/2 rounded-lg" />
                            </div>
                        }) : <>
                            {data.length ? data.map(c => {
                                return (
                                    <Link key={c.id} href={`/category/${c.slug}`} className="flex flex-col items-center gap-6">
                                        <div className="centerOfParent sm:p-4 p-3 bg-primary-700 rounded-full"><img src={c.icon} alt="" className='sm:w-8 sm:h-8 w-5 h-5' /></div>
                                        <span className='p-2 sm:text-base text-sm'>{c.title}</span>
                                    </Link>
                                )
                            }) : <div>دسته ای وجود ندارد</div>}
                        </>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;