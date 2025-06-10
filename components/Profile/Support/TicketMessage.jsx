import Downloading from "@/components/Profile/Support/Downloading";
import React, {useState} from "react";
import axios from "axios";
import {addToast} from "@heroui/react";

export default function TicketMessage({is_support_reply: main, message, file, sent_at}) {
    const [isFileDownloaded, setIsFileDownloaded] = useState(false);
    const [isDownloading, setIsDownloading] = useState(false);
    const [downloadProgress, setDownloadProgress] = useState(0);
    const [cancelTokenSource, setCancelTokenSource] = useState(null);

    const handleDownload = async () => {
        if (isFileDownloaded || isDownloading) return;

        setIsDownloading(true);
        setDownloadProgress(0);

        const source = axios.CancelToken.source();
        setCancelTokenSource(source);

        try {
            const response = await axios.get(
                file,
                {
                    responseType: 'blob',
                    cancelToken: source.token,
                    onDownloadProgress:
                        (progressEvent) => {
                            if (progressEvent.total) {
                                const percentCompleted = Math.round((progressEvent.loaded * 100) / progressEvent.total);
                                setDownloadProgress(percentCompleted);
                            }
                        },
                }
            );
            const fileUrl = URL.createObjectURL(response.data);
            setIsFileDownloaded(fileUrl);
        } catch (error) {
            if (axios.isCancel(error)) {
                addToast({
                    title: 'دانلود لغو شد',
                    description: 'دانلود فایل توسط کاربر لغو شد.',
                    color: 'warning',
                });
            } else {
                addToast({
                    title: 'خطا در دانلود فایل',
                    description: 'لطفا دوباره تلاش کنید.',
                    color: 'danger',
                });
            }
        } finally {
            setIsDownloading(false);
            setDownloadProgress(0);
            setCancelTokenSource(null);
        }
    };

    const handleCancelDownload = () => {
        if (cancelTokenSource) {
            cancelTokenSource.cancel('Download cancelled by user');
        }
    };

    return (
        <div className={`flex ${main ? 'justify-end' : 'justify-start'} mb-2`}>
            <div
                className={`max-w-[70%] py-2 px-3 relative flex flex-col gap-2 ${
                    !main
                        ? 'bg-primary-200 text-right text-natural_gray-950 rounded-l-xl rounded-b-xl '
                        : 'bg-natural_gray-100 text-right text-primary-950 rounded-r-xl rounded-b-xl '
                }`}
            >
                {file && (
                    <div>
                        {!isFileDownloaded ? (
                            <Downloading
                                title={'نمایش تصویر'}
                                isDownloading={isDownloading}
                                isSender={main}
                                handleDownload={handleDownload}
                                downloadProgress={downloadProgress}
                                handleCancelDownload={handleCancelDownload}
                            />
                        ) : (
                            <img
                                onClick={() => window.open(file)}
                                src={isFileDownloaded}
                                alt="پیوست"
                                className="max-w-full h-auto rounded-lg max-h-64 object-cover"
                            />
                        )}
                    </div>
                )}
                {message && <div className={`whitespace-break-spaces text-justify text-sm`}>{message}</div>}
                <div
                    className={`text-[10px]  ${!main ? "text-right" : " text-left"}`}>{new Intl.DateTimeFormat('fa-IR', {
                    month: 'long',
                    day: '2-digit',
                    year: 'numeric',
                    hour: '2-digit',
                    minute: 'numeric'
                }).format(new Date(sent_at))}</div>
            </div>
        </div>
    );
}
