import React, {useEffect, useState} from 'react';
import Edite from "@icons/edit-icon.svg";
import Bin from "@icons/bin.svg";
import Image from "next/image";
import Plus from "@icons/plus.svg";
import {
    addToast,
    Autocomplete,
    AutocompleteItem, Button,
    Input,
    Popover, PopoverContent,
    PopoverTrigger,
    Select,
    SelectItem,
    Spinner
} from "@heroui/react";
import useGetRequest from "@/hooks/useGetRequest";
import dynamic from "next/dynamic";
import usePostRequest from "@/hooks/usePostRequest";
import useDeleteRequest from "@/hooks/useDeleteRequest";
import NewAddress from "@/components/Profile/NewAddress";

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});
const Address = () => {
    const [data, setData] = useState({})
    const [show, setShow] = useState(false)
    const [address, setAddress, reload, , , loadAddress] = useGetRequest('/buyer/profile/addresses')
    const {deleteData, isLoading: Load} = useDeleteRequest()


    const handleDelete = async (id) => {
        const {success} = await deleteData(`/buyer/profile/addresses/${id}`)
        if (success) {
            setAddress(prev => prev.filter(e => e.id !== id))
        }
    }
    return (
        <>
            <div className="flex flex-col gap-6">
                {loadAddress ? <div className="centerOfParent w-full"><Spinner color="success"/></div> :
                    address?.map(e => (
                        <div key={e.id} className="flex flex-col gap-4 p-4 border border-natural_gray-200 rounded-lg">
                            <div className="flex items-center justify-between">
                                <p className="text-xs font-bold text-natural_gray-950">{e.title}</p>
                                <div className="flex gap-6">
                                    <div className="centerOfParent cursor-pointer" onClick={() => {
                                        setData(e)
                                        setShow(true)
                                    }}>
                                        <Edite className="w-5 h-5"/>
                                    </div>

                                    <Popover>
                                        <PopoverTrigger>
                                            <div className="centerOfParent cursor-pointer">
                                                <Bin className="fill-rose-600 w-5 h-5"/>
                                            </div>
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <div className="p-4 flex flex-col gap-10">
                                                <p className="text-natural_gray-950 font-bold sm:text-base text-sm">آیا
                                                    مطمئن به حذف آدرس هستید؟</p>
                                                <div className="flex items-center gap-6">
                                                    <Button isLoading={Load} color="danger" radius="sm" size="sm"
                                                            className="max-w-full w-full"
                                                            onPress={() => handleDelete(e.id)}>حذف</Button>
                                                </div>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </div>
                            </div>
                            <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
                                <div className="flex flex-col gap-6  justify-center">
                                    <div className="flex flex-col gap-3">
                                        <div className="flex gap-2 items-center">
                                            <p className="text-xs text-natural_gray-950 whitespace-nowrap">آدرس
                                                :</p>
                                            <p className="text-sm font-bold text-natural_gray-950">
                                                {e.country}-
                                                {e.city}-
                                                {e.region}-
                                                {e.address}-
                                                {e.plaque}-
                                                {e.unit}-
                                            </p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs text-natural_gray-950">کدپستی:</p>
                                            <p className="text-sm font-bold text-natural_gray-950">{e.postal_code}</p>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <p className="text-xs text-natural_gray-950">تلفن:</p>
                                            <p className="text-sm font-bold text-natural_gray-950">{e.mobile}</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="centerOfParent w-[200px]">
                                    <Map location={[e.latitude, e.longitude]} justView height={100} zoom={9}/>
                                </div>
                            </div>
                        </div>
                    ))}
            </div>
            <div className="flex justify-end w-full my-5">
                <button type='button' onClick={() => {
                    setData({})
                    setShow(true)
                }}
                        className="flex items-center justify-center border border-secondary-500 rounded-md gap-1 px-4 py-3 ">
                    <Plus className="fill-secondary-500 w-5 h-5"/>
                    <p className="text-secondary-500 text-base">ثبت آدرس جدید</p>
                </button>
            </div>
            {show && <NewAddress setData={setData} data={data} reload={reload}/>}
        </>
    );
};

export default Address;