'use client'

import { useState } from "react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="flex justify-between items-center px-5 py-4 bg-gray-900 text-white relative">
      <h1 className="text-xl font-bold text-green-600">Audit System.</h1>

      {/* Hamburger Menu */}
      <button
        className="sm:hidden block text-white"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="Toggle navigation menu"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 7.5h16.5M3.75 12h16.5M3.75 16.5h16.5"
          />
        </svg>
      </button>

      {/* Sidebar Menu */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden z-50`}
      >
        <button
          className="absolute top-4 right-4 text-white"
          onClick={() => setIsMenuOpen(false)}
          aria-label="Close menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <nav className="flex flex-col space-y-6 p-5">
          <a href="#home" className="hover:text-green-500">
            Home
          </a>
          <a href="#services" className="hover:text-green-500">
            Services
          </a>
          <a href="#about" className="hover:text-green-500">
            About
          </a>
          <a href="#news" className="hover:text-green-500">
            Help
          </a>
        </nav>
      </div>

      {/* Desktop Navigation */}
      <nav className="hidden sm:flex space-x-6">
        <a href="#home" className="hover:text-green-500">
          Home
        </a>
        <a href="#services" className="hover:text-green-500">
          Services
        </a>
        <a href="#about" className="hover:text-green-500">
          About
        </a>
        <a href="#news" className="hover:text-green-500">
          Help
        </a>
      </nav>

      <button className="hidden sm:block bg-green-600 text-white px-5 py-2 rounded-lg hover:bg-green-700">
        Get Started
      </button>
    </header>
  );
}
