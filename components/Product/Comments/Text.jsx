import { useRef, useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import Pagination from "@/components/Pagination";


//icons
import Like from '@icons/like.svg'
import LikeFill from '@icons/like-fill.svg'
import Dislike from '@icons/dislike.svg'
import Close from '@icons/close.svg'
import DislikeFill from '@icons/dislike-fill.svg'
import Down from '@icons/arrow-down.svg'
import useGetRequest from "@/hooks/useGetRequest";
import useSwipeScroll from "@/hooks/useHorizontalScroll";
let staticComments = [
    'عالی است',
    'بهترین است',
    'دوست داشتم',
    'بد بود',
    'بسیار بد بود',
    'عالی است',
    'بهترین است',
    'دوست داشتم',
    'بد بود',
    'بسیار بد بود',
    'عالی است',
    'بهترین است',
    'دوست داشتم',
    'بد بود',
    'بسیار بد بود',
    'عالی است',
    'بهترین است',
    'دوست داشتم',
    'بد بود',
    'بسیار بد بود',
];
const Text = ({ id }) => {
    const [data, setData] = useState({ name: '', email: '', text: '' })
    const [xComment, setXComment] = useState(true)
    const [showMore, setShowMore] = useState(false)
    const [comments, setComments, setReload, pagination] = useGetRequest(`/text-comments/${id}`)
    const ref = useSwipeScroll()
    const handleChange = (event) => {
        const { name, value } = event.target
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleClick = (value) => {
        setData(prev => {
            return {
                ...prev,
                text: value
            }
        })
        setXComment(!xComment)
    }
    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">نظرات خود را ثبت کنید.</p>
                    <form className="flex flex-col gap-8" onSubmit={(e) => e.preventDefault()}>
                        <div className="flex flex-col gap-4 items-stretch">
                            <div className="flex sm:flex-row flex-col sm:items-center items-stretch gap-4 *:flex-[1_0_0]">
                                <div className="flex flex-col items-start gap-2">
                                    <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">نام<span className="text-red-500 mr-1">*</span></label>
                                    <Input onChange={handleChange} value={data.name} isRequired radius="sm" variant="bordered" name="name" placeholder="نام" className="self-stretch" />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">ایمیل<span className="text-red-500 mr-1">*</span></label>
                                    <Input onChange={handleChange} value={data.email} isRequired radius="sm" variant="bordered" type="email" name="email" placeholder="ایمیل" className="self-stretch" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">توضیحات<span className="text-red-500 mr-1">*</span></label>
                                <div className="relative w-full">
                                    <Textarea onChange={handleChange} value={data.text} minRows={5} radius="sm" maxRows={10} variant="bordered" name="text" className="self-stretch" placeholder="توضیحات">توضیحات</Textarea>
                                    <div className="absolute left-0 bottom-0 px-3 py-1 text-sm flex items-center gap-2 w-full">
                                        <div ref={ref} className={`${xComment ? 'hidden' : 'flex'} items-center gap-2 overflow-x-auto scrollbar-hide px-1`}>{staticComments.map((_, i) => <span key={i} className="border rounded-lg py-0.5 px-2 whitespace-nowrap cursor-pointer" onClick={() => handleClick(_)}>{_}</span>)}</div>
                                        <span className="text-primary-600 whitespace-nowrap mr-auto cursor-pointer" onClick={() => setXComment(!xComment)}>{!xComment ? <Close className='fill-primary-600' /> : 'انتخاب نظر اماده'}</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="sm:py-4 py-2 sm:px-6 px-4 sm:text-base text-xs rounded text-white bg-primary-600 sm:w-[140px] sm:h-fit h-9 w-full self-end">ارسال</button>
                    </form>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold sm:text-sm text-xs self-start">نظرات کاربران</p>
                    {!!comments ? <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {!!comments.length ? comments.map((c, i) => {
                                if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={c.id}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-10 h-10 shrink-0"><Image src={c.user.image || '/images/avatar.jpg'} width='0' height='0' sizes="100vw" className="w-full h-full object-cover" /></div>
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="sm:text-xs text-[10px] text-primary-950">{c.user.user_name || 'ناشناس'}</p>
                                            <p dir="auto" className="sm:text-xs text-[8px] text-primary-950">{c.content}</p>
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

export default Text;
