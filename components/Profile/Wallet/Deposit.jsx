import React, {useState} from 'react';
import {
    addToast,
    Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    NumberInput,
    useDisclosure
} from "@heroui/react";
import Plus from "@icons/plus.svg";
import usePostRequest from "@/hooks/usePostRequest";
import {useRouter} from "next/router";

const Deposit = () => {
    const {push} = useRouter()
    const [amount, setAmount] = useState()
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {sendPostRequest, isLoading} = usePostRequest()

    const handleFilter = async (e) => {
        e.preventDefault()
        const {
            success,
            errorMessage,
            data
        } = await sendPostRequest('POST', `/wallet/deposit?amount=${amount / 10}`, undefined, true)
        if (success) {
            push(data.url)
            onOpenChange()
        } else {
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger',
            })
        }
    }
    return (
        <>
            <Button
                onPress={onOpen}
                radius='sm'
                color="success"
                className="text-white flex-1"
                startContent={<Plus className="fill-white"/>}
            >
                افزایش موجودی
            </Button>
            <Modal hideCloseButton isDismissable={false} dir={'rtl'} isOpen={isOpen} onOpenChange={onOpenChange}
                   placement='center'>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleFilter}>
                            <ModalHeader className="justify-center text-base text-natural_gray-950">افزایش موجودی کیف
                                پول</ModalHeader>
                            <ModalBody>
                                <NumberInput
                                    label="مبلغ (مبلغ وارد شده باید بین 100٬000 تا 200٬000٬000 ریال باشد)"
                                    labelPlacement='outside'
                                    placeholder={"5,000,000"}
                                    hideStepper
                                    name="amount"
                                    value={amount}
                                    onChange={e => {
                                        if (e.target?.value)
                                            setAmount(parseInt(e.target.value.replace(/[,]/g, ''), 10))
                                        else setAmount(100000)
                                    }}
                                    onBlur={e => {
                                        const value = e.target?.value ? parseInt(e.target.value.replace(/[,]/g, ''), 10) : 100000
                                        setAmount(value < 100000 ? 100000 : value > 200000000 ? 200000000 : value)
                                    }}
                                    classNames={{innerWrapper: 'gap-2', label: 'text-xs text-natural_gray-950'}}
                                    dir='ltr'
                                    description={<p className="hasToman">{(amount / 10).toLocaleString()}</p>}
                                    variant="bordered"
                                    radius="sm"
                                    endContent="ریال"
                                />
                                <div className="grid grid-cols-3 gap-4">
                                    {[500000, 2000000, 5000000].map((item, index) => (
                                        <div
                                            key={index}
                                            onClick={() => setAmount(item)}
                                            className={`centerOfParent whitespace-nowrap text-sm border-1.5  w-full py-2 px-4 rounded-md cursor-pointer  ${item === amount ? "border-primary-200 bg-primary-50 text-primary-800" : "text-natural_gray-500 border-natural_gray-300"}`}
                                        >{item.toLocaleString('fa-IR')} ریال</div>
                                    ))}
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button disabled={isLoading} color="warning" radius={'sm'} className="w-full"
                                        variant="bordered"
                                        onPress={onClose}>
                                    انصراف
                                </Button>
                                <Button
                                    isLoading={isLoading}
                                    type={'submit'}
                                    className={'text-white w-full'}
                                    radius={'sm'}
                                    style={{
                                        "--heroui-default": "220 69% 53%",
                                    }}>ادامه</Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Deposit;