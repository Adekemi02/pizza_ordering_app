import Image from 'next/image'
import React from 'react'

const cartPage = () => {
  return (
    <div className='w-full px-4 flex justify-start  items-start mt-11'>
      <div className="grid w-[85%]">
        <div className="grid grid-cols-6 py-3 font-bold border-b-2 border-b-gray-200 mb-2">
          <div className=""> Product </div>
          <div className=""> Name </div>
          <div>Extra </div>
          <div>Price </div>
          <div>Quantity </div>
          <div> Total </div>
        </div>

        <div className="h-[120px] grid grid-cols-6 border-b-2 border-b-gray-200">
          <div>
            <Image src="/images/pizza_full.png" alt="" width={90} height={90} />
          </div>
          <div> Burga pizza </div>
          <div></div>
          <div> $40 </div>
          <div> 4 </div>
          <div> $160 </div>
        </div>
        
      </div>
      {/* <table className="w-[700px] h-[100px] " style={{tableLayout: "fixed"}}>
        <thead className="" style={{}}>
          <tr className=' border-b-2 border-b-gray-200' style={{margin: "0 10px"}}>
            <th style={{padding: "0 0px"}}>Product</th>
            <th style={{padding: "0 10px"}}>Name</th>
            <th style={{padding: "0 10px"}}>Extra</th>
            <th style={{padding: "0 10px"}}>Price</th>
            <th style={{padding: "0 10px"}}>Quantity</th>
            <th style={{padding: "0 10px"}}>Total</th>
          </tr>
        </thead>
        
        <tbody>
          <tr className="text-center border-b-2 border-b-gray-200 gap-8" >
            <td><Image src="/images/pizza_full.png" alt="" width={30} height={30} /> </td>
            <td> Burga pizza </td>
            <td></td>
            <td>$40</td>
            <td>4</td>
            <td>$160</td>
          </tr>
        </tbody>          
       
      </table> */}
      <div className="bg-black w-[400px] h-[270px] text-white mr-6">
        <div className="flex flex-col justify-center mt-8 px-10">
          <h1 className="uppercase text-white font-semibold mb-4"> Cart Total </h1>
          <p> <span className="font-semibold"> Subtotal: $160 </span>  </p>
          <p> <span className="font-semibold"> Discount: $79.60 </span>  </p>
          <p> <span className="font-semibold">Total: $160</span>  </p>
          <button type="submit" className="mt-10 bg-goldenyellow hover:bg-red-700 font-bold p-2 uppercase rounded-full"> Checkout Now! </button>
        </div>
          
      </div>
    </div>
  )
}

export default cartPage