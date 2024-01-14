import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";



// export default configureStore({
//     reducer: {
//       cart: cartReducer,
//     },
//   });

export const store = configureStore({
  reducer: {
    cartReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;