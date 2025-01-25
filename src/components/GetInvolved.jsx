import React from 'react';

const GetInvolved = () => {
    return (
        <section id="get-involved" className="py-20 bg-gray-100">
            <div className="container mx-auto text-center">
                <h2 className="text-4xl font-bold mb-8">Get Involved</h2>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Membership Information */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Membership Information</h3>
                        <p className="mb-4">
                            Join us as a member and enjoy exclusive benefits such as access to special events, newsletters, and networking opportunities.
                        </p>
                        <p className="mb-4">
                            To apply, simply fill out our membership form on our website and become a part of our community!
                        </p>
                        <a href="#membership" className="inline-block bg-[#00c8e6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300">
                            Learn More
                        </a>
                    </div>

                    {/* Volunteering */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Volunteering</h3>
                        <p className="mb-4">
                            We are always looking for passionate volunteers to join our efforts in the community. Whether you have specific skills or just want to help out, there are many ways to get involved!
                        </p>
                        <p className="mb-4">
                            Sign up to receive updates on upcoming volunteer opportunities and help us make a difference!
                        </p>
                        <a href="#volunteering" className="inline-block bg-[#00c8e6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300">
                            Get Involved
                        </a>
                    </div>

                    {/* Donation Options */}
                    <div className="bg-white rounded-lg shadow-lg p-6">
                        <h3 className="text-2xl font-semibold mb-4">Donation Options</h3>
                        <p className="mb-4">
                            Your contributions make a significant impact! Explore our donation options to support our programs and initiatives.
                        </p>
                        <p className="mb-4">
                            Funds raised will go towards community development, health initiatives, and environmental conservation efforts.
                        </p>
                        <a href="#donate" className="inline-block bg-[#00c8e6] text-white px-4 py-2 rounded-lg font-semibold hover:bg-[#008ba0] transition duration-300">
                            Donate Now
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;