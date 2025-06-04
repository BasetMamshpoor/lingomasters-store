import React from "react";
import {Avatar} from "@heroui/react";
import Down from '@icons/arrow-down.svg'
import Link from "next/link";
import LikeDislike from "./Like&Dislike";

const Text = ({id, url, has_more, comments = []}) => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <p className="text-secondary-500 font-semibold sm:text-sm text-xs self-start">نظرات کاربران</p>
                {comments.length ?
                    <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {!!comments.length ? comments.map((c, i) => {
                                return <li
                                    className="flex items-center justify-between gap-3" key={c.id}>
                                    <div className="flex items-center gap-3">
                                        <Avatar src={c.profile} showFallback/>
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="sm:text-xs text-[10px] text-primary-950">{c.c}</p>
                                            <p dir="auto"
                                               className="sm:text-xs text-[8px] text-primary-950">{c.content}</p>
                                        </div>
                                    </div>
                                    <LikeDislike justView c={c} id={c.id}/>
                                </li>
                            }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                        </ul>
                        {has_more && <Link href={`/feedback/${id}?class=${url}&type=text`}
                                           className="centerOfParent gap-2">
                            <span className="text-xs text-primary-700">مشاهده بیشتر</span>
                            <div className="centerofParent"><Down className='w-5 h-5 fill-primary-700'/></div>
                        </Link>}
                    </div> : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
            </div>
        </>
    );
};

export default Text;