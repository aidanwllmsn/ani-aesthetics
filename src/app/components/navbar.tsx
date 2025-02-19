"use client";

import { useState } from "react";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  let timeoutId: NodeJS.Timeout;

  return (
    <nav className="bg-background pt-2 lg:pt-5 w-full z-50 relative">
      <div className="w-full flex flex-wrap items-center justify-between md:px-12 lg:px-16 xl:px-28">
        {/* Logo */}
        <Link href="/" className="flex items-center rtl:space-x-reverse ml-5">
          <span className="self-center text-3xl xl:text-4xl whitespace-nowrap text-primary font-ortica">
            Ani Aesthetics
          </span>
        </Link>

        <div className="flex lg:order-2 space-x-3 lg:space-x-4 rtl:space-x-reverse ml-auto mr-5">
          {/* Cart and Profile Icons */}
          <button className="p-2 rounded-lg text-primary transition-all duration-300 hover:bg-orange-100">
            <ShoppingCart size={24} />
          </button>
          <button className="p-2 rounded-lg text-primary transition-all duration-300 hover:bg-orange-100">
            <User size={24} />
          </button>
          {/* Shop now button */}
          <button
            type="button"
            className="hidden lg:block font-ortica text-white bg-primary shadow-md transition-all duration-300 hover:bg-white hover:text-primary font-medium rounded-full text-lg px-4 py-2 text-center"
          >
            Shop now
          </button>
          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-primary rounded-lg lg:hidden transition-all duration-300 hover:bg-orange-100"
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
          className={`items-center justify-between w-full lg:absolute lg:left-1/2 lg:transform lg:-translate-x-1/2 lg:flex lg:w-auto lg:order-1 ${
            isOpen ? "block" : "hidden"
          }`}
          id="navbar-sticky"
        >
          <ul className="flex flex-col p-4 lg:p-0 font-medium lg:space-x-8 rtl:space-x-reverse lg:flex-row lg:mt-0 font-ortica">
            <li>
              <Link
                href="/"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline lg:p-0 "
                aria-current="page"
              >
                Home
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => {
                timeoutId = setTimeout(() => setIsShopDropdownOpen(true), 100);
              }}
              onMouseLeave={() => {
                clearTimeout(timeoutId);
                setIsShopDropdownOpen(false);
              }}
            >
              <button className="flex items-center py-2 px-3 lg:p-0 justify-between w-full text-primary hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline">
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
              {isShopDropdownOpen && (
                <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full lg:w-44 ">
                  <ul className="py-2 text-sm text-primary ">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Cleansers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Toners
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Serum
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Acne Med
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Moisturizer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        SPF
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Supplements
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/about"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline lg:p-0 "
              >
                About
              </Link>
            </li>
            <li
              className="relative"
              onMouseEnter={() => {
                timeoutId = setTimeout(
                  () => setIsServiceDropdownOpen(true),
                  100
                );
              }}
              onMouseLeave={() => {
                clearTimeout(timeoutId);
                setIsServiceDropdownOpen(false);
              }}
            >
              <Link
                href="/services"
                className="flex items-center py-2 px-3 lg:p-0 justify-between w-full text-primary hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline"
              >
                Services
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
              </Link>
              {isServiceDropdownOpen && (
                <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full lg:w-44 ">
                  <ul className="py-2 text-sm text-primary ">
                    <li>
                      <Link
                        href="/services/new-clients"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        New Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Online Skin Evaluation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/bootcamp"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Acne Bootcamp Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Client Portal
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/contact"
                className="block py-2 px-3 text-primary rounded-sm hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline lg:p-0 "
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
