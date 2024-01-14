export type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number; width: number; height: number }[];
  };

export type ProductType = {
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

export type CartItemType = {
    id: string,
    title: string;
    desc?: string;
    img?: string;
    price: number;
    itemPrice: number,
    options?: { id: string; text: string; price: number }[];
    quantity: number;
};

export type CartType = {
    products: CartItemType[];
    totalItems: number;
    totalPrice: number;
};

export type ActionTypes = {
    addToCart: (item: CartItemType) => void;
    removeFromCart: (item: CartItemType) => void;
};