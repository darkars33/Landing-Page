import React from 'react'

const FAQ = () => {
  return (
          <div id="features" className="w-full flex justify-center py-10">
          <div className="w-[80%] p-5 flex flex-col md:p-0 gap-5">
            
            <div className='w-[70%] flex flex-col fv:w-[100%] fv:items-center'>
                              <h1 className='text-[1.5rem] text-red-500 fv:text-[1rem]'>FAQ</h1>
                              <h1 className='text-[3.5rem] font-bold fv:text-center fv:text-[1.5rem] md:text-[2rem]'>FREQUENTLY ASKED QUESTIONS</h1>
            </div>
            <div className='w-[100%] flex flex-wrap justify-between gap-4 md:flex-col md:items-center'>
                    <div className='w-[40%] p-4 bg-red-400 rounded-lg md:w-[100%]'>
                              <h1 className='text-[1.5rem] font-medium'>The Best Financial Accounting App Ever!</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='w-[40%] p-4 bg-red-400 rounded-lg md:w-[100%]'>
                              <h1 className='text-[1.5rem] font-medium'>The Best Financial Accounting App Ever!</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
                    <div className='w-[40%] p-4 bg-red-400 rounded-lg md:w-[100%]'>
                              <h1 className='text-[1.5rem] font-medium'>The Best Financial Accounting App Ever!</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing eli.</p>
                    </div>
                    <div className='w-[40%] p-4 bg-red-400 rounded-lg md:w-[100%]'>
                              <h1 className='text-[1.5rem] font-medium'>The Best Financial Accounting App Ever!</h1>
                              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                    </div>
            </div>
          </div>
        </div>
  )
}

export default FAQ
