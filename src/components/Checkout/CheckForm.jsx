"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { postData } from "@/lib/postData";
import Link from "next/link";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { motion } from "framer-motion";
import ThreeDots from "../ThreeDots";

const CheckForm = ({ ids, relevantKeys, setRelevantKeys }) => {
  const router = useRouter();

  const [productCheckOut, setProductCheckOut] = useState(
    relevantKeys?.map((key) => {
      return {
        id: key,
        ...JSON.parse(localStorage.getItem(key)),
      };
    })
  );
  const [totalPrice, setTotalPrice] = useState(
    productCheckOut?.reduce(
      (result, current) => result + current.price * current.qty,
      0
    )
  );

  const removeItem = (key) => {
    localStorage.removeItem(key);
    toast(
      (t) => (
        <div className="text-secondaryColor flex justify-center items-center space-x-3">
          <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
          <span>Item removed from your cart</span>
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
    setRelevantKeys(
      ids?.filter((id) => Object.keys(localStorage)?.includes(id))
    );
  };
  const changeQty = (key, operation) => {
    const item = JSON.parse(localStorage.getItem(key));
    operation === "+" ? (item.qty += 1) : (item.qty -= 1);
    if (item.qty == 0) {
      removeItem(key);
      return;
    }
    localStorage.setItem(key, JSON.stringify(item));
    setRelevantKeys(
      ids?.filter((id) => Object.keys(localStorage)?.includes(id))
    );
  };

  useEffect(() => {
    setProductCheckOut(
      relevantKeys?.map((key) => {
        return {
          id: key,
          ...JSON.parse(localStorage.getItem(key)),
        };
      })
    );
  }, [relevantKeys]);

  useEffect(() => {
    setTotalPrice(
      productCheckOut?.reduce(
        (result, current) => result + current.price * current.qty,
        0
      )
    );
  }, [productCheckOut]);

  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState(false);

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState(false);

  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState(false);

  const [prefix_phone, setPrefix_phone] = useState("");
  const [prefix_phoneError, setPrefix_phoneError] = useState(false);

  const [city, setCity] = useState("");
  const [cityError, setCityError] = useState(false);

  const [country, setCountry] = useState("");
  const [countryError, setCountryError] = useState(false);

  const [address, setAddress] = useState("");
  const [addressError, setAddressError] = useState(false);

  const [coupon, setCoupon] = useState("");
  const [discount, setDiscount] = useState("");
  const [total_price_new, setTotal_price_new] = useState("");
  useEffect(() => {
    if (discount) {
      setTotal_price_new(totalPrice - (totalPrice * discount) / 100);
    }
  }, [discount, totalPrice]);

  const addOrder = async (e) => {
    e.preventDefault();

    setNameError(false);
    setEmailError(false);
    setPhoneError(false);
    setPrefix_phoneError(false);
    setCityError(false);
    setCountryError(false);
    setAddressError(false);

    if (productCheckOut.length == 0) {
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <IoMdCloseCircleOutline className="w-[30px] h-[30px] text-red-600" />
            <span>Please add items to your cart</span>
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
      return;
    }

    if (
      !name ||
      !email ||
      !phone ||
      !prefix_phone ||
      !city ||
      !country ||
      !address
    ) {
      setNameError(!name);
      setEmailError(!email);
      setPhoneError(!phone);
      setPrefix_phoneError(!prefix_phone);
      setCityError(!city);
      setCountryError(!country);
      setAddressError(!address);
      return;
    }

    const products = productCheckOut?.map((one) => {
      return { uuid: one?.id, quantity: one?.qty };
    });

    setLoading(true);

    var BODY = {};

    if (coupon && discount) {
      BODY = {
        name,
        email,
        phone,
        prefix_phone,
        city,
        country,
        address,
        products,
        total_price: totalPrice,
        coupon_code: coupon,
        total_price_new: total_price_new,
      };
    } else {
      BODY = {
        name,
        email,
        phone,
        prefix_phone,
        city,
        country,
        address,
        products,
        total_price: totalPrice,
      };
    }
    const { data, error } = await postData("checkout", BODY);

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
      setName("");
      setEmail("");
      setCity("");
      setCountry("");
      setAddress("");
      setPhone("");
      setPrefix_phone("");
      setCoupon("");
      setDiscount("");
      setTotal_price_new("");
      localStorage.clear();
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center space-x-3">
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
            <span>Order placed successfully</span>
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
      router.push("/");
    }
  };

  const checkCoupon = async () => {
    if (!coupon) {
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center gap-3">
            <IoMdCloseCircleOutline className="w-[30px] h-[30px] text-red-600" />
            <span>The coupon code field is required</span>
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
      return;
    }
    setLoading(true);
    const { data, error } = await postData("check_coupon", {
      code: coupon,
    });
    setLoading(false);
    if (error) {
      toast(
        (t) => (
          <div className="text-secondaryColor flex justify-center items-center gap-3">
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
          <div className="text-secondaryColor flex justify-center items-center gap-3">
            <Image src={"/logo.svg"} width={50} height={50} alt="logo" />
            <span>This Coupon is valid</span>
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
      setDiscount(data?.discount);
    }
  };

  return (
    <>
      {productCheckOut?.length == 0 ? (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="w-full hScreen flex justify-center items-center text-center"
        >
          <div className="flex flex-col items-center">
            <span className="font-medium text-[25px]">NO ITEM IN CART</span>
            <Link
              href={"/shop"}
              className="text-activeColorG text-[18px] hover:underline font-bold"
            >
              START SHOPPING
            </Link>
          </div>
        </motion.div>
      ) : (
        <div className="hScreen px-5 lg:px-20 xl:px-32 py-10 flex items-center bg-secondaryColor">
          <div className="w-full lg:border-[2px] lg:border-mainColor lg:p-10 lg:rounded-[36px] flex flex-col space-y-5 lg:space-y-0 lg:space-x-5 lg:flex-row lg:justify-between">
            <div className="flex flex-wrap justify-between lg:flex-col lg:justify-start lg:space-y-5 lg:w-[40%] overflow-x-hidden">
              {productCheckOut?.map((one, index) => {
                return (
                  <motion.div
                    initial={{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.7, delay: 0.2 * index }}
                    key={index}
                    className="flex items-center space-x-3 m-[10px]"
                  >
                    <Link href={`/shop/${one?.id}`} className="rounded-xl">
                      <Image
                        src={one?.img}
                        width={120}
                        height={120}
                        alt={one?.text}
                        className="rounded-xl w-[100px] h-[100px] sm:w-[120px] sm:h-[120px] cursor-pointer hover:opacity-75"
                      />
                    </Link>
                    <div className="flex flex-col justify-between my-2">
                      {/* qty */}
                      <div className="flex items-center space-x-5">
                        <span
                          onClick={() => changeQty(one?.id, "-")}
                          className="cursor-pointer font-bold text-[20px] select-none"
                        >
                          -
                        </span>
                        <div className="bg-mainColor text-bgColor px-2 sm:px-3 text-[10px] sm:text-sm font-bold rounded-full">
                          {one?.qty}
                        </div>
                        <span
                          onClick={() => changeQty(one?.id, "+")}
                          className="cursor-pointer font-bold text-[20px] select-none"
                        >
                          +
                        </span>
                      </div>

                      {/* product name */}
                      <Link href={`/shop/${one?.id}`}>
                        <div className="cursor-pointer font-black max-w-[200px] text-[12px] sm:text-base">
                          {one?.text}
                        </div>
                      </Link>

                      {/* price */}
                      <span className="font-black text-green-500 text-[12px] sm:text-[15px] flex space-x-[2px] items-start">
                        {one?.price}
                        <span className="text-[7px] sm:text-[10px]">$</span>
                      </span>
                      {/* Remove */}
                      <span
                        onClick={() => removeItem(one.id)}
                        className="hover:underline text-red-500 font-bold text-[10px] cursor-pointer"
                      >
                        Remove
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
            <form
              onSubmit={addOrder}
              className="flex flex-col space-y-3 lg:w-[60%]"
            >
              <input
                type="text"
                placeholder="Name *"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                  setNameError(false);
                }}
                className={`${
                  nameError && "border-red-500"
                } outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
              />
              <input
                type="email"
                placeholder="Email *"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setEmailError(false);
                }}
                className={`${
                  emailError && "border-red-500"
                } outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Prefix *"
                  value={prefix_phone}
                  onChange={(e) => {
                    setPrefix_phone(e.target.value);
                    setPrefix_phoneError(false);
                  }}
                  className={`w-1/3 ${
                    prefix_phoneError && "border-red-500"
                  } outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
                />
                <input
                  type="text"
                  placeholder="Phone number *"
                  value={phone}
                  onChange={(e) => {
                    setPhone(e.target.value);
                    setPhoneError(false);
                  }}
                  className={`w-2/3 ${
                    phoneError && "border-red-500"
                  } outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
                />
              </div>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="City *"
                  value={city}
                  onChange={(e) => {
                    setCity(e.target.value);
                    setCityError(false);
                  }}
                  className={`w-1/2 ${
                    cityError && "border-red-500"
                  } outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
                />
                <input
                  type="text"
                  placeholder="Country *"
                  value={country}
                  onChange={(e) => {
                    setCountry(e.target.value);
                    setCountryError(false);
                  }}
                  className={`w-1/2 ${
                    countryError && "border-red-500"
                  } text-center outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
                />
              </div>
              <input
                type="text"
                placeholder="Address *"
                value={address}
                onChange={(e) => {
                  setAddress(e.target.value);
                  setAddressError(false);
                }}
                className={`${
                  addressError && "border-red-500"
                } outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
              />
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Coupon Code"
                  value={coupon}
                  onChange={(e) => {
                    setCoupon(e.target.value);
                  }}
                  className={`w-2/3 text-center text-secondaryColor placeholder:text-secondaryColor bg-activeColorG outline-none border-[2px] border-mainColor rounded-full px-5 py-3`}
                />
                <button
                  type="button"
                  disabled={loading}
                  onClick={checkCoupon}
                  className={`w-1/3 ${
                    loading && "cursor-wait"
                  } bg-mainColor text-secondaryColor rounded-full h-[50px] flex justify-center items-center text-[10px] sm:text-base px-1`}
                >
                  {loading ? <ThreeDots /> : "Check Coupon"}
                </button>
              </div>
              <button
                disabled={loading}
                type="submit"
                className={`${
                  loading && "cursor-wait"
                } bg-mainColor text-secondaryColor rounded-full h-[50px] flex justify-center items-center`}
              >
                {loading ? (
                  <ThreeDots />
                ) : (
                  <>
                    <span className="font-bold">PROCEED</span>&nbsp; |&nbsp;
                    <span className="font-bold flex space-x-[2px] items-start">
                      <span
                        style={{ textDecorationThickness: "2px" }}
                        className={`${
                          discount &&
                          "text-gray-500 line-through decoration-red-600"
                        }`}
                      >
                        {totalPrice}
                      </span>
                      <span
                        className={`${discount && "text-gray-500"} text-[10px]`}
                      >
                        $
                      </span>
                    </span>
                    {discount && (
                      <span className="font-bold flex space-x-[2px] items-start">
                        &nbsp;&nbsp;{total_price_new}
                        <span className="text-[10px]">$</span>
                      </span>
                    )}
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
};

export default CheckForm;
