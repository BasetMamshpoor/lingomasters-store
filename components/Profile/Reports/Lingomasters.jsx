import React, {useState} from 'react';
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar from "@icons/calendar.svg";
import {
    Accordion, AccordionItem,
    Button, Chip, Input, Modal, ModalBody, ModalContent, ModalFooter, ModalHeader,
    Select,
    SelectItem, Spinner,
    Table,
    TableBody, TableCell,
    TableColumn,
    TableHeader,
    TableRow, useDisclosure
} from "@heroui/react";
import FilterIcon from "@icons/filter.svg";
import Search from "@icons/search.svg";
import useGetRequest from "@/hooks/useGetRequest";
import geo from "react-date-object/calendars/gregorian";
import geo_fa from "react-date-object/locales/gregorian_en";
import PaginationApp from "@/components/Pagination";


const babat = [
    {
        id: 1,
        name: 'رزرو کلاس خصوصی'
    },
    {
        id: 2,
        name: 'رزرو آزمون تعیین سطح'
    }
]


const Lingomasters = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [filters, setFilters] = useState({})
    const [currentPage, setCurrentPage] = useState(1)
    const [data, , , paginations, , loading] = useGetRequest(true, `/wallet/transactions?type=lingo`, currentPage, filters)
    const handleFilter = (e, isModal) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const date = new DateObject({
            date: data.date,
            format: "YYYY/MM/DD",
            calendar: persian,
            locale: persian_fa
        }).convert(geo, geo_fa).format("YYYY-MM-DD")
        setFilters(prev => {
            const {date: _removed, ...oo} = {...prev, ...data};
            if (data.date) {
                oo.date = date;
            }
            return oo;
        })
        if (isModal)
            onOpenChange()
    }
    return (
        <>
            <div className="flex flex-col gap-8">
                <form className="rounded-xl bg-natural_gray-50 p-6 sm:flex hidden items-center flex-wrap gap-6"
                      onSubmit={handleFilter}>
                    <div className="flex items-center gap-6 grow">
                        <Input
                            label="جستجو"
                            placeholder="بابت و عنوان"
                            variant="bordered"
                            radius="sm"
                            name="search"
                            labelPlacement="outside"
                            classNames={{
                                inputWrapper: "bg-white",
                                label: "text-xs text-natural_gray-950  font-semibold",
                                input: "text-xs",
                            }}
                        />
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
                    </div>
                    <button
                        className="text-white bg-primary-600 rounded py-2 px-4 w-36 mr-auto shrink-0 self-end text-sm">اعمال
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
                                    <Input
                                        label="جستجو"
                                        placeholder="بابت و عنوان"
                                        variant="bordered"
                                        radius="sm"
                                        name="search"
                                        labelPlacement="outside"
                                        classNames={{
                                            inputWrapper: "bg-white",
                                            label: "text-xs text-natural_gray-950  font-semibold",
                                            input: "text-xs",
                                        }}
                                    />
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
                        <TableColumn>بابت</TableColumn>
                        <TableColumn>عنوان</TableColumn>
                        <TableColumn>مبلغ</TableColumn>
                    </TableHeader>
                    <TableBody
                        isLoading={loading}
                        loadingContent={<Spinner color="success"/>}
                        loadingState={loading}
                    >
                        {data?.map(item => (
                            <TableRow key={item.id}>
                                <TableCell>{item.row_number}</TableCell>
                                <TableCell>{new Intl.DateTimeFormat('fa-IR', {
                                    year: 'numeric',
                                    month: '2-digit',
                                    day: '2-digit'
                                }).format(new Date(item.date))}</TableCell>
                                <TableCell>{item.time}</TableCell>
                                <TableCell>{item.description}</TableCell>
                                <TableCell>{item.title}</TableCell>
                                <TableCell>{item.amount?.toLocaleString()} تومان</TableCell>
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
                            textValue={item.description}
                            title={
                                <div className="grid grid-cols-3 gap-2 text-xs">
                                    <span className="text-natural_gray-950">بابت</span>
                                    <span
                                        className="col-span-2 text-black font-semibold">{item.description}</span>
                                </div>
                            }>
                            <p className="text-natural_gray-950">تاریخ</p>
                            <p className="col-span-2 font-semibold">{new Intl.DateTimeFormat('fa-IR', {
                                year: 'numeric',
                                month: '2-digit',
                                day: '2-digit'
                            }).format(new Date(item.date))}</p>
                            <p className="text-natural_gray-950">ساعت</p>
                            <p className="col-span-2 font-semibold">{item.id}</p>
                            <p className="text-natural_gray-950">عنوان</p>
                            <p className="col-span-2 font-semibold">{item.title}</p>
                            <p className="text-natural_gray-950">مبلغ ( تومان )</p>
                            <p className="col-span-2 font-semibold">{item.amount?.toLocaleString()}</p>
                        </AccordionItem>
                    ))}
                </Accordion>
                {paginations && <div className="centerOfParent">
                    <PaginationApp total={paginations.total} per_page={paginations.per_page} onChange={setCurrentPage}/>
                </div>}
            </div>
        </>
    );
};

export default Lingomasters;