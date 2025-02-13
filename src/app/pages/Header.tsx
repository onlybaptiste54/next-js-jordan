"use client";
import React, { useState } from 'react';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false); // Gérer l'état du menu burger

  const toggleMenu = () => {
    setMenuOpen(!menuOpen); // Toggle de l'état du menu
  };

  return (
    <header className="fixed top-0 left-0 w-full bg-black text-white z-50">
      <div className="container mx-auto flex justify-between items-center ">
        {/* Logo NancyBynight à gauche */}
        <a 
        href="#home" className="flex items-center space-x-2">
          <div className="flex items-center space-x-2">
            <div className="text-2xl font-bold hover:text-gold-rose mt-4">
              <h1 className="text letter-spacing-2 ">
                <span className="letter letter-1">N</span>
                <span className="letter letter-1">A</span>
                <span className="letter letter-3">N</span>
                <span className="letter letter-4">C</span>
                <span className="letter letter-5">Y</span>
                <span className="letter letter-5">.</span>
                <span className="letter letter-4">B</span>
                <span className="letter letter-5">Y</span>
                <span className="letter letter-5">.</span>
                <span className="letter letter-1">N</span>
                <span className="letter letter-2">I</span>
                <span className="letter letter-3">G</span>
                <span className="letter letter-4">H</span>
                <span className="letter letter-5">T</span>
              </h1>
            </div>
          </div>
        </a>

        {/* Menu burger pour les petits écrans */}
        <div className="mt-4">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="h-6 w-6"
            >
              {menuOpen ? (
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
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Menu classique pour les grands écrans */}
      
      </div>

      {/* Menu burger qui s'affiche sur mobile */}
      {menuOpen && (
        <div className=" bg-black text-white space-y-4 py-4 px-6 text-center">
          <a
            href="#contact"
            className="block py-2 px-4 rounded-full hover:border-silver hover:text-gold-rose transition-all duration-300"
            onClick={toggleMenu} // Ferme le menu après le clic
          >
            Contact
          </a>
          <a
            href="#location"
            className="block py-2 px-4 rounded-full hover:border-silver hover:text-gold-rose transition-all duration-300"
            onClick={toggleMenu} // Ferme le menu après le clic
          >
            Location
          </a>
          <a
            href="#events"
            className="block py-2 px-4 rounded-full hover:border-silver hover:text-gold-rose transition-all duration-300"
            onClick={toggleMenu} // Ferme le menu après le clic
          >
            Nos Événements
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
