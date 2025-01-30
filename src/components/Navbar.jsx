import React, { useState } from 'react';
import { FaTwitter, FaFacebookF, FaLinkedinIn, FaGooglePlusG, FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo3.png'; 
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header className="bg-[#ffffff] shadow fixed top-0 left-0 w-full z-50">
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
          <img src={Logo} alt="Aspire to Impact Logo" className="h-16 w-16 rounded-full" />
          <span className="text-xl font-semibold text-[#04091e] ml-2">Aspire to Impact</span>
        </div>

        {/* Navigation Links for Desktop */}
        <div className="hidden md:flex space-x-6">
          <a href="#home" className="text-[#04091e] font-semibold hover:text-[#00c8e6]">Home</a>
          <a href="#about" className="text-[#04091e] font-semibold hover:text-[#00c8e6]">About</a>
          <Link to="/events"><a href="#events" className="text-[#04091e] font-semibold hover:text-[#00c8e6]">Events</a></Link>
          <Link to="/gallery"><a href="#gallery" className="text-[#04091e] font-semibold hover:text-[#00c8e6]">Gallery</a></Link>
          <a href="#team" className="text-[#04091e] font-semibold hover:text-[#00c8e6]">Team</a>
          <Link to="/contact"><a href="#contact" className="text-[#04091e] font-semibold hover:text-[#00c8e6]">Contact</a></Link>
          <a
            href="#donate"
            className="bg-[#00c8e6] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#04091e] hover:text-[#00c8e6] transition"
          >
            Donate
          </a>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={toggleMobileMenu} className="text-[#04091e]">
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`${isMobileMenuOpen ? 'block' : 'hidden'} md:hidden bg-white shadow-lg p-4 space-y-4`}>
          <a href="#home" className="block text-[#04091e] font-semibold hover:text-[#00c8e6]">Home</a>
          <a href="#about" className="block text-[#04091e] font-semibold hover:text-[#00c8e6]">About</a>
          <Link to="/events"><a href="#events" className="block text-[#04091e] font-semibold hover:text-[#00c8e6]">Events</a></Link>
          <Link to="/gallery"><a href="#gallery" className="block text-[#04091e] font-semibold hover:text-[#00c8e6]">Gallery</a></Link>
          <a href="#team" className="block text-[#04091e] font-semibold hover:text-[#00c8e6]">Team</a>
          <Link to="/contact"><a href="#contact" className="block text-[#04091e] font-semibold hover:text-[#00c8e6]">Contact</a></Link>
          <a
            href="#donate"
            className="block bg-[#00c8e6] text-white py-2 px-6 rounded-lg shadow-lg hover:bg-[#04091e] hover:text-[#00c8e6] transition"
          >
            Donate
          </a>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;