"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Founder = ({ data }) => {
  return (
    <div className="hScreen flex flex-col md:flex-row overflow-x-hidden">
      <div className="bg-activeColorRDark flex md:justify-center items-center w-full md:max-w-[90px] p-5 md:p-3 lg:p-5 text-[30px] md:text-[50px] font-light">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
          className="md:min-w-[500px] md:transform md:-rotate-90"
        >
          {data?.title}
        </motion.div>
      </div>

      <Image
        src={
          data?.image
            ? `${process.env.NEXT_PUBLIC_IMAGES_URL}/${data?.image}`
            : "/theFounder.jpg"
        }
        alt={"The Founder"}
        width={300}
        height={585}
        priority={true}
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        className="w-full md:w-[300px] lg:w-[500px] md:min-h-full object-cover"
      />
      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="px-5 lg:px-12 py-5 lg:py-20 flex flex-col justify-center md:items-center leading-[30px] tracking-wide"
      >
        <span className="self-start mb-1 font-medium">
          <span className="text-4xl">Say hello</span>
          <span className="ml-5 font-normal max-w-[40rem] text-[1.2rem]">
            to Dr. Roy Dagher,
          </span>
        </span>
        <span
          className="founder font-normal max-w-[40rem] text-[1.2rem]"
          dangerouslySetInnerHTML={{ __html: data?.description2 }}
        ></span>
      </motion.div>
    </div>
  );
};

export default Founder;
