import {
  Abstract_2,
  desktop_logo,
  mobile_logo,
  laptop_logo,
} from "../../assets";
import { Link, NavLink } from "react-router-dom";
import { useState } from "react";
import MobileMenuToggle from "./MobileMenuToggle";
import { MenuItem } from "./menuItem";

const Navbar = () => {
  const [active, setActive] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleActive = () => {
    setActive(!active);
  };

  return (
    <>
      <div className="w-[380px] h-[350px] absolute top-[-32px] left-[-34px] -z-10 ">
        <img
          className="w-full h-full object-cover"
          src={Abstract_2}
          alt="abstract"
        />
      </div>

      <div className="w-screen flex items-center justify-center">
        <div className="z-10 w-[87vw] h-[68px] mt-10 mx-4 mb-1 bg-primary_dark_gray-11 pl-[24px] pr-[14px] rounded-full flex items-center justify-between border-[1px] border-primary_dark_gray-15">
          {/* Logo section */}
          <img className="block md:hidden" src={mobile_logo} alt="logo" />
          <img
            className="hidden md:block xl:hidden"
            src={laptop_logo}
            alt="logo"
          />
          <img className="hidden xl:block" src={desktop_logo} alt="logo" />

          {/* Menu section */}
          <div className="hidden md:block">
            <div className="text-sm font-semibold flex items-center gap-6 md:gap-8 xl:gap-10 text-absulate_white">
              {MenuItem.map((item) => (
                <NavLink
                  onClick={handleActive}
                  key={item.id}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "text-sm w-[77px] h-[41px] rounded-full bg-primary_dark_gray-15 flex items-center justify-center hover:text-primary_green-60"
                      : ""
                  }
                >
                  {item.title}
                </NavLink>
              ))}
            </div>
          </div>
          {/* Login section */}
          <div className="hidden md:block">
            <div className="font-semibold flex items-center gap-2 text-absulate_white">
              <div className="text-sm w-[87px] h-[45px] bg-primary_dark_gray-15 rounded-full flex items-center justify-center hover:text-primary_green-60">
                <Link to={"/signup"}>Sign Up</Link>
              </div>
              <div className="text-sm w-[87px] h-[45px] bg-primary_green-60 rounded-full flex items-center justify-center text-primary_dark_gray-11">
                <Link to={"/login"}>login</Link>
              </div>
            </div>
          </div>
          <NavLink
            onClick={() => setToggleMenu(!toggleMenu)}
            className={`flex items-center justify-center h-10 w-[56px] bg-primary_green-60 text-primary_dark_gray-10 rounded-full cursor-pointer md:hidden `}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5M12 17.25h8.25"
              />
            </svg>
          </NavLink>
        </div>
      </div>

      {/* Mobile device menu section */}
      <MobileMenuToggle
        toggleMenu={toggleMenu}
        items={MenuItem}
        handleActive={handleActive}
      />
    </>
  );
};

export default Navbar;
