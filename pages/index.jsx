import Categories from "@/components/Category";
import Card from "@/components/Video/Card";
import Carousel from "@/components/Sliders/Carousel";
import OfferSlider from "@/components/Sliders/OfferSlider";
import Slider from "@/components/Sliders/Slider";
import Book from '@icons/book-box.svg';
import Stuff from '@icons/online-learning.svg';
import New from '@icons/new.svg';
import MostSell from '@icons/best-seller.svg';
import Banner from "@/components/Banner";
import useGetRequest from "@/hooks/useGetRequest";
import { useEffect, useState } from "react";

export default function Page() {

  const [data] = useGetRequest('/main-page')
  const [category, setCategory] = useState('')
  useEffect(() => {
    const category = JSON.parse(localStorage.getItem('category'))[0].slug
    setCategory(category)
  }, [])

  return (
    <>
      <div>
        <Carousel data={data?.sliders} />
        <Categories data={data?.categories} />
        <OfferSlider to={`/category/${category}?discount=true`} data={data?.discounted_products} />
        <Slider to={`/category/${category}`} data={data?.random_products} title='پکیج های آموزشی' icon={<Book className='sm:w-10 sm:h-10' />} />
        <div className="container grid sm:grid-cols-2 gap-6 my-12 [&>div]:mx-auto">
          <Card movie={data?.video_banners[0].path} bgSrc={data?.video_banners[0].cover} />
          <Card movie={data?.video_banners[1].path} bgSrc={data?.video_banners[1].cover} />
        </div>
        <Slider to={`/category/${category}?sort=newest`} data={data?.latest_products} title="جدید ترین ها" icon={<New className='sm:w-10 sm:h-10' />} New />
        <div className="max-w-[1280px] w-full mx-auto grid sm:grid-cols-2 items-center gap-6 my-12">
          <Banner withTag data={data?.baners.order1[0]} />
          <Banner withTag data={data?.baners.order1[1]} />
        </div>
        <Slider to={`/category/${category}?sort=bestselling`} data={data?.best_selling_products} title="پرفروش ترین ها" icon={<MostSell className='sm:w-10 sm:h-10' />} />
        <div className="max-w-[1280px] w-full mx-auto grid sm:grid-cols-2 items-center gap-6 my-12">
          <Banner withTag data={data?.baners.order2[0]} />
          <Banner withTag data={data?.baners.order2[1]} />
        </div>
        <Slider to='/educational-products' data={data?.latest_educational_products} title='وسایل کمک آموزشی' icon={<Stuff className='sm:w-10 sm:h-10' />} edu/>
        <div className="max-w-[1280px] w-full mx-auto grid sm:grid-cols-2 items-center gap-6 my-12">
          <Banner withTag data={data?.baners.order3[0]} />
          <Banner withTag data={data?.baners.order3[1]} />
        </div>
      </div>
    </>
  );
}
