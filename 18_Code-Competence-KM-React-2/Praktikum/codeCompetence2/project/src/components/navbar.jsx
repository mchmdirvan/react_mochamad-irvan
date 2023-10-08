/* eslint-disable no-unused-vars */
import React from "react";

export default function navbar() {
  return (
    <>
      <header>
        <p className="m-0 text-center p-2 bg-[#838671] text-[#fdfbef]">
          Order Rp.50.000,- worth of food and enjoy free home delivery!
        </p>
      </header>

      <nav className="bg-[#fdfbef;] py-2">
        <div className="flex flex-wrap items-center justify-between mx-auto p-2  pr-10">
          <a href="#" className="flex items-start">
            <span className="self-center font-[Caprasimo] text-3xl ps-5">
              SALADWORKS
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
            <ul className="font-medium flex flex-col p-4 md:flex-row md:space-x-8">
              
              <li>
                <a href="#" className=" text-black hover:text-[#838671]">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-[#838671]">
                  Menu
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-[#838671]">
                  Catering
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-[#838671]">
                  Offer
                </a>
              </li>
              <li>
                <a href="#" className="text-black  hover:text-[#838671]">
                  About
                </a>
              </li>
              
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
