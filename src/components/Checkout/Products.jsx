"use client";
import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import Link from "next/link";

const Products = ({ ids, setRelevantKeys, allProducts }) => {
  const router = useRouter();
  const addToBag = (id, img, text, qty, price) => {
    if (!localStorage.getItem(id)) {
      localStorage.setItem(
        id,
        JSON.stringify({
          img: `${process.env.NEXT_PUBLIC_IMAGES_URL}/${img}`,
          text,
          qty,
          price,
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
      if (ids) {
        setRelevantKeys(
          ids?.filter((id) => Object.keys(localStorage)?.includes(id))
        );
      }
    } else {
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <IoMdCloseCircleOutline className="w-[30px] h-[30px] text-red-600" />
            <span>Item already in your cart</span>
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
  return (
    <div className="px-5 md:px-10 py-20 flex justify-evenly items-center xl:px-20 flex-wrap hScreen bg-mainColor overflow-x-hidden">
      {allProducts?.map((one, index) => {
        return (
          <motion.div
            initial={{ opacity: 0, x: -100 * index }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            key={index}
            className="my-5 mx-3 sm:m-5 flex flex-col items-center space-y-3 text-secondaryColor h-fit"
          >
            <Link href={`/shop/${one?.uuid}`} className="rounded-3xl">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${one?.gallery_image[0]}`}
                alt={one?.title}
                width={300}
                height={300}
                className="w-[240px] h-[240px] sm:w-[300px] sm:h-[300px] rounded-3xl cursor-pointer hover:opacity-75"
              />
            </Link>

            <Link href={`/shop/${one?.uuid}`}>
              <h2 className="cursor-pointer min-h-[56px] flex justify-center items-center font-black text-center text-base sm:text-lg max-w-[240px]">
                {one?.title}
              </h2>
            </Link>

            <button
              onClick={() =>
                addToBag(
                  one?.uuid,
                  one?.gallery_image[0],
                  one?.title,
                  1,
                  one?.price
                )
              }
              className="bg-mainColor border-[2px] border-secondaryColor hover:bg-secondaryColor hover:text-mainColor text-center max-w-[300px] sm:min-w-[260px] text-sm rounded-3xl py-[10px] px-5 font-light"
            >
              ADD TO BAG | <span className="font-bold">{one?.price}$</span>
            </button>
          </motion.div>
        );
      })}
    </div>
  );
};

export default Products;
