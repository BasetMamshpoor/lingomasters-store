import React, {useState} from 'react';
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar from "@icons/calendar.svg";
import {
    Accordion, AccordionItem,
    Button,
    Chip, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,
    Radio,
    RadioGroup, Spinner,
    Table,
    TableBody, TableCell,
    TableColumn,
    TableHeader,
    TableRow, useDisclosure
} from "@heroui/react";
import FilterIcon from "@icons/filter.svg";
import Search from "@icons/search.svg";
import useGetRequest from "@/hooks/useGetRequest";
import PaginationApp from "@/components/Pagination";
import geo from "react-date-object/calendars/gregorian";
import geo_fa from "react-date-object/locales/gregorian_en";


const Deposit = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [filters, setFilters] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [data, , , paginations, , loading] = useGetRequest(true, `/wallet/transactions?type=deposit`, currentPage, filters)

    const handleFilter = (e, i) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const {date: Date, ...other} = data
        const date = new DateObject({
            date: Date,
            format: "YYYY/MM/DD",
            calendar: persian,
            locale: persian_fa
        }).convert(geo, geo_fa).format("YYYY-MM-DD")
        setFilters(prev => {
            const [statusKey] = Object.keys(other);
            const statusValue = other[statusKey];
            let oo = {...prev};
            if (data.date) {
                oo.date = date;
            } else {
                const {date, ...rest} = oo;
                oo = rest
            }
            if (statusKey) {
                if (statusValue === 'all') {
                    const {status, ...rest} = oo;
                    oo = rest;
                } else {
                    oo.status = statusValue;
                }
            }

            return oo;
        })
        if (i)
            onOpenChange()
    }

    return (
        <>
            <div className="flex flex-col gap-8">
                <form className="rounded-xl bg-natural_gray-50 p-6 sm:flex hidden items-center gap-6"
                      onSubmit={handleFilter}>
                    <div className="flex w-full flex-col gap-1 relative">
                        <label className='text-xs font-semibold text-natural_gray-950'>تاریخ</label>
                        <DatePicker
                            name='date'
                            inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                            containerClassName={'w-full !height-full'}
                            editable={true}
                            monthYearSeparator="|"
                            format="YYYY/MM/DD"
                            placeholder={"تاریخ"}
                            calendar={persian}
                            locale={persian_fa}
                            calendarPosition="auto"/>
                        <Calendar className='fill-natural_gray-600 absolute left-4 bottom-1.5'/>
                    </div>
                    <RadioGroup
                        color="success"
                        style={{
                            "--heroui-success": "196 94% 25%",
                        }}
                        defaultValue="all"
                        classNames={{base: 'w-full', label: 'text-xs font-semibold text-black'}}
                        label="وضعیت" orientation="horizontal">
                        <Radio classNames={{wrapper: 'bg-white'}} value="all">همه</Radio>
                        <Radio classNames={{wrapper: 'bg-white'}} value="approved">موفق</Radio>
                        <Radio classNames={{wrapper: 'bg-white'}} value="rejected">ناموفق</Radio>
                    </RadioGroup>
                    <button className="text-white bg-primary-600 rounded py-2 px-4 w-36 shrink-0 self-end text-sm">اعمال
                        فیلتر
                    </button>
                </form>
                <Button className='self-end sm:hidden' variant="light" isIconOnly
                        onPress={onOpen}><FilterIcon/></Button>
                <Modal dir={'rtl'} isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
                    <ModalContent>
                        {(onClose) => (
                            <form onSubmit={(e) => handleFilter(e, true)}>
                                <ModalHeader></ModalHeader>
                                <ModalBody>
                                    <div className="flex w-full flex-col gap-1 relative">
                                        <label className='text-xs font-semibold text-natural_gray-950'>تاریخ</label>
                                        <DatePicker
                                            name='date'
                                            inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                            containerClassName={'w-full !height-full'}
                                            editable={true}
                                            monthYearSeparator="|"
                                            format="YYYY/MM/DD"
                                            placeholder={"تاریخ"}
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="auto"/>
                                        <Calendar className='fill-natural_gray-600 absolute left-4 bottom-1.5'/>
                                    </div>
                                    <RadioGroup
                                        color="success"
                                        style={{
                                            "--heroui-success": "196 94% 25%",
                                        }}
                                        defaultValue="all"
                                        classNames={{base: 'w-full', label: 'text-xs font-semibold text-black'}}
                                        label="وضعیت" orientation="horizontal">
                                        <Radio classNames={{wrapper: 'bg-white'}} value="all">همه</Radio>
                                        <Radio classNames={{wrapper: 'bg-white'}} value="approved">موفق</Radio>
                                        <Radio classNames={{wrapper: 'bg-white'}} value="rejected">ناموفق</Radio>
                                    </RadioGroup>
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" variant="light" onPress={onClose}>
                                        انصراف
                                    </Button>
                                    <Button
                                        type={'submit'}
                                        className={'text-white self-end'}
                                        radius={'sm'}
                                        style={{
                                            "--heroui-default": "220 69% 53%",
                                        }}
                                        startContent={<Search className={"fill-white w-5 h-5"}/>}>جستجو</Button>
                                </ModalFooter>
                            </form>
                        )}
                    </ModalContent>
                </Modal>
                <Table
                    isStriped={true}
                    aria-label="Example static collection table"
                    className="sm:flex hidden"
                    classNames={{
                        wrapper: 'p-0',
                        th: 'bg-primary-100 !rounded-none text-primary-700 text-center',
                        td: 'text-center whitespace-nowrap',
                    }}
                >
                    <TableHeader>
                        <TableColumn width={60}>ردیف</TableColumn>
                        <TableColumn>تاریخ</TableColumn>
                        <TableColumn>ساعت</TableColumn>
                        <TableColumn>مبلغ</TableColumn>
                        <TableColumn>وضعیت</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={loading}
                        loadingContent={<Spinner color="success"/>}
                        loadingState={loading}>
                        {data?.map(item => (

                            <TableRow key={item.id}>
                                <TableCell>{item.row_number}</TableCell>
                                <TableCell>{new Intl.DateTimeFormat('fa-IR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).format(new Date(item.date))}</TableCell>
                                <TableCell>{item.time}</TableCell>
                                <TableCell>{item.amount?.toLocaleString()} تومان</TableCell>
                                <TableCell>
                                    <Chip
                                        color={item.status === 'approved' ? 'success' : item.status === 'pending' ? 'warning' : 'danger'}
                                        radius='sm'
                                        className={`font-semibold max-w-full w-full ${
                                            item.status === 'approved' ? 'text-success-700 bg-success-50' :
                                                item.status === 'pending' ? 'text-warning-700 bg-warning-50' :
                                                    'text-danger-700 bg-danger-50'
                                        }`}>
                                        {item.status === 'approved' ? 'موفق' : item.status === 'pending' ? 'درانتظار پرداخت' : 'ناموفق'}
                                    </Chip>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
                <Accordion
                    itemClasses={{
                        content: 'bg-natural_gray-50 py-3 px-4 mt-2 grid grid-cols-3 gap-2 text-xs',
                        heading: 'bg-primary-50 rounded-lg',
                        trigger: 'px-4 py-3',
                        indicator: '-rotate-90 data-[open=true]:rotate-90 rtl:-rotate-90 rtl:data-[open=true]:rotate-90 text-primary-950',
                    }}
                    dir={'rtl'} isCompact showDivider={false} className="sm:hidden flex flex-col gap-4">
                    {data?.map(item => (
                        <AccordionItem
                            key={item.id}
                            textValue={item.amount?.toLocaleString()}
                            title={
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                    <span className="text-natural_gray-950">مبلغ (تومان )</span>
                                    <span
                                        className="col-span-2 text-black font-semibold">{item.amount?.toLocaleString()}</span>
                                </div>
                            }>
                            <p className="text-natural_gray-950">تاریخ</p>
                            <p className="col-span-2 font-semibold">{new Intl.DateTimeFormat('fa-IR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            }).format(new Date(item.date))}</p>
                            <p className="text-natural_gray-950">ساعت</p>
                            <p className="col-span-2 font-semibold">{item.time}</p>
                            <p className="text-natural_gray-950">وضعیت</p>
                            <p className="col-span-2 font-semibold">
                                <Chip
                                    color={item.status === 'approved' ? 'success' : 'danger'}
                                    radius='sm'
                                    className={`font-semibold sm:text-base text-xs ${
                                        item.status === 'approved' ? 'text-success-700 bg-success-50' :
                                            'text-danger-700 bg-danger-50'
                                    }`}>
                                    {item.status === 'approved' ? 'موفق' : 'ناموفق'}
                                </Chip>
                            </p>
                        </AccordionItem>
                    ))}
                </Accordion>
                {paginations && <div className="centerOfParent">
                    <PaginationApp total={paginations.total} per_page={paginations.per_page}
                                   onChange={setCurrentPage}/>
                </div>}
            </div>
        </>
    );
};

export default Deposit;