// pages/404.js
import Link from 'next/link';
import Image from 'next/image';

export default function Custom404() {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-purple-200 text-gray-800">
            <div className="mb-8">
                <Image
                    src="https://images.squarespace-cdn.com/content/v1/60241cb68df65b530cd84d95/90a5c716-a191-4b46-bafe-6652ff5c5418/mcs_Anxiety1_104.per16.104.jpg?format=1000w"
                    alt="صفحه مورد نظر یافت نشد"
                    width={300}
                    height={300}
                    className="animate-pulse"
                />
            </div>

            <h1 className="text-6xl font-extrabold text-blue-600 mb-4">404</h1>
            <h2 className="text-2xl font-semibold mb-6">صفحه مورد نظر یافت نشد!</h2>
            <p className="text-lg mb-10 text-center max-w-md">
                به نظر می‌رسه چیزی که دنبالش هستید اینجا نیست. شاید منتقل شده یا حذف شده باشه.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
                <Link
                    href="/"
                    className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                >
                    بازگشت به صفحه اصلی
                </Link>
            </div>
        </div>
    );
}