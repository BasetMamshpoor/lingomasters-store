import AboutBook from "@/components/Product/AboutBook";
import Banner from "@/components/Product/Banner";
import Comments from "@/components/Product/Comments";
import Description from "@/components/Product/Description";
import Examples from "@/components/Product/Examples";
import Hero from "@/components/Product/Hero";
import Sellers from "@/components/Product/Sellers";
import Tabs from "@/components/Product/Tabs";
import Video from "@/components/Product/Video";
import useGetRequest from "@/hooks/useGetRequest";
import { useRouter } from "next/router";

const Product = () => {
    const { query } = useRouter()
    const { id } = query
    if(!id) 
        return
    
    const [product] = useGetRequest(`/product/show/${id}`)

    return (
        <>
            <main dir='rtl'>
                <Hero product={product} />
                <div className="container sm:px-10 grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner product={product} />
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs />
                        <Sellers />
                        <AboutBook product={product}/>
                        <Description product={product} />
                        <Examples images={product?.sample_images}/>
                        <Video images={product?.video}/>
                        <Comments id={id} />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Product;