
import React from 'react';

const TestimonialCard: React.FC<{ quote: string; author: string; company: string }> = ({ quote, author, company }) => (
    <div className="bg-gray-800/20 border border-gray-700 p-8 rounded-lg">
        <p className="text-gray-300 italic mb-6">"{quote}"</p>
        <div className="font-bold text-accent-cyan">{author}</div>
        <div className="text-sm text-gray-400">{company}</div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonials = [
        {
            quote: "The quality and speed from 3dForge.studio were outstanding. They turned our prototype around in days, not weeks. A total game-changer for our development process.",
            author: "Jane Doe",
            company: "Innovatech Startups"
        },
        {
            quote: "I was blown away by the detail in the final print. The CAD design service was also incredibly helpful in refining our initial concept into something truly printable and functional.",
            author: "John Smith",
            company: "Mechanical Solutions Inc."
        },
        {
            quote: "Professional, communicative, and delivered a product that exceeded my expectations. I highly recommend 3dForge.studio for any custom 3D printing needs.",
            author: "Emily White",
            company: "Independent Inventor"
        }
    ];

    return (
        <section id="testimonials" className="py-20 bg-infinity-blue">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-white">What Our Clients Say</h2>
                    <p className="text-lg text-gray-400 mt-2">Real feedback from real projects.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} {...testimonial} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
