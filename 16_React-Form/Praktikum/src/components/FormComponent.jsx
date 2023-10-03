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
 * minLength : number
 * maxLength : number
 * value : string
 * onChange : function
 * errorMessage : string
 * placeholder : string
 * }}  props
 */

function Input({
  label,
  className,
  type,
  name,
  id,
  minLength,
  maxLength,
  value,
  onChange,
  errorMessage,
  placeholder,
}) {
  return (
    <>
      <div className=" mt-5 col-span-full">
        <label className="form-label block leading-6" htmlFor={id}>
          {label}
        </label>
        <div className="mt-2">
          <input
            className={`${className} ${
              errorMessage
                ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
                : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
            } rounded-md py-2 pl-2 text-gray-900 ring-1
            transition duration-300 ease-in-out"`}
            type={type}
            name={name}
            id={id}
            minLength={minLength}
            maxLength={maxLength}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
          />
          <div className=" text-red-500">{errorMessage}</div>
        </div>
      </div>
    </>
  );
}

/**
 * Input component file
 *
 * @param {{
 * label : string
 * type : string
 * id : string
 * errorMessage : string
 * value : string
 * onChange : function
 * }}  props
 */
function File({ label, type, id, errorMessage, onChange, value }) {
  return (
    <div className="mt-5">
      <label className="">{label}</label>
      <div className="mt-3">
        <input
          type={type}
          className={`${
            errorMessage
              ? "focus:ring-[0.4rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.4rem] focus:ring-offset-0 focus:ring-blue-200 ring-blue-500 "
          } w-56 rounded-md ring-2 text-blue-500
          transition duration-300 ease-in-out"`}
          id={id}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className=" text-red-500">{errorMessage}</div>
    </div>
  );
}

/**
 * Textarea Component
 *
 * @param {{
 * label : string
 * name : string
 * id : string
 * cols : number
 * rows : number
 * errorMessage : string
 * onChange : function
 * value : string
 * }}  props
 */
function TextArea({
  label,
  name,
  id,
  cols,
  rows,
  errorMessage,
  onChange,
  value,
}) {
  return (
    <div className="mt-5">
      <label className="form-label">{label}</label>
      <div className="mt-3">
        <textarea
          className={`${
            errorMessage
              ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
          }  w-full rounded-md py-2 pl-5 text-gray-900 ring-1
          transition duration-300 ease-in-out"`}
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          onChange={onChange}
          value={value}
        />
        <div className=" text-red-500">{errorMessage}</div>
      </div>
    </div>
  );
}

/**
 * Select component
 *
 * @param {{
 * label : string
 * name : string
 * id : string
 * value : string
 * onChange : function
 * options : string[]
 * placeholder : string
 * errorMessage : string
 * }}  props
 */
function Select({
  label,
  name,
  id,
  value,
  onChange,
  options = [],
  placeholder,
  errorMessage,
}) {
  return (
    <div className="mt-5">
      <label className="form-label">{label}</label>
      <div className="mt-2">
        <select
          className={`${
            errorMessage
              ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
          }  w-60 rounded-md py-2 pl-2 text-gray-900 ring-1
          transition duration-300 ease-in-out"`}
          name={name}
          id={id}
          value={value}
          onChange={onChange}
        >
          <option hidden value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>

        <div className=" text-red-500">{errorMessage}</div>
      </div>
    </div>
  );
}

/**
 * Radio Input component.
 *
 * @param {{
 *   label: string
 *   name: string
 *   id: string
 *   value: string
 *   onChange: function
 *   errorMessage: string
 *   checked: boolean
 * }} props
 *
 *
 */
function RadioInput({
  label,
  name,
  id,
  value,
  onChange,
  errorMessage,
  checked,
}) {
  return (
    <div className="flex items-center gap-x-3">
      <input
        type="radio"
        id={id}
        name={name}
        className="h-4 w-4 border-gray-300 text-indigo-600 focus:ring-indigo-600"
        value={value}
        checked={checked}
        onChange={onChange}
      />
      <label className="block text-sm leading-6 text-gray-900">{label}</label>
      <div className=" text-red-500">{errorMessage}</div>
    </div>
  );
}

export { Input, File, TextArea, Select, RadioInput };
