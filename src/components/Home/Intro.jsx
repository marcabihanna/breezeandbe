"use client";
import React from "react";
import { motion } from "framer-motion";

const Intro = ({ data, data2 }) => {
  return (
    <div className="px-5 pt-20 flex flex-col justify-center items-center text-center">
      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="font-bold text-[25px] max-w-[1050px] mb-1"
      >
        {data?.title}
      </motion.h3>
      <motion.div
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        dangerouslySetInnerHTML={{ __html: data?.description }}
        className="text-[25px] max-w-[1050px] mb-10 leading-[47px]"
      ></motion.div>
    </div>
  );
};

export default Intro;
