/* eslint-disable no-unused-vars */
import React from "react";

function Table() {
  return (
    <section className="row justify-content-center mt-5 table-section">
      <div className="col-10">
        {/* Table */}
        <table className=" table table-hover table-bordered text-center">
          <thead className="table-dark">
            <tr>
              <th scope="col">No</th>
              <th scope="col">Product Name</th>
              <th scope="col">Product Category</th>
              <th scope="col">Image of Product</th>
              <th scope="col">Product Freshness</th>
              <th scope="col">Additional Description</th>
              <th scope="col">Product Price</th>
            </tr>
          </thead>
          {/* Table Body Goes Here */}
        </table>

        {/* Buttons (Delete and Search) */}
        <div className="d-flex flex-row gap-2">
          <button
            type="submit"
            className="btn btn-danger col-1"
            id="deleteButton"
          >
            Delete
          </button>
          <button
            className="btn btn-outline-success"
            type="submit"
            id="searchButton"
          >
            Search
          </button>
        </div>
      </div>
    </section>
  );
}

export default Table;
