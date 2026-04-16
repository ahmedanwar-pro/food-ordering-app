import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  street: "",
  postalCode: "",
  city: "",
};

const checkoutFormSlice = createSlice({
  name: "form",
  initialState,
  reducers: {
    handleFormOnChange(state, action) {
      const { name, value } = action.payload;
      state[name] = value;
    },
    resetForm() {
      return initialState;
    },
  },
});

export const checkoutFormActions = checkoutFormSlice.actions;
export default checkoutFormSlice.reducer;
