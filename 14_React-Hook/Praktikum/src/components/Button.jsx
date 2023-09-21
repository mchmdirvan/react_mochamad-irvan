/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Button({ type, id, label, onClick }) {
  return (
    <div className="d-flex justify-content-center my-3">
      <button
        className="btn btn-primary col-11"
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
