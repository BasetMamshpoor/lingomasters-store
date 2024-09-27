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
import Link from "next/link";

export default function Page() {
  return (
    <>
      <div className="min-h-screen">
        <div className="flex items-center gap-4 my-10">
          <Link href='/category/printed'>دسته بندی</Link>
          <Link href='/product/1'>دیتیل محصول</Link>
          <Link href='/rules'>قوانین</Link>
          <Link href='/faq'>سوالات</Link>
          <Link href='/checkout/cart'>سبد خرید</Link>
          <Link href='/checkout/shipping'>آدرس دهی</Link>
        </div>
        <Carousel />
        <Categories />
        <OfferSlider />
        <Slider title='پکیج های آموزشی' icon={<Book className='sm:w-10 sm:h-10' />} />
        <div className="container grid sm:grid-cols-2 gap-6 my-12">
          <Card bgSrc='/images/video/1.jpg' />
          <Card bgSrc='/images/video/1.jpg' />
        </div>
        <Slider title="جدید ترین ها" icon={<New className='sm:w-10 sm:h-10' />} />
        <div className="max-w-[1280px] w-full mx-auto grid sm:grid-cols-2 items-center gap-6 my-12">
          <Banner />
          <Banner />
        </div>
        <Slider title="پرفروش ترین ها" icon={<MostSell className='sm:w-10 sm:h-10' />} />
        <div className="max-w-[1280px] w-full mx-auto grid sm:grid-cols-2 items-center gap-6 my-12">
          <Banner />
          <Banner />
        </div>
        <Slider title='وسایل کمک آموزشی' icon={<Stuff className='sm:w-10 sm:h-10' />} />
        <div className="max-w-[1280px] w-full mx-auto grid sm:grid-cols-2 items-center gap-6 my-12">
          <Banner />
          <Banner />
        </div>
      </div>
    </>
  );
}
