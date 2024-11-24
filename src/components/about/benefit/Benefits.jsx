import React from "react";
import BenefitsCards from "./BenefitsCards";

const Benefits = () => {
  return (
    <div className="container 2xl:max-w-[1596px] mt-[150px]">
      <div className="flex flex-col items-start justify-start">
        <h2 className="text-[48px] leading-1.5 font-medium text-start text-absulate_white">
          Our <span className="text-primary_green-60">Benefits</span>
        </h2>
        <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start max-w-[1296px]">
          At YourBank, we value our employees and are dedicated to their
          well-being and success. We offer a comprehensive range of benefits
          designed to support their personal and professional growth.
        </p>
      </div>
      <div className="flex flex-wrap gap-[100px] mt-[80px] mb-4">
        <BenefitsCards title="Competitive Compensation" />
        <BenefitsCards />
        <BenefitsCards />
        <BenefitsCards />
      </div>
    </div>
  );
};

export default Benefits;
