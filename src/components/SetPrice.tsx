"use client"
import React, {useEffect, useState} from 'react'


type ProductType = {
    id: string;
    title: string;
    desc: string;
    img: string;
    prices: [number];
    extraOptions: [{
        id: string
        text: string;
        price: number
    }]
}


const SetPrice = ({ singleProduct }: { singleProduct: ProductType }) => {
    const [size, setSize] = useState(0);

  return (
    <div>
        <h1 className="font-semibold text-3xl mb-2"> {singleProduct.title} </h1>
          <span className="text-red-500 font-semibold mr-4"> ${singleProduct.prices[size]} </span>
          <span className="text-gray-300 font-semibold"> 8 Reviews </span>
        
          <p className="mt-4"> {singleProduct.desc} </p>
          <p className="mt-4">Category: Chicken, Launch, Pizza, Burger </p>
          <p className="mt-4"> Tags: Healthy, Organic, Chicken, Sauce </p>
          
          <h1 className="font-semibold mb-4 mt-8"> Choose Pizza Size </h1>

    </div>
  )
}

export default SetPrice