/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

/**
 * Input component for forms
 *
 * @param {{
 * label : string
 * className : string
 * type : string
 * name : string
 * id : string
 * error : string
 * placeholder : string
 * register: function
 * }}  props
 */
function Input({
  label,
  className,
  type,
  name,
  id,
  error,
  placeholder,
  register,
}) {
  return (
    <>
      <div className=" mt-5">
        <label className="form-label leading-6" htmlFor={id}>
          {label}
        </label>
        <div className="mt-2">
          <input
            className={`${className} ${
              error
                ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
                : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
            } rounded-md py-2  pl-2 text-gray-900 ring-1
           transition duration-300 ease-in-out"`}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            {...(register ? register(name) : {})}
          />
          {error && <div className=" text-red-500">{error}</div>}
        </div>
      </div>
    </>
  );
}

/**
 * TextArea Component
 *
 * @param {{
 * label : string
 * name : string
 * id : string
 * cols : number
 * rows : number
 * error : string
 * register: function
 * }}  props
 */
function TextArea({ label, className, name, id, error, register, cols, rows }) {
  return (
    <>
      <div className="mt-3">
        <label className="">{label}</label>
        <textarea
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          className={`${
            error
              ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
          }  w-full rounded-md py-2 pl-5 mt-3 text-gray-900 ring-1
          transition duration-300 ease-in-out"`}
          {...(register ? register(name) : {})}
          
        ></textarea>
        {error && <div className=" text-red-500">{error}</div>}
      </div>
    </>
  );
}

export { Input, TextArea };
