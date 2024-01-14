import Products from '@/components/Products'
import Image from 'next/image'
import React from 'react'

const productPage = () => {
  return (
    <div className="mt-10"> 
      <div className="flex justify-between items-center px-4">
        <button className="bg-goldenyellow text-white flex justify-center items-center m-2 w-24 rounded-full">
          <Image src="/images/filter_menu.png" alt="" width={25} height={25} />
          <span className="text-center font-semibold text-sm my-2"> Filter </span>
        </button>
        <div className="flex gap-10">
          <div className="font-bold">Showing all 9 results </div>
          <div className="w-[250px] h-9 border flex justify-between">
            
            <span className="px-2 mt-1 text-center"> Default Sorting </span>
            <div className="mt-2 px-2">
              <Image src="/images/angle.png" alt="" width={15} height={15} />
            </div>           
          </div>
        </div>
      </div>

      <div className="">
        <Products />
      </div>
            
      
    </div>
  )
}

export default productPage