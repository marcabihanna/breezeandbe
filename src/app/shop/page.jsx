import React from "react";
import SlideShow from "@/components/Home/SlideShow";
import ShopNow from "@/components/Home/ShopNow";
import Gallery from "@/components/Home/Gallery";
import Footer from "@/components/Home/Footer";
import ProductSlider from "@/components/Shop/ProductSlider";
import { fetchData } from "@/lib/fetchData";
import Error from "@/components/Error";

export const metadata = {
  title: "SHOP NOW",
  description: "EVERY DROP WEAVES A TALE OF TIMELESS , RADIANT HEALTH",
};

const Shop = async () => {
  const { data, error } = await fetchData("all_products");
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <>
          <SlideShow slides={data?.slider} />
          <ProductSlider products={data?.all_products?.reverse()} />
          <ShopNow data={data?.call_to_action[0]} />
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
};

export default Shop;
