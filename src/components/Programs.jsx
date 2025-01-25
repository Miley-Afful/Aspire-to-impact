import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import programImage1 from '../assets/images/team.jpg'; // Replace with actual images
import programImage2 from '../assets/images/team.jpg';
import programImage3 from '../assets/images/team.jpg';
import programImage4 from '../assets/images/team.jpg';
import programImage5 from '../assets/images/team.jpg';

const ProgramsSection = () => {
    const programs = [
        {
            title: "SGBV Awareness Campaigns",
            description: "Conducting community workshops and digital campaigns to raise awareness on Sexual and Gender-Based Violence and Reproductive Health, empowering individuals with knowledge and resources.",
            image: programImage1,
        },
        {
            title: "Human Rights Advocacy",
            description: "Providing legal aid, organizing forums, and engaging in advocacy to promote human rights, ensuring dignity and respect for all.",
            image: programImage2,
        },
        {
            title: "WASH Improvement Projects",
            description: "Implementing clean water systems, building sanitation facilities, and promoting hygiene education for sustainable community health.",
            image: programImage3,
        },
        {
            title: "Social Accountability Programs",
            description: "Training communities on participatory governance and monitoring public service delivery to enhance transparency and accountability.",
            image: programImage4,
        },
        {
            title: "Agricultural Development Initiatives",
            description: "Supporting smallholder farmers through modern agricultural techniques, seed distribution, and market linkages to improve food security and livelihoods.",
            image: programImage5,
        },
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % programs.length);
        }, 3000); // Change slide every 3 seconds

        return () => clearInterval(interval);
    }, [programs.length]);

    return (
        <section id="programs" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center px-4 sm:px-6 lg:px-8">
                {/* Section Title */}
                <h2 className="text-3xl sm:text-4xl font-bold mb-8">Programs and Projects</h2>

                {/* Sliding Cards */}
                <div className="relative overflow-hidden max-w-4xl mx-auto">
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={currentIndex}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden"
                        >
                            {/* Image Section */}
                            <div className="relative md:w-1/2 h-64 md:h-auto">
                                <img
                                    src={programs[currentIndex].image}
                                    alt={programs[currentIndex].title}
                                    className="w-full h-full object-cover"
                                />
                            </div>

                            {/* Text Section */}
                            <div className="p-4 sm:p-6 md:w-1/2 flex flex-col justify-between">
                                <div>
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-4">
                                        {programs[currentIndex].title}
                                    </h3>
                                    <p className="text-gray-700 text-base sm:text-lg mb-4 sm:mb-6">
                                        {programs[currentIndex].description}
                                    </p>
                                </div>
                                <a
                                    href="#learn-more"
                                    className="inline-block bg-[#00c8e6] text-white px-4 py-2 sm:px-6 sm:py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300"
                                >
                                    Learn More
                                </a>
                            </div>
                        </motion.div>
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default ProgramsSection;
