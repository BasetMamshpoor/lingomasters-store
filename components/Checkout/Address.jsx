import Link from "next/link";

const Address = () => {


    return (
        <form className="flex flex-col gap-10">
            <div className="flex flex-col gap-4">
                <div className="flex items-center justify-between">
                    <p className="font-semibold">نشانی</p>
                </div>
            </div>
            <div className="flex justify-end gap-3 items-center flex-row-reverse">
                <label className="sm:text-base text-sm" htmlFor="rules">تمامی <Link href='/rules'
                                                                                    className="text-primary-600">قوانین
                    و مقررات</Link> را میپذیرم.</label>
                <input className="w-5 h-5 bg-primary-600 cursor-pointer" type="checkbox" name="rules" id="rules"/>
            </div>
        </form>
    );
};

export default Address;