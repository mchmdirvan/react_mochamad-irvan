/* eslint-disable no-unused-vars */
import React from "react";

function Navbar() {
  return (
    <nav className=" dark:bg-gray-900">
      <div className="flex flex-wrap items-center justify-between mx-auto p-2 shadow-md pr-10">
        <a href="#" className="flex items-start">
          <span className="self-center text-2xl  font-semibold whitespace-nowrap dark:text-white">
            Simple Header
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
            <li>
              <a
                href="#"
                className=" bg-blue-600 text-white px-5 py-2 rounded-md"
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" text-blue-600">
                Features
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                Pricing
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                FAQs
              </a>
            </li>
            <li>
              <a href="#" className="text-blue-600">
                About
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
