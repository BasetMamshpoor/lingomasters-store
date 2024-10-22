
//icons
import Media from '@icons/media.svg';
import Card from '../Video/Card';

const Video = ({ movie, image, }) => {
    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52" id='video'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Media className='w-5 h-5' /></div>
                    <span className='sm:text-base text-sm text-primary-950'>ویدیو کتاب</span>
                </div>
                <div className="relative cursor-pointer rounded overflow-hidden">
                    <Card bgSrc={image || '/images/video/bg.jfif'} className='h-[268px] [&>img]:object-cover' movie={movie} />
                </div>
            </div>
        </>
    );
};

export default Video;