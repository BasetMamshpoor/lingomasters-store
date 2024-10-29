import AboutBook from "@/components/Product/AboutBook";
import Banner from "@/components/Product/Banner";
import Comments from "@/components/Product/Comments";
import Description from "@/components/Product/Description";
import Hero from "@/components/Product/Hero";
import Sellers from "@/components/Product/Sellers";
import Tabs from "@/components/Product/Tabs";
import useGetRequest from "@/hooks/useGetRequest";
import { useRouter } from "next/router";

const Product = () => {
    const { query } = useRouter()
    const { id } = query
    if (!id)
        return

    const [product] = useGetRequest(`/educational-product/show/${id}`)

    return (
        <>
            {product && <main dir='rtl'>
                <Hero product={product} />
                <div className="container sm:px-10 grid lg:grid-cols-6 grid-cols-1 gap-6">
                    <div className="lg:col-span-2">
                        <Banner product={product} />
                    </div>
                    <div className="flex flex-col gap-10 lg:col-span-4">
                        <Tabs />
                        <Sellers />
                        <AboutBook product={product} />
                        <Description product={product} />
                        <Comments id={id} />
                    </div>
                </div>
            </main>}
        </>
    );
};

export default Product;