import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const Header = ({ active, page }) => {
    return (
        <div>
            <div className="py-3 px-2">
                <Breadcrumbs
                    separator='/'
                    classNames={{ list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600' }}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs' href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>{page}</BreadcrumbItem>
                </Breadcrumbs>
            </div>
            <ol className="flex w-full items-center justify-between">
                <li className="relative p-2">
                    <span className={`centerOfParent bg-primary-700 lg:w-14 lg:h-14 sm:w-10 sm:h-10 w-6 h-6 sm:text-base text-xs sm:font-light font-bold text-white rounded-full`}>
                        1
                    </span>
                    <h3 className={`absolute sm:block ${active == 1 ? 'block' : 'hidden'} sm:-bottom-6 sm:top-full top-1/2 sm:translate-y-0 -translate-y-1/2 h-fit bg-[#FBFCFE] right-full pl-1 sm:right-1/2 sm:translate-x-1/2 whitespace-nowrap lg:text-base sm:text-sm text-[10px]`}>سبد خرید</h3>
                </li>
                <li className={`flex-[1_0_0] h-px border border-dashed ${active > 1 ? 'border-primary-600' : ''}`}></li>
                <li className="relative p-2">
                    <span className={`centerOfParent bg-primary-${active > 1 ? '7' : '1'}00 lg:w-14 lg:h-14 sm:w-10 sm:h-10 w-6 h-6 sm:text-base text-xs sm:font-light font-bold text-${active > 1 ? 'white' : 'natural_gray-600'} rounded-full`}>
                        2
                    </span>
                    <h3 className={`absolute sm:block ${active == 2 ? 'block' : 'hidden'} sm:-bottom-6 sm:top-full top-1/2 sm:translate-y-0 -translate-y-1/2 h-fit bg-[#FBFCFE] right-full pl-1 sm:right-1/2 sm:translate-x-1/2 whitespace-nowrap text-natural_gray-800 lg:text-base sm:text-sm text-[10px]`}>تکمیل سفارش</h3>
                </li>
                <li className="flex-[1_0_0] h-px border border-dashed"></li>
                <li className="relative p-2">
                    <span className="centerOfParent bg-primary-100 lg:w-14 lg:h-14 sm:w-10 sm:h-10 w-6 h-6 sm:text-base text-xs sm:font-light font-bold text-natural_gray-600 rounded-full">
                        3
                    </span>
                    <h3 className="absolute sm:block hidden sm:-bottom-6 sm:top-full top-1/2 sm:translate-y-0 -translate-y-1/2 h-fit bg-[#FBFCFE] right-full pl-1 sm:right-1/2 sm:translate-x-1/2 whitespace-nowrap text-natural_gray-800 lg:text-base sm:text-sm text-[10px]">پرداخت</h3>
                </li>
            </ol>
        </div>
    );
};

export default Header;