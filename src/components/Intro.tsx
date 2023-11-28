import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Intro = () => {
    return (
        <div>
            <div className="flex justify-center items-center">   
                <div className="w-1/2 px-4">
                    <h1 className="font-bold text-3xl "> Handmade, With an Extra Pinch of <span className="text-red-500"> Love </span>  </h1>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                    </p>
                    <Button />
                </div>

                <div className="flex w-1/2">
                    <div className="">
                        <Image src="/images/pizza_image.png" alt="" width={500} height={500} className="object-right" />
                        <Image src="/images/pizza-onion.png" alt="" width={50} height={50} />
                        <Image src="/images/pizza_full.png" alt="" width={100} height={100} />
                    </div>
                    <div className="bg-goldenyellow rounded-l-full w-[600px] h-[800px] items-end">
                    </div>
                    
                    {/* <Image src="/images/pizza-onion.png" alt="" width={50} height={50} /> */}        
                </div> 
            </div>


            <section className="flex h-[500px] items-start justify-center gap-20">
                <div className="flex-1">      
                    <Image src="/images/pizza_slice.png" alt="" width={500} height={500} />
                </div>    
                <div className="flex flex-1 flex-col justify-center items-start mt-32">
                        <h1 className="font-semibold leading-10 text-[40px] mb-2"> Daily fresh and always tasty </h1>
                        <p className="mt-4 text-[20px] my-6 leading-relaxed"> There are many variations of passages of Lorem Ipsum available, but the majority haved </p>      
                </div>
                <div className="flex-1 mt-56 justify-center items-center">
                    <Image src="/images/garlic.png" alt="" width={100} height={100} />
                </div>
            </section>
        </div>

    )
}

export default Intro