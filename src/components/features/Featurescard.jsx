import React from "react";
import { HiArrowUpRight } from "react-icons/hi2";

const Featurescard = ({ title, description }) => {
  return (
    <div className="w-[614px] h-[272px] p-[50px] flex flex-col gap-[30px] bg-primary_dark_gray-11 rounded-[10px]">
      <div className="flex items-center justify-between w-full">
        <h2 className="text-[22px] leading-1.5 font-regular text-start">
          {title}
        </h2>
        <HiArrowUpRight className="w-[34px] h-[34px] text-primary_green-60" />
      </div>
      <p className=" max-w-[514px] text-[18px] leading-1.5 font-light text-primary_dark_gray-70 traking-[0.6%]">
        {description}
      </p>
    </div>
  );
};

export default Featurescard;
