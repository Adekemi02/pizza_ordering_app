import Image from 'next/image'
import React from 'react'

const cartPage = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Product</th>
            <th>Name</th>
            <th>Extra</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
          <tr>
            <td><Image src="" alt="" width={30} height={30} /> </td>
            <td>T-Shirt</td>
            <td></td>
            <td>$25.99</td>
            <td>1</td>
            <td>$25.99</td>
          </tr>
        </thead>
      </table>
    </div>
  )
}

export default cartPage