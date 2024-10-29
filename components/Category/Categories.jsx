import Icon from '@icons/category.svg';
import Link from 'next/link';
import { Skeleton } from '@nextui-org/react';

const Categories = ({ data = [] }) => {
    return (
        <>
            <div className="my-12">
                <div className="container flex flex-col gap-12">
                    <div className="centerOfParent w-full">
                        <div className="centerOfParent gap-4">
                            <p className='text-2xl text-black'>انواع دسته بندی کتاب ها</p>
                            <div className="centerOfParent"><Icon /></div>
                        </div>
                    </div>
                    <div className="flex items-center justify-evenly flex-wrap gap-4 w-full overflow-hidden [&>*]:w-[139px]">
                        {!data ? [...Array(8)].map(p => {
                            return <div className="flex flex-col items-center gap-6">
                                <Skeleton className="flex rounded-full w-12 h-12" />
                                <Skeleton className="h-3 w-1/2 rounded-lg" />
                            </div>
                        }) : <>
                            {data.length ? data.map(c => {
                                return (
                                    <Link href={`/category/${c.slug}`} className="flex flex-col items-center gap-6">
                                        <div className="centerOfParent p-4 bg-primary-700 rounded-full"><img src={c.icon} alt="" className='w-8 h-8' /></div>
                                        <span className='p-2'>{c.title}</span>
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