
import React from 'react';

const DecorativeIcon = () => (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="absolute -top-1/4 -left-1/4 w-[150%] h-[150%] text-accent-cyan/5 opacity-10 filter blur-3xl" aria-hidden="true">
        <path d="M4 4V8H8V4H4ZM10 4V8H14V4H10ZM16 4V8H20V4H16ZM4 10V14H8V10H4ZM10 10V14H14V10H10ZM16 10V14H20V10H16ZM4 16V20H8V16H4ZM10 16V20H14V16H10ZM16 16V20H20V16H16ZM5 11.5H6.5V12.5H5V11.5ZM5 5.5H6.5V6.5H5V5.5ZM11 5.5H12.5V6.5H11V5.5ZM17 5.5H18.5V6.5H17V5.5ZM11 11.5H12.5V12.5H11V11.5ZM17 11.5H18.5V12.5H17V11.5ZM5 17.5H6.5V18.5H5V17.5ZM11 17.5H12.5V18.5H11V17.5ZM17 17.5H18.5V18.5H17V17.5Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
);


const Hero: React.FC = () => {
    return (
        <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-infinity-blue">
            <DecorativeIcon />
            <div className="relative z-10 text-center text-white px-6">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    Precision 3D Printing & Expert CAD Design
                </h1>
                <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8 text-gray-200">
                    From concept to reality, 3dForge.studio brings your ideas to life with state-of-the-art technology and meticulous craftsmanship.
                </p>
                <a href="#contact" className="bg-accent-cyan hover:bg-accent-cyan-dark text-white font-bold py-4 px-10 rounded-full text-lg transition-transform duration-300 transform hover:scale-105">
                    Start Your Project
                </a>
            </div>
        </section>
    );
};

export default Hero;
