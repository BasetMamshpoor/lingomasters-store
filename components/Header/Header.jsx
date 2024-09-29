import { Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input } from "@nextui-org/react";
import Link from "next/link";
import Cart from '@icons/cart.svg'
import Search from '@icons/search.svg'
import Home from '@icons/home.svg'
import Books from '@icons/books.svg'
import Book from '@icons/book3.svg'
import Seller from '@icons/seller.svg'
import About from '@icons/about.svg'
import Contact from '@icons/vector.svg'
import Down from '@icons/arrow-down.svg'

const Item = ({ i }) => <div className="centerOfParent gap-3">{i.icon}{i.text}<Down className='w-4 h-4' /></div>

const links = [
    { icon: <Home />, text: 'صفحه‌اصلی', underMenu: false },
    { icon: <Books />, text: 'دسته‌بندی‌کتاب‌ها', underMenu: true },
    { icon: <Book />, text: 'وسایل‌کمک‌آموزشی', underMenu: false },
    { icon: <Seller />, text: 'فروشنده‌شوید', underMenu: false },
    { icon: <About />, text: 'درباره‌ما', underMenu: false },
    { icon: <Contact />, text: 'ارتباطباما', underMenu: false },
]

const Header = () => {
    return (
        <>
            <header className="py-6" dir="rtl">
                <div className="container flex flex-col gap-6">
                    <div className="flex items-center justify-between">
                        <div className="centerOfParent">
                            <Dropdown>
                                <DropdownTrigger>فارسی</DropdownTrigger>
                                <DropdownMenu>
                                    <DropdownItem key="persian">فارسی</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>
                        <div className="centerOfParent"><h1 className="font-Metal text-3xl">{process.env.NEXT_PUBLIC_LOGO}</h1></div>
                        <div className="centerOfParent gap-4">
                            <Link href='/checkout/cart' className="px-1.5 py-1 centerOfParent border-1.5 rounded border-secondary-500"><Cart className='fill-secondary-500' /></Link>
                            <Link href='/auth/login' className="px-4 py-2 centerOfParent bg-primary-600 text-white rounded text-sm">ورود/ثبت نام</Link>
                        </div>
                    </div>
                    <div className="centerOfParent w-full">
                        <Input radius="sm" placeholder="جستجو کتاب، نویسنده و ." isClearable variant="bordered" className="max-w-[628px] bg-white" startContent={<Search className="fill-natural_gray-600" />} />
                    </div>
                    <div className="">
                        <div className="">
                            <ui className="list-none flex items-center justify-between">
                                {links.map((i,o) => {
                                    return (
                                        <li key={o} className="[&>a]:flex [&>a]:items-center [&>a]:gap-3 cursor-pointer">{i.underMenu ?
                                            <Dropdown>
                                                <DropdownTrigger><Item i={i} /></DropdownTrigger>
                                                <DropdownMenu>
                                                    <DropdownItem key="rr">فارسی</DropdownItem>
                                                </DropdownMenu>
                                            </Dropdown>
                                            : <Link href=''>{i.icon}{i.text}</Link>}</li>
                                    )
                                })}
                            </ui>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
};

export default Header;