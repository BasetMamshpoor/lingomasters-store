import React, {useState} from 'react';
import {
    addToast,
    Button, Input,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    NumberInput,
    useDisclosure
} from "@heroui/react";
import Icon from "@icons/withdraw.svg";
import usePostRequest from "@/hooks/usePostRequest";

const Withdraw = ({amount, setReload}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {sendPostRequest} = usePostRequest()
    const [data, setData] = useState({})

    const handleSubmit = async (e) => {
        e.preventDefault()
        if (data.amount < 100000 || data.amount > 200000000) {
            addToast({
                title: 'مبلغ نامعتبر است',
                description: 'مبلغ باید بین 100٬000 تا 200٬000٬000 ریال باشد',
                color: 'danger',
            })
            return;
        } else if (!(/[0-9]{24}$/).test(data.shaba)) {
            addToast({
                title: 'شماره شبا معتبر نیست',
                description: 'شماره شبا باید 24 رقم و بدون IR باشد',
                color: 'danger',
            })
            return;
        }
        const {
            success,
            successMessage,
            errorMessage
        } = await sendPostRequest('POST', `/wallet/withdraw`, data, undefined, true)
        if (success) {
            addToast({
                title: 'درخواست برداشت پول به ثبت شد',
                description: successMessage,
                color: 'success'
            })
            setReload(Math.random())
            onOpenChange()
        } else
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger',
            })
    }
    return (
        <>
            <Button
                onPress={onOpen}
                radius='sm'
                color="danger"
                className="text-white flex-1"
                startContent={<Icon className="fill-white"/>}
            >
                برداشت
            </Button>
            <Modal hideCloseButton dir={'rtl'} isOpen={isOpen} onOpenChange={onOpenChange} placement='center'>
                <ModalContent>
                    {(onClose) => (
                        <form onSubmit={handleSubmit}>
                            <ModalHeader className="justify-center text-base text-natural_gray-950">برداشت از کیف
                                پول</ModalHeader>
                            <ModalBody>
                                <NumberInput
                                    isRequired
                                    errorMessage={" "}
                                    label="مبلغ (مبلغ وارد شده باید بین 100٬000 تا 200٬000٬000 ریال باشد)"
                                    labelPlacement='outside'
                                    placeholder={"5,000,000"}
                                    hideStepper
                                    value={data.amount}
                                    onChange={e => {
                                        if (e.target?.value)
                                            setData(p => ({
                                                ...p,
                                                amount: parseInt(e.target.value.replace(/[,]/g, ''), 10)
                                            }))
                                    }}
                                    onBlur={e => {
                                        const value = e.target?.value ? parseInt(e.target.value.replace(/[,]/g, ''), 10) : 100000
                                        setData(p => ({
                                            ...p,
                                            amount: value < 100000 ? 100000 : value > 200000000 ? 200000000 : value
                                        }))
                                    }}
                                    classNames={{innerWrapper: 'gap-2', label: 'text-xs text-natural_gray-950'}}
                                    dir='ltr'
                                    description={<p className="hasToman">{(data.amount / 10).toLocaleString()}</p>}
                                    variant="bordered"
                                    radius="sm"
                                    endContent="ریال"
                                />
                                <button type="button" className="text-primary-600"
                                        onClick={() => setData(p => ({...p, amount}))}>برداشت کل موجودی
                                </button>
                                <Input
                                    isRequired
                                    errorMessage={" "}
                                    label="شماره شبا را وارد کنید"
                                    formatOptions={{}}
                                    labelPlacement='outside'
                                    placeholder={"456743217890654325783456"}
                                    hideStepper
                                    value={data.shaba}
                                    onValueChange={e => setData(p => ({...p, shaba: e}))}
                                    classNames={{innerWrapper: 'gap-2', label: 'text-xs text-natural_gray-950'}}
                                    dir='ltr'
                                    variant="bordered"
                                    radius="sm"
                                    endContent="IR"
                                />
                            </ModalBody>
                            <ModalFooter>
                                <Button color="warning" radius={'sm'} className="w-full" variant="bordered"
                                        onPress={onClose}>
                                    انصراف
                                </Button>
                                <Button
                                    type="submit"
                                    color="danger"
                                    className={'text-white w-full'}
                                    radius={'sm'}
                                >برداشت</Button>
                            </ModalFooter>
                        </form>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Withdraw;