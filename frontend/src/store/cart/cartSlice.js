import { createSlice } from "@reduxjs/toolkit";
import LoadCartFromStorage, { STORAGE_KEY } from "../../util/cartStorage";

const initialState = { items: LoadCartFromStorage() };

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addItem(state, action) {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload.id,
      );
      if (existingIndex === -1) {
        state.items = [...state.items, { ...action.payload, quantity: 1 }];
      } else {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity + 1,
        };
        state.items = updated;
      }
    },
    removeItem(state, action) {
      const existingIndex = state.items.findIndex(
        (item) => item.id === action.payload,
      );
      const existingItem = state.items[existingIndex];

      if (existingItem.quantity === 1) {
        state.items = state.items.filter((item) => item.id !== action.payload);
      } else {
        const updated = [...state.items];
        updated[existingIndex] = {
          ...updated[existingIndex],
          quantity: updated[existingIndex].quantity - 1,
        };
        state.items = updated;
      }
    },

    removeItemCompletely(state, action) {
      state.items = state.items.filter((item) => item.id !== action.payload);
    },

    clearCart(state) {
      state.items = [];
      localStorage.removeItem(STORAGE_KEY);
    },
  },
});

export const cartActions = cartSlice.actions;
export default cartSlice.reducer;
