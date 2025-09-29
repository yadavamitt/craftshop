import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { PRODUCTS } from '../constants';

const ProductDetailPage: React.FC = () => {
    const { id } = useParams<{ id: string }>();
    const product = PRODUCTS.find(p => p.id === Number(id));
    
    // Initialize state with the first image from the product's image array, or fallback to the main imageUrl
    const [mainImage, setMainImage] = useState(product?.images?.[0] || product?.imageUrl);

    // Effect to update mainImage if the product `id` changes
    React.useEffect(() => {
        const product = PRODUCTS.find(p => p.id === Number(id));
        setMainImage(product?.images?.[0] || product?.imageUrl);
    }, [id]);

    if (!product) {
        return <div className="text-center py-20">Product not found.</div>;
    }

    return (
        <div className="container mx-auto px-6 py-12 md:py-20">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                {/* Image Gallery */}
                <div>
                    <div className="aspect-square w-full overflow-hidden rounded-lg shadow-lg mb-4">
                        <img src={mainImage} alt={product.name} className="w-full h-full object-cover transition-transform duration-300 hover:scale-105" />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {product.images.map((img, index) => (
                            <div key={index} className={`aspect-square overflow-hidden rounded-md cursor-pointer border-2 ${mainImage === img ? 'border-brand-accent' : 'border-transparent'}`} onClick={() => setMainImage(img)}>
                                <img src={img} alt={`${product.name} thumbnail ${index + 1}`} className="w-full h-full object-cover" />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div>
                    <h1 className="font-serif text-4xl md:text-5xl font-bold text-brand-dark">{product.name}</h1>
                    <p className="mt-2 text-lg text-gray-500">{product.vendor}</p>

                    <div className="mt-6 flex items-baseline space-x-3">
                        <p className="text-3xl font-bold text-brand-dark">₹{product.discountedPrice.toLocaleString()}</p>
                        <p className="text-xl text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
                        <span className="px-2 py-1 bg-green-100 text-green-700 text-sm font-semibold rounded-md">{product.discountPercentage}% OFF</span>
                    </div>

                    <p className="mt-6 text-gray-700 leading-relaxed">{product.description}</p>
                    
                    <div className="mt-8 bg-brand-light p-4 rounded-lg">
                        <h3 className="font-semibold text-brand-dark">Pre-launch Shipping</h3>
                        <p className="text-sm text-gray-600 mt-1">Please note: This is a pre-launch item. All orders containing this product will be shipped after 10th July.</p>
                    </div>

                    <div className="mt-8 flex flex-col sm:flex-row gap-4">
                        {/* <button className="w-full px-8 py-4 bg-brand-accent text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                            Add to Cart
                        </button>
                        <button className="w-full px-8 py-4 bg-brand-dark text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                            Buy Now
                        </button> */}



                        <button
                            onClick={() => window.open("https://www.instagram.com/_amityadav/", "_blank")}
                            className="w-full px-8 py-4 bg-brand-accent text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300"
                            >
                            Please Contact through Instagram
                        </button>

                        {/* <button className="w-full px-8 py-4 bg-brand-accent text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                            Please Contact through Instagram
                        </button> */}

                        {/* <a
                            href="https://www.instagram.com/thecuratedstore/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full px-8 py-4 bg-brand-dark text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center"
                            >
                            @thecraftstore
                        </a> */}

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetailPage;