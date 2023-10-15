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
  ariaLabel,
  onChange,
  value
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
              error
                ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
                : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
            } rounded-md py-2 pl-2 text-gray-900 ring-1
            transition duration-300 ease-in-out"`}
            type={type}
            name={name}
            id={id}
            placeholder={placeholder}
            {...(register ? register(name, {valueAsNumber: type === "number" ? true : false}) : {})}
            aria-label={ariaLabel}
            onChange={onChange}
            value={value}
          />
          {error && <div className=" text-red-500">{error}</div>}
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
 * error : string
 * register: function
 * name : string
 * }}  props
 */
function File({ label, type, id, error, register, name, ariaLabel }) {
  return (
    <div className="mt-5">
      <label className="">{label}</label>
      <div className="mt-3">
        <input
          type={type}
          name={name}
          className={`${
            error
              ? "focus:ring-[0.4rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.4rem] focus:ring-offset-0 focus:ring-blue-200 ring-blue-500 "
          } w-56 rounded-md ring-2 text-blue-500
          transition duration-300 ease-in-out"`}
          id={id}
          {...(register ? register(name) : {})}
          aria-label={ariaLabel}
        />
      </div>
      {error && <div className=" text-red-500">{error}</div>}
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
 * error : string
 * register: function
 * }}  props
 */
function TextArea({ label, name, id, cols, rows, error, register, ariaLabel }) {
  return (
    <div className="mt-5">
      <label className="form-label">{label}</label>
      <div className="mt-3">
        <textarea
          className={`${
            error
              ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
          }  w-full rounded-md py-2 pl-5 text-gray-900 ring-1
          transition duration-300 ease-in-out"`}
          name={name}
          id={id}
          cols={cols}
          rows={rows}
          {...(register ? register(name) : {})}
          aria-label={ariaLabel}
        />
        {error && <div className=" text-red-500">{error}</div>}
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
 * options : string[]
 * placeholder : string
 * error : string
 * register: function
 * }}  props
 */
function Select({
  label,
  name,
  id,
  options = [],
  placeholder,
  error,
  register,
  ariaLabel,
}) {
  return (
    <div className="mt-5">
      <label className="form-label">{label}</label>
      <div className="mt-2">
        <select
          aria-label={ariaLabel}
          className={`${
            error
              ? "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-red-200 ring-red-500 "
              : "focus:ring-[0.3rem] focus:ring-offset-0 focus:ring-blue-200 ring-gray-300 "
          }  w-60 rounded-md py-2 pl-2 text-gray-900 ring-1
          transition duration-300 ease-in-out"`}
          name={name}
          id={id}
          {...(register ? register(name) : {})}
        >
          <option hidden value="">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        {error && <div className=" text-red-500">{error}</div>}
      </div>
    </div>
  );
}

/**
 * Radio Group component.
 *
 * @param {{
 *   label: string
 *   name: string
 *   id: string
 *   error: string
 *   checked: boolean
 *   register: function
 *   ariaLabel: string
 * }} props
 *
 */
function RadioGroup({
  label,
  name,
  defaulValue,
  error,
  register,
  options,
  ariaLabel,
}) {
  return (
    <div className="flex flex-col gap-x-3" aria-label={ariaLabel}>
      <label className="text-black dark:text-white mb-3">{label}</label>
      {options.map((option) => (
        <div key={option} className="flex gap-3">
          <input
            type="radio"
            value={option}
            id={option}
            {...(register ? register(name) : {})}
            defaultValue={defaulValue}
          />
          <label className="text-black dark:text-white" htmlFor={option}>
            {option}
          </label>
        </div>
      ))}
      {error && <div className=" text-red-500">{error}</div>}
    </div>
  );
}

export { Input, File, TextArea, Select, RadioGroup };
