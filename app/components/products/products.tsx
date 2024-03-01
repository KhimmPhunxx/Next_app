
import React from 'react'

// import mock api from file json
import mockData from './data/mock-api-products.json'

interface Product {
    id: number
    name: string
    price: number
    image: string[]
}

const Products: React.FC = () => {
  
  const dataApi: Product[] = mockData.products
  return (
    <div className='text-gray-500 w-56 h-56 border rounded-lg'>
      <ul>
        {dataApi.map((prod) => (
            <div key={prod.id} className='h-full w-ful p-4'>
                <div>
                    <h2>{prod.name}</h2>
                    <p>{prod.price} $</p>
                    <img src={prod.image[0]} alt="" />
                </div>
            </div>
        ))}
      </ul>
    </div>
  )
}

export default Products
