/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Button({ type, id, label, onClick }) {
  return (
    <div className="mt-5">
      <button
        className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700"
        type={type}
        id={id}
        onClick={onClick}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
