"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaYoutube,
  FaLinkedin,
  FaShoppingBag,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiOutlineClose } from "react-icons/ai";
import { usePathname } from "next/navigation";

const NavBar = ({ contact }) => {
  const pathName = usePathname();
  //! handle side navbar
  const [sideNav, setSideNav] = useState(false);
  const handleSideNav = () => {
    setSideNav((prev) => !prev);
  };
  return (
    <>
      <div className="fixed z-50 w-full">
        <marquee
          width="100%"
          direction="right"
          height="40px"
          className="uppercase flex items-center bg-mainColorLight text-activeColorG font-bold"
        >
          free shipping
        </marquee>

        <div className="px-5 lg:pl-10 lg:pr-0 bg-mainColor flex justify-between">
          <div className="w-1/2 flex justify-between items-center">
            {/* icons */}
            <div className="text-activeColorG hidden lg:flex space-x-2 self-center">
              <Link
                href={contact?.facebook ? contact?.facebook : "#"}
                target="_blank"
              >
                <FaFacebook className="text-[20px]" />
              </Link>
              <Link
                href={contact?.instagram ? contact?.instagram : "#"}
                target="_blank"
              >
                <FaInstagram className="text-[20px]" />
              </Link>
              <Link
                href={contact?.linked_in ? contact?.linked_in : "#"}
                target="_blank"
              >
                <FaLinkedin className="text-[20px]" />
              </Link>
            </div>

            {/* logo */}
            <Link href={"/"} className="-mr-[42px]">
              <Image
                src={"/logo.svg"}
                width={100}
                height={100}
                alt="logo"
                className="h-[90px] w-[120px]"
              />
            </Link>
          </div>

          {/* links */}
          <div className="w-1/2 text-secondaryColor text-sm text-center font-bold uppercase hidden lg:flex justify-end">
            <Link
              href={"/about"}
              className={`px-2 lg:px-3 xl:px-5 text-[11px] lg:text-[15px] flex justify-center items-center ${
                pathName == "/about"
                  ? "text-activeColorG"
                  : "hover:text-activeColorG"
              }`}
            >
              About
            </Link>
            <Link
              href={`${pathName}#contact_us`}
              className="px-2 lg:px-3 xl:px-5 text-[11px] lg:text-[15px] flex justify-center items-center hover:text-activeColorG"
            >
              Contact US
            </Link>
            <Link
              href={"/checkout"}
              className={`px-2 lg:px-3 xl:px-5 text-[11px] lg:text-[15px] flex justify-center items-center ${
                pathName == "/checkout"
                  ? "text-activeColorG"
                  : "hover:text-activeColorG"
              }`}
            >
              <FaShoppingBag className="mr-2" />
              My Bag
            </Link>
            <Link
              href={"/shop"}
              className="px-2 lg:px-3 xl:px-5 text-[11px] lg:text-[15px] flex justify-center items-center bg-activeColorG text-mainColor"
            >
              Shop Now
            </Link>
          </div>

          <GiHamburgerMenu
            onClick={handleSideNav}
            className="self-center text-secondaryColor text-[30px] cursor-pointer hover:scale-110 transition-all duration-150 ease-linear lg:hidden block"
          />
        </div>
      </div>

      {/* sideNavBar */}
      <div
        className={
          sideNav ? "lg:hidden fixed z-50 w-full h-full bg-black/60" : ""
        }
      >
        <div
          className={
            sideNav
              ? "lg:hidden fixed top-0 left-0 z-50 w-[85%] h-full bg-mainColor px-5 pb-10 flex flex-col space-y-20 overflow-y-auto ease-linear duration-300"
              : "lg:hidden fixed top-0 -left-full z-50 w-[85%] h-full bg-mainColor px-5 pb-10 flex flex-col space-y-20 overflow-y-auto ease-linear duration-100"
          }
        >
          <div className="flex justify-between items-center min-h-[128px]">
            <Link href={"/"} onClick={handleSideNav}>
              <Image
                src="/logo.svg"
                alt="close button"
                width={28}
                height={32}
                className="w-28"
              />
            </Link>
            <AiOutlineClose
              className="text-secondaryColor w-10 h-10 cursor-pointer hover:scale-[1.1] transition-all ease-linear duration-150 p-1 ml-4"
              onClick={handleSideNav}
            />
          </div>

          <div className="mx-5 flex flex-col text-secondaryColor">
            <Link
              onClick={handleSideNav}
              href={"/about"}
              className={`px-2 lg:px-5 flex justify-start items-center my-3 ${
                pathName == "/about"
                  ? "text-activeColorG"
                  : "hover:text-activeColorG"
              }`}
            >
              About
            </Link>
            <Link
              onClick={handleSideNav}
              href={`${pathName}#contact_us`}
              className="px-2 lg:px-5 flex justify-start items-center my-3 hover:text-activeColorG"
            >
              Contact Us
            </Link>
            <Link
              onClick={handleSideNav}
              href={"/checkout"}
              className={`px-2 lg:px-5 flex justify-start items-center my-3 ${
                pathName == "/checkout"
                  ? "text-activeColorG"
                  : "hover:text-activeColorG"
              }`}
            >
              My Bag
              <FaShoppingBag className="ml-2" />
            </Link>
            <Link
              onClick={handleSideNav}
              href={"/shop"}
              className="px-2 lg:px-5 flex justify-start items-center my-3 text-activeColorG"
            >
              Shop Now
            </Link>
            <div className="text-activeColorG flex self-center space-x-2 mt-14 px-2">
              <Link
                href={contact?.facebook ? contact?.facebook : "#"}
                target="_blank"
              >
                <FaFacebook className="text-[20px]" />
              </Link>
              <Link
                href={contact?.instagram ? contact?.instagram : "#"}
                target="_blank"
              >
                <FaInstagram className="text-[20px]" />
              </Link>
              <Link
                href={contact?.linked_in ? contact?.linked_in : "#"}
                target="_blank"
              >
                <FaLinkedin className="text-[20px]" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavBar;
