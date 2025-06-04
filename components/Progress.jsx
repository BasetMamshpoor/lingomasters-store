import {BreadcrumbItem, Breadcrumbs} from "@heroui/react";
import {useRouter} from 'next/router';
import React from 'react';

const Progress = ({title, link, active, page, withBreadcrumb = true, steps = []}) => {
    const router = useRouter();
    const {id} = router.query;

    return (
        <div>
            {/* Breadcrumbs */}
            {withBreadcrumb && <div className="py-3 px-2">
                <Breadcrumbs
                    separator='/'
                    classNames={{list: 'last:[&>li>span]:text-primary-950 [&>li]:text-natural_gray-600'}}
                    itemClasses={{
                        separator: "px-2 text-natural_gray-600"
                    }}>
                    <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                                    href="/">صفحه اصلی</BreadcrumbItem>
                    <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                                    href={link}>{title}</BreadcrumbItem>
                    <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'
                                    href={`${link}/${id}`}>{page}</BreadcrumbItem>
                    <BreadcrumbItem className='[&>span]:sm:text-base [&>span]:text-xs [&>a]:sm:text-base [&>a]:text-xs'>رزرو
                        کلاس</BreadcrumbItem>
                </Breadcrumbs>
            </div>}

            {/* Dynamic Steps */}
            <ol className="flex w-full items-center justify-between px-4">
                {steps.map((step, index) => {
                    const isActive = active === index + 1;
                    const isCompleted = active > index + 1;
                    const isLast = index === steps.length - 1;

                    return (
                        <React.Fragment key={index}>
                            <li className="relative p-2">
                                <span
                                    className={`centerOfParent bg-primary-${isCompleted ? '7' : isActive ? '7' : '1'}00 lg:w-14 lg:h-14 sm:w-10 sm:h-10 w-6 h-6 sm:text-base text-xs sm:font-light font-bold text-${isCompleted || isActive ? 'white' : 'natural_gray-600'} rounded-full`}
                                >
                                    {index + 1}
                                </span>
                                <h3
                                    className={`absolute sm:block ${isActive ? 'block' : 'hidden'} sm:-bottom-6 sm:top-full top-1/2 px-1 sm:translate-y-0 -translate-y-1/2 h-fit bg-[#FBFCFE] ${isLast ? 'sm:left-auto left-full' : 'right-full'} pl-1 sm:right-1/2 sm:translate-x-1/2 whitespace-nowrap lg:text-base sm:text-sm text-[10px] text-natural_gray-800`}
                                >
                                    {step}
                                </h3>
                            </li>
                            {index < steps.length - 1 && (
                                <li
                                    className={`flex-[1_0_0] h-px border border-dashed ${isCompleted ? 'border-primary-600' : ''}`}
                                ></li>
                            )}
                        </React.Fragment>
                    );
                })}
            </ol>
        </div>
    );
};

export default Progress;
