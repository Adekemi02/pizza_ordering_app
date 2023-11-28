import { pizzas } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'

const ProductsCatalogue = () => {
  return (
    <div>
      <div className="w-[250px] h-9 border flex justify-between">
          
          <span className="px-2 mt-1 text-center"> Default Sorting </span>
          <div className="mt-2 px-2">
            <Image src="/images/angle.png" alt="" width={15} height={15} />
          </div>           
      </div>

      <div></div>
    </div>
  )
}


const OtherProducts = () => {
  return (
    <div className="">
      <div className="border">
        {pizzas.map((item) => (
          <Link key={item.id} className="border" href="/">
            {item.img && (
              <div>
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
          </Link>
        ))}
      </div>
      
      
    </div>
  )
}


export {ProductsCatalogue, OtherProducts}