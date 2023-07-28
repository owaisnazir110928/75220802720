import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrain } from "@fortawesome/free-solid-svg-icons";

function Navbar() {
  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto px-4 ">
        <Link to="/" className="text-white text-xl font-bold flex items-center">
          <FontAwesomeIcon icon={faTrain} className="mr-2" />
          Railway System
        </Link>
        <ul className="ml-auto flex space-x-4 ">
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              Trains
            </Link>
          </li>
          <li>
            <Link
              to="/"
              className="text-white hover:text-gray-300 transition duration-300"
            >
              About
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
