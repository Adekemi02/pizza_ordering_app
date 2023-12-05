import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart">
        <div className='relative'>
            <Image src="/images/cart_logo_dark.png" alt="Cart Image" width={25} height={25} />
            <span className="absolute top-[-5px] right-[-8px] bg-red-600 text-white text-center w-[15px] h-[15px] flex justify-center items-center rounded-3xl"> 0 </span>
        </div>
    </Link>
  )
}

export default CartIcon