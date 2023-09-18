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
        required={required}
        minLength={minLength}
        maxLength={maxLength}
        autoFocus={autoFocus}
        value={value}
        onChange={onChange}
      />
      {error ? (
        <div className="invalid-feedback" id={`${id}Error`}>
          {error}
        </div>
      ) : null}
    </div>
  );
}

export { FormInput };
