import React, { useState } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@nextui-org/react";

import Sort from '@icons/sort.svg'
import Down from '@icons/solid-arrow-down.svg'

const SortBy = ({ router, }) => {
    const { slug, ...Query } = router.query

    const [isOpen, setIsOpen] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState('جدیدترین');


    return (
        <>
            <Dropdown onOpenChange={setIsOpen} dir='rtl'>
                <DropdownTrigger className='cursor-pointer'>
                    <div className='flex items-center text-primary-950'>
                        <span className='centerOfParent'><Sort /></span>
                        ترتیب : {selectedKeys}
                        <span className={`centerOfParent duration-300 ${isOpen ? 'rotate-180' : ''}`}><Down /></span>
                    </div>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label=" "
                    selectionMode="single"
                    selectedKeys={[selectedKeys]}
                    onAction={setSelectedKeys}
                    className='[&>ul>li>.text-inherit>svg]:w-4 [&>ul>li>.text-inherit>svg]:h-4'
                >
                    <DropdownItem key="جدیدترین">
                        <div className="">
                            <Link href={{
                                pathname: router.asPath.split('?')[0],
                                query: { ...Query, sort: 'newest' },
                            }}
                                passHref
                                shallow
                                replace>جدیدترین</Link>
                        </div>
                    </DropdownItem>
                    <DropdownItem key="پرفروش">
                        <div className="">
                            <Link href={{
                                pathname: router.asPath.split('?')[0],
                                query: { ...Query, sort: 'bestselling' },
                            }}
                                passHref
                                shallow
                                replace>پرفروش‌ترین‌</Link>
                        </div>
                    </DropdownItem>
                    <DropdownItem key="گرانترین">
                        <div className="">
                            <Link href={{
                                pathname: router.asPath.split('?')[0],
                                query: { ...Query, sort: 'max' },
                            }}
                                passHref
                                shallow
                                replace>گرانترین</Link>
                        </div>
                    </DropdownItem>
                    <DropdownItem key="ارزانترین">
                        <div className="">
                            <Link href={{
                                pathname: router.asPath.split('?')[0],
                                query: { ...Query, sort: 'min' },
                            }}
                                passHref
                                shallow
                                replace>ارزانترین</Link>
                        </div>
                    </DropdownItem>
                </DropdownMenu>
            </Dropdown >
        </>
    );
};

export default React.memo(SortBy);
