import React, {useContext} from 'react';
import usePostRequest from "@/hooks/usePostRequest";
import {addToast, Button, Form, Input} from "@heroui/react";
import {CartContext} from "@/providers/CartContextProvider";

const CheckCoupon = ({state, setCoupon}) => {
    const {sendPostRequest, isLoading} = usePostRequest()
    const handleCheckCoupon = async (e) => {
        e.preventDefault();
        const coupon = e.target[0].value;
        const {
            success,
            data: Data,
            errorMessage,
        } = await sendPostRequest('POST', `/order/checkDiscount`, {
            code: coupon,
            ...state,
        }, false, true);
        if (!success) {
            addToast({
                title: 'خطا',
                description: errorMessage,
                color: 'danger',
            });
        } else {
            setCoupon({...Data.response?.data, code: coupon})
        }
    }


    return (
        <>
            <Form className="w-full max-w-xs" onSubmit={handleCheckCoupon}>
                <Input
                    isClearable={true}
                    isRequired
                    errorMessage=" "
                    label="کد تخفیف خود را وارد کنید"
                    radius='sm' labelPlacement='outside' variant='bordered'
                    className='max-w-1/2'/>
                <Button
                    isLoading={isLoading}
                    type='submit'
                    color="success"
                    style={{
                        "--heroui-success": "140 82% 33%",
                    }}
                    className="text-white"
                    radius='sm'>بررسی</Button>
            </Form>
        </>
    );
};

export default CheckCoupon;