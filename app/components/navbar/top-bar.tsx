'use client'

import React from 'react'

import { FaFacebookSquare, FaInstagram, FaTwitter } from "react-icons/fa";


function TopBar() {
  return (
    <div className="flex justify-between">
        <div className='flex space-x-2'>
            <p className="bg-red-700 px-3 rounded-full text-white font-medium text-[14px]">HOT</p>
            <p className='text-sm text-gray-200'>Free Express Shipping</p>
        </div>
        <div className='flex space-x-3'>
            <select className='text-sm bg-gray-800 text-gray-200 border-none' aria-placeholder='EN' >
                <option value="EN">EN</option>
                <option value="FR">FR</option>
            </select>
            <div>
                <div className='flex space-x-3 md:space-x-5'>
                    <FaTwitter className='text-gray-200 mt-1 text-sm cursor-pointer' />
                    <FaFacebookSquare className='text-gray-200 mt-1 text-sm cursor-pointer' />
                    <FaInstagram className='text-gray-200 mt-1 text-sm cursor-pointer' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default TopBar