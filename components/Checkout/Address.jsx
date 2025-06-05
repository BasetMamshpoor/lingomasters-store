import Link from "next/link";
import useGetRequest from "@/hooks/useGetRequest";
import {
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Radio,
    RadioGroup,
    Spinner,
    useDisclosure
} from "@heroui/react";
import Plus from "@icons/plus.svg";
import React from "react";
import NewAddress from "@/components/Profile/NewAddress";

const Address = ({setAddress}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [address, , reload, , , loading] = useGetRequest('/buyer/profile/addresses')

    return (
        <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="font-semibold">نشانی</p>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {loading ? <div className="centerOfParent w-full"><Spinner color="success"/></div>
                    : <RadioGroup
                        color='success'
                        onValueChange={setAddress}
                        style={{
                            "--heroui-success": "196 94% 25%",
                        }}
                        classNames={{
                            label: "text-natural_gray-950 text-sm"
                        }}
                        label="انتخاب آدرس">
                        {address?.map(e =>
                            <Radio
                                key={e.id}
                                classNames={{
                                    base:
                                        "inline-flex m-0 items-center cursor-pointer rounded-lg gap-3 px-4 py-2 border border-natural_gray-200 max-w-full"
                                }}
                                value={e.id}>
                                <div className="flex flex-col text-natural_gray-950 text-xs">
                                    <span>{e.title}</span>
                                    <span>{e.address}</span>
                                </div>
                            </Radio>)}
                    </RadioGroup>}
                <div className="flex justify-end w-full my-5">
                    <button type='button' onClick={onOpen}
                            className="flex items-center justify-center border border-secondary-500 rounded-md gap-1 px-4 py-3 ">
                        <Plus className="fill-secondary-500 w-5 h-5"/>
                        <p className="text-secondary-500 text-base">ثبت آدرس جدید</p>
                    </button>
                </div>
            </div>
            <div className="flex justify-end gap-3 items-center flex-row-reverse">
                <label className="sm:text-base text-sm" htmlFor="rules">تمامی <Link href='/rules'
                                                                                    className="text-primary-600">قوانین
                    و مقررات</Link> را میپذیرم.</label>
                <input className="w-5 h-5 bg-primary-600 cursor-pointer" type="checkbox" name="rules" id="rules"/>
            </div>
            <Modal dir="rtl" size="3xl" scrollBehavior="inside" placement="top-center" isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="">ثبت آدرس جدید</ModalHeader>
                            <ModalBody>
                                <NewAddress reload={reload}onClose={onClose}/>
                            </ModalBody>
                            <ModalFooter/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </form>
    );
};

export default Address;