import React from "react";

const HeroCard = ({ title, amount }) => {
  return (
    <>
      <div className="flex items-end justify-between ">
        <div className="flex items-center justify-start gap-[10px]">

        <div className="flex items-center justify-center w-[38.15px] h-[38.15px] bg-primary_green-60 rounded-full" >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-[20px] text-primary_dark_gray-11"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M7.5 21 3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5"
            />
          </svg>
        </div>
        <div className="flex flex-col items-start justify-between ">
          <p className="text-absulate_white text-[15.61px] leading-1.5 font-light text-start">Transaction</p>
          <p className="text-absulate_white text-[17.34px] leading-1.5 font-regular text-start">{title}</p>
        </div>
        </div>
      </div>
      <p className="text-absulate_white text-[21px] leading-1.5 font-medium text-start">{amount}</p>
    </>
  );
};

export default HeroCard;
