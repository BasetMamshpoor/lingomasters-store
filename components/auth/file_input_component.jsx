import {useState} from 'react';
import {Input} from "@heroui/react";

/** FileInput Component */
const FileInput = ({label, onChange, inputId, name, filename}) => {
    const [fileName, setFileName] = useState(filename || '');

    const handleFileChange = (event) => {
        if (event.target.files.length > 0) {
            setFileName(event.target.files[0].name);
        }
        const e = {target: {name, value: event.target.files[0]}}
        onChange(e);
    };

    return (
        <div className="space-y-4 sm:w-[47%] w-full">
            <label className='sm:text-base text-sm'>{label}</label>
            <div className="flex items-center gap-2">
                <div className="grow">
                    <Input
                        radius="sm"
                        readOnly
                        placeholder="مدرک را وارد کنید"
                        value={fileName}
                        labelPlacement="outside"
                        variant="bordered"
                        classNames={{input: 'sm:text-base text-sm placeh',}}
                    />
                </div>
                <input
                    type="file"
                    id={inputId}
                    className="hidden"
                    onChange={handleFileChange}
                />
                <label
                    htmlFor={inputId}
                    className="border-1.5 placeholder- centerOfParent border-primary-600 sm:max-w-[140px] max-w-[80px] w-full text-center bg-primary-50 text-primary-600 lg:px-4 py-2 px-1 rounded-md self-stretch sm:text-sm text-xs cursor-pointer"
                >
                    بارگزاری فایل
                </label>
            </div>
        </div>
    );
};

export default FileInput;