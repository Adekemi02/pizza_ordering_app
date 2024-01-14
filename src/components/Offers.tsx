import React from 'react'
import Button from './Button'
import Image from 'next/image'
import { featuredProducts } from '@/app/data'

const Offers = () => {
  return (
    <div className="h-[1200px]">
      <p className="text-red-500 font-semibold px-4"> Popular Dishes </p>
      <h1 className="font-semibold text-2xl px-4 mb-3"> Browse our Menu </h1>
      {/* wrapper */}
      <div className="grid grid-cols-3 justify-around gap-10 p-4">
        {/* single item */}
        {featuredProducts.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 h-[500px] border">
            {item.img && (
              <div className="h-1/2 p-4">
                <Image src={item.img} alt="" width={300} height={300} />
              </div>
            )}
              
            <div className="mt-16">
              <div className="flex gap-32 m-4">
                <h1 className="text-xl font-semibold"> {item.title} </h1>
                <span className="text-red-500 font-bold"> ${item.price} </span>
              </div>
              
              <p className="m-4"> {item.desc} </p>
              <div className="mt-8 px-4">
                <Button />
              </div>

            </div>
          </div>
        ))}
          
      </div>
    </div>
  )
}

export default Offers