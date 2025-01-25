import React from 'react';
import { Link } from 'react-router-dom';

// Sample blog posts data
const blogPosts = [
    {
        id: 1,
        title: "Empowering Communities Through Education",
        image: "path/to/image1.jpg",
        date: "March 15, 2024",
        snippet: "Education is the foundation of progress. Learn how we empower communities through educational initiatives.",
    },
    {
        id: 2,
        title: "Our Latest Health Initiative",
        image: "path/to/image2.jpg",
        date: "April 10, 2024",
        snippet: "Discover our recent efforts in promoting health awareness and providing medical support.",
    },
    {
        id: 3,
        title: "Environmental Conservation Efforts",
        image: "path/to/image3.jpg",
        date: "May 5, 2024",
        snippet: "Join us in our mission to protect the environment through sustainable practices.",
    },
];

const BlogSection = () => {
    React.useEffect(() => {
        // Load Visme script dynamically
        const script = document.createElement('script');
        script.src = 'https://static-bundles.visme.co/forms/vismeforms-embed.js';
        script.async = true;
        document.body.appendChild(script);

        // Cleanup on component unmount
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <section id="blog" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Our Blog</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {blogPosts.map(post => (
                        <div key={post.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                            <div className="p-4">
                                <h3 className="text-2xl font-semibold mb-2">{post.title}</h3>
                                <p className="text-gray-600 mb-4">{post.date}</p>
                                <p className="text-lg mb-4">{post.snippet}</p>
                                <a href={`/blog/${post.id}`} className="inline-block bg-[#00c8e6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300">
                                   <Link to='/blog-post'> Read More</Link>
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogSection;