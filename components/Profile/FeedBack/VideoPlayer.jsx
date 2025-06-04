import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, Skeleton} from "@heroui/react";

export default function VideoPlayer({bgSrc, trigger, movie, className}) {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            {typeof trigger === 'string' ?
                <p onClick={movie ? onOpen : null}
                   className={`text-center text-sm text-primary-950 cursor-pointer ${className}`}>{trigger}</p>
                : React.cloneElement(trigger, {onClick: movie ? onOpen : trigger.props.onClick})}
            <Modal
                backdrop="opaque"
                placement='center'
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
                            <ModalHeader/>
                            <ModalBody>
                                <div className="w-full mx-auto mt-8">
                                    <video
                                        className="w-full h-auto rounded-lg shadow-lg"
                                        controls
                                        poster={bgSrc}>
                                        <source src={movie} type="video/mp4"/>
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
