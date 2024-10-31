import { Pagination, PaginationItemType } from "@nextui-org/react";
import ChevronIcon from "@icons/chevron-right.svg";

export default function PaginationApp({ total, per_page, currentPage, ...props }) {
    const pages = Math.ceil(total / per_page) || 1
    const renderItem = ({
        ref,
        key,
        value,
        isActive,
        onNext,
        onPrevious,
        setPage,
        className = '',
    }) => {
        if (value === PaginationItemType.NEXT) {
            return (
                <button key={key} className={`sm:!w-8 !w-6 sm:!h-8 !h-6 ${className}`} onClick={onNext}>
                    <ChevronIcon className='fill-[#EA8616]' />
                </button>
            );
        }

        if (value === PaginationItemType.PREV) {
            return (
                <button key={key} className={`sm:!w-8 !w-6 sm:!h-8 !h-6 ${className}`} onClick={onPrevious}>
                    <ChevronIcon className="fill-[#EA8616] rotate-180" />
                </button>
            );
        }

        if (value === PaginationItemType.DOTS) {
            return <button key={key} className={`sm:!w-8 !w-6 sm:!h-8 !h-6`}>...</button>;
        }

        // cursor is the default item
        return (
            <button
                key={key}
                ref={ref}
                className={`sm:!w-8 !w-6 sm:!h-8 !h-6 !min-w-0 centerOfParent !bg-primary-50 !rounded ${className} ${isActive && 'bg-gradient-to-t from-[#366CDA66] to-[#6A87C133]'}`}
                onClick={() => setPage(value)}
            >
                {value}
            </button>
        );
    };

    return (
        <>
            {pages > 1 && <Pagination
                disableCursorAnimation
                showControls
                total={pages}
                page={currentPage || 1}
                className="sm:[&>ul]:gap-3 [&>ul]:flex-row-reverse"
                radius="full"
                renderItem={renderItem}
                variant="light"
                {...props}
            />}
        </>
    );
}
