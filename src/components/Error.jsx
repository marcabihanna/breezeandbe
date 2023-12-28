import React from "react";

const Error = ({ error }) => {
  return (
    <div className="pt-[130px] w-full h-screen flex justify-center items-center uppercase font-medium">
      {error}
    </div>
  );
};

export default Error;
