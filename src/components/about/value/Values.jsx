import { nanoid } from "nanoid";
import React from "react";

const values = [
  {
    id: nanoid(),
    title: "Integrity",
    description:
      "We conduct ourselves with utmost honesty, transparency, and ethical behavior. We believe in doing what is right for our customers, colleagues, and stakeholders, even when faced with difficult choices.",
  },
  {
    id: nanoid(),
    title: "Customer Centricity",
    description:
      "Our customers are at the heart of everything we do. We are dedicated to understanding their needs, providing personalized solutions, and delivering exceptional service that exceeds expectations.",
  },
  {
    id: nanoid(),
    title: "Collaboration",
    description:
      "We foster a collaborative and inclusive work environment, where teamwork and diversity are celebrated. By leveraging the unique strengths and perspectives of our employees, we drive innovation and achieve greater success together.",
  },
  {
    id: nanoid(),
    title: "Innovation",
    description:
      "We embrace change and constantly seek innovative solutions to meet the evolving needs of our customers. We encourage our employees to think creatively, challenge conventions, and explore new ideas to drive the future of banking.",
  },
];

const Values = () => {
  return (
    <div className="container 2xl:max-w-[1596px] mt-[150px]">
      <div className="flex flex-col items-start justify-center mb-[80px]">
        <h2 className="text-[48px] leading-1.5 font-medium text-start text-absulate_white ">
          Our <span className="text-primary_green-60">Values</span>
        </h2>
        <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start max-w-[1296px]">
          At YourBank, our values form the foundation of our organization and
          guide our actions. We believe in upholding the highest standards of
          integrity, delivering exceptional service, and embracing innovation.
          These values define our culture and shape the way we work together to
          achieve our goals.
        </p>
      </div>
      <div className="flex items-center justify-center flex-wrap gap-[80px]">
        {values.map((item) => (
          <div key={item.id} className="flex flex-col items-start justify-start pl-[20px] gap-[30px] w-[758px] h-[198px] border-l-[1px] border-primary_green-60">
              <h2 className="text-[58px] leading-1.5 font-medium text-start text-primary_dark_gray-30">{item.title}</h2>
              <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start">{item.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Values;
