import React from 'react'
import PizzaCard from './PizzaCard'



async function getData() {
  const res = await fetch("http://localhost:3000/api/products")

  if (!res.ok) {
    throw new Error('Could not fetch data')
  }

  return res.json()
}


const Offers = async () => {
  const pizzas = await getData()
  // console.log(pizzas)
  return (
    <div className="h-[1200px]">
      <p className="text-red-500 font-semibold px-4"> Popular Dishes </p>
      <h1 className="font-semibold text-2xl px-4 mb-3"> Browse our Menu </h1>
      {/* wrapper */}
      <PizzaCard pizzas={pizzas} key={pizzas._id} />
    </div>
  )
}

export default Offers