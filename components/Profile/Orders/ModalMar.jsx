import React from 'react';
import {
    Alert, Button,
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger, Modal,
    ModalBody,
    ModalContent,
    ModalFooter, useDisclosure
} from "@heroui/react";

const ModalMar = ({isOpen, onOpenChange}) => {

    return (
        <>
            <Modal
                isDismissable={false}
                isKeyboardDismissDisabled={true}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div dir="rtl" className="flex flex-col items-center py-8 gap-12">
                                    <div className="flex flex-col items-center gap-6 ">
                                        <p className="text-sm  md:text-base lg:text-lg lg:font-bold">برای مرجوع کردن کالا باید ویدیو بارگذاری کنید. </p>
                                        <Alert
                                            color="warning"
                                            title="توجه داشته باشید:"
                                            description="جهت مرجوع کالا خریدار بایستی حین باز کردن بسته پستی دوربین خود را در حالت افقی و پایه ثابت قرار داده و از باز کردن بسته فیلم واضحی ضبط نماید و در صورت هرگونه پاره شدگی ‌ ... فیلم و عکس های مربوطه را به همراه درخواست مرجوع کالا و توضیحات کامل بلافاصله بعد از دریافت به  پشتیبانی ارسال نماید"
                                        />
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={onClose}
                                        className="px-6 py-4 flex items-center justify-center border border-rose-600 rounded-md w-1/2 text-rose-600 text-xs md:text-base">
                                    لغو سفارش
                                </Button>
                                <Button color="primary" onPress={onClose}
                                        className="px-6 py-4 flex items-center justify-center bg-primary-600 rounded-md w-1/2 text-white text-xs md:text-base ">
                                    انصراف
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default ModalMar;