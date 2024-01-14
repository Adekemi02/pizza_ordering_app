import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ProductType } from "@/types/types";



interface CartState {
  items: ProductType[];
  quantity: 0,
  total: 0,
}

const initialState: CartState = {
  items: [],
  quantity: 0,
  total: 0,
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action: PayloadAction<ProductType>) => {
      state.items.push(action.payload);
      state.quantity += 1;
//       state.total += action.payload.price * action.payload.quantity;
    },
  },
});

export const { addItem } = cartSlice.actions;
export default cartSlice.reducer;

// export const cartSlice = createSlice({
//   name: "cart",
//   initialState: {
//     products: [],
//     quantity: 0,
//     total: 0,
//   },
//   reducers: {
//     addProduct: (state, action) => {
//       state.products.push(action.payload);
//       state.quantity += 1;
//       state.total += action.payload.price * action.payload.quantity;
//     },
//     reset: (state) => {
//       state.products = [];
//       state.quantity = 0;
//       state.total = 0;
//     },
//   },
// });

// export const { addProduct, reset } = cartSlice.actions;
// export default cartSlice.reducer;