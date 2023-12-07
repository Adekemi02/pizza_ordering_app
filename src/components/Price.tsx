"use client"

import React, { useState, useEffect } from 'react'


type Props = {
  price: number;
  id: number;
  options?: {title: string; additionalPrice: number}[];
};

const Price = ({price, id, options}: Props) => {
  const [total, setTotal] = useState(price);
  const [quantity, setQuantity] = useState(1)
  const [selected, setSelected] = useState(0)

  useEffect(() => {
    setTotal(
      quantity * (options ? price + options[selected].additionalPrice : price)
    )
  }, [quantity, selected, options, price]);

  return (
    <div>
      <h2> ${total} </h2>
    </div>
  )
}

export default Price