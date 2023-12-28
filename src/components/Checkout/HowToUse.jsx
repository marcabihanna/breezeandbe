"use client";
import React from "react";
import { motion } from "framer-motion";

const HowToUse = ({ data }) => {
  return (
    <div className="hScreen bg-mainColor text-secondaryColor flex flex-col space-y-10 justify-center px-5 py-20 overflow-x-hidden x">
      <h1 className="text-[60px] sm:text-[100px] font-light tracking-wide text-center">
        HOW TO USE
      </h1>
      <div className="flex flex-col space-y-7 md:space-y-28">
        {/* first */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="relative md:left-[6%] lg:left-[10%] xl:left-[20%] flex flex-col border-[2px] border-bgColor rounded-2xl px-5 md:pl-14 md:pr-6 py-8 w-full md:w-[400px] lg:w-[500px]"
        >
          <span className="font-light">{data[0]?.title}</span>
          <span
            dangerouslySetInnerHTML={{ __html: data[0]?.description }}
            className="font-black"
          ></span>
          {/* second in big screen */}
          <motion.div
            initial={{ opacity: 0, x: "150%" }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="hidden md:flex absolute top-[70%] -right-[70%]  flex-col border-[2px] border-bgColor bg-bgColor text-mainColor rounded-2xl px-5 md:pl-14 md:pr-6 py-8 w-full md:w-[400px] lg:w-[500px]"
          >
            <span className="font-light">{data[1]?.title}</span>
            <span
              dangerouslySetInnerHTML={{ __html: data[1]?.description }}
              className="font-black"
            ></span>
          </motion.div>
        </motion.div>

        {/* second in small screen */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="md:hidden self-end relative md:right-0 lg:right-[2%] xl:right-[12%] md:-top-14 flex flex-col border-[2px] border-bgColor bg-bgColor text-mainColor rounded-2xl px-5 md:pl-14 md:pr-6 py-8 w-full md:w-[400px] lg:w-[500px]"
        >
          <span className="font-light">{data[1]?.title}</span>
          <span
            dangerouslySetInnerHTML={{ __html: data[1]?.description }}
            className="font-black"
          ></span>
        </motion.div>
        {/* third */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col border-[2px] border-bgColor rounded-2xl px-5 md:pl-14 md:pr-6 py-8 w-full md:w-[400px] lg:w-[500px] self-center"
        >
          <span className="font-light">{data[2]?.title}</span>
          <span
            dangerouslySetInnerHTML={{ __html: data[2]?.description }}
            className="font-black"
          ></span>
        </motion.div>
      </div>
    </div>
  );
};

export default HowToUse;
