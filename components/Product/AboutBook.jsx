import Image from 'next/image';
//icons
import Book from '@icons/book.svg';
import Book2 from '@icons/book2.svg';
import Person from '@icons/sellers.svg';
import Copy from '@icons/copy.svg';
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg'
import Alt from '@icons/file-alt.svg';
import Age from '@icons/growth.svg';
import File from '@icons/file.svg';
import Voice from '@icons/microphone.svg';
import Video from '@icons/media.svg';



const AboutBook = ({ product = {} }) => {

    const { title, rate, id, language, is_like, category, seller, subject, age_group, page_number, product_type_id } = product

    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-2" id='about'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Book className='w-5 h-5' /></div>
                    <span className='sm:text-base text-sm text-primary-950'>درباره کتاب</span>
                </div>
                <div className="flex sm:flex-row flex-col-reverse sm:items-start items-stretch sm:gap-0 gap-4 justify-between">
                    <ul className="flex flex-col gap-4">
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='sm:w-4 sm:h-4 w-3 h-3' /></div>
                                <span className='text-natural_gray-950'>نام کتاب</span>
                            </div>
                            <span className="col-span-3 text-right">{title}</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Person className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>نویسنده</span>
                            </div>
                            <span className="col-span-3 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book2 className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>تعداد جلد</span>
                            </div>
                            <span className="col-span-3 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Copy className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>تعداد صفحه</span>
                            </div>
                            <span className="col-span-3 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Flag className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>زبان</span>
                            </div>
                            <span className="col-span-3 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Alt className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>انتشارات</span>
                            </div>
                            <span className="col-span-3 text-right">پکیج ۵ تاییپکیج ۵ تاییپکیج ۵ تاییپکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Age className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>رده سنی</span>
                            </div>
                            <span className="col-span-3 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><File className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>موضوع کتاب</span>
                            </div>
                            <span className="col-span-3 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Alt className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>سال انتشار</span>
                            </div>
                            <span className="col-span-3 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='sm:w-4 sm:h-4 w-3 h-3' /></div>
                                <span className='text-natural_gray-950'>نوع کتاب</span>
                            </div>
                            <span className="col-span-3 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Copy className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>نوبت چاپ</span>
                            </div>
                            <span className="col-span-3 text-right">Jesica Merry</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Book className='sm:w-4 sm:h-4 w-3 h-3' /></div>
                                <span className='text-natural_gray-950'>رده کتاب</span>
                            </div>
                            <span className="col-span-3 text-right ">پکیج ۵ تایی</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Voice className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>فایل صوتی</span>
                            </div>
                            <span className="col-span-3 text-right">How to learn English</span>
                        </li>
                        <li className='grid grid-cols-5 sm:text-base text-xs'>
                            <div className="col-span-2 flex items-center gap-2">
                                <div className="centerOfParent"><Video className='sm:w-4 sm:h-4 w-3 h-3 fill-primary-800' /></div>
                                <span className='text-natural_gray-950'>فایل ویدیویی</span>
                            </div>
                            <span className="col-span-3 text-right">Jesica Merry</span>
                        </li>
                    </ul>
                    <div className="centerOfParent sm:max-w-[220px] max-w-[156px] w-full h-auto flex-shrink-0 mx-auto">
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