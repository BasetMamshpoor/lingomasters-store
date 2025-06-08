import React, {useState} from 'react';
import {addToast, Alert, Button, Modal, ModalBody, ModalContent, ModalFooter} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import {useRouter} from "next/router";

const ModalOrders = ({isOpen, onOpenChange, id}) => {
    const {sendPostRequest, isLoading} = usePostRequest();
    const router = useRouter()

    const handleSubmit = async e => {
        const {success, data, errorMessage, successMessage} = await sendPostRequest('POST', '/buyer/order/cancel/' + id)
        if (success) {
            addToast({
                title: 'لغو شد',
                description: successMessage,
                color: 'success',
            })
            onOpenChange();
            push(router.pathname)
        } else {
            addToast({
                title: 'انجام نشد',
                description: errorMessage,
                color: 'danger',
            })
        }
    }
    return (
        <>
            <Modal
                isDismissable={false}
                isOpen={isOpen}
                onOpenChange={onOpenChange}
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalBody>
                                <div dir="rtl" className="flex flex-col items-center py-8 gap-28">
                                    <div className="flex flex-col items-center gap-6 ">
                                        <p className="text-sm  md:text-base lg:text-lg lg:font-bold">آیا
                                            میخواهید سفارش خود را لغو کنید؟</p>
                                    </div>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" variant="light" onPress={handleSubmit} isLoading={isLoading}
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

export default ModalOrders;