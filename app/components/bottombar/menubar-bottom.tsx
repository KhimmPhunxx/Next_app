import React from 'react'

import { FaHome } from "react-icons/fa";

function MenubarBottom() {
  return (
    <div className='w-full md:hidden bg-gray-900 dark:bg-gray-100 bottom-0 fixed mb-0'>
        <div className="p-3 w-full flex justify-between px-10">
          <div>
            <FaHome className="text-gray-800 mx-auto text-2xl" />
            <p className="dark:text-gray-800">Home</p>
          </div>
          <div>
            <FaHome className="text-gray-800 text-2xl" />
          </div>
          <div>
            <FaHome className="text-gray-800 text-2xl" />
          </div>
          <div>
            <FaHome className="text-gray-800 text-2xl" />
          </div>
        </div>
    </div>
  )
}
export default MenubarBottom
