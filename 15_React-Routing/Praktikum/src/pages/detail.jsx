/* eslint-disable no-unused-vars */
import { useParams } from "react-router-dom";
import React from "react";

import { useTitle } from "../utils/hooks/customHooks";

export default function Detail() {
  useTitle("Detail Data");

  function getDataFromLocalStorage(key) {
    const data = localStorage.getItem(key);
    return JSON.parse(data);
  }

  const { id } = useParams();
  const products = getDataFromLocalStorage("products") || [];
  const product = products.find((product) => product.id === id);

  return (
    <div>
      <h2>Product Detail</h2>
      <p>ID: {product.id}</p>
      <p>Product Name: {product.productName}</p>
      <p>Product Category: {product.productCategory}</p>
      <p>Product Freshness: {product.productFreshness}</p>
      <p>Product Price: {product.productPrice}</p>
    </div>
  );
}
