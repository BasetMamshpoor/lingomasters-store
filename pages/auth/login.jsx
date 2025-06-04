import {addToast, Button, Input} from "@heroui/react";
import React, {useState} from "react";
import ForgivePass from "@/components/auth/ForgivePass";
import usePostRequest from "@/hooks/usePostRequest";
import {useRouter} from "next/router";
import Password from "@/components/auth/Password";
import Otp from "@/components/auth/OTP";

const Login = () => {
    const {push, query} = useRouter()
    const [step, setStep] = useState(1)
    const [data, setData] = useState("")
    const {isLoading, sendPostRequest} = usePostRequest()

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {
            data: Data,
        } = await sendPostRequest('POST', '/check', {user: data})
        if (Data.response.data.exists) {
            addToast({
                description: "خوش برگشتید",
                color: 'success'
            })
            setStep(3)
        } else
            push('/auth/register?user=' + data)
    }

    return (
        <>
            {step === 4 ? <ForgivePass user={data} setUser={setData} setStep={setStep}/> : step === 3 ?
                <Password setStep={setStep} user={data}/> : step === 2 ?
                    <Otp user={{user:data}} setStep={setStep} login/> :
                    <div className="h-screen w-full bg-white overflow-x-hidden relative">
                        <div className="login blur-sm lg:mr-[400px] lg:rounded-r-3xl"></div>
                        <div
                            className="bg-white lg:w-[533px] sm:w-[504px] w-[328px] shadow-md border sm:rounded-3xl rounded-xl absolute top-[15%] lg:right-[10%] right-1/2 lg:translate-x-0 translate-x-1/2 py-5 px-6 flex flex-col gap-5">
                            <div className="flex flex-col gap-10 items-center">
                                <p className="text-blue-600 sm:text-4xl text-xl">لینگومسترز</p>
                                <p>ورود</p>
                            </div>
                            <form className="flex flex-col gap-20" onSubmit={handleSubmit}>
                                <Input
                                    label="شماره تماس یا ایمیل"
                                    isRequired
                                    errorMessage=' '
                                    labelPlacement="outside"
                                    variant="bordered"
                                    radius='sm'
                                    name='user'
                                    onValueChange={setData}
                                    classNames={{label: "sm:text-sm text-xs", input: "sm:text-sm text-xs"}}
                                />
                                <Button color="primary" isLoading={isLoading} type='submit'
                                        className="disabled:bg-natural_gray-400text-white bg-primary-700 w-full px-3 py-2 sm:text-base text-sm rounded effect-2">
                                    ورود
                                </Button>
                            </form>
                        </div>
                    </div>
            }
        </>
    );
};

export default Login;
