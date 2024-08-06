'use client'
'use client'
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <nav className="bg-[#190D1F]  w-full    border-gray-200 dark:border-gray-600">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a
            href="https://flowbite.com/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <h1 className="heading text-white text-2xl">Sachhsoft</h1>
          </a>
          <div className="flex md:order-2 space-x-3 rtl:space-x-reverse">
            <button
              type="button"
              className="text-white small bg-[#8d49e4] font-medium rounded-3xl text-md px-5 py-2 text-center hidden md:inline-block"
            >
              Let's talk
              <img
                src="/buttonarrow.svg"
                alt="arrow"
                className="w-5 h-5 inline-block ml-2"
              />
            </button>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-50 rounded-lg md:hidden "
              aria-controls="navbar-sticky"
              aria-expanded={isOpen}
              onClick={handleToggle}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <svg
                  className="w-5 h-5"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
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
                    strokeWidth="2"
                    d="M1 1h15M1 7h15M1 13h15"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
              isOpen ? "block" : "hidden"
            }`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col gap-2 lg:gap-8 pt-4  md:p-0 mt-4 font-medium small  rounded-lg md:space-x-8 md:flex-row md:mt-0 md:border-0">
              <li>
                <a
                  href="#"
                  className="block py-2 pl-1 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-1 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-1 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Blogs
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block py-2 pl-1 text-gray-50 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                >
                  Careers
                </a>
              </li>
              <li className="block md:hidden">
                <button
                  type="button"
                  className="text-white bg-[#8d49e4] font-medium rounded-3xl text-md px-5 py-2 text-center w-full mt-2"
                >
                  Let's talk
                  <img
                    src="/buttonarrow.svg"
                    alt="arrow"
                    className="w-5 h-5 inline-block ml-2"
                  />
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
