
import React from 'react';

const CTA: React.FC = () => {
    return (
        <section id="contact" className="py-24 bg-infinity-blue border-t border-gray-800">
            <div className="container mx-auto px-6 text-center">
                <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4">
                    Ready to Start Your Project?
                </h2>
                <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 text-gray-300">
                    Have an idea you want to bring to life? Let's talk about it. We offer free consultations and quotes for all projects, big or small.
                </p>
                <a href="mailto:quote@3dforge.studio" className="bg-accent-cyan hover:bg-accent-cyan-dark text-white font-bold py-4 px-10 rounded-full text-lg transition-transform duration-300 transform hover:scale-105 inline-block">
                    Get a Free Quote
                </a>
            </div>
        </section>
    );
};

export default CTA;
