import React, { useState, useEffect } from 'react';
import image1 from '../assets/images/hero.webp';
import image2 from '../assets/images/hero2.png';
import image3 from '../assets/images/hero3.png';

const images = [
    { src: image1, text: 'Empowering Communities, Transforming Lives' },
    { src: image2, text: 'Advocating for Human Rights and Dignity' },
    { src: image3, text: 'Promoting Sustainable Practices in WASH' },
];

const HeroSection = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 5000); // Change image every 5 seconds

        return () => clearInterval(interval);
    }, []);

    return (
        <section className="relative w-full h-screen overflow-hidden">
            {images.map((image, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ease-in-out ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                    style={{ backgroundImage: `url(${image.src})` }}
                >
                    <div className="absolute inset-0 bg-black opacity-60"></div> {/* Overlay */}
                    <div className="container mx-auto flex flex-col justify-center items-center relative h-full text-white p-6"> {/* Centered items */}
                        <h1 className="text-5xl md:text-6xl font-bold leading-tight text-center">
                            {image.text}
                        </h1>
                        <div className="mt-6 flex justify-center"> {/* Center buttons */}
                            <a href="#donate" className="bg-[#00c8e6] text-[#04091e] px-6 py-2 rounded-lg font-semibold hover:bg-[#ffffff] transition duration-300 mr-4">
                                Donate
                            </a>
                            <a href="#volunteer" className="bg-[#ffffff] text-[#04091e] px-6 py-2 rounded-lg font-semibold hover:bg-[#00c8e6] transition duration-300">
                                Volunteer
                            </a>
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default HeroSection;