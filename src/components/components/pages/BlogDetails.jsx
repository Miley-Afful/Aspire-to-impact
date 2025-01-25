import React, { useState } from 'react';
import { FacebookShareButton, TwitterShareButton, FacebookIcon, TwitterIcon } from 'react-share';

// BlogPost Component
const BlogPost = ({ post }) => {
    const [comment, setComment] = useState('');
    const [comments, setComments] = useState([]);
    const [email, setEmail] = useState('');
    const [subscribedEmails, setSubscribedEmails] = useState([]); // For storing emails temporarily

    const handleCommentSubmit = (e) => {
        e.preventDefault();
        if (comment) {
            setComments([...comments, comment]);
            setComment('');
        }
    };

    const handleDeleteComment = (index) => {
        const newComments = comments.filter((_, i) => i !== index);
        setComments(newComments);
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handleSubscribeSubmit = (e) => {
        e.preventDefault();
        if (email && !subscribedEmails.includes(email)) {
            setSubscribedEmails([...subscribedEmails, email]);
            setEmail('');
            alert('Thank you for subscribing!');
        } else {
            alert('You are already subscribed or email is invalid!');
        }
    };

    return (
        <div className="container mx-auto py-20">
            <h2 className="text-4xl font-bold mb-4">{post.title}</h2>
            <img src={post.image} alt={post.title} className="w-full h-64 object-cover mb-4" />
            <p className="text-lg mb-6">{post.content}</p>

            {/* Call-to-Action Buttons */}
            <div className="flex space-x-4 mb-6">
                <FacebookShareButton 
                    url={post.url} 
                    quote={post.title}
                    className="bg-blue-500 text-white px-4 py-2 rounded flex items-center"
                >
                    <FacebookIcon size={32} round /> Share on Facebook
                </FacebookShareButton>
                <TwitterShareButton 
                    url={post.url} 
                    title={post.title}
                    className="bg-blue-400 text-white px-4 py-2 rounded flex items-center"
                >
                    <TwitterIcon size={32} round /> Share on Twitter
                </TwitterShareButton>
                
                <button className="bg-green-500 text-white px-4 py-2 rounded">
                    Support Our Work
                </button>
            </div>

            {/* Newsletter Subscription Form */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Subscribe to Our Newsletter</h3>
                <form onSubmit={handleSubscribeSubmit} className="flex space-x-4">
                    <input
                        type="email"
                        value={email}
                        onChange={handleEmailChange}
                        placeholder="Enter your email"
                        className="border rounded p-2 flex-grow"
                        required
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded">
                        Subscribe
                    </button>
                </form>
            </div>

            {/* Comment Section */}
            <div className="mt-10">
                <h3 className="text-2xl font-semibold mb-4">Comments</h3>
                <form onSubmit={handleCommentSubmit} className="mb-4">
                    <textarea
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                        placeholder="Leave a comment..."
                        className="w-full border rounded p-2"
                        rows="3"
                    />
                    <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded mt-2">
                        Post Comment
                    </button>
                </form>
                <div>
                    {comments.length > 0 ? (
                        comments.map((c, index) => (
                            <div key={index} className="border p-2 mb-2 rounded">
                                <p>{c}</p>
                                <button 
                                    onClick={() => handleDeleteComment(index)} 
                                    className="text-red-500 hover:text-red-700"
                                >
                                    Delete
                                </button>
                            </div>
                        ))
                    ) : (
                        <p>No comments yet.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

// Main Component to Render Posts
const Blog = () => {
    const blogPosts = [
        {
            title: "Empowering Communities Through Education",
            content: "Education is the foundation of progress. Learn how we empower communities through educational initiatives...",
            image: "path/to/image1.jpg",
            url: "https://yourwebsite.com/blog/1" // URL to share
        },
        {
            title: "Our Latest Health Initiative",
            content: "Discover our recent efforts in promoting health awareness and providing medical support.",
            image: "path/to/image2.jpg",
            url: "https://yourwebsite.com/blog/2" // URL to share
        },
        // Add more posts as needed...
    ];

    return (
        <div>
            {blogPosts.map((post, index) => (
                <BlogPost key={index} post={post} />
            ))}
        </div>
    );
};

export default Blog;