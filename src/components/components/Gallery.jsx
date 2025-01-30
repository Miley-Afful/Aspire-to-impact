import React, { useState } from "react";
import { NavLink } from "react-router-dom";

// Import gallery images
import image1 from "../../assets/images/comm.jpg"; // Adjust the path as necessary
import image2 from "../../assets/images/health.jpg"; // Adjust the path as necessary
import image3 from "../../assets/images/envmt.jpg"; // Adjust the path as necessary
import image4 from "../../assets/images/hero.webp"; // Adjust the path as necessary
import image5 from "../../assets/images/hero2.png"; // Adjust the path as necessary
import image6 from "../../assets/images/hero3.png"; // Adjust the path as necessary
import image7 from "../../assets/images/learn.jpg"; // Adjust the path as necessary
import image8 from "../../assets/images/comm.jpg"; // Adjust the path as necessary
import image9 from "../../assets/images/health.jpg"; // Adjust the path as necessary
import image10 from "../../assets/images/image.png"; // Adjust the path as necessary

// Sample gallery images data with descriptions
const galleryImages = [
  { id: 1, src: image1, alt: "Event 1", description: "Community education workshop." },
  { id: 2, src: image2, alt: "Event 2", description: "Health awareness campaign." },
  { id: 3, src: image3, alt: "Event 3", description: "Environmental cleanup drive." },
  { id: 4, src: image4, alt: "Event 4", description: "Fundraising event for local schools." },
  { id: 5, src: image5, alt: "Event 5", description: "Volunteer training session." },
  { id: 6, src: image6, alt: "Event 6", description: "Community health fair." },
  { id: 7, src: image7, alt: "Event 7", description: "Tree planting initiative." },
  { id: 8, src: image8, alt: "Event 8", description: "Food distribution drive." },
  { id: 9, src: image9, alt: "Event 9", description: "Youth empowerment seminar." },
  { id: 10, src: image10, alt: "Event 10", description: "Cultural festival celebration." },
];

const GallerySection = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  // Calculate the total number of pages
  const totalPages = Math.ceil(galleryImages.length / itemsPerPage);

  // Get the images for the current page
  const currentImages = galleryImages.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // Handle page change
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <section id="gallery" className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        {/* NavLink for Navigation */}
        <NavLink
          to="/"
          className="text-[#00c8e6] text-lg font-semibold hover:underline"
        >
          Back to Home
        </NavLink>

        <h2 className="text-4xl font-bold mb-8">Gallery</h2>
        <p className="text-lg text-gray-600 mb-12">
          A glimpse into our events and activities.
        </p>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {currentImages.map((image) => (
            <div key={image.id} className="overflow-hidden rounded-lg shadow-lg">
              <img
                src={image.src}
                alt={image.alt}
                className="w-full h-48 object-cover transition-transform transform hover:scale-105"
              />
              <div className="p-4">
                <p className="text-gray-700 text-sm">{image.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Pagination Controls */}
        <div className="flex justify-center items-center mt-8 space-x-4">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === 1
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#00c8e6] text-white hover:bg-[#008ba0]"
            }`}
          >
            Previous
          </button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={`px-4 py-2 rounded-lg font-semibold ${
                currentPage === index + 1
                  ? "bg-[#00c8e6] text-white"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {index + 1}
            </button>
          ))}

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-lg font-semibold ${
              currentPage === totalPages
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "bg-[#00c8e6] text-white hover:bg-[#008ba0]"
            }`}
          >
            Next
          </button>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;