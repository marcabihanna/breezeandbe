"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { IoMdCloseCircleOutline } from "react-icons/io";

const Back = () => {
  const router = useRouter();
  return (
    <div className="flex justify-end">
      <IoMdCloseCircleOutline
        onClick={() => (document.referrer ? router.back() : router.push("/"))}
        className="text-[30px] cursor-pointer hover:scale-[1.1] transition-all ease-linear"
      />
    </div>
  );
};

export default Back;
