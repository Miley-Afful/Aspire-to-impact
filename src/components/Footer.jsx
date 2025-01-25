import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // For contact icons
import { HiArrowRight } from 'react-icons/hi'; // For Quick Links
import logo from '../assets/images/logofooter.jpg'; // Ensure the correct path to the logo

const Footer = () => {
    return (
        <footer className="bg-[#04091e] text-white py-12">
            <div className="container mx-auto px-6">
                <div className="flex flex-wrap justify-between">
                    {/* Logo and Social Icons */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0 text-center md:text-left">
                        <img src={logo} alt="Logo" className="h-36 w-36 mx-auto md:mx-0 rounded-2xl" />
                        <div className="flex justify-center md:justify-start mt-4 space-x-4">
                            <a href="https://facebook.com" className="text-white hover:text-blue-400">
                                <FaFacebookF size={24} />
                            </a>
                            <a href="https://twitter.com" className="text-white hover:text-blue-400">
                                <FaTwitter size={24} />
                            </a>
                            <a href="https://instagram.com" className="text-white hover:text-pink-400">
                                <FaInstagram size={24} />
                            </a>
                            <a href="https://youtube.com" className="text-white hover:text-red-500">
                                <FaYoutube size={24} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center">
                                <HiArrowRight className="mr-2" />
                                <Link to="/get-involved" className="hover:underline">
                                    Get Involved
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <HiArrowRight className="mr-2" />
                                <Link to="/volunteer" className="hover:underline">
                                    Become a Volunteer
                                </Link>
                            </li>
                            <li className="flex items-center">
                                <HiArrowRight className="mr-2" />
                                <Link to="/donate" className="hover:underline">
                                    Donate Now
                                </Link>
                            </li>
                        </ul>
                    </div>

                    {/* Contact Us */}
                    <div className="w-full md:w-1/4 mb-8 md:mb-0">
                        <h3 className="text-xl font-bold mb-4">Contact Us</h3>
                        <p className="flex items-center mb-2">
                            <FaMapMarkerAlt className="mr-2" />
                            J 164, Ashaiman, Greater Accra, Ghana 
                        </p>
                        <p className="flex items-center mb-2">
                            <FaPhoneAlt className="mr-2" />
                            Phone: +233 247 705 704
                        </p>
                        <p className="flex items-center">
                            <FaEnvelope className="mr-2" />
                            <a
                                href="mailto:balancejefffoundations@gmail.com"
                                className="hover:underline"
                            >
                                info@aspiretoimpact.org
                            </a>
                        </p>
                    </div>

                    {/* Newsletter */}
                    <div className="w-full md:w-1/4">
                        <h3 className="text-xl font-bold mb-4">Join the Newsletter</h3>
                        <form className="flex flex-col space-y-4">
                            <input
                                type="email"
                                placeholder="Your email here..."
                                className="p-3 rounded text-black"
                            />
                            <button
                                type="submit"
                                className="bg-[#00c8e6] text-white px-4 py-2 rounded hover:bg-black"
                            >
                                Subscribe Now
                            </button>
                        </form>
                    </div>
                </div>

                <p className="text-center mt-10 text-lg">
                    &copy; {new Date().getFullYear()}   Aspire To Impact. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;
