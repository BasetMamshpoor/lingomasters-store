import React, {useState} from "react";
import Pagination from "@/components/Pagination";
import dynamic from "next/dynamic";

const AudioRecorder = dynamic(() => import('./VoiceRecorder'), {ssr: false});

//icons
import Down from '@icons/arrow-down.svg'
import useGetRequest from "@/hooks/useGetRequest";
import {addToast, Avatar} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import Link from "next/link";
import LikeDislike from "@/components/Comments/Like&Dislike";
import AudioPlayer from "@/components/Comments/AudioPlayer";

const generateUniqueFileName = (blob) => {
    const timestamp = Date.now();
    const blobSize = blob.size;
    const randomValue = Math.floor(Math.random() * 10000);
    return `recording_${timestamp}_${blobSize}_${randomValue}.wav`;
};

const Audio = ({id, url,asPath,logged}) => {
        const [showMore, setShowMore] = useState(false)

        const [comments, setComments, setReload, pagination] = useGetRequest(`/${url}/comment/${id}?type=voice`)

        const [audioBlob, setAudioBlob] = useState(null);

        const {isLoading, sendPostRequest} = usePostRequest()


        const handleSubmit = async (e) => {
            e.preventDefault();

            if (!audioBlob) {
                addToast({
                    description: 'لطفا ابتدا صدایی ثبت نمایید',
                    color: 'danger'
                })
                return;
            }
            const formData = new FormData();
            const name = generateUniqueFileName(audioBlob)
            formData.append('voice_url', audioBlob, name);
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
                setAudioBlob(null)
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
                        <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">صدا خود را آپلود
                            کنید.</p>
                        {logged?<form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                            <div className="flex items-center gap-6">
                                <AudioRecorder onRecordingComplete={setAudioBlob}/>
                            </div>
                            <button disabled={isLoading}
                                    className="effect-2 disabled:bg-natural_gray-600 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-1/4 sm:h-fit h-9 w-full self-end">
                                {isLoading ? "منتظر بمانید..." : 'ارسال'}
                            </button>
                        </form>:<Link  href={`/auth/login?backUrl=${asPath}`}>ورود</Link>}
                    </div>
                    <div className="flex flex-col gap-6">
                        <p className="text-primary-950 font-semibold text-sm self-start">نظرات کاربران</p>
                        {!!comments ? <div className="flex flex-col gap-6">
                            <ul className="flex flex-col gap-4 items-stretch">
                                {!!comments?.length ? comments.map((c, i) => {
                                    if (i < (showMore ? 10 : 5)) return <li
                                        className="flex items-center justify-between gap-3" key={i}>
                                        <div className="flex items-center gap-3 grow">
                                            <Avatar src={c.user.image} showFallback/>
                                            <div className="flex flex-col items-start gap-3 grow">
                                                <p className="sm:text-xs text-[10px] text-primary-950">{c.user?.user_name}</p>
                                                <AudioPlayer audio_url={c.voice_url}/>
                                                {/*<audio controls src={c.voice_url}></audio>*/}
                                            </div>
                                        </div>
                                        <LikeDislike c={c} id={c.id} setReload={setReload}/>
                                    </li>
                                }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                            </ul>
                            <div className="self-center">
                                {pagination?.total > 5 && (showMore ?
                                    <div className="w-full">
                                        <Pagination total={pagination.total} per_page={pagination.per_page}/>
                                    </div>
                                    : <div className="flex items-center gap-2 cursor-pointer"
                                           onClick={() => setShowMore(true)}>
                                        <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                        <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600'/></div>
                                    </div>)}
                            </div>
                        </div> : <div className="centerOfParent w-full">درحال بارگزاری...</div>}
                    </div>
                </div>
            </>
        );
    }
;

export default Audio;
