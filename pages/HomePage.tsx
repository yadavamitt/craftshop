import React, { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';

const heroSlides = [
    {
        title: "Pre-Launch Exclusive",
        subtitle: "The Ultimate Unwinding Kit",
        imageUrl: "https://placehold.co/1920x1080/FFF7F0/3A3A3A?text=Handcrafted+Journals"
    },
    {
        title: "Mindful Moments",
        subtitle: "Our New Guided Journal",
        imageUrl: "https://placehold.co/1920x1080/FFF7F0/3A3A3A?text=Cozy+Desk+Setup"
    },
    {
        title: "Coming Soon",
        subtitle: "A New Way to Plan Your Life",
        imageUrl: "https://placehold.co/1920x1080/FFF7F0/3A3A3A?text=Creative+Planning"
    }
];

const HeroSlider: React.FC = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const slideDuration = 3000; // 3 seconds

    const nextSlide = useCallback(() => {
        setCurrentIndex(prevIndex => (prevIndex + 1) % heroSlides.length);
    }, []);

    useEffect(() => {
        const slideInterval = setInterval(nextSlide, slideDuration);
        return () => clearInterval(slideInterval);
    }, [nextSlide]);

    return (
        <div className="relative h-[80vh] w-full overflow-hidden text-white">
            <style>
                {`
                    @keyframes fillProgress {
                        from { width: 0%; }
                        to { width: 100%; }
                    }
                    .progress-bar-fill-active {
                        animation: fillProgress ${slideDuration}ms linear;
                        animation-fill-mode: forwards;
                    }
                `}
            </style>

            {heroSlides.map((slide, index) => (
                <div
                    key={index}
                    className={`absolute inset-0 transition-opacity duration-1000 ${index === currentIndex ? 'opacity-100' : 'opacity-0'}`}
                >
                    <img src={slide.imageUrl} alt={slide.title} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                </div>
            ))}

            <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
                <h2 className="font-serif text-4xl md:text-6xl lg:text-7xl font-bold leading-tight drop-shadow-lg">{heroSlides[currentIndex].subtitle}</h2>
                <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-md">{heroSlides[currentIndex].title}</p>
                <Link to="/shop" className="mt-8 px-8 py-3 bg-brand-accent text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300 transform hover:scale-105">
                    Discover
                </Link>
            </div>
            
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 w-11/12 max-w-lg flex items-center space-x-2">
                {heroSlides.map((_, index) => (
                    <div key={index} className="flex-1 h-1 bg-white/20 rounded-full overflow-hidden">
                       {index < currentIndex ? (
                            <div className="h-1 bg-white w-full"></div>
                        ) : index === currentIndex ? (
                            <div key={currentIndex} className="h-1 bg-white progress-bar-fill-active"></div>
                        ) : (
                            <div className="h-1 bg-white w-0"></div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

const HomePage: React.FC = () => {
    return (
        <div>
            <HeroSlider />

            <section className="py-20 bg-brand-light">
                <div className="container mx-auto px-6">
                    <div className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
                        <div className="w-full md:w-1/2">
                            <img src="https://placehold.co/600x700/FFF7F0/3A3A3A?text=Craft+Supplies" alt="World of Balance" className="rounded-lg shadow-xl" />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">A World of Balance.</h2>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                We believe life is a delicate balance between ambition and well-being. Our mission is to provide you with beautifully crafted tools that inspire productivity while nurturing your soul.
                            </p>
                            <Link to="/our-journey" className="mt-8 inline-block px-8 py-3 border border-brand-accent text-brand-accent font-semibold uppercase tracking-wider rounded-lg hover:bg-brand-accent hover:text-white transition-all duration-300">
                                Discover Now
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
            
            <section className="py-20 bg-white">
                <div className="container mx-auto px-6">
                     <div className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
                        <div className="w-full md:w-1/2">
                            <img src="https://placehold.co/600x700/FFF7F0/3A3A3A?text=Person+Journaling" alt="Join the journey" className="rounded-lg shadow-xl" />
                        </div>
                        <div className="w-full md:w-1/2 text-center md:text-left">
                            <h2 className="font-serif text-4xl lg:text-5xl font-bold text-brand-dark">Join The Journey.</h2>
                            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
                                Explore our collection of planners and journals, thoughtfully designed to blend productivity with self-care. Start your journey towards a more organized and mindful life today.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                    <div className="text-center mb-12">
                        <h2 className="font-serif text-4xl font-bold text-brand-dark">Featured Products</h2>
                        <p className="mt-2 text-gray-600">Handpicked essentials for your desk and your mind.</p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                        {PRODUCTS.slice(0, 4).map(product => (
                            <ProductCard key={product.id} product={product} />
                        ))}
                    </div>
                     <div className="text-center mt-12">
                        <Link to="/shop" className="mt-8 inline-block px-8 py-3 bg-brand-accent text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                            View All Products
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default HomePage;