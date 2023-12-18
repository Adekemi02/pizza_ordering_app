export type Product = {
    id: number;
    title: string;
    desc?: string;
    img?: string;
    price: number;
    options?: { title: string; additionalPrice: number; width: number; height: number }[];
  };

export type CartItemType = {
    id: number,
    title: string;
    desc?: string;
    img?: string;
    price: number;
    itemPrice: number,
    options?: string;
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