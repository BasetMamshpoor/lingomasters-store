import AboutBook from "@/components/Product/AboutBook";
import Banner from "@/components/Product/Banner";
import Comments from "@/components/Comments";
import Description from "@/components/Product/Description";
import Examples from "@/components/Product/Examples";
import Hero from "@/components/Product/Hero";
import Sellers from "@/components/Product/Sellers";
import Tabs from "@/components/Product/Tabs";
import Video from "@/components/Product/Video";
import useGetRequest from "@/hooks/useGetRequest";
import {useRouter} from "next/router";
import {Spinner} from "@heroui/react";

const Product = () => {
    const {query} = useRouter()
    const {id} = query

    const [product] = useGetRequest(id ? `/product/show/${id}` : null)

    return (
        <>
            {product ? <main dir='rtl' className="my-10">
                <Hero product={product}/>
                <div className="container sm:px-10 grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner product={product}/>
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs/>
                        <Sellers sellers={product.sellers} baseProduct={product}/>
                        <AboutBook product={product}/>
                        <Description product={product}/>
                        <Examples images={product?.sample_images}/>
                        <Video movie={product?.video} image={product?.image}/>
                        <Comments id={id} url="product"/>
                    </div>
                </div>
            </main> : <div className="centerOfParent w-full min-h-64"><Spinner color="success" label="در حال بارگزاری"/>
            </div>}
        </>
    );
};

export default Product;