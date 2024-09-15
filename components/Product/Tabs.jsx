const Tabs = () => {
    return (
        <>
            <div className="border bg-white">
                <ul className="flex items-center [&>li]:grow overflow-x-auto ">
                    <li>
                        <a className="whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent border-b-2 border-primary-800" href='#seller'>
                            فروشندگان
                        </a>
                    </li>
                    <li>
                        <a className="whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent" href='#about'>
                            درباره کتاب
                        </a>
                    </li>
                    <li>
                        <a className="whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent" href='#desc'>
                            توضیحات تکمیلی
                        </a>
                    </li>
                    <li>
                        <a className="whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent" href='#example'>
                            نمونه صفحات
                        </a>
                    </li>
                    <li>
                        <a className="whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent" href='#video'>
                            ویدیو
                        </a>
                    </li>
                    <li>
                        <a className="whitespace-nowrap text-primary-800 sm:text-sm text-xs sm:px-3 px-2 sm:py-4 py-3 centerOfParent" href='#comments'>
                            نظرات
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Tabs;