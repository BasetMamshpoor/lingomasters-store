import {addToast, Input} from "@heroui/react";
import React, {useState, useEffect} from "react";
import Link from "next/link";
import Otp from "@/components/auth/OTP";
import {useRouter} from "next/router";
import DatePicker, {DateObject} from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import Calendar from "@icons/calendar.svg";
import {EyeFilledIcon, EyeSlashFilledIcon} from "@/components/auth/Password";

const Register = () => {
    const {query} = useRouter()
    const [step, setStep] = useState(1)
    const [data, setData] = useState({})
    const [isVisible, setIsVisible] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    useEffect(() => {
        if (query.code) {
            setData(prev => ({...prev, Identification_code: query.code}));
        }
    }, [query.code]);
    const setDateState = (e, b) => setData(prev => {
        return {...prev, [b.input.name]: e.toDate()}
    })

    const handleSubmit = () => {
        if (data.password !== data.confirm_password) {
            addToast({
                title: 'رمز عبور با تکرار رمز عبور مطابقت ندارد',
                color: 'danger'
            })
            return
        }
        setStep(2)
    }

    return (
        <>
            {step === 2 ? <Otp setStep={setStep} user={{email: data.email, mobile: data.mobile}} data={data}/> :
                <div className="h-screen w-full bg-white overflow-x-hidden relative">
                    <div className="login blur-sm lg:mr-[400px] lg:rounded-r-3xl"></div>
                    <div
                        className="bg-white lg:w-[533px] sm:w-[504px] w-[328px] shadow-md border sm:rounded-3xl rounded-xl absolute top-[5%] lg:right-[10%] right-1/2 lg:translate-x-0 translate-x-1/2 lg:py-8 sm:py-5 py-3 lg:px-10 sm:px-6 px-4 flex flex-col gap-5">
                        <div className="flex flex-col gap-10 items-center">
                            <p className="text-blue-600 sm:text-4xl text-xl">لینگومسترز</p>
                            <p>ثبت نام</p>
                        </div>
                        <form className="flex flex-col gap-5" onSubmit={handleSubmit}>
                            <div className="flex flex-col gap-1">
                                <div className="flex flex-col w-full gap-5">
                                    <div className="grid grid-cols-2 gap-4">
                                        <Input
                                            label="نام"
                                            type="text"
                                            isRequired
                                            errorMessage=' '
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius='sm'
                                            name='first_name'
                                            value={data.first_name}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                        <Input
                                            label=" نام خانوادگی"
                                            type="text"
                                            isRequired
                                            errorMessage=' '
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius='sm'
                                            name='last_name'
                                            value={data.last_name}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                        <Input
                                            label="ایمیل"
                                            type="text"
                                            isRequired
                                            errorMessage=' '
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius='sm'
                                            name='email'
                                            value={data.email}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                        <Input
                                            label="تلفن"
                                            type="text"
                                            isRequired
                                            errorMessage=' '
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius='sm'
                                            name='mobile'
                                            value={data.mobile}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                        <Input
                                            isRequired
                                            errorMessage=' '
                                            endContent={
                                                <button
                                                    aria-label="toggle password visibility"
                                                    className="focus:outline-none"
                                                    type="button"
                                                    onClick={() => setIsVisible(!isVisible)}
                                                >
                                                    {isVisible ? (
                                                        <EyeSlashFilledIcon
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    ) : (
                                                        <EyeFilledIcon
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    )}
                                                </button>
                                            }
                                            label="رمز عبور"
                                            labelPlacement="outside"
                                            variant="bordered"
                                            type={isVisible ? "text" : "password"}
                                            radius='sm'
                                            name='password'
                                            value={data.password}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                        <Input
                                            isRequired
                                            errorMessage=' '
                                            endContent={
                                                <button
                                                    aria-label="toggle password visibility"
                                                    className="focus:outline-none"
                                                    type="button"
                                                    onClick={() => setIsVisible2(!isVisible2)}
                                                >
                                                    {isVisible2 ? (
                                                        <EyeSlashFilledIcon
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    ) : (
                                                        <EyeFilledIcon
                                                            className="text-2xl text-default-400 pointer-events-none"/>
                                                    )}
                                                </button>
                                            }
                                            label="تکرار رمز عبور"
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius='sm'
                                            type={isVisible2 ? "text" : "password"}
                                            name='confirm_password'
                                            value={data.confirm_password}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                        <div className="flex w-full flex-col justify-between gap-2 relative">
                                            <label className='text-xs font-semibold text-natural_gray-950'>تاریخ
                                                تولد</label>
                                            <DatePicker
                                                name='birthday'
                                                value={data.date_of_birth}
                                                onChange={setDateState}
                                                inputClass={' w-full h-full py-1.5 px-2 text-primary-950 border-2 border-natural_gray-200 outline-none  rounded-md appearance-none text-sm'}
                                                containerClassName={'w-full !height-full grow'}
                                                editable={false}
                                                monthYearSeparator="|"
                                                format="DD/MMMM/YYYY"
                                                minDate={new DateObject({calendar: persian}).subtract(0, "days")}
                                                placeholder={new Date().toLocaleDateString('fa-IR')}
                                                calendar={persian}
                                                locale={persian_fa}
                                                calendarPosition="auto"/>
                                            <Calendar className='fill-natural_gray-600 absolute left-3 bottom-1.5'/>
                                        </div>
                                        <Input
                                            label="کد معرف"
                                            type="text"
                                            labelPlacement="outside"
                                            variant="bordered"
                                            radius='sm'
                                            name='Identification_code'
                                            value={data.Identification_code}
                                            onChange={handleChange}
                                            classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                        />
                                    </div>
                                </div>
                            </div>
                            <div className="w-full flex items-center gap-2 mt-10">
                                <div className="w-full overflow-hidden">
                                    <Link href="/auth/login"
                                          className="border border-secondary-400 text-secondary-400 w-full inline-block sm:text-base text-sm text-center px-3 py-2 rounded effect-1">
                                        حساب دارید؟ وارد شوید
                                    </Link>
                                </div>
                                <div className="w-full">
                                    <button
                                        className="disabled:bg-natural_gray-400 text-white bg-primary-700 w-full px-3 py-2 sm:text-base text-sm rounded effect-2">
                                        ثبت نام
                                    </button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            }
        </>
    );
};

export default Register;
