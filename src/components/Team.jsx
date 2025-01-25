import React from 'react';
import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';
import { TbBrandX } from 'react-icons/tb'; // Importing Twitter X icon
import teamMember1 from '../assets/images/john.jpg'; // Replace with actual image paths
import teamMember2 from '../assets/images/stanley.jpg';
import teamMember3 from '../assets/images/mark.jpg';

const TeamSection = () => {
  const teamMembers = [
    {
      name: 'John Kwabena Kumah',
      role: 'Director',
      description:
        'John Kwabena Kumah is a visionary leader with extensive experience in organizational management. He is passionate about promoting social change and empowering communities through sustainable initiatives. His strategic thinking and leadership have been pivotal in driving the association’s mission forward.',
      image: teamMember1,
      socialLinks: {
        twitter: 'https://twitter.com/markakoto',
        facebook: 'https://facebook.com/markakoto',
        linkedin: 'https://linkedin.com/in/markakoto',
      },
    },
    {
      name: 'Mr. Stanley Kofi Kpemeh',
      role: 'Director & Secretary',
      description:
        'Stanley Kofi Kpemeh serves as both Director and Secretary, ensuring smooth coordination of the association’s operations. With a background in law, he is committed to advocacy and upholding human rights. Stanley also spearheads various community initiatives, fostering transparency and accountability.',
      image: teamMember2,
      socialLinks: {
        twitter: 'https://twitter.com/stanleykpemeh',
        facebook: 'https://facebook.com/stanleykpemeh',
        linkedin: 'https://linkedin.com/in/stanleykpemeh',
      },
    },
    {
      name: 'Mark Yaw Akoto',
      role: 'Director',
      description:
        'Mark Yaw Akoto brings a wealth of experience in community development and project management. His dedication to agricultural and educational initiatives has significantly impacted local communities. John’s innovative approach ensures sustainable growth and long-term success.',
      image: teamMember3,
      socialLinks: {
        twitter: 'https://twitter.com/johnkumah',
        facebook: 'https://facebook.com/johnkumah',
        linkedin: 'https://linkedin.com/in/johnkumah',
      },
    },
  ];

  return (
    <section id="team" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg flex flex-col items-center text-center"
            >
              {/* Round Image */}
              <img
                src={member.image}
                alt={member.name}
                className="w-32 h-32 rounded-full mb-4 object-cover"
              />
              <h3 className="text-xl font-bold mb-2">{member.name}</h3>
              <p className="text-gray-600 mb-4">{member.role}</p>
              <p className="text-gray-700 text-sm mb-4">{member.description}</p>
              {/* Social Media Links */}
              <div className="flex space-x-4">
                {member.socialLinks.twitter && (
                  <a
                    href={member.socialLinks.twitter}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#1DA1F2] hover:text-blue-500"
                  >
                    <TbBrandX size={24} />
                  </a>
                )}
                {member.socialLinks.facebook && (
                  <a
                    href={member.socialLinks.facebook}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#3b5998] hover:text-blue-600"
                  >
                    <FaFacebookF size={24} />
                  </a>
                )}
                {member.socialLinks.linkedin && (
                  <a
                    href={member.socialLinks.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#0077B5] hover:text-blue-700"
                  >
                    <FaLinkedinIn size={24} />
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
