import SlideShow from "@/components/Home/SlideShow";
import Intro from "@/components/Home/Intro";
import AddToBag from "@/components/Home/AddToBag";
import ShopNow from "@/components/Home/ShopNow";
import Gallery from "@/components/Home/Gallery";
import Footer from "@/components/Home/Footer";
import Testimonials from "@/components/Home/Testimonials";
import { fetchData } from "@/lib/fetchData";
import Error from "@/components/Error";
import Product from "@/components/Home/Product";
import OfferPopup from "@/components/Home/OfferPopup";
export default async function Home() {
  const { data, error } = await fetchData("home");
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <OfferPopup id={data?.latestProduct?.uuid} />
          <SlideShow slides={data?.slider} />
          <Intro data={data?.top_description} data2={data?.top_description2} />
          <div className="mt-10 mb-20">
            {data?.all_products?.map((one, index) => {
              return <Product key={index} index={index} product={one} />;
            })}
          </div>
          <AddToBag
            id={data?.latestProduct?.uuid}
            data={data?.call_to_action}
          />
          <Testimonials testimonials={data?.title_testimonial} />
          <ShopNow data={data?.call_to_action2} />
          <Gallery
            image1={data?.footer[0]?.image1}
            image2={data?.footer[0]?.image2}
            image3={data?.footer[0]?.image3}
            image4={data?.footer[0]?.image4}
          />
          <Footer contact={data?.contact[0]} />
        </>
      )}
    </>
  );
}
