import React from "react";
import { laptop_logo } from "../../assets";
import { nanoid } from "nanoid";
import { NavLink } from "react-router-dom";
import { FaFacebook } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";

const MenuItem = [
  {
    id: nanoid(),
    title: "Home",
    path: "/",
  },
  {
    id: nanoid(),
    title: "About",
    path: "/about",
  },
  {
    id: nanoid(),
    title: "Careers",
    path: "/careers",
  },
  {
    id: nanoid(),
    title: "Security",
    path: "/security",
  },
];

const Footer = () => {
  return (
    <div className="w-full h-auto bg-primary_dark_gray-11 mt-[150px] flex items-center justify-center">
      <div className="container 2xl:max-w-[1596px] mt-[100px] flex flex-col items-center justify-center gap-[50px]">
        <div className="flex flex-col items-center justify-center gap-[50px]">
          <img src={laptop_logo} alt="" />
          <div className="flex items-center justify-center gap-[30px] text-absulate_white">
            {MenuItem.map((item) => (
              <NavLink
                className={({ isActive }) =>
                  isActive ? "text-primary_green-60" : ""
                }
                key={item.id}
                to={item.path}
              >
                {item.title}
              </NavLink>
            ))}
          </div>
        </div>
        <span className="w-full border-t-[1px] border-primary_dark_gray-15" />

        <div className="flex items-center justify-center gap-[20px]">
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-primary_green-60"
            >
              <path d="M1.5 8.67v8.58a3 3 0 0 0 3 3h15a3 3 0 0 0 3-3V8.67l-8.928 5.493a3 3 0 0 1-3.144 0L1.5 8.67Z" />
              <path d="M22.5 6.908V6.75a3 3 0 0 0-3-3h-15a3 3 0 0 0-3 3v.158l9.714 5.978a1.5 1.5 0 0 0 1.572 0L22.5 6.908Z" />
            </svg>
            <p className="text-[18px] leading-1.5 font-regular text-absulate_white">hello@skillbirdge.com</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-primary_green-60"
            >
              <path
                fillRule="evenodd"
                d="M1.5 4.5a3 3 0 0 1 3-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 0 1-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 0 0 6.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 0 1 1.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 0 1-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5Z"
                clipRule="evenodd"
              />
            </svg>
            <p className="text-[18px] leading-1.5 font-regular text-absulate_white">+91 91813 23 2309</p>
          </div>
          <div className="flex items-center gap-1">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className="size-5 text-primary_green-60"
            >
              <path
                fillRule="evenodd"
                d="m11.54 22.351.07.04.028.016a.76.76 0 0 0 .723 0l.028-.015.071-.041a16.975 16.975 0 0 0 1.144-.742 19.58 19.58 0 0 0 2.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 0 0-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 0 0 2.682 2.282 16.975 16.975 0 0 0 1.145.742ZM12 13.5a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"
                clipRule="evenodd"
              />
            </svg>

            <p className="text-[18px] leading-1.5 font-regular text-absulate_white">Somewhere in the World</p>
          </div>
        </div>

        <span className="w-full border-t-[1px] border-primary_dark_gray-15" />

        <div className="flex items-center justify-between w-full h-[84px] rounded-full bg-primary_dark_gray-10 mb-[50px] pl-[16px] pr-[30px]">
          <div className="flex items-center gap-[14px]">
            <div className="w-[52px] h-[52px] rounded-full bg-primary_green-60 flex justify-center items-center"><FaFacebook className="w-[24px] h-[24px]" /></div>
            <div className="w-[52px] h-[52px] rounded-full bg-primary_green-60 flex justify-center items-center"><FaTwitter className="w-[24px] h-[24px]" /></div >
            <div className="w-[52px] h-[52px] rounded-full bg-primary_green-60 flex justify-center items-center"><FaLinkedin className="w-[24px] h-[24px]" /></div>
          </div> 
          <p className="text-[18px] leading-1.5 font-light text-primary_dark_gray-70">YourBank All Rights Reserved</p>
          <div className="flex items-center gap-3">
            <p className="text-[18px] leading-1.5 font-regular text-primary_dark_gray-70">Privacy Policy</p>
            <span className="w-0 h-[27px] border-r-[1px] border-primary_dark_gray-15"></span>
            <p className="text-[18px] leading-1.5 font-regular text-primary_dark_gray-70">Terms of Service</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
