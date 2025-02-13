'use client'
import React from 'react';
import Link from 'next/link'; // Utiliser next/link au lieu de react-router-dom

const Footer = () => (
  <footer className="bg-black text-gray-300 py-8">
    <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center space-y-8 md:space-y-0">
      {/* Logo ou nom du site */}
      <div className="text-center md:text-left">
        <h3 className="text-xl font-semibold text-gold-rose">
          NancyByNight
        </h3>
        <p className="text-sm mt-2">
          © {new Date().getFullYear()} Tous droits réservés.
        </p>
      </div>

      {/* Liens */}
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center md:items-start">
        <Link
          href="/mentions-legales"
          className="text-sm hover:text-white transition"
        >
          Mentions légales
        </Link>
        <Link
          href="/conditions-generales"
          className="text-sm hover:text-white transition"
        >
          Conditions générales de vente
        </Link>
      </div>
    </div>
  </footer>
);

export default Footer;
