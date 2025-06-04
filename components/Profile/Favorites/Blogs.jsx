import React from 'react';
import Image from "next/image";
import Link from "next/link";
import Icon from "@icons/calendar.svg";
import Like from "@/components/Like";

const Blogs = ({created_at, title, image, id, is_like}) => {
    return (
        <>
            <div
                className="relative rounded-xl h-[302px] bg-[#0D0A2C] overflow-hidden">
                <div className="absolute left-3 top-3 z-10 flex items-center p-2 bg-natural_gray-400 bg-opacity-50 rounded-lg w-fit">
                    <Like
                        id={id} isLike={is_like} url='/blogs'/>
                </div>
                <Link href={`/blogs/${id}`}>
                    <div
                        className="absolute top-0 bottom-0 left-0 right-0 w-full h-full bg-gradient-to-t from-black from-0%  to-50% to-transparent"/>
                    {image ?
                        <Image src={image} alt={title} width={100} height={100}
                               className="w-full h-full object-cover"/>
                        : <div className="absolute top-0 bottom-0 left-0 right-0 w-full h-full">
                            <img src="/images/english-book.png" alt=""
                                 className="w-full absolute top-0 left-0"/>
                            <img src="/images/english-book.png" alt=""
                                 className="w-full absolute top-0 right-0"/>
                            <img src="/images/english-book.png" alt=""
                                 className="w-full absolute bottom-0 right-0"/>
                            <p className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-10 text-xl">{title}</p>
                        </div>}
                    <div
                        className="p-4 w-full absolute bottom-0 z-[1] bg-white bg-opacity-5 backdrop-blur-[5px] flex flex-col gap-2">
                        <p className="text-white sm:text-base text-sm line-clamp-1">{title}</p>
                        <div className="flex items-center gap-2">
                            <Icon className="fill-secondary-300 w-4 h-4"/>
                            <span
                                className="text-natural_gray-200 sm:text-xs text-[10px]">{new Date(created_at).toLocaleDateString('fa-IR', {
                                month: 'long',
                                day: '2-digit',
                                year: 'numeric'
                            })}</span>
                        </div>
                    </div>
                </Link>
            </div>

        </>
    );
};

export default Blogs;