import { Breadcrumbs, BreadcrumbItem } from '@nextui-org/react';
//icons
import Share from '@icons/share.svg'
import Heart from '@icons/heart.svg'
import Star from '@icons/magic-star.svg'
import FillHeart from '@icons/fill-heart.svg'
import Flag from '@icons/Flags/Country=United States of America, Style=Flag, Radius=On.svg'

const Hero = ({ product = {} }) => {
    const { title, rate, id, language, is_like, category, seller, subject, age_group, page_number, product_type, book_category } = product

    return (
        <>
            <div className="hidden lg:block mb-20">
                <div className="container">
                    <div className="relative bg-gradient-to-t from-[#2D59C826] to-[#89C9FF14] h-[294px] py-8 px-10">
                        <div className="">
                            <div className="flex items-center justify-between mb-10">
                                <Breadcrumbs
                                    separator='/'
                                    classNames={{ list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600' }}
                                    itemClasses={{
                                        separator: "px-2 text-natural_gray-600"
                                    }}>
                                    <BreadcrumbItem href="/">صفحه اصلی</BreadcrumbItem>
                                    <BreadcrumbItem href={`/category/${category?.slug}`}>{category?.title}</BreadcrumbItem>
                                    <BreadcrumbItem>{title}</BreadcrumbItem>
                                </Breadcrumbs>
                                <div className="centerOfParent cursor-pointer" onClick={() => { navigator.clipboard.writeText(location.href) }}><Share /></div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center gap-3">
                                    <h1 className='text-2xl font-semibold'>{title}</h1>
                                    <span className='text-natural_gray-600 text-xs'>(کد کتاب: {id})</span>
                                </div>
                                <div className="centerOfParent">{is_like ? <FillHeart /> : <Heart />}</div>
                            </div>
                            <div className="flex items-center justify-between mb-3">
                                <div className="flex items-center">
                                    <h2 className='text-natural_gray-950'>فروشنده : {seller?.name}</h2>
                                </div>
                                <div className="flex items-center gap-1">
                                    <div className="flex items-center [&>svg]:w-4 [&>svg]:h-4">
                                        <Star className={rate < 5 ? '' : 'fill-[#F3B944]'} />
                                        <Star className={rate < 4 ? '' : 'fill-[#F3B944]'} />
                                        <Star className={rate < 3 ? '' : 'fill-[#F3B944]'} />
                                        <Star className={rate < 2 ? '' : 'fill-[#F3B944]'} />
                                        <Star className={rate < 1 ? '' : 'fill-[#F3B944]'} />
                                    </div>
                                    <div className="flex items-center gap-1 text-xs">
                                        <strong>4.8</strong>
                                        از {80} نفر
                                    </div>
                                </div>
                            </div>
                            <div className="centerOfParent w-fit"><Flag /></div>
                        </div>
                        <div className="w-full absolute -bottom-5 left-0 flex gap-4 items-center px-10">
                            <div className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>زبان</p>
                                <h4 className='text-sm font-semibold'>{language}</h4>
                            </div>
                            <div className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>موضوع کتاب</p>
                                <h4 className='text-sm font-semibold'>{subject}</h4>
                            </div>
                            <div className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>نوع کتاب</p>
                                <h4 className='text-sm font-semibold'>{product_type}</h4>
                            </div>
                            <div className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>رده کتاب</p>
                                <h4 className='text-sm font-semibold'>{book_category}</h4>
                            </div>
                            <div className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>رده سنی</p>
                                <h4 className='text-sm font-semibold'>{age_group}</h4>
                            </div>
                            <div className="centerOfParent h-12 flex-[1_0_0] gap-1 rounded-lg bg-primary-50 [box-shadow:0px_4px_6px_0px_rgba(54,_108,_218,_0.08)]">
                                <p className='text-natural_gray-700 text-xs'>تعداد جلد</p>
                                <h4 className='text-sm font-semibold'>{page_number}</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Hero;