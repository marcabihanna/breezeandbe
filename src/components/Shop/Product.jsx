"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Product = ({ img, text, id, price }) => {
  const router = useRouter();

  const addToBag = () => {
    if (!localStorage.getItem(id)) {
      localStorage.setItem(id, JSON.stringify({ img, text, qty: 1, price }));
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
    <div className="flex flex-col justify-center items-center space-y-5">
      <Link href={`/shop/${id}`} className="rounded-3xl">
        <Image
          src={img}
          alt={text}
          width={325}
          height={325}
          className="hover:opacity-75 transition-opacity ease-linear duration-100 h-[175px] w-[175px] sm:w-[250px] sm:h-[250px] lg:w-[325px] lg:h-[325px] rounded-3xl shadow"
        />
      </Link>
      <Link href={`/shop/${id}`}>
        <h2 className="cursor-pointer font-bold text-center text-sm sm:text-base max-w-[175px] sm:max-w-[300px]">
          {text}
        </h2>
      </Link>
      <button
        onClick={addToBag}
        className="bg-mainColor text-secondaryColor text-center max-w-[175px] sm:max-w-[300px] text-sm rounded-3xl md:min-w-[180px] py-2 px-5 font-light addToBag"
      >
        ADD TO BAG |&nbsp;<span className="font-bold"> {price}$ </span>
      </button>
    </div>
  );
};

export default Product;
