import React from "react";

const Heading = ({ heading, sub }) => {
  return (
    <div className="flex justify-center items-center flex-col text-center">
      <h1 className="text-[38px] font-semibold text-[#555555] mb-5">
        {heading}
      </h1>
      <p className="text-[#777777] text-[17px] leading-6 max-w-[600px]">
        {sub}
      </p>
    </div>
  );
};

export default Heading;
