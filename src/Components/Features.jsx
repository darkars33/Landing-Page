import React from 'react'
import m1 from '../assets/m1.svg'
import { GiStarShuriken } from "react-icons/gi";


const Features = () => {
  return (
    <div id='features' className='w-full flex justify-center'>
      <div className='w-[80%] p-5 flex justify-around md:p-0'>
          <div className='w-[50%] flex justify-center relative md:hidden'>
          <div className="bg-gradient-to-b from-red-400 vai-gradient-to-t to-yellow-300 absolute rounded-full  bottom-48 z-[-1000] shadow-custom"></div>
                    <img src={m1} alt="" className='h-[500px] rounded-lg'/>
          </div>
          <div className='w-[50%] flex flex-col gap-6 md:w-[100%]'>
                    <div>
                              <h1 className='text-[1.5rem] text-red-500'>FEATURES</h1>
                              <h1 className='text-[3.5rem] font-bold'>Uifry Premium</h1>
                    </div>
                    <div className='flex flex-col gap-6'>
                              <div className='flex flex-col gap-3'>
                                        <h1 className='text-[1.2rem] font-bold flex gap-2 items-center'> <GiStarShuriken className='text-red-500' /> Budgeting Intervals</h1>
                                        <h1 className='text-[0.9rem] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus illo temporibus iusto explicabo ipsum!</h1>
                              </div>
                              <div className='flex flex-col gap-3'>
                                        <h1 className='text-[1.2rem] font-bold flex gap-2 items-center'> <GiStarShuriken className='text-red-500' />Budgeting Intervals</h1>
                                        <h1 className='text-[0.9rem] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus illo temporibus iusto explicabo ipsum!</h1>
                              </div>
                              <div className='flex flex-col gap-3'>
                                        <h1 className='text-[1.2rem] font-bold flex gap-2 items-center'> <GiStarShuriken className='text-red-500' />Budgeting Intervals</h1>
                                        <h1 className='text-[0.9rem] text-slate-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam repellendus illo temporibus iusto explicabo ipsum!</h1>
                              </div>
                    </div>
          </div>
      </div>
    </div>
  )
}

export default Features
