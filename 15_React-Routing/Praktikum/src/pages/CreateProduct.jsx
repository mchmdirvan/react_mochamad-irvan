/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CreateProductLanguage from "../utils/constants/CreateProductLanguage";

import BootstrapLogo from "../assets/bootstrap-logo.svg";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import {
  Input,
  File,
  TextArea,
  Select,
  RadioInput,
} from "../components/FormComponent";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Table from "../components/Table";

function CreateProduct() {
  const [currentLanguage, setCurrentLanguage] = useState("en");

  const [isEdit, setIsEdit] = useState(false);

  const [additionalDescriptionError, setAdditionalDescriptionError] =
    useState("");
  const [productFreshnessError, setProductFreshnessError] = useState("");
  const [productCategoryError, setProductCategoryError] = useState("");
  const [imageOfProductError, setImageOfProductError] = useState("");
  const [productPriceError, setProductPriceError] = useState("");
  const [productNameError, setProductNameError] = useState("");

  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productFreshness, setProductFreshness] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageOfProduct, setImageOfProduct] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productName, setProductName] = useState("");
  const [selectedId, setSelectedId] = useState("");

  const [products, setCreateProducts] = useState([]);
  useTitle("Create Product");

  function handleSubmit(event) {
    event.preventDefault();
    event.currentTarget.classList.add("was-validated");

    const product = {
      id: uuidv4() + 1,
      productName: productName,
      productCategory: productCategory,
      productFreshness: productFreshness,
      productPrice: productPrice,
    };
    setCreateProducts([...products, product]);
    setProductName("");
    setProductCategory("");
    setImageOfProduct("");
    setProductFreshness("");
    setAdditionalDescription("");
    setProductPrice("");

    Swal.fire({
      title: "Success",
      text: "Berhasil menambahkan data",
      showCancelButton: false,
    });
  }

  function handleEdit(event) {
    event.preventDefault();
    const updatedProduct = {
      id: selectedId,
      productName: productName,
      productCategory: productCategory,
      productFreshness: productFreshness,
      productPrice: productPrice,
    };
    const updatedProducts = products.map((product) =>
      product.id === selectedId ? updatedProduct : product
    );
    setProductName("");
    setProductCategory("");
    setImageOfProduct("");
    setProductFreshness(false);
    setAdditionalDescription("");
    setProductPrice("");

    setCreateProducts(updatedProducts);
    setIsEdit(false);
    setSelectedId("");
    Swal.fire({
      title: "Success",
      text: "Berhasil merubah data",
      showCancelButton: false,
    });
  }

  function handleDelete(id) {
    const updatedProducts = products.filter((product) => product.id !== id);
    setCreateProducts(updatedProducts);
    Swal.fire({
      title: "Success",
      text: "Berhasil menghapus data",
      showCancelButton: false,
    });
  }

  function handleProductNameChange(event) {
    const inputValue = event.target.value;
    setProductName(inputValue);
    if (inputValue.length < 6) {
      setProductNameError("Please enter a valid Product Name");
    } else if (inputValue.length > 25) {
      setProductNameError("Product Name must not exceed 25 characters.");
    } else {
      setProductNameError("");
    }
  }

  function handleProductPriceChange(event) {
    const inputValue = event.target.value;
    setProductPrice(inputValue);
    if (!inputValue) {
      setProductPriceError("Please enter a valid Product price.");
    } else {
      setProductPriceError("");
    }
  }

  function handleProductCategoryChange(event) {
    const inputValue = event.target.value;
    setProductCategory(inputValue);

    if (inputValue === "") {
      setProductCategoryError("The Product Category field must be filled in");
    } else {
      setProductCategoryError("");
    }
  }

  function handleImageChange(event) {
    const inputValue = event.target.value;
    setImageOfProduct(inputValue);

    if (!inputValue) {
      setImageOfProductError("The Image of Product field must be filled in");
    } else {
      setImageOfProductError("");
    }
  }

  function handleAdditionalDescriptionChange(event) {
    const inputValue = event.target.value;
    setAdditionalDescription(inputValue);
    if (!inputValue) {
      setAdditionalDescriptionError(
        "The Additional Description field must be filled in"
      );
    } else {
      setAdditionalDescriptionError("");
    }
  }

  function handleProductFreshnessChange(event) {
    const inputValue = event.target.value;
    setProductFreshness(inputValue);
    if (!productFreshness) {
      setProductFreshnessError("The Product Freshness field must be filled in");
    } else {
      setProductFreshnessError("");
    }
  }

  function generateRandomNumber() {
    const randomNum = Math.floor(Math.random() * 1000);
    console.log(randomNum);
    return randomNum;
  }

  return (
    <>
      <Navbar />

      <main className=" py-10 flex flex-col items-center justify-center">
        {/* Title and Description */}
        <img
          src={BootstrapLogo}
          alt="Bootstrap Logo"
          className=" w-[4rem] align-middle"
        />
        <h1 className=" pt-5 font-semibold text-3xl">
          {CreateProductLanguage.title[currentLanguage]}
        </h1>
        <p className="pt-2 text-xl px-[17rem] text-center text-gray-700">
          {CreateProductLanguage.description[currentLanguage]}
        </p>
        <button
          className=" mt-1 px-4 border-blue-100 border-2 rounded-full text-center"
          onClick={() =>
            setCurrentLanguage(currentLanguage === "en" ? "id" : "en")
          }
        >
          Toggle Language
        </button>
      </main>

      <main className="px-[28rem]">
        <h4 className="font-semibold text-2xl">Detail Product</h4>
        <form
          className=""
          noValidate=""
          onSubmit={(event) =>
            isEdit ? handleEdit(event) : handleSubmit(event)
          }
        >
          {/* Form Product Name */}
          <Input
            className="w-72"
            label="Product Name :"
            type="text"
            name="productName"
            id="productName"
            minLength={6}
            maxLength={50}
            autoFocus
            value={productName}
            onChange={handleProductNameChange}
            errorMessage={productNameError}
          />

          {/* Form Product Category */}
          <Select
            className=""
            label="Product Category"
            name="productCategory"
            id="productCategory"
            value={productCategory}
            options={["Fruits", "Vegetable", "Dairy"]}
            onChange={handleProductCategoryChange}
            placeholder="Choose..."
            errorMessage={productCategoryError}
          />

          {/* Form Image of Product */}
          <File
            className=""
            label="Image of Product"
            type="file"
            id="imageOfProduct"
            errorMessage={imageOfProductError}
            onChange={handleImageChange}
            value={imageOfProduct}
          />

          {/* Form Product Freshness */}
          <div className="mt-5">
            <label>Product Freshness</label>
            <RadioInput
              id="brandNew"
              name="productFreshness"
              label="Brand New"
              value="Brand New"
              checked={productFreshness === "Brand New"}
              onChange={handleProductFreshnessChange}
            />
            <RadioInput
              id="secondHank"
              name="productFreshness"
              label="Second Hank"
              value="Second Hank"
              checked={productFreshness === "Second Hank"}
              onChange={handleProductFreshnessChange}
            />
            <RadioInput
              id="refurbished"
              name="productFreshness"
              label="Refurbished"
              value="Refurbished"
              checked={productFreshness === "Refurbished"}
              onChange={handleProductFreshnessChange}
              errorMessage={productFreshnessError}
            />
          </div>

          {/* Form Additional Description */}
          <TextArea
            className="mt-3"
            label="Addittional Description"
            name="additionalDescription"
            id="additionalDescription"
            cols={5}
            rows={5}
            errorMessage={additionalDescriptionError}
            onChange={handleAdditionalDescriptionChange}
            value={additionalDescription}
          />

          {/* Form Product Price */}
          <Input
            className="w-full"
            label="Product Price"
            type="number"
            id="productPrice"
            placeholder="$1"
            value={productPrice}
            onChange={handleProductPriceChange}
            errorMessage={productPriceError}
          />

          {/* Button to Submit the Form */}
          <Button type="submit" id="submitButton" label="Submit" className="" />

          {/* Button to Generate Random Number */}
          <Button
            type="Button"
            id="generateRandomNumberButton"
            label="Generate Random Number"
            onClick={() => generateRandomNumber()}
          />
        </form>
      </main>

      <Table
        headers={[
          "No",
          "Product Name",
          "Product Category",
          "Product Freshness",
          "Product Price",
          "Actions",
        ]}
        datas={products}
        onEditClick={(data) => {
          setIsEdit(true);
          setProductName(data.productName);
          setProductCategory(data.productCategory);
          setProductFreshness(data.productFreshness);
          setProductPrice(data.productPrice);
          setSelectedId(data.id);
        }}
        onDeleteClick={(data) =>
          Swal.fire({
            title: "Peringatan",
            text: `Apakah anda yakin untuk menghapus product ${data.productName}?`,
          }).then((result) => {
            if (result.isConfirmed) {
              handleDelete(data.id);
            }
          })
        }
      />
    </>
  );
}

export default CreateProduct;
