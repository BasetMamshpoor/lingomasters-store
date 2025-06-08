import React, {useState} from "react";
import Pagination from "@/components/Pagination";
import dynamic from "next/dynamic";

const VideoRecorder = dynamic(() => import('./VideoRecorder'), {ssr: false});

//icons
import Like from '@icons/like.svg'
import Dislike from '@icons/dislike.svg'
import Down from '@icons/arrow-down.svg'
import Card from "@/components/Video/Card";
import useGetRequest from "@/hooks/useGetRequest";
import axios from "axios";
import DislikeFill from '@icons/dislike-fill.svg';
import LikeFill from '@icons/like-fill.svg';
import {addToast} from "@heroui/react";
import Link from "next/link";
import usePostRequest from "@/hooks/usePostRequest";
import LikeDislike from "@/components/Comments/Like&Dislike";

const generateUniqueFilename = (blob) => {
    const fileExtension = blob.type.split('/')[1];
    const uniqueName = `video_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
    return uniqueName;
};

const Videos = ({id, url, asPath, logged, showOtherComments}) => {
    const [showMore, setShowMore] = useState(false)
    const [comments, setComments, setReload, pagination] = useGetRequest(showOtherComments && `/${url}/comment/${id}?type=video`)
    const [recordedBlob, setRecordedBlob] = useState(null);
    const {isLoading, sendPostRequest} = usePostRequest()

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!recordedBlob) {
            alert("No video recorded!");
            addToast({
                description: 'لطفا ابتدا صدایی ثبت نمایید',
                color: 'danger'
            })
            return;
        }
        const formData = new FormData();
        const uniqueFilename = generateUniqueFilename(recordedBlob);
        formData.append('video_url', recordedBlob, uniqueFilename);

        const {
            success,
            status,
            successMessage,
            errorMessage
        } = await sendPostRequest('POST', `/${url}/comment/${id}`, formData, true)
        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: 'success',
            })
            setRecordedBlob(null)
        } else
            addToast({
                title: "خطا",
                description: errorMessage,
                color: 'danger',
                endContent: status === 401 &&
                    <Link href='/auth/login' className='border border-rose-600 rounded px-2'>ورود</Link>
            })

    };

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">ویدیو خود را آپلود
                        کنید.</p>
                    <p className="text-warning sm:text-sm text-xs text-right">نکته: لطفا به هنگام ضبط ویدیو، گوشی خود را
                        به صورتی افقی روی پایه ثابتبگذارید و همچنین نور کافی و پس زمینه مناسب باشد.</p>
                    {logged ? <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="flex items-center gap-6">
                            <VideoRecorder setRecordedBlob={setRecordedBlob}/>
                        </div>
                        <button disabled={isLoading}
                                className="effect-2 disabled:bg-natural_gray-600 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-1/4 sm:h-fit h-9 w-full self-end">
                            {isLoading ? "منتظر بمانید..." : 'ارسال'}
                        </button>
                    </form> : <Link href={`/auth/login?backUrl=${asPath}`}>ورود</Link>}
                </div>
                {showOtherComments && <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">نظرات کاربران</p>
                    {!!comments ? <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {!!comments?.length ? comments.map((c, i) => {
                                if (i < (showMore ? 10 : 5)) return <li
                                    className="flex items-center justify-between gap-3" key={i}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-40 h-auto"><Card
                                            movie={c.video_url} bgSrc={'/images/video/bg.jfif'}/></div>
                                        <p className="sm:text-xs text-[10px] text-primary-950">{c.user?.user_name}</p>
                                    </div>
                                    <LikeDislike c={c} id={c.id} setReload={setReload}/>
                                </li>
                            }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                        </ul>
                        {pagination?.total > 5 && <div className="self-center">
                            {showMore ?
                                <div className="w-full">
                                    <Pagination total={pagination.total} per_page={pagination.per_page}/>
                                </div>
                                : <div className="flex items-center gap-2 cursor-pointer"
                                       onClick={() => setShowMore(true)}>
                                    <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                    <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600'/></div>
                                </div>}
                        </div>}
                    </div> : <div className="centerOfParent w-full">درحال بارگزاری...</div>}
                </div>}
            </div>
        </>
    );
};

export default Videos;
