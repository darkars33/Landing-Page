"use client";
import React from "react";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaRegPlayCircle } from "react-icons/fa";
import { GiPodiumWinner } from "react-icons/gi";
import { RiMoneyDollarBoxFill } from "react-icons/ri";
import m1 from "../assets/m1.svg";
import m2 from "../assets/m2.svg";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="w-full relative flex justify-center" id="home">
      <div className="w-[90%] p-4 relative flex  md:w-[100%]">
        <div className="w-[50%] p-3 relative md:w-[100%] flex flex-col gap-10 fv:gap-1 fv:pb-10">
          <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full right-24 z-[-1000] shadow-custom"></div>
          <div className="flex flex-col gap-4 z-[30] fv:text-justify fv:items-center">
          <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
            <h1 className="text-[3.5rem] font-bold md:text-[3rem]">
              Make The Best Financial Decisions
            </h1>
            </motion.div>
            <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae
              harum maiores quia quo beatae? Placeat error facilis similique
              dolor enim consequuntur sequi soluta.{" "}
            </p>
            </motion.div>
            <div className="flex gap-16 fv:gap-1">
            <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
              <button className="p-3 px-7 bg-black rounded-[4px] text-white flex items-center fv:py-4 fv:p-2 hover:bg-slate-600">
                Get Started{" "}
                <IoIosArrowRoundForward className="text-white text-[2rem]" />
              </button>
              </motion.div>
              <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
              <div className="flex items-center mt-3">
                <FaRegPlayCircle className="text-[2rem] text-black rounded-[50%] cursor-pointer" />
                <h1>Watch Video</h1>
              </div>
              </motion.div>
            </div>
          </div>

          <div className="p-4 relative flex flex-col gap-10 fv:gap-20">
            <div className="p-3   bg-black w-[100%] top-28 flex rounded-xl z-30">
                  <div className="w-[100%] flex justify-around fv:flex-col fv:items-center gap-3">
                  <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
                    <div className="flex items-center">
                      <GiPodiumWinner className="text-[2rem] text-white" />
                      <h1 className="text-white">Achievement</h1>
                    </div>
                    </motion.div>
                    <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
                    <div className="flex items-center">
                      <RiMoneyDollarBoxFill className="text-[2rem] text-white" />
                      <h1 className="text-white">Finance</h1>
                    </div>
                    </motion.div>
                  </div>
            </div>
            <div className="p-3 h-10 rounded-xl z-10 w-[100%] flex items-center justify-center gap-2 fv:flex-col">
            <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
                  <h1 className="text-[18px] bg-red-500 p-3 rounded-xl">Make the Best Finance Decision</h1>
                  </motion.div>
                  <motion.div
            initial={{ opacity: 0, translateY: 30 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15 }}
          >
                  <h1 className="text-[18px] bg-red-500 p-3 rounded-xl">Make the Best Finance Decision</h1> 
                  </motion.div>
            </div>
          </div>
        </div>

        <div className="w-[50%] relative flex items-center justify-end md:hidden">
        <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full right-24 z-[-1] shadow-custom"></div>
        <motion.div
            initial={{ opacity: 0, translateY: 10 }}
            animate={{ opacity: 1, translateY: 0 }}
            exit={{ opacity: 0, translateY: 100 }}
            transition={{ duration: 0.15, delay: 0.05 }}
          >
          <img src={m1} alt="" className="h-[600px] rounded-2xl bg-black"/>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
