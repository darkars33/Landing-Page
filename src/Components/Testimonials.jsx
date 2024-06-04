import React from "react";
import testimonials from "../Constant/data";

const Testimonials = () => {
  return (
    <div id="price" className="w-full flex justify-center pt-10">
      <div className="w-[80%] p-5 flex flex-col items-center md:p-0">
        <div className="flex flex-col items-center pb-5">
          <h1 className="text-[2rem] font-bold md:text-[1.5rem] fv:text-[1rem]">TESTIMONIAL</h1>
          <h1 className="text-[3rem] font-bold md:text-[2rem] fv:text-[1.5rem] fv:text-center">What Our User Say About Us?</h1>
        </div>
        <div className="">
          <div className="p-4">
            <div className="flex gap-5 md:flex-col md:items-center">
              {testimonials.map((item) => {
                return (
                  <>
                    <img
                      src={item.avatar}
                      alt=""
                      className="h-[100px] w-[100px] rounded-[50%]"
                    />
                    <div className="flex flex-col gap-3 md:items-center">
                      <h1 className="text-[1.2rem] text-black font-medium">
                        {item.name}
                      </h1>
                      <h1 className="text-[0.9rem] text-slate-400 md:text-center fv:text-justify">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Totam repellendus illo temporibus iusto explicabo ipsum!
                      </h1>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
