//icons
import Book from '@icons/book.svg';

const Description = () => {
    return (
        <>
            <div className="p-6 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-2" id='desc'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Book className='w-5 h-5' /></div>
                    <span className='text-primary-950'>توضیحات تکمیلی</span>
                </div>
                <ul className="flex flex-col gap-4">
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>ابعاد</span>
                        <span className="col-span-3">۳۰۰*۴۰۰</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>نوع کاغذ</span>
                        <span className="col-span-3">گلاسه</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>نوع جلد</span>
                        <span className="col-span-3">شومیز</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>شماره شابک</span>
                        <span className="col-span-3">۱۲۳۴۴۵</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>شماره فیپا</span>
                        <span className="col-span-3">۱۲۳۴۴۵</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>لحجه فایل صوتی</span>
                        <span className="col-span-3">British</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>لحجه فایل ویدیویی</span>
                        <span className="col-span-3">British</span>
                    </li>
                    <li className='grid grid-cols-5'>
                        <span className='col-span-2 text-natural_gray-950'>وزن</span>
                        <span className="col-span-3">۵۰۰ گرم</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Description;