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
} from "react-icons/fa";
import { postData } from "@/lib/postData";
import toast from "react-hot-toast";
import { IoMdCloseCircleOutline } from "react-icons/io";
import ThreeDots from "@/components/ThreeDots";
import { motion } from "framer-motion";

const Footer = ({ PrivAndTerms, contact }) => {
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [loading, setLoading] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [phoneError, setPhoneError] = useState(false);

  const subscribeNews = async () => {
    setEmailError(false);
    setPhoneError(false);

    if (!email || !phone) {
      setEmailError(!email);
      setPhoneError(!phone);
      return;
    }

    setLoading(true);
    const { data, error } = await postData("NewsLetter", { email, phone });
    setLoading(false);
    if (error) {
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <IoMdCloseCircleOutline className="w-[30px] h-[30px] text-red-600" />
            <span>{error}</span>
          </div>
        ),
        {
          position: "top-right",
          style: {
            borderRadius: "10px",
            borderWidth: "1px",
            borderColor: "white",
            background: "#171717",
          },
        }
      );
    } else {
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
            <span>{data.message}</span>
          </div>
        ),
        {
          position: "top-right",
          style: {
            borderRadius: "10px",
            borderWidth: "1px",
            borderColor: "white",
            background: "#171717",
          },
        }
      );
      setEmail("");
      setPhone("");
    }
  };
  return (
    <div
      id="contact_us"
      className={`${
        !PrivAndTerms &&
        "bg-[url(/footerBackground.png)] bg-cover bg-center bg-no-repeat"
      } flex flex-col space-y-16`}
    >
      {/* subscripe and logo */}
      <div
        className={`${
          !PrivAndTerms && "px-5 xl:px-20"
        } pt-16 flex flex-col space-y-16 lg:space-x-5 lg:flex-row lg:justify-between lg:items-end overflow-x-hidden`}
      >
        {/* subscripe */}
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="flex flex-col space-y-5"
        >
          <h3 className="font-bold text-2xl max-w-[225px]">
            SUBSCRIBE TO OUR NEWSLETTER
          </h3>
          <div className="flex flex-col space-y-10 md:space-y-0 md:flex-row md:space-x-7">
            <input
              type="email"
              placeholder="Email *"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailError(false);
              }}
              className={`outline-none placeholder:italic placeholder:font-light bg-transparent border-b-2 ${
                emailError ? "border-red-600" : "border-mainColor"
              }  focus:border-activeColorG px-2`}
            />
            <input
              type="text"
              placeholder="Mobile Number *"
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value);
                setPhoneError(false);
              }}
              className={`outline-none placeholder:italic placeholder:font-light bg-transparent border-b-2 ${
                phoneError ? "border-red-600" : "border-mainColor"
              } focus:border-activeColorG px-2`}
            />
            <button
              disabled={loading}
              onClick={subscribeNews}
              className={`bg-mainColor text-secondaryColor ${
                loading && "cursor-wait"
              } rounded-full font-bold h-[43px] min-w-[200px]`}
            >
              {loading ? <ThreeDots /> : "SUBSCRIBE NOW"}
            </button>
          </div>
        </motion.div>

        {/* logo */}
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="md:self-start lg:self-end flex flex-wrap"
        >
          <Image
            src={"/footer1.svg"}
            alt="footer logo"
            width={50}
            height={50}
            className="m-[5px]"
          />
          <Image
            src={"/footer2.svg"}
            alt="footer logo"
            width={50}
            height={50}
            className="m-[5px]"
          />
          <Image
            src={"/footer3.svg"}
            alt="footer logo"
            width={50}
            height={50}
            className="m-[5px]"
          />
          <Image
            src={"/footer4.svg"}
            alt="footer logo"
            width={50}
            height={50}
            className="m-[5px]"
          />
          <Image
            src={"/footer5.svg"}
            alt="footer logo"
            width={50}
            height={50}
            className="m-[5px]"
          />
        </motion.div>
      </div>
      {/* Get in touch */}
      <div
        className={`${
          !PrivAndTerms && "px-5 xl:px-20"
        } flex flex-col space-y-5 md:space-y-0 md:flex-row md:justify-between md:space-x-5`}
      >
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          // viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="font-bold text-xl">GET IN TOUCH</h3>
          <h2 className="text-lg font-light">Say Hello</h2>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.4 }}
          // viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="font-bold text-xl">PHONE NUMBER</h3>
          <a href={`tel:${contact?.phone}`} className="text-lg font-light">
            {contact?.phone}
          </a>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.8 }}
          // viewport={{ once: true }}
          className="flex flex-col"
        >
          <h3 className="font-bold text-xl">EMAIL</h3>
          <a href={`mailto:${contact?.email}`} className="text-lg font-light">
            {contact?.email}
          </a>
        </motion.div>
      </div>
      {/* privacy policy */}
      <div
        className={`${
          !PrivAndTerms && "px-5 xl:px-20"
        } py-10 border-t-2 border-gray-500 flex flex-col space-y-5 lg:space-y-0 lg:flex-row lg:justify-between lg:space-x-5 overflow-x-hidden`}
      >
        <motion.div
          initial={{ opacity: 0, x: "-100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="text-activeColorG font-bold flex flex-col items-start space-y-3 sm:space-y-0 sm:flex-row sm:space-x-5"
        >
          <span>FOLLOW YOUR BREEZE & BE JOURNEY</span>
          {/* icons */}
          <div className="flex space-x-2">
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
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: "100%" }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          // viewport={{ once: true }}
          className="font-light"
        >
          <Link href="/privacyPolicy" className="hover:underline">
            Privacy Policy
          </Link>{" "}
          |{" "}
          <Link href="/termsOfServices" className="hover:underline">
            Terms of Service
          </Link>{" "}
          |{" "}
          <Link href="/returnAndRefundPolicy" className="hover:underline">
            Return and Refund Policy
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
