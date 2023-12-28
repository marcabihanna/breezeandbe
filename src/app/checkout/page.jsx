import React from "react";
import Footer from "@/components/Home/Footer";
import Gallery from "@/components/Home/Gallery";
import VideoComponents from "@/components/Checkout/VideoComponents";
import HowToUse from "@/components/Checkout/HowToUse";
import { fetchData } from "@/lib/fetchData";
import FormAndProduct from "../../components/Checkout/FormAndProduct";
import Error from "@/components/Error";

export const metadata = {
  title: "MY BAG",
  description: "EXPERIENCE THE BREEZE & BE YOUR BEST SELF.",
};

const Checkout = async () => {
  const { data, error } = await fetchData("checkout");
  var ids = [];
  if (data) {
    ids = data?.all_products?.map((one) => one.uuid);
    ids.push(data?.latestProduct?.uuid);
  }

  return (
    <>
      {error ? (
        <Error error={error} />
      ) : (
        <div className="pt-[130px]">
          <FormAndProduct ids={ids} allProducts={data?.all_products} />
          {/* <HowToUse data={data?.how_to_use} /> */}
          <VideoComponents data={data?.call_to_action[0]} />
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

export default Checkout;
