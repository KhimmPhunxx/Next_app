import React from 'react'

function Banner02() {


    const banner2 = [
        {
            id : 1,
            title : "Final Reduction",
            subtitle : "Sale up to 20% Off",
            price : "Only From $99.00",
            image : "https://i.pinimg.com/736x/12/5a/95/125a9512107a0e22fa2de613cd32eb2a.jpg"
        },
        {
            id : 2,
            title : "Weekend Sale",
            subtitle : "Fine Smart Speaker",
            price : "Starting at $1299.00",
            image : "https://about.att.com/ecms/dam/snr/2020/November2020/StoryLevelBanner/11042020_iPhoneProMax_STORY_LEVEL_BANNER_1600x483.jpg"
        }
    ]

  return (
    <main className=' max-w-7xl mx-auto grid grid-cols-2 gap-4'>
        {
            banner2.map((item, index) => {
                return (
                    <div key={index} className='relative w-full bg-cover bg-center bg-no-repeat p-8 space-y-2 rounded-sm' 
                        style={{
                        backgroundImage: `url(${item.image})`, 
                        }}>
                        <div className=' space-y-4'>
                           <div>
                                <h1 className='text-xl text-gray-400 font-[300]'>{item.title}</h1>
                                <h1 className='text-3xl  text-gray-100 font-[400]'>{item.subtitle}</h1>
                           </div>
                            <h1 className='text-xl  text-red-500 font-[300]'>{item.price}</h1>
                        </div>
                    </div>
                )
            })
        }
    </main>
  )
}

export default Banner02
