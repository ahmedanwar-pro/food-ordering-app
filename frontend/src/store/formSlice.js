import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  email: "",
  street: "",
  postalCode: "",
  city: "",
};

const formSlice = createSlice({
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

export const formActions = formSlice.actions;
export default formSlice.reducer;
