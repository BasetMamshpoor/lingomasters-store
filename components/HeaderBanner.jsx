import React from 'react';
import Link from "next/link";
import Image from "next/image";

const HeaderBanner = ({data}) => {
    return (
        <>
            {!!data && <Link href={data.link || ''} className="w-full h-auto max-h-[400px] overflow-hidden">
                <Image src={!data.image || 'images/banner.png'} alt='banner' width={600} height={200}
                       className='w-full h-full object-contain'/>
            </Link>}
        </>
    );
};

export default HeaderBanner;