import { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import dynamic from "next/dynamic";
const VideoRecorder = dynamic(() => import('./VideoRecorder'), { ssr: false });

//icons
import Like from '@icons/like.svg'
import Dislike from '@icons/dislike.svg'
import Down from '@icons/arrow-down.svg'
import Card from "@/components/Video/Card";

const Videos = () => {
    const [showMore, setShowMore] = useState(false)

    return (


        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">ویدیو خود را آپلود کنید.</p>
                    <p className="text-warning text-sm self-start">نکته: لطفا به هنگام ضبط ویدیو، گوشی خود را به صورتی افقی روی پایه ثابتبگذارید و همچنین نور کافی و پس زمینه مناسب باشد.</p>
                    <form className="flex flex-col gap-8">
                        <div className="flex items-center gap-6">
                            <VideoRecorder />
                        </div>
                        <button className="py-4 px-6 rounded text-white bg-primary-600 w-[140px] self-end">ارسال</button>
                    </form>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">نظرات کاربران</p>
                    <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {[...Array(10)].map((_, i) => {
                                if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={i}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-40 h-auto"><Card bgSrc={'/images/video/bg.jfif'} /></div>
                                        <p className="text-xs text-primary-950">علی اسدی</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">24</span>
                                            <div className="centerOfParent"><Dislike /></div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">24</span>
                                            <div className="centerOfParent"><Like /></div>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <div className="self-center">
                            {showMore ?
                                <div className="w-full">
                                    <Pagination />
                                </div>
                                : <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMore(true)}>
                                    <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                    <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600' /></div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Videos;
