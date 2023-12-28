"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";
import "swiper/css/autoplay";
import { usePathname } from "next/navigation";
import Lottie from "react-lottie-player";
import lottieJson from "../../../public/animatedButton.json";
import { motion } from "framer-motion";

const SlideShow = ({ slides }) => {
  const path = usePathname();
  return (
    <div className="pt-[130px]">
      <Swiper
        modules={[Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
        className="slideShow"
      >
        {slides?.map((slide, index) => (
          <SwiperSlide key={index} className="swiper-slide">
            <div className="relative hScreen flex justify-center items-end ">
              <Image
                src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/${slide?.images[0]}`}
                fill
                alt="sliderImage"
                style={{ objectPosition: "50% 80%" }}
                className="object-cover"
              />
              {/* title section */}
              <div
                className={`text-secondaryColor text-center flex flex-col justify-center items-center space-y-1 ${
                  path !== "/" ? "mb-10" : "mb-0"
                } px-5 sm:px-10 md:px-14 lg:px-16`}
              >
                <motion.h1
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  // viewport={{ once: true }}
                  style={{ textShadow: "0px 0px 36px #0000009F" }}
                  className={`font-extrabold text-[25px] md:text-[30px] tracking-[3.5px] drop-shadow-xl px-5 xl:px-0 max-w-6xl`}
                  dangerouslySetInnerHTML={{ __html: slide?.title }}
                ></motion.h1>
                <motion.h2
                  initial={{ opacity: 0, y: -100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7 }}
                  // viewport={{ once: true }}
                  style={{ textShadow: "0px 0px 36px #0000009F" }}
                  className="font-light px-5 xl:px-0 max-w-3xl text-[20px] md:text-[22px] drop-shadow-xl"
                  dangerouslySetInnerHTML={{ __html: slide?.description }}
                ></motion.h2>
                {path == "/" && (
                  <Lottie
                    animationData={lottieJson}
                    speed="1"
                    style={{ width: "66px", height: "66px" }}
                    loop
                    play
                  ></Lottie>
                )}
              </div>
              {slides?.length > 1 && (
                <div className="absolute right-5 md:right-10 bottom-[10px] text-4xl text-secondaryColor">
                  <span className="font-medium">{index + 1}</span>
                  <span className="font-thin">/{slides?.length}</span>
                </div>
              )}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SlideShow;
