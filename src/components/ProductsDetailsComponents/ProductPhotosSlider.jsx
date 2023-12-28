"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Pagination, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";
import Image from "next/image";
import { IsImage } from "@/lib/IsImage";

const ProductPhotosSlider = ({ slides }) => {
  const onAutoplayTimeLeft = (s, time, progress) => {
    s.el.style.setProperty("--width", (1 - progress) * 100);
  };
  return (
    <Swiper
      modules={[Pagination, Autoplay, EffectFade]}
      effect={"fade"}
      grabCursor={true}
      spaceBetween={0}
      slidesPerView={1}
      autoplay={{
        delay: 5000,
        disableOnInteraction: false,
      }}
      loop={true}
      pagination={{ clickable: true }}
      onAutoplayTimeLeft={onAutoplayTimeLeft}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      className="productDetails h-full"
    >
      {slides?.map((slide, index) => {
        return (
          <SwiperSlide
            key={index}
            className={`swiper-slide pt-10 ${
              slides?.length <= 1 ? "pb-7" : "pb-14 lg:pb-10"
            }`}
          >
            {IsImage(slide) ? (
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${slide}`}
                width={400}
                height={500}
                alt={"product photo"}
                className="w-full h-full rounded-[50px]"
              />
            ) : (
              <video
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${slide}`}
                loop
                autoPlay
                muted
                playsInline
                className="w-full h-full object-cover rounded-[50px]"
              />
            )}
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default ProductPhotosSlider;
