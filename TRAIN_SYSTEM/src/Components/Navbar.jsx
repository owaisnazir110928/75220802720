import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-gray-800 py-6">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex justify-between items-center">
          <Link
            to="/"
            className="text-white text-xl font-bold flex items-center"
          >
            <FontAwesomeIcon icon={faTrain} className="mr-2" />
            Railway System
          </Link>

          <div className="hidden lg:flex space-x-4">
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Trains
            </Link>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </div>

          <div className="lg:hidden">
            <button
              onClick={handleMobileMenuToggle}
              className="text-white focus:outline-none"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                {isMobileMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {isMobileMenuOpen && (
          <div className="mt-4 lg:hidden">
            <Link
              to="/"
              className="block text-white hover:text-gray-300 transition duration-300 mb-2"
            >
              Trains
            </Link>
            <Link
              to="/"
              className="block text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
