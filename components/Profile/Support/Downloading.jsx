import React from 'react';
import {Progress, Spinner} from "@heroui/react";

const Downloading = ({handleDownload, isDownloading, handleCancelDownload, isSender, downloadProgress, title}) => {
    return (
        <>
            {!isDownloading ?
                <button
                    onClick={handleDownload}
                    disabled={isDownloading}
                    className={`flex items-center gap-2 px-2 py-1 rounded-lg overflow-hidden text-xs w-fit line-clamp-1 ${
                        isSender
                            ? 'bg-primary-500 text-white hover:bg-primary-800'
                            : 'bg-primary-200 text-primary-950 hover:bg-primary-300'
                    } ${isDownloading ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                    <span className="whitespace-nowrap">{title}</span>
                </button> :
                <Progress
                    isIndeterminate={downloadProgress === 0}
                    label={
                        <button
                            onClick={handleCancelDownload}
                            className="px-4 py-2 rounded-lg text-sm bg-red-500 text-white hover:bg-red-600"
                        >
                            لغو
                        </button>}
                    value={downloadProgress}
                    maxValue={100}
                    classNames={{base: 'sm:w-96 w-64'}}
                    color={"success"}
                    style={{
                        "--heroui-success": "0 0% 0%",
                    }}
                    showValueLabel={true}
                />}
        </>
    );
};

export default Downloading;