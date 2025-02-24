import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [] };
const CartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      console.log("selected action", action.payload);
      const alreadyAddedProductIndex = state.data.findIndex((item) => {
        return item.id === action.payload.id;
      });

      if (alreadyAddedProductIndex !== -1) {
        state.data[alreadyAddedProductIndex].quantity += 1;
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
    },

    removeFromCart: (state, action) => {
      const productToRemoveIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log({ productToRemoveIndex });
      if (productToRemoveIndex !== -1) {
        state.data.splice(productToRemoveIndex, 1);
      }
    },
    // updateCart: (state, action) => {},
    increamentProducts: (state, action) => {
      const indexToIncreament = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToIncreament !== -1) {
        state.data[indexToIncreament].quantity += 1;
      }
    },

    decreamentProducts: (state, action) => {
      const indexToDecreament = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (state.data[indexToDecreament].quantity > 1) {
        state.data[indexToDecreament].quantity -= 1;
      } else {
        state.data.splice(indexToDecreament, 1);
      }
    },
  },
});

export const {
  addToCart,
  removeFromCart,
  increamentProducts,
  decreamentProducts,
} = CartSlice.actions;
export default CartSlice.reducer;
