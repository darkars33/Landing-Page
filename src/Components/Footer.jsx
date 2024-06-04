import React from 'react'
import { FaFire } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";


const Footer = () => {
  return (
    <div className="w-full flex justify-center pb-10">
      <div className="w-[80%] p-5 flex md:p-0 justify-around md:flex-col md:items-center md:gap-5">
           <div className='flex flex-col gap-2 md:items-center'>
                    <h1 className='text-[1.5rem] font-bold flex items-center gap-1 fv:text-[2rem]'> <FaFire className='text-red-500' /> uifry</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'> <MdEmail className='text-red-500' /> uifry@gamil.com</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'> <FaPhoneAlt className='text-red-500' /> uifry</h1>
          </div>
          <div className='flex flex-col gap-2 md:items-center'>
                    <h1 className='text-[1.5rem] flex items-center gap-1 fv:text-[2rem]'> Link</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'> Home</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  About us</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  Booking</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  Blog</h1>
          </div>  

          <div className='flex flex-col gap-2 md:items-center'>
                    <h1 className='text-[1.5rem] flex items-center gap-1 fv:text-[2rem]'> Legal</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'> Term Of Use</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  Privacy Policy</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  Cookie Policy</h1>
          </div>

          <div className='flex flex-col gap-2 md:items-center'>
                    <h1 className='text-[1.5rem] flex items-center gap-1 fv:text-[2rem]'> Product</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'> Take Tour</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  Live Chat</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] hover:text-blue-500 cursor-pointer'>  Reviews</h1>
          </div>

          <div className='flex flex-col gap-2 md:items-center'>
                    <h1 className='text-[1.5rem] flex items-center gap-1 fv:text-[2rem]'> Newsletter</h1>
                    <h1 className='text-[1rem] flex items-center gap-1 fv:text-[1.5rem] cursor-pointer hover:text-blue-500'> Stay Up To Date</h1>
                    <button className='p-2 px-7 bg-black text-white rounded-sm fv:text-[1.5rem] cursor-pointer hover:bg-slate-500'>Subscribe</button>
          </div>

      </div>
    </div>
  )
}

export default Footer
