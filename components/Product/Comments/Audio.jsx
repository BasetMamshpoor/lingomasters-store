import { useState } from "react";
import Image from "next/image";
import Pagination from "@/components/Pagination";
import dynamic from "next/dynamic";
const AudioRecorder = dynamic(() => import('./VoiceRecorder'), { ssr: false });

//icons
import Like from '@icons/like.svg'
import Dislike from '@icons/dislike.svg'
import Down from '@icons/arrow-down.svg'
import useGetRequest from "@/hooks/useGetRequest";

const Audio = () => {
    const [showMore, setShowMore] = useState(false)
    const [comments] = useGetRequest('/audio-comments')


    return (


        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">صدا خود را آپلود کنید.</p>
                    <form className="flex flex-col gap-8">
                        <div className="flex items-center gap-6">
                            <AudioRecorder />
                        </div>
                        <button className="sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-[140px] sm:h-fit h-9 w-full self-end">ارسال</button>
                    </form>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">نظرات کاربران</p>
                    <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {comments?.map((a, i) => {
                                if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={i}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-10 h-10"><Image src='/images/avatar.jpg' width='0' height='0' sizes="100vw" className="w-full h-full object-cover" /></div>
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="sm:text-xs text-[10px] text-primary-950">علی اسدی</p>
                                            <audio controls src={'api.lingomasters.ir/' + a.audio_path}></audio>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">24</span>
                                            <div className="centerOfParent"><Dislike className='sm:w-6 sm:h-6 w-4 h-4' /></div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">24</span>
                                            <div className="centerOfParent"><Like className='sm:w-6 sm:h-6 w-4 h-4' /></div>
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

export default Audio;
