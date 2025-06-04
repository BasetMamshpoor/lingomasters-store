import { Progress } from "@heroui/react";
import React, { useEffect, useState } from 'react';

const Timer = ({ time, message, classNameTimer, classNameEtmam, withHour = true, withProgress = true }) => {
    const [seconds, setSeconds] = useState(time)
    const formatSeconds = (sec) => {
        if (sec < 0) return message
        const pad = (n) => n < 10 ? `0${n}` : n;
        const h = Math.floor(sec / 3600);
        const m = Math.floor(sec / 60) - (h * 60);
        const s = Math.floor(sec - h * 3600 - m * 60);
        return `${withHour ? `${(pad(h))} : ` : ''}${(pad(m))} : ${(pad(s))}`;
    }

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prev => prev - 1)
        }, 1000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className='mt-1'>
            {withProgress && seconds > 0 && <Progress minValue={0} maxValue={1} color="danger" size='sm' aria-label=" " value={1 - (seconds / 86400)} />}
            <span dir='ltr' className={seconds < 0 ? 'sm:text-sm text-xs relative text-red-500 centerOfParent before:-translate-x-2/4 before:-translate-y-2/4 before:left-10 after:translate-x-2/4 after:-translate-y-2/4 after:right-10;' : 'sm:text-sm text-xs text-red-500'}>
                {formatSeconds(seconds)}
            </span>
        </div>
    );
};

export default Timer;