import React, {useContext, useState} from 'react';
import {Tabs, Tab, Spinner, Alert} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import {Category} from "@/providers/CategoriesProviders";
import Card from "@/components/Card";

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
    const {categories} = useContext(Category)
    const [selected, setSelected] = useState(categories[0]?.id.toString())
    const [data, , , pagination, , isLoading] = useGetRequest(`/buyer/favorite?category_id=${selected}`, currentPage)
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
                {categories?.map(r => (
                    <Tab
                        key={r.id}
                        title={r.title}
                    />
                ))}
            </Tabs>
            {content ? content :
                <div className='grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 lg:gap-6 sm:gap-5 gap-4'>
                    {data?.map(p => (
                        <Card key={p.id} data={p} edu={p.slug === "education"}/>
                    ))}
                </div>}
            {pagination && <div className="flex items-center justify-center">
                <PaginationApp total={pagination.total} per_page={pagination.per_page}
                               onChange={setCurrentPage}/>
            </div>}
        </div>
    );
};

export default Favorites;