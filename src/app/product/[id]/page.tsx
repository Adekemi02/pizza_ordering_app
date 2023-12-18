import { Product, pizzas, singleProduct } from '@/app/data'
import Image from 'next/image'
import React from 'react'
import Price from '@/components/Price'
import Products from '@/components/Products'




const singleProductPage = () => {

  const singleProduct = pizzas.find((product)=> product.id === 5)

  return (
    <div className="flex gap-16 mt-10 px-6">

      {/* Imgage container */}
      {singleProduct?.img && (
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
        
      {/* Text container */}
      <div className="flex-1 mt-14">
        <h1 className="font-semibold text-3xl mb-2"> {singleProduct?.title} </h1>
        
        <Price product={singleProduct!}/>
        {/* price={singleProduct?.price!} id={singleProduct?.id!} desc={singleProduct?.desc} options={singleProduct?.options} */}

      </div>
    </div>
  )
}

export default singleProductPage