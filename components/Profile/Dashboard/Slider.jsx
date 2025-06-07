import React, {useEffect, useState} from 'react';
import useHorizontalScroll from "@/hooks/useHorizontalScroll";
import Right from "@icons/chevron-right.svg";
import Left from "@icons/arrow-left.svg";
import CardProduct from "@/components/Profile/Dashboard/CardProduct";

const Slider = ({data,title}) => {
    const [isScrollable, setIsScrollable] = useState(false);
    const ref = useHorizontalScroll();

    useEffect(() => {
        const slider = ref.current;
        if (!slider) return;

        const checkScrollable = () => {
            setIsScrollable(slider.scrollWidth > slider.clientWidth);
        };

        checkScrollable();

        const resizeObserver = new ResizeObserver(checkScrollable);
        resizeObserver.observe(slider);

        return () => {
            resizeObserver.disconnect();
        };
    }, [ref, data]);
    return (
        <>
            <div
                className="relative sm:p-6 px-3 py-4 flex flex-col gap-6 w-1/3 bg-red-300 ">
                <p className="text-primary-950 sm:text-lg font-bold">{title}</p>
                <div className="">
                    {isScrollable && (
                        <button
                            onClick={() => ref.current.scrollBy({left: 200, behavior: 'smooth'})}
                            className="absolute z-10 top-1/2 -translate-y-1/2 -right-10 lg:flex hidden items-center justify-center"
                        >
                            <Right className='fill-primary-400'/>
                        </button>
                    )}
                    <div className="flex gap-4 w-2/3 overflow-x-auto scrollbar-hide select-none max-w-fit" ref={ref}>
                        {!!data && data.map(i => <CardProduct key={i.id} data={i}/>)}
                    </div>
                    {isScrollable && (
                        <button
                            onClick={() => ref.current.scrollBy({left: -200, behavior: 'smooth'})}
                            className="absolute z-10 top-1/2 -translate-y-1/2 -left-10 lg:flex hidden items-center justify-center"
                        >
                            <Left className='fill-primary-400'/>
                        </button>
                    )}
                </div>
            </div>
        </>
    );
};

export default Slider;