/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import React from "react";

function Table({ headers = [], datas = [], onEditClick, onDeleteClick }) {
  const navigate = useNavigate();

  return (
    <div className="overflow-x-auto px-[10rem] mt-10">
      <table className="table">
        <thead className="">
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
            <tr
              className="hover"
              key={data.id}
              onClick={() => navigate(`/create-product/${data.id}`)}
            >
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
      <div className="">
        <button
          type="submit"
          className=" bg-red-400 text-white px-4 py-1 rounded-md m-5"
          id="deleteButton"
        >
          Delete
        </button>
        <button
          className=" bg-green-400 text-white px-4 py-1 rounded-md"
          type="submit"
          id=""
        >
          Search
        </button>
      </div>
    </div>
  );
}

export default Table;
