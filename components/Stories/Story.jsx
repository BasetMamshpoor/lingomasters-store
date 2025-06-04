import React from 'react';
import Image from "next/image";
import {Modal, ModalContent, useDisclosure} from "@heroui/react";
import StoryContent from "@/components/Stories/StoryContent";

const Story = ({story, ...props}) => {
    const {isOpen, onOpen, onOpenChange} = useDisclosure();

    return (
        <>
            <div onClick={onOpen}
                 className="grow border-2 cursor-pointer max-w-full border-primary-700  overflow-hidden rounded-[50%]">
                <div
                    className="border-2 border-white overflow-hidden rounded-[50%] lg:w-[116px] lg:h-[116px] sm:w-[96px] sm:h-[96px] w-20 h-20">
                    <Image src={story.cover || 'images/banner.jpg'} alt={story.name} width={100}
                           height={100} className="w-full h-full object-cover"/>
                </div>
            </div>
            <Modal
                isOpen={isOpen}
                onOpenChange={onOpenChange}
                scrollBehavior="inside"
                hideCloseButton
                classNames={{
                    backdrop: "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
                    body: 'p-0',
                    wrapper: '[&>section]:max-h-fit [&>section]:m-0',
                }}
            >
                <ModalContent className='bg-white rounded-lg'>
                    {(onClose) => (
                        <>
                            <StoryContent
                                onClose={onClose}
                                id={story.id}
                                isOpen={isOpen}
                                {...props}/>
                        </>
                    )}
                </ModalContent>
            </Modal>
        </>
    );
};

export default Story;