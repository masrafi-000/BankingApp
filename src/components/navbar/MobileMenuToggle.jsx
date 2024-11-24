import { motion, AnimatePresence } from "framer-motion";
import React from "react";
import { NavLink, Link } from "react-router-dom";
import { MenuItem } from "./menuItem";

const MobileMenuToggle = ({ toggleMenu, handleActive }) => {
  return (
    <AnimatePresence mode="wait">
      {toggleMenu && (
        <motion.div
          initial={{ opacity: 0, y: -100 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -100 }}
          transition={{ duration: 0.3 }}
          className="relative top-0 left-0 w-screen h-auto z-20 md:hidden"
        >
          <div className="ml-[5%] w-[90vw] bg-primary_dark_gray-11 py-5 text-sm font-semibold flex flex-col items-center justify-center gap-8 text-absulate_white border-[1px] border-primary_dark_gray-15 rounded-3xl">
            {MenuItem.map((item) => (
              <NavLink
                key={item.id}
                onClick={handleActive}
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
            <div className="font-semibold flex items-center gap-2 text-absulate_white">
              <div
                className={`text-sm w-[87px] h-[45px] bg-primary_dark_gray-15 text-absulate_white  rounded-full flex items-center justify-center `}
              >
                <Link to={"/signup"}>Sign Up</Link>
              </div>
              <div
                className={`text-sm w-[87px] h-[45px] bg-primary_green-60 text-primary_dark_gray-11 rounded-full flex items-center justify-center `}
              >
                <Link to={"/login"}>login</Link>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenuToggle;
