import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

const CartIcon = () => {
  return (
    <Link href="/cart">
        <div>
            <Image src="/images/cart_logo_dark.png" alt="Cart Image" width={20} height={20} />
        </div>
    </Link>
  )
}

export default CartIcon