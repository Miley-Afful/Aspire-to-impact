import React, { useState } from "react";
import { Link } from "react-router-dom";

// Import images with correct paths
import image1 from "../assets/images/envmt.jpg"; // Adjust the path as necessary
import image2 from "../assets/images/health.jpg"; // Adjust the path as necessary
import image3 from "../assets/images/comm.jpg"; // Adjust the path as necessary

// Sample blog posts data with imported images
const blogPosts = [
  {
    id: 1,
    title: "Empowering Communities Through Education",
    image: image3,
    date: "March 15, 2024",
    snippet:
      "Education is the foundation of progress. Learn how we empower communities through educational initiatives.",
  },
  {
    id: 2,
    title: "Our Latest Health Initiative",
    image: image2,
    date: "April 10, 2024",
    snippet:
      "Discover our recent efforts in promoting health awareness and providing medical support.",
  },
  {
    id: 3,
    title: "Environmental Conservation Efforts",
    image: image1,
    date: "May 5, 2024",
    snippet:
      "Join us in our mission to protect the environment through sustainable practices.",
  },
];

const BlogSection = () => {
  const [isGridView, setIsGridView] = useState(true);

  const toggleView = () => {
    setIsGridView(!isGridView);
  };

  return (
    <section id="blog" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Our Blog</h2>
        <p className="text-lg text-gray-600 mb-12">
          Stay updated with our latest news and insights.
        </p>
        
        {/* Toggle Button */}
        <div className="mb-6">
          <button
            onClick={toggleView}
            className="bg-[#00c8e6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300"
          >
            {isGridView ? "Switch to List View" : "Switch to Grid View"}
          </button>
        </div>

        {/* Blog Posts */}
        <div
          className={`${
            isGridView ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" : "flex flex-col space-y-8"
          }`}
        >
          {blogPosts.map((post) => (
            <div
              key={post.id}
              className={`bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform ${
                isGridView ? "hover:scale-105" : ""
              }`}
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.date}</p>
                <p className="text-lg mb-4">{post.snippet}</p>
                <Link
                  to={`/blog/${post.id}`}
                  className="inline-block bg-[#00c8e6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300"
                >
                  Read More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogSection;