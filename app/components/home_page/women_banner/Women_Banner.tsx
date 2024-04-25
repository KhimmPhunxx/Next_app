import React from 'react'

function Women_Banner() {

    const women_banner = [
        {
            id : 1,
            title : "GIFT",
            dis : "50% OFF",
            subtiitle : "PERFECT STYLES",
            desc : "Only until the end of this week. Terms and conditions apply" 
        }
    ]

  return (
    <main>
        {
            women_banner.map((item, index) => {
                return (
                    <div key={index} className='relative max-w-7xl mx-auto flex bg-cover bg-center bg-no-repeat p-7 space-y-2 rounded-sm' 
                        style={{
                        backgroundImage: `url(https://cdn.pixabay.com/photo/2015/10/30/18/04/banner-1014539_640.jpg)`, 
                        }}>
                        <div className=' space-y-0 w-[80%] mx-auto'>
                           <div className='flex space-x-3 justify-center '>
                                <h1 className='text-3xl text-gray-100 font-[600] '>{item.title}</h1>
                                <h1 className='text-3xl text-red-500  font-[600]'>{item.dis}</h1>
                                <h1 className='text-3xl text-gray-100  font-[600]'>{item.subtiitle}</h1>
                           </div>
                            <p className='text-xl text-center text-gray-100'>{item.desc}</p>
                        </div>
                        <div>
                            <button className='px-8 py-2 shadow-lg  bg-gray-100 hover:bg-gray-800 duration-200 text-gray-800 hover:text-gray-100 text-xl rounded-sm' >
                                Discover Now
                            </button>
                        </div>
                    </div>
                )
            })
        }
    </main>
        
  )
}

export default Women_Banner
