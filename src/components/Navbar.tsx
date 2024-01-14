import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Menu from './Menu'
import CartIcon from './CartIcon'
import SearchIcon from './SearchIcon'
import { useSelector } from "react-redux";

const Navbar = () => {
  const user = false
  // const quantity = useSelector((state: any) => state.cart.quantity);

  return (
    <div className="sticky h-24 top-0 z-10 bg-white">
      <div className="h-20 p-2 flex items-center justify-between ">

        {/* LOGO */}
        <div className="flex gap-44">
          <div className="w-16 h-14 py-2">
            <Link href="/">
              <Image src = "/pizza-logo.png" alt = "Pizza Logo" width = {50} height = {50} />
            </Link>
          </div>
            
          <div className="w-24 h-20">
            <Image src="/images/pizza_header.png" alt="Pizza header" width={110} height={60} />
          </div>

        </div>

        {/* MEDIUM SCREEN MENU */}
        <div className = "hidden md:flex gap-4 justify-center items-center h-8 mt-4 p-2 text-center font-semibold text-sm uppercase">
          <Link href="/"> Home </Link>
          <Link href="/menu"> Products </Link>
          <Link href="/pages"> Pages </Link>
          <Link href="/blog"> Blog </Link>
          <Link href="/contacts"> Contact </Link>
          {!user ? (
            <Link href="/login"> Login </Link>) 
            : (
              <Link href="order"> Orders </Link>)
          }
          <SearchIcon />
          <CartIcon />
        </div>

        {/* MOBILE MENU */}
        <div className="md:hidden">
            <Menu />
        </div>
      </div>
    </div>
  )
}

export default Navbar