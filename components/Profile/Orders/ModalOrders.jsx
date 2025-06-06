import React from 'react';
import {Alert, Button, Modal, ModalBody, ModalContent, ModalFooter} from "@heroui/react";

const ModalOrders = ({isOpen, onOpenChange})=> {
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
                                <div dir="rtl" className="flex flex-col items-center py-8 gap-28">
                                    <div className="flex flex-col items-center gap-6 ">
                                        <p className="text-sm  md:text-base lg:text-lg lg:font-bold">آیا
                                            میخواهید سفارش خود را لغو کنید؟</p>
                                        <Alert
                                            color="warning"
                                            title="توجه داشته باشید:"
                                            description="با لغو سفارش خود 22% از مبلغ مرسوله از شما کسر خواهد شد و مابقی مبلغ به کیف‌پول شما انتقال داده می‌شود"
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

export default ModalOrders;