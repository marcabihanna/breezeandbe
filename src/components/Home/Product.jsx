"use client";
import Image from "next/image";
import React from "react";
import { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";

const Product = ({ product, index }) => {
  const router = useRouter();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.60 1"],
  });
  const yPosition = useTransform(scrollYProgress, [0, 1], ["-100%", "100%"]);

  // custom breakpoint
  const [breakpoint, setBreakpoint] = useState("");
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width < 1024) {
        setBreakpoint("smallScreen");
      } else {
        setBreakpoint("largeScreen");
      }
    };

    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <motion.div ref={ref} className="px-10">
      <motion.h1
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="text-[30px] lg:text-[43px] text-center mt-40 mb-14 lg:my-0"
      >
        <Link href={`/shop/${product?.uuid}`}>{product?.title}</Link>
      </motion.h1>

      <div className="flex flex-col lg:flex-row lg:justify-between overflow-x-hidden">
        {/* left */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="self-start lg:pt-32 lg:pb-80 flex flex-col space-y-5 lg:max-w-[400px]"
        >
          <Link href={`/shop/${product?.uuid}`} className="w-fit">
            <h2
              className={`cursor-pointer ${
                index == 0
                  ? "text-activeColorG"
                  : index == 1
                  ? "text-activeColorR"
                  : "text-activeColorB"
              } font-black text-xl`}
            >
              {product?.title}
            </h2>
          </Link>
          <div
            dangerouslySetInnerHTML={{ __html: product?.home_description }}
            className="text-xl leading-[30px] font-semibold"
          ></div>
          <div className="self-start border-[2px] border-mainColor rounded-full py-1 px-6">
            {product?.price}$
          </div>
        </motion.div>

        {/* middle */}
        {breakpoint == "largeScreen" ? (
          <div className="w-[300px] min-h-full overflow-clip">
            <motion.div
              style={{
                y: yPosition,
              }}
              className="w-full h-full transition ease-out"
            >
              <Image
                src={`/${index}.png`}
                alt={product?.title}
                width={300}
                height={350}
                priority={true}
                className="w-full"
              />
            </motion.div>
          </div>
        ) : (
          <motion.div
            initial={{ opacity: 0, x: "-100%" }}
            whileInView={{ opacity: 1, x: "0" }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className={`w-[200px] ${
              index == 2 ? "h-[175px]" : "h-[350px]"
            } my-5 self-center`}
          >
            <Image
              src={`/${index}.png`}
              alt={product?.title}
              width={200}
              height={index == 2 ? 175 : 350}
              priority={true}
              className="w-full h-full"
            />
          </motion.div>
        )}

        {/* right */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          dangerouslySetInnerHTML={{ __html: product?.benefits }}
          className="self-end lg:pt-32 lg:pb-20 lg:max-w-[400px] list-disc flex flex-col space-y-3 text-[20px] leading-[25px]"
        ></motion.div>
      </div>
    </motion.div>
  );
};

export default Product;
