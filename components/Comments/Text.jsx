import React, {useRef, useState} from "react";
import {addToast, Avatar, Input, Spinner, Textarea} from "@heroui/react";
import Image from "next/image";
import Pagination from "@/components/Pagination";


//icons
import Close from '@icons/close.svg'
import Down from '@icons/arrow-down.svg'
import useGetRequest from "@/hooks/useGetRequest";
import useSwipeScroll from "@/hooks/useHorizontalScroll";
import usePostRequest from "@/hooks/usePostRequest";
import Link from "next/link";
import LikeDislike from "@/components/Comments/Like&Dislike";

let staticComments = [
    'عالی است',
    'بهترین است',
    'دوست داشتم',
    'بد بود',
    'بسیار بد بود',
];
const Text = ({id, url, logged, asPath}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData] = useState("")
    const [xComment, setXComment] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const [comments, setComments, setReload, pagination, , loading] = useGetRequest(`/${url}/comment/${id}?type=text`, currentPage)
    const {isLoading, sendPostRequest} = usePostRequest()
    const {isLoading: isLikeLoading, sendPostRequest: sendLikeRequest} = usePostRequest()
    const ref =  useSwipeScroll()

    const handleClick = (value) => {
        setData(value)
        setXComment(!xComment)
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        const {
            success,
            errorMessage,
            successMessage, status
        } = await sendPostRequest('POST', `/${url}/comment/${id}`, {body: data})
        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: 'success',
            })
            setData("")
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
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">نظرات خود را ثبت
                        کنید.</p>
                    {logged ? <form className="flex flex-col gap-8" onSubmit={handleSubmit}>
                        <div className="flex flex-col items-start gap-2">
                            <div className="relative w-full">
                                <Textarea isRequired errorMessage=' ' labelPlacement='outside' label='توضیحات'
                                          onValueChange={setData}
                                          value={data}
                                          minRows={5} radius="sm" maxRows={10}
                                          variant="bordered" className="self-stretch"
                                          placeholder="توضیحات">توضیحات</Textarea>
                                <div
                                    className="absolute left-0 bottom-2 px-3 py-1 text-sm flex items-center gap-2 w-full">
                                    <div ref={ref}
                                         className={`${xComment ? 'hidden' : 'flex'} items-center gap-2 overflow-x-auto scrollbar-hide px-1`}>{staticComments.map((_, i) =>
                                        <span key={i}
                                              className="border rounded-lg py-0.5 px-2 whitespace-nowrap cursor-pointer"
                                              onClick={() => handleClick(_)}>{_}</span>)}</div>
                                    <span className="text-primary-600 whitespace-nowrap mr-auto cursor-pointer"
                                          onClick={() => setXComment(!xComment)}>{!xComment ?
                                        <Close className='fill-primary-600'/> : 'انتخاب نظر اماده'}</span>
                                </div>
                            </div>
                        </div>
                        <button disabled={isLoading}
                                className="effect-2 disabled:bg-natural_gray-600 sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-1/4 sm:h-fit h-9 w-full self-end">
                            {isLoading ? "منتظر بمانید..." : 'ارسال'}
                        </button>
                    </form> : <Link href={`/auth/login?backUrl=${asPath}`}>ورود</Link>}
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">نظرات کاربران</p>
                    {!loading ? <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {!!comments?.length ? comments.map((c, i) => {
                                if (i < (showMore ? 10 : 5)) return <li
                                    className="flex items-center justify-between gap-3" key={c.id}>
                                    <div className="flex items-center gap-3">
                                        <Avatar src={c.user.image} showFallback/>
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="sm:text-xs text-[10px] text-primary-950">{c.user.user_name || 'ناشناس'}</p>
                                            <p dir="auto"
                                               className="sm:text-xs text-[8px] text-primary-950">{c.content}</p>
                                        </div>
                                    </div>
                                    <LikeDislike c={c} id={c.id} setReload={setReload}/>
                                </li>
                            }) : <div className="centerOfParent w-full">کامنتی ثبت نشده است</div>}
                        </ul>
                        {pagination?.total > 5 && <div className="self-center">
                            {showMore ?
                                <div className="w-full">
                                    <Pagination total={pagination.total} per_page={pagination.per_page}
                                                onChange={setCurrentPage}/>
                                </div>
                                : <div className="flex items-center gap-2 cursor-pointer"
                                       onClick={() => setShowMore(true)}>
                                    <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                    <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600'/></div>
                                </div>}
                        </div>}
                    </div> : <div className="centerOfParent w-full"><Spinner variant="dots" color="success"/></div>}
                </div>
            </div>
        </>
    );
};

export default Text;
