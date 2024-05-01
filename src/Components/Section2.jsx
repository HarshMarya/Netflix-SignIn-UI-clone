import React from 'react'
import Seperator from './Seperator'

function Section2() {
    const tvVideoUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'

    const tvImageUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/tv.png'
    return (
        <>
            <Seperator />
            <div className='relative bg-black text-white py-[3.5rem] flex flex-col lg:flex-row items-center px-4 lg:px-40'>
                {/* content */}
                <div className=' text-center lg:text-left lg:w-1/2 lg:mx-auto '>
                    <h2 className='text-[32px] lg:text-[48px] font-bold mb-6'>Enjoy on your TV</h2>
                    <p className='mx-4 lg:mx-0 lg:text-[24px]'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                </div>
                {/* image and video */}
                <div>
                <div className='relative'>
                    <img src={tvImageUrl} className=''/>
                    <video src={tvVideoUrl} className='absolute top-[21.4%] right-[14.7%] w-[71.5%] md:w-[460px] md:right-[14.5%] lg:w-[72%]' autoPlay={"autoplay"} muted loop/>
                </div>
                </div>
            </div>
            <Seperator/>
        </>
    )
}

export default Section2
