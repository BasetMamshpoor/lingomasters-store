import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem } from "@heroui/react";
import sortBy from './sort.json'

import Sort from '@icons/sort.svg'
import Down from '@icons/solid-arrow-down.svg'
import { useRouter } from 'next/router';

const SortBy = ({ setCurrentPage }) => {
    const router = useRouter()
    const { slug, sort, ...Query } = router.query

    const [isOpen, setIsOpen] = useState(false)
    const [selectedKeys, setSelectedKeys] = useState('جدیدترین');

    useEffect(() => {
        if (sort) {
            const query = sortBy.sort.find(s => s.key === sort)?.title
            setSelectedKeys(query)
            setCurrentPage(1)
        }
    }, [sort])


    return (
        <>
            <Dropdown onOpenChange={setIsOpen} dir='rtl'z>
                <DropdownTrigger className='cursor-pointer'>
                    <div className='flex items-center text-primary-950 gap-1 whitespace-nowrap'>
                        <span className='centerOfParent ml-1'><Sort /></span>
                        ترتیب : {selectedKeys}
                        <span className={`centerOfParent duration-300 ${isOpen ? 'rotate-180' : ''}`}><Down /></span>
                    </div>
                </DropdownTrigger>
                <DropdownMenu
                    aria-label=" "
                    selectionMode="single"
                    selectedKeys={[selectedKeys]}
                    onAction={setSelectedKeys}
                    className='[&>ul>li>.text-inherit>svg]:w-3 [&>ul>li>.text-inherit>svg]:h-3'
                >
                    {sortBy.sort.map(s => {
                        return (
                            <DropdownItem key={s.title} textValue={s.title}>
                                <Link href={{
                                    pathname: router.asPath.split('?')[0],
                                    query: { ...Query, sort: s.key },
                                }} className='w-full block text-sm'
                                    passHref
                                    shallow
                                    replace>{s.title}</Link>
                            </DropdownItem>
                        )
                    })}
                </DropdownMenu>
            </Dropdown >
        </>
    );
};

export default React.memo(SortBy);
