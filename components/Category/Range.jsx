import React, { useState, useEffect, useRef } from "react";
import { Slider } from "@nextui-org/react";
import { useDebounce } from "@/hooks/useDebounce";
import formatCurrency from "@/helpers/formatCurrency";

export default function RangeSlider({ filters, handleFilter, data }) {

    const minSliderValue = data?.min_price || 0;
    const maxSliderValue = data?.max_price || 1;

    const firstTime2 = useRef(true)
    const firstTime3 = useRef(true)

    const [values, setValues] = useState([minSliderValue, maxSliderValue]);

    const [min, max] = useDebounce(values);

    useEffect(() => {
        setValues([filters.min_price ? Number(filters.min_price[0]?.value) : minSliderValue, filters.max_price ? Number(filters.max_price[0]?.value) : maxSliderValue])
    }, []);

    useEffect(() => {
        if (firstTime2.current) {
            firstTime2.current = false
            return
        } else
            handleFilter('min_price', [{ value: min.toString() }])
    }, [min])
    useEffect(() => {
        if (firstTime3.current) {
            firstTime3.current = false
            return
        } else
            handleFilter('max_price', [{ value: max.toString() }])
    }, [max])


    // Handle input change for min value
    const handleMinChange = (e) => {
        const newMin = Number(e.target.value.replace(/[^0-9]/g, ""));
        if (newMin >= minSliderValue && newMin <= values[1]) {
            setValues([newMin, values[1]]);
        } else if (newMin > values[1]) {
            setValues([values[1], values[1]]);
        }
    };

    // Handle input change for max value
    const handleMaxChange = (e) => {
        const newMax = Number(e.target.value.replace(/[^0-9]/g, ""));
        if (newMax <= maxSliderValue && newMax >= values[0]) {
            setValues([values[0], newMax]);
        } else if (newMax < values[0]) {
            setValues([values[0], values[0]]);
        }
    };

    return (
        <div className="flex flex-col gap-4 w-full">
            <label className='font-semibold'>مبلغ</label>
            <div className="flex flex-col items-center justify-center gap-4">
                <div className="flex items-center justify-between w-full">
                    <span className="hasToman">{formatCurrency(maxSliderValue)}</span>
                    <span className="hasToman">{formatCurrency(minSliderValue)}</span>
                </div>
                <Slider
                    aria-label=' '
                    step={50}
                    minValue={minSliderValue}
                    maxValue={maxSliderValue}
                    value={values}
                    onChange={setValues}
                    classNames={{
                        base: "max-w-md",
                        track: "h-1",
                        filler: "bg-[#035477]"
                    }}
                    renderThumb={({ index, ...props }) => (
                        <div {...props} className="p-0.5 top-1/2 bg-[#035477] rounded-full cursor-grab" >
                            <span className='block rounded-full w-2 h-2' />
                        </div>
                    )}
                />
                <div className="flex items-center gap-2 px-1">
                    <div className="flex items-center gap-2">
                        <label htmlFor="minValue" className="font-bold">از</label>
                        <input
                            type="text"
                            value={formatCurrency(values[0])}
                            onChange={handleMinChange}
                            className="border rounded-md text-center w-full"
                        />
                    </div>

                    <div className="flex items-center gap-2">
                        <label htmlFor="maxValue" className="font-bold">تا</label>
                        <input
                            type="text"
                            value={formatCurrency(values[1])}
                            onChange={handleMaxChange}
                            className="border rounded-md text-center w-full"
                        />
                    </div>
                </div>
            </div>
        </div>

    );
}
