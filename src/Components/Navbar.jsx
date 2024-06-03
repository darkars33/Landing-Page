import React from 'react'
import { FaFire } from "react-icons/fa";
import star from '../assets/star.svg'

const Navbar = () => {
  return (
    <div className='w-full p-4 pt-10  flex justify-center relative'>
      <div className='w-[70%] flex justify-between items-center'>
          <div className='flex items-center gap-10'>
          <div className='flex items-center gap-1'>
                    <FaFire className='text-3xl text-red-500' />
                    <h1 className='text-3xl font-bold'>uifry</h1>
          </div>
          <div className='flex items-center'>
                    <ul className='flex gap-5 items-center'>
                              <li className='text-lg font-semibold text-red-500 cursor-pointer'>Home</li>
                              <li className='text-lg font-semibold hover:text-red-500 cursor-pointer'>About Us</li>
                              <li className='text-lg font-semibold hover:text-red-500 cursor-pointer'>Pricing</li>
                              <li className='text-lg font-semibold hover:text-red-500 cursor-pointer'>Features</li>
                    </ul>
          </div>
          </div>
          <button className='p-3 px-10 bg-black text-white rounded-[3px] hover:bg-slate-700 text-[18px]'>Download</button>
          <img src={star} alt="" className='absolute right-10 bottom-0'/>
      </div>
    </div>
  )
}

export default Navbar;
