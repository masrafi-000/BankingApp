import React from "react";
import { Abstract_4, about } from "../../../assets";

const Home = () => {
  return (
    <div className="container relative max-w-[1599px] mt-[53px] h-[816px] bg-primary_dark_gray-11 rounded-[20px]">
      <div className="relative w-full h-full p-[50px]">
        <img
          className=" w-[505px] h-[480px] absolute top-0 right-0 "
          src={Abstract_4}
          alt="abstract"
        />
        

        <div className=" z-20 relative w-[791px] h-[495px] bg-primary_dark_gray-10 rounded-tr-none rounded-br-[80px] rounded-tl-[20px] rounded-bl-[20px] p-[80px] flex flex-col items-start justify-center gap-[23px]">
            <h2 className="text-[58px] leading-1.3 font-medium text-start text-absulate_white">Welcome to  <span className="text-primary_green-60">YourBank</span> Careers!</h2>
            <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70 text-start">Join our team and embark on a rewarding journey in the banking industry. At YourBank, we are committed to fostering a culture of excellence and providing opportunities for professional growth. With a focus on innovation, customer service, and integrity, we strive to make a positive impact in the lives of our customers and communities. Join us today and be a part of our mission to shape the future of banking.</p>
        </div>
        </div>
        <div className="absolute w-[968px] h-[716px] top-[50px] right-[50px] ">
          <img
            className="w-[985px] h-[735px] object-cover"
            src={about}
            alt="img"
          />
        
      </div>
    </div>
  );
};

export default Home;
