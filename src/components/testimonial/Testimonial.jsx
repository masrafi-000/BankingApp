import React from "react";
import { cardData } from "./cardData";
import TestimonialCard from "./TestimonialCard";

const Testimonial = () => {
  return (
    <div className="container 2xl:max-w-[1596px] mt-[150px]">
      <div className="flex justify-between items-end mb-[100px]">
        {/* left section */}
        <div className="max-w-[910px]">
          <h2 className="text-[48px] leading-1.5 text-absulate_white font-medium">
            Our <span className="text-primary_green-60">Testimonials</span>
          </h2>
          <p className="text-[18px] leading-1.5 text-primary_dark_gray-70 font-light mt-[14px]">
            Discover how YourBank has transformed lives with innovative digital
            solutions and personalized customer service. See why our clients
            trust us for a secure and prosperous financial journey
          </p>
        </div>
        {/* right section */}
        <div className="w-[386px] h-[83px] bg-primary_dark_gray-11 rounded-full flex items-center justify-between ">
          <button
            className="w-[181px] h-[55px] rounded-full bg-primary_green-60
          "
          >
            For Businesses
          </button>
          <button className="w-[181px] h-[55px] rounded-full bg-primary_green-60">
            For Individuals
          </button>
        </div>
      </div>
      {/* silder card */}
      <div className="flex items-center justify-center gap-[80px]">
        {cardData.map((item) => (
          <TestimonialCard
            key={item.id}
            icon={item.icon}
            description={item.description}
            title={item.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonial;
