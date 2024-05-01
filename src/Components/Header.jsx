import React from 'react'
import { LuLanguages } from "react-icons/lu";



function Header() {
    const logoUrl = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'


    return (
        <>
            <div className='flex text-white w-full justify-around absolute'>
                <div className='w-[150px] lg:w-[210px] relative z-10'>
                    <img src={logoUrl} alt='netflix-logo' />
                </div>
                <div>
                    <div class="relative flex items-center gap-2 lg:gap-6 z-20">
                        <div className='flex justify-center items-center border-[#ffffffb3] border-[1px] my-4 py-1 md:px-4 md:py-2 rounded-md cursor-pointer'>
                            <LuLanguages className='hidden md:block' />
                            <select className='text-white bg-transparent outline-none' name="language" id="lang">
                                <option value="English">English</option>
                                <option value="hindi">हिंदी</option>
                            </select>
                        </div>
                        <div className='bg-[#e50914] hover:bg-[#C11119] px-2 my-4 py-1 md:px-4 md:py-2 rounded-md'><button>Sign In</button></div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default Header
