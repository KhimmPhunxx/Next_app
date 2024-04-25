"use client"

import React from 'react'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  
} from "@/components/ui/carousel"
import { FaArrowRightLong } from "react-icons/fa6";
import Link from 'next/link';
import mockdata_ from './../mock_data/Product_Deal.json'
import { IoStarOutline, IoStarSharp } from "react-icons/io5";
import { Button } from '@/components/ui/button';
import { IoMdHeart } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import './Product_deal.css'

function Product_Deal() {

    // Handle icon heart bg color change to red TypeScript
    const onHandleWishlish = (e: any) => {
        e.target.classList.toggle('text-red-500')
    }
    
  return (
    <main className=' max-w-7xl mx-auto'>
        
        <div className='flex justify-between'>
            <h1 className='text-xl font-medium text-gray-700'>Deal of The Day</h1>
            <Link href='/'><h1 className='text-xl hover:underline duration-200 font-[300] text-gray-700 flex'>More Product <FaArrowRightLong className='ml-1 mt-1 text-gray-500' /> </h1></Link>
        </div>
        <Carousel
        opts={{
        align: "start",
        }}
        className="w-full mt-3"
        >
            <CarouselContent>
                <CarouselItem className="flex gap-4">
                    {
                        mockdata_.product_deal1.map((item, index) => {
                            return (
                                <div key={index} className="cart p-1 w-[20%] bg-white border-white duration-200 border-[1px] hover:border-gray-500 rounded-sm relative cursor-pointer overflow-hidden">
                                    <div className='top-10 left-[-30px]  absolute cart-icon duration-300 space-y-2'>
                                        <FaEye className='text-gray-500 text-2xl' />
                                        <IoMdHeart onClick={onHandleWishlish}  className='text-gray-500 text-2xl z-10'  />
                                    </div>
                                   <div className='p-3'>
                                    <div className='w-full h-full bor'>
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
                <CarouselItem className="flex  gap-4">
                {
                        mockdata_.product_deal2.map((item, index) => {
                            return (
                                <div key={index} className="p-1 cart w-[20%] bg-white border-white duration-200 border-[1px] hover:border-gray-500 rounded-sm relative overflow-hidden cursor-pointer">
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
    </main>
  )
}

export default Product_Deal
