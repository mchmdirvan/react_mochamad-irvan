/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Button
 * @param {{
 * type : string
 * id : string
 * label : string
 * }}
 */

function Button({ type, id, label }) {
  return (
    <div className="mt-5">
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
        type={type}
        id={id}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
