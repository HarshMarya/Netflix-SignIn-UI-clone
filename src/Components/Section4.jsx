import React from 'react'
import Seperator from './Seperator'

function Section4() {
    const laptopImageUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png'
    const laptopVideoUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v'
  return (
    <>
    <div className='bg-black text-white py-[3.5rem] flex flex-col lg:flex-row items-center px-4 lg:px-40'>
        {/* content */}
        <div className=' text-center lg:text-left lg:w-1/2 lg:mx-auto '>
            <h2 className='text-[32px] lg:text-[48px] font-bold mb-6'>Watch everywhere</h2>
            <p className='mx-4 lg:mx-0 text-[18px] lg:text-[24px] md:w-10/12 md:mx-auto'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
        </div>
        {/* image and video */}
        <div>
        <div className='relative '>
            <img src={laptopImageUrl} className='relative z-10'/>
            <video src={laptopVideoUrl} className='absolute top-[8.4%] right-[19.7%] w-[62.5%] md:w-[400px] md:right-[18.5%] lg:w-[65%]' autoPlay={"autoplay"} muted loop/>
        </div>
        </div>
    </div>
    <Seperator/>
</>
  )
}

export default Section4
