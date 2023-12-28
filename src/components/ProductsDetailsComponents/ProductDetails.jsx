"use client";
import React, { useState } from "react";
import ProductPhotosSlider from "./ProductPhotosSlider";
import toast from "react-hot-toast";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";

const ProductDetails = ({ product }) => {
  const [qty, setQty] = useState(1);

  const addToBag = () => {
    if (!localStorage.getItem(product?.uuid)) {
      localStorage.setItem(
        product?.uuid,
        JSON.stringify({
          img: `${process.env.NEXT_PUBLIC_IMAGES_URL}/${product?.gallery_image[0]}`,
          text: product?.title,
          qty,
          price: product?.price,
        })
      );

      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
            <span>Item added to your cart</span>
          </div>
        ),
        {
          position: "top-right",
          style: {
            borderRadius: "10px",
            borderWidth: "1px",
            borderColor: "white",
            background: "#171717",
          },
        }
      );
    } else {
      localStorage.removeItem(product?.uuid);
      localStorage.setItem(
        product?.uuid,
        JSON.stringify({
          img: `${process.env.NEXT_PUBLIC_IMAGES_URL}/${product?.gallery_image[0]}`,
          text: product?.title,
          qty,
          price: product?.price,
        })
      );

      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
            <span>Item updated in your cart</span>
          </div>
        ),
        {
          position: "top-right",
          style: {
            borderRadius: "10px",
            borderWidth: "1px",
            borderColor: "white",
            background: "#171717",
          },
        }
      );
    }
  };
  const [selectedKeyFeatured, setSelectedKeyFeatured] = useState(
    Object.keys(product?.key_featured)?.length > 0
      ? Object.keys(product?.key_featured)[0]
      : ""
  );

  return (
    <div className="overflow-x-hidden hScreen px-5 md:px-10 pb-10 flex flex-col lg:items-center lg:flex-row lg:justify-start space-y-14 lg:space-y-0 lg:space-x-14 xl:space-x-20 lg:px-20 xl:px-40">
      {/* slider */}
      <motion.div
        initial={{ opacity: 0, x: "-100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="self-center w-full sm:w-[400px] sm:min-w-[400px] xl:w-[450px] xl:min-w-[450px] h-[500px] lg:h-[550px]"
      >
        <ProductPhotosSlider slides={product?.gallery_image} />
      </motion.div>
      {/* Details */}
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        className="lg:pt-10 flex flex-col xl:max-w-3xl"
      >
        <span className="font-light">SKIN CARE</span>
        <h1 className="font-black text-[25px]">{product?.title}</h1>
        <div
          dangerouslySetInnerHTML={{ __html: product?.description }}
          className="tracking-wide text-[20px] leading-[23px] mb-3"
        ></div>
        {product?.size !== "0" && (
          <div className="bg-mainColor text-secondaryColor self-start rounded-full px-5 py-1">
            {product?.size}
          </div>
        )}

        {/* ingredients */}
        <div className="bg-activeColorRBetween p-5 rounded-[22px] flex flex-col space-y-3 mt-3">
          <span>FEATURED INGREDIENTS</span>
          {Object.keys(product?.key_featured)?.length > 0 && (
            <div className="flex flex-wrap">
              {Object.keys(product?.key_featured)?.map((one, index) => {
                return (
                  <div
                    onClick={() => setSelectedKeyFeatured(one)}
                    key={index}
                    className={`${
                      one == selectedKeyFeatured
                        ? "bg-activeColorB text-secondaryColor"
                        : "bg-secondaryColor text-gray-500"
                    } hover:bg-activeColorB hover:cursor-pointer hover:text-secondaryColor px-5 py-1 rounded-full my-[5px] mr-3`}
                  >
                    {one}
                  </div>
                );
              })}
            </div>
          )}

          <AnimatePresence mode="wait">
            <motion.div
              key={selectedKeyFeatured}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              dangerouslySetInnerHTML={{
                __html:
                  selectedKeyFeatured &&
                  product?.key_featured[selectedKeyFeatured],
              }}
            ></motion.div>
          </AnimatePresence>
        </div>
        {/* + and - */}
        <div className="my-3 flex justify-between items-center space-x-2 px-9">
          <span
            onClick={() => setQty((prev) => (prev == 1 ? prev : prev - 1))}
            className="font-black bg-secondaryColor rounded-full text-[22px] w-8 h-8 flex justify-center items-center cursor-pointer select-none hover:bg-mainColor hover:text-secondaryColor"
          >
            -
          </span>
          <span className="font-black text-[22px]">{qty}</span>
          <span
            onClick={() => setQty((prev) => prev + 1)}
            className="font-black bg-secondaryColor rounded-full text-[22px] w-8 h-8 flex justify-center items-center cursor-pointer select-none hover:bg-mainColor hover:text-secondaryColor"
          >
            +
          </span>
        </div>
        {/* add to bag */}
        <button
          onClick={addToBag}
          className="border-[2px] border-mainColor hover:bg-mainColor hover:text-secondaryColor text-center rounded-3xl py-3 px-5 font-light flex justify-center items-center"
        >
          ADD TO BAG |&nbsp;
          <span className="font-bold flex space-x-[2px] items-start">
            <span>{product?.price}</span>
            <span className="text-[10px]">$</span>
          </span>
        </button>
      </motion.div>
    </div>
  );
};

export default ProductDetails;
