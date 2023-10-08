/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Button
 * @param {{ 
 * type : button
 * id : string
 * label : string
 * onClick : function 
 * }}
 */

function Button({ type, id, label, onClick, className }) {
  return (
    <div className="mt-5">
      <button
      className={`${className} rounded-lg py-2`}
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
