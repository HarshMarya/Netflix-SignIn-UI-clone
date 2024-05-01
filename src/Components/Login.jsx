import React from 'react'
import Header from './Header'

function Login() {
    return (
        <>
            <div className='w-full h-screen'>
                <Header />
                <div className='w-full h-screen'>
                    <img src='https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg' className='w-full h-full object-cover' />
                    <div className='w-full h-full bg-black absolute top-0 opacity-50'></div>
                </div>
                <div className='w-full fixed top-[20%] left-auto'>
                    <div className='w-[320px] h-[600px] bg-black/60 mx-auto rounded-md py-16 px-16'>
                        <h1 className='text-white text-3xl font-bold'>Sign In</h1>
                        <form>
                            <input placeholder='Email'/>
                            <input placeholder='Password'/>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login
