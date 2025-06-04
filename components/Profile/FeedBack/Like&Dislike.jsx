import React from 'react';
import {addToast, Spinner} from "@heroui/react";
import DislikeFill from "@icons/dislike-fill.svg";
import Dislike from "@icons/dislike.svg";
import LikeFill from "@icons/like-fill.svg";
import Like from "@icons/like.svg";
import Link from "next/link";
import usePostRequest from "@/hooks/usePostRequest";

const LikeDislike = ({id, c, setReload, justView}) => {
    const {isLoading, sendPostRequest} = usePostRequest()

    const handleLike = async (type) => {
        let api;
        if (type)
            api = 'like'
        else
            api = 'dislike'
        const {
            success,
            errorMessage,
            successMessage, status
        } = await sendPostRequest('POST', `/comment/${api}/${id}`)
        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: 'success',
            })
            setReload(Math.random())
        } else
            addToast({
                title: "خطا",
                description: errorMessage,
                color: 'danger',
                endContent: status === 401 &&
                    <Link href='/auth/login' className='border border-rose-600 rounded px-2'>ورود</Link>
            })
    }
    return (
        <>
            <div className="flex items-center gap-4">
                <div className="flex items-center gap-1">
                    <span className="text-primary-950 text-[8px]">{c.dislikes_count}</span>
                    <div className="centerOfParent cursor-pointer"
                         onClick={() => justView ? null : handleLike(0)}>
                        {isLoading ?
                            <Spinner color='success' size='sm'/> : (c.is_dislike ?
                                <DislikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-red-600'/> :
                                <Dislike className='sm:w-6 sm:h-6 w-4 h-4'/>)}</div>
                </div>
                <div className="flex items-center gap-1">
                    <span className="text-primary-950 text-[8px]">{c.likes_count}</span>
                    <div className="centerOfParent cursor-pointer"
                         onClick={() => justView ? null : handleLike(1)}>
                        {isLoading ?
                            <Spinner color='success' size='sm'/> : (c.is_like ?
                                <LikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-green-600'/> :
                                <Like className='sm:w-6 sm:h-6 w-4 h-4'/>)}</div>
                </div>
            </div>
        </>
    );
};

export default LikeDislike;