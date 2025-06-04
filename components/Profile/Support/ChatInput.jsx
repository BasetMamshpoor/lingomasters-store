import React, {useRef, useState} from 'react';
import {addToast, Button, Spinner, Textarea} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import Close from '@icons/close.svg'
import Upload from '@icons/file-upload.svg'
const ChatInput = ({id, refView,setReload}) => {
    const {sendPostRequest, isLoading, progress} = usePostRequest();
    const [input, setInput] = useState('');
    const [file, setFile] = useState(null);
    const [voice, setVoice] = useState(null);
    const fileInputRef = useRef();

    const sendMessage = async (e) => {
        e.preventDefault();
        if (!input.trim() && !file && !voice) return;

        const formData = new FormData();
        if (file) {
            if (file) formData.append('file', file);
        } else if (input.trim()) {
            formData.append('message', input);
        }

        const {
            success,
            errorMessage
        } = await sendPostRequest("POST", `/tickets/${id}`, formData, true, true);

        if (!success) {
            addToast({
                title: 'خطا',
                description: errorMessage || 'اتصال اینترنت خود را بررسی کنید',
                color: 'danger',
            });
        } else {
            setInput('');
            setFile(null);
            setVoice(null);
            setReload(Math.random())
        }
    };

    const onEnterPress = (e) => {
        if (e.keyCode === 13 && !e.shiftKey) {
            e.preventDefault();
            sendMessage({
                preventDefault: () => {
                },
            });
        }
    };

    const handleFileChange = (e) => {
        const selectedFile = e.target.files[0];
        if (selectedFile && selectedFile.size <= 10 * 1024 * 1024) {
            setFile(selectedFile);
            setInput('')
        } else {
            addToast({
                title: 'خطا',
                description: 'حجم فایل باید حداکثر 10 مگابایت باشد',
                color: 'danger',
            });
        }
    };
    const triggerFileInput = () => {
        fileInputRef.current.click();
    };

    return (
        <>
            <form ref={refView} className="bg-white flex flex-row-reverse gap-2 items-center"
                  onSubmit={sendMessage}>
                <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/png, image/jpeg, image/jpg"
                    onChange={handleFileChange}
                    className="hidden"
                />
                {!voice && <Textarea
                    isReadOnly={file}
                    dir="auto"
                    name="message"
                    variant="bordered"
                    classNames={{input: "lg:text-base sm:text-sm text-xs"}}
                    radius="sm"
                    minRows={1}
                    maxRows={6}
                    className="flex-1"
                    value={file ? file.name : input}
                    onKeyDown={onEnterPress}
                    onValueChange={setInput}
                    endContent={file ? <Close className="cursor-pointer fill-natural_gray-600 w-5 h-5 flex-shrink-0"
                                              onClick={() => isLoading ? null : setFile(null)}/> :
                        <Upload className="cursor-pointer fill-natural_gray-600 w-5 h-5 flex-shrink-0"
                                onClick={triggerFileInput}/>}
                />}

                <Button
                    type="submit"
                    disabled={isLoading}
                    className="bg-primary-700 text-white px-3 py-2.5 rounded-lg h-fit hover:bg-primary-900"
                >
                    {isLoading ?
                        <div className="flex items-center gap-2">
                            <span className="flex items-center">
                                %
                                {progress}
                            </span>
                            <Spinner variant="dots" size="sm" color="white"/>
                        </div> : 'ارسال'}
                </Button>
            </form>
        </>
    );
};

export default ChatInput;