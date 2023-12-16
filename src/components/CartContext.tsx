'use client';

import React, { createContext, useState} from 'react';



type Props = {
    children: React.ReactNode
}

const CartContext = createContext({})

const CartProvider = ({children}:Props) => {
    const [cartProducts, setCartProducts] = useState([]);
    return (
        <CartContext.Provider value={{
            cartProducts, setCartProducts
        }}>
            {children}
        </CartContext.Provider>
    )
}

export default CartProvider



































// type ProductType = {
//   // Define the structure of your product data
//   id: number;
//   name: string;

// };

// type Props = {
//     children: ReactNode;
//     product: ProductType[]
// }


// const CartContext = createContext({});

// // export const CartProvider = ({children}: Props) => {
// //   const [cartProducts, setCartProducts] = useState([]);

// //   const addToCart = (product:Props, size=null, extras=[]) => {
// //     setCartProducts(prevProducts => {
//     //       const cartProduct = {...product, size, extras}
//     //       const newProducts = {...prevProducts, cartProduct};
//         //   return newProducts;
// // });
    
    
//     // let alreadyInCart = prevProducts.find((item) => item.id === product.id);
//     //       if (alreadyInCart){
//         //         return prevProducts.map((item)=>
//         //           item.id === product.id ?  {...item , amount: item.amount +1} : item
//         //         )
//         //       }else{
//             //         return [ ...prevProducts, {...product, amount: 1, selectedSize:size, extraItems:extras}]
//             //         return [...prevProducts, {...product, amount:1, sizes:size?[size]:product.sizes,
//             //                      extraItems:extras.length >0 ? extras : product.extraItems}]
//             //       }
//     //       let existingProductIndex = prevProducts.findIndex((p)=> p.id === product.id);
//     //       if(existingProductIndex >= 0){
//         //         return updateQuantityInCart(prevProducts[existingProductIndex],size,extras);
//         //   }else{
//             //   return [...prevProducts,setProductAsAddedToCart(product,size,extras)];
//             // }
   
// //   };

// //   const removeFromCart = (index) => {
// //     const newCart = [...cart];
// //     newCart.splice(index, 1);
// //     setCart(newCart);
// //   };

// export function AppProvider({children}: Props) {
//     const [cartProducts, setCartProducts] = useState([]);
//     const [totalAmount, setTotalAmount] = useState(0);
    
//     function addToCart(product:Props, size=null, extras=[]) {
//         setCartProducts(prevProducts => {
//             const cartProduct = {...product, size, extras};
//             const newProducts = {...prevProducts, cartProduct};
//             return newProducts;
//         })
//     }

//     return (
//         <CartContext.Provider value={{ 
//             cartProducts, setCartProducts, addToCart
//         }}>
//             {children}
//         </CartContext.Provider>
//     )
// }
// //   return (
// //     <CartContext.Provider value={{ 
// //         cart, addToCart, removeFromCart 
// //     }}>
// //       {children}
// //     </CartContext.Provider>
// //   );
// // };

// export const useCart = () => {
//   return useContext(CartContext);
// };
