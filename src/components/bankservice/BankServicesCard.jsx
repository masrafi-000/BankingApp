import React from "react";

const BankServicesCard = ({ icon, title }) => {
  return (
    <div className="z-50 flex flex-col items-center justify-center gap-[14px] 2xl:gap-6 w-[154px] h-[160px] md:w-[260px] md:h-[174px] 2xl:w-[314px] 2xl:h-[222px] bg-primary_dark_gray-10 border-[1px] border-primary_dark_gray-15 rounded-[16px]">
      <div className="w-[64px] h-[64px] 2xl:w-[78px] 2xl:h-[78px] rounded-full bg-gradient-to-b from-primary_green-60/5 to-primary_green-60/0 flex justify-center items-center">
        <div className=" w-[48px] h-[48px] 2xl:w-[58px] 2xl:h-[58px] rounded-full bg-gradient-to-b from-primary_green-60/10 to-primary_green-60/0 flex justify-center items-center">
          <img
            className="w-[30px] h-[30px] object-cover"
            {...icon}
            alt="icon"
          />
        </div>
      </div>
      <p className="w-[254px] text-[14px] md:text-[16px] 2xl:text-[20px] leading-1.5 text-center font-regular text-absulate_white">
        {title}
      </p>
    </div>
  );
};

export default BankServicesCard;
