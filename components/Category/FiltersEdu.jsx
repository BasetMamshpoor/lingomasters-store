import Dropdown from 'components/Dropdown/DropDown';
import useGetRequest from 'hooks/useGetRequest';
import React, { useState } from 'react';
import RangeSlider from './Range';
import { Radio, RadioGroup } from '@nextui-org/react';
import { useRouter } from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';


const FiltersEdu = () => {
    const router = useRouter()

    const readUrl = () => {
        let object = {};
        for (const name in router.query) {
            if (Object.hasOwnProperty.call(router.query, name)) {
                let filter = []
                const value = router.query[name];
                const newValue = value.split('-')
                newValue.forEach((f, i) => {
                    filter.push({ value: f, name: i })
                })
                object[name] = filter
            }
        }
        return object
    }
    const [filters, setFilters] = useState(readUrl() || {})

    const [data] = useGetRequest('/educational-product/get-filter')

    const handleFilter = (name, value) => {        
        setFilters(prev => {
            return {
                ...prev,
                [name]: value
            }
        })
        changeUrl(name, value)
    }

    const changeUrl = (name, value) => {
        let str = null;
        !!Array.isArray(value) ? value.forEach((f, i) => {
            if (i > 0) {
                str = str + '-' + f.value
            } else if (i === 0) {
                str = f.value
            } else {
                str = null
            }
        }) : str = value
        if (str === null) {
            const { [name]: O, slug, ...query } = router.query
            router.replace({ pathname: router.asPath.split('?')[0], query: { ...query }, },
                undefined,
                { shallow: true }
            );
        } else {
            const { slug, ...query } = router.query
            router.replace({ pathname: router.asPath.split('?')[0], query: { ...query, [name]: str }, },
                undefined,
                { shallow: true }
            );
        }
    }

    return (
        <>
            <div className='flex flex-col gap-3 lg:border border-natural_gray-100 rounded-xl bg-white lg:py-6 pb-6 lg:px-4' dir='rtl'>
                <div className='lg:flex hidden items-center gap-4 py-3'>
                    <div className="centerOfParent"><FilterIcon /></div>
                    <p className='text-lg font-semibold'>فیلتر ها</p>
                </div>
                <div className="relative px-3 py-2 pr-10 border border-r-natural_gray-300 rounded-md">
                    <input type="text" className='w-full' placeholder='جستجو' />
                    <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-white centerOfParent"><Search className='fill-natural_gray-600' /></div>
                </div>
                {!!data ? <>
                    <Dropdown
                        array={data.language} defaultValue={filters['language']}
                        Multiple Searchable label="انتخاب زبان" setState={handleFilter} name="language" placeHolder='زبان هدف'
                        className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white' />
                    <div className="flex flex-col gap-3">
                        <label className='font-semibold'>گروه سنی</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue="child"
                            style={{
                                "--nextui-default-500": "196 94% 25%",
                            }}
                            color='default'
                        >
                            {data.age_group.map(a => <Radio key={a.value} value={a.value}>{a.name}</Radio>)}
                        </RadioGroup>
                    </div>
                    <RangeSlider {...{ filters, handleFilter, data: data.price_range }} />
                </> : <p>... درحال‌ بارگذاری</p>}
                <div className='px-3 py-5 flex flex-col gap-4'>
                    <div className='flex items-center justify-between'>
                        <label className="inline-flex items-center justify-between w-full cursor-pointer">
                            <input type="checkbox" name="is_used" id="is_usedField" checked={filters['is_used'] ? true : false} className="sr-only peer"
                                onChange={({ target }) => target.checked ? handleFilter('is_used', true) : handleFilter('is_used', null)} />
                            <span className="text-sm text-natural_gray-950">کتاب دست دوم</span>
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label className="inline-flex items-center justify-between w-full cursor-pointer">
                            <input type="checkbox" name="free_shipping" id="free_shippingField" checked={filters['free_shipping'] ? true : false} className="sr-only peer"
                                onChange={({ target }) => target.checked ? handleFilter('free_shipping', true) : handleFilter('free_shipping', null)} />
                            <span className="text-sm text-natural_gray-950">ارسال رایگان</span>
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                    <div className='flex items-center justify-between'>
                        <label className="inline-flex items-center justify-between w-full cursor-pointer">
                            <input type="checkbox" name="discount" id="discountField" checked={filters['discount'] ? true : false} className="sr-only peer"
                                onChange={({ target }) => target.checked ? handleFilter('discount', true) : handleFilter('discount', null)} />
                            <span className="text-sm text-natural_gray-950">تخفیف دار</span>
                            <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                        </label>
                    </div>
                </div>
            </div>
        </>
    );
};

export default React.memo(FiltersEdu);