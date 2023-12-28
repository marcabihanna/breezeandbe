"use client";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

const Story = ({ data }) => {
  return (
    <div className="bg-mainColor hScreen flex flex-col space-y-5 md:space-y-0 md:flex-row overflow-x-hidden">
      <div className="bg-activeColorRDark flex md:justify-center items-center md:max-w-[90px] max-h-[300px] p-5 md:p-3 lg:p-5 text-2xl md:text-4xl">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          // viewport={{ once: true }}
          className="md:min-w-[200px] md:transform md:-rotate-90"
        >
          {data?.title}
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        // viewport={{ once: true }}
        className="md:hidden mx-5 pt-5 self-center"
      >
        <Image
          src={"/footerBackgroundWhite.svg"}
          width={100}
          height={100}
          alt="logo"
        />
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: "100%" }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="w-full p-5 md:py-20 md:px-32 lg:px-52 flex justify-center md:justify-start items-center text-secondaryColor leading-[30px] text-[18px]"
      >
        <div className="relative max-w-lg lg:max-w-3xl">
          <div dangerouslySetInnerHTML={{ __html: data?.description }}></div>
          <Image
            src={"/footerBackgroundWhite.svg"}
            width={100}
            height={100}
            alt="logo"
            className="absolute -top-10 lg:-top-9 -right-24 lg:-right-28 hidden md:block"
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Story;
