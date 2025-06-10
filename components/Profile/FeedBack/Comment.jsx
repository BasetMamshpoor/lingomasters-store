import React from 'react';
import Image from "next/image";
import Bin from "@icons/bin.svg"
import Edit from "@icons/edit-icon.svg"
import {
    addToast,
    Button,
    Chip,
    Modal, ModalBody,
    ModalContent, ModalFooter,
    ModalHeader,
    Popover,
    PopoverContent,
    PopoverTrigger, Textarea, useDisclosure
} from "@heroui/react";
import LikeDislike from "@/components/Profile/FeedBack/Like&Dislike";
import useDeleteRequest from "@/hooks/useDeleteRequest";
import usePostRequest from "@/hooks/usePostRequest";
import Card from "@/components/Video/Card";
import AudioPlayer from "@/components/Profile/FeedBack/AudioPlayer";

function translateType(type) {
    switch (type) {
        case "Blog":
            return "وبلاگ ها";
        case "GroupClass":
            return "کلاس های گروهی";
        case "Webinar":
            return "وبینارها";
        case "WorkShop":
            return "ورکشاپ ها";
        case "Professor":
            return "کلاس های خصوصی";
        case "Product":
            return "کتابخانه";
        case "Exam":
            return "آزمون";
        case "Story":
            return "استوری";
        default:
            return type;
    }
}

const Comment =
    ({
         type,
         setReload,
         is_private,
         status,
         commented_on,
         content,
         likes_count,
         dislikes_count,
         is_like,
         is_dislike,
         image,
         commented_on_type,
         id,
     }) => {
        const isApproved = status === "approved";
        const isRejected = status === "rejected";
        const isPending = status === "pending";
        const {deleteData, isLoading} = useDeleteRequest()
        const {sendPostRequest, isLoading: loading} = usePostRequest()
        const {isOpen, onOpen, onOpenChange} = useDisclosure();

        const handleDelete = async () => {
            const {success} = await deleteData(`/student/comments/delete/${id}`)
            if (success)
                setReload(Math.random())
        }
        const handleEdit = async (e) => {
            e.preventDefault();
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const {
                success,
                errorMessage,
                successMessage
            } = await sendPostRequest('POST', `/student/comments/update/${id}`, data, undefined, true)
            if (success) {
                addToast({
                    title: "ویرایش شد",
                    description: successMessage,
                    color: 'success',
                })
                setReload(Math.random())
                onOpenChange()
            } else {
                addToast({
                    title: "خطا",
                    description: errorMessage,
                    color: 'danger',
                })
            }
        }

        return (
            <>
                <div dir="rtl" className="flex flex-col gap-6 md:gap-10 p-4 bg-natural_gray-50 rounded-xl">
                    <div className="flex flex-col md:flex-row justify-between  gap-4">
                        <div className="flex flex-col items-center md:flex-row w-full gap-3 order-2 md:order-1">
                            <Image src={image} alt={commented_on} width={100} height={100}
                                   className={`overflow-hidden flex justify-center items-center ${is_private === '1' ? "rounded-[50%] w-16" : "rounded-lg"}`}/>
                            <div className="flex flex-col gap-3 w-full">
                                <p className="text-xs md:text-base font-bold text-primary-950">{commented_on}</p>
                                <p className="text-[10px] lg:text-sm text-primary-950 bg-primary-100 w-fit rounded-xl px-3 py-0.5">{translateType(commented_on_type)}</p>
                            </div>
                        </div>
                        <div
                            className="flex md:flex-col lg:flex-row  gap-6 order-1 md:order-2 justify-end h-fit">
                            {!isRejected && <div className="flex items-center gap-3 relative">
                                <Popover>
                                    <PopoverTrigger>
                                        <div className="centerOfParent">
                                            <Bin className="fill-rose-600 cursor-pointer"/>
                                        </div>
                                    </PopoverTrigger>
                                    <PopoverContent>
                                        <div className="p-4 flex flex-col gap-10">
                                            <p className="text-natural_gray-950 font-bold sm:text-base text-sm">آیا
                                                مطمئن به حذف کامنت هستید؟</p>
                                            <div className="flex items-center gap-6">
                                                <Button isLoading={isLoading} color="danger" radius="sm" size="sm"
                                                        className="max-w-full w-full"
                                                        onPress={handleDelete}>حذف</Button>
                                            </div>
                                        </div>
                                    </PopoverContent>
                                </Popover>
                                {!isPending && status === 'text' && <Edit className="cursor-pointer" onClick={onOpen}/>}
                            </div>}
                            {isApproved ?
                                <Chip className="bg-success-50 text-success-700 text-[10px] md:text-sm">تایید
                                    شده</Chip> : null}
                            {isRejected ?
                                <Chip className="bg-[#FEF2F2] text-[#BB1F1A] text-[10px] md:text-sm">رد
                                    شده</Chip> : null}
                            {isPending ?
                                <Chip className="bg-warning-50 text-warning-700 text-[10px] md:text-sm">در انتظار
                                    تایید</Chip> : null}
                        </div>
                    </div>
                    <div className="flex flex-col-reverse md:flex-row justify-between gap-2">
                        <div className="flex items-center gap-2 w-full">
                            <p className="text-[10px] md:text-sm text-secondary-500 md:font-bold lg:font-medium whitespace-nowrap">نظر
                                من:</p>
                            {type === 'text' && <p className="text-xs md:text-sm text-natural_gray-950">{content}</p>}
                            {type === 'voice' &&<div dir='ltr'><AudioPlayer audio_url={content}/></div>}
                            {type === 'video' && (
                                <div className="centerOfParent rounded-full w-40 h-auto">
                                    <Card
                                        movie={content} bgSrc={'/images/profile.png'}/></div>
                            )}
                        </div>
                        {isApproved && <LikeDislike setReload={setReload} id={id}
                                                    c={{is_like, is_dislike, dislikes_count, likes_count}}/>}
                    </div>
                </div>
                <Modal dir='rtl' isOpen={isOpen} placement="top-center" onOpenChange={onOpenChange}>
                    <ModalContent>
                        {(onClose) => (
                            <form onSubmit={handleEdit}>
                                <ModalHeader className="flex flex-col gap-1">نظر خود را وارد کنید</ModalHeader>
                                <ModalBody>
                                    <Textarea
                                        name='body'
                                        label="ثبت نظر جدید"
                                        labelPlacement="outside"
                                        placeholder="توضیحات"
                                        className="w-full"
                                        variant='bordered'
                                        radius='sm'
                                    />
                                </ModalBody>
                                <ModalFooter>
                                    <Button color="danger" radius='sm' variant="flat" onPress={onClose}>
                                        انصراف
                                    </Button>
                                    <Button color="success" radius='sm' isLoading={loading} type="submit">
                                        اعمال تغییرات
                                    </Button>
                                </ModalFooter>
                            </form>
                        )}
                    </ModalContent>
                </Modal>
            </>
        );
    };

export default Comment;