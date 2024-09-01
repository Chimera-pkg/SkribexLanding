import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/images/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsMobileMenuOpen(false);
      }
    };

    if (isMobileMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    // <nav className="px-10 py-5 md:px-24 md:py-10 flex justify-between items-center bg-[#0E0C15] text-white">
    //   <div className="">
    //     <img src={logo} alt="logo" />
    //   </div>
    //   <div className="md:hidden">
    //     <button
    //       onClick={toggleMobileMenu}
    //       className="text-white focus:outline-none"
    //     >
    //       <svg
    //         className="w-6 h-6"
    //         fill="none"
    //         stroke="currentColor"
    //         viewBox="0 0 24 24"
    //         xmlns="http://www.w3.org/2000/svg"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           strokeWidth="2"
    //           d="M4 6h16M4 12h16m-7 6h7"
    //         ></path>
    //       </svg>
    //     </button>
    //   </div>
    //   <div className="hidden md:flex gap-5">
    //     <Link
    //       to="/"
    //       className={
    //         location.pathname === "/" ? "text-white" : "text-[#D6D6D64D]"
    //       }
    //     >
    //       home
    //     </Link>
    //     {/* <p className="text-[#D6D6D64D]">Resource</p> */}
    //     <div className="relative group">
    //       <Link to="#" className="text-white hover:text-gray-400">
    //         Contact
    //       </Link>
    //       <ul className="absolute left-0 mt-2 w-48 bg-white shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
    //         <li>
    //           <Link
    //             to="/contact/email"
    //             className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
    //           >
    //             Email
    //           </Link>
    //         </li>
    //         <li>
    //           <Link
    //             to="/contact/phone"
    //             className="block px-4 py-2 text-gray-800 hover:bg-gray-200"
    //           >
    //             Phone
    //           </Link>
    //         </li>
    //       </ul>
    //     </div>
    //     <Link
    //       to="/pricing"
    //       className={
    //         location.pathname === "/pricing" ? "text-white" : "text-[#D6D6D64D]"
    //       }
    //     >
    //       Pricing
    //     </Link>
    //   </div>
    //   <div
    //     ref={menuRef}
    //     className={`md:hidden overflow-hidden transition-all duration-300 ${
    //       isMobileMenuOpen ? "max-h-screen" : "max-h-0"
    //     }`}
    //   >
    //     <ul className="mt-4 space-y-2">
    //       <li>
    //         <Link
    //           to="/"
    //           className="block text-white hover:bg-gray-700 px-4 py-2"
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           Home
    //         </Link>
    //       </li>
    //       <li>
    //         <Link
    //           to="/about"
    //           className="block text-white hover:bg-gray-700 px-4 py-2"
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           About
    //         </Link>
    //       </li>
    //       <li className="relative group">
    //         <button
    //           className="block text-white hover:bg-gray-700 px-4 py-2 w-full text-left"
    //           onClick={() => setIsMobileMenuOpen(false)}
    //         >
    //           Contact
    //         </button>
    //         <ul className="pl-4 space-y-2">
    //           <li>
    //             <Link
    //               to="/contact/email"
    //               className="block text-white hover:bg-gray-700 px-4 py-2"
    //               onClick={() => setIsMobileMenuOpen(false)}
    //             >
    //               Email
    //             </Link>
    //           </li>
    //           <li>
    //             <Link
    //               to="/contact/phone"
    //               className="block text-white hover:bg-gray-700 px-4 py-2"
    //               onClick={() => setIsMobileMenuOpen(false)}
    //             >
    //               Phone
    //             </Link>
    //           </li>
    //         </ul>
    //       </li>
    //     </ul>
    //   </div>
    //   <div className="hidden md:block">try now</div>
    // </nav>
    <nav className="bg-[#0E0C15] text-white px-10 py-5 md:px-36 xl:px-80 md:py-10">
      <div className="flex justify-between items-center">
        <Link to="/">
          <img src={logo} alt="logo" />
        </Link>

        <div className="md:hidden">
          <button
            onClick={toggleMobileMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ease-in-out transform ${
                isMobileMenuOpen ? "rotate-180 scale-150" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMobileMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              )}
            </svg>
          </button>
        </div>
        <ul className="hidden md:flex space-x-4">
          <li>
            <Link
              to="/"
              className={
                location.pathname === "/" ? "text-white" : "text-[#D6D6D64D]"
              }
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <div className="flex gap-1">
              <div className="text-[#D6D6D64D] cursor-pointer">Features</div>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#D6D6D64D"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-[#0E0C15] shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <a
                href="#trips"
                className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              >
                Trips
              </a>
              <a
                href="#expense"
                className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              >
                Expense
              </a>
              <a
                href="#client"
                className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              >
                Client
              </a>
              <a
                href="#todo"
                className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              >
                To Do List
              </a>
              <a
                href="#task"
                className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              >
                Task Management
              </a>
            </div>
          </li>
          <li className="relative group">
            <div className="flex gap-1">
              <div className="text-[#D6D6D64D] cursor-pointer">Resources</div>
              <svg
                className="w-6 h-6"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M5.70711 9.71069C5.31658 10.1012 5.31658 10.7344 5.70711 11.1249L10.5993 16.0123C11.3805 16.7927 12.6463 16.7924 13.4271 16.0117L18.3174 11.1213C18.708 10.7308 18.708 10.0976 18.3174 9.70708C17.9269 9.31655 17.2937 9.31655 16.9032 9.70708L12.7176 13.8927C12.3271 14.2833 11.6939 14.2832 11.3034 13.8927L7.12132 9.71069C6.7308 9.32016 6.09763 9.32016 5.70711 9.71069Z"
                    fill="#D6D6D64D"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="absolute left-0 mt-2 w-48 bg-[#0E0C15] shadow-lg rounded-lg py-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <Link
                to="/blogs"
                className="block px-4 py-2 text-white hover:bg-gray-800 cursor-pointer"
              >
                Blogs
              </Link>
            </div>
          </li>
          <li>
            <Link
              to="/pricing"
              className={
                location.pathname === "/pricing"
                  ? "text-white"
                  : "text-[#D6D6D64D]"
              }
            >
              Pricing
            </Link>
          </li>
        </ul>
        <div className="hidden md:block text-white bg-gradient-to-r from-[#2386F4] via-[#3D6EC6] to-[#575598] px-4 py-2 rounded-lg">
          Try Tiktraq now
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        ref={menuRef}
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          isMobileMenuOpen ? "max-h-screen" : "max-h-0"
        }`}
      >
        <ul className="mt-4 space-y-2">
          <li>
            <Link
              to="/"
              className="block text-white hover:bg-gray-700 px-4 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
          </li>
          <li className="relative group">
            <button
              className="block text-white hover:bg-gray-700 px-4 py-2 w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Features
            </button>
            <ul className="pl-4 space-y-2">
              <li>
                <div
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Trips
                </div>
              </li>
              <li>
                <div
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Expense
                </div>
              </li>
              <li>
                <div
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Client
                </div>
              </li>
              <li>
                <div
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  To Do List
                </div>
              </li>
              <li>
                <div
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Task Management
                </div>
              </li>
            </ul>
          </li>
          <li className="relative group">
            <button
              className="block text-white hover:bg-gray-700 px-4 py-2 w-full text-left"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Resources
            </button>
            <ul className="pl-4 space-y-2">
              <li>
                <Link
                  to="/blogs"
                  className="block text-white hover:bg-gray-700 px-4 py-2"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Blogs
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
