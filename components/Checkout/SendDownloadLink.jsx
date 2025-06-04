import { Input } from "@heroui/react";

const SendDownloadLink = () => {
    return (
        <>
            <div className="flex flex-col gap-6">
                <p className="text-secondary-500">بعد از پرداخت لینک دانلود در دسترس قرار می‌گیرد و می٬توانید دانلود کنید و همچنین برای ایمیل یا تلفن همراه شما ارسال خواهد شد و یا از طریق پنل خود نیز می‌توانید ببینید.</p>
                <div className="flex items-center justify-between">
                    <p className="font-semibold">اطلاعات گیرنده</p>
                </div>
                <div className="flex flex-col gap-6 items-stretch">
                    <div className="flex flex-col gap-4 items-stretch">
                        <div className="flex sm:flex-row flex-col sm:items-center items-stretch gap-4 *:flex-[1_0_0]">
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">شماره تلفن همراه<span className="text-red-500 mr-1">*</span></label>
                                <Input isRequired radius="sm" variant="bordered" type="tel" name="number" placeholder="09" className="self-stretch" />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">ایمیل</label>
                                <Input isRequired radius="sm" variant="bordered" type="email" name="number" dir="ltr" placeholder="example@gmail.com" className="self-stretch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SendDownloadLink;