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
        <div className="invalid-feedback">{errorMessage}</div>
      </div>
    </>
  );
}

function File({
  className,
  label,
  type,
  required,
  id,
  errorMessage,
  onChange,
  value,
}) {
  return (
    <>
      <div className={className}>
        <label>{label}</label>
        <input
          type={type}
          required={required}
          className="form-control custom-form-control"
          id={id}
          onChange={onChange}
          value={value}
        />
      </div>
      <div className="invalid-feedback">{errorMessage}</div>
    </>
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
  className,
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
    <div className={className}>
      <label className="form-label">{label}</label>
      <select
        className="form-select"
        name={name}
        id={id}
        required={required}
        value={value}
        onChange={onChange}
      >
        <option hidden>
          {placeholder}
        </option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>

      <div className="invalid-feedback">{errorMessage}</div>
    </div>
  );
}

export { Input, File, TextArea, Select };
