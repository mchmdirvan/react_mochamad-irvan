import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  products: [],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    getProducts: (state, action) => {
      state.products = action.payload;
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { getProducts } = sliceState.actions;
export default reducer;
