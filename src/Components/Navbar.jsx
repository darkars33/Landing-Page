import React, {useState} from "react";
import { FaFire } from "react-icons/fa";
import star from "../assets/star.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import { RxCross1 } from "react-icons/rx";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="w-full p-4 pt-10  flex justify-center fixed md:fixed z-[1000]">
      <div className="w-[75%] flex justify-between items-center mx:w-[90%]">
        <div className="flex  justify-around gap-10 mx:gap-5">
        <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.1, delay: 0.07 }}
            >
          <div className="flex items-center gap-1">
            <FaFire className="text-3xl text-red-500" />
            <h1 className="text-3xl font-bold">uifry</h1>
          </div>
          </motion.div>
          <div className="flex items-center md:hidden">
            <ul className="flex items-center gap-7 mx:gap-2">
            <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.1, delay: 0.07 }}
            >
              <a href="#home">
                <li className="text-lg font-medium text-red-500 cursor-pointer">
                  Home
                </li>
              </a>
              </motion.div>
              <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.1, delay: 0.07 }}
            >
              <a href="#about">
                <li className="text-lg font-medium hover:text-red-500 cursor-pointer">
                  AboutUs
                </li>
              </a>
              </motion.div>
              <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.1, delay: 0.07 }}
            >
              <a href="#price">
                <li className="text-lg font-medium hover:text-red-500 cursor-pointer">
                  Pricing
                </li>
              </a>
              </motion.div>
              <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.1, delay: 0.07 }}
            >
              <a href="#features">
                <li className="text-lg font-medium hover:text-red-500 cursor-pointer">
                  Features
                </li>
              </a>
              </motion.div>
            </ul>
          </div>
        </div>
        <button className="p-3 px-10 bg-black text-white rounded-[3px] hover:bg-slate-700 text-[18px] md:hidden">
        <motion.div
              className="w-full h-full"
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              transition={{ duration: 0.1, delay: 0.07 }}
            >Download</motion.div>
        </button>
        <img
          src={star}
          alt=""
          className="absolute right-10 bottom-0 mx:right-0 md:hidden"
        />
        <div className="hidden md:flex md:flex-col w-full">
          <div className="flex  items-end justify-end w-[100%]">
            {open ? <RxCross1 className="text-3xl" onClick={() => setOpen(!open)}/>:<GiHamburgerMenu className="text-3xl" onClick={() => setOpen(!open)}/>}
            </div>
            {open && <div className="p-4 w-[100%] absolute top-20 left-0">
            <ul className="flex flex-col items-center gap-5 mx:gap-2">
              <a href="#home">
                <li className="text-3xl font-medium text-red-500 cursor-pointer" onClick={() =>setOpen(!open)}>
                  Home
                </li>
              </a>
              <a href="#about">
                <li className="text-3xl font-medium hover:text-red-500 cursor-pointer" onClick={() =>setOpen(!open)}>
                  About Us
                </li>
              </a>
              <a href="#price">
                <li className="text-3xl font-medium hover:text-red-500 cursor-pointer" onClick={() =>setOpen(!open)}>
                  Pricing
                </li>
              </a>
              <a href="#features">
                <li className="text-3xl font-medium hover:text-red-500 cursor-pointer" onClick={() =>setOpen(!open)}>
                  Features
                </li>
              </a>
            </ul>
            </div>}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
