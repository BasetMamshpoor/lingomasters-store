import {useContext, useState} from "react";
import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem, Input, Avatar} from "@heroui/react";
import Link from "next/link";
import Cart from '@icons/cart.svg'
import Search from '@icons/search.svg'
import SearchOrder from '@icons/search-order.svg'
import Home from '@icons/home.svg'
import Books from '@icons/books.svg'
import Book from '@icons/book3.svg'
import Seller from '@icons/seller.svg'
import About from '@icons/about.svg'
import Contact from '@icons/vector.svg'
import Down from '@icons/arrow-down.svg'
import Arrow from '@icons/arrow-down.svg'
import Menu from '@icons/menu.svg'
import Close from '@icons/close.svg'
import Iran from '@icons/Flags/Country=Iran, Style=Flag, Radius=On.svg'
import {CartContext} from "@/providers/CartContextProvider";
import {Category} from "@/providers/CategoriesProviders";
import {Information} from "@/providers/InformationProvider";

const Item = ({i, isSubmenuOpen}) => <div className="flex items-center justify-between gap-3">
    {i.icon}{i.text}<Down className={`w-4 h-4 transform transition-transform ${isSubmenuOpen ? 'rotate-180' : ''}`}/>
</div>

const links = [
    {link: 'https://www.lingomasters.ir', icon: <Home/>, text: 'صفحه‌اصلی', underMenu: false},
    {link: '', icon: <Books/>, text: 'دسته‌بندی‌کتاب‌ها', underMenu: true},
    {link: '/educational-products', icon: <Book/>, text: 'وسایل‌کمک‌آموزشی', underMenu: false},
    {link: '/become-seller', icon: <Seller/>, text: 'فروشنده‌شوید', underMenu: false},
    {link: '/ordertracking', icon: <SearchOrder/>, text: 'پیگیری سفارش', underMenu: false},
    {link: '/about-us', icon: <About/>, text: 'درباره‌ما', underMenu: false},
    {link: '/contact-us', icon: <Contact/>, text: 'تماس‌با‌ما', underMenu: false},
]

