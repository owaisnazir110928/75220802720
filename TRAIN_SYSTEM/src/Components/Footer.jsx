import React from "react";

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto px-4">
        <p className="text-center">
          &copy; {new Date().getFullYear()} John Doe Railways. All rights
          reserved.
        </p>
      </div>
    </footer>
  );
}

export default Footer;
