/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import CreateProductLanguage from "../utils/CreateProductLanguage";

import BootstrapLogo from "../assets/bootstrap-logo.svg";
import { useTitle } from "../utils/hooks/customHooks";
import Swal from "../utils/swal";

import { Input, File, TextArea, Select } from "../components/FormComponent";
import Navbar from "../components/Navbar";
import Button from "../components/Button";
import Table from "../components/Table";

function CreateProduct() {
  const [currentLanguage, setCurrentLanguage] = useState("en");
  const toggleLanguage = () => {
    setCurrentLanguage(currentLanguage === "en" ? "id" : "en");
  };

  const [productFreshness, setProductFreshness] = useState(false);
  const [isEdit, setIsEdit] = useState(false);

  const [additionalDescription, setAdditionalDescription] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [imageOfProduct, setImageOfProduct] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
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
    Swal.fire({
      title: "Success",
      text: "Berhasil menambahkan data",
      showCancelButton: false,
    });
    setProductName("");
    setProductCategory("");
    setImageOfProduct("");
    setProductFreshness(false);
    setAdditionalDescription("");
    setProductPrice("");
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
    Swal.fire({
      title: "Success",
      text: "Berhasil merubah data",
      showCancelButton: false,
    });
    setCreateProducts(updatedProducts);
    setIsEdit(false);
    setSelectedId("");
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
      setErrorMessage("Please enter a valid Product Name");
      event.target.classList.add("is-invalid");
    } else if (inputValue.length > 25) {
      setErrorMessage("Product Name must not exceed 25 characters.");
      event.target.classList.add("is-invalid");
    } else {
      setErrorMessage("");
      event.target.classList.add("is-valid");
      event.target.classList.remove("is-invalid");
    }
  }

  function handleProductPriceChange(event) {
    const inputValue = event.target.value;
    setProductPrice(inputValue);
    if (!inputValue) {
      setErrorMessage("Please enter a valid Product price.");
      event.target.classList.add("is-invalid");
    } else {
      setErrorMessage("");
      event.target.classList.add("is-valid");
      event.target.classList.remove("is-invalid");
    }
  }

  function handleProductCategoryChange(event) {
    const inputValue = event.target.value;
    setProductCategory(inputValue);

    if (inputValue === "") {
      event.target.classList.add("is-invalid");
      setErrorMessage("The Product Category field must be filled in");
    } else {
      setErrorMessage("");
      event.target.classList.add("is-valid");
      event.target.classList.remove("is-invalid");
    }
  }

  function handleImageChange(event) {
    const inputValue = event.target.value;
    setImageOfProduct(inputValue);

    if (!inputValue) {
      setErrorMessage("The Image of Product field must be filled in");
      event.target.classList.add("is-invalid");
    } else {
      setErrorMessage("");
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    }
  }

  function handleAdditionalDescriptionChange(event) {
    const inputValue = event.target.value;
    setAdditionalDescription(inputValue);
    if (!inputValue) {
      setErrorMessage("The Additional Description field must be filled in");
      event.target.classList.add("is-invalid");
    } else {
      setErrorMessage("");
      event.target.classList.remove("is-invalid");
      event.target.classList.add("is-valid");
    }
  }

  function handleProductFreshnessChange(event) {
    const inputValue = event.target.value;
    setProductFreshness(inputValue);
    if (!productFreshness) {
      setErrorMessage("The Product Freshness field must be filled in");
    } else {
      setErrorMessage("");
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

      <main className="body">
        {/* Title and Description */}
        <img
          src={BootstrapLogo}
          alt="Bootstrap Logo"
          className="mx-auto d-block bootstrap-logo"
        />
        <h2>{CreateProductLanguage.title[currentLanguage]}</h2>
        <p>{CreateProductLanguage.description[currentLanguage]}</p>
        <button onClick={toggleLanguage}>Toggle Language</button>
      </main>

      <main className="body">
        <h4 className="mt-5">Detail Product</h4>
        <form
          className="needs-validation"
          noValidate=""
          onSubmit={(event) =>
            isEdit ? handleEdit(event) : handleSubmit(event)
          }
        >
          {/* Form Product Name */}
          <Input
            className="col-6 mt-3"
            label="Product Name :"
            type="text"
            name="productName"
            id="productName"
            minLength={6}
            maxLength={50}
            required
            autoFocus
            value={productName}
            onChange={handleProductNameChange}
            errorMessage={errorMessage}
          />

          {/* Form Product Category */}
          <Select
            className="col-5 mt-3"
            label="Product Category"
            name="productCategory"
            id="productCategory"
            required
            value={productCategory}
            options={["Fruits", "Vegetable", "Dairy"]}
            onChange={handleProductCategoryChange}
            placeholder="Choose..."
          />

          {/* Form Image of Product */}
          <File
            className="col-4 mt-3"
            label="Image of Product"
            type="file"
            id="imageOfProduct"
            errorMessage={errorMessage}
            onChange={handleImageChange}
            value={imageOfProduct}
          />

          {/* Form Product Freshness */}
          <div className="col-5 mt-3">
            <label className="form-label">Product Freshness:</label>
            {/* Radio Buttons for Freshness */}
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="brandNew"
                value="Brand New"
                required
                checked={productFreshness === "Brand New"}
                onChange={handleProductFreshnessChange}
              />
              <label className="form-check-label" htmlFor="brandNew">
                Brand New
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="secondHank"
                value="Second Hank"
                checked={productFreshness === "Second Hank"}
                onChange={handleProductFreshnessChange}
              />
              <label className="form-check-label" htmlFor="secondHank">
                Second Hank
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                name="productFreshness"
                id="refurbished"
                value="Refurbished"
                checked={productFreshness === "Refurbished"}
                onChange={handleProductFreshnessChange}
              />
              <label className="form-check-label" htmlFor="refurbished">
                Refurbished
              </label>
              <div className="invalid-feedback">
                The Product Freshness field must be filled in
              </div>
            </div>
          </div>

          {/* Form Additional Description */}
          <TextArea
            className="mt-3"
            label="Addittional Description"
            name="additionalDescription"
            id="additionalDescription"
            cols={5}
            rows={5}
            errorMessage={errorMessage}
            onChange={handleAdditionalDescriptionChange}
            value={additionalDescription}
          />

          {/* Form Product Price */}
          <Input
            className="mb-4 mt-3"
            label="Product Price"
            type="number"
            id="productPrice"
            placeholder="$1"
            required
            value={productPrice}
            onChange={handleProductPriceChange}
            errorMessage={errorMessage}
          />

          {/* Button to Submit the Form */}
          <Button type="submit" id="submitButton" label="Submit" />

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
