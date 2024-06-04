import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import m1 from "../assets/m1.svg";
import m2 from "../assets/m2.svg";


const Hero = () => {
  return (
    <div className="w-full p-4 relative flex justify-center">
      <div className="w-[90%] p-4 relative flex  md:w-[100%]">
        <div className="w-[50%] p-3 relative md:w-[100%] flex flex-col gap-10">
          <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full right-24 z-[-1000] shadow-custom"></div>
          <div className="flex flex-col gap-4 z-[30] fv:items-center">
            <h1 className="text-[3.5rem] font-bold md:text-[3rem]">
              Make The Best Financial Decisions
            </h1>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              harum maiores quia quo beatae? Placeat error facilis similique
              dolor enim consequuntur sequi soluta.{" "}
            </p>
            <div className="flex gap-16 ">
              <button className="p-3 px-7 bg-black rounded-[4px] text-white flex items-center">
                Get Started{" "}
                <IoIosArrowRoundForward className="text-white text-[2rem]" />
              </button>
              <div className="flex items-center">
                <FaRegPlayCircle className="text-[2rem] text-black rounded-[50%] cursor-pointer" />
                <h1>Watch Video</h1>
              </div>
            </div>
          </div>

          <div className="p-4  relative flex flex-col gap-10">
            <div className="p-3   bg-black w-[100%] top-28 flex rounded-xl z-30">
                  <div className="w-[100%] flex justify-around">
                    <div className="flex items-center">
                      <GiPodiumWinner className="text-[2rem] text-white" />
                      <h1 className="text-white">Achievement</h1>
                    </div>
                    <div className="flex items-center">
                      <RiMoneyDollarBoxFill className="text-[2rem] text-white" />
                      <h1 className="text-white">Finance</h1>
                    </div>
                  </div>
            </div>
            <div className="p-3 h-10 rounded-xl z-10 w-[100%] flex items-center justify-center gap-2">
                  <h1 className="text-[18px] bg-red-500 p-3 rounded-xl">Make the Best Finance Decision</h1>
                  <h1 className="text-[18px] bg-red-500 p-3 rounded-xl">Make the Best Finance Decision</h1> 
            </div>
          </div>
        </div>

        <div className="w-[50%] relative flex items-center justify-end md:hidden">
        <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full right-24 z-[-1] shadow-custom"></div>
          <img src={m1} alt="" className="h-[600px] rounded-2xl bg-black"/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
