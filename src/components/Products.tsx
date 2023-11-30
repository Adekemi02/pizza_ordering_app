import { pizzas } from '@/app/data'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import Button from './Button'


const Products = () => {
  return (
    
    <div className="grid grid-cols-3 justify-around gap-10 mt-6 px-4">
      {pizzas.map((item) => (
        
        <div key={item.id} className="border h-[500px]">
          <Link className="" href="">
            {item.img && (
              <div className="h-1/2 p-4">
                <Image src={item.img} alt="" width={300} height={300} />
              </div>
            )}

            <div className="mt-20">
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
        </div>  
      ))}
      
    </div>
      
  )
}


export default Products