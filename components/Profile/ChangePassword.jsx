import React, {useState} from 'react';
import {
    addToast,
    Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalHeader,
    useDisclosure
} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";

const ChangePassword = () => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {isLoading, sendPostRequest} = usePostRequest()
    const [form, setForm] = useState({
        old_password: "", password: "", confirmPassword: "",
    });
    const handleChange = (e) => {
        const {name, value} = e.target;
        setForm((prev) => ({
            ...prev, [name]: value,
        }));
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (form.password !== form.confirmPassword) {
            addToast({
                title: 'خطا',
                description: 'رمز عبور های جدید یکی نیستند',
                color: 'danger',
            })
            return;
        }
        const {
            success,
            data: Data,
            errorMessage
        } = await sendPostRequest('POST', '/password/change', form)
        if (success) {
            onOpen(false)
        } else {
            alert(errorMessage)
        }
    }
    return (<>
        <div className="flex">
            <button onClick={onOpen}
                    type="button"
                    className="py-2 px-6 text-secondary-500 rounded-md border-secondary-500 border-1.5 w-full text-xs lg:text-base"
            >
                تغییر رمز عبور
            </button>
        </div>
        <Modal dir={'rtl'} isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton>
            <ModalContent>
                {(onClose) => (
                    <>
                        <ModalHeader><span className="text-right text-primary-950 font-semibold sm:text-base text-sm">تغییر رمز عبور</span></ModalHeader>
                        <ModalBody>
                            <form className='flex flex-col items-stretch gap-4' onSubmit={handleSubmit}>
                                <Input
                                    radius='sm'
                                    variant='bordered'
                                    label="رمز عبور فعلی"
                                    type="password"
                                    value={form.old_password}
                                    onChange={handleChange}
                                    required
                                    name='old_password'
                                    errorMessage='این فیلد الزامیست'
                                />
                                <Input
                                    radius='sm'
                                    variant='bordered'
                                    label="رمز عبور جدید"
                                    type="password"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    name='password'
                                    errorMessage='این فیلد الزامیست'
                                />
                                <Input
                                    radius='sm'
                                    variant='bordered'
                                    label="تکرار رمز عبور جدید"
                                    type="password"
                                    value={form.confirmPassword}
                                    onChange={handleChange}
                                    required
                                    name='confirmPassword'
                                    errorMessage='این فیلد الزامیست'
                                />
                                <div className="flex items-center gap-4">
                                    <div className="flex overflow-hidden w-full">
                                        <button onClick={onClose}
                                                type="button"
                                                className="py-4 px-6 text-secondary-500 rounded-md border-secondary-500 border-1.5 effect-1 w-full text-xs lg:text-base"
                                        >
                                            انصراف
                                        </button>
                                    </div>
                                    <button
                                        type="submit" disabled={isLoading}
                                        className="py-4 text-white disabled:bg-natural_gray-500 bg-primary-600 rounded w-full effect-2 text-xs lg:text-base"
                                    >
                                        اعمال تغییرات
                                    </button>
                                </div>
                            </form>
                        </ModalBody>
                    </>)}
            </ModalContent>
        </Modal>
    </>);
};

export default ChangePassword;