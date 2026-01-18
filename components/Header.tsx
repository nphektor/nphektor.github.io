
import React, { useState, useEffect } from 'react';

const LogoIcon = () => (
    <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-cyan">
        <path d="M4 4V8H8V4H4ZM10 4V8H14V4H10ZM16 4V8H20V4H16ZM4 10V14H8V10H4ZM10 10V14H14V10H10ZM16 10V14H20V10H16ZM4 16V20H8V16H4ZM10 16V20H14V16H10ZM16 16V20H20V16H16ZM5 11.5H6.5V12.5H5V11.5ZM5 5.5H6.5V6.5H5V5.5ZM11 5.5H12.5V6.5H11V5.5ZM17 5.5H18.5V6.5H17V5.5ZM11 11.5H12.5V12.5H11V11.5ZM17 11.5H18.5V12.5H17V11.5ZM5 17.5H6.5V18.5H5V17.5ZM11 17.5H12.5V18.5H11V17.5ZM17 17.5H18.5V18.5H17V17.5Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
);

const Header: React.FC = () => {
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-infinity-blue/80 backdrop-blur-sm shadow-lg' : 'bg-transparent'}`}>
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#" className="flex items-center space-x-2">
                    <LogoIcon />
                    <span className="text-2xl font-bold text-white">3dForge<span className="text-accent-cyan">.</span>studio</span>
                </a>
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.name} href={link.href} className="text-gray-300 hover:text-accent-cyan transition-colors duration-300 font-medium">
                            {link.name}
                        </a>
                    ))}
                </nav>
                <a href="#contact" className="hidden md:inline-block bg-accent-cyan hover:bg-accent-cyan-dark text-white font-bold py-2 px-6 rounded-full transition-colors duration-300">
                    Get a Quote
                </a>
                <div className="md:hidden">
                    {/* Mobile Menu Button can be added here */}
                    <button className="text-white">
                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
                    </button>
                </div>
            </div>
        </header>
    );
};

export default Header;
