import React from 'react';
import OO from "@icons/vector.svg";
import Phone from "@icons/call.svg";
import Mp from "@icons/map.svg";
import Youtube from "@icons/youtube.svg";
import Insta from "@icons/instagram.svg";
import Whats from "@icons/whatsapp.svg";
import Tel from "@icons/telegram.svg";
import Apa from "@icons/aparat.svg";
import Tik from "@icons/tik_tok.svg";
import Pi from "@icons/pinterest.svg";
import Fac from "@icons/facebook.svg";
import X from "@icons/x.svg";
import {addToast, Button, Input, Textarea} from "@heroui/react";
import dynamic from "next/dynamic";
import Link from "next/link";
import usePostRequest from "@/hooks/usePostRequest";

const Map = dynamic(() => import('components/Map'), {
    ssr: false,
});
const ContactUs = () => {
    const {sendPostRequest, isLoading} = usePostRequest()
    const inputClass = {
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
        label: 'text-xs text-natural_gray-950 font-semibold',
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target)
        const data = Object.fromEntries(form.entries())
        const {success, errorMessage, successMessage} = await sendPostRequest('POST', '/contactUs', data)
        if (success) {
            addToast({
                title: "موفق",
                description: successMessage,
                color: 'success',
            })
            e.target.reset()
        } else addToast({
            title: "خطا",
            description: errorMessage,
            color: 'danger',
        })
    }
    return (
        <div className="container" dir='rtl'>
            <div
                className="my-10 lg:p-10 p-4 grid lg:grid-cols-2 lg:gap-6 gap-4 grid-cols-1 rounded-2xl shadow bg-gradient-to-t from-primary-100 to-transparent">
                <form className="flex flex-col gap-10" onSubmit={handleSubmit}>
                    <div className="flex items-center gap-4">
                        <OO/>
                        تماس با ما
                    </div>
                    <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-x-4 gap-y-6">
                        <Input
                            isRequired
                            errorMessage=' '
                            label='نام'
                            labelPlacement='outside'
                            radius='sm'
                            name='first_name'
                            classNames={inputClass}/>
                        <Input
                            isRequired
                            errorMessage=' '
                            label='نام خانوادگی'
                            labelPlacement='outside'
                            name='last_name'
                            radius='sm'
                            classNames={inputClass}/>
                        <Input
                            isRequired
                            errorMessage=' '
                            label='شماره تماس'
                            labelPlacement='outside'
                            name='mobile'
                            radius='sm'
                            classNames={inputClass}/>
                        <Input
                            isRequired
                            errorMessage=' '
                            label='ایمیل'
                            labelPlacement='outside'
                            radius='sm'
                            type='email'
                            name='email'
                            classNames={inputClass}/>
                        <Textarea
                            isRequired
                            errorMessage=' '
                            name='description'
                            label="توضیحات"
                            labelPlacement="outside"
                            className="sm:col-span-2 col-span-1"
                            variant='bordered'
                            radius='sm'
                            classNames={inputClass}
                        />
                    </div>
                    <Button isLoading={isLoading} radius="sm" className="max-w-fit bg-primary-600 text-white self-end"
                            type='submit'>ارسال</Button>
                </form>
                <div className="flex flex-col gap-6">
                    <div className="flex items-center gap-3">
                        <Phone className="fill-secondary-600"/>
                        <span>تلفن:</span>
                        <a href={`tel:${process.env.NEXT_PUBLIC_SOCIAL_MOBILE}`}>{process.env.NEXT_PUBLIC_SOCIAL_MOBILE}</a>
                    </div>
                    <div className="flex flex-col gap-3">
                        <div className="flex items-center gap-3">
                            <Mp className="fill-secondary-600"/>
                            <span>آدرس:</span>
                            <span>{process.env.NEXT_PUBLIC_SOCIAL_ADDRESS}</span>
                        </div>
                        <Map justView location={[35.704486879392576, 51.451643407344825]} height={300} zoom={10}/>
                    </div>
                    <div className="flex items-center justify-between gap-3">
                        <span>شبکه های اجتماعی:</span>
                        <div className="flex items-center gap-2">
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_YOUTUBE} target="_blank"
                                  rel="noopener noreferrer">
                                <Youtube/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_INSTAGRAM} target="_blank"
                                  rel="noopener noreferrer">
                                <Insta/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_WHATSAPP} target="_blank"
                                  rel="noopener noreferrer">
                                <Whats/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_TELEGRAM} target="_blank"
                                  rel="noopener noreferrer">
                                <Tel/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_APARAT} target="_blank"
                                  rel="noopener noreferrer">
                                <Apa/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_TIKTOK} target="_blank"
                                  rel="noopener noreferrer">
                                <Tik/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_PINTEREST} target="_blank"
                                  rel="noopener noreferrer">
                                <Pi/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_FACEBOOK} target="_blank"
                                  rel="noopener noreferrer">
                                <Fac/>
                            </Link>
                            <Link href={process.env.NEXT_PUBLIC_SOCIAL_X} target="_blank" rel="noopener noreferrer">
                                <X/>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;