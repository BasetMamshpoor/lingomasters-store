import React from 'react';
import Link from "next/link";
import process from "next/dist/build/webpack/loaders/resolve-url-loader/lib/postcss";

const HeroBanner = () => {
    return (
        <>
            <div className="py-6 sm:px-12 px-3 flex items-center bg-success-200 justify-between gap-4 w-full" dir="rtl">
                <div className="text-primary-900 w-full sm:text-base text-xs text-center font-semibold">
                    <p>دعوت به تدریس زبان</p>
                    <p className="text-rose-600">در پلتفرم لینگومسترز و پلتفرم های بین المللی</p>
                    <p>پس از تسلط کامل به کتاب های طلسم مکالمه!</p>
                </div>
                <Link href={`https://wa.me/+989143418543`} className="border sm:px-6 px-2 font-semibold sm:text-sm text-xs py-2 rounded border-primary-950 text-primary-900 whitespace-nowrap" target="_blank">کلیک کنید</Link>
            </div>
        </>
    );
};

export default HeroBanner;