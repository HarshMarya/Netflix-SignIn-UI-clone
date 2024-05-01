import React from 'react'
import Header from './Header'
import Seperator from './Seperator'

function SignIn() {
  const logoUrl = 'https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png'

  const bgImageUrl = 'https://assets.nflxext.com/ffe/siteui/vlv3/6cefb2f5-90be-4f57-adc4-f6c3c579273d/3943990c-f4e0-4147-82ad-f531e2b547f3/IN-en-20240401-popsignuptwoweeks-perspective_alpha_website_medium.jpg'

  return (
    <div>
      <div className='flex justify-between mx-10 items-center absolute z-10'>
        <div className='w-[150px] lg:w-[210px]'>
          <img src={logoUrl} />
        </div>
        <div className='flex gap-4'>
          <button className='border-[gray] border-[1px] px-2 py-1 lg:px-4 lg:py-2 text-white rounded-md'>English</button>
          <button className='bg-[#E50815] text-white px-2 py-1 lg:px-4 lg:py-2 rounded-md font-bold'>Sign In</button>
        </div>
      </div>
      {/* Body background */}
      <section className=' relative'>
      {/* background image */}
      <div className=''>
        <img src={bgImageUrl}/>

      </div>
        <div>content</div>
        <div>emails and button</div>
      </section>
      <Seperator />
    </div>
  )
}

export default SignIn
