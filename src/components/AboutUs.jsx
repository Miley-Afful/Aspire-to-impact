import React from 'react';
import teamImage from '../assets/images/team.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-20">
      {/* Full-width Wavy Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg viewBox="0 0 1440 320" className="w-full h-full">
          <path fill="#00c8e6" d="M0,128L30,138.7C60,149,120,171,180,170.7C240,171,300,149,360,144C420,139,480,149,540,170.7C600,192,660,224,720,213.3C780,203,840,149,900,128C960,107,1020,128,1080,149.3C1140,171,1200,213,1260,213.3C1320,213,1380,171,1410,149.3L1440,128L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320H0V128Z"></path>
        </svg>
      </div>

      <div className="container mx-auto relative z-10 px-4">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-[#00c8e6]"> Welcome To Aspire to Impact</h1>
        </div>

        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="md:w-1/2 mb-8 md:mb-0">
            <img
              src={teamImage}
              alt="Our Team"
              className="w-full h-auto max-w-xs md:max-w-md object-cover rounded-lg shadow-lg transform transition duration-300 hover:scale-105"
            />
          </div>

          {/* Text Section */}
          <div className="md:w-1/2 md:pl-8">
            <div className="bg-white rounded-lg shadow-lg p-6 transform transition duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-[#00c8e6]">We are a Non-Governmental Organization</h2>
              <p className="text-md mb-4 text-gray-700">
                Our mission is to support and uplift communities across the globe through dedicated volunteer efforts, innovative projects, and unwavering commitment to positive change.
              </p>
              <p className="text-md mb-4 text-gray-700">
                We believe in the power of collective action and strive to create a better future for all. Join us in our journey to make a difference, one step at a time.
              </p>
              <a href="#learn-more" className="inline-block bg-[#00c8e6] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#04091e] transition duration-300">
                Learn More
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;