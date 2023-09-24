/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";

function Table({ headers = [], datas = [], onEditClick, onDeleteClick }) {
  return (
    <section className="row justify-content-center mt-5 table-section">
      <div className="col-10">
        <table className=" table table-hover table-bordered text-center col-10">
          <thead className="table-dark">
            <tr>
              {headers.map((headers, index) => (
                <th key={index} scope="col">
                  {headers}
                </th>
              ))}
              <th></th>
            </tr>
          </thead>
          <tbody>
            {datas.map((data) => (
              <tr key={data.id}>
                <td>{data.id}</td>
                <td>{data.productName}</td>
                <td>{data.productCategory}</td>
                <td>{data.productFreshness}</td>
                <td>{data.productPrice}</td>
                <td className="flex gap-2">
                  <BsFillPencilFill onClick={() => onEditClick(data)} />
                  <BsFillTrash2Fill onClick={() => onDeleteClick(data)} />
                </td>
              </tr>
            ))}
          </tbody>
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
