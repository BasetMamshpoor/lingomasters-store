import Icon from '@icons/category.svg';
import Book from '@icons/book-white.svg';
import Link from 'next/link';

const Categories = () => {
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
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                        <Link href='/category/printed' className="flex flex-col items-center gap-6">
                            <div className="centerOfParent p-4 bg-primary-700 rounded-full"><Book className='w-8 h-8' /></div>
                            <span className='p-2'>کتاب های چاپی</span>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Categories;