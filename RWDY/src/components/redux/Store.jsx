import { configureStore } from "@reduxjs/toolkit";
import CartSlice from "../cart/Cart.Slice";

const store = configureStore({
  reducer: {
    myCart: CartSlice,
  },
});

export default store;
