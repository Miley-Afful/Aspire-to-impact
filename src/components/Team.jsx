import React from "react";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import { TbBrandX } from "react-icons/tb"; // Importing Twitter X icon
import teamMember1 from "../assets/images/john.jpg"; // Replace with actual image paths
import teamMember2 from "../assets/images/stanley.jpg";
import teamMember3 from "../assets/images/mark.jpg";

const TeamSection = () => {
  const teamMembers = [
    {
      name: "John Kwabena Kumah",
      role: "Director",
      description:
        "John Kwabena Kumah is a visionary leader with extensive experience in organizational management. He is passionate about promoting social change and empowering communities through sustainable initiatives.",
      image: teamMember1,
      socialLinks: {
        twitter: "https://twitter.com/markakoto",
        facebook: "https://facebook.com/markakoto",
        linkedin: "https://linkedin.com/in/markakoto",
      },
    },
    {
      name: "Mr. Stanley Kofi Kpemeh",
      role: "Director & Secretary",
      description:
        "Stanley Kofi Kpemeh serves as both Director and Secretary, ensuring smooth coordination of the association’s operations. With a background in law, he is committed to advocacy and upholding human rights.",
      image: teamMember2,
      socialLinks: {
        twitter: "https://twitter.com/stanleykpemeh",
        facebook: "https://facebook.com/stanleykpemeh",
        linkedin: "https://linkedin.com/in/stanleykpemeh",
      },
    },
    {
      name: "Mark Yaw Akoto",
      role: "Director",
      description:
        "Mark Yaw Akoto brings a wealth of experience in community development and project management. His dedication to agricultural and educational initiatives has significantly impacted local communities.",
      image: teamMember3,
      socialLinks: {
        twitter: "https://twitter.com/johnkumah",
        facebook: "https://facebook.com/johnkumah",
        linkedin: "https://linkedin.com/in/johnkumah",
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-50">
      <div className="container mx-auto text-center px-6 lg:px-16">
        {/* Section Title */}
        <h2 className="text-4xl font-extrabold text-[#00c8e6] mb-8">
          Meet Our Team
        </h2>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-12">
          Our team is composed of passionate individuals dedicated to making a
          difference in the world.
        </p>

        {/* Team Members */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-xl"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-70"></div>
              </div>

              {/* Text Section */}
              <div className="p-6 text-center">
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {member.name}
                </h3>
                <p className="text-sm text-[#00c8e6] font-semibold mb-4">
                  {member.role}
                </p>
                <p className="text-gray-600 text-sm leading-relaxed mb-6">
                  {member.description}
                </p>

                {/* Social Media Links */}
                <div className="flex justify-center space-x-4">
                  {member.socialLinks.twitter && (
                    <a
                      href={member.socialLinks.twitter}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#1DA1F2] hover:text-blue-500 transition duration-300"
                    >
                      <TbBrandX size={24} />
                    </a>
                  )}
                  {member.socialLinks.facebook && (
                    <a
                      href={member.socialLinks.facebook}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#3b5998] hover:text-blue-600 transition duration-300"
                    >
                      <FaFacebookF size={24} />
                    </a>
                  )}
                  {member.socialLinks.linkedin && (
                    <a
                      href={member.socialLinks.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[#0077B5] hover:text-blue-700 transition duration-300"
                    >
                      <FaLinkedinIn size={24} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;