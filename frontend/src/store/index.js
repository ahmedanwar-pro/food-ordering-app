import { configureStore } from "@reduxjs/toolkit";
import cartReducers from "./cartSlice";
import mealsReducers from "./meals/meals-Slice";
import uiReducers from "./uiSlice";
import formReducers from "./formSlice";

const store = configureStore({
  reducer: {
    cart: cartReducers,
    availableMeals: mealsReducers,
    ui: uiReducers,
    form: formReducers,
  },
});

export default store;
