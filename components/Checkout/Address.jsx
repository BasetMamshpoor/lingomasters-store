import useAxios from "@/hooks/useAxios";
import { Autocomplete, AutocompleteItem, Input } from "@heroui/react";
import Link from "next/link";
import { useEffect, useState } from "react";

const Address = () => {
    const { AxiosPrivate } = useAxios()

    const [loading, setLoading] = useState({ pro: true, city: true, sub: false })

    const [provinces, setProvinces] = useState([])
    const [province, setProvince] = useState(1);
    const [cities, setCities] = useState([])


    useEffect(() => {
        const get = async () => {
            setLoading(prev => ({ ...prev, city: true }))
            await AxiosPrivate.get('/province')
                .then(res => setProvinces(res.data.data))
                .catch(err => alert(err.response?.data.message || 'استان ها پیدا نشدند'))
                .finally(() => setLoading(prev => ({ ...prev, pro: false })))
        }
        // get()
    }, [])

    useEffect(() => {
        const get = async () => {
            await AxiosPrivate.get(`city?province=${province}`)
                .then(res => setCities(res.data.data))
                .catch(err => alert(err.response?.data.message || 'شهر ها پیدا نشدند'))
                .finally(() => setLoading(prev => ({ ...prev, city: false })))
        }
        // get()
    }, [province])

    return (
        <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="font-semibold">نشانی</p>
                </div>
                <div className="flex flex-col gap-6 items-stretch">
                    <div className="flex flex-col gap-4 items-stretch">
                        <div className="flex items-center flex-wrap sm:gap-4 gap-y-6 sm:*:flex-[1_0_45%] *:flex-[1_0_100%]">
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">استان<span className="text-red-500 mr-1">*</span></label>
                                <Autocomplete
                                    size='md'
                                    placeholder="استان"
                                    radius="sm"
                                    variant="bordered"
                                    defaultItems={provinces}
                                    selectedKey={province}
                                    onSelectionChange={setProvince}
                                >
                                    {(item) => <AutocompleteItem key={item.value} className="flex-row-reverse" textValue={item.name} classNames={{ selectedIcon: '[&>svg]:w-3 [&>svg]:h-3' }}>
                                        <p className="flex items-center justify-end w-full">{item.name}</p>
                                    </AutocompleteItem>}
                                </Autocomplete>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">شهر<span className="text-red-500 mr-1">*</span></label>
                                <Autocomplete
                                    size='md'
                                    placeholder="شهر"
                                    className=""
                                    radius="sm"
                                    variant="bordered"
                                    defaultItems={cities}
                                >
                                    {(item) => <AutocompleteItem key={item.value} className="flex-row-reverse" textValue={item.name} classNames={{ selectedIcon: '[&>svg]:w-3 [&>svg]:h-3' }}>
                                        <p className="flex items-center justify-end w-full">{item.name}</p>
                                    </AutocompleteItem>}

                                </Autocomplete>
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">آدرس کامل<span className="text-red-500 mr-1">*</span></label>
                                <Input isRequired radius="sm" variant="bordered" name="address" placeholder="آدرس تکمیلی" className="self-stretch" />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">کد پستی<span className="text-red-500 mr-1">*</span></label>
                                <Input isRequired radius="sm" variant="bordered" type="number" name="postal_code" placeholder="1234567890" className="self-stretch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="font-semibold">اطلاعات گیرنده</p>
                </div>
                <div className="flex flex-col gap-6 items-stretch">
                    <div className="flex flex-col gap-4 items-stretch">
                        <div className="flex sm:flex-row flex-col sm:items-center items-stretch gap-4 *:flex-[1_0_0]">
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">نام<span className="text-red-500 mr-1">*</span></label>
                                <Input isRequired radius="sm" variant="bordered" name="name" placeholder="نام" className="self-stretch" />
                            </div>
                            <div className="flex flex-col items-start gap-2">
                                <label className="sm:text-sm text-xs text-natural_gray-950 mr-2" htmlFor="">شماره تلفن همراه<span className="text-red-500 mr-1">*</span></label>
                                <Input isRequired radius="sm" variant="bordered" type="tel" name="number" placeholder="09" className="self-stretch" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex justify-end gap-3 items-center flex-row-reverse">
                <label className="sm:text-base text-sm" htmlFor="rules">تمامی <Link href='/rules' className="text-primary-600">قوانین و مقررات</Link> را میپذیرم.</label>
                <input className="w-5 h-5 bg-primary-600 cursor-pointer" type="checkbox" name="rules" id="rules" />
            </div>
        </form>
    );
};

export default Address;