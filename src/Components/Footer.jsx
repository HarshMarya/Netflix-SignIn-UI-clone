import React from 'react'
import { LuLanguages } from "react-icons/lu";


function Footer() {
    return (
        <footer className='bg-black text-white py-10 pl-10 lg:pl-[15%] lg:pr-[10%]'>
            <div className=''>
                <p>Questions? Call <a href='tel:000-800-919-1694' className=' cursor-pointer hover:underline'>000-800-919-1694</a></p>
            </div>
            <div className='flex lg:flex-row flex-col lg:justify-between gap-4 py-6'>
                <div className='flex justify-between md:justify-evenly lg:gap-20 px-10'>
                    <ul className='text-[#ffffffb3]'>
                        <li className=' cursor-pointer underline py-1'><a>FAQ</a></li>
                        <li className=' cursor-pointer underline py-1'><a>Investor Relations</a> </li>
                        <li className=' cursor-pointer underline py-1'><a>Privacy</a></li>
                        <li className=' cursor-pointer underline py-1'><a>Speed Test</a></li>
                    </ul>
                    <ul className='text-[#ffffffb3]'>
                        <li className=' cursor-pointer underline py-1'><a>Help Centre</a> </li>
                        <li className=' cursor-pointer underline py-1'><a>Jobs</a></li>
                        <li className=' cursor-pointer underline py-1'><a>Cookie Preferences</a> </li>
                        <li className=' cursor-pointer underline py-1'><a>Legal Notices</a> </li>
                    </ul>
                </div>
                <div className='flex justify-between px-6 md:justify-evenly items-start lg:gap-20'>
                    <ul className='ml-3 text-[#ffffffb3]'>
                        <li className=' cursor-pointer underline py-1'><a>Account</a></li>
                        <li className=' cursor-pointer underline py-1'><a>Ways to Watch</a></li>
                        <li className=' cursor-pointer underline py-1'><a>
                            Corporate Information</a> </li>
                        <li className=' cursor-pointer underline py-1'><a>Only on Netflix</a> </li>
                    </ul>
                    <ul className='mr-14 text-[#ffffffb3]'>
                        <li className=' cursor-pointer underline py-1'><a>Media Centre</a></li>
                        <li className=' cursor-pointer underline py-1'><a>Terms of Use</a></li>
                        <li className=' cursor-pointer underline py-1'><a>Contact Us</a> </li>
                    </ul>
                </div>
            </div>
            <div className=''>
                <div class="flex ">
                    <div className='flex justify-center items-center border-[#ffffffb3] border-[1px] my-4 py-1 px-4 lg:py-2 rounded-md '>
                        <LuLanguages className='hidden md:block' />
                        <select className='text-white bg-transparent outline-none' name="language" id="lang">
                            <option value="English">English</option>
                            <option value="hindi">हिंदी</option>
                        </select>
                    </div>
                </div>
                <span className='text-[#ffffffb3]'>Netflix India</span>
            </div>

        </footer>
    )
}

export default Footer
