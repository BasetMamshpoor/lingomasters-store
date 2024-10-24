import { useState } from "react";
import Pagination from "@/components/Pagination";
import dynamic from "next/dynamic";
const VideoRecorder = dynamic(() => import('./VideoRecorder'), { ssr: false });

//icons
import Like from '@icons/like.svg'
import Dislike from '@icons/dislike.svg'
import Down from '@icons/arrow-down.svg'
import Card from "@/components/Video/Card";
import useGetRequest from "@/hooks/useGetRequest";
import axios from "axios";
import DislikeFill from '@icons/dislike-fill.svg';
import LikeFill from '@icons/like-fill.svg';

const generateUniqueFilename = (blob) => {
    const fileExtension = blob.type.split('/')[1];
    const uniqueName = `video_${Date.now()}_${Math.random().toString(36).substring(7)}.${fileExtension}`;
    return uniqueName;
};

const Videos = ({ id }) => {
    const [showMore, setShowMore] = useState(false)
    const [comments, setComments, setReload, pagination] = useGetRequest(`/video-comments/${id}`)
    const [recordedBlob, setRecordedBlob] = useState(null);

    const handleSubmit = async (event) => {
        event.preventDefault();

        if (!recordedBlob) {
            alert("No video recorded!");
            return;
        }
        const formData = new FormData();
        const uniqueFilename = generateUniqueFilename(recordedBlob);
        formData.append('video', recordedBlob, uniqueFilename);
        console.log(formData);

        await axios.post('/video-comments/store', formData, {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
        }).then(() => {
            alert("Video uploaded successfully!");
        }).catch(() => {
            alert("Error uploading video!");
        })
    };

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">ویدیو خود را آپلود کنید.</p>
                    <p className="text-warning sm:text-sm text-xs text-right">نکته: لطفا به هنگام ضبط ویدیو، گوشی خود را به صورتی افقی روی پایه ثابتبگذارید و همچنین نور کافی و پس زمینه مناسب باشد.</p>
                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="flex items-center gap-6">
                            <VideoRecorder setRecordedBlob={setRecordedBlob} />
                        </div>
                        <button className="sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-[140px] sm:h-fit h-9 w-full self-end">ارسال</button>
                    </form>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">نظرات کاربران</p>
                    {!!comments ? <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {!!comments.length ? comments.map((c, i) => {
                                if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={i}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-40 h-auto"><Card movie={c.video_path} bgSrc={'/images/video/bg.jfif'} /></div>
                                        <p className="sm:text-xs text-[10px] text-primary-950">{c.user?.user_name}</p>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">{c.dislikes_count}</span>
                                            <div className="centerOfParent">{c.is_dislike ? <DislikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-red-600' /> : <Dislike className='sm:w-6 sm:h-6 w-4 h-4' />}</div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">{c.likes_count}</span>
                                            <div className="centerOfParent">{c.is_like ? <LikeFill className='sm:w-6 sm:h-6 w-4 h-4 fill-green-600' /> : <Like className='sm:w-6 sm:h-6 w-4 h-4' />}</div>
                                        </div>
                                    </div>
                                </li>
                            }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                        </ul>
                        {pagination.total > 5 && <div className="self-center">
                            {showMore ?
                                <div className="w-full">
                                    <Pagination total={pagination.total} per_page={pagination.per_page} />
                                </div>
                                : <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMore(true)}>
                                    <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                    <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600' /></div>
                                </div>}
                        </div>}
                    </div> : <div className="centerOfParent w-full">درحال بارگزاری...</div>}
                </div>
            </div>
        </>
    );
};

export default Videos;
