import { configureStore } from "@reduxjs/toolkit";
import mealsReducers from "./meals/mealsSlice";
import checkoutFormReducers from "./checkoutForm/checkoutFormSlice";
import cartReducers from "./cart/cartSlice";
import uiReducers from "./ui/uiSlice";

const store = configureStore({
  reducer: {
    availableMeals: mealsReducers,
    checkoutForm: checkoutFormReducers,
    cart: cartReducers,
    ui: uiReducers,
  },
});

export default store;
