import {
    Modal,
    ModalContent,
    ModalHeader,
    ModalBody,
    ModalFooter,
    Button,
    useDisclosure, NumberInput, addToast,
} from "@heroui/react";
import Star from "@icons/magic-star.svg";
import React, {useState} from "react";
import Link from "next/link";
import usePostRequest from "@/hooks/usePostRequest";

export default function Rate({rate, url, id}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {isLoading, sendPostRequest} = usePostRequest()
    const [value, setValue] = useState(rate)

    const handleSubmit = async () => {
        const {
            success,
            errorMessage,
            successMessage, status
        } = await sendPostRequest('POST', `${url}/rate/${id}`, {rating: value})
        if (success) {
            addToast({
                description: successMessage,
                color: 'success',
            })
            onOpenChange(false)
        } else {
            addToast({
                description: errorMessage,
                color: 'danger',
                endContent: status === 401 &&
                    <Link href='/auth/login' className='border border-rose-600 rounded px-2'>ورود</Link>
            })
        }
    }
    return (
        <>
            <div className="cursor-pointer flex items-center [&>svg]:w-4 [&>svg]:h-4" onClick={onOpen}>
                <Star className={rate < 5 ? '' : 'fill-[#F3B944]'}/>
                <Star className={rate < 4 ? '' : 'fill-[#F3B944]'}/>
                <Star className={rate < 3 ? '' : 'fill-[#F3B944]'}/>
                <Star className={rate < 2 ? '' : 'fill-[#F3B944]'}/>
                <Star className={rate < 1 ? '' : 'fill-[#F3B944]'}/>
            </div>
            <Modal dir='rtl' isOpen={isOpen} onOpenChange={onOpenChange} placement='center' >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="">امتیاز خود را وارد کنید</ModalHeader>
                            <ModalBody>
                                <NumberInput
                                    isRequired
                                    maxValue={5}
                                    minValue={1}
                                    step={1}
                                    labelPlacement="outside"
                                    variant='bordered'
                                    radius='sm'
                                    errorMessage="امتیاز را بین 1 تا 5 وارد کنید"
                                    label="امتیاز را بین 1 تا 5 وارد کنید"
                                    placeholder="امتیاز"
                                    value={value}
                                    onValueChange={setValue}
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="danger" disabled={isLoading} variant="light" onPress={onClose}>
                                    انصراف
                                </Button>
                                <Button color="success" isLoading={isLoading} onPress={handleSubmit}>
                                    ثبت
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
