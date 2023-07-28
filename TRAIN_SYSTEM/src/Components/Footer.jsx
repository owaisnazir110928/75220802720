import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";
import { faFileAlt, faHandshake } from "@fortawesome/free-solid-svg-icons";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center text-sm">
          &copy; {new Date().getFullYear()} John Doe Railways. All rights
          reserved.
        </p>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 mr-4 transition duration-300"
          >
            <FontAwesomeIcon icon={faFileAlt} className="mr-2" />
            Privacy Policy
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-gray-200 transition duration-300"
          >
            <FontAwesomeIcon icon={faHandshake} className="mr-2" />
            Terms of Service
          </a>
        </div>
        <div className="flex justify-center mt-4">
          <a
            href="#"
            className="text-gray-400 hover:text-blue-400 mr-4 transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebook} className="mr-2" />
            Facebook
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-blue-300 mr-4 transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} className="mr-2" />
            Twitter
          </a>
          <a
            href="#"
            className="text-gray-400 hover:text-pink-400 transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} className="mr-2" />
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
