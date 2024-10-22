//icons
import Book from '@icons/book.svg';

const Description = ({ product = {} }) => {
    const { Dimensions, Paper_type, Cover_type, weight, fipa_number, shabak_number, audio_accent, video_accent } = product
    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52" id='desc'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Book className='w-5 h-5' /></div>
                    <span className='sm:text-base text-sm text-primary-950'>توضیحات تکمیلی</span>
                </div>
                <ul className="flex flex-col gap-4">
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>ابعاد</span>
                        <span className="col-span-3">{Dimensions}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>نوع کاغذ</span>
                        <span className="col-span-3">{Paper_type}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>نوع جلد</span>
                        <span className="col-span-3">{Cover_type}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>شماره شابک</span>
                        <span className="col-span-3">{shabak_number}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>شماره فیپا</span>
                        <span className="col-span-3">{fipa_number}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>لحجه فایل صوتی</span>
                        <span className="col-span-3">{audio_accent}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>لحجه فایل ویدیویی</span>
                        <span className="col-span-3">{video_accent}</span>
                    </li>
                    <li className='grid grid-cols-5 sm:text-base text-xs'>
                        <span className='col-span-2 text-natural_gray-950'>وزن</span>
                        <span className="col-span-3">{weight} گرم</span>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Description;