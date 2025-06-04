import {Tabs, Tab, Spinner, Alert} from "@heroui/react";
import React, {useState} from "react";
import User from "@icons/user-tick.svg"
import Microphone from "@icons/microphone.svg"
import Video from "@icons/video.svg"
import Comment from "@/components/Profile/FeedBack/Comment";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";

const layout = (isLoading, data) => {
    if (isLoading) {
        return (
            <div className="w-full centerOfParent mt-6">
                <Spinner color='success'/>
            </div>
        );
    }
    if (data?.length === 0) {
        return (
            <Alert description="آیتمی برای نمایش وجود ندارد"/>
        );
    }
}

export default function App() {
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState("text")
    const [data, setData, setReload, pagination, , isLoading] = useGetRequest(true, `/student/comments?type=${selected}`, currentPage)
    const content = layout(isLoading, data);

    return (
        <div dir="rtl" className="flex w-full flex-col gap-6">
            <Tabs
                aria-label="Options"
                classNames={{
                    tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
                    cursor: "w-full bg-[#2B49A2] ",
                    tab: "max-w-fit px-3 h-12",
                    tabContent: "group-data-[selected=true]:text-primary-800 group-data-[selected=true]:!fill-primary-800 fill-natural_gray-500",
                }}
                selectedKey={selected}
                onSelectionChange={e => {
                    setSelected(e);
                    setCurrentPage(1);
                }}
                color="primary"
                variant="underlined"
            >
                <Tab
                    key="text"
                    title={
                        <div className="flex items-center gap-2 space-x-2">
                            <User/>
                            <span>متنی</span>
                        </div>
                    }
                />
                <Tab
                    key="voice"
                    title={
                        <div className="flex items-center gap-2 space-x-2">
                            <Microphone/>
                            <span>صوتی</span>
                        </div>
                    }
                />
                <Tab
                    key="video"
                    title={
                        <div className="flex items-center gap-2 space-x-2">
                            <Video/>
                            <span>ویدیویی</span>
                        </div>
                    }
                />
            </Tabs>
            {content ? content :
                <div className='flex flex-col gap-6'>
                    {data?.map(item => <Comment type={selected} setReload={setReload} key={item.id} {...item} />)}
                </div>}
            {pagination && <div className="flex items-center justify-center">
                <PaginationApp total={pagination.total} per_page={pagination.per_page}
                               onChange={setCurrentPage}/>
            </div>}
        </div>
    );
}
