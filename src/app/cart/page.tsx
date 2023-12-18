"use client"

import { usePizzaStore } from '@/utils/store';
import Image from 'next/image'
import React, { useEffect } from 'react'
import { toast } from 'react-toastify';



const CartPage = () => {

    const { totalPrice, products, removeFromCart } = usePizzaStore();
  
    useEffect(()=> {
      usePizzaStore.persist.rehydrate();
    },[]);


  return (
    <div className='w-full px-4 flex justify-start  items-start mt-11'>
      {/* PRODUCT TABLE */}
      <div className="w-full">
        {         
          <table className="w-full">
            <thead className="border-b border-b-gray-200">
              <tr className="text-left">
                <th className="mb-2 py-2">Product</th>
                <th className="mb-2 py-2">Name</th>
                <th className="mb-2 py-2">Extra</th>
                <th className="mb-2 py-2">Price</th>
                <th className="mb-2 py-2">Quantity</th>
                <th className="mb-2 py-2">Total</th>
              </tr>
            </thead>
            
            {products.map((product)=> (
              <tbody key={product.id} className="border-b border-b-gray-200">
            
                <tr className="align-top" >
                  <td className="py-2">

                    <div className="flex flex-row justify-center items-center">                      
                      <div className="">
                        {product.img && <Image src={product.img} alt="" width={70} height={70} /> }
                      </div>
                      
                      <div className="bg-white" onClick={()=> {removeFromCart(product), toast("item removed with love from olaide!")}}>
                        <Image src="/delete.png" alt="" width={20} height={20} />
                      </div>
                    </div>      
                  </td>
                  
                  <td className=" py-2"> {product.title} </td>
                  <td className=" py-2">{product.options}</td>
                  <td className=" py-2">${product.itemPrice}</td>
                  <td className=" py-2">{product.quantity}</td>
                  <td className=" py-2">${product.price}</td>
                </tr>
              </tbody> 
            )
            )}                
          </table>          
        }
      </div>

      {/* CART CONTAINER */}
      <div className="bg-black w-[500px] h-[270px] text-white mr-6">
        <div className="flex flex-col justify-center mt-8 px-10">
          <h1 className="uppercase text-white font-semibold mb-4"> Cart Total </h1>
          <p> <span className="font-semibold"> Subtotal: ${totalPrice} </span>  </p>
          <p> <span className="font-semibold"> Discount: $79.60 </span> </p>
          <p> <span className="font-semibold">Total: ${totalPrice}</span>  </p>
          <button type="submit" className="mt-10 bg-goldenyellow hover:bg-red-700 transition-all duration-300 font-bold p-2 uppercase rounded-full"> Checkout Now! </button>
        </div>
          
      </div>
    </div>
  )
}

export default CartPage