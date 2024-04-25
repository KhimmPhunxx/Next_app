import Link from 'next/link';
import React from 'react'
import { FaAppStore, FaGoogle, FaGooglePlay, FaInstagramSquare, FaTwitter } from "react-icons/fa";
import { FaFacebookF, FaYoutube } from 'react-icons/fa6';
import { IoMdCall, IoMdMail } from 'react-icons/io';

function Footer() { 
  return (
    <footer className='w-full bg-gray-800 mt-10'>
      <div className=' max-w-7xl mx-auto flex justify-between h-full px-6 py-16 gap-6'>
        <div className='h-full space-y-8 w-[30%]'>
            <div>
              <img src="https://bazaar.ui-lib.com/assets/images/logo.svg" alt="" />
            </div>
            <p className='text-sm text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor libero id et, in gravida. Sit diam duis mauris nulla cursus. Erat et lectus vel ut sollicitudin elit at amet.</p>
            <div className='flex space-x-3'>

              <div className='bg-gray-900 w-[130px] p-3 px-3 rounded flex space-x-1'>
                <FaGooglePlay className='text-gray-100 text-3xl' />
                <div>
                  <p className='text-[10px] text-gray-100'>Get it on</p>
                  <p className='text-xs font-bold text-gray-100'>Google Play</p>
                </div>
              </div>

              <div className='bg-gray-900 w-[130px] p-3 px-3 rounded flex space-x-1'>
                <FaAppStore className='text-gray-100 text-3xl' />
                <div>
                  <p className='text-[10px] text-gray-100'>Download on</p>
                  <p className='text-xs font-bold text-gray-100'>App Store</p>
                </div>
              </div>

            </div>
        </div>

        <div className='w-[65%] grid grid-cols-3'>
          <div className='h-full space-y-4'>
              <h1 className=' text-xl text-gray-100'> About Us</h1>
              <div className='block space-y-3' >
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Careers</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Our Store</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Our Cares</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Terms & Conditions</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Privacy Policy</Link>
                </div>

              </div>
          </div>

          <div className='h-full space-y-4'>
              <h1 className=' text-xl text-gray-100'> Customer Care</h1>
              <div className='block space-y-3' >
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Help Center</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Track Your Order</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Corporate & Bulk Purchasing</Link>
                </div>
                <div>
                    <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>Returns & Refunds</Link>
                </div>
              </div>
          </div>

          <div className='h-full space-y-4'>
              <h1 className=' text-xl text-gray-100'> Conatact Us</h1>
              <div className='block space-y-3' >
                <div>
                    <p className='text-sm text-gray-400'>70 Washington Square South, New York, NY 10012, United States</p>
                </div>
                <div className='flex space-x-2'>
                  <IoMdMail className='text-gray-400 text-xl mt-[3px]' /> <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200 flex' > example23@gmail.com</Link>
                </div>
                <div className='flex space-x-2'>
                  <IoMdCall className='text-gray-400 text-xl mt-[3px]' />  <Link href='/' className='text-gray-400 hover:text-gray-100 duration-200'>  +855 0962701770</Link>
                </div>
                <div className='flex space-x-4'> 
                    <div className='bg-gray-900 w-8 py-2 flex justify-center rounded-full hover:bg-gray-800 duration-200'>
                      <Link href='/' className='text-gray-300 hover:text-white duration-200'> <FaFacebookF/> </Link>
                    </div>

                    <div className='bg-gray-900 w-8 py-2 flex justify-center rounded-full hover:bg-gray-800 duration-200'>
                      <Link href='/' className='text-gray-300 hover:text-white duration-200'> <FaTwitter/> </Link>
                    </div>

                    <div className='bg-gray-900 w-8 py-2 flex justify-center rounded-full hover:bg-gray-800 duration-200'>
                      <Link href='/' className='text-gray-300 hover:text-white duration-200'> <FaYoutube/> </Link>
                    </div>

                    <div className='bg-gray-900 w-8 py-2 flex justify-center rounded-full hover:bg-gray-800 duration-200'>
                      <Link href='/' className='text-gray-300 hover:text-white duration-200'> <FaGoogle/> </Link>
                    </div>

                    <div className='bg-gray-900 w-8 py-2 flex justify-center rounded-full hover:bg-gray-800 duration-200'>
                      <Link href='/' className='text-gray-300 hover:text-white duration-200'> <FaInstagramSquare/> </Link>
                    </div>
                    
                </div>
              </div>
          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer
