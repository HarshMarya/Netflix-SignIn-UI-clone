import React, { useState } from 'react'
import FAQ from './FAQ'
import { IoAddSharp, IoCloseSharp } from "react-icons/io5";
import Seperator from './Seperator';
import { FaAngleRight } from "react-icons/fa6";





function FaqBox(props) {
  // take the FAQ file data in this function
  const [hide, setHide] = useState(false)

  return (
    <div className='my-2 cursor-pointer transition-all delay-500'
      // each container should have unique key if we using the map function
      key={props.key}
      onClick={() => setHide(!hide)}>
      <div className='text-[18px] lg:text-[24px] bg-[#2d2d2d] hover:bg-[#414141] my-[2px] p-6 flex justify-between'>
        <h3>{props.question}</h3>
        {hide === false ? <IoAddSharp className='text-4xl' /> : <IoCloseSharp className='text-4xl font-medium' />}
      </div>
      <div className={`text-[18px] lg:text-[24px] bg-[#2d2d2d] p-4 ${hide === false ? "hidden" : "flex"}`}>
        <p>{props.answer}</p>
      </div>
    </div>
  )
}

function FaqContainer() {
  return (
    <>
      <div className='bg-[#000000] text-white px-10 md:px-20 lg:px-40 py-10'>
        <h2 className='text-[32px] lg:text-[48px] font-bold text-center mb-6'>Frequently asked questions</h2>
        {/* use map function render the faq data multiple times */}
        {FAQ.map(FaqBox)}
      </div>
      <div className='bg-black text-white px-10 text-center py-5'>
        <h3 className='text-[20px]'>Ready to watch? Enter your email to create or restart your membership.</h3>
        {/* Email and button */}
        <div className='flex w-full flex-col md:flex-row md:justify-around md:items-center gap-2 lg:w-1/2 lg:mx-auto lg:justify-between lg:items-center'>
          <div className='w-full md:w-7/12 mx-auto my-6 text-slate-100'>
            <div >
              <input className='w-full px-4 py-4 rounded-md bg-transparent border-gray2500 border-[1px]' type='email' placeholder='Email Address' />
            </div>
          </div>
          <div className='w-1/2 md:w-3/12 mx-auto text-xl text-center'>
            <button className='bg-[#e50914] hover:bg-[#C11119] flex justify-center items-center md:py-4 lg:px-2 lg:py-4 py-3 px-2 rounded-md w-full'>Get Started<FaAngleRight /></button>
          </div>
        </div>
      </div>
      <Seperator />
    </>

  )
}

export { FaqContainer, FaqBox }
