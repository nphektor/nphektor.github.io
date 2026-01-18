
import React from 'react';

const ServiceCard: React.FC<{ icon: React.ReactNode; title: string; description: string }> = ({ icon, title, description }) => (
    <div className="bg-gray-800/20 border border-gray-700 p-8 rounded-lg shadow-xl text-center transition-all duration-300 hover:border-accent-cyan hover:-translate-y-2">
        <div className="flex justify-center items-center mb-6">
            <div className="bg-accent-cyan/10 p-4 rounded-full">
                {icon}
            </div>
        </div>
        <h3 className="text-2xl font-bold mb-3 text-accent-cyan">{title}</h3>
        <p className="text-gray-300">{description}</p>
    </div>
);

const PrinterIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H5a2 2 0 00-2 2v4a2 2 0 002 2h2m2 4h6a2 2 0 002-2v-4a2 2 0 00-2-2H9a2 2 0 00-2 2v4a2 2 0 002 2zm8-12V5a2 2 0 00-2-2H9a2 2 0 00-2 2v4h10z" />
    </svg>
);

const CadIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2m0 14v2m8-11h-2M5 12H3" />
    </svg>
);

const RocketIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-10 w-10 text-accent-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M13 10V3L4 14h7v7l9-11h-7z" />
    </svg>
);


const Services: React.FC = () => {
    const services = [
        {
            icon: <PrinterIcon />,
            title: 'FDM & Resin Printing',
            description: 'High-resolution 3D printing using a wide variety of materials to match your project\'s needs for strength, detail, and flexibility.',
        },
        {
            icon: <CadIcon />,
            title: 'Custom CAD Design',
            description: 'Our expert designers turn your sketches, ideas, or existing objects into precise, manufacturable 3D models ready for printing.',
        },
        {
            icon: <RocketIcon />,
            title: 'Rapid Prototyping',
            description: 'Accelerate your development cycle. We offer quick turnaround times for prototypes, allowing for fast iteration and product validation.',
        },
    ];

    return (
        <section id="services" className="py-20 bg-infinity-blue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">Our Services</h2>
                    <p className="text-lg text-gray-400 mt-2">What we can do for you.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard key={index} {...service} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
