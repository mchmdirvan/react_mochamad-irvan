import { v4 as uuidv4 } from "uuid";

import axiosWithConfig from "../axiosWithConfig";

export const getProducts = async () => {
  try {
    const response = await axiosWithConfig.get("/products");
    return response.data;
  } catch (error) {
    throw Error("Failed to get products");
  }
};

export const getDetailProducts = async (id) => {
  try {
    const response = await axiosWithConfig.get("/products/" + id);
    return response.data;
  } catch (error) {
    throw Error("Failed to get a product");
  }
};

export const updateProduct = async (data) => {
  const { id } = data;
  try {
    const newData = {
      id: uuidv4(),
      ...data,
      imageOfProduct:
        "https://cdn.shopify.com/s/files/1/0533/2089/files/placeholder-images-image_large.png",
    };
    const response = await axiosWithConfig.put(`/products/${id}`, newData);
    return response.data
  } catch (error) {
    throw Error("Failed to update a product")
  }
};
