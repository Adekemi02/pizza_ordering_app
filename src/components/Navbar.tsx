import Link from 'next/link'
import React from 'react'
import Image from 'next/image'
import Menu from './Menu'
import CartIcon from './CartIcon'
import SearchIcon from './SearchIcon'

const Navbar = () => {
  const user = false
  return (
    <div className="sticky top-0 bg-white">
      <div className="h-14 p-2 flex items-center justify-between mt-2">
          {/* LOGO */}
          <div className="w-14 h-14">
              <Link href="/">
                  <Image src = "/pizza-logo.png" alt = "Pizza Logo" width = {50} height = {50} />
              </Link>
          </div>
            
          <div className="w-24 h-20">
            <Image src="/images/pizza_header.png" alt="Pizza header" width={110} height={60} />
          </div>

          {/* MEDIUM SCREEN MENU */}
          <div className = "hidden md:flex gap-4 justify-center items-center h-8 mt-4 font-semibold text-sm">
            <Link href="/"> HOME </Link>
            <Link href="/products"> PRODUCTS </Link>
            <Link href="/pages"> PAGES </Link>
            <Link href="/blog"> BLOG </Link>
            <Link href="/contacts"> CONTACT </Link>
            {!user ? (
              <Link href="/login"> LOGIN </Link>
              ) : (
                <Link href="order"> ORDERS </Link>
              )}
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