"use client";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import Product from "./Product";
import { motion } from "framer-motion";

const ProductSlider = ({ products }) => {
  const [slides, setSlides] = useState(products?.concat(products));

  return (
    <div className="px-5 py-20 flex flex-col space-y-16">
      <motion.h1
        initial={{ opacity: 0, y: -100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        // viewport={{ once: true }}
        className="text-[45px] md:text-[65px] font-light tracking-wide text-center"
      >
        PURE SKINCARE BLEND
      </motion.h1>
      <Swiper
        modules={[Navigation, Autoplay]}
        centeredSlides
        grabCursor={true}
        // autoplay={{
        //   delay: 10000,
        //   disableOnInteraction: false,
        // }}
        loop
        spaceBetween={20}
        slidesPerView={3}
        navigation
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="testimonials products w-full"
        breakpoints={{
          0: {
            slidesPerView: 1,
            spaceBetween: 5,
          },
          768: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }}
      >
        {slides?.map((slide, index) => {
          return (
            <SwiperSlide key={index} className="swiper-slide py-12 select-none">
              <Product
                id={slide.uuid}
                img={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${slide.gallery_image[0]}`}
                text={slide.title}
                price={slide?.price}
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  );
};

export default ProductSlider;