const Header = () => {
    const {state} = useContext(CartContext)
    const {student, logout} = useContext(Information)
    const {categories: category} = useContext(Category)
    const [isSidebarOpen, setSidebarOpen] = useState(false);
    const [isSubmenuOpen, setSubmenuOpen] = useState(false);
    const toggleSidebar = () => {
        setSidebarOpen(!isSidebarOpen);
    };

    // Function to toggle the submenu
    const toggleSubmenu = () => {
        setSubmenuOpen(!isSubmenuOpen);
    };
    return (
        <>
            <header className="sm:py-6 py-3 sticky top-0 bg-[#FBFCFE] z-[50] border-b" dir="rtl">
                <div className="container flex flex-col gap-6 sm:px-10">
                    <div className="flex items-center justify-between">
                        <div className="centerOfParent">
                            <div className="lg:flex hidden items-center justify-center">
                                <Dropdown dir="rtl">
                                    <DropdownTrigger className="cursor-pointer">
                                        <div className="flex items-center gap-1"><Iran/><Down className='w-4 h-4'/>
                                        </div>
                                    </DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem key="persian">
                                            <div className="flex items-center gap-3"><Iran/> فارسی</div>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div>
                            <div className="lg:hidden centerOfParent cursor-pointer" onClick={toggleSidebar}>
                                {isSidebarOpen ?
                                    <Close className='border-[1.5px] rounded border-primary-600 fill-primary-700'/> :
                                    <Menu className='border-[1.5px] rounded border-primary-600 fill-primary-700'/>}
                            </div>
                        </div>
                        <Link href='/public' className="centerOfParent"><h1
                            className="font-Metal text-3xl">{process.env.NEXT_PUBLIC_LOGO}</h1></Link>
                        <div className="centerOfParent gap-4">
                            {/* <div className="lg:hidden centerOfParent">
                                <Dropdown>
                                    <DropdownTrigger>فارسی</DropdownTrigger>
                                    <DropdownMenu>
                                        <DropdownItem key="persian"><Iran /></DropdownItem>
                                    </DropdownMenu>
                                </Dropdown>
                            </div> */}
                            <Link href='/checkout/cart'
                                  className="relative px-1.5 py-1 centerOfParent border-1.5 rounded border-secondary-500">
                                <Cart className='fill-secondary-500'/>
                                {!!state.itemsCounter && <span
                                    className="absolute -bottom-1/2 -right-1/2 -translate-x-1/2 -translate-y-1/4 bg-primary-600 text-white rounded px-[7px] py-[3px] text-[10px] text-center">{state.itemsCounter}</span>}
                            </Link>
                            {!student ?
                                <Link href='/auth/login'
                                      className="effect-2 px-4 py-2 centerOfParent bg-primary-600 text-white rounded text-sm">ورود<span
                                    className="lg:inline-block hidden">/ثبت نام</span></Link>
                                :
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
                                                <div
                                                    className={`centerOfParent duration-300 ${open.profile ? 'rotate-180' : ''}`}>
                                                    <Arrow className={'w-3 h-3'}/>
                                                </div>
                                            </div>
                                        </DropdownTrigger>
                                        <DropdownMenu
                                            aria-label="Profile Actions"
                                            variant="bordered">
                                            <DropdownItem key="profile" href='/profile/user-information'
                                                          onPress={() => setTitle('ویرایش اطلاعات')}>
                                                <div className='flex items-center gap-4 justify-end'>
                                                    <span>ویرایش اطلاعات</span>
                                                    <div className="centerOfParent"><User
                                                        className={'fill-primary-700'}/></div>
                                                </div>
                                            </DropdownItem>
                                            <DropdownItem key="logout" onPress={logout}>
                                                <div className='flex items-center gap-4 justify-end'>
                                                    <span>خروج از حساب</span>
                                                    <div className="centerOfParent"><Logout
                                                        className={'fill-primary-700'}/></div>
                                                </div>
                                            </DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>}
                        </div>
                    </div>
                    <div className="lg:flex items-center justify-center hidden w-full">
                        <Input radius="sm" placeholder="جستجو کتاب، نویسنده و ." isClearable variant="bordered"
                               className="max-w-[628px] bg-white"
                               startContent={<Search className="fill-natural_gray-600"/>}/>
                    </div>
                    <div className="lg:block hidden">
                        <ul className="list-none flex items-center justify-between">
                            {links.map((i, o) => {
                                return (
                                    <li key={o}
                                        className="[&>a]:flex [&>a]:items-center [&>a]:gap-3 cursor-pointer">{i.underMenu ?
                                        <Dropdown dir="rtl">
                                            <DropdownTrigger>
                                                <div><Item i={i}/></div>
                                            </DropdownTrigger>
                                            <DropdownMenu
                                                className="max-h-64 overflow-y-auto scrollbar-hide scrollbar scrollbar-w-8 scrollbar-thumb-natural_gray-800 scrollbar-track-white">
                                                {category.map(c => <DropdownItem key={c.slug}><Link
                                                    className="w-full block"
                                                    href={`/category/${c.slug}`}>{c.title}</Link></DropdownItem>)}
                                            </DropdownMenu>
                                        </Dropdown>
                                        : <Link href={i.link}>{i.icon}{i.text}</Link>}</li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </header>
            <div
                className={`z-[9] fixed lg:hidden top-0 bottom-0 w-full duration-300 backdrop-blur-sm ${isSidebarOpen ? 'right-0' : '-right-full'}`}
                onClick={(e) => e.target === e.currentTarget ? setSidebarOpen(false) : null}>
                <aside dir="rtl"
                       className={`fixed z-10 top-0 right-0 w-64 h-screen pt-[90px] duration-300 ${isSidebarOpen ? '-right-1' : '!-right-full'} sm:translate-x-0 bg-white border-l border-gray-200`}>
                    <div className="h-full px-3 py-4 overflow-y-auto bg-white">
                        <ul className="flex flex-col gap-2 font-medium">
                            {links.map((i, o) => {
                                return (
                                    <li key={o} className="[&>a]:flex [&>a]:items-center [&>a]:gap-3 cursor-pointer"
                                        onClick={i.underMenu ? () => {
                                        } : () => setSidebarOpen(false)}>
                                        {i.underMenu ?
                                            <>
                                                <button
                                                    type="button"
                                                    onClick={toggleSubmenu}
                                                    className="flex items-center w-full p-2 text-base text-gray-900 transition duration-300 rounded-lg group hover:bg-gray-50"
                                                >
                                                    <span className="flex-1 text-left whitespace-nowrap">
                                                        <Item i={i} isSubmenuOpen={isSubmenuOpen}/>
                                                    </span>
                                                </button>
                                                {isSubmenuOpen && (
                                                    <ul className="pr-8 flex flex-col gap-1">
                                                        {category.map(c => {
                                                            return <li key={c.id}
                                                                       className="group duration-300 hover:bg-gray-50 rounded-lg"
                                                                       onClick={() => setSidebarOpen(false)}>
                                                                <Link href={`/category/${c.slug}`}
                                                                      className="flex items-center p-2 text-gray-900">
                                                                    {c.title}
                                                                </Link>
                                                            </li>
                                                        })}
                                                    </ul>
                                                )}
                                            </>
                                            : <Link className="p-2 duration-300 hover:bg-gray-50" href={i.link}>
                                                {i.icon}{i.text}
                                            </Link>
                                        }
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </aside>
            </div>
        </>
    );
};

export default Header;