import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className="h-20 flex justify-center">

      <div>
        <h2> INFORMATION </h2>
        <div className="flex flex-col">
          <Link href="/"> Home </Link>
          <Link href="/blog"> Blog </Link>
          <Link href="/about"> About Us </Link>
          <Link href="/menu"> Menu </Link>
          <Link href="/contact"> Contact Us </Link>
        </div>
      </div>

      <div className="flex flex-col">
        <h2> TOP ITEMS </h2>
          <Link href="/menu/1"> Pepperoni </Link>
          <Link href="/menu/2"> Swiss Mushroom </Link>
          <Link href="/menu/3"> Barbeque Chicken </Link>
          <Link href="/menu/4"> Vegetarian </Link>
          <Link href="/menu/5"> Ham & Cheese </Link>       
      </div>

      <div className="flex flex-col">
        <h2> OTHERS </h2>
        <Link href="/checkout"> Checkout </Link>
        <Link href="/checkout"> Checkout </Link>


      </div>
    </div>
  )
}

export default Footer