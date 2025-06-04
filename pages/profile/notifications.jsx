import React, {useState} from 'react';
import {Button, Input, Spinner} from "@heroui/react";
import Search from "@icons/search.svg";
import Left from "@icons/arrow-left.svg";
import NotificationsIcon from "@icons/bell.svg";
import Watch from "@icons/watch.svg";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar from "@icons/calendar.svg";
import Link from "next/link";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import NotificationsFilter from "@/components/Profile/NotificationsFilter";

const Notifications = () => {
    const [currentPage, setCurrentPage] = useState(1)
    const [filters, setFilters] = useState({})
    const [state, setState] = useState({})
    const [data, setData, reload, paginations, set, isLoadingNot] = useGetRequest(true, '/notification', currentPage, state)

    const handleFilter = (e) => {
        e.preventDefault()
        setState(filters)
    }
    const setDateState = (e, b) => setFilters(prev => {
        if (e)
            return {...prev, [b.input.name]: new DateObject(e.toDate()).format("YYYY-MM-DD")}
        else
            return {...prev, [b.input.name]: null}
    })

    return (
        <>
            <div className="flex flex-col gap-6 mb-6">
                <div
                    className="flex sm:flex-col sm:items-stretch items-center sm:justify-start justify-between gap-3 sm:p-6 sm:border border-natural_gray-200 px-4 bg-white rounded-xl">
                    <p className={"text-lg sm:block hidden text-primary-600 font-bold"}>فیلتر</p>
                    <p className={"text-lsm text-primary-600 font-bold sm:hidden flex items-center gap-3"}>
                        <NotificationsIcon className="fill-primary-600"/>
                        اعلان ها
                    </p>
                    <form className="sm:flex hidden gap-4 md:flex-nowrap flex-wrap" onSubmit={handleFilter}>
                        <Input
                            name={'search'}
                            classNames={{label: 'text-xs text-natural_gray-950'}}
                            label={"جستجو"}
                            placeholder={"جستجو"}
                            labelPlacement={'outside'}
                            startContent={<Search className="fill-natural_gray-600"/>}
                            variant={"bordered"}
                            value={filters.search}
                            onValueChange={e => setFilters(p => ({...p, search: e}))}
                            radius={"sm"}
                            className={"w-full"}
                        />
                        <div className="flex md:w-full flex-col gap-2 relative">
                            <label className='text-xs font-normal text-natural_gray-950'>از تاریخ</label>
                            <DatePicker
                                name='start_date'
                                inputClass={'w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                containerClassName={'w-full !height-full grow'}
                                // editable={false}
                                monthYearSeparator="|"
                                format="YYYY/MM/DD"
                                placeholder={"تاریخ"}
                                calendar={persian}
                                locale={persian_fa}
                                value={filters.start_date ? new DateObject(filters.start_date) : null}
                                onChange={setDateState}
                                calendarPosition="auto"/>
                            <Calendar className='fill-natural_gray-600 absolute left-4 bottom-1.5'/>
                        </div>
                        <div className="flex md:w-full flex-col gap-2 relative">
                            <label className='text-xs font-normal text-natural_gray-950'>تا تاریخ</label>
                            <DatePicker
                                name='end_date'
                                inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                containerClassName={'w-full !height-full grow'}
                                // editable={false}
                                monthYearSeparator="|"
                                format="YYYY/MM/DD"
                                placeholder={"تاریخ"}
                                calendar={persian}
                                locale={persian_fa}
                                value={filters.end_date ? new DateObject(filters.end_date) : null}
                                onChange={setDateState}
                                calendarPosition="auto"/>
                            <Calendar className='fill-natural_gray-600 absolute left-4 bottom-1.5'/>
                        </div>
                        <Button
                            isLoading={isLoadingNot}
                            type={'submit'}
                            className={'md:w-full md:grow-0 grow text-white self-end'}
                            radius={'sm'}
                            style={{
                                "--heroui-default": "220 69% 53%",
                            }}
                            startContent={<Search className={"fill-white w-5 h-5"}/>}>جستجو</Button>
                    </form>
                    <div className="sm:hidden"><NotificationsFilter setFilters={setFilters}/></div>
                </div>
                <div className="flex flex-col gap-4">
                    {isLoadingNot ? <div className="centerOfParent mt-8"><Spinner color="success" size="lg"/></div> :
                        (data?.length ?
                            data.map(e =>
                                <Link href={e.type || "/"} key={e.id}
                                      className="flex items-center gap-3 sm:flex-nowrap flex-wrap justify-between sm:px-6 sm:py-4 p-2 border border-natural_gray-200 bg-white rounded-xl">
                                    <p className="text-natural_gray-900 text-sm px-2">{e.text}</p>
                                    <div
                                        className="flex items-center sm:justify-normal justify-between sm:w-fit w-full gap-6">
                                        <div className="flex items-center gap-4">
                                            <div className="flex items-center gap-2">
                                                <Calendar className="w-4 h-4 fill-natural_gray-600"/>
                                                <span
                                                    className="text-natural_gray-500 text-xs">{new Date(e.date)?.toLocaleDateString('fa-IR')}</span>
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Watch className="w-4 h-4 fill-natural_gray-600"/>
                                                <span className="text-natural_gray-500 text-xs">{e.time}</span>
                                            </div>
                                        </div>
                                        <Left/>
                                    </div>
                                </Link>)
                            : <div className="centerOfParent">اعلانی برای شما وجود ندارد</div>)
                    }
                </div>
                {paginations && <div className="flex items-center justify-center">
                    <PaginationApp total={paginations.total} per_page={paginations.per_page}
                                   onChange={(page) => setCurrentPage(page)}/>
                </div>}
            </div>
        </>
    );
};

export default Notifications;