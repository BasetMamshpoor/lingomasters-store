import {useState, useEffect, useContext} from 'react';
import {Modal, ModalContent, ModalHeader, ModalBody, ModalFooter, Button, useDisclosure, addToast} from '@heroui/react';
import Image from 'next/image';
import usePostRequest from "@/hooks/usePostRequest";
import {Information} from "@/providers/InformationProvider";

function ProfileImage({justImage}) {
    const {student, setReload} = useContext(Information)
    const {isOpen, onOpen, onOpenChange} = useDisclosure();
    const [displayImageSrc, setDisplayImageSrc] = useState(student?.profile ?? '/images/profile.png');
    const [selectedFile, setSelectedFile] = useState(null);
    const [isDragging, setIsDragging] = useState(false);
    const {sendPostRequest, isLoading, message} = usePostRequest();

    // Drag-and-drop event handlers
    const handleDragOver = (event) => {
        event.preventDefault();
        setIsDragging(true);
    };

    const handleDragLeave = () => {
        setIsDragging(false);
    };

    const handleDrop = (event) => {
        event.preventDefault();
        setIsDragging(false);
        const file = event.dataTransfer.files[0];
        if (file) {
            if (displayImageSrc.startsWith('blob:')) {
                URL.revokeObjectURL(displayImageSrc); // Clean up previous temporary URL
            }
            const objectUrl = URL.createObjectURL(file);
            setDisplayImageSrc(objectUrl);
            setSelectedFile(file);
        }
    };

    // Click-to-select fallback
    const handleImageClick = (event) => {
        const file = event.target.files[0];
        if (file) {
            if (displayImageSrc.startsWith('blob:')) {
                URL.revokeObjectURL(displayImageSrc); // Clean up previous temporary URL
            }
            const objectUrl = URL.createObjectURL(file);
            setDisplayImageSrc(objectUrl);
            setSelectedFile(file);
        }
    };
    // Submit the new.jsx image
    const handleSubmit = async () => {
        if (selectedFile) {
            const {
                success,
                successMessage,
                errorMessage
            } = await sendPostRequest('POST', '/buyer/profile/uploadProfileImage', {profile: selectedFile}, true)
            if (success) {
                addToast({
                    title: successMessage,
                    color: 'success'
                })
                onOpenChange(false);
                setReload(Math.random())
            } else {
                addToast({
                    title: errorMessage,
                    color: 'danger'
                })
            }
        }
    };

    // Cleanup temporary URLs on unmount or image change
    useEffect(() => {
        return () => {
            if (displayImageSrc.startsWith('blob:')) {
                URL.revokeObjectURL(displayImageSrc);
            }
        };
    }, [displayImageSrc]);

    return (
        <>
            <div className="centerOfParent rounded-full overflow-hidden sm:w-28 w-16 sm:h-28 h-16">
                <Image
                    src={displayImageSrc}
                    alt="Profile Picture"
                    width={100}
                    height={100}
                    className="w-full h-full cursor-pointer object-cover"
                    onClick={justImage ? null : onOpen}
                />
            </div>
            <Modal dir={'rtl'} isOpen={isOpen} onOpenChange={onOpenChange}>
                <ModalContent>
                    {(onClose) => (
                        <>
                            <ModalHeader>
                                <h2>ویرایش عکس پروفایل</h2>
                            </ModalHeader>
                            <ModalBody>
                                <div
                                    className={`flex flex-col items-center border-2 border-dashed p-4 ${
                                        isDragging ? 'border-blue-500 bg-blue-50' : 'border-gray-300'
                                    }`}
                                    onClick={() => document.getElementById('fileInput').click()}
                                    onDragOver={handleDragOver}
                                    onDragLeave={handleDragLeave}
                                    onDrop={handleDrop}
                                >
                                    <Image
                                        src={displayImageSrc}
                                        alt="Profile Preview"
                                        width={200}
                                        height={200}
                                        className="rounded-lg max-h-full object-cover"
                                    />
                                    <input id="fileInput" type="file" accept="image/*" hidden
                                           onChange={handleImageClick}/>
                                    <p className="mt-2 text-sm text-gray-600">
                                        {message || "یک تصویر را در اینجا بکشید و رها کنید یا برای انتخاب کلیک کنید"}
                                    </p>
                                </div>
                            </ModalBody>
                            <ModalFooter>
                                <Button color={'danger'} onPress={onClose} variant="ghost">
                                    انصراف
                                </Button>
                                <Button color='success' isLoading={isLoading} onPress={handleSubmit} variant="ghost">
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

export default ProfileImage;