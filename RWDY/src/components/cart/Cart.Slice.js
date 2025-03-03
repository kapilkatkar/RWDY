import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: [], totalItems: 0 };
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
        if (state.data[alreadyAddedProductIndex].quantity < 4) {
          state.data[alreadyAddedProductIndex].quantity += 1;
        }
      } else {
        state.data.push({ ...action.payload, quantity: 1 });
      }
      state.totalItems = state.data.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },

    removeFromCart: (state, action) => {
      const productToRemoveIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      console.log({ productToRemoveIndex });
      if (productToRemoveIndex !== -1) {
        state.data.splice(productToRemoveIndex, 1);
      }

      state.totalItems = state.data.reduce(
        (total, item) => total + item.quantity,
        0
      );
    },
    // updateCart: (state, action) => {},
    increamentProducts: (state, action) => {
      const indexToIncreament = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      if (indexToIncreament !== -1) {
        state.data[indexToIncreament].quantity += 1;
      }

      state.totalItems = state.data.reduce(
        (total, item) => total + item.quantity,
        0
      );
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
      state.totalItems = state.data.reduce(
        (total, item) => total + item.quantity,
        0
      );
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
