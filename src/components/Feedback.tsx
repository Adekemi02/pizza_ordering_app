import { Clients } from '@/app/data'
import Image from 'next/image'
import React from 'react'

const Feedback = () => {
  return (
    <div className="px-4">
      <div className="mb-8">
        <Image src="/images/leaf.png" alt="" width={90} height={90} />
        <h1 className="text-red-500 font-semibold"> Customer Feedback</h1>
        <p className="font-semibold text-2xl"> Client Testimonials</p>
      </div>
      <div className="flex gap-4 text-center">
        {Clients.map((item) => (
          <div key={item.id} className="flex flex-col gap-4 items-center justify-center border h-[60vh]">
            <div className="">
              <Image src={item.img} alt="" width={80} height={80} className="rounded-full" />
            </div>
            <h1 className="font-semibold text-lg"> {item.name} </h1>
            <p className="text-center mx-12"> {item.text} </p>
          </div>
        ))}
          
      </div>
    </div>
  )
}

export default Feedback