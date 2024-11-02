import React from "react";
import { Modal, ModalContent, ModalHeader, ModalBody, useDisclosure, } from "@nextui-org/react";
import Filters from "./Filters";
import FilterIcon from '@icons/filter.svg';
import Close from '@icons/close.svg';
import FiltersEdu from "./FiltersEdu";

export default function Filter({ edu, setCurrentPage }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <div className="flex flex-col gap-2">
            <div onClick={onOpen} className='flex items-center gap-4 px-3'>
                <div className="centerOfParent"><FilterIcon /></div>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior={"inside"}
                hideCloseButton
                size="full"
                placement="bottom"
            >
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader className="lg:hidden flex items-center justify-between gap-1 pb-1 border-b" dir='rtl'>
                                <div className='flex items-center gap-4 py-3'>
                                    <div className="centerOfParent"><FilterIcon /></div>
                                    <p className='text-lg font-semibold'>فیلتر ها</p>
                                </div>
                                <div onClick={onOpenChange} className="centerOfParent"><Close /></div>
                            </ModalHeader>
                            <ModalBody>
                                {edu ? <FiltersEdu setCurrentPage={setCurrentPage} /> : <Filters setCurrentPage={setCurrentPage} />}
                            </ModalBody>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </div>
    );
}
