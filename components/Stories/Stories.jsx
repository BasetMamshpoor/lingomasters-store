import React from 'react';
import useSwipeScroll from "@/hooks/useHorizontalScroll";
import Story from "@/components/Stories/Story";

const Stories = ({data: Stories = []}) => {
    const scroll = useSwipeScroll()

    return (
        <>
            <div dir='rtl' ref={scroll}
                 className="container flex scrollbar-hide items-stretch overflow-x-auto lg:gap-6 sm:gap-5 gap-4 lg:my-10 sm:my-8 my-5">
                {Stories.map((story, index) => (
                    <div key={story.id}
                         className="flex flex-col gap-4 justify-center items-center sm:max-w-[120px] w-full max-w-[90px]">
                        <Story story={story} Stories={Stories} index={index}/>
                        <div className="text-sm line-clamp-2 ">{story.title}</div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Stories;