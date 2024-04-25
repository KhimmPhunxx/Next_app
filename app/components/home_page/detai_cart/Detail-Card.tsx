import React from 'react'

import { CiDeliveryTruck } from "react-icons/ci";
import { FaCcMastercard } from 'react-icons/fa';
import { FaPiggyBank } from "react-icons/fa6";
import { GoStopwatch } from "react-icons/go";


function Detail_Card() {

  const card_detrail = [
    {
      id: 1,
      name: "Fast Delivery",
      description: "Start from $10",
      icon: <CiDeliveryTruck/>
    },
    {
      id: 2,
      name: "Money Guarantee",
      description: "7 Days Back",
      icon: <FaPiggyBank/>
    },
    {
      id: 3,
      name: "365 Days",
      description: "For free return",
      icon: <GoStopwatch/>
    },
    {
      id: 4,
      name: "Payment",
      description: "Secure system",
      icon: <FaCcMastercard />
    },
  ]
  return (
    <main className=' max-w-7xl mx-auto bg-gray-200 dark:bg-gray-700 flex justify-between flex-wrap py-5 rounded-lg'>
     {
        card_detrail.map((card) => (
          <div key={card.id} className="mx-auto">
            <div className="flex space-x-4">
              <div className='text-5xl'>
                {card.icon}
              </div>
              <div>
                <h1 className="text-lg font-semibold">{card.name}</h1>
                <h1 className="text-sm font-light">{card.description}</h1>
              </div>
            </div>
          </div>
        ))
     }
    </main>
  )
}

export default Detail_Card
