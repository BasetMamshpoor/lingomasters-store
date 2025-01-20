import React, {useEffect, useRef, useState, useCallback} from 'react';
import Down from "@icons/arrow-down.svg";
import Like from "@icons/fill-heart.svg";
import Unlike from "@icons/heart.svg";
import Person from "@icons/Icon-person.svg";
import Image from "next/image";
import {Input} from "@nextui-org/react";
import timeAgo from "@/helpers/timeago";
import axios from "axios";

const StoryComments = ({storyId, showComments, lastPage, comments: List, setShowComments}) => {
    const [comments, setComments] = useState(List ?? []);
    const [page, setPage] = useState(1);
    const [isLoading, setIsLoading] = useState(false);
    const commentsRef = useRef(null);

    const fetchComments = useCallback(async (page) => {
        setIsLoading(true);
        try {
            const {data} = await axios.get(`/story/show/${storyId}?page=${page}`);
            setComments(prevComments => [...prevComments, ...data.response.data.story.comments]);
        } catch (error) {
            console.error('Error fetching comments:', error);
        } finally {
            setIsLoading(false);
        }
    }, [storyId]);

    useEffect(() => {
        const handleScroll = () => {
            if (lastPage > page) {
                const {scrollTop, scrollHeight, clientHeight} = commentsRef.current;
                console.log(scrollTop + clientHeight >= scrollHeight - 5)
                if (scrollTop + clientHeight >= scrollHeight - 5 && !isLoading) {
                    setPage(prevPage => prevPage + 1);
                }
            }
        }

        if (commentsRef.current) {
            commentsRef.current.addEventListener('scroll', handleScroll);
        }

        return () => {
            if (commentsRef.current) {
                commentsRef.current.removeEventListener('scroll', handleScroll);
            }
        };
    }, [isLoading]);

    useEffect(() => {
        if (page > 1) {
            fetchComments(page);
        }
    }, [page, fetchComments]);

    return (
        <div dir='rtl'
             className={`absolute z-10 bottom-0 left-0 w-full h-2/3 bg-white bg-opacity-40 backdrop-blur-[40px] text-black rounded-t-lg transition-transform duration-300 ${showComments ? "translate-y-0" : "translate-y-full"}`}>
            <div className="flex flex-col px-4 py-3 h-full overflow-y-auto scrollbar-hide" ref={commentsRef}>
                <div className="w-full centerOfParent cursor-pointer"
                     onClick={() => setShowComments(!showComments)}>
                    <Down className='fill-white'/>
                </div>
                <div className="flex flex-col gap-6 pb-10">
                    <div className="flex flex-col gap-2 h-full">
                        <p className="text-primary-950 text-lg font-semibold">دیدگاه ها</p>
                        <ul className="flex flex-col gap-4">
                            {comments.map((comment, index) => (
                                <li key={index} className="flex flex-col gap-2 items-stretch">
                                    <div className="flex items-stretch justify-between gap-2">
                                        <div className="flex items-center gap-2">
                                            <Image width={100} height={100}
                                                   className='w-6 h-6 rounded-full'
                                                   src={comment.profile_image || '/images/avatar.jpg'}
                                                   alt='person'/>
                                            <p className="text-xs font-semibold">{comment.name}</p>
                                            <div className="bg-[#F5F7F8] w-2 h-2 rounded-full"></div>
                                            <p className="text-[10px] text-white">{timeAgo(comment.created_at || Date.now())}</p>
                                        </div>
                                        <div className="flex flex-col items-center gap-1 overflow-hidden">
                                            {comment.is_liked ? <Like className='w-4 h-4'/> :
                                                <Unlike className='w-4 h-4 fill-white'/>}
                                            <span className='text-white text-xs'>{comment.likes_count}</span>
                                        </div>
                                    </div>
                                    <p className='text-white text-xs'>{comment.body}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <Input
                        size='sm'
                        startContent={<Person/>}
                        endContent={<button className="text-primary-950 text-xs font-semibold">ارسال</button>}
                        type="text"
                        placeholder="نظر خود را بنویسید"
                        classNames={{
                            input: 'h-10',
                            inputWrapper: 'h-auto !rounded-b-none',
                            base: 'fixed bottom-0 left-0 right-0 px-4'
                        }}/>
                </div>
            </div>
        </div>
    );
};

export default StoryComments;