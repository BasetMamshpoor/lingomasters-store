import { BreadcrumbItem, Breadcrumbs } from "@nextui-org/react";

const Header = ({ active, page }) => {
    return (
        <div>
            <div className="py-3">
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
                    <span className={`centerOfParent bg-primary-700 w-14 h-14 text-white rounded-full`}>
                        1
                    </span>
                    <h3 className="absolute -bottom-6 right-1/2 translate-x-1/2 whitespace-nowrap">سبد خرید</h3>
                </li>
                <li className={`flex-[1_0_0] h-px border border-dashed ${active > 1 ? 'border-primary-600' : ''}`}></li>
                <li className="relative p-2">
                    <span className={`centerOfParent bg-primary-${active > 1 ? '7' : '1'}00 w-14 h-14 text-${active > 1 ? 'white' : 'natural_gray-600'} rounded-full`}>
                        2
                    </span>
                    <h3 className="absolute -bottom-6 right-1/2 translate-x-1/2 whitespace-nowrap text-natural_gray-800">تکمیل سفارش</h3>
                </li>
                <li className="flex-[1_0_0] h-px border border-dashed"></li>
                <li className="relative p-2">
                    <span className="centerOfParent bg-primary-100 w-14 h-14 text-natural_gray-600 rounded-full">
                        3
                    </span>
                    <h3 className="absolute -bottom-6 right-1/2 translate-x-1/2 whitespace-nowrap text-natural_gray-800">پرداخت</h3>
                </li>
            </ol>
        </div>
    );
};

export default Header;