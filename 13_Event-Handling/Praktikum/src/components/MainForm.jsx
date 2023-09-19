/* eslint-disable no-unused-vars */
import React from "react";
import { useState } from "react";
import { FormInput, FileInput, TextAreaInput } from "./FormComponent";
import Button from "./Button";

function generateRandomNumber() {
  const randomNum = Math.floor(Math.random() * 1000);
  console.log(randomNum);
  return randomNum;
}

function MainContent() {
  const [productName, setProductName] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [randomNumber, setRandomNumber] = useState(null);

  return (
    <main className="body">
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
          value={productName}
          onChange={(event) => setProductName(event.target.value)}
        />

        {/* Form Product Category */}
        <div className="col-5 mt-3">
          <label htmlFor="productCategory" className="form-label">
            Product Category:
          </label>
          <select
            className="form-select"
            name="productCategory"
            id="productCategory"
            required=""
            defaultValue=""
          >
            <option value="" disabled="">
              Choose...
            </option>
            <option value="dummy">dummy</option>
          </select>
          <div className="invalid-feedback">
            The Product Category field must be filled in
          </div>
        </div>
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
        <TextAreaInput
          className="mt-3"
          label="Addittional Description"
          name="additionalDescription"
          id="additionalDescription"
          cols={5}
          rows={5}
          required
        />

        {/* Form Product Price */}
        <FormInput
          className="mb-4 mt-3"
          label="Product Price"
          type="number"
          id="productPrice"
          placeholder="$1"
          required
          value={productPrice}
          onChange={(event) => setProductPrice(event.target.valueAsNumber)}
        />

        {/* Button to Submit the Form */}
        <Button type="submit" id="submitButton" label="Submit" />
        <Button
          type="Button"
          id="generateRandomNumberButton"
          label="Generate Random Number"
          onClick={() => setRandomNumber(generateRandomNumber())}
        />
      </form>
    </main>
  );
}

export default MainContent;
