
import React from 'react';

const ProcessStep: React.FC<{ number: string; title: string; description: string; }> = ({ number, title, description }) => (
    <div className="bg-gray-800/20 border border-gray-700 p-8 rounded-lg shadow-xl transition-all duration-300 hover:border-accent-cyan hover:-translate-y-1">
        <div className="flex items-center gap-6">
            <span className="text-5xl font-extrabold text-accent-cyan/30">{number}</span>
            <div>
                <h3 className="text-2xl font-bold text-accent-cyan mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed">{description}</p>
            </div>
        </div>
    </div>
);

const Process: React.FC = () => {
    const steps = [
        {
            number: '01',
            title: 'Consultation & Quoting',
            description: 'We start by discussing your project goals, requirements, and specifications. Share your ideas or files with us, and we\'ll provide a detailed, transparent quote.',
        },
        {
            number: '02',
            title: 'Design & Modeling',
            description: 'Our skilled team will either create a new 3D model from your concepts or review and optimize your existing CAD files for perfect printability and structural integrity.',
        },
        {
            number: '03',
            title: 'Printing & Production',
            description: 'Using our advanced FDM and Resin printers, we bring your design to life. We monitor the entire process to ensure the highest quality and precision for every layer.',
        },
        {
            number: '04',
            title: 'Finishing & Delivery',
            description: 'After printing, we perform post-processing for a clean finish. Your parts are then carefully packaged and shipped directly to you, ready for use.',
        },
    ];

    return (
        <section id="process" className="py-20 bg-infinity-blue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-extrabold text-white">How It Works</h2>
                    <p className="text-lg text-gray-400 mt-2">Our simple, streamlined process.</p>
                </div>
                <div className="max-w-3xl mx-auto space-y-8">
                    {steps.map((step, index) => (
                        <ProcessStep key={index} {...step} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Process;
