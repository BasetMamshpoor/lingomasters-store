import React, {useState} from 'react';
import {
    addToast,
    Alert, Button,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    Textarea
} from "@heroui/react";
import axios from 'axios';
import Cookies from "js-cookie";

const ModalMar = ({isOpen, onOpenChange, id}) => {
    const [files, setFiles] = useState([]);
    const [uploadProgress, setUploadProgress] = useState(0);
    const [isUploading, setIsUploading] = useState(false);

    const handleFileSelect = (e) => {
        const file = e.target.files[0];
        if (file) setFiles([file]);
    };


    const handleDrop = (e) => {
        e.preventDefault();
        const droppedFile = e.dataTransfer.files[0];
        if (droppedFile) setFiles([droppedFile]);
    };


    const handleDragOver = (e) => {
        e.preventDefault();
    };

    const handleUpload = async (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const reason = Object.fromEntries(form.entries());
        if (files.length === 0) return;
        const token = Cookies.get('token') ? JSON.parse(Cookies.get('token')) : {};

        const formData = new FormData();
        files.forEach(file => formData.append('return_video', file));
        formData.append('return_reason', reason.return_reason);
        setIsUploading(true);
        try {
            const response = await axios.post('/buyer/order/return_order/' + id, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `${token.token_type} ${token.access_token}`
                },
                onUploadProgress: (progressEvent) => {
                    const percent = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                    setUploadProgress(percent);
                }
            });
            addToast({
                title: 'درخواست ارسال شد',
                description: response.data.message,
                color: 'success',
            })
        } catch (err) {
            addToast({
                title: 'درخواست ارسال نشد',
                description: err.response?.data.message,
                color: 'danger',
            })
        } finally {
            setIsUploading(false);
            setUploadProgress(0)
            onOpenChange()
        }
    };

    return (
        <Modal
            dir="rtl"
            size="2xl"
            placement="center"
            isOpen={isOpen}
            onOpenChange={onOpenChange}
        >
            <ModalContent>
                {(onClose) => (
                    <form onSubmit={handleUpload}>
                        <ModalHeader className="text-sm  md:text-base lg:text-lg lg:font-bold mx-auto">
                            برای مرجوع کردن کالا باید ویدیو بارگذاری کنید.
                        </ModalHeader>
                        <ModalBody>
                            <div className="flex flex-col items-center gap-6">
                                <Alert
                                    color="warning"
                                    title="توجه داشته باشید:"
                                    description="در صورت هرگونه پاره شدگی ‌ ... فیلم و عکس های مربوطه را ثبت نمایید در غیر اینصورت تمامی مشکلات برعهده خریدار است"
                                />
                                <Textarea
                                    label="دلیل مرجوع کردن کالا"
                                    labelPlacement="outside"
                                    placeholder="دلیل موجوع"
                                    variant="bordered"
                                    radius="sm"
                                    classNames={{label: "text-natural_gray-950 text-sm"}}
                                    name="return_reason"
                                />
                                <div className="flex flex-col gap-2 w-full">
                                    <p className="text-natural_gray-950 text-sm">بارگذاری مدرک</p>

                                    <div
                                        onDrop={handleDrop}
                                        onDragOver={handleDragOver}
                                        className="w-full relative h-32 border-2 border-dashed border-gray-400 rounded-md flex items-center justify-center text-sm text-gray-500 bg-gray-50 hover:bg-gray-100 cursor-pointer"
                                    >
                                        فایل‌ها را اینجا بکشید و رها کنید یا کلیک کنید
                                        <input
                                            type="file"
                                            accept="image/*,video/*"
                                            onChange={handleFileSelect}
                                            className="absolute opacity-0 w-full h-full cursor-pointer"
                                        />

                                    </div>

                                    {files.length > 0 && (
                                        <ul className="text-xs text-right mt-2 list-disc pr-4 text-gray-600">
                                            {files.map((file, idx) => (
                                                <li key={idx}>{file.name}</li>
                                            ))}
                                        </ul>
                                    )}

                                    {isUploading && (
                                        <div className="w-full bg-gray-200 rounded h-2 mt-2">
                                            <div
                                                className="bg-blue-500 h-2 rounded"
                                                style={{width: `${uploadProgress}%`}}
                                            />
                                            <p className="text-xs mt-1 text-center">{uploadProgress}%</p>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </ModalBody>
                        <ModalFooter>
                            <Button
                                color="danger"
                                variant="solid"
                                radius="sm"
                                type="submit"
                                isLoading={isUploading}
                                className="w-44 self-end mr-auto"
                            >
                                {isUploading ? 'در حال آپلود...' : 'درخواست مرجوع کردن'}
                            </Button>
                        </ModalFooter>
                    </form>
                )}
            </ModalContent>
        </Modal>
    );
};

export default ModalMar;
