import React from 'react'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
//   CarouselNext,
//   CarouselPrevious,
} from "@/components/ui/carousel"

function Carousel_Page() {
  return (
    <main className="w-full flex h-[500px]">
        <Carousel className="w-[75%]">
            <CarouselContent>
                <CarouselItem className="
                    h-[500px]
                    w-full 
                  bg-red-200 
                    bg-no-repeat
                    bg-cover
                    bg-center
                    px-28
                    py-32
                   
                " 
                style={{backgroundImage: "url('https://cdn.shopify.com/s/files/1/0615/7913/collections/collections_shirts_a8b9673a-925f-4985-85f2-31fb0e82784e_1920x.jpg')"}}
                >
                    <div className="space-y-2">
                        <h1 className="uppercase text-3xl">
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
                    <button className="px-6 py-4 mt-8 bg-gray-800 text-gray-100 text-xl rounded" >
                        Shop Now
                    </button>
                </CarouselItem>
                <CarouselItem className="
                    h-[500px]
                    w-full 
                    bg-red-200 
                    bg-no-repeat
                    bg-cover
                    bg-center
                    px-28
                    py-32
                " 
                style={{backgroundImage: "url('https://st.depositphotos.com/1345889/1262/i/450/depositphotos_12627110-stock-photo-large-banner-with-gorgeous-happy.jpg')"}}
                >
                  <div className="space-y-2">
                        <h1 className="uppercase text-3xl">
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
                    <button className="px-6 py-4 mt-8 bg-gray-800 text-gray-100 text-xl rounded" >
                        Shop Now
                    </button>
                </CarouselItem>
            </CarouselContent>
        </Carousel>
        <section className="h-full text-gray-900 add-news w-[23%] ml-[2%] space-y-[2%]">
            <div className="h-[49%] w-full border bg-gray-200">
                    Heloo
            </div>
            <div className="h-[49%] w-full border bg-red-200">
                    Heloo
            </div>
        </section>
    </main>
  )
}

export default Carousel_Page
