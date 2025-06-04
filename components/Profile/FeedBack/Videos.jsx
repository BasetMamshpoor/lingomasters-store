import React from "react";
import Down from '@icons/arrow-down.svg'
import Play from '@icons/play-outline.svg'
import LikeDislike from "./Like&Dislike";
import Link from "next/link";
import VideoPlayer from "./VideoPlayer";


const Videos = ({id, url, has_more, comments = []}) => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <p className="text-secondary-500 font-semibold sm:text-sm text-xs self-start">نظرات کاربران</p>
                {comments.length ?
                    <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {!!comments.length ? comments.map((c, i) => {
                                return <li
                                    className="flex items-center justify-between gap-3" key={i}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-40 h-auto">
                                            <VideoPlayer
                                                className={<div
                                                    className="w-20 h-20 centerOfParent rounded-lg bg-primary-50">
                                                    <Play className=""/></div>}
                                                trigger='نمایش ویدیو'
                                                movie={c.video_url}/></div>
                                        <p className="sm:text-xs text-[10px] text-primary-950">{c.name}</p>
                                    </div>
                                    <LikeDislike c={c} id={c.id}/>
                                </li>
                            }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                        </ul>
                        {has_more && <Link href={`/profile/feedback/${id}?class=${url}&type=video`}
                                           className="flex items-center gap-2">
                            <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                            <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600'/></div>
                        </Link>}
                    </div> : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
            </div>
        </>
    );
};

export default Videos;
