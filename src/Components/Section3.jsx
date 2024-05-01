import React from 'react'
import Seperator from './Seperator'

function Section3() {
    const mobileImageUrl = 'https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg'
    return (
        <>
            <div className='bg-black text-white py-[3.5rem] flex flex-col-reverse lg:flex-row items-center px-4 lg:px-40'>
                {/* image and video */}
                <div>
                    <div className='relative'>
                        <img src={mobileImageUrl} className='' />
                    </div>
                </div>
                {/* content */}
                <div className='text-center lg:text-left lg:w-1/2 lg:mx-auto '>
                    <h2 className='text-[32px] lg:text-[48px] font-bold mb-6'>Download your shows to watch offline</h2>
                    <p className='mx-4 lg:mx-0 text-[18px] lg:text-[24px] md:w-10/12 md:mx-auto'>Save your favourites easily and always have something to watch.</p>
                </div>

            </div>
            <Seperator />
        </>
    )
}

export default Section3
