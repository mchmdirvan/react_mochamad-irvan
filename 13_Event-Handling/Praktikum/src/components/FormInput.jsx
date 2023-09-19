/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

function FormInput({
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
  error,
  placeholder
}) {
  return (
    <div className={className}>
      <label className="form-label" htmlFor={id}>
        {label}
      </label>
      <input
        className="form-control"
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
      {error ? (
        <div className="invalid-feedback" id={`${id}Error`}>
          {error}
        </div>
      ) : null}
    </div>
  );
}

function SelectInput({ label, id, className, name, required }) {
  return (
    <div className={className}>
      <label className="form-label">{label}</label>

      <select className="form-select" id={id} name={name} required={required}>
        <option value="" disabled="" selected=" ">
          Choose
        </option>
        <option value="option2">Option 2</option>
        <option value="option3">Option 3</option>
      </select>
    </div>
  );
}

function FileInput({ className, label, type, required, id }) {
  return (
    <div className={className}>
      <label>{label}</label>
      <input
        type={type}
        required={required}
        className="form-control custom-form-control"
        id={id}
      />
    </div>
  );
}

function TextAreaInput ({className,label,name,id,cols,rows,required}){
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
      />

    </div>
  )
}



export { FormInput, SelectInput, FileInput, TextAreaInput};
