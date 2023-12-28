import React from "react";
import VideoComponents from "@/components/Checkout/VideoComponents";
import Gallery from "@/components/Home/Gallery";
import Footer from "@/components/Home/Footer";
import { postData } from "@/lib/postData";
import { fetchData } from "@/lib/fetchData";
import Error from "@/components/Error";
import ProductDetails from "@/components/ProductsDetailsComponents/ProductDetails";
import Products from "@/components/Checkout/Products";

export async function generateMetadata({ params: { id } }) {
  const { data, error } = await postData("product", { uuid: id });

  if (error) {
    return {
      title: "PRODUCT NOT FOUND",
    };
  }
  return {
    title: data?.product?.title,
    description: data?.product?.description,

    openGraph: {
      // title: data?.product?.title,
      // description: data?.product?.description,
      // url: `https://www.breezeandbe.com/shop/${id}`,
      // siteName: "Breeze And Be",
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_IMAGES_URL}/${data?.product?.gallery_image[0]}`,
          width: 1600,
          height: 1600,
        },
      ],
      locale: "en_US",
      type: "website",
    },
  };
}
export async function generateStaticParams() {
  const { data, error } = await fetchData("all_products");

  return data?.all_products?.map((one) => ({
    id: one.uuid,
  }));
}

const Details = async ({ params: { id } }) => {
  const { data, error } = await postData("product", { uuid: id });
  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <div className="pt-[130px]">
          <ProductDetails product={data?.product} />
          <Products allProducts={data?.all_products} />
          <VideoComponents data={data?.call_to_action} />
          <Gallery
            image1={data?.footer[0]?.image1}
            image2={data?.footer[0]?.image2}
            image3={data?.footer[0]?.image3}
            image4={data?.footer[0]?.image4}
          />
          <Footer contact={data?.contact[0]} />
        </div>
      )}
    </>
  );
};

export default Details;
