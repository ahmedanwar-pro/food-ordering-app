import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoading: "",
  isError: "",
  isErrorSubmit: "",
};

const uiSlice = createSlice({
  name: "ui",
  initialState,
  reducers: {
    isLoading(state, action) {
      state.isLoading = action.payload;
    },
    isError(state, action) {
      state.isError = action.payload;
    },
    isErrorSubmit(state, action) {
      state.isErrorSubmit = action.payload;
    },
  },
});

export const uiActions = uiSlice.actions;
export default uiSlice.reducer;
