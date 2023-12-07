"use client"
import { singleProduct } from '@/app/data'
import Image from 'next/image'
import React, { useState, useEffect } from 'react'


type Props = {
  price: number;
  id: number;
  options?: {title: string; additionalPrice: number}[];
};

const singleProductPage = ({price, id, options}: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price]);

  return (
    <div className="flex gap-16 mt-10 px-6">
      {/* Imgage container */}
      {singleProduct.img && (
        <div className="">
          <Image 
            src={singleProduct.img} 
            alt="" 
            className="" 
            width={500}
            height={500}
          />
        </div>
      )}
        
      {/* Text container*/}
      <div className="flex-1 mt-14">
        <div className="">
          <h1 className="font-semibold text-3xl mb-2"> {singleProduct.title} </h1>
          <span className="text-red-500 font-semibold mr-4"> ${singleProduct.price} </span>
          <span className="text-gray-300 font-semibold"> 8 Reviews </span>
          
          <p className="mt-4"> {singleProduct.desc} </p>
          <p className="mt-4">Category: Chicken, Launch, Pizza, Burger </p>
          <p className="mt-4"> Tags: Healthy, Organic, Chicken, Sauce </p>
          
        </div>

        <div className="mt-8">
          <h1 className="font-semibold mb-4"> Choose Pizza Size </h1>
          
          
          <div className="flex items-center ">
            <div className="flex">
              <Image src="/images/pizza_size.png" alt="" width={30} height={30} />
              <span className="relative -top-2.5 -left-4 rounded-full  px-1 text-sm text-white font-semibold h-5 text-center w-12  bg-red-500 "> Small </span>
            </div>

            <div className="flex">
              <Image src="/images/pizza_size.png" alt="" width={40} height={40} />
              <span className="relative -top-2 -left-6 rounded-full  px-1 text-sm text-white font-semibold h-5 text-center w-16  bg-red-500 "> Medium </span>
            </div>

            <div className="flex">
              <Image src="/images/pizza_size.png" alt="" width={50} height={50} />
              <span className="relative -top-2.5 -left-4 rounded-full  px-1 text-sm text-white font-semibold h-5 text-center w-12  bg-red-500 "> Large</span>
            </div>
          </div>
          

          <div className="mt-10 font-semibold">
            <h1 className="mb-2"> Choose additional ingredients </h1>
            <input type="checkbox" />
            <label htmlFor="" className="font-normal">Sauce</label>
            <div className="flex items-center gap-4 mt-6">
              <input type="number" min="1" step="1" className="border h-9 w-32" />
              <button className="bg-goldenyellow hover:bg-red-500 transition-all duration-300 rounded-full font-semibold uppercase text-white w-32 m-2 py-2"> Add to Cart </button>
              <span className="h-12 w-12 border rounded-[100%]">
                <Image src="/images/heart_icon.png" alt="" width={15} height={15} className="relative top-4 left-4" />
              </span>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default singleProductPage