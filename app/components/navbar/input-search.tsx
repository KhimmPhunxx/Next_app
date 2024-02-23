'use client'
import React from 'react'

import { IoSearchOutline } from "react-icons/io5";


const InputSearch = () => {
  return (
    <form className="w-[400px] relative">
        <div className='relative'> 
            <input type="search" placeholder='Type Here...' className='w-full px-5 border-none bg-gray-100 p-2 rounded-full' />
            <button className="absolute right-1 top-1/2 bg-gray-300 rounded-full -translate-y-1/2 p-2">
                <IoSearchOutline />
            </button>
        </div>
    </form>
  )
}

export default InputSearch
