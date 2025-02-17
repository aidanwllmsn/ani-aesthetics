"use client";

import { useState } from "react";
import { ShoppingCart, User } from "lucide-react"; // Importing icons

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  return (
    <nav className="bg-background p-5 fixed w-full z-20 top-0 start-0 ">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <span className="self-center text-4xl whitespace-nowrap text-primary font-ortica">
            Ani Aesthetics
          </span>
        </a>
        <div className="flex md:order-2 space-x-3 md:space-x-4 rtl:space-x-reverse">
          {/* Cart and Profile Icons */}
          <button className="p-2 rounded-lg text-primary hover:bg-gray-100">
            <ShoppingCart size={24} />
          </button>
          <button className="p-2 rounded-lg text-primary hover:bg-gray-100">
            <User size={24} />
          </button>
          <button
            type="button"
            className="font-ortica text-white bg-primary hover:bg-btnhover font-medium rounded-xl text-lg px-4 py-2 text-center"
          >
            Shop now
          </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-gray-100"
            aria-controls="navbar-sticky"
            aria-expanded={isOpen}
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
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
        </div>
        <div
          className={`items-center justify-between w-full md:flex md:w-auto md:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 font-ortica">
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:underline md:p-0 "
                aria-current="page"
              >
                Home
              </a>
            </li>
            <li className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center justify-between w-full  text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:underline"
              >
                Shop
                <svg
                  className="w-2.5 h-2.5 ml-2"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M1 1l4 4 4-4"
                  />
                </svg>
              </button>
              {isDropdownOpen && (
                <div className="absolute z-10 bg-white divide-y divide-gray-100 rounded-lg shadow-md w-44 ">
                  <ul className="py-2 text-sm text-gray-700 ">
                    <li>
                      <a
                        href="#"
                        className="block px-4 py-2 hover:bg-gray-100 "
                      >
                        Dashboard
                      </a>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:underline md:p-0 "
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:underline md:p-0 "
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block py-2 px-3 text-primary rounded-sm md:hover:underline md:p-0 "
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
