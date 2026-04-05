import { createSlice } from "@reduxjs/toolkit";

const initialState = { availableMeals: [] };

const availableMealsSlice = createSlice({
  name: "avaliableMeals",
  initialState,
  reducers: {
    getAvailableMeals(state, action) {
      state.availableMeals = action.payload;
    },
  },
});

export const availableMealsActions = availableMealsSlice.actions;
export default availableMealsSlice.reducer;
