// src/Components/Navbar.jsx
import React, { useState } from "react";
import { FaFacebook, FaLinkedin, FaYoutube, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <header className="bg-black text-white font-orbitron fixed w-full z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-xl font-bold font-serif">VideoAlchemist</h1>

        {/* Desktop Nav */}
        <nav className="hidden md:flex space-x-6 text-sm tracking-wide">
          <a href="#home" className="hover:underline font-serif">HOME</a>
          <a href="#about" className="hover:underline font-serif">ABOUT</a>
          <a href="#edits" className="hover:underline font-serif">EDITS</a>
          <a href="#testimonials" className="hover:underline font-serif">TESTIMONIALS</a>
          <a href="#contact" className="hover:underline font-serif">CONTACT</a>
        </nav>

        {/* Desktop Socials */}
        <div className="hidden md:flex space-x-4">
          <a href="#"><FaFacebook className="text-lg hover:text-gray-400" /></a>
          <a href="#"><FaLinkedin className="text-lg hover:text-gray-400" /></a>
          <a href="#"><FaYoutube className="text-lg hover:text-gray-400" /></a>
        </div>

        {/* Hamburger for Mobile */}
        <div className="md:hidden z-50">
          <button onClick={toggleMenu}>
            {isOpen ? (
              <FaTimes className="text-2xl text-white" />
            ) : (
              <FaBars className="text-2xl text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="md:hidden bg-black px-6 pb-6">
          <nav className="flex flex-col space-y-4 text-sm tracking-wide">
            <a href="#home" onClick={toggleMenu} className="hover:underline font-serif">HOME</a>
            <a href="#about" onClick={toggleMenu} className="hover:underline font-serif">ABOUT</a>
            <a href="#edits" onClick={toggleMenu} className="hover:underline font-serif">EDITS</a>
            <a href="#testimonials" onClick={toggleMenu} className="hover:underline font-serif">TESTIMONIALS</a>
            <a href="#contact" onClick={toggleMenu} className="hover:underline font-serif">CONTACT</a>

            <div className="flex space-x-4 pt-4">
              <a href="#"><FaFacebook className="text-lg hover:text-gray-400" /></a>
              <a href="#"><FaLinkedin className="text-lg hover:text-gray-400" /></a>
              <a href="#"><FaYoutube className="text-lg hover:text-gray-400" /></a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
