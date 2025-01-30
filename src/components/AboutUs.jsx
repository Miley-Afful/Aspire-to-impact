import React from 'react';
import teamImage from '../assets/images/team.jpg';

const AboutSection = () => {
  return (
    <section id="about" className="relative bg-gray-50 py-20 mt-10">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Title Section */}
        <div className="text-center mb-16">
          <h1 className="text-5xl font-extrabold text-[#00c8e6]">
            Welcome to Aspire to Impact
          </h1>
          <p className="text-lg text-gray-600 mt-4">
            Empowering communities, one step at a time.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row items-center justify-between">
          {/* Text Section */}
          <div className="lg:w-1/2 lg:pr-12 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg p-8 transform transition duration-300 hover:shadow-xl">
              <h2 className="text-3xl font-bold mb-4 text-[#00c8e6]">
                Who We Are
              </h2>
              <p className="text-md mb-4 text-gray-700 leading-relaxed">
                Aspire to Impact is a Non-Governmental Organization dedicated
                to uplifting communities through innovative projects, volunteer
                efforts, and a commitment to creating lasting change.
              </p>
              <p className="text-md mb-4 text-gray-700 leading-relaxed">
                We believe in the power of collective action and strive to
                create a better future for all. Join us in our mission to make a
                difference, one step at a time.
              </p>
              <a
                href="#learn-more"
                className="inline-block bg-[#00c8e6] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#04091e] transition duration-300"
              >
                Learn More
              </a>
            </div>
          </div>

          {/* Image Section */}
          <div className="lg:w-1/2 mb-8 lg:mb-0">
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <img
                src={teamImage}
                alt="Our Team"
                className="w-full h-auto max-w-md lg:max-w-lg object-cover transform transition duration-300 hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;