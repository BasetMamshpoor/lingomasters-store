import Image from 'next/image';
//icons
import Book from '@icons/book.svg';
import Person from '@icons/sellers.svg';
import Book2 from '@icons/book2.svg';



const AboutBook = () => {
    return (
        <>
            <div className="p-6 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-2" id='about'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Book className='w-5 h-5' /></div>
                    <span className='text-primary-950'>درباره کتاب</span>
                </div>
                <div className="flex justify-between">
                    <ul className="flex flex-col gap-4">
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نام کتاب</span>
                            </div>
                            <span className="col-span-1 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نویسنده</span>
                            </div>
                            <span className="col-span-1 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book2 className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>تعداد جلد</span>
                            </div>
                            <span className="col-span-1 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نام کتاب</span>
                            </div>
                            <span className="col-span-1 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نویسنده</span>
                            </div>
                            <span className="col-span-1 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book2 className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>تعداد جلد</span>
                            </div>
                            <span className="col-span-1 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نام کتاب</span>
                            </div>
                            <span className="col-span-1 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نویسنده</span>
                            </div>
                            <span className="col-span-1 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book2 className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>تعداد جلد</span>
                            </div>
                            <span className="col-span-1 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نام کتاب</span>
                            </div>
                            <span className="col-span-1 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نویسنده</span>
                            </div>
                            <span className="col-span-1 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book2 className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>تعداد جلد</span>
                            </div>
                            <span className="col-span-1 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نام کتاب</span>
                            </div>
                            <span className="col-span-1 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-3'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person className='w-4 h-4' /></div>
                                <span className='text-natural_gray-950'>نویسنده</span>
                            </div>
                            <span className="col-span-1 text-right">Jesica Merry</span>
                        </li>
                    </ul>
                    <div className="centerOfParent max-w-[220px] w-full h-auto flex-shrink-0">
                        <Image
                            src="/images/product.png"
                            alt="Responsive example"
                            width={0}
                            height={0} sizes='100vw'
                            className='w-full h-full object-contain' />
                    </div>
                </div>
            </div>
        </>
    );
};

export default AboutBook;