import { OurStrength } from '@/app/data'
import Image from 'next/image'
import React from 'react'

const Strength = () => {
  return (
    <div className="bg-yellow-50 h-[60vh] mb-4">
      <div className="flex justify-between items-center h-1/2">
        <div className="px-4">
          <h2 className="text-lg text-red-500 font-semibold">Our Strength</h2>
          <p className="font-semibold text-3xl"> Why We Are The Best? </p>
        </div>
        <div className="mt-24">
          <Image src="/images/pizza-strength.png" alt="" width={300} height={300} />
        </div>
        
      </div>
        
      <div className="flex mb-8"> 
        {OurStrength.map((item) => (  
          <div key={item.id} className="px-4">
            <Image src={item.img} alt="" width={30} height={30} className="mb-6" />
            <h1 className="font-semibold"> {item.name} </h1>
            <p className="mt-4 mb-8"> {item.desc} </p>
          </div>
        ))}   
      </div>
      

    </div>
  )
}

export default Strength