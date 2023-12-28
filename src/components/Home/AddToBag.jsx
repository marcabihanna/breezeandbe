"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const AddToBag = ({ data, id }) => {
  const router = useRouter();
  const [vibrating, setVibrating] = useState(false);

  useEffect(() => {
    const intervalID = setInterval(() => {
      setVibrating((prev) => !prev);
    }, 5000);

    return () => clearInterval(intervalID);
  }, []);

  return (
    <div className="relative hScreen flex justify-center items-center">
      <video
        src="/videoBackgroundProduct.mp4"
        loop
        autoPlay
        muted
        playsInline
        className="opacity-60 absolute top-0 left-0 w-full h-full object-cover"
      />
      <div className="relative px-5 flex flex-col space-y-7 items-center text-center">
        <motion.span
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          dangerouslySetInnerHTML={{ __html: data?.description }}
          className="text-2xl md:text-4xl max-w-md md:max-w-xl"
        ></motion.span>
        <Link
          href={`/shop/${id}`}
          className={` ${vibrating && "vibrate"} rounded-3xl`}
        >
          <motion.button
            initial={{ opacity: 0, y: -100 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            // viewport={{ once: true }}
            className={`bg-mainColor text-secondaryColor md:min-w-[250px] rounded-3xl py-2 px-5`}
          >
            <span
              dangerouslySetInnerHTML={{ __html: data?.button_text }}
            ></span>
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default AddToBag;
