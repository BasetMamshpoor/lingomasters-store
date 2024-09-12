const Tabs = () => {
    return (
        <>
            <div className="border bg-white">
                <ul className="flex items-center">
                    <li className="flex-[1_0_0]">
                        <a className="whitespace-nowrap text-primary-800 text-sm px-3 py-4 centerOfParent border-b-2 border-primary-800" href='#seller'>
                            فروشندگان
                        </a>
                    </li>
                    <li className="flex-[1_0_0]">
                        <a className="whitespace-nowrap text-primary-800 text-sm px-3 py-4 centerOfParent" href='#about'>
                            درباره کتاب
                        </a>
                    </li>
                    <li className="flex-[1_0_0]">
                        <a className="whitespace-nowrap text-primary-800 text-sm px-3 py-4 centerOfParent" href='#desc'>
                            توضیحات تکمیلی
                        </a>
                    </li>
                    <li className="flex-[1_0_0]">
                        <a className="whitespace-nowrap text-primary-800 text-sm px-3 py-4 centerOfParent" href='#example'>
                            نمونه صفحات
                        </a>
                    </li>
                    <li className="flex-[1_0_0]">
                        <a className="whitespace-nowrap text-primary-800 text-sm px-3 py-4 centerOfParent" href='#video'>
                            ویدیو
                        </a>
                    </li>
                    <li className="flex-[1_0_0]">
                        <a className="whitespace-nowrap text-primary-800 text-sm px-3 py-4 centerOfParent" href='#comments'>
                            نظرات
                        </a>
                    </li>
                </ul>
            </div>
        </>
    );
};

export default Tabs;