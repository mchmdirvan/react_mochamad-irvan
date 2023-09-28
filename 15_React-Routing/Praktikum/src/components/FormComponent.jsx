/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function Input({
  label,

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
            className="w-72 rounded-md py-2 pl-5 text-gray-900  
            ring-1  ring-gray-300 focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 
            transition duration-300 ease-in-out"
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
          <div className="invalid-feedback">{errorMessage}</div>
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
          className="form-control custom-form-control 
          w-56 rounded-md ring-2 ring-blue-500 focus:ring-[0.4rem] 
          focus:ring-offset-0 focus:ring-blue-200 
          transition duration-300 ease-in-out text-blue-500"
          id={id}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
}

function TextArea({
  className,
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
    <div className={className}>
      <label className="form-label">{label}</label>
      <textarea
        className="form-control"
        name={name}
        id={id}
        cols={cols}
        rows={rows}
        required={required}
        onChange={onChange}
        value={value}
      />
      <div className="invalid-feedback">{errorMessage}</div>
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
          className="w-60 rounded-md py-2 text-gray-900  
          ring-1  ring-gray-300 focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 
          transition duration-300 ease-in-out"
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

        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </div>
  );
}

export { Input, File, TextArea, Select };
