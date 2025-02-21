"use client";

import { useState, useEffect } from "react";
import { ShoppingCart, User } from "lucide-react";
import Link from "next/link";

const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isShopDropdownOpen, setIsShopDropdownOpen] = useState(false);
  const [isServiceDropdownOpen, setIsServiceDropdownOpen] = useState(false);
  const [active, setActive] = useState("home");
  let timeoutId: NodeJS.Timeout;

  // Sync state with the current URL on component mount
  useEffect(() => {
    const currentPath = window.location.pathname;
    if (currentPath === "/about") {
      setActive("about");
    } else if (currentPath === "/contact") {
      setActive("contact");
    } else {
      setActive("home");
    }
  }, []);

  return (
    <nav className="bg-background pt-2 lg:pt-5 w-full z-50 relative">
      <div className="w-full flex flex-wrap items-center justify-between md:px-12 lg:px-16 xl:px-28">
        {/* Logo */}
        <Link
          href="/"
          className="flex items-center rtl:space-x-reverse ml-5"
          onClick={() => setActive("home")}
        >
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
            onClick={() => setActive("shop")}
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
                className={`block py-2 px-3 text-primary rounded-sm hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline lg:p-0 ${
                  active === "home" ? "underline" : ""
                }`}
                onClick={() => setActive("home")}
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
              <Link
                href="/shop"
                className={`flex items-center py-2 px-3 lg:p-0 justify-between w-full text-primary hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline ${
                  active === "shop" ? "underline" : ""
                }`}
                onClick={() => setActive("shop")}
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
              </Link>
              {isShopDropdownOpen && (
                <div className="absolute z-50 bg-white divide-y divide-gray-100 rounded-lg shadow-lg w-full lg:w-44 ">
                  <ul className="py-2 text-sm text-primary ">
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
                      >
                        Cleansers
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
                      >
                        Toners
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
                      >
                        Serum
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
                      >
                        Acne Med
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
                      >
                        Moisturizer
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
                      >
                        SPF
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                        onClick={() => setActive("shop")}
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
                className={`block py-2 px-3 text-primary rounded-sm hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline lg:p-0 ${
                  active === "about" ? "underline" : ""
                }`}
                onClick={() => setActive("about")}
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
                className={`flex items-center py-2 px-3 lg:p-0 justify-between w-full text-primary hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline ${
                  active === "services" ? "underline" : ""
                }`}
                onClick={() => setActive("services")}
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
                        onClick={() => setActive("services")}
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        New Clients
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        onClick={() => setActive("services")}
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Online Skin Evaluation
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/services/bootcamp"
                        onClick={() => setActive("services")}
                        className="block px-4 py-2 transition-all duration-300 hover:bg-gray-100 "
                      >
                        Acne Bootcamp Program
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="#"
                        onClick={() => setActive("services")}
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
                onClick={() => setActive("contact")}
                className={`block py-2 px-3 text-primary rounded-sm hover:bg-orange-50 lg:hover:bg-transparent lg:hover:underline lg:p-0 ${
                  active === "contact" ? "underline" : ""
                }`}
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
