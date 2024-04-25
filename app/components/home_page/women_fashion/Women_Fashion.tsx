"use client"

import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import mockdata_ from './../mock_data/Product_Deal.json'
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { IoMdHeart } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import './../product_deal/Product_deal.css'

function Women_Fashion() {

    // Handle icon heart bg color change to red TypeScript
    const onHandleWishlish = (e: any) => {
        e.target.classList.toggle('text-red-500')
    }
  return (
    <main className=' max-w-7xl mx-auto'>
        <section className='w-full flex space-x-[2%]'>
        <div className='menu w-[20%] bg-white p-4 space-y-4 rounded'> 
            <h1 className='text-xl font-medium'>Women's Fashion</h1>
            <div className=' space-y-2 text-md'>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Wireless Speaker</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Tablet</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Smartphone</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Laptop</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>iMac</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Game Controller</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Drone</Link>
                </div>
                <div>
                <Link className=' hover:text-red-400 duration-200' href='/'>Apple</Link>
                </div>
            </div>
            <div>
                <Link className='hover:underline flex text-xl' href={'/'}>Browe All <FaArrowRightLong className='ml-2 mt-[3px] text-md text-gray-500' /> </Link>
            </div>
        </div>

        <div className='w-[78%]'>
        <Carousel
        opts={{
        align: "start",
        }}
        className="w-full"
        >
            <CarouselContent>
                <CarouselItem className="grid grid-cols-4 gap-4">
                    {
                        mockdata_.product_deal1.slice(0,4).map((item, index) => {
                            return (
                                <div key={index} className="cart p-1 w-full bg-white border-white duration-200 border-[1px] hover:border-gray-500 rounded-sm relative cursor-pointer overflow-hidden">
                                    <div className='top-10 left-[-30px]  absolute cart-icon duration-300 space-y-2'>
                                        <FaEye className='text-gray-500 text-2xl' />
                                        <IoMdHeart onClick={onHandleWishlish}  className='text-gray-500 text-2xl z-10'  />
                                    </div>
                                    <div className='p-3'>
                                    <div className='w-full h-full'>
                                        <img src={item.image} alt={item.name} className='w-full h-full object-cover duration-200' />
                                    </div>
                                    <div className='text-center space-y-2'>
                                        <h1 className='text-md font-[300]'>{item.name}</h1>
                                        <h1 className='text-md font-semibold'>${item.price}.00</h1>
                                        <div className='space-x-1 flex justify-center'>
                                            <IoStarSharp className='text-yellow-500 ' />
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarOutline className='text-yellow-500' />
                                        </div>
                                    </div>
                                    <Button className='w-full mt-3 bg-transparent border-[1px] border-gray-400 hover:bg-transparent text-gray-600'>Add To Cart</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </CarouselItem>
                <CarouselItem className="grid grid-cols-4 gap-4">
                {
                        mockdata_.product_deal2.map((item, index) => {
                            return (
                                <div key={index} className="p-1 cart w-full bg-white border-white duration-200 border-[1px] hover:border-gray-500 rounded-sm relative overflow-hidden cursor-pointer">
                                    <div className='top-10 left-[-30px]  absolute cart-icon duration-300 space-y-2'>
                                        <FaEye className='text-gray-500 text-2xl' />
                                        <IoMdHeart onClick={onHandleWishlish}  className='text-gray-500 text-2xl z-10'  />
                                    </div>
                                    <div className='p-3'>
                                    <div className='w-full h-full'>
                                        <img src={item.image} alt={item.name} className='w-full h-full object-cover duration-200' />
                                    </div>
                                    <div className='text-center space-y-2'>
                                        <h1 className='text-md font-[300]'>{item.name}</h1>
                                        <h1 className='text-md font-semibold'>${item.price}.00</h1>
                                        <div className='space-x-1 flex justify-center'>
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarSharp className='text-yellow-500' />
                                            <IoStarOutline className='text-yellow-500' />
                                        </div>
                                    </div>
                                    <Button className='w-full mt-3 bg-transparent border-[1px] border-gray-400 hover:bg-transparent text-gray-600'>Add To Cart</Button>
                                    </div>
                                </div>
                            )
                        })
                    }
                </CarouselItem>
            </CarouselContent>
        
        </Carousel>
        </div>
        </section>
        


    </main>
  )
}

export default Women_Fashion
