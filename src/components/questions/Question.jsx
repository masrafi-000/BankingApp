import React from "react";
import { HiChevronDown } from "react-icons/hi2";
import { questions } from "./abstract";
import QuestionCard from "./QuestionCard";

const Question = () => {
  return (
    <div className="container 2xl:max-w-[1596px] mt-[150px]">
      <div className="flex flex-col items-center justify-center">
        <div className="w-full flex flex-col items-start justify-center">
          <h2 className="text-[48px] leading-1.5 font-medium text-start text-absulate_white">
            <span className="text-primary_green-60">Frequently</span> Asked
            Questions
          </h2>
          <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start"> Still you have any questions? Contact our Team via support@yourbank.com</p>
        </div>

        <div className="flex flex-wrap gap-[30px] mt-[80px] mb-4">
          {
            questions.map((item) => (
              <QuestionCard key={item.id} question={item.question} answer={item.answer} />
            ))
          }
        </div>
        <button className="w-[193px] h-[63px] rounded-full bg-primary_dark_gray-11 border-[1px] border-primary_dark_gray-15 text-absulate_white text-[18px] leading-1.5 font-regular flex items-center justify-center gap-1">
          Load All FAQ’s <HiChevronDown className="w-[22px] h-[22px]" />
        </button>
      </div>
    </div>
  );
};

export default Question;
