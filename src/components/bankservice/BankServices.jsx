import React from "react";
import BankServicesCard from "./BankServicesCard";
import { Abstract_4, Abstract_3 } from "../../assets";
import {
  BottomContainerData,
  TopContainerData,
  TopPercentageData,
  BottomPercentageData,
} from "./abstract";
import Percentages from "./Percentages";

const BankServices = () => {
  return (
    <div className="container 2xl:max-w-[1596px] 2xl:mt-[150px]">
      <div className="flex flex-col gap-[60px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
          <div className=" relative p-[50px] bg-primary_dark_gray-11 flex justify-center items-center flex-wrap gap-[20px] rounded-[20px]">
            <img
              className=" absolute top-0 left-0"
              src={Abstract_3}
              alt="abstract"
            />
            {TopContainerData.map((item) => {
              return (
                <BankServicesCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                />
              );
            })}
          </div>
          <div className="flex flex-col items-start mt-[30px]">
            <h2 className="mb-[14px] text-[30px] leading-1.5 font-medium text-absulate_white text-left">
              For Individuals
            </h2>

            <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-left">
              For individuals, our mortgage services pave the way to
              homeownership, and our flexible personal loans provide vital
              support during various life milestones. We also prioritize
              retirement planning, ensuring a financially secure future for our
              customers
            </p>

            <div className="w-full flex items-center justify-between my-[62px]">
              <Percentages
                percentage={TopPercentageData[0].percentage}
                title={TopPercentageData[0].title}
              />

              <div className="h-[146px] border-l-[1px] border-dashed border-primary_dark_gray-15"></div>

              <Percentages
                percentage={TopPercentageData[1].percentage}
                title={TopPercentageData[1].title}
              />
              <div className="h-[146px] border-l-[1px] border-dashed border-primary_dark_gray-15"></div>

              <Percentages
                percentage={TopPercentageData[2].percentage}
                title={TopPercentageData[2].title}
              />
            </div>

            <div className="w-[148px] h-[63px] bg-primary_dark_gray-11 border-[1px] border-primary_dark_gray-15 rounded-[83px] flex items-center justify-center text-absulate_white text-[18px] leading-1.5 font-regular text-center hover:bg-primary_green-60 hover:text-absulate_black">
              Learn More
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-[100px]">
          <div className="flex flex-col items-start mt-[30px]">
            <h2 className="mb-[14px] text-[30px] leading-1.5 font-medium text-absulate_white text-left">
              For Business
            </h2>

            <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-left">
              For businesses, we empower growth with working capital solutions
              that optimize cash flow, and our tailored financing options fuel
              business expansion. Whatever your financial aspirations, YourBank
              is committed to providing the right tools and support to achieve
              them
            </p>

            <div className="w-full flex items-center justify-between my-[62px]">
              <Percentages
                percentage={BottomPercentageData[0].percentage}
                title={BottomPercentageData[0].title}
              />

              <div className="h-[146px] border-l-[1px] border-dashed border-primary_dark_gray-15"></div>

              <Percentages
                percentage={BottomPercentageData[1].percentage}
                title={BottomPercentageData[1].title}
              />
              <div className="h-[146px] border-l-[1px] border-dashed border-primary_dark_gray-15"></div>

              <Percentages
                percentage={BottomPercentageData[2].percentage}
                title={BottomPercentageData[2].title}
              />
            </div>

            <div className="w-[148px] h-[63px] bg-primary_dark_gray-11 border-[1px] border-primary_dark_gray-15 rounded-[83px] flex items-center justify-center text-absulate_white text-[18px] leading-1.5 font-regular text-center hover:bg-primary_green-60 hover:text-absulate_black">
              Learn More
            </div>
          </div>
          <div className=" relative p-[50px] bg-primary_dark_gray-11 flex justify-center items-center flex-wrap gap-[20px] rounded-[20px]">
            <img
              className=" absolute top-0 right-0"
              src={Abstract_4}
              alt="abstract"
            />
            {BottomContainerData.map((item) => {
              return (
                <BankServicesCard
                  key={item.id}
                  icon={item.icon}
                  title={item.title}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BankServices;
