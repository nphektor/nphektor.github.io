
import React from 'react';

const LogoIcon = () => (
    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-accent-cyan">
        <path d="M4 4V8H8V4H4ZM10 4V8H14V4H10ZM16 4V8H20V4H16ZM4 10V14H8V10H4ZM10 10V14H14V10H10ZM16 10V14H20V10H16ZM4 16V20H8V16H4ZM10 16V20H14V16H10ZM16 16V20H20V16H16ZM5 11.5H6.5V12.5H5V11.5ZM5 5.5H6.5V6.5H5V5.5ZM11 5.5H12.5V6.5H11V5.5ZM17 5.5H18.5V6.5H17V5.5ZM11 11.5H12.5V12.5H11V11.5ZM17 11.5H18.5V12.5H17V11.5ZM5 17.5H6.5V18.5H5V17.5ZM11 17.5H12.5V18.5H11V17.5ZM17 17.5H18.5V18.5H17V17.5Z" fill="currentColor" stroke="currentColor" strokeWidth="0.5"/>
    </svg>
);

const Footer: React.FC = () => {
    const navLinks = [
        { name: 'Services', href: '#services' },
        { name: 'Process', href: '#process' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <footer className="bg-infinity-blue border-t border-gray-800">
            <div className="container mx-auto px-6 py-12">
                <div className="md:flex md:justify-between items-center text-center md:text-left">
                    <div className="mb-6 md:mb-0">
                        <a href="#" className="flex items-center justify-center md:justify-start space-x-2">
                            <LogoIcon />
                            <span className="text-xl font-bold text-white">3dForge<span className="text-accent-cyan">.</span>studio</span>
                        </a>
                        <p className="mt-2 text-gray-400">Precision 3D Printing & CAD Design</p>
                    </div>
                    <nav className="flex flex-wrap justify-center md:justify-start gap-x-6 gap-y-2">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="text-gray-400 hover:text-accent-cyan transition-colors duration-300">
                                {link.name}
                            </a>
                        ))}
                    </nav>
                </div>
                <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
                    <p>&copy; {new Date().getFullYear()} 3dForge.studio. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
