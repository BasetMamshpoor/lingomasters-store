import React, {useState} from 'react';
import {
    addToast,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";

const ModalEmt = ({isOpen, onOpenChange, id}) => {
    const [productRating, setProductRating] = useState(null);
    const [deliveryRating, setDeliveryRating] = useState(null);
    const {sendPostRequest, isLoading} = usePostRequest()

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!productRating || !deliveryRating) {
            addToast({
                title: "امتیاز ناقص",
                description: "لطفاً هر دو امتیاز را وارد کنید.",
                color: "warning",
            });
            return;
        }

        const {success, successMessage, errorMessage} = await sendPostRequest("POST", `/buyer/order/rate`, {
            order_id: id,
            product_emtiyaz: productRating,
            delivery_emtiyaz: deliveryRating,
        });

        if (success) {
            addToast({
                title: "ثبت شد",
                description: successMessage,
                color: "success",
            });
            onOpenChange();
        } else {
            addToast({
                title: "خطا",
                description: errorMessage,
                color: "danger",
            });
        }
    };


    const renderRatingButtons = (rating, setRating) => (
        <div className="flex flex-wrap gap-2">
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                <Button
                    key={value}
                    rating='sm'
                    type="button"
                    variant={rating === value ? "solid" : "bordered"}
                    color="primary"
                    onPress={() => setRating(value)}
                    className={`w-10 h-10 p-0 text-center ${rating === value ? "bg-success-600 text-white" : "bordered"}`}
                >
                    {value}
                </Button>
            ))}
        </div>
    );

    return (
        <Modal
            dir="rtl"
            size="2xl"
            placement="center"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleSubmit}>
                        <ModalHeader className="text-sm md:text-base lg:text-lg lg:font-bold mx-auto">
                            به تجربه کاربری‌تان از خرید از ما امتیاز دهید
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col gap-6">
                                <div>
                                    <p className="mb-2 text-right">رضایت از کیفیت کالا:</p>
                                    {renderRatingButtons(productRating, setProductRating)}
                                </div>
                                <div>
                                    <p className="mb-2 text-right">رضایت از تأمین به‌موقع:</p>
                                    {renderRatingButtons(deliveryRating, setDeliveryRating)}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="success"
                                variant="solid"
                                radius="sm"
                                isLoading={isLoading}
                                type="submit"
                                className="w-44 self-end mr-auto"
                                isDisabled={!productRating || !deliveryRating}
                            >
                                ثبت امتیاز
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalEmt;
