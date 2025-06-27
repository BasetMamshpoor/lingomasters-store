import { Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton } from "@heroui/react";
import Image from "next/image";
import Play from '@/icons/surface.svg';

export default function Card({ bgSrc, className, movie }) {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();

    return (
        <>
            {bgSrc ? <div onClick={movie ? onOpen : null} className={`centerOfParent relative w-fit max-h-80 rounded-lg overflow-hidden cursor-pointer ${className}`}>
                <Image src={bgSrc} width='0' height='0' sizes='100vw' className='w-full h-full object-contain' />
                <div className="centerOfParent absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"><Play className='w-16 h-12' /></div>
            </div> : <Skeleton className={`centerOfParent relative w-1/2 min-h-80 rounded-lg overflow-hidden cursor-pointer ${className}`} />}
            <Modal
                backdrop="opaque"
                size="5xl"
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                }}
            >
                <ModalContent className='bg-white rounded-lg'>
                    {(onClose) => (
                        <>
                            <ModalHeader />
                            <ModalBody>
                                <div className="w-full mx-auto mt-8">
                                    <video
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        controls
                                        poster={bgSrc}>
                                        <source src={movie} type="video/mp4" />
                                        مرورگر شما از پخش این فیلم پشتیبانی نمیکند
                                    </video>
                                </div>
                            </ModalBody>
                            <ModalFooter dir='rtl'>
                                <Button color="danger" variant="solid" onPress={onClose}>
                                    بستن
                                </Button>
                            </ModalFooter>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
}
