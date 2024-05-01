import React from 'react'
import Header from './Header'
import { FaAngleRight } from "react-icons/fa6";


function TopSection() {
    const bgImage = 'https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

    return (
        <>
            <Header />
            <div className='w-full h-full bg-cover bg-no-repeat bg-center bg-netflix-image text-white '>
                <div className='w-full h-full absolute left-0 top-0 bg-gradient'></div>
                <div className='lg:w-10/12 px-10 text-center lg:mx-auto z-10 relative lg:pt-[10%] pt-[20%] pb-[10%]'>
                    <h1 className='text-[32px] lg:text-[48px] font-bold pb-8 lg:tracking-wide leading-10'>Unlimited movies, TV shows and more</h1>
                    <p className='text-[18px] lg:text-[24px] tracking-wider pb-2 md:pb-4'>Watch anywhere. Cancel anytime.</p>
                    <p className='text-[18px] lg:text-[20px]'>Ready to watch? Enter your email to create or restart your membership.</p>
                    <div className='z-10 relative flex w-10/12 mx-auto flex-col md:flex-row md:justify-around md:items-center gap-2 lg:w-1/2 lg:mx-auto lg:justify-between lg:items-center'>
                        <div className='w-full md:w-7/12 mx-auto my-6 text-slate-100'>
                            <div >
                                <input className='w-full px-4 py-4 rounded-md bg-[#000]/70 border-[#646463] placeholder:text-white border-[1px]' type='email' placeholder='Email Address' />
                            </div>
                        </div>
                        <div className='md:w-1/3 mx-auto text-xl text-center'>
                            <button className='bg-[#e50914] hover:bg-[#C11119] lg:font-semibold text-[18px] lg:text-[24px] flex justify-center items-center md:py-4 lg:px-2 lg:py-4 py-3 px-2 rounded-md w-full'>Get Started<FaAngleRight /></button>
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default TopSection
