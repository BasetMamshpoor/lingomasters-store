import React from 'react';
import Link from "next/link";

export default function ClassSubMenu({items, pathname, isActive, setSidebarOpen, setTitle}) {
    if (!items || !Array.isArray(items)) {
        return null;
    }
    return (
        <div
            className={`${isActive ? 'flex' : 'hidden'}  group-hover:!flex flex-col px-2 mt-1 w-full text-sm leading-none text-right text-gray-800`}>
            {items.map((item) => (
                <Link
                    href={item.href}
                    key={item.id}
                    onClick={() => {
                        setSidebarOpen(false)
                        setTitle(item.title)
                    }}
                    className={`gap-2.5 text-sm text-natural_gray-950 self-stretch px-4 py-3.5 w-full whitespace-nowrap border-r border-solid flex items-center hover:text-primary-700 hover:border-r-primary-700  ${
                        pathname.includes(item.href)
                            ? 'text-primary-700 border-r-primary-700'
                            : 'border-r-natural_gray-200'
                    } min-h-[48px]`}
                >
                    {item.title}
                </Link>
            ))}
        </div>
    );
}