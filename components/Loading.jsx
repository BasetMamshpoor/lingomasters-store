import React from 'react';

const Loading = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center z-50 animate-fadeIn">
            <div className="relative w-60 h-60">
                <div className="absolute inset-0 border-4 border-t-black border-transparent rounded-full animate-spin"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-pulse">
                   <h1 className="font-Metal text-3xl">{process.env.NEXT_PUBLIC_LOGO}</h1>
                </div>
            </div>
        </div>
    );
};

export default Loading;