// "use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { ProductType } from '@/types/types';
import Size from '@/components/Size';




const getData = async (id: string) => {
  try {
    const res = await fetch(`http://localhost:3000/api/products/${id}`
  );

  if (!res.ok) {
    console.log(res)
    throw new Error(`Failed to fetch data: ${res.status} - ${res.statusText}`);

  }

  return res.json();

  } catch (err) {
    throw new Error("Error loading data")
  }
  
};




const SingleProductPage = async ({ params }: { params: { id: string } }) => {
  const singleProduct: ProductType = await getData(params.id)

  

  return (
    <div className="flex gap-16 mt-10 px-6">
      {/* {singlePizza.map((item) => ( */}
        
        {/* Imgage container */}
        {singleProduct.img && (
          <div key={singleProduct.id} className="">
            <Image
              src={singleProduct.img}
              alt=""
              className=""
              width={500}
              height={500}
            />
          </div>          
        )}

        <div className="flex-1 mt-14">
          {/* <h1 className="font-semibold text-3xl mb-2"> {singleProduct.title} </h1>
          <span className="text-red-500 font-semibold mr-4"> ${singleProduct.prices[size]} </span>
          <span className="text-gray-300 font-semibold"> 8 Reviews </span>
        
          <p className="mt-4"> {singleProduct.desc} </p>
          <p className="mt-4">Category: Chicken, Launch, Pizza, Burger </p>
          <p className="mt-4"> Tags: Healthy, Organic, Chicken, Sauce </p>
          
          <h1 className="font-semibold mb-4 mt-8"> Choose Pizza Size </h1> */}

          {/* <SetPrice singleProduct={singleProduct}/> */}

          <div>
            <Size pizza={singleProduct} />
            
          </div>

        </div>
      </div>

  )
}

export default SingleProductPage
