import React from "react";
import { Abstract_1, countrie_ind, countrie_usa } from "../../assets";
import { FaDollarSign } from "react-icons/fa";
import { FaEuroSign } from "react-icons/fa";
import { FaEthereum } from "react-icons/fa";
import { BsCurrencyBitcoin } from "react-icons/bs";
import HeroCard from "./HeroCard";

const Hero = () => {
  return (
    <>
      <div className="container max-w-[1596px]">
        <div className="grid grid-cols-1 md:grid-cols-[825px_1fr] md:gap-[80px] xl:gap-[120px] pt-[100px]">
          <div className="flex flex-col gap-4">
            <div className="w-[357px] h-[44px] pl-[12px] pr-[20px] mb-[20px] flex items-center justify-center gap-[6px] bg-primary_dark_gray-15 rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6 text-primary_green-60"
              >
                <path
                  fillRule="evenodd"
                  d="M8.603 3.799A4.49 4.49 0 0 1 12 2.25c1.357 0 2.573.6 3.397 1.549a4.49 4.49 0 0 1 3.498 1.307 4.491 4.491 0 0 1 1.307 3.497A4.49 4.49 0 0 1 21.75 12a4.49 4.49 0 0 1-1.549 3.397 4.491 4.491 0 0 1-1.307 3.497 4.491 4.491 0 0 1-3.497 1.307A4.49 4.49 0 0 1 12 21.75a4.49 4.49 0 0 1-3.397-1.549 4.49 4.49 0 0 1-3.498-1.306 4.491 4.491 0 0 1-1.307-3.498A4.49 4.49 0 0 1 2.25 12c0-1.357.6-2.573 1.549-3.397a4.49 4.49 0 0 1 1.307-3.497 4.49 4.49 0 0 1 3.497-1.307Zm7.007 6.387a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z"
                  clipRule="evenodd"
                />
              </svg>

              <p className="text-absulate_white text-[17px] leading-[24px] font-normal">
                No LLC Required, No Credit Check.
              </p>
            </div>
            <div className="flex flex-col gap-[14px] ">
              <h2 className="text-absulate_white text-[48px] leading-1.5 font-medium text-left">
                Welcome to YourBank Empowering Your{" "}
                <span className="text-primary_green-60">Financial Journey</span>
              </h2>
              <p className="text-[18px] leading-1.5 font-normal text-left text-primary_light_white-90">
                At YourBank, our mission is to provide comprehensive banking
                solutions that empower individuals and businesses to achieve
                their financial goals. We are committed to delivering
                personalized and innovative services that prioritize our
                customer's needs.
              </p>
            </div>
            <a
              className="mt-[50px] w-[183px] h-[63px] rounded-full bg-primary_green-60 text-primary_dark_gray-11 flex items-center justify-center cursor-pointer"
              href="#"
              target="_blank"
            >
              Open Account
            </a>
          </div>
          {/* left container */}
          <div className="relative w-auto h-auto">
            {/* top container */}
            <div className="w-[150px] h-[61px] bg-[#22251B] rounded-[8.26px] absolute z-50 top-[-34px] left-[-48px] flex items-center justify-center gap-[8px]">
              <div className="w-[30px] h-[30px] rounded-full bg-primary_green-60 flex items-center justify-center ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="size-4"
                >
                  <path
                    fillRule="evenodd"
                    d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="flex flex-col items-center justify-center  w-[85px] h-[38px]">
                <h2 className="text-[11px] leading-1.5 font-light text-center text-absulate_white">
                  + $5000,00
                </h2>
                <p className="text-[11px] leading-1.5 font-light text-center text-absulate_white">
                  Monthly Income
                </p>
              </div>
            </div>
            {/* main  container  */}
            <div className="relative">
              {/* side abstaract  */}
              <div className="absolute w-[417px] h-[382px] -z-10 top-[10px] right-[-7%]">
                <img
                  className="w-full h-full object-cover"
                  src={Abstract_1}
                  alt="abstract"
                />
              </div>
              {/* main content  */}
              <div className="flex flex-col items-center justify-center gap-[26px] z-10 w-[515px] h-[625px] p-[27.55px] bg-primary_dark_gray-10 border-[1px] border-primary_dark_gray-15 rounded-[8.26px]">
                <div className="flex flex-col gap-[13.77px] w-full h-auto">
                  <h2 className="text-[13.77px] leading-1.5 font-medium text-absulate_white">
                    Your Transactions
                  </h2>
                  <div className="flex flex-col items-center justify-center w-full h-auto relative">
                    <div className="flex justify-between w-[100%] h-[76.75px] bg-primary_dark_gray-11 rounded-[8.26px] items-center py-[11px] pl-[16px] pr-[11px] border-[0.69px] border-primary_dark_gray-15 relative z-50">
                      <HeroCard title="Joel Kenley" amount="-$68.00" />
                    </div>
                    <div className="flex justify-between w-[90%] h-[76.75px] bg-primary_dark_gray-11 rounded-[8.26px] items-center py-[11px] pl-[16px] pr-[11px] border-[0.69px] border-primary_dark_gray-15 relative z-40 top-[-10px] opacity-[75%]">
                    <HeroCard title="Mark Smith" amount="-$68.00" />
                    </div>
                    <div className="flex justify-between w-[80%] h-[76.75px] bg-primary_dark_gray-11 rounded-[8.26px] items-center py-[11px] pl-[16px] pr-[11px] border-[0.69px] border-primary_dark_gray-15 relative z-30 top-[-20px] opacity-[50%]">
                    <HeroCard title="Lenen Roy" amount="-$68.00" />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col gap-[19.97px] w-full h-auto">
                  <h2 className="text-[13.77px] leading-1.5 font-medium text-absulate_white text-start ">
                    Money Exchange
                  </h2>
                  <div className="w-100% h-[177.22px] flex flex-wrap bg-primary_dark_gray-11 rounded-[8.26px]">
                  <div className="w-[50%] h-[50%] border-b-[0.69px] border-r-[0.69px] border-primary_dark_gray-15 p-[14px] flex flex-col justify-between items-start gap-[6.89px]">
                      <div className="flex  justify-start items-center gap-[7px]">
                        <div className="w-[34.66px] h-[34.46px] rounded-full">
                          <img
                            className="w-full h-full object-center"
                            src={countrie_ind}
                            alt="Flag"
                          />
                        </div>
                        <p className="text-absulate_white text-[15.61px] leading-1.5 font-regular text-start">
                          INR
                        </p>
                      </div>
                      <p className="text-[13.87px] leading-1.5 font-light text-start text-absulate_white">
                      Indian Rupees
                      </p>
                    </div>
                    <div className="w-[50%] h-[50%] border-b-[0.69px] border-primary_dark_gray-15 p-[14px] flex flex-col justify-between items-start gap-[6.89px]">
                      <div className="flex  justify-start items-center gap-[7px]">
                        <div className="w-[34.66px] h-[34.46px] rounded-full">
                          <img
                            className="w-full h-full object-center"
                            src={countrie_usa}
                            alt="Flag"
                          />
                        </div>
                        <p className="text-absulate_white text-[15.61px] leading-1.5 font-regular text-start">
                          USD
                        </p>
                      </div>
                      <p className="text-[13.87px] leading-1.5 font-light text-start text-absulate_white">
                        United States Dollar
                      </p>
                    </div>
                    <div className="w-[50%] h-[50%] border-r-[0.69px] border-primary_dark_gray-15 py-[17px] px-[13.77px]">
                      <input
                        className="text-absulate_white w-full h-full bg-transparent outline-none border-none"
                        type="number"
                      />
                    </div>
                    <div className="w-[50%] h-[50%] py-[17px] px-[13.77px]">
                      <input
                        className="text-absulate_white w-full h-full bg-transparent outline-none border-none"
                        type="number"
                      />
                    </div>

                  </div>
                  <button className="w-full h-[50.75px] bg-[#22251B] rounded-[71px] text-primary_green-60 flex items-center justify-center">
                  Exchange
                  </button>
                </div>
              </div>
            </div>
            {/* bottom container */}
            <div className="flex items-center justify-center gap-[10px] absolute w-[370px] h-[69px] rounded-full bg-[#22251B] pl-[18px] right-[10%] bottom-[-15%]">
              <p className="text-[15px] leading-1.5 font-regular text-absulate_white">Supported Currency</p>
              <div className="flex gap-[7px] items-center justify-center w-[176.88px] h-[52px] bg-primary_dark_gray-10 rounded-[47px]  ">
                <div className="w-[34.68px] h-[34.68px] rounded-full bg-primary_dark_gray-11 flex items-center justify-center text-primary_green-60"><FaDollarSign  className="h-[16.49px] w-[10.3px]"/></div>  
                <div className="w-[34.68px] h-[34.68px] rounded-full bg-primary_dark_gray-11 flex items-center justify-center text-primary_green-60"><FaEuroSign className="h-[16.49px] w-[10.3px]"/></div>
                <div className="w-[34.68px] h-[34.68px] rounded-full bg-primary_dark_gray-11 flex items-center justify-center text-primary_green-60"><BsCurrencyBitcoin className="size-[20px]"/></div>   
                <div className="w-[34.68px] h-[34.68px] rounded-full bg-primary_dark_gray-11 flex items-center justify-center text-primary_green-60"><FaEthereum className="h-[16.49px] w-[10.3px]"/></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
