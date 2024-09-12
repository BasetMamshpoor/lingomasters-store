import Dropdown from 'components/Dropdown/DropDown';
import useGetRequest from 'hooks/useGetRequest';
import React, { useEffect, useState, useCallback } from 'react';
import filterData from './filter.json'
import RangeSlider from './Range';
import { Checkbox, CheckboxGroup, Radio, RadioGroup } from '@nextui-org/react';
import { useRouter } from "next/router";

import FilterIcon from '@icons/filter.svg';
import Search from '@icons/search.svg';


const Filters = () => {
    const router = useRouter()
    const { slug: category, sort } = router.query

    const readUrl = () => {
        let object = {};
        for (const name in router.query) {
            if (Object.hasOwnProperty.call(router.query, name)) {
                let filter = []
                const value = router.query[name];
                const newValue = value.split('-')
                newValue.forEach((f, i) => {
                    filter.push({ name: f, value: i })
                })
                object[name] = filter
            }
        }
        return object
    }
    const [filters, setFilters] = useState(readUrl() || {})

    // const [data] = useGetRequest(`/products/getfilters/${category}`)
    const data = filterData

    // const makeFilter = (filter) => {
    //     let array = [];
    //     for (const i of data[filter]) {
    //         array.push(i)
    //     }
    //     return array
    // }
    const makeFilter = useCallback((filters) => {
        let array = []
        for (const filter in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, filter)) {
                const element = filters[filter];
                array.push({ id: element.id, name: element.title, value: element.id })
            }
        }
        return array
    }, [])
    const Filtering = useCallback((filters) => {
        let array = []
        for (const filter in filters) {
            if (Object.prototype.hasOwnProperty.call(filters, filter)) {
                const element = filters[filter];
                array.push({ ...element, name: filter })
            }
        }
        return array
    }, [])

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
                str = str + '-' + f.name
            } else if (i === 0) {
                str = f.name
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
            {!!data ?
                <div className='flex flex-col gap-3 lg:border border-natural_gray-100 rounded-xl bg-white lg:py-6 pb-6 lg:px-4' dir='rtl'>
                    <div className='lg:flex hidden items-center gap-4 py-3'>
                        <div className="centerOfParent"><FilterIcon /></div>
                        <p className='text-lg font-semibold'>فیلتر ها</p>
                    </div>
                    <div className="relative px-3 py-2 pr-10 border border-r-natural_gray-300 rounded-md">
                        <input type="text" className='w-full' placeholder='جستوجو' />
                        <div className="absolute top-1/2 -translate-y-1/2 right-2 bg-white centerOfParent"><Search /></div>
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className='font-semibold'>دسته بندی</label>
                        <CheckboxGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue={["buenos-aires"]}
                            style={{
                                "--nextui-primary": "196 94% 25%",
                            }}
                        >
                            <Checkbox name='category' value="buenos-aires">چاپی</Checkbox>
                            <Checkbox name='category' value="sydney">صوتی</Checkbox>
                            <Checkbox name='category' value="san-francisco">ویدیویی</Checkbox>
                            <Checkbox name='category' value="buenos-aires">چاپی</Checkbox>
                            <Checkbox name='category' value="sydney">صوتی</Checkbox>
                            <Checkbox name='category' value="san-francisco">ویدیویی</Checkbox>
                        </CheckboxGroup>
                    </div>
                    <div className="flex flex-col gap-4">
                        {Filtering(data).map(f => {
                            return (
                                <Dropdown key={f.name}
                                    array={makeFilter(f.filter)} defaultValue={filters[f.name]}
                                    Multiple Searchable label={f.title} setState={handleFilter} name={f.name}
                                    className='!px-3 !py-2 border border-gray-400 rounded-lg bg-white' />
                            )
                        })}
                    </div>
                    <div className="flex flex-col gap-3">
                        <label className='font-semibold'>گروه سنی</label>
                        <RadioGroup
                            aria-label=" "
                            orientation="horizontal"
                            defaultValue="child"
                            style={{
                                "--nextui-primary": "196 94% 25%",
                            }}
                        >
                            <Radio value="child">کودک</Radio>
                            <Radio value="teen">نوجوان</Radio>
                            <Radio value="adult">بزرگسال</Radio>
                        </RadioGroup>
                    </div>
                    <div className='px-3 py-5'>
                        <div className='flex items-center justify-between'>
                            <label className="inline-flex items-center justify-between w-full cursor-pointer">
                                <input type="checkbox" name="discount" id="discountField" checked={filters['discount'] ? true : false} className="sr-only peer"
                                    onChange={({ target }) => target.checked ? handleFilter('discount', true) : handleFilter('discount', null)} />
                                <span className="font-semibold text-natural_gray-950">ارسال رایگان</span>
                                <div className="relative w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-green-600"></div>
                            </label>
                        </div>
                    </div>
                    <RangeSlider {...{ filters, handleFilter }} />
                </div> : <p>... درحال‌ بارگذاری</p>}
        </>
    );
};

export default React.memo(Filters);