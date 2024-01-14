import Image from 'next/image'
import React from 'react'
import Button from './Button'
import Link from 'next/link'



interface Pizza {
    _id: string,
    title: string,
    desc: string,
    img: string,
    prices: [number],
    extraOptions:[{
        text: string,
        price: number
    }]
}

interface PizzaCardProps {
    pizzas: Pizza[];
}

const PizzaCard: React.FC<PizzaCardProps> = ({pizzas}) => {
    return (
        <div className="grid grid-cols-3 justify-around gap-10 p-4">
        {/* single item */}
        {pizzas.map((item) => (
          <div key={item._id}  className="flex flex-col gap-4 h-[500px] border">
            {item.img && (
                <Link className="h-1/2 p-4" href={`/productPage/${item._id}`}>
                    <div >
                        <Image src={item.img} alt="" width={300} height={300} />
                    </div>
                </Link>

            )}
              
            <div className="mt-16">
              <div className="flex gap-32 m-4">
                <h1 className="text-xl font-semibold"> {item.title} </h1>
                <span className="text-red-500 font-bold"> ${item.prices[0]} </span>
              </div>
              
              <p className="m-4"> {item.desc} </p>
              <div className="mt-8 px-4">
                <Button />
              </div>

            </div>
          </div>
        ))}
          
      </div>
    )
}

export default PizzaCard