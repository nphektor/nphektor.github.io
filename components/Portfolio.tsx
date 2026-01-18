
import React from 'react';

const PortfolioItem: React.FC<{ imageUrl: string; title: string }> = ({ imageUrl, title }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg">
        <img src={imageUrl} alt={title} className="w-full h-full object-cover aspect-square transition-transform duration-500 group-hover:scale-110" />
        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-60 transition-all duration-500 flex items-center justify-center">
            <h3 className="text-white text-xl font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-500">{title}</h3>
        </div>
    </div>
);

const Portfolio: React.FC = () => {
    const items = [
        { imageUrl: 'https://picsum.photos/600/600?random=6', title: 'Mechanical Prototype' },
        { imageUrl: 'https://picsum.photos/600/600?random=7', title: 'Architectural Model' },
        { imageUrl: 'https://picsum.photos/600/600?random=8', title: 'Custom Enclosure' },
        { imageUrl: 'https://picsum.photos/600/600?random=9', title: 'Artistic Sculpture' },
        { imageUrl: 'https://picsum.photos/600/600?random=10', title: 'Product Casing' },
        { imageUrl: 'https://picsum.photos/600/600?random=11', title: 'Functional Part' },
    ];

    return (
        <section id="portfolio" className="py-20 bg-light-walnut">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-extrabold text-infinity-blue">Our Work</h2>
                    <p className="text-lg text-infinity-blue/80 mt-2">A glimpse into our capabilities.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {items.map((item, index) => (
                        <PortfolioItem key={index} {...item} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Portfolio;
