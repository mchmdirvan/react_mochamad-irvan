/* eslint-disable no-unused-vars */
import React from "react";

function MainContent() {
  return (
    <main className="body">
      {/* Title and Description */}
      <img
        src="assets/images/bootstrap-logo.svg"
        alt="Bootstrap Logo"
        className="mx-auto d-block bootstrap-logo"
      />
      <h2>Create Product</h2>
      <p>
        Below is an example form built entirely with Bootstrap’s form controls.
        Each required form group has a validation state that can be triggered by
        attempting to submit the form without completing it.
      </p>
      {/* Detail Product Form */}
      <h4 className="mt-5">Detail Product</h4>
      <form className="needs-validation" noValidate="">
        {/* Form Product Name */}
        <div className="col-6 mt-3">
          <label htmlFor="productName" className="form-label">
            Product Name :
          </label>
          <input
            className="form-control"
            type="text"
            name="productName"
            id="productName"
            required=""
            minLength={6}
            maxLength={50}
            autoFocus=""
          />
          <div className="invalid-feedback" id="productNameError" />
        </div>
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
          >
            <option value="" disabled="" selected="">
              Choose...
            </option>
            <option value="dummy">dummy</option>
          </select>
          <div className="invalid-feedback">
            The Product Category field must be filled in
          </div>
        </div>
        {/* Form Image of Product */}
        <div className="col-4 mt-3">
          <label htmlFor="imageOfProduct" className="form-label">
            Image of Product
          </label>
          <input
            type="file"
            required=""
            className="form-control custom-form-control"
            id="imageOfProduct"
          />
          <div className="invalid-feedback">
            The Image of Product field must be filled in
          </div>
        </div>
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
      </form>
    </main>
  );
}

export default MainContent;
