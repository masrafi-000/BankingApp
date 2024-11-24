import React from "react";

const BenefitsCards = ({ icon, title, description }) => {
  return (
    <div className="flex flex-col gap-[30px] p-[50px] w-[748px] h-[336px] bg-primary_dark_gray-11 border-[1px] border-primary_dark_gray-15 rounded-tl-[50px] rounded-tr-[20px] rounded-bl-[20px] rounded-br-[50px]">
      <div className="w-auto h-auto flex items-center justify-start gap-[30px]">
        <div className="w-[98px] h-[98px] rounded-full bg-gradient-to-b from-primary_green-60/5 to-primary_green-60/0 flex justify-center items-center">
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
