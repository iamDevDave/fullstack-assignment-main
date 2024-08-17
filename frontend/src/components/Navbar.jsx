// src/components/Navbar.js
import React from "react";

const Navbar = () => {
  return (
    <nav className="bg-black fixed top-0 left-0 right-0 p-4 z-50">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-white font-bold text-lg">
          Abstract | Help Center
        </div>
        <button className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700">
          Submit a request
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
