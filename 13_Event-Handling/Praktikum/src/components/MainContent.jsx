/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import BootstrapLogo from "../assets/bootstrap-logo.svg";
import { FormInput, SelectInput, FileInput } from "../components/FormInput";

function generateRandomNumber() {
  return Math.floor(Math.random() * 1000);
}

function MainContent() {
  const [randomNumber, setRandomNumber] = useState(null);

  return (
    <main className="body">
      {/* Title and Description */}
      <img
        src={BootstrapLogo}
        alt="Bootstrap Logo"
        className="mx-auto d-block bootstrap-logo"
      />

      <h2>Create Product</h2>
      <p>
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>

      <h4 className="mt-5">Detail Product</h4>
      <form className="needs-validation" noValidate="">
        {/* Form Product Name */}
        <FormInput
          className="col-6 mt-3"
          label="Product Name :"
          type="text"
          name="productName"
          id="productName"
          minLength={6}
          maxLength={50}
          required
          autoFocus
        />

        {/* Form Product Category */}
        <SelectInput
          className="col-5 mt-3"
          label="Product Category:"
          name="productCategory"
          id="productCategory"
          required=""
        />

        {/* Form Image of Product */}
        <FileInput
          className="col-4 mt-3"
          label="Image of Product"
          type="file"
          required
          id="imageOfProduct"
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
              defaultValue="Brand New"
              required=""
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
              defaultValue="Second Hank"
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
              defaultValue="Refurbished"
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
        <div className="mt-3">
          <label htmlFor="additionalDescription" className="form-label">
            Additional Description:
          </label>
          <textarea
            className="form-control"
            name="additionalDescription"
            id="additionalDescription"
            cols={5}
            rows={5}
            required=""
            defaultValue={""}
          />
          <div className="invalid-feedback">
            The Additional Description field must be filled in
          </div>
        </div>
        {/* Form Product Price */}
        <div className="mb-4 mt-3">
          <label htmlFor="productPrice" className="form-label">
            Product Price :
          </label>
          <input
            type="number"
            className="form-control"
            id="productPrice"
            placeholder="$1"
            required=""
          />
          <div className="valid-feedback" />
          <div className="invalid-feedback">
            Please enter a valid Product price.
          </div>
        </div>

        {/* Button to Submit the Form */}
        <div className="d-flex justify-content-center">
          <button
            type="submit"
            className="btn btn-primary col-11"
            id="submitButton"
          >
            Submit
          </button>
        </div>
        <div className="d-flex justify-content-center align-content-center">
          <button
            type="button"
            className="btn btn-primary col-5 mt-3"
            id="generateRandomNumberButton"
            onClick={() => setRandomNumber(generateRandomNumber())}
          >
            Generate Random Number
          </button>
        </div>
        {<p>Random Number: {randomNumber}</p>}
      </form>
    </main>
  );
}

export default MainContent;
