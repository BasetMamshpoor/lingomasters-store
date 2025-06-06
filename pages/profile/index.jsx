import React, {useEffect, useState} from 'react';

import Calendar from "@icons/calendar.svg";
import {
    Accordion,
    AccordionItem,
    Input,
    addToast
} from "@heroui/react";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import useGetRequest from "@/hooks/useGetRequest";
import usePostRequest from "@/hooks/usePostRequest";
import ProfileImage from "@/components/Profile/ImageProfile";
import Link from "next/link";
import ChangePassword from "@/components/Profile/ChangePassword";

import Address from "@/components/Profile/Address";


const Index = () => {
    const [data, setData] = useState({})


    const inputClass = {
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
        label: 'text-xs text-natural_gray-950 font-semibold',
    }
    const [initData] = useGetRequest('/buyer/profile')
    const {sendPostRequest, isLoading} = usePostRequest()

    useEffect(() => {
        if (initData) {
            setData(initData)
        }
    }, [initData]);

    const setDateState = (e, b) => setData(prev => {
        return {...prev, [b.input.name]: new DateObject(e.toDate()).format("YYYY-MM-DD")}
    })

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        const {errorMessage, success, successMessage} = await sendPostRequest('POST', '/buyer/profile/update', data)
        if (success) {
            addToast({
                title: successMessage,
                color: 'success'
            })
        } else {
            addToast({
                title: errorMessage,
                color: 'danger'
            })
        }
    }

    return (
        <>
            <div className="flex flex-col sm:gap-10 gap-6">
                <div className="flex flex-col gap-3 items-center">
                    <div className="flex flex-col gap-2">
                        <ProfileImage/>
                        <p className='flex items-center gap-2'>
                            <span className='text-xs text-natural_gray-950'>کد خریدار:</span>
                            <span className='text-sm'>{data.id}</span>
                        </p>
                    </div>
                    <div className='flex items-center gap-1'>
                        <p className='text-rose-700 text-xs'>توجه: عکس پروفایل حتما باید با زمینه سفید باشد</p>
                        <Link target='_blank' href='https://www.photoroom.com/tools/background-remover'
                              className='text-primary-700 text-xs'>(لینک حذف زمینه)</Link>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <Accordion
                        selectionMode='multiple'
                        showDivider={false}
                        itemClasses={{
                            base: 'bg-natural_gray-50 rounded-xl p-6 my-6 flex flex-col gap-6',
                            trigger: 'p-0',
                            title: 'text-sm text-primary-950 font-semibold',
                        }}>
                        <AccordionItem key="1" aria-label="Accordion 1"
                                       title='اطلاعات شخصی'>
                            <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                                <div className="grid sm:grid-cols-3 grid-cols-1 sm:gap-x-6 gap-y-4">
                                    <Input isRequired errorMessage=' ' label='نام' labelPlacement='outside' radius='sm'
                                           name='first_name'
                                           value={data.first_name}
                                           onChange={handleChange}
                                           classNames={inputClass}/>
                                    <Input isRequired errorMessage=' ' label='نام خانوادگی' labelPlacement='outside'
                                           name='last_name'
                                           radius='sm' value={data.last_name}
                                           onChange={handleChange}
                                           classNames={inputClass}/>
                                    <Input isRequired errorMessage=' ' label='کدملی' labelPlacement='outside'
                                           radius='sm' value={data.national_code}
                                           name='national_code'
                                           onChange={handleChange}
                                           classNames={inputClass}/>
                                    <Input label='تلفن همراه' labelPlacement='outside'
                                           name='mobile'
                                           onChange={handleChange}
                                           radius='sm' value={data.mobile} classNames={inputClass}/>
                                    <Input label='ایمیل' labelPlacement='outside' radius='sm' type='email'
                                           name='email'
                                           onChange={handleChange}
                                           value={data.email} classNames={inputClass}/>
                                    <div className="flex w-full flex-col justify-between gap-2 relative">
                                        <label className='text-xs font-semibold text-natural_gray-950'>تاریخ
                                            تولد</label>
                                        <DatePicker
                                            name='date_of_birth'
                                            value={data.date_of_birth ? new DateObject(data.date_of_birth) : null}
                                            onChange={setDateState}
                                            inputClass={' w-full h-full py-1.5 px-2 outline-none border-2 border-default-200 rounded-md appearance-none text-sm'}
                                            containerClassName={'w-full !height-full'}
                                            editable={false}
                                            monthYearSeparator="|"
                                            format="YYYY/MM/DD"
                                            maxDate={new DateObject({calendar: persian})}
                                            placeholder={new Date(data.date_of_birth).toLocaleDateString('fa-IR')}
                                            calendar={persian}
                                            locale={persian_fa}
                                            calendarPosition="auto"/>
                                        <Calendar className='fill-natural_gray-600 absolute left-3 bottom-1.5'/>
                                    </div>
                                </div>
                                <div className="flex justify-end gap-8">
                                    <button disabled={isLoading}
                                            className='rounded disabled:bg-natural_gray-400 bg-primary-700 text-white px-4 py-2 h-12 sm:w-1/5 w-full'>{isLoading ? 'لطفا صبر کنید...' : 'ذخیره تغییرات'}</button>
                                    <ChangePassword/>
                                </div>
                            </form>
                        </AccordionItem>
                        <AccordionItem key="4" aria-label="Accordion 4"
                                       title="آدرس ها">
                            <Address/>
                        </AccordionItem>
                    </Accordion>
                </div>
            </div>
        </>
    );
};

export default Index;