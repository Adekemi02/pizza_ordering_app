import { OtherProducts, ProductsCatalogue } from '@/components/Products'
import Image from 'next/image'
import React from 'react'

const categoryPage = () => {
  return (
    <div> 
      <div className="flex justify-between items-center px-4">
        <button className="bg-goldenyellow text-white flex justify-center items-center m-2 w-24 rounded-full">
          <Image src="/images/filter_menu.png" alt="" width={25} height={25} />
          <span className="text-center font-semibold text-sm my-2"> Filter </span>
        </button>
            
        <div className="flex ">
          <ProductsCatalogue />
        </div>
      </div>

      <div>
        <OtherProducts />
      </div>
    </div>
  )
}

export default categoryPage