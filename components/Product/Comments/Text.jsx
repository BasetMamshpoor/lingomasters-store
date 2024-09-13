import { useState } from "react";
import { Input, Textarea } from "@nextui-org/react";
import Image from "next/image";
import Pagination from "@/components/Pagination";


//icons
import Like from '@icons/like.svg'
import Dislike from '@icons/dislike.svg'
import Down from '@icons/arrow-down.svg'

const Text = () => {
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <div className="flex flex-col gap-10">
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">نظرات خود را ثبت کنید.</p>
                    <form className="flex flex-col gap-8">
                        <div className="flex flex-col gap-4 items-stretch">
                            <div className="flex items-center gap-4 *:flex-[1_0_0]">
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-sm text-natural_gray-950 mr-2" htmlFor="">نام<span className="text-red-500 mr-1">*</span></label>
                                    <Input isRequired radius="sm" variant="bordered" name="name" placeholder="نام" className="self-stretch" />
                                </div>
                                <div className="flex flex-col items-start gap-2">
                                    <label className="text-sm text-natural_gray-950 mr-2" htmlFor="">ایمیل<span className="text-red-500 mr-1">*</span></label>
                                    <Input isRequired radius="sm" variant="bordered" type="email" name="email" placeholder="ایمیل" className="self-stretch" />
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="text-sm text-natural_gray-950 mr-2" htmlFor="">توضیحات<span className="text-red-500 mr-1">*</span></label>
                                <Textarea minRows={5} radius="sm" maxRows={10} variant="bordered" className="self-stretch" placeholder="توضیحات">توضیحات</Textarea>
                            </div>
                        </div>
                        <button className="py-4 px-6 rounded text-white bg-primary-600 w-[140px] self-end">ارسال</button>
                    </form>
                </div>
                <div className="flex flex-col gap-6">
                    <p className="text-primary-950 font-semibold text-sm self-start">نظرات کاربران</p>
                    <div className="flex flex-col gap-6">
                        <ul className="flex flex-col gap-4 items-stretch">
                            {[...Array(10)].map((_, i) => {
                                if (i < (showMore ? 10 : 5)) return <li className="flex items-center justify-between gap-3" key={i}>
                                    <div className="flex items-center gap-3">
                                        <div className="centerOfParent rounded-full w-10 h-10"><Image src='/images/avatar.jpg' width='0' height='0' sizes="100vw" className="w-full h-full object-cover" /></div>
                                        <div className="flex flex-col items-start gap-3">
                                            <p className="text-xs text-primary-950">علی اسدی</p>
                                            <p className="text-xs text-primary-950">استادی بسیار عالی و ارزشمند</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">24</span>
                                            <div className="centerOfParent"><Dislike /></div>
                                        </div>
                                        <div className="flex items-center gap-1">
                                            <span className="text-primary-950 text-[8px]">24</span>
                                            <div className="centerOfParent"><Like /></div>
                                        </div>
                                    </div>
                                </li>
                            })}
                        </ul>
                        <div className="self-center">
                            {showMore ?
                                <div className="w-full">
                                    <Pagination />
                                </div>
                                : <div className="flex items-center gap-2 cursor-pointer" onClick={() => setShowMore(true)}>
                                    <span className="text-xs text-primary-500">مشاهده بیشتر</span>
                                    <div className="centerofParent"><Down className='w-5 h-5 fill-primary-600' /></div>
                                </div>}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Text;
