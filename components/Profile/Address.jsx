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

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});
const Address = () => {
    const [data, setData] = useState({})
    const [country, setCountry] = useState()
    const [location, setLocation, Q, W, E, loading] = useGetRequest(`/countries?country=${country || data.country_id}`)
    const [show, setShow] = useState(false)
    const [address, setAddress, reload, , , loadAddress] = useGetRequest('/buyer/profile/addresses')
    const {sendPostRequest, isLoading} = usePostRequest()
    const {deleteData, isLoading: Load} = useDeleteRequest()

    const handleChange = (event) => {
        const {name, value} = event.target;
        setData(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const {errorMessage, success, successMessage} = await sendPostRequest('POST', '/buyer/profile/addresses', data)
        if (success) {
            addToast({
                title: successMessage,
                color: 'success'
            })
            reload(Math.random())
            setData({})
        } else {
            addToast({
                title: errorMessage,
                color: 'danger'
            })
        }
    }
    const handleDelete = async (id) => {
        const {success} = await deleteData(`/buyer/profile/addresses/${id}`)
        if (success) {
            setAddress(prev => prev.filter(e => e.id !== id))
        }
    }

    const inputClass = {
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
        label: 'text-xs text-natural_gray-950 font-semibold',
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
            {show &&
                <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                    <div className="flex flex-col gap-1">
                        <label className='text-sm'>انتخاب موقعیت از روی نقشه</label>
                        <div className="centerOfParent">
                            <Map setLocation={setData}
                                 location={[data.latitude || 0, data.longitude || 0]}/>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        {location && <>
                            <Select
                                isRequired
                                errorMessage=" "
                                labelPlacement="outside"
                                className="w-full"
                                label="کشور محل سکونت"
                                name='country_id'
                                selectedKeys={[data.country_id?.toString()]}
                                onChange={(e) => {
                                    setLocation(prev => ({...prev, city: []}))
                                    handleChange(e)
                                    setCountry(e.target.value)
                                }}
                                variant="bordered"
                                radius="sm"
                                items={location.countries}
                                classNames={{
                                    label: 'text-xs font-semibold',
                                    input: 'text-xs',
                                    listbox: '[&>ul>li>span>svg]:w-3 [&>ul>li>span>svg]:h-3',
                                    trigger: 'bg-white',
                                }}
                            >
                                {(c) => (
                                    <SelectItem key={c.value} className="flex-row-reverse"
                                                textValue={c.name}>
                                        <p className="flex items-center justify-end w-full">{c.name}</p>
                                    </SelectItem>
                                )}
                            </Select>
                            <Autocomplete
                                isRequired
                                errorMessage=" "
                                labelPlacement="outside"
                                className="w-full"
                                label="شهر محل سکونت"
                                name='city_id'
                                defaultItems={location.city}
                                selectedKey={data.city_id?.toString()}
                                isLoading={loading}
                                variant="bordered"
                                onSelectionChange={e => setData(prev => ({...prev, city_id: e}))}
                                radius="sm"
                                inputProps={{
                                    classNames: {
                                        inputWrapper: 'bg-white'
                                    },
                                }}
                            >
                                {(item => (
                                    <AutocompleteItem key={item.value} className="flex-row-reverse"
                                                      textValue={item.name}>
                                        <p className="flex items-center justify-end w-full">{item.name}</p>
                                    </AutocompleteItem>
                                ))}
                            </Autocomplete>
                        </>}
                        <Input
                            errorMessage=" "
                            className="w-full"
                            label="منطقه محل سکونت"
                            radius="sm"
                            type="text"
                            isRequired
                            value={data.region}
                            name='region'
                            onChange={handleChange}
                            labelPlacement="outside"
                            variant="bordered"
                            classNames={inputClass}
                        />
                    </div>
                    <Input
                        className="w-full"
                        errorMessage=" "
                        label="آدرس محل سکونت"
                        radius="sm"
                        type="text"
                        isRequired
                        value={data.address}
                        name='address'
                        onChange={handleChange}
                        labelPlacement="outside"
                        placeholder='تهران...'
                        variant="bordered"
                        classNames={inputClass}
                    />
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            className="w-full"
                            label="پلاک"
                            radius="sm"
                            type="text"
                            isRequired
                            value={data.plaque}
                            errorMessage=" "
                            name='plaque'
                            onChange={handleChange}
                            labelPlacement="outside"
                            placeholder='11'
                            variant="bordered"
                            classNames={inputClass}
                        />
                        <Input
                            radius="sm"
                            className="w-full"
                            label="واحد"
                            type="text"
                            name='unit'
                            isRequired
                            value={data.unit}
                            errorMessage=" "
                            placeholder='1'
                            labelPlacement="outside"
                            variant="bordered"
                            onChange={handleChange}
                            classNames={inputClass}
                        />
                        <Input
                            className="w-full"
                            radius="sm"
                            label="کد پستی"
                            type="number"
                            value={data.postal_code}
                            name='postal_code'
                            onChange={handleChange}
                            placeholder='57'
                            isRequired
                            errorMessage=" "
                            labelPlacement="outside"
                            variant="bordered"
                            classNames={inputClass}
                        />
                    </div>
                    <div className="flex flex-col sm:flex-row gap-4">
                        <Input
                            className="w-full"
                            label="نام آدرس"
                            radius="sm"
                            isRequired
                            errorMessage=" "
                            value={data.title}
                            name='title'
                            onChange={handleChange}
                            labelPlacement="outside"
                            placeholder='11'
                            variant="bordered"
                            classNames={inputClass}
                        />
                        <Input
                            radius="sm"
                            className="w-full"
                            value={data.mobile}
                            label="شماره گیرنده"
                            name='mobile'
                            isRequired
                            errorMessage=" "
                            placeholder='1'
                            labelPlacement="outside"
                            variant="bordered"
                            onChange={handleChange}
                            classNames={inputClass}
                        />
                    </div>
                    <div className="flex justify-end gap-6">
                        <button disabled={isLoading} type="submit"
                                className='rounded disabled:bg-natural_gray-400 bg-primary-700 text-white px-4 py-2 h-12 sm:w-1/5 w-full'>{isLoading ? 'لطفا صبر کنید...' : 'ثبت آدرس'}</button>
                    </div>
                </form>}
        </>
    );
};

export default Address;