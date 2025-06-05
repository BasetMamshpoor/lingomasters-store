import React, {useState} from 'react';
import {addToast, Autocomplete, AutocompleteItem, Input, Select, SelectItem} from "@heroui/react";
import usePostRequest from "@/hooks/usePostRequest";
import useGetRequest from "@/hooks/useGetRequest";
import dynamic from "next/dynamic";

const Map = dynamic(() => import('@/components/Map'), {
    ssr: false,
});
const NewAddress = ({ setData:setPropData, data: propData, reload,onClose }) => {
    const [localData, setLocalData] = useState({});
    const data = propData || localData;
    const setData = setPropData || setLocalData;
    const [country, setCountry] = useState()
    const {sendPostRequest, isLoading} = usePostRequest()
    const [location, setLocation, Q, W, E, loading] = useGetRequest(`/countries?country=${country || data.country_id}`)

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
            if (onClose)
                onClose()
        } else {
            addToast({
                title: errorMessage,
                color: 'danger'
            })
        }
    }
    const inputClass = {
        inputWrapper: 'bg-white group-data-[focus=true]:bg-white',
        label: 'text-xs text-natural_gray-950 font-semibold',
    }
    return (
        <>
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
            </form>
        </>
    );
};

export default NewAddress;