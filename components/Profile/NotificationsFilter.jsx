import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure, Input,
} from "@heroui/react";
import FilterIcon from "@icons/filter.svg";
import Search from "@icons/search.svg";
import React from "react";
import DatePicker from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar from "@icons/calendar.svg";

export default function NotificationsFilter({setFilters}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const handleFilter = (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        setFilters(prev => ({...prev, ...data}))
        onOpenChange(false)
    }
    return (
        <>
            <Button variant="light" isIconOnly onPress={onOpen}><FilterIcon className='fill-primary-600'/></Button>
            <Modal dir={'rtl'} isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleFilter}>
                            <ModalHeader className=""></ModalHeader>
                            <ModalBody>
                                <Input
                                    size='sm'
                                    name={'search'}
                                    classNames={{label: 'text-xs text-natural_gray-950'}}
                                    label={"جستجو"}
                                    placeholder={"جستجو"}
                                    labelPlacement={'outside'}
                                    startContent={<Search/>}
                                    variant={"bordered"}
                                    radius={"sm"}
                                    className={"w-full"}
                                />
                                <div className="flex w-full flex-col gap-2 relative">
                                    <label className='text-xs font-normal text-natural_gray-950'>از تاریخ</label>
                                    <DatePicker
                                        name='start_date'
                                        inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                        containerClassName={'w-full !height-full'}
                                        editable={false}
                                        monthYearSeparator="|"
                                        format="YYYY/MM/DD"
                                        placeholder={"تاریخ"}
                                        calendar={persian}
                                        locale={persian_fa}
                                        calendarPosition="auto"/>
                                    <Calendar className='fill-natural_gray-600 absolute left-4 bottom-1.5'/>
                                </div>
                                <div className="flex w-full flex-col gap-2 relative">
                                    <label className='text-xs font-normal text-natural_gray-950'>تا تاریخ</label>
                                    <DatePicker
                                        name='end_date'
                                        inputClass={' w-full h-full py-1.5 px-2 text-primary-950 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                        containerClassName={'w-full !height-full'}
                                        editable={false}
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
        </>
    );
}
