"use client"

import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

function Banner_HomePage() {


    const banner = [
        {
            id : 1,
            title : "NEW ARRIVALS",
            subtitle : "SKI CLOTHES SALE",
            description : "Up to 35% Off",
            image : "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-18.jpg&w=384&q=75"
        },
        {
            id : 2,
            title : "BEST SELLER",
            subtitle : "TRENDING WOMEN",
            description : "SUNGLASSES",
            image : "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-19.jpg&w=384&q=75"
        },
        {
            id : 3,
            title : "NEW ARRIVALS",
            subtitle : "NEW LATEST BAG",
            description : "COLLECTION",
            image : "https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-20.jpg&w=384&q=75"
        }
    ]
  return (
    <main className=' max-w-7xl mx-auto grid grid-cols-3 gap-4'>
        {
            banner.map((item, index) => {
                return (
                    <div key={index} className='relative w-full bg-cover bg-center bg-no-repeat p-8 space-y-2 rounded-sm' 
                        style={{
                        backgroundImage: `url(${item.image})`, 
                        }}>
                        <div className=''>
                            <h1 className='text-md text-gray-400 font-[300]'>{item.title}</h1>
                            <h1 className='text-xl  text-gray-400 font-[700]'>{item.subtitle}</h1>
                            <h1 className='text-lg  text-red-500 font-[300]'>{item.description}</h1>
                        </div>
                        <div>
                            <Link href="/" className='text-gray-500 text-sm hover:underline rounded-sm flex duration-200'>SHOP NOW <FaArrowRightLong className='ml-1 mt-[3px] text-md' /> </Link>
                        </div>
                    </div>
                )
            })
        }
    </main>
  )
}

export default Banner_HomePage
