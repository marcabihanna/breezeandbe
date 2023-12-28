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

      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="text-[40px] font-light leading-[60px] max-w-[1200px] mb-7"
      >
        &quot;{data2?.title}&quot;
      </motion.h1>
      <motion.h3
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        dangerouslySetInnerHTML={{ __html: data2?.description }}
        className="text-[25px] max-w-[1050px] mb-10 leading-[47px]"
      ></motion.h3>
    </div>
  );
};

export default Intro;
