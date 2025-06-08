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
import Slider from "@/components/Sliders/Slider";

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
                        <Sellers baseProduct={product}/>
                        <AboutBook product={product}/>
                        <Description product={product}/>
                        <Examples images={product?.sample_images}/>
                        <Video movie={product?.video} image={product?.image}/>
                        <Comments id={id} url="product"/>
                    </div>
                    <div className="mt-20 w-full lg:col-span-6 col-span-1">
                        {!!product.similar_by_category.length &&
                            <Slider data={product.similar_by_category} title={`کتاب های ${product.category} مشابه`}/>}
                        {!!product.similar_by_author.length &&
                            <Slider data={product.similar_by_author} title="دیگر کتاب های این نویسنده"/>}
                        {!!product.similar_by_publication.length && <Slider data={product.similar_by_publication}
                                                                            title={`دیگر کتاب های انتشارات ${product.publication}`}/>}
                        {!!product.similar_by_goal.length &&
                            <Slider data={product.similar_by_goal} title={`دیگر کتاب ها با موضوع ${product.subject}`}/>}
                    </div>
                </div>
            </main> : <div className="centerOfParent w-full min-h-64"><Spinner color="success" label="در حال بارگزاری"/>
            </div>}
        </>
    );
};

export default Product;