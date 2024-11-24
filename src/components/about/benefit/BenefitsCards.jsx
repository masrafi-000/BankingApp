import React from "react";

const BenefitsCards = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-[30px] p-[50px] w-[748px] h-[336px]">
      <div className="flex gap-[20px] items-center justify-center">
        <div className="w-[98px] h-[98px] rounded-full bg-gradient-to-b from-primary_green-60/5 to-primary_green-60/0 flex justify-center items-center mb-[30px]">
          <div className="w-[74px] h-[74px] rounded-full bg-gradient-to-b from-primary_green-60/10 to-primary_green-60/0 flex justify-center items-center text-primary_green-60">
            {icon}
          </div>
        </div>
        <p className="text-[24px] leading-1.5 font-regular text-start text-absulate_white">{title}</p>
      </div>
      <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start">{description}</p>
    </div>
  );
};

export default BenefitsCards;
