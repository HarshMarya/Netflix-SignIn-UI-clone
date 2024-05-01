import React from 'react'
import Seperator from './Seperator'

function Section5() {
    const kidsImageUrl = 'https://occ-0-2159-3647.1.nflxso.net/dnm/api/v6/19OhWN2dO19C9txTON9tvTFtefw/AAAABVr8nYuAg0xDpXDv0VI9HUoH7r2aGp4TKRCsKNQrMwxzTtr-NlwOHeS8bCI2oeZddmu3nMYr3j9MjYhHyjBASb1FaOGYZNYvPBCL.png?r=54d'

    return (
        <>
            <div className='bg-black text-white py-[3.5rem] flex flex-col-reverse  lg:flex-row items-center px-4 lg:px-40'>
                {/* image and video */}
                <div>
                    <div className='relative'>
                        <img src={kidsImageUrl} className='' />
                    </div>
                </div>
                {/* content */}
                <div className=' text-center lg:text-left lg:w-1/2 lg:mx-auto '>
                    <h2 className='text-[32px] lg:text-[48px] font-bold mb-6'>Create profiles for kids
                    </h2>
                    <p className='mx-4 lg:mx-0 text-[18px] lg:text-[24px] md:w-10/12 md:mx-auto'>Send children on adventures with their favourite characters in a space made just for them—free with your membership.

                    </p>
                </div>

            </div>
            <Seperator />
        </>
    )
}

export default Section5
