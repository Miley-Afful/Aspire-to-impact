import React from "react";
import { NavLink } from "react-router-dom";

// Import event images with correct paths
import event1Image from "../../assets/images/learn.jpg"; // Adjust the path as necessary
import event2Image from "../../assets/images/health.jpg"; // Adjust the path as necessary
import event3Image from "../../assets/images/envmt.jpg"; // Adjust the path as necessary

// Sample upcoming events data with imported images
const upcomingEvents = [
  {
    id: 1,
    title: "Community Education Workshop",
    image: event1Image,
    date: "April 15, 2025",
    description: "Join us for an informative workshop on empowering communities through education initiatives.",
    link: "/event/1"
  },
  {
    id: 2,
    title: "Health Awareness Campaign",
    image: event2Image,
    date: "May 20, 2025",
    description: "Discover our latest efforts in promoting health awareness and providing medical support to those in need.",
    link: "/event/2"
  },
  {
    id: 3,
    title: "Environmental Conservation Drive",
    image: event3Image,
    date: "June 5, 2025",
    description: "Be a part of our mission to protect the environment through sustainable practices and community involvement.",
    link: "/event/3"
  }
];

const EventSection = () => {
  return (
    <section id="events" className="py-20 bg-gray-100">
      <div className="container mx-auto">
        {/* Back to Home Link */}
        <div className="text-center mb-8">
          <NavLink to="/" className="text-lg text-gray-600 hover:underline">
            Back to Home
          </NavLink>
        </div>

        <h2 className="text-5xl font-bold mb-8 text-center text-[#00c8e6]">Upcoming Events</h2>

        <div className="space-y-10">
          {upcomingEvents.map((event) => (
            <div key={event.id} className="flex flex-col md:flex-row bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105">
              <img src={event.image} alt={event.title} className="md:w-1/2 h-64 object-cover" />
              <div className="p-6 flex-grow">
                <h3 className="text-3xl font-semibold mb-2">{event.title}</h3>
                <p className="text-gray-600 mb-2">{event.date}</p>
                <p className="text-lg text-gray-800 mb-4">{event.description}</p>
                <NavLink to={event.link} className="inline-block bg-[#00c8e6] text-white px-6 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300">
                  Read More
                </NavLink>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EventSection;