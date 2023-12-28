"use client";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

const VideoComponents = ({ data }) => {
  const router = useRouter();
  return (
    <div className="relative videoHeight">
      <div className="flex justify-center items-center h-full">
        <video
          id="myVideo"
          src="/videoBackground.mp4"
          loop
          autoPlay
          muted
          playsInline
          className="w-full h-full object-cover"
        />
      </div>
      <div className="bg-mainColor/70 text-secondaryColor absolute top-0 w-full h-full flex flex-col space-y-10 md:space-y-20 justify-end py-10 md:py-20 items-center px-5">
        <motion.h1
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-[40px] sm:text-[85px] max-w-6xl text-center font-light leading-[70px] sm:leading-[90px]"
        >
          {data?.title}{" "}
          <span
            dangerouslySetInnerHTML={{ __html: data?.description }}
            className="font-medium"
          ></span>
        </motion.h1>
        <motion.button
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          onClick={() => router.push("/shop")}
          className="border-2 border-secondaryColor rounded-full px-2 py-2 min-w-[150px] sm:min-w-[250px] text-center hover:bg-secondaryColor hover:text-mainColor"
          dangerouslySetInnerHTML={{ __html: data?.button_text }}
        ></motion.button>
      </div>
    </div>
  );
};

export default VideoComponents;
