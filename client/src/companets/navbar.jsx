import React from "react";
import { Link } from "react-router-dom";
function navbar() {
  return (
    <nav className="fixed top-0 z-50 w-full bg-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <i className="fas fa-file-invoice text-blue-500 text-xl"></i>
          <h1 className="text-lg font-bold text-gray-800 cursor-pointer">
            Logo
          </h1>
        </div>

        <ul className="hidden xl:flex items-center space-x-6 text-gray-700">
          <li className="cursor-pointer hover:text-blue-500 transition">
            Home
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition">
            About
          </li>
          <li className="cursor-pointer hover:text-blue-500 transition">
            Contact
          </li>
        </ul>

        <div className="hidden xl:flex items-center space-x-1">
          <Link
            to="/auth/login"
            className="px-4 py-1.5  rounded-lg cursor-pointer text-gray-700 hover:bg-green-500 hover:text-white hover:shadow-md transition duration-300"
          >
            Giriş yap
          </Link>
          <Link
            to="/auth/register"
            className="cursor-pointer px-4 py-1.5 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition "
          >
            ücretsiz deneyin
          </Link>
        </div>

        <button className="xl:hidden p-2 rounded-md text-gray-500 hover:bg-gray-100 transition">
          <i className="fas fa-bars text-xl"></i>
        </button>
      </div>
    </nav>
  );
}

export default navbar;
