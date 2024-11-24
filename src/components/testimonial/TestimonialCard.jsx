import React from "react";

const TestimonialCard = ({ icon, description, title }) => {
  return (
    <div className="w-[404px] h-[332px] flex flex-col items-center justify-center gap-[50px]">
      <div className="flex items-center justify-center gap-5">
        <span className="w-[152px] border-t-[1px] border-primary_dark_gray-15"></span>
        <div className="w-[60px] h-[60px]">
          <img className="" {...icon} alt="icon" />
        </div>
        <span className="w-[152px] border-t-[1px] border-primary_dark_gray-15"></span>
      </div>
      <p className="text-[18px] leading-1.5 font-light text-absulate_white text-center">
        {description}
      </p>
      <span className="text-primary_green-60 text-[18px] leading-1.5 font-medium">
        {title}
      </span>
    </div>
  );
};

export default TestimonialCard;
