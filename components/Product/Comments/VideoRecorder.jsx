import { Button, Modal, ModalContent,  ModalBody, ModalFooter, useDisclosure } from '@nextui-org/react';
import { useRef, useEffect } from 'react';
import { ReactMediaRecorder } from 'react-media-recorder';

import Camera from '@icons/video.svg'


const VideoPreview = ({ stream }) => {
    const videoRef = useRef(null);

    useEffect(() => {
        if (videoRef.current && stream) {
            videoRef.current.srcObject = stream;
        }
    }, [stream]);
    if (!stream) {
        return null;
    }
    return <video ref={videoRef} className='w-full h-full' autoPlay />
};


const VideoRecorder = () => {
    const { isOpen, onOpen, onOpenChange } = useDisclosure();
    return (
        <div className="flex flex-col w-full">
            <div className="relative w-full flex flex-col gap-4">
                <ReactMediaRecorder
                    video
                    render={({ startRecording, stopRecording, mediaBlobUrl, status, previewStream }) => {
                        return (
                            <>
                                <div className='w-full text-center'>
                                    <div onClick={() => { onOpen(); startRecording() }} className='centerOfParent border max-w-20 py-2 rounded-lg bg-primary-800 w-full mx-auto'><Camera className='w-8 h-8 fill-white' /></div>
                                    <Modal isOpen={isOpen} onOpenChange={onOpenChange} hideCloseButton size='5xl'>
                                        <ModalContent>
                                            {(onClose) => (
                                                <>
                                                    <ModalBody>
                                                        <VideoPreview stream={previewStream} />
                                                    </ModalBody>
                                                    <ModalFooter>
                                                        <Button color="danger" variant="light" onPress={() => { onClose(); stopRecording() }}>
                                                            بستن
                                                        </Button>
                                                    </ModalFooter>
                                                </>
                                            )}
                                        </ModalContent>
                                    </Modal>
                                </div>
                                <div className={`centerOfParent w-full ${mediaBlobUrl ? 'h-96' : 'h-48'} bg-slate-100`}>
                                    {mediaBlobUrl ? (
                                        <video
                                            src={mediaBlobUrl}
                                            controls
                                            className="w-full h-full object-cover"
                                        />
                                    ) : <div onClick={() => { onOpen(); startRecording() }} className='centerOfParent cursor-pointer'><Camera className='w-8 h-8 fill-natural_gray-600' /></div>}
                                </div>
                            </>
                        )
                    }}
                />
            </div>
        </div>
    );
};

export default VideoRecorder;