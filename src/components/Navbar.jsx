import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo3.png'; // Replace with your logo's file path

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="bg-[#ffffff] shadow">
      {/* Top Info Bar */}
      <div className="bg-[#04091e] text-[#ffffff] py-2 text-sm">
        <div className="container mx-auto flex justify-between items-center px-4">
          <div>
            <span>Phone: +233 (0) 123 456 789 | Email: info@aspiretoimpact.org</span>
          </div>
          <div className="flex space-x-4">
            <FaTwitter className="hover:text-[#00c8e6] cursor-pointer" />
            <FaFacebookF className="hover:text-[#00c8e6] cursor-pointer" />
            <FaLinkedinIn className="hover:text-[#00c8e6] cursor-pointer" />
            <FaGooglePlusG className="hover:text-[#00c8e6] cursor-pointer" />
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Logo and NGO Name */}
        <div className="flex items-center">
          <img src={Logo} alt="Aspire to Impact Logo" className="h-16 w-16" /> {/* Increased logo size */}
          <span className="text-xl font-semibold text-[#04091e] ml-2">Aspire to Impact</span> {/* Reduced NGO name size */}
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#04091e] hover:text-[#00c8e6]">Home</a>
          <a href="#about" className="text-[#04091e] hover:text-[#00c8e6]">About</a>
          <a href="#events" className="text-[#04091e] hover:text-[#00c8e6]">Events</a>
          <a href="#gallery" className="text-[#04091e] hover:text-[#00c8e6]">Gallery</a>
          <a href="#team" className="text-[#04091e] hover:text-[#00c8e6]">Team</a>
          <a href="#contact" className="text-[#04091e] hover:text-[#00c8e6]">Contact</a>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? (
              <FaTimes className="text-2xl text-[#04091e]" />
            ) : (
              <FaBars className="text-2xl text-[#04091e]" />
            )}
          </button>
        </div>

        {/* Donate Button */}
        <a
          href="#donate"
          className="hidden md:inline-block bg-[#00c8e6] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#04091e] hover:text-[#00c8e6] transition"
        >
          Donate
        </a>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`${
          isMobileMenuOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-lg p-4 space-y-4`}
      >
        <a href="#home" className="block text-[#04091e] hover:text-[#00c8e6]">Home</a>
        <a href="#about" className="block text-[#04091e] hover:text-[#00c8e6]">About</a>
        <a href="#events" className="block text-[#04091e] hover:text-[#00c8e6]">Events</a>
        <a href="#gallery" className="block text-[#04091e] hover:text-[#00c8e6]">Gallery</a>
        <a href="#team" className="block text-[#04091e] hover:text-[#00c8e6]">Team</a>
        <a href="#contact" className="block text-[#04091e] hover:text-[#00c8e6]">Contact</a>
        <a
          href="#donate"
          className="block bg-[#00c8e6] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#04091e] hover:text-[#00c8e6] transition"
        >
          Donate
        </a>
      </div>
    </header>
  );
};

export default Navbar;
