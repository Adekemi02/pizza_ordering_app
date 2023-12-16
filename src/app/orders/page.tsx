import Image from 'next/image'
import React from 'react'

const orderPage = () => {
  return (
    <div className="p-4 flex gap-10">
      {/* PRODUCTS TABLE */}
      <div className="w-1/2">
        <h1 className="text-2xl mb-2"> Products </h1>
        <table className="w-full">
          <thead className="border-b border-b-gray-200">
            <tr className="text-left">
              <th className="mb-2 py-2">Image</th>
              <th className="mb-2 py-2">Id</th>
              <th className="mb-2 py-2">Title</th>
              <th className="mb-2 py-2">Price</th>
              <th className="mb-2 py-2">Action</th>
            </tr>
          </thead>

          <tbody>
            <tr className="align-top border-b border-b-gray-200">
              <td className=" py-2">
                <Image src="/images/pizza_full.png" alt="" width={70} height={70}/>
              </td>
              <td className=" py-2">123456789</td>
              <td className=" py-2">Burga pizza </td>
              <td className=" py-2">$20</td>
              <td className="text-white py-2 font-semibold">
                <button className="bg-green-700 mr-2 px-2">Edit</button>
                <button className="bg-red-500 px-2 hover:rounded-full">Delete</button>
              </td>
            </tr>
          </tbody>
          
        </table>
      </div>

      {/* ORDER TABLE */}
      <div className="w-1/2">
        <h1 className="text-2xl mb-2"> Orders </h1>
        <table className="w-full"> 
          <thead className="border-b border-b-gray-200">
            <tr className="text-left">
              <th className="mb-2 py-2">Id</th>
              <th className="mb-2 py-2">Customer</th>
              <th className="mb-2 py-2">Total</th>
              <th className="mb-2 py-2">Payment</th>
              <th className="mb-2 py-2">Status</th>
              <th className="mb-2 py-2">Action</th>
            </tr>
          </thead>  
        <tbody className="">
          <tr className="border-b border-b-gray-200">
            <td>12345678</td>
            <td>012345678</td>
            <td>$175</td>
            <td>cash</td>
            <td>delivered</td>
            <td>
              <button className="bg-green-600 text-white font-semibold px-2 my-2">Next Stage</button>
            </td>
          </tr>
          <tr className="border-b border-b-gray-200">
            <td>123456789</td>
            <td>0123456789</td>
            <td>$176</td>
            <td>cash</td>
            <td>delivered</td>
            <td>
              <button className="bg-green-600 text-white font-semibold px-2 my-2">Next Stage</button>
            </td>
          </tr>
        </tbody>
          
        
      </table>
      </div>
      
    </div>
  )
}

export default orderPage