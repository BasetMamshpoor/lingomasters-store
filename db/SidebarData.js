import Dashboard from '@icons/elements.svg'
import Wallet from '@icons/wallet.svg'
import Receipt from '@icons/receipt.svg'
import Chats from '@icons/chats.svg'
import Badge from '@icons/badge.svg'
import Vector from '@icons/vector.svg'
import Heart from '@icons/heart.svg'

const sidebarItems = [
    {
        id: 1,
        title: 'داشبورد',
        icon: Dashboard,
        href: '/profile/'
    },
    {
        id: 5,
        title: 'سفارشات من',
        icon: Badge,
        href: '/profile/orders',
    },
    {
        id: 6,
        title: 'کیف پول',
        icon: Wallet,
        href: '/profile/wallet'
    },
    {
        id: 7,
        title: 'گزارشات',
        icon: Receipt,
        href: '/profile/reports'
    },
    {
        id: 10,
        title: 'علاقه‌مندی‌های من',
        icon: Heart,
        href: '/profile/guide'
    },
    {
        id: 8,
        title: 'نظرات',
        icon: Chats,
        href: '/profile/feedback'
    },
    {
        id: 9,
        title: 'پشتیبانی',
        icon: Vector,
        href: '/profile/support'
    }
];
export {sidebarItems};