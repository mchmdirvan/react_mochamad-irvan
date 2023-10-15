/* eslint-disable no-undef */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import { BsFillPencilFill, BsFillTrash2Fill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import React from "react";

/**
 * Table component for displaying data
 *
 * @param {{
 *   headers: string[],
 *   datas: Object[],
 *   onEditClick: function,
 *   onDeleteClick: function
 * }} props
 *
 */

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
            <tr className="hover" key={data.id}>
              <td
                className="hover:shadow-lg hover:shadow-blue-500/50"
                onClick={() => navigate(`/create-product/${data.id}`)}
              >
                {data.id}
              </td>
              <td>{data.productName}</td>
              <td>{data.productCategory}</td>
              <td><img src={data.imageOfProduct} alt="" className="w-10" /></td>
              <td>{data.productFreshness}</td>
              <td>{data.additionalDescription}</td>
              <td>{data.productPrice}</td>
              <td className="flex gap-2">
                <BsFillPencilFill
                  className="hover:border-blue-400 hover:border-2"
                  onClick={() => onEditClick(data)}
                />
                <BsFillTrash2Fill
                  className="hover:border-blue-400 hover:border-2"
                  onClick={() => onDeleteClick(data)}
                />
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
