"use client";
import React, { useEffect, useState } from "react";
import Products from "./Products";
import dynamic from "next/dynamic";
import { CircularProgress } from "@mui/material";
const CheckForm = dynamic(() => import("./CheckForm"), {
  ssr: false,
  loading: () => (
    <div className="w-full hScreen flex justify-center items-center">
      <CircularProgress
        sx={{
          color: "black",
        }}
      />
    </div>
  ),
});

const FormAndProduct = ({ ids, allProducts }) => {
  const [relevantKeys, setRelevantKeys] = useState([]);

  useEffect(() => {
    setRelevantKeys(
      ids?.filter((id) => Object.keys(localStorage)?.includes(id))
    );
  }, [ids]);

  return (
    <>
      <CheckForm
        ids={ids}
        relevantKeys={relevantKeys}
        setRelevantKeys={setRelevantKeys}
      />
      <Products
        ids={ids}
        setRelevantKeys={setRelevantKeys}
        allProducts={allProducts}
      />
    </>
  );
};

export default FormAndProduct;
