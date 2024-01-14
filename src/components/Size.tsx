"use client"
import Image from 'next/image';
import React, { useState, useEffect } from 'react';
import { usePizzaStore } from '@/utils/store';
import { toast } from 'react-toastify';
import { useDispatch } from "react-redux";
import { addItem } from '@/store/cartSlice'



interface ProductType {
    pizza: {
        id: string;
        title: string;
        desc: string;
        img: string;
        prices: [number];
        extraOptions: [{
            id: string
            text: string;
            price: number
        }]
    }
    
}

const Size: React.FC<ProductType> = ({ pizza }) => {
    const [size, setSize] = useState(0);
    const [price, setPrice] = useState(pizza?.prices?.[0] || 0);
    const [quantity, setQuantity] = useState(1);
    const [selected, setSelected] = useState(0);
    const [extras, setExtras] = useState<{ id: string; text: string; price: number }[]>([]);
    const dispatch = useDispatch();
    const [total, setTotal] = useState(price);
    const { addToCart, products } = usePizzaStore();

    useEffect(() => {
        
        usePizzaStore.persist.rehydrate();
    },[]);

    

//     useEffect(() => {
//     if (pizza.extraOptions?.length) {
//       setTotal(quantity * pizza.prices[selected] + pizza.extraOptions[size].price);
//     }
//   }, [quantity, selected, pizza]);


    const changePrice = (number: number) => {
        setPrice(price + number);
  };
    

    const handleSizeChange = (sizeIndex: number) => {
        const difference = pizza.prices[sizeIndex] - pizza.prices[size];
        setSize(sizeIndex);
        changePrice(difference);
        // setSize(sizeIndex);
        // const newPrice = pizza.prices[sizeIndex]
        // const difference = newPrice - price
        // setPrice(newPrice)
        // setTotal((prevTotal) => prevTotal + difference)
    };

    const handleExtraChange = (e: React.ChangeEvent<HTMLInputElement>, option: { id: string; text: string; price: number }) => {
        // const isExtraSelected = extras.some(extra => extra.id === option.id);
        const checked = e.target.checked;

        if (checked) {
            changePrice(option.price);
            setExtras((prev) => [...prev, option]);
        
        } else {
            changePrice(-option.price);
            setExtras(extras.filter((extra) => extra.id !== option.id));
        }


        // if (isExtraSelected) {
        //     setExtras(
        //         prevExtras => prevExtras.filter(extra => extra.id !== option.id));
        //     setTotal(
        //         (prevTotal) => prevTotal - option.price)

        // } else {
        //     setExtras(prevExtras => [...prevExtras, option]);
        //     setTotal((prevTotal) => prevTotal + option.price)
        // }

    };

    const handleClick = () => {
        // dispatch(addItem({...pizza, extras, price, quantity}))
        dispatch(addItem(pizza))
    }

    // Calculate total price based on selected size and extras
    // const totalPrice = pizza.prices[size] +
    //     extras.reduce((sum, extra) => sum + extra.price, 0);

    const totalPrice =
    pizza?.prices && pizza.prices[size]
      ? pizza.prices[size] +
        extras.reduce((sum, extra) => sum + extra.price, 0)
      : 0;


    const handleCart = () => {
        
        const newItem = {
            id: pizza.id,
            price: totalPrice,
            itemPrice: pizza.prices[size],
            quantity: quantity,
            title: pizza.title,
            desc: pizza.desc,
            img: pizza.img,
            options: pizza.extraOptions,
            // ...(singleProduct.extraOptions?.length && { optionTitle: singleProduct.extraOptions[selected].text }),
        };

        addToCart(newItem);

        toast.success("Item added to cart successfully!");

    };

    

    return (
        <>
            <h1 className="font-semibold text-3xl mb-2"> {pizza.title} </h1>
            <span className="text-red-500 font-semibold mr-4"> ${price} </span>
            <span className="text-gray-300 font-semibold"> 8 Reviews </span>
            
            <p className="mt-4"> {pizza.desc} </p>
            <p className="mt-4">Category: Chicken, Launch, Pizza, Burger </p>
            <p className="mt-4"> Tags: Healthy, Organic, Chicken, Sauce </p>
            
            <h1 className="font-semibold mb-4 mt-8"> Choose Pizza Size </h1>

            <div className="w-[25%] flex justify-between items-center">
                <div className="relative cursor-pointer w-[30px] h-[30px]" onClick={() => handleSizeChange(size)}>
                    <Image src="/images/pizza_size.png" layout="fill" alt="" />
                    <span className="absolute top-[-5px] right-[-20px] bg-red-500 text-white rounded-[10px] font-semibold text-xs px-[5px]">Small</span>
                </div>

                <div className="w-[40px] h-[40px] relative cursor-pointer" onClick={() => handleSizeChange(1)}>
                    <Image src="/images/pizza_size.png" layout="fill" alt="" />
                    <span className="absolute top-[-5px] right-[-20px] bg-red-500 text-white rounded-[10px] font-semibold text-xs px-[5px]">Medium</span>
                </div>

                <div className="w-[50px] h-[50px] relative cursor-pointer" onClick={() => handleSizeChange(2)}>
                    <Image src="/images/pizza_size.png" layout="fill" alt="" />
                    <span className="absolute top-[-5px] right-[-20px] bg-red-500 text-white rounded-[10px] font-semibold text-xs px-[5px]">Large</span>
                </div>
                    
            </div>

            <div className="mt-10 font-semibold">
                <h1 className="mb-2"> Choose additional ingredients </h1>
            
                {pizza.extraOptions && pizza.extraOptions.map((option) => (
                    <div key={option.id}>
                        <input type="checkbox"
                            id={option.text}
                            name={option.text}
                            // checked={extras.some(extra => extra.id === option.id)}
                            onChange={(e) => handleExtraChange(e, option)}
                        />
                        <label htmlFor={option.text} className="font-normal"> {option.text} </label>
                        <span>{`$${option.price}`}</span>
                    </div>
                ))}    
            
                <div className="flex items-center gap-4 mt-6">
                    <input 
                        type="number" 
                        min="1" step="1" 
                        className="border h-9 w-32"
                        defaultValue={1}
                        // onClick={() => setQuantity(quantity + 1)}
                        onChange={(e) => setQuantity(Number(e.target.value))}
                    />

                    <button
                        // onClick={() => addToCart()}
                        className="bg-goldenyellow hover:bg-red-500 transition-all duration-300 rounded-full font-semibold uppercase text-white w-32 m-2 py-2"
                        onClick={handleClick}
                    > 
                        Add to Cart 
                    </button>

                    <span className="h-12 w-12 border rounded-[100%]">
                        <Image src="/images/heart_icon.png" alt="" width={15} height={15} className="relative top-4 left-4" />
                    </span>
                </div>
            </div>
        </>
        
    )
}

export default Size