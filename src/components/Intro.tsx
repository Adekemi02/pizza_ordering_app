import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Intro = () => {
    return (
        <>
            <div className="flex gap-10 justify-between items-center mt-10">   
                <div className="px-4 ">
                    <h1 className="font-bold text-[59px] leading-[1.2] mb-3 "> 
                        <span> Handmade, </span> <br /> 
                        <span> With an Extra </span> <br />
                        <span> Pinch of <span className="text-red-500"> Love </span> </span> 
                    </h1>
                    <p className="text-[22px] tracking-[1px] mb-6 ">
                        Lorem Ipsum is simply dummy text of the <br /> printing and typesetting industry.
                    </p>
                    <Button />
                </div>

                <div className="flex">
                    
                    <div className="bg-goldenyellow rounded-l-full w-[450px] h-[800px] items-end">
                        <div className="relative top-10 right-72">
                            <Image src="/images/pizza_image.png" alt="" width={450} height={450} className="object-right" />
                        </div>
                        <div className="relative right-64 top-12">
                            <Image src="/images/pizza-onion.png" alt="" width={70} height={70} />
                        </div>
                        <div>
                            <Image src="/images/pizza_full.png" alt="" width={200} height={200} />
                        </div>
                                       
                    </div>
                    
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
        </>
    )
}

export default Intro