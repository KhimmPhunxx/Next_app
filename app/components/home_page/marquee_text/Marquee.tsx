'use client'

import React, { useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css'

function Marquee_Text_Home() {
  useEffect(() => {
    AOS.init()
  }, [])
  return (
    <div className=' max-w-7xl mx-auto flex space-x-[1%]' data-aos='fade-right'>
        <div className='px-3 py-5 w-[20%] rounded-md' >
          <h1 className='text-xl font-bold text-gray-700'>BLACK FRIDAY SALE!</h1>
        </div>
        <div className='bg-white px-4 py-5 w-[79%] rounded-md flex justify-between' >
         <div className='w-[85%]'>
            <h1 className='text-2xl font-medium text-gray-700 text-center italic'>PAY ONLY FOR YOUR LOVING ELECTRONICS</h1>
         </div>
          <button className='bg-pink-300 hover:bg-pink-400 duration-200 text-gray-700 px-4 rounded-sm'> Shop Now</button>
        </div>
    </div>
  )
}

export default Marquee_Text_Home
