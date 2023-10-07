/* eslint-disable no-unused-vars */
import { createSlice } from "@reduxjs/toolkit";

function getItems() {
  const getItem = localStorage.getItem("products");

  if (getItem) {
    const parseProducts = JSON.parse(getItem);
    return parseProducts;
  }
  return [];
}

const initialState = {
  products: [
    {
      id: "e7ce2b97-d0c1-4a75-9c1d-e6dfc8441836",
      productName: "John",
      productCategory: "Doe",
      productFreshness: "Doe",
      productPrice: "Doe",
      imageOfProduct: "Doe",
      additionalDescription: "Doe",
    },
  ],
};

const sliceState = createSlice({
  name: "state",
  initialState: initialState,
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload;
      localStorage.setItem("products", JSON.stringify(action.payload));
    },
    editProduct: (state, action) => {
      const updatedProducts = state.products.map((product) =>
        product.id === action.payload.id ? action.payload : product
      );
      state.products = updatedProducts;
    },
    deleteProduct: (state, action) => {
      state.products = state.products.filter(
        (product) => product.id !== action.payload
      );
    },
  },
});

const reducer = {
  state: sliceState.reducer,
};

export const { setProducts, editProduct, deleteProduct } = sliceState.actions;
export default reducer;
