import React from "react";
import { Abstract_3 } from "../../assets";

const OpenAccount = () => {
  return (
    <div className="container relative p-[80px] w-[1596px] h-[288px] mt-[150px]  bg-primary_dark_gray-11 flex items-center justify-between gap-[150px] rounded-[20px] ">
      <img
        className=" absolute top-0 left-0 opacity-[50%] -z-50"
        src={Abstract_3}
        alt="abstract "
      />

      <div className="w-[1103px] h-[128px] flex flex-col gap-[14px] ">
        <h2 className="text-[40px] leading-1.5 font-medium text-absulate_white">
          Start your financial journey with{" "}
          <span className="text-primary_green-60">YourBank today!</span>
        </h2>
        <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start">
          Ready to take control of your finances? Join YourBank now, and let us
          help you achieve your financial goals with our tailored solutions and
          exceptional customer service
        </p>
      </div>
      <button className="w-[183px] h-[63px] rounded-full bg-primary_green-60 text-primary_dark_gray-11 text-[18px] leading-1.5 font-regular flex items-center justify-center">Open Account</button>
    </div>
  );
};

export default OpenAccount;
