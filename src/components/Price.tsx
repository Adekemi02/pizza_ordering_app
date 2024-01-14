"use client"

import Image from 'next/image';
import React, { useState, useEffect } from 'react'
import { Product } from "@/types/types";
import { usePizzaStore } from '@/utils/store';
import { toast } from 'react-toastify';


type Props = {
  price: number;
  id: number;
  desc?: string;
  options?: {title: string; additionalPrice: number;}[];
};

// {price, id, desc, options}: Props
const Price = ({product}: {product: Product}) => {
  const [total, setTotal] = useState(product.price);
  const [quantity, setQuantity] = useState(1);
  const [selected, setSelected] = useState(0);

  const { addToCart, products } = usePizzaStore();

  useEffect(()=> {
    usePizzaStore.persist.rehydrate();
  },[]);

  useEffect(() => {
    if (product.options?.length) {
      setTotal(quantity * product.price + product.options[selected].additionalPrice);
    }
  }, [quantity, selected, product]);

  const handleCart = () => {
    addToCart({
      id: product.id,
      price: total,
      itemPrice: product.price,
      quantity: quantity,
      title: product.title,
      desc: product.desc,
      img: product.img,
      ...(product.options?.length && { optionTitle: product.options[selected].title }),
    });

    toast.success("Item added with love from olaide!");
  };

  console.log(quantity, product.price, total);

  return (
    <div>    
      <span className="text-red-500 font-semibold mr-4"> ${total} </span>
      <span className="text-gray-300 font-semibold"> 8 Reviews </span>
      
      <p className="mt-4"> {product.desc} </p>
      <p className="mt-4">Category: Chicken, Launch, Pizza, Burger </p>
      <p className="mt-4"> Tags: Healthy, Organic, Chicken, Sauce </p>
      
      <h1 className="font-semibold mb-4 mt-8"> Choose Pizza Size </h1>
      
      {/* OPTIONS CONTAINER*/}
      <div className="flex items-center">
        {product.options?.length && product.options?.map((option, index) => (
          <button key={option.title} className="flex" onClick={() => setSelected(index)}>
              <Image 
                src="/images/pizza_size.png" 
                alt="" 
                width={
                  option.title.toLowerCase() === 'small'
                    ? 30
                    : option.title.toLowerCase() === 'medium'
                    ? 40
                    : option.title.toLowerCase() === 'large'
                    ? 50
                    : 30 // Default to 30 if size is not small, medium, or large
                } 
                height={
                  option.title.toLowerCase() === 'small'
                  ? 30
                  : option.title.toLowerCase() === 'medium'
                  ? 40
                  : option.title.toLowerCase() === 'large'
                  ? 50
                  : 30 // Default to 30 if size is not small, medium, or large
                }
              />
              <span className="relative -top-2.5 -left-4 rounded-full  px-1 text-sm text-white font-semibold h-5 text-center w-14  bg-red-500 "> {option.title} </span>
            </button>
        ))}
      </div>

      {/* QUANTITY CONTAINER */}
      <div className="mt-10 font-semibold">
        <h1 className="mb-2"> Choose additional ingredients </h1>
        
        <input type="checkbox" />
        <label htmlFor="" className="font-normal"> Sauce </label>
        
        <div className="flex items-center gap-4 mt-6">
          <input 
            type="number" 
            min="1" step="1" 
            className="border h-9 w-32"
            value={quantity}
            onClick={() => setQuantity(quantity + 1)}
           />
          
          <button
            // onClick={() => addToCart()}
            className="bg-goldenyellow hover:bg-red-500 transition-all duration-300 rounded-full font-semibold uppercase text-white w-32 m-2 py-2"
            onClick={handleCart}
          > 
            Add to Cart 
          </button>

          <span className="h-12 w-12 border rounded-[100%]">
            <Image src="/images/heart_icon.png" alt="" width={15} height={15} className="relative top-4 left-4" />
          </span>
        </div>

      </div>
    </div>
  )
}

export default Price