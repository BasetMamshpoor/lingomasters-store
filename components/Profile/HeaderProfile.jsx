import {Avatar, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger} from "@heroui/react";
import {useContext, useState} from "react";
import Link from "next/link";
import {useRouter} from "next/router";

import Arrow from '@icons/arrow-down.svg'
import User from '@icons/user-tick.svg'
import Logout from '@icons/logout.svg'
import Bell from '@icons/bell.svg'
import Menu from '@icons/menu.svg'
import Close from '@icons/close.svg'
import {Information} from "@/providers/InformationProvider";
import withAuth from "@/components/withAuth";

const links = [
    {href: "/profile/notifications", icon: Bell, activeIcon: 'BellFill', text: "اعلان‌ها"},
];
const HeaderProfile = ({isSidebarOpen, setSidebarOpen, title, setTitle}) => {
    const {student, logout} = useContext(Information)
    const router = useRouter()
    const [open, setOpen] = useState({profile: false, lang: false})

    const handleChangeState = (isOpen, name) => setOpen(prev => {
        return {
            ...prev,
            [name]: isOpen
        }
    })

    return (
        <>
            <div
                className={`${isSidebarOpen ? 'lg:relative z-50 fixed top-0 right-0 left-0 bg-white py-4 px-4' : ''} w-full sm:py-4 sm:px-6 flex items-center justify-between gap-4 lg:border border-natural_gray-200 rounded-2xl lg:bg-white`}>
                <div className="">
                    <div className="lg:hidden centerOfParent cursor-pointer"
                         onClick={() => setSidebarOpen(!isSidebarOpen)}>
                        {isSidebarOpen ?
                            <Close className='border-[1.5px] rounded border-primary-600 fill-primary-700'/> :
                            <Menu className='border-[1.5px] rounded border-primary-600 fill-primary-700'/>}
                    </div>
                    <p className='lg:block hidden text-primary-950 text-sm font-semibold'>{title || 'اطلاعات کاربری'}</p>
                </div>
                <h1 className='lg:hidden sm:text-3xl text-lg font-Metal'>{process.env.NEXT_PUBLIC_LOGO}</h1>
                <div className='flex items-center gap-8'>
                    <ul className="lg:flex hidden items-center gap-8">
                        {links.map((link) => {
                            const isActive = router.pathname === link.href;
                            return (
                                <li key={link.href} className="centerOfParent">
                                    <Link href={link.href} onClick={() => setTitle(link.text)}>
                                        {isActive ? (
                                            <link.activeIcon className="fill-primary-600"/>
                                        ) : (
                                            <link.icon className=""/>
                                        )}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                    <div className="centerOfParent">
                        <Dropdown
                            placement="bottom-start"
                            classNames={{content: 'rounded'}}
                            onOpenChange={(isOpen) => handleChangeState(isOpen, 'profile')}>
                            <DropdownTrigger>
                                <div className="flex items-center gap-2">
                                    <Avatar
                                        showFallback
                                        as="button"
                                        className="transition-transform w-10 h-10"
                                        src={student?.profile}
                                    />
                                    <div className={`centerOfParent duration-300 ${open.profile ? 'rotate-180' : ''}`}>
                                        <Arrow className={'w-3 h-3'}/>
                                    </div>
                                </div>
                            </DropdownTrigger>
                            <DropdownMenu
                                aria-label="Profile Actions"
                                variant="bordered">
                                <DropdownItem key="profile" href='/profile'
                                              onPress={() => setTitle('ویرایش اطلاعات')}>
                                    <div className='flex items-center gap-4 justify-end'>
                                        <span>ویرایش اطلاعات</span>
                                        <div className="centerOfParent"><User className={'fill-primary-700'}/></div>
                                    </div>
                                </DropdownItem>
                                {links.map((link) => {
                                    return (
                                        <DropdownItem key={link.href}
                                                      className="lg:hidden flex items-center justify-center">
                                            <div className='flex items-center gap-4 justify-end'>
                                                <span>{link.text}</span>
                                                <div className="centerOfParent">
                                                    <link.icon className={'fill-primary-700'}/>
                                                </div>
                                            </div>
                                        </DropdownItem>
                                    )
                                })}
                                <DropdownItem key="logout" onPress={logout}>
                                    <div className='flex items-center gap-4 justify-end'>
                                        <span>خروج از حساب</span>
                                        <div className="centerOfParent"><Logout className={'fill-primary-700'}/></div>
                                    </div>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                </div>
            </div>
        </>
    );
};

export default withAuth(HeaderProfile, false, true);