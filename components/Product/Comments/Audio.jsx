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
import axios from "axios";
import DislikeFill from '@icons/dislike-fill.svg';
import LikeFill from '@icons/like-fill.svg';

const generateUniqueFileName = (blob) => {
    const timestamp = Date.now();
    const blobSize = blob.size;
    const randomValue = Math.floor(Math.random() * 10000);
    return `recording_${timestamp}_${blobSize}_${randomValue}.wav`;
};

const Audio = ({ id }) => {
    const [showMore, setShowMore] = useState(false)

    const [comments, setComments, setReload, pagination] = useGetRequest(`/audio-comments/${id}`)

    const [audioBlob, setAudioBlob] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!audioBlob) {
            alert("Please record audio before submitting.");
            return;
        }
        const formData = new FormData();
        const name = generateUniqueFileName(audioBlob)
        formData.append('audio', audioBlob, name);
        await axios.post('/audio-comments/store', formData, {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        }).then((res) => {
            alert("Audio uploaded successfully:", res.data);
        }).catch((error) => {
            alert("Error uploading audio:", error);
        })
    };

    return (


        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">صدا خود را آپلود کنید.</p>
                    <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="flex items-center gap-6">
                            <AudioRecorder onRecordingComplete={setAudioBlob} />
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
                                        <div className="centerOfParent rounded-full w-10 h-10"><Image src={c.user?.image || '/images/avatar.jpg'} width='0' height='0' sizes="100vw" className="w-full h-full object-cover" /></div>
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="sm:text-xs text-[10px] text-primary-950">{c.user?.user_name}</p>
                                            <audio controls src={c.audio_path}></audio>
                                        </div>
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
                        <div className="self-center">
                            {pagination.total > 5 && (showMore ?
                                <div className="w-full">
                                    <Pagination total={pagination.total} per_page={pagination.per_page} />
                                </div>
                                : <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMore(true)}>
                                    <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                    <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600' /></div>
                                </div>)}
                        </div>
                    </div> : <div className="centerOfParent w-full">درحال بارگزاری...</div>}
                </div>
            </div>
        </>
    );
};

export default Audio;
