import React, {useEffect, useRef, useState} from 'react';
import Back from "@icons/chevron-right.svg";
import Like from "@icons/fill-heart.svg";
import Unlike from "@icons/heart.svg";
import Person from "@icons/Icon-person.svg";
import Chat from "@icons/chat-alt.svg";
import Down from "@icons/arrow-down.svg";
import {Avatar, Input, ModalBody} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import Image from "next/image";
import timeAgo from "@/helpers/timeago";
import StoryComments from "@/components/Stories/StoryComments";

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
                                autoPlay
                                loop
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
                        {!!data && <StoryComments storyId={id} lastPage={story.pagination.last_page}
                                                  comments={data.story.comments} showComments={showComments}
                                                  setShowComments={setShowComments}/>}
                    </div>
                </div>
            </ModalBody>
        </>
    );
};

export default StoryContent;