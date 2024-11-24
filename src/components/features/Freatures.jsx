import React from "react";
import Featurescard from "./Featurescard";
import { nanoid } from "nanoid";

const CardData = [
  {
    id: nanoid(),
    title: "24/7 Account Access",
    description:
      "Enjoy the convenience of accessing your accounts anytime, anywhere through our secure online banking platform. Check balances, transfer funds, and pay bills with ease.",
  },
  {
    id: nanoid(),
    title: "Mobile Banking App",
    description:
      "Stay connected to your finances on the go with our user-friendly mobile banking app. Easily manage your accounts, deposit checks, and make payments from your smartphone or tablet.",
  },
  {
    id: nanoid(),
    title: "Secure Transactions",
    description:
      "Rest assured knowing that your transactions are protected by industry-leading security measures. We employ encryption and multi-factor authentication to safeguard your financial information.",
  },
  {
    id: nanoid(),
    title: "Bill Pay and Transfers",
    description:
      "Save time and avoid late fees with our convenient bill pay service. Set up recurring payments or make one-time transfers between your accounts with just a few clicks.",
  },
];
const Freatures = () => {
  return (
    <div className="container 2xl:max-w-[1596px] mt-[150px] text-absulate_white">
      <div className="flex flex-col gap-[80px] ">
        <div className="flex flex-col items-start justify-center gap-[14px]">
          <h2 className="text-absulate_white text-[48px] leading-1.5 font-medium text-start">
            Our <span className="text-primary_green-60">Features</span>
          </h2>
          <p className=" max-w-[1296px] text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-left">
            Experience a host of powerful features at YourBank, including
            seamless online banking, secure transactions, and personalized
            financial insights, all designed to enhance your banking experience
          </p>
        </div>

        <div className="flex gap-[30px]">
          {/* Silder to do */}
          <div className="flex flex-col justify-between items-center p-[50px] bg-primary_dark_gray-11 w-[308px] h-[337px] ">
            <button className="w-[208px] h-[63px] rounded-full bg-primary_dark_gray-15 text-absulate_white text-[18px] leading-1.5 font-regular flex items-center justify-center hover:text-primary_green-60 hover:bg-primary_dark_gray-10 transition-all">
              Online Banking
            </button>
            <button className="w-[208px] h-[63px] rounded-full bg-primary_dark_gray-15 text-absulate_white text-[18px] leading-1.5 font-regular flex items-center justify-center hover:text-primary_green-60 hover:bg-primary_dark_gray-10 transition-all">
              Financial Tools
            </button>
            <button className="w-[208px] h-[63px] rounded-full bg-primary_dark_gray-15 text-absulate_white text-[18px] leading-1.5 font-regular flex items-center justify-center hover:text-primary_green-60 hover:bg-primary_dark_gray-10 transition-all">
              Customer Support
            </button>
          </div>
          {/* Cards */}
          <div className="flex flex-wrap items-center justify-center gap-[30px] ">
            {CardData.map((card) => {
              return (
                <Featurescard
                  key={card.id}
                  title={card.title}
                  description={card.description}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Freatures;
