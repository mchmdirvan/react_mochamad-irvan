/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Input({
  label,
  className,
  type,
  name,
  id,
  required,
  minLength,
  maxLength,
  autoFocus,
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
            } rounded-md py-2 pl-5 text-gray-900 ring-1
            transition duration-300 ease-in-out"`}
            type={type}
            name={name}
            id={id}
            minLength={minLength}
            maxLength={maxLength}
            required={required}
            autoFocus={autoFocus}
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

function File({ label, type, required, id, errorMessage, onChange, value }) {
  return (
    <div className="mt-5">
      <label className="">{label}</label>
      <div className="mt-3">
        <input
          type={type}
          required={required}
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

function TextArea({
  label,
  name,
  id,
  cols,
  rows,
  required,
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
          required={required}
          onChange={onChange}
          value={value}
        />
        <div className=" text-red-500">{errorMessage}</div>
      </div>
    </div>
  );
}

function Select({
  label,
  name,
  id,
  required,
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
          }  w-60 rounded-md py-2 pl-5 text-gray-900 ring-1
          transition duration-300 ease-in-out"`}
          name={name}
          id={id}
          required={required}
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

export { Input, File, TextArea, Select };
