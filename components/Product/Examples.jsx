//icons
import Copy from '@icons/copy.svg';
import Image from 'next/image';

const Examples = ({ images }) => {
    return (
        <>
            <div className="sm:p-6 px-3 py-4 flex flex-col gap-6 bg-white rounded-lg border-natural_gray-100 border scroll-m-52" id='example'>
                <div className="centerOfParent gap-2 w-fit">
                    <div className="centerOfParent"><Copy className='w-5 h-5' /></div>
                    <span className='sm:text-base text-sm text-primary-950'>نمونه صفحات</span>
                </div>
                <div className="flex items-center gap-4 overflow-x-auto">
                    {!!images && images.map(i => {
                        return (
                            <div key={i.id} className="centerOfParen sm:flex-[1_0_0] h-[216px] flex-shrink-0 rounded overflow-hidden">
                                <Image
                                    src={i.path}
                                    alt="Responsive example"
                                    width={0}
                                    height={0} sizes='100vw'
                                    className='w-full h-full object-contain' />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    );
};

export default Examples;