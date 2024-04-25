import React from 'react'

function Feature_Brands() {

    const feature_brands = [
        {
            id: 1,
            name: "Alibaba",
            image: "https://bazaar.ui-lib.com/assets/images/brands/alibaba.png"
        },
        {
            id: 2,
            name: "Levis",
            image: "https://bazaar.ui-lib.com/assets/images/brands/levis.png"
        },
        {
            id: 3,
            name: "Lotto",
            image: "https://bazaar.ui-lib.com/assets/images/brands/lotto.png"
        },
        {
            id: 4,
            name: "Raymond",
            image: "https://bazaar.ui-lib.com/assets/images/brands/raymond.png"
        },
        {
            id: 5,
            name: "Samsung",
            image: "https://bazaar.ui-lib.com/assets/images/brands/samsung.png"
        }
    ]

  return (
    <main className=' max-w-7xl mx-auto'>
        <h1 className='text-xl font-[500] text-gray-600'>Feature Brands</h1>
        <div className='flex justify-around space-x-4 bg-white rounded mt-3'>
            {
                feature_brands.map((item, index) => {
                    return (
                        <div key={index} className='w-44 h-15 p-8'>
                            <img src={item.image} alt={item.name} className='w-full h-full object-cover' />
                        </div>
                    )
                })
            }
        </div>
    </main>
  )
}

export default Feature_Brands
