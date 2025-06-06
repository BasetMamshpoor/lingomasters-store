import React, {useContext} from 'react';
import SidebarItem from './SidebarItem';
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";
import {useRouter} from "next/router";
import Link from "next/link";
import {sidebarItems} from "@/db/SidebarData";
import withAuth from "@/components/withAuth";
import ProfileImage from "@/components/Profile/ImageProfile";
import {Information} from "@/providers/InformationProvider";

const Sidebar = ({mobileOpen, setSidebarOpen, setTitle}) => {
    const {pathname} = useRouter()
    const {student} = useContext(Information)

    return (
        <>
            <div
                className={`lg:block hidden transition-all duration-300 w-full max-w-[249px]`}>
                <div
                    className="flex flex-col items-center gap-6 bg-white border border-natural_gray-200 rounded-2xl px-4 py-10">
                    <Link href='/'
                          className={`text-3xl duration-300 font-Metal`}>{process.env.NEXT_PUBLIC_LOGO}</Link>
                    <div className="rounded-xl bg-primary-50 w-full py-4 centerOfParent flex-col gap-2">
                        <ProfileImage justImage/>
                        <p className='text-sm'>{student?.name}</p>
                        <p className="text-natural_gray_950 text-xs">{student?.mobile}</p>
                    </div>
                    <div className="flex flex-col w-full gap-4">
                        {sidebarItems.map((item) => {
                            const isActive = pathname === item.href;
                            return (
                                <div className='group' key={item.id}>
                                    <SidebarItem
                                        title={item.title}
                                        icon={item.icon}
                                        link={item.href}
                                        isActive={isActive}
                                        setSidebarOpen={setSidebarOpen}
                                        setTitle={setTitle}
                                    />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
            <div
                className={`lg:hidden absolute top-[4.5rem] bottom-0 right-0 max-w-screen w-full bg-white py-6 px-3 z-[1050] transform duration-300 ${
                    mobileOpen ? 'translate-x-0' : 'translate-x-full'
                }`}
            >
                <div className="rounded-xl bg-primary-50 w-full py-4 centerOfParent flex-col">
                    <ProfileImage justImage/>
                    <p className='text-sm'>{student?.name}</p>
                    <p className="text-natural_gray_950 text-xs">{student?.mobile}</p>
                </div>
                <div className="flex flex-col w-full gap-4 pb-4">
                    {sidebarItems.map((item) => {
                        const isActive = pathname === item.href
                        return <div className='group' key={item.id}>
                            <SidebarItem
                                title={item.title}
                                icon={item.icon}
                                link={item.href}
                                isActive={isActive}
                                setSidebarOpen={setSidebarOpen}
                                setTitle={setTitle}
                            />
                        </div>
                    })}
                </div>
            </div>
        </>
    );
}
export default withAuth(Sidebar, false, true);