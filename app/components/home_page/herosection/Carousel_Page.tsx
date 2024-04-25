"use client"

import React from 'react'

// import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"

import Link from "next/link"
import { MdArrowRightAlt } from "react-icons/md";

function Carousel_Page() {
  return (
    <main className=" max-w-7xl mx-auto flex h-[500px]">
        <Carousel className="w-[75%]">
            <CarouselContent>
                <CarouselItem className="
                    h-[500px]
                    w-full 
                    bg-no-repeat
                    bg-cover
                    bg-center
                    px-28
                    py-32
                   
                " 
                style={{backgroundImage: "url('https://cdn.shopify.com/s/files/1/0615/7913/collections/collections_shirts_a8b9673a-925f-4985-85f2-31fb0e82784e_1920x.jpg')"}}
                >
                    <div className="space-y-2">
                        <h1 className="uppercase text-3xl text-gray-700">
                            life style collection
                      </h1>
                        <h1 className="uppercase text-6xl font-bold text-gray-700">
                            Men
                        </h1>
                        <div className="flex space-x-3">
                            <h1 className="uppercase text-3xl font-medium text-gray-700">
                                Sale Up To 
                            </h1>
                            <h1 className="uppercase text-3xl font-medium text-red-500">
                                30% Off
                            </h1>
                        </div>
                        <h1 className="text-lg text-gray-500">
                            Get Free Shipping on order over $99.00
                        </h1>
                    </div>
                    <button className="px-8 py-3 mt-8 bg-gray-800 text-gray-100 text-xl rounded" >
                        Shop Now
                    </button>
                </CarouselItem>
                <CarouselItem className="
                    h-[500px]
                    w-full 
                    bg-no-repeat
                    bg-cover
                    bg-center
                    px-28
                    py-32
                " 
                style={{backgroundImage: "url('https://t4.ftcdn.net/jpg/06/41/86/93/360_F_641869325_Y5VvhLoAcfWCM5JBVcyNTPL4f2J26NHF.jpg')"}}
                >
                  <div className="space-y-2">
                        <h1 className="uppercase text-3xl text-gray-700">
                            life style collection
                      </h1>
                        <h1 className="uppercase text-6xl font-bold text-gray-700">
                            WoMen
                        </h1>
                        <div className="flex space-x-3">
                            <h1 className="uppercase text-3xl font-medium text-gray-700">
                                Sale Up To 
                            </h1>
                            <h1 className="uppercase text-3xl font-medium text-red-500">
                                30% Off
                            </h1>
                        </div>
                        <h1 className="text-lg text-gray-500">
                            Get Free Shipping on order over $99.00
                        </h1>
                    </div>
                    <button className="px-8 py-3 mt-8 bg-gray-800 text-gray-100 text-xl rounded" >
                        Shop Now
                    </button>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        <section className="h-full text-gray-900 add-news w-[23%] ml-[2%] space-y-[2%]">
            <div 
                className="h-[49%] w-full bg-gray-200 relative bg-no-repeat bg-center bg-cover px-10 py-14 rounded"
                style={{backgroundImage: `url("https://bazaar.ui-lib.com/_next/image?url=%2Fassets%2Fimages%2Fbanners%2Fbanner-17.jpg&w=384&q=75")`}} 
            
            >
                <div className="top-[20%] left-10">
                    <h1 className="text-gray-700 text-lg">
                        NEW ARRIVALS
                    </h1>
                    <h1 className="text-gray-700 text-xl font-medium">
                    SUMMER <br/>
                    SALE 20% OFF
                    </h1>
                    <Link href="/" className="text-gray-700 text-lg mt-3 font-medium flex hover:text-red-400 hover:underline duration-200">
                        Shop Now <MdArrowRightAlt className='text-2xl ml-1' />
                    </Link>
                    {/* <div className="w-6 h-2 bg-gray-400 hover:w-16 duration-200"></div> */}
                </div>
            </div>

            <div 
                className="h-[49%] w-full bg-gray-200 relative bg-no-repeat bg-center bg-cover px-10 py-14 rounded"
                style={{backgroundImage: `url("https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?cs=srgb&dl=pexels-j%C3%A9shoots-238118.jpg&fm=jpg")`}} 
            
            >
                <div className="top-[20%] left-10">
                    <h1 className="text-gray-700 text-lg">
                        NEW ARRIVALS
                    </h1>
                    <h1 className="text-gray-700 text-xl font-medium">
                    MACBOOK M3 <br/>
                    SALE 20% OFF
                    </h1>
                    <Link href="/" className="text-gray-700 text-lg mt-3 font-medium flex hover:text-red-400 hover:underline duration-200">
                        Shop Now <MdArrowRightAlt className='text-2xl ml-1' />
                    </Link>
                </div>
            </div>
        </section>
    </main>
  )
}

export default Carousel_Page
