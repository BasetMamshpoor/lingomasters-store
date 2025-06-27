import React from 'react';
import {
    Dropdown,
    DropdownItem,
    DropdownMenu,
    DropdownTrigger,
    Spinner, useDisclosure
} from "@heroui/react";
import Dats from "@icons/threedots.svg";
import ModalMar from "@/components/Profile/Orders/ModalMar";
import useGetRequest from "@/hooks/useGetRequest";
import InformationOrder from "@/components/Profile/Orders/InformationOrder";
import OrderItem from "@/components/Profile/Orders/OrderItem";
import ModalEmt from "@/components/Profile/Orders/ModalEmt";

const DeliveryDetails = ({orderId}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const {isOpen: isOpenEm, onOpen: onOpenEm, onOpenChange: onOpenChangeEm} = useDisclosure();

    const [data, , , , , isLoading] = useGetRequest(`/buyer/order/show/${orderId}`)
    return (
        <>
            {isLoading ?
                <div className="w-full centerOfParent"><Spinner color="success"/></div>
                : data && <div dir="rtl" className="flex flex-col gap-10">
                <div className="flex flex-col gap-6 p-6 border border-natural_gray-200 rounded-xl">
                    <div className="w-full flex justify-end">
                        <Dropdown
                            dir={'rtl'}
                            classNames={{
                                trigger: 'cursor-pointer',
                            }}
                            placement='right-start'>
                            <DropdownTrigger>
                                <div className="centerOfParent">
                                    <Dats className='fill-secondary-500'/>
                                </div>
                            </DropdownTrigger>
                            <DropdownMenu aria-label="Static Actions">
                                <DropdownItem
                                    onPress={onOpenEm}
                                    classNames={{title: 'font-semibold flex items-center gap-2 sm:text-sm text-xs'}}
                                    key="sabt"
                                    className="text-success-600"
                                    color="success">
                                    <p className="">
                                        ثبت امتیاز
                                    </p>
                                </DropdownItem>
                                <DropdownItem
                                    onPress={onOpen}
                                    classNames={{title: 'font-semibold flex items-center gap-2 sm:text-sm text-xs'}}
                                    key="cancel"
                                    className="text-danger"
                                    color="danger">
                                    <p className="">
                                        درخواست مرجوعی
                                    </p>
                                </DropdownItem>
                            </DropdownMenu>
                        </Dropdown>
                    </div>
                    <ModalMar onOpenChange={onOpenChange} isOpen={isOpen} id={orderId}/>
                    <ModalEmt onOpenChange={onOpenChangeEm} isOpen={isOpenEm} id={orderId}/>
                    <div className="flex flex-col gap-6 pb-6 border-b">
                        {data.items.map(e => <OrderItem key={e.id} {...e} isNazar/>)}
                    </div>
                    <InformationOrder {...data} />
                </div>
            </div>}
        </>
    );
};

export default DeliveryDetails;