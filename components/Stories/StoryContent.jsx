import React, {useEffect, useRef, useState} from 'react';
import Back from "@icons/chevron-right.svg";
import Like from "@icons/fill-heart.svg";
import Unlike from "@icons/heart.svg";
import Person from "@icons/Icon-person.svg";
import Chat from "@icons/chat-alt.svg";
import Down from "@icons/arrow-down.svg";
import {Avatar, Input, ModalBody} from "@nextui-org/react";
import useGetRequest from "@/hooks/useGetRequest";
import Image from "next/image";
import timeAgo from "@/helpers/timeago";

const formatTime = (timeInSeconds) => {
    const minutes = Math.floor(timeInSeconds / 60);
    const seconds = Math.floor(timeInSeconds % 60);
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

const StoryContent = ({onClose, id, isOpen, Stories, index}) => {
    const [storyId, setStoryId] = useState(id);
    const [indexStory, setIndexStory] = useState(index);
    const [data] = useGetRequest(`/story/show/${storyId}`);
    const story = data ? data.story : {seller: {}, comments: []};

    const [isMuted, setIsMuted] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [showComments, setShowComments] = useState(false);
    const [showMuteText, setShowMuteText] = useState(false);
    const videoRef = useRef(null);

    let nextStory = Stories[indexStory + 1] ? Stories[indexStory + 1].id : null;
    let pervStory = Stories[indexStory - 1] ? Stories[indexStory - 1].id : null;

    const toggleMute = () => {
        setIsMuted(prev => !prev);
        if (videoRef.current) {
            videoRef.current.muted = !isMuted;
        }
        setShowMuteText(true);
        setTimeout(() => setShowMuteText(false), 1000);
    };

    const handleLoadedMetadata = () => {
        const video = videoRef.current;
        if (video) {
            setDuration(video.duration || 0);
            setCurrentTime(video.duration || 0);
        }
    };

    const handleTimeUpdate = () => {
        const video = videoRef.current;
        if (video) {
            setCurrentTime(video.duration - video.currentTime);
        }
    };

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            video.addEventListener('loadedmetadata', handleLoadedMetadata);
            video.addEventListener('timeupdate', handleTimeUpdate);

            return () => {
                video.removeEventListener('loadedmetadata', handleLoadedMetadata);
                video.removeEventListener('timeupdate', handleTimeUpdate);
            };
        }
    }, []);

    useEffect(() => {
        if (isOpen) {
            const video = videoRef.current;
            if (video) {
                video.load();
                handleLoadedMetadata();
            }
        }
    }, [isOpen]);

    const progressPercentage = duration ? (currentTime / duration) * 100 : 0;

    const handleLike = () => {
        // Send a request to like or unlike the story
    };

    return (
        <>
            <ModalBody>
                <div className="text-white rounded-lg shadow-lg">
                    <div className="relative overflow-hidden">
                        <div className="absolute top-0 righ-0 left-0 z-10 flex items-center gap-4 w-full p-4"
                             dir={'rtl'}>
                            <Back className='fill-white cursor-pointer' onClick={onClose}/>
                            <Avatar src={story.seller.image} isBordered color='primary'
                                    alt={`${story.seller.name}'s avatar`}/>
                            <span className="text-lg font-semibold">{story.seller.name || '...'}</span>
                        </div>
                        <div className="w-full aspect-w-9 aspect-h-16 bg-black rounded-lg overflow-hidden">
                            <video
                                ref={videoRef}
                                src={story.video}
                                className="w-full h-full object-cover"
                                // autoPlay
                                // loop
                                muted={isMuted}
                                playsInline
                                onLoadedMetadata={handleLoadedMetadata}
                                onTimeUpdate={handleTimeUpdate}
                                onClick={toggleMute}
                            />
                            {showMuteText && (
                                <div
                                    className="centerOfParent cursor-default absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-fit h-fit text-sm px-3 py-1 rounded-lg">
                                    {isMuted ? 'Unmute' : 'Mute'}
                                </div>
                            )}
                        </div>
                        <div className="absolute h-2/3 top-1/4 -translate-y-1/4 w-20" onClick={() => {
                            if (nextStory) {
                                setStoryId(nextStory);
                                setIndexStory(indexStory + 1);
                            }
                        }}></div>
                        <div className="absolute h-2/3 top-1/4 -translate-y-1/4 right-0 w-20" onClick={() => {
                            if (pervStory) {
                                setStoryId(pervStory);
                                setIndexStory(indexStory - 1);
                            }
                        }}></div>
                        <div className="absolute px-4 flex items-center gap-4 left-0 right-0 bottom-2">
                            <span className='sm:text-sm text-xs'>{formatTime(currentTime || 0)}</span>
                            <div className="bg-gray-600 rounded-full h-1 w-full">
                                <div className="bg-white rounded-full h-full duration-300"
                                     style={{width: `${100 - progressPercentage}%`}}></div>
                            </div>
                        </div>
                        <div className='absolute z-10 flex flex-col gap-4 items-center bottom-10 left-0 p-4'>
                            <div className="flex items-center cursor-pointer flex-col gap-2" onClick={handleLike}>
                                <div className="centerOfParent">
                                    {story.is_like ? <Like/> : <Unlike className={'fill-white'}/>}
                                </div>
                                <span className="text-xs" np>{story.likes_count || 0}</span>
                            </div>
                            <div className="flex items-center cursor-pointer flex-col gap-2"
                                 onClick={() => setShowComments(true)}>
                                <div className="centerOfParent">
                                    <Chat/>
                                </div>
                                <span className="text-xs">{story.comments_count || 0}</span>
                            </div>
                        </div>
                        <div dir='rtl'
                             className={`absolute z-10 bottom-0 left-0 w-full h-2/3 bg-white bg-opacity-40 backdrop-blur-[40px] text-black rounded-t-lg transition-transform duration-300 ${showComments ? "translate-y-0" : "translate-y-full"}`}>
                            <div className="flex flex-col px-4 py-3 h-full overflow-y-auto scrollbar-hide">
                                <div className="w-full centerOfParent cursor-pointer"
                                     onClick={() => setShowComments(!showComments)}>
                                    <Down className='fill-white'/>
                                </div>
                                <div className="flex flex-col gap-6 pb-10">
                                    <div className="flex flex-col gap-2 h-full">
                                        <p className="text-primary-950 text-lg font-semibold">دیدگاه ها</p>
                                        <ul className="flex flex-col gap-4">
                                            {story.comments.map((comment, index) => (
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
                                                        <div
                                                            className="flex flex-col items-center gap-1 overflow-hidden">
                                                            {comment.is_liked ? <Like className='w-4 h-4'/> :
                                                                <Unlike className='w-4 h-4 fill-white'/>}
                                                            <span
                                                                className='text-white text-xs'>{comment.likes_count}</span>
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
                                        endContent={<button
                                            className="text-primary-950 text-xs font-semibold">ارسال</button>}
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
                    </div>
                </div>
            </ModalBody>
        </>
    );
};

export default StoryContent;