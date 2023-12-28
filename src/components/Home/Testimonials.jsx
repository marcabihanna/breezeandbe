"use client";
import Image from "next/image";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

const Testimonials = ({ testimonials }) => {
  const slides = [
    {
      name: "LOREM IPSUM",
      text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    },
    {
      name: "LOREM IPSUM 11",
      text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    },
    {
      name: "LOREM IPSUM 22",
      text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    },
    {
      name: "LOREM IPSUM 33",
      text: "Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type",
    },
  ];
  return (
    <Swiper
      modules={[Navigation, Pagination, Autoplay]}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop
      pagination={{ clickable: true }}
      navigation
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="testimonials"
    >
      {testimonials?.map((slide, index) => {
        return (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="px-5 relative hScreen flex flex-col space-y-10 justify-center items-center text-center">
              <Image
                src={"/testimonials.svg"}
                alt="testimonials"
                width={150}
                height={150}
                className="absolute opacity-20"
              />
              <motion.h1
                initial={{ opacity: 0, y: -100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                // viewport={{ once: true }}
                className="relative text-2xl md:text-4xl"
              >
                REAL STORIES
                <span className="font-extrabold">, REAL RESULTS</span>
              </motion.h1>
              <motion.div
                initial={{ opacity: 0, y: 100 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.1 }}
                // viewport={{ once: true }}
                className="relative flex flex-col space-y-10 max-w-sm md:max-w-lg"
              >
                <span
                  className="font-medium"
                  dangerouslySetInnerHTML={{ __html: slide?.description }}
                ></span>
                <h2
                  className="font-extrabold"
                  dangerouslySetInnerHTML={{ __html: slide.name }}
                ></h2>
              </motion.div>
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default Testimonials;
