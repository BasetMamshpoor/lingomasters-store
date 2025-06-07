import Cart from '@icons/cart.svg';
import formatCurrency from "@/helpers/formatCurrency";
import {addToast, Skeleton} from "@heroui/react";
import Image from "next/image";
import Link from "next/link";
import {useRouter} from "next/router";
import {useContext} from "react";
import {CartContext} from "@/providers/CartContextProvider";

const Banner = ({ withTag = true, data }) => {
    const {push} = useRouter()
    const {dispatch, state} = useContext(CartContext)

    const {discounted_price, price, discount_expire_at, discount_percentage,} = data?.selected_seller || {};

    const handleClick = () => {
        const newSellerId = data?.selected_seller?.id;

        if (!newSellerId) {
            addToast({
                title: 'خطا',
                description: "شما فقط می‌توانید از یک فروشنده در هر سبد خرید استفاده کنید.",
                color: 'danger'
            })
            return;
        }

        const currentSellerId = state.seller_id?? null;

        if (currentSellerId && currentSellerId !== newSellerId) {
            addToast({
                title: 'خطا',
                description: "شما فقط می‌توانید از یک فروشنده در هر سبد خرید استفاده کنید.",
                color: 'danger'
            })
            return;
        }

        const idp = `${data.id}_${newSellerId}`;
        const {id, image, category, selected_seller, quantity, title, is_download} = data
        dispatch({
            type: 'ADD_ITEM',
            payload: {id, image, category, selected_seller, quantity, title, is_download, idp}
        });

        push('/checkout/cart');
    };

    return (
        <>
            {!data ?
                <div className="flex items-center ww-full sm:mx-0 mx-2">
                    <div dir='rtl' className="bg-white lg:p-6 py-4 px-2 flex flex-col lg:gap-8 gap-4 lg:h-[236px] h-[156px] w-full sm:grow-0 grow">
                        <div className={`flex items-center gap-1`}>
                            <Skeleton className='w-1/2 h-4' />
                        </div>
                        <div className="centerOfParent grow">
                            <Skeleton className='w-1/3 h-4' />
                        </div>
                        <Skeleton className='lg:h-12 h-8 w-full rounded  centerOfParent gap-1 text-white lg:p-4 p-2 pr-3' />
                    </div>
                    <Skeleton className="centerOfParent sm:grow flex-shrink-0 lg:w-[302px] lg:h-[300px] sm:w-[165px] w-[156] h-[168px]" />
                </div>
                : <div className="flex items-center ww-full sm:mx-0 mx-2">
                    <div dir='rtl' className="transition-all hover:border-primary-600 border-l border-y border-white bg-primary-50 lg:p-6 py-4 px-2 flex flex-col lg:gap-8 gap-4 lg:h-[236px] h-[156px] w-full sm:grow-0 grow rounded-l-lg">
                        <div className={`flex items-center justify-${withTag ? 'between' : 'center'} gap-1`}>
                            <Link href={`/product/${data.id}`} className='line-clamp-1 lg:text-xl text-sm leading-6'>{data?.title}</Link>
                            {withTag && data?.category && <span className="lg:px-3 px-2.5 lg:py-1 py-0 lg:text-base text-[10px] centerOfParent h-8 rounded-[20px] bg-natural_gray-200 text-natural_gray-950 font-semibold">{data.category}</span>}
                        </div>
                        <div className="centerOfParent grow">
                            <p className='text-green-600 lg:text-2xl text-xs hasToman'>{formatCurrency(price)}</p>
                        </div>
                        <button onClick={handleClick} className='effect-2 lg:h-12 h-8 w-full bg-primary-600 rounded lg:text-base text-xs centerOfParent gap-1 text-white lg:p-4 p-2 pr-3'>
                            <Cart className='fill-white' /> نمایش محصول</button>
                    </div>
                    <div className="centerOfParent sm:grow flex-shrink-0 lg:w-[302px] lg:h-[300px] sm:w-[165px] w-[156] h-[168px]">
                        <Image alt={data.title} src={data?.images} width={100} height={100} className='flex-shrink-0 w-full h-full object-contain' />
                    </div>
                </div>}
        </>
    );
};

export default Banner;