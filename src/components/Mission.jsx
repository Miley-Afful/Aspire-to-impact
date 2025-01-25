import React from 'react';

const missionData = [
    {
        title: "Promote Awareness and Education",
        description: "Raising awareness on Sexual and Gender-Based Violence (SGBV) and improving knowledge on Reproductive Health.",
        bgColor: "#00c8e6",
    },
    {
        title: "Advocate for Human Rights",
        description: "Ensuring dignity and respect for all individuals through strong human rights advocacy.",
        bgColor: "#04091e",
    },
    {
        title: "Enhance Access to WASH",
        description: "Promoting sustainable Water, Sanitation, and Hygiene (WASH) practices for healthier communities.",
        bgColor: "#00c8e6",
    },
    {
        title: "Foster Social Accountability",
        description: "Encouraging transparency and accountability to improve community development.",
        bgColor: "#04091e",
    },
    {
        title: "Support Agricultural Development",
        description: "Empowering communities through sustainable agricultural practices to enhance food security and livelihoods.",
        bgColor: "#00c8e6",
    },
];

const OurMission = () => {
    return (
        <section className="py-12 px-4">
            <h2 className="text-4xl font-bold text-center mb-8 text-[#04091e]">Our Objectives</h2>
            <div className="flex flex-wrap justify-center items-center">
                {missionData.map((mission, index) => (
                    <div
                        key={index}
                        className="w-full sm:w-1/2 md:w-1/3 lg:w-1/5 p-2"
                    >
                        <div
                            className="p-4 text-white rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-lg"
                            style={{ backgroundColor: mission.bgColor }}
                        >
                            <h3 className="text-lg font-semibold mb-2">{mission.title}</h3>
                            <p className="text-sm mb-4">{mission.description}</p>
                            <a
                                href="#details"
                                className="inline-block bg-white text-[#04091e] font-semibold px-3 py-1 rounded hover:bg-[#00c8e6] hover:text-white transition-all duration-300"
                            >
                                View Details
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default OurMission;