import React from "react";
import CheckCircle from '@icons/check-circle.svg'
import Package from '@icons/refresh.svg'
import WW from '@icons/info-circle.svg'
import Truck from '@icons/bank.svg'
import UserCheck from '@icons/user-tick.svg'

const OrderProgress = ({status}) => {
    const steps = [
        {key: "pending", label: "تأیید فروشنده", icon: <CheckCircle/>},
        {key: "approved", label: "آماده‌سازی", icon: <Package/>},
        {key: "shipped", label: "تحویل به پست", icon: <Truck/>},
        {key: "delivered", label: "تحویل به مشتری", icon: <UserCheck/>},
    ];

    const isRejected = status === "rejected";

    const statusIndex = steps.findIndex((step) => step.key === status);
    const activeIndex = isRejected ? 0 : statusIndex;

    return (
        <ol className="flex w-full items-center justify-between px-4">
            {steps.map((step, index) => {
                const isActive = activeIndex === index;
                const isCompleted = activeIndex > index;
                const isLast = index === steps.length - 1;

                const baseColor = isRejected && index === 0 ? "red" : "primary";
                const bgColor = isCompleted || isActive ? `${baseColor}-700` : `${baseColor}-100`;
                const textColor = isCompleted || isActive ? "white" : "natural_gray-600";

                const icon = isRejected && index === 0 ? (
                    <WW/>
                ) : React.cloneElement(step.icon, {
                    className: isCompleted ? "fill-white" : "fill-natural_gray-400",
                });

                return (
                    <React.Fragment key={step.key}>
                        <li className="relative p-2">
                            <span
                                className={`centerOfParent flex items-center justify-center 
                                    bg-${bgColor} 
                                    lg:w-14 lg:h-14 sm:w-10 sm:h-10 w-6 h-6 
                                    text-${textColor} rounded-full`}
                            >
                                {icon}
                            </span>
                            <h3
                                className={`absolute sm:block ${isActive ? "block" : "hidden"} 
                                    sm:-bottom-6 sm:top-full top-1/2 px-1 
                                    sm:translate-y-0 -translate-y-1/2 h-fit 
                                    bg-[#FBFCFE] ${isLast ? "sm:left-auto left-full" : "right-full"} 
                                    pl-1 sm:right-1/2 sm:translate-x-1/2 whitespace-nowrap 
                                    lg:text-base sm:text-sm text-[10px] text-natural_gray-800`}
                            >
                                {step.label}
                            </h3>
                        </li>

                        {index < steps.length - 1 && (
                            <li
                                className={`flex-[1_0_0] h-px border border-dashed ${
                                    isCompleted ? `border-${baseColor}-600` : ""
                                }`}
                            ></li>
                        )}
                    </React.Fragment>
                );
            })}
        </ol>
    );
};

export default OrderProgress;
