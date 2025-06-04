import React, {useState} from 'react';
import Image from "next/image";
import Text from "./Text";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import Audio from "./Audio";
import Videos from "./Videos";
import {Spinner} from "@heroui/react";

const Comments = ({selected}) => {
    const [currentPage, setCurrentPage] = useState(1)
    const [data, setData, reload, paginations, setPa, isLoading] = useGetRequest(`/comment/${selected}`, currentPage)

    return (
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-6">
            {isLoading ?
                <div className="lg:col-span-2 col-span-1 centerOfParent"><Spinner color='success' size='lg'/></div>
                : (data?.length ?
                    data.map((f) => (
                        <div key={f.unique_id} className="p-4 rounded-lg bg-natural_gray-50 flex flex-col gap-6">
                            <div className="flex items-center gap-3">
                                <Image src={f.image || ''} alt="class" className="w-[86px] rounded-lg"/>
                                <div className="flex flex-col items-start gap-3">
                                    <p className="sm:text-lg text-sm text-primary-950">{f.title}</p>
                                    <p dir="auto"
                                       className="sm:text-sm text-xs text-natural_gray-950">{f.type1}</p>
                                </div>
                            </div>
                            {selected === 'text' &&
                                <Text id={f.id} has_more={f.has_more} comments={f.comments} url={f.type}/>}
                            {selected === 'voice' &&
                                <Audio id={f.id} has_more={f.has_more} comments={f.comments} url={f.type}/>}
                            {selected === 'video' &&
                                <Videos id={f.id} has_more={f.has_more} comments={f.comments} url={f.type}/>}
                        </div>
                    ))
                    : <div className="font-semibold">تاکنون
                        کامنت {selected === 'text' ? 'متنی' : selected === 'voice' ? 'صوتی' : 'ویدیویی'} نداشته
                        اید</div>)}
            {paginations &&
                <div className="lg:col-span-2 col-span-1 centerOfParent ">
                    <PaginationApp total={paginations.total} per_page={paginations.per_page}
                                   onChange={(page) => setCurrentPage(page)}/>
                </div>}
        </div>
    );
};

export default Comments;