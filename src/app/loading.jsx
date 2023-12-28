import React from "react";
import { CircularProgress } from "@mui/material";

const loading = () => {
  return (
    <div className="pt-[130px] w-full h-screen flex justify-center items-center">
      <CircularProgress
        sx={{
          color: "black",
        }}
      />
    </div>
  );
};

export default loading;
