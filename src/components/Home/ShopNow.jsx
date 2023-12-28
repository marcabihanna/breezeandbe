"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const ShopNow = ({ data }) => {
  const router = useRouter();
  return (
    <div className="hScreen py-10 px-5 bg-mainColor text-secondaryColor flex flex-col justify-center items-center text-center">
      <div className="relative h-[200px] md:h-[300px] w-[200px] md:w-[300px]">
        <Image
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${data?.image}`}
          alt={data?.title}
          fill
          className="rounded-[33px]"
        />
      </div>
      <div className="relative -mt-[90px] md:-mt-[122px] text-[45px] md:text-[75px] max-w-5xl flex flex-col space-y-7 justify-center items-center">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="leading-[70px] md:leading-[100px] font-light"
        >
          {data?.title}{" "}
          <span
            className="font-medium"
            dangerouslySetInnerHTML={{ __html: data?.description }}
          ></span>
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          onClick={() => router.push("/shop")}
          className="text-base border-2 border-secondaryColor md:min-w-[250px] rounded-3xl py-2 px-5 hover:bg-secondaryColor hover:text-mainColor"
        >
          {data?.button_text}
        </motion.button>
      </div>
    </div>
  );
};

export default ShopNow;
