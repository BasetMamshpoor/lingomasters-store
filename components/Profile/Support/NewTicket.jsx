import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure, Select, SelectItem, Textarea, addToast, Input,
} from "@heroui/react";
import Plus from "@icons/plus.svg";
import React from "react";
import usePostRequest from "@/hooks/usePostRequest";
import {useRouter} from "next/router";

const staticData = [
    "پرداخت و صورتحساب "
    , "کلاس‌ها، آزمون‌ها و وبینارها",
    "حساب کاربری و اطلاعات شخصی",
    'مشکلات فنی و سایت',
    'گزارش تخلف / سوء استفاده / نقض قوانین ',
    "پیشنهادات و انتقادات"
]

export default function NewTicket() {
    const {push} = useRouter()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {sendPostRequest, isLoading} = usePostRequest()

    const handleSubmit = async (e) => {
        e.preventDefault()
        const formData = new FormData(e.target)
        const data = Object.fromEntries(formData.entries())
        const {
            success,
            successMessage,
            errorMessage,
            data: Data
        } = await sendPostRequest("POST", '/tickets', data, undefined, true)
        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: "success"
            })
            push(`/profile/support/${Data.response.data}`)
            onOpenChange()
        } else {
            addToast({
                title: "ثبت نشد",
                description: errorMessage,
                color: "danger"
            })
        }
    }
    return (
        <>
            <Button radius="sm" className="bg-primary-700 text-white" onPress={onOpen}
                    startContent={<Plus className="w-5 h-5 fill-white"/>}> افزودن تیکت جدید</Button>
            <Modal scrollBehavior='inside' dir={'rtl'} placement='center' hideCloseButton isOpen={isOpen}
                   onOpenChange={onOpenChange}>
                <ModalContent>
                    {() => (
                        <>
                            <ModalHeader/>
                            <ModalBody>
                                <form className="flex flex-col gap-20" onSubmit={handleSubmit}>
                                    <div className="flex flex-col gap-6">
                                        <p className="text-sm font-bold">ارسال پیام به پشتیبانی</p>
                                        <div className="flex flex-col gap-6">
                                            <Select
                                                isRequired
                                                errorMessage={' '}
                                                labelPlacement="outside"
                                                className="w-full"
                                                label="واحد مربوطه"
                                                name='department'
                                                variant="bordered"
                                                radius="sm"
                                                classNames={{
                                                    label: 'text-xs font-semibold',
                                                    input: 'text-xs',
                                                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3'
                                                }}
                                            >
                                                {staticData.map((lang) => (
                                                    <SelectItem
                                                        key={(lang)}
                                                        className="flex-row-reverse"
                                                        textValue={lang}>
                                                        <p className="flex items-center gap-1 justify-end w-full">{lang}</p>
                                                    </SelectItem>
                                                ))}
                                            </Select>
                                            <Input
                                                isRequired
                                                errorMessage={' '}
                                                labelPlacement="outside"
                                                className="w-full"
                                                label="عنوان درخواست"
                                                placeholder="توضیحات"
                                                name='subject'
                                                variant="bordered"
                                                radius="sm"
                                                classNames={{
                                                    label: 'text-xs font-semibold',
                                                }}
                                            />
                                            <Textarea
                                                isRequired
                                                errorMessage={' '}
                                                labelPlacement="outside"
                                                className="w-full"
                                                label="توضیحات"
                                                placeholder="توضیحات"
                                                name='message'
                                                variant="bordered"
                                                radius="sm"
                                                classNames={{
                                                    label: 'text-xs font-semibold',
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-4">
                                        <Button
                                            radius="sm" variant="bordered"
                                            className="border-primary-700 text-primary-700 w-full"
                                            onPress={onOpenChange}> انصراف</Button>
                                        <Button radius="sm" type='submit' isLoading={isLoading}
                                                className="bg-primary-700 text-white w-full"> ارسال پیام</Button>
                                    </div>
                                </form>
                            </ModalBody>
                            <ModalFooter/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
