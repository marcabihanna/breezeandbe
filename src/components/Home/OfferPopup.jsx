"use client";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";

const OfferPopup = ({ id }) => {
  const router = useRouter();
  useEffect(() => {
    const shown = document.cookie
      .split("; ")
      .find((c) => c.startsWith("offer="));

    if (!shown) {
      setTimeout(() => {
        if (document.querySelector("#offer")) {
          document.body.style.overflow = "hidden";
          document.querySelector("#offer").parentNode.style.transform = "none";
          document.querySelector("#offer").style.display = "flex";
          document.cookie = "offer=true";
        }
      }, 5000);
    }
  }, []);

  const close = () => {
    document.body.style.overflowX = "hidden";
    document.body.style.overflowY = "auto";
    document.querySelector("#offer").parentNode.style.transform =
      "translateX(0%) translateZ(0px)";
    document.querySelector("#offer").style.display = "none";
  };

  return (
    <div
      id="offer"
      className="fixed z-[150] bg-black/50 w-full h-screen hidden justify-center items-center"
    >
      <div
        style={{ boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)" }}
        className="flex flex-col space-y-3 sm:space-y-0 sm:flex-row w-[95%] lg:w-[60%] bg-secondaryColor"
      >
        <div className="w-full sm:w-1/2 relative h-[250px] sm:h-auto sm:min-h-full">
          <Image
            src="/homeCreamBackground.jpg"
            alt="product package"
            fill
            className="object-cover"
          />
          <IoClose
            onClick={close}
            className="self-end text-[25px] hover:scale-[1.1] cursor-pointer transition-all ease-linear duration-100 text-gray-300 mb-10 mt-1 mr-1 sm:hidden absolute top-1 right-1"
          />
        </div>
        <div className="w-full sm:w-1/2 pb-7 sm:pb-12 pl-2 sm:pl-3 md:pl-12 flex flex-col text-mainColor">
          <IoClose
            onClick={close}
            className="self-end text-[25px] hover:scale-[1.1] cursor-pointer transition-all ease-linear duration-100 text-gray-300 mb-10 mt-1 mr-1 hidden sm:block"
          />
          <h1 className="font-black text-[17px] sm:text-[27px] md:text-[30px] sm:max-w-min pr-2 sm:pr-3">
            SPECIAL CELEBRATORY PRICE FOR{" "}
            <span className="text-red-400">111$</span>
          </h1>
          <button
            onClick={() => {
              document.body.style.overflowX = "hidden";
              document.body.style.overflowY = "auto";
              document.querySelector("#offer").parentNode.style.transform =
                "translateX(0%) translateZ(0px)";
              router.push(`/shop/${id}`);
            }}
            className="border-[2px] border-mainColor hover:bg-mainColor hover:text-secondaryColor rounded-[50px] w-fit py-[5px]  px-3 sm:px-7 mt-3 text-center mr-2 sm:mr-3"
          >
            SHOP NOW
          </button>
          <div className="text-gray-400 pr-2 sm:pr-3 text-[13px] sm:text-[16px]">
            <h3 className="font-bold mt-7 sm:mt-10 mb-5 sm:mb-7">Package</h3>
            <ul className="list-disc ml-5">
              <li>Purifying Cream Cleanser</li>
              <li>Radiant Boost Serum</li>
              <li>Advanced Revitalizing Cream</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OfferPopup;
