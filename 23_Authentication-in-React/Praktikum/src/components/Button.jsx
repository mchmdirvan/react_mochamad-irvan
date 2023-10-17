/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Button
 * @param {{
 * type : string
 * id : string
 * label : string
 * ariaLabel: string
 * }}
 */

function Button({ type, id, label, ariaLabel, className }) {
  return (
    <div className="mt-5">
      <button
      className={`${className} bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-700`}
        type={type}
        id={id}
        aria-label={ariaLabel}
      >
        {label}
      </button>
    </div>
  );
}

export default Button;
