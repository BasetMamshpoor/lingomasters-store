import React from 'react';
import Link from "next/link";


export default function SidebarItem({title, icon: Icon, isActive, link, setSidebarOpen, setTitle}) {
    if (!Icon) return;
    const baseClasses = "flex items-center w-full cursor-pointer group";
    const textClasses = `flex-1 font-medium shrink gap-2.5 self-stretch duration-300 p-2.5 my-auto text-sm font-medium leading-none text-right whitespace-nowrap rounded-xl group-hover:bg-primary-700 group-hover:text-white ${
        isActive ? 'text-white bg-primary-700' : 'text-natural_gray-900'
    }`;
    const iconClasses = `flex gap-2.5 items-center  duration-300 self-stretch p-2.5 my-auto w-10 rounded-xl group-hover:bg-primary-700 group-hover:fill-white ${
        (isActive) ? 'bg-primary-700 fill-white' : ''
    }`;

    return (
        link ?
            <Link href={link}
                  onClick={() => {
                      setSidebarOpen(false)
                      setTitle(title)
                  }}
                  className={baseClasses}>
                <div className={iconClasses}>
                    <Icon className="w-5 h-5"/>
                </div>
                <div className={textClasses}>
                    {title}
                </div>
            </Link> :
            <div className={baseClasses}>
                <div className={iconClasses}>
                    <Icon className="w-5 h-5"/>
                </div>
                <div className={textClasses}>
                    {title}
                </div>
            </div>
    );
}