import React from 'react';
import Image from "next/image";
import Elements from "@icons/elements.svg";
import formatCurrency from "@/helpers/formatCurrency";

const OrderItem = ({title, image, Volume_number, quantity, price, id, category, isNazar}) => {
    return (
        <>
            <div className="flex items-center gap-2">
                <Image src={image || "/images/product.png"} alt={title} width={100}
                       height={100}/>
                <div
                    className="flex md:items-center flex-col md:flex-row md:justify-between md:gap-4 gap-2 w-full">
                    <div className="flex flex-col gap-2 grow">
                        <p className="text-xs lg:text-base font-bold ">{title}<span
                            className="font-medium mr-2">(پکیج {Volume_number} تایی)</span>
                        </p>
                        <div className="flex items-center gap-4">
                            <Elements className="w-4 h-4 md:w-6 md:h-6"/>
                            <p className="text-md">{category}</p>
                        </div>
                        {quantity && <p className="text-xs lg:text-base">تعداد : {quantity} عدد</p>}
                    </div>
                    <div className="flex md:items-end flex-col gap-2">
                        {!price && <div className="flex items-center gap-2">
                            <p className="text-xs">مبلغ کالا:</p>
                            <p className="text-xs lg:text-sm text-success-700 hasToman">{formatCurrency(price||10000)}</p>
                        </div>}
                        {isNazar && <div
                            className="px-6 py-2 flex items-center justify-center rounded-md border border-secondary-500 text-secondary-500 text-xs md:text-base whitespace-nowrap w-full md:w-fit">
                            ثبت نظر
                        </div>}
                    </div>
                </div>
            </div>
        </>
    );
};

export default OrderItem;