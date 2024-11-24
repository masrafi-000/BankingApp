import React from "react";

const ProductCard = ({ icon, title, description }) => {
  return (
    <div className="w-[338px] md:w-[468px] flex flex-col items-center justify-center">
      <div className="w-[98px] h-[98px] rounded-full bg-gradient-to-b from-primary_green-60/5 to-primary_green-60/0 flex justify-center items-center mb-[30px]">
        <div className="w-[74px] h-[74px] rounded-full bg-gradient-to-b from-primary_green-60/10 to-primary_green-60/0 flex justify-center items-center text-primary_green-60">
          {icon}
        </div>
      </div>

      <div className="flex flex-col gap-[12px] md:gap-[20px] items-center justify-center ">
        <h2 className="text-[24px] leading-1 text-absulate_white font-regular">
          {title}{" "}
        </h2>
        <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-center">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ProductCard;
