import Banner_HomePage from "./components/home_page/banner/Banner_HomePage";
import Banner02 from "./components/home_page/banner02/Banner02";
import Detail_Card from "./components/home_page/detai_cart/Detail-Card";
import Electronic_Page from "./components/home_page/electronic/Electronic_Page";
import Feature_Brands from "./components/home_page/feature_brand/Feature_Brands";
import Carousel_Page from "./components/home_page/herosection/Carousel_Page";
import Home_Category from "./components/home_page/home_category/Home_Category";
import Marquee_Text_Home from "./components/home_page/marquee_text/Marquee";
import Men_Fashion from "./components/home_page/men_fashion/Men_Fashion";
import Product_Deal from "./components/home_page/product_deal/Product_Deal";
import Selected_Product from "./components/home_page/select_product/Selected_Product";
import Women_Banner from "./components/home_page/women_banner/Women_Banner";
import Women_Fashion from "./components/home_page/women_fashion/Women_Fashion";


export default function Home() {
  return (
    <main className='mt-6'>
      <section className="px-6 hero-section">
        <Carousel_Page />
      </section>

      <section className="px-6 mt-8 hero-section">
        <Detail_Card />
      </section>

      <section className="px-6 mt-16 hero-section">
        <Home_Category/>
      </section>

      <section className="px-6 mt-14 hero-section">
        <Marquee_Text_Home />
      </section>

      <section className="px-6 mt-14 hero-section">
       <Product_Deal />
      </section>

      <section className="px-6 mt-14 hero-section">
       <Banner_HomePage />
      </section>

      <section className="px-6 mt-14 hero-section">
       <Electronic_Page />
      </section>

      <section className="px-6 mt-14 hero-section">
        <Banner02 />
      </section>

      <section className="px-6 mt-14 hero-section">
        <Men_Fashion />
      </section>

      <section className="px-6 mt-14 hero-section">
        <Women_Banner />
      </section>

      <section className="px-6 mt-14 hero-section">
        <Women_Fashion />
      </section>

      <section className="px-6 mt-14 hero-section">
        <Feature_Brands />
      </section>

      <section className="px-6 mt-14 hero-section">
        <Selected_Product />
      </section>

    </main>
  
  );
}
