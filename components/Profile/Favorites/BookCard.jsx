import React from 'react';
import Image from "next/image";
import Flag from "@icons/Flags/Country=United Kingdom, Style=Flag, Radius=On.svg";
import Chat from "@icons/chat-alt.svg";
import Book from "@icons/book2.svg";
import Card from "@icons/note-2.svg";
import Users from "@icons/users.svg";
import {Avatar, AvatarGroup} from "@heroui/react";
import Link from "next/link";
import Like from "@/components/Like";


const BookCard = ({image, title, language, subject, category, Volume_number, professor, file, is_like, id}) => {
    return (
        <>
            <div className="relative p-6 flex flex-col gap-10 border border-natural_gray-200 rounded-lg">
                <div className="absolute top-4 left-4">
                    <Like
                        id={id} isLike={is_like} url='/product'/>
                </div>
                <div className="flex flex-col gap-3">
                    <div className="centerOfParent">
                        <Image src={image || '/images/product.png'} width={100} height={100} alt={title}
                               className='w-full h-full object-contain max-h-36'/>
                    </div>
                    <div className="flex flex-col items-center gap-3">
                        <h4 className="font-bold">{title}</h4>
                        <div className="flex flex-col gap-1 w-full">
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Flag className="w-4 h-4 fill-primary-700"/>
                                    <span className="text-natural_gray-900 text-xs">زبان</span>
                                </div>
                                <span className="text-sm">{language}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Chat className="w-4 h-4 fill-primary-700"/>
                                    <span className="text-natural_gray-900 text-xs">موضوع</span>
                                </div>
                                <span className="text-sm">{subject}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Book className="w-4 h-4 "/>
                                    <span className="text-natural_gray-900 text-xs">نوع فایل</span>
                                </div>
                                <span className="text-sm">{category}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Card className="w-4 h-4 "/>
                                    <span className="text-natural_gray-900 text-xs">تعداد جلد</span>
                                </div>
                                <span className="text-sm">{Volume_number}</span>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-center gap-1">
                                    <Users className="w-4 h-4 fill-primary-700"/>
                                    <span className="text-natural_gray-900 text-xs">اساتید</span>
                                </div>
                                <AvatarGroup max={5} total={professor.length > 5 ? professor.length : 0} dir="ltr"
                                             classNames={{count: "w-7 h-7 text-tiny border-3 border-white"}}>
                                    {professor.map(el => (
                                        <Avatar
                                            key={el}
                                            classNames={{base: "w-7 h-7 text-tiny border-3 border-white"}}
                                            src={el}/>
                                    ))}
                                </AvatarGroup>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex items-center gap-4">
                    <Link href={`/books/${id}`}
                          className="centerOfParent flex-1 gap-3 text-secondary-500 border border-secondary-500 rounded py-2 text-sm">
                        جزئیات
                    </Link>
                </div>
            </div>
        </>
    );
};

export default BookCard;