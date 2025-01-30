import React from "react";
import { NavLink } from "react-router-dom";

const ContactSection = () => {
  return (
    <section id="contact" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        {/* Back to Home Link */}
        <div className="text-center mb-8">
          <NavLink to="/" className="text-lg text-gray-600 hover:underline">
            Back to Home
          </NavLink>
        </div>

        <h2 className="text-5xl font-bold mb-8 text-center text-[#00c8e6]">Get in Touch</h2>
        <p className="text-lg text-gray-600 text-center mb-12">
          We would love to hear from you! Please fill out the form below or reach us through our contact details.
        </p>

        <div className="flex flex-col md:flex-row justify-center items-start space-y-8 md:space-y-0 md:space-x-8">
          {/* Contact Form */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">Contact Form</h3>
            <form>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
                <input type="text" id="name" className="w-full p-3 border border-gray-300 rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
                <input type="email" id="email" className="w-full p-3 border border-gray-300 rounded-lg" required />
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
                <textarea id="message" rows="4" className="w-full p-3 border border-gray-300 rounded-lg" required></textarea>
              </div>
              <button type="submit" className="bg-[#00c8e6] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300">
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Details */}
          <div className="bg-white rounded-lg shadow-lg p-8 w-full md:w-1/2">
            <h3 className="text-3xl font-semibold mb-6">Our Contact Details</h3>
            <p className="text-lg text-gray-800 mb-4">
              <strong>Email:</strong> <a href="mailto:info@ngo.org" className="text-[#00c8e6] hover:underline">info@aspiretoimpact.org</a>
            </p>
            <p className="text-lg text-gray-800 mb-4">
              <strong>Phone:</strong> <a href="tel:+1234567890" className="text-[#00c8e6] hover:underline">+1 (+233) 247705704</a>
            </p>
            <p className="text-lg text-gray-800 mb-4">
              <strong>Address:</strong> J 164, Ashaiman, Greater Accra, Ghana 
            </p>
            <div className="mt-6">
              <h4 className="text-xl font-semibold mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-[#00c8e6] hover:underline">Facebook</a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-[#00c8e6] hover:underline">Twitter</a>
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-[#00c8e6] hover:underline">Instagram</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;