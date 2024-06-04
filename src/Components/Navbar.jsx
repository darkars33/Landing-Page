import React from "react";
import { FaFire } from "react-icons/fa";
import star from "../assets/star.svg";

const Navbar = () => {
  return (
    <div className="w-full p-4 pt-10  flex justify-center fixed md:fixed z-[1000]">
      <div className="w-[75%] flex justify-between items-center mx:w-[90%]">
        <div className="flex  justify-around gap-10 mx:gap-5">
          <div className="flex items-center gap-1">
            <FaFire className="text-3xl text-red-500" />
            <h1 className="text-3xl font-bold">uifry</h1>
          </div>
          <div className="flex items-center md:hidden">
            <ul className="flex items-center gap-5 mx:gap-2">
              <li className="text-lg font-medium text-red-500 cursor-pointer">
                Home
              </li>
              <li className="text-lg font-medium hover:text-red-500 cursor-pointer">
                About Us
              </li>
              <li className="text-lg font-medium hover:text-red-500 cursor-pointer">
                Pricing
              </li>
              <li className="text-lg font-medium hover:text-red-500 cursor-pointer">
                Features
              </li>
            </ul>
          </div>
        </div>
        <button className="p-3 px-10 bg-black text-white rounded-[3px] hover:bg-slate-700 text-[18px] md:hidden">
          Download
        </button>
        <img src={star} alt="" className="absolute right-10 bottom-0 mx:right-0 md:hidden" />
      </div>
    </div>
  );
};

export default Navbar;
