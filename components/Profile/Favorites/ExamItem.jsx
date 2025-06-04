import React from 'react';
import Link from "next/link";
import Image from "next/image";
import Bin from "@icons/bin.svg"
import Like from "@/components/Like";
const ExamItem = ({id,image,title,is_like}) => {
    return (
        <>
            <div className="relative w-full max-h-[195px]">
                <div className=" absolute left-3 top-3 flex items-center p-2 bg-natural_gray-400 bg-opacity-50 rounded-lg w-fit">
                    <Like
                        id={id} isLike={is_like} url='/exams'/>
                </div>
                <Image alt={title} src={image||'/images'} width={100} height={100}
                       className="w-full h-full object-cover rounded-xl"/>
                <div className="absolute -bottom-4 left-2 right-2 flex items-center gap-4 p-2 bg-white rounded-lg">
                    <Link href={`/exams/${id}`} className="centerOfParent w-full border border-secondary-200 rounded text-secondary-500 py-1 text-sm effect-1">
                        اطلاعات بیشتر
                    </Link>
                    <Link href={`/exams/${id}`} className="centerOfParent w-full border border-primary-600 bg-primary-600 text-white rounded py-1 text-sm effect-2">
                        رزرو آزمون
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ExamItem;