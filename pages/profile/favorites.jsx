import React, {useState} from 'react';
import {Tabs, Tab, Spinner, Alert} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import BookCard from "@/components/Profile/Favorites/BookCard";
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
const Favorites = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [selected, setSelected] = useState("private")
    const [data, , , pagination, , isLoading] = useGetRequest(true, `/buyer/favorite?type=${selected}`, currentPage)
    const content = layout(isLoading, data);
    return (
        <div className="container flex w-full flex-col gap-6">
            <Tabs
                aria-label="Options"
                fullWidth
                classNames={{
                    tabList: "justify-between w-full relative rounded-none p-0 border-b border-natural_gray-200",
                    cursor: "w-full bg-[#F3B944]",
                    tab: " px-0 h-12 w-full ",
                    tabContent: "group-data-[selected=true]:text-[#F3B944]",
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
                    key="private"
                    title="کلاس‌های خصوصی"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => (
                                <BookCard key={p.id} {...p} />
                            ))}
                        </div>}
                </Tab>
                <Tab
                    key="group"
                    title="کلاس‌های گروهی"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => (
                                <></>
                            ))}
                        </div>}
                </Tab>
                <Tab
                    key="webinar"
                    title="وبینارها"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => (
                                <></>
                            ))}
                        </div>}
                </Tab>
                <Tab
                    key="workshop"
                    title="ورکشاپ‌ها"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => (
                                <></>
                            ))}
                        </div>}
                </Tab>
                <Tab
                    key="book"
                    title="کتاب‌ها"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => {
                                <></>
                            })}
                        </div>}
                </Tab>
                <Tab
                    key="blog"
                    title="وبلاگ‌ها"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => (
                                <></>
                            ))}
                        </div>}
                </Tab>
                <Tab
                    key="exam"
                    title="آزمون پلاس"
                >
                    {content ? content :
                        <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                            {data?.map(p => (
                                <></>
                            ))}
                        </div>}
                </Tab>
            </Tabs>
            {pagination && <div className="flex items-center justify-center">
                <PaginationApp total={pagination.total} per_page={pagination.per_page}
                               onChange={setCurrentPage}/>
            </div>}
        </div>
    );
};

export default Favorites;