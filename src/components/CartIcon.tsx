"use client"

import Link from 'next/link'
import React, { useEffect } from 'react'
import Image from 'next/image'
import {usePizzaStore} from '@/utils/store';
import { useSelector } from "react-redux";
import { RootState } from '@/store/store';



const CartIcon: React.FC = () => {
  const quantity = useSelector((state: RootState) => state.cartReducer.items);

  const { totalItems } = usePizzaStore();

  useEffect(()=> {
    usePizzaStore.persist.rehydrate();
  },  []);


  return (
    <Link href="/cart" passHref>
        <div className='relative'>
            <Image src="/images/cart_logo_dark.png" alt="Cart Image" width={25} height={25} />
            <span className="absolute top-[-5px] right-[-8px] bg-red-600 text-white text-center w-[15px] h-[15px] flex justify-center items-center rounded-3xl"> 
              {quantity.length} 
            </span>
        </div>
    </Link>
  )
}

export default CartIcon