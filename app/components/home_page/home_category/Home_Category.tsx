"use client"

import React, { useEffect } from 'react'
import cate_1 from './../../../assets/home_page/categry_home/cat-1.webp'
import cate_2 from './../../../assets/home_page/categry_home/cat-2.webp'
import cate_3 from './../../../assets/home_page/categry_home/cat-3.webp'
import cate_4 from './../../../assets/home_page/categry_home/cat-4.webp'
import cate_5 from './../../../assets/home_page/categry_home/cat-5.webp'
import cate_6 from './../../../assets/home_page/categry_home/cat-6.webp'
import Image from 'next/image'


import AOS from 'aos';
import 'aos/dist/aos.css';

function Home_Category() {
    useEffect(() => {
        AOS.init();
    }, [])
    const category = [
        {
            id : 1,
            name: "Toys",
            image: cate_1,
        },
        {
            id : 2,
            name: "Sports",
            image: cate_2
        },
        {
            id : 3,
            name: "Gaming",
            image: cate_3
        },
        {
            id : 4,
            name: "Furniture",
            image: cate_4
        },
        {
            id : 5,
            name: "Fashion",
            image: cate_5
        },
        {
            id : 6,
            name: "Cameras",
            image: cate_6
        },
    ]
  return (
   <main className=' max-w-7xl mx-auto grid md:grid-cols-6 gap-6'>
    {
        category.map((cate) => (
            <div key={cate.id} className="bg-cover bg-center justify-center items-center bg-white rounded-lg" data-aos="fade-right">
                <div className="p-3 cursor-pointer">
                    <div className='w-full'>
                        <Image src={cate.image} alt="" className="w-full h-full object-cover hover:scale-105 duration-200"/>
                    </div>
                    <button className='w-12 hover:w-full hover:bg-gray-500 rounded duration-300'>
                        <h1 className="text-xl py-2 text-center font-medium text-gray-700 hover:text-gray-100">{cate.name}</h1>     
                    </button> 
                </div>
            </div>
        ))
    }
   </main>
  )
}

export default Home_Category
