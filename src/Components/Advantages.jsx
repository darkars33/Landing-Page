import React from 'react'
import m2 from '../assets/m2.svg'
import { IoIosNotifications } from "react-icons/io";


const Advantages = () => {
  return (
          <div id='about' className='w-full flex justify-center pt-10'>
          <div className='w-[80%] p-5 flex justify-around md:p-0'>
              
              <div className='w-[50%] flex flex-col gap-6 md:w-[100%]'>
                        <div className='fv:text-center'>
                                  <h1 className='text-[1.5rem] text-red-500'>ADVANTAGES</h1>
                                  <h1 className='text-[3.5rem] font-bold'>WHY CHOICE UIFRY</h1>
                        </div>
                        <div className='flex flex-col gap-6'>
                                  <div className='flex flex-col gap-3 fv:text-justify'>
                                            <h1 className='text-[1.2rem] font-bold flex gap-2 items-center'> <IoIosNotifications className='text-red-500' /> Clever Notification</h1>
                                            <h1 className='text-[0.9rem] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae expedita, quos atque maiores, esse vel cumque officia voluptates ab libero vitae, saepe sit illo sequi numquam minima impedit pariatur quis. Tempore at error eos optio autem maxime eveniet reprehenderit ut magnam culpa illo dignissimos doloremque officia, pariatur, maiores consectetur nobis porro fugiat aspernatur dolor molestiae nulla, aliquam tempora quibusdam. Omnis ipsum, possimus facere ab est aliquam quia in, mollitia iusto odio vel aperiam quam ut quae quidem corrupti reiciendis fugit.</h1>
                                  </div>
                                  
                        </div>
              </div>
              <div className='w-[50%] flex justify-end relative md:hidden'>
              <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full  bottom-48 z-[-1000] shadow-custom"></div>
                        <img src={m2} alt="" className='h-[500px] rounded-lg'/>
              </div>
          </div>
        </div>
  )
}

export default Advantages
