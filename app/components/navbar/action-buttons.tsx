'use client'

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"

import { LuAlignRight } from "react-icons/lu"
import { FaRegUser } from "react-icons/fa";
import { IoSearchOutline } from "react-icons/io5";

import Link from "next/link"
import { FaCartShopping } from "react-icons/fa6";

function ActionButton() {
  return (
    <div className='flex md:space-x-6'>
        <div className="flex md:space-x-6">
         <div className='space-x-1'>
            <button className="md:hidden" >
                <Link href="" className="text-[16px]">
                    <IoSearchOutline className='text-4xl duration-200 hover:bg-gray-100 rounded-md p-2 text-gray-500' />
                </Link>    
            </button>
            <button >
                <Link href="" className="text-[16px]">
                    <FaRegUser className='text-4xl duration-200 hover:bg-gray-100 rounded-md p-2 text-gray-500' />
                </Link>    
            </button>
            <button>
                <Sheet>
                <SheetTrigger> 
                    <FaCartShopping className='text-4xl mt-1.5 text-gray-500 duration-200 hover:bg-gray-100 rounded-md p-2' />
                </SheetTrigger>
                <SheetContent>
                    <SheetHeader>
                        <SheetDescription>
                            <div className="flex flex-col space-y-2 w-full text-lg text-black mt-10">
                                Add To Cart
                                <button className="px-4 py-2 bg-blue-400 text-white text-md rounded"> Get Started </button>
                            </div>
                        </SheetDescription>
                    </SheetHeader>
                </SheetContent>
                </Sheet>    
            </button>
         </div>

         {/* menubar phone */}
         <button className='md:hidden'>
            <Sheet>
            <SheetTrigger> 
                <LuAlignRight className='text-4xl mt-1.5 text-gray-500 duration-200 hover:bg-gray-300 rounded-md p-2' />
            </SheetTrigger>
            <SheetContent>
                <SheetHeader>
                    <SheetDescription>
                        <div className="flex flex-col space-y-2 w-full text-lg text-black mt-10">
                            <Link href="/" className="border p-2 rounded-md">
                                {/* <Button variant="outline">Home</Button> */}
                                <p>Home</p>
                            </Link>
                            <Link href="/about" className="border p-2 rounded-md">
                                {/* <Button variant="outline">About</Button> */}
                                <p>About</p>
                            </Link>
                            <Link href="/contact" className="border p-2 rounded-md">
                                {/* <Button variant="outline">Contact</Button> */}
                                <p>Contact</p>
                            </Link>
                            
                            <Link href="" className="border p-2 rounded-md">
                                Sign Up
                            </Link>    
                            
                            <button className="px-4 py-2 bg-blue-400 text-white text-md rounded"> Get Started </button>
                        </div>
                    </SheetDescription>
                </SheetHeader>
            </SheetContent>
            </Sheet>    
         </button>
       </div>
    </div>
  )
}

export default ActionButton
