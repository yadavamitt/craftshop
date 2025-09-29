import React from 'react';
import type { Product } from '../types';
import { Link } from 'react-router-dom';

interface ProductCardProps {
    product: Product;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
    return (
        <Link to={`/product/${product.id}`} className="group block bg-white p-4 rounded-lg shadow-sm hover:shadow-xl transition-shadow duration-300 border border-gray-100">
            <div className="overflow-hidden rounded-md">
                <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-auto object-cover aspect-[4/5] group-hover:scale-105 transition-transform duration-500"
                />
            </div>
            <div className="mt-4 text-center">
                <h3 className="text-sm text-gray-500">{product.vendor}</h3>
                <p className="mt-1 text-base font-medium text-brand-dark group-hover:text-brand-accent transition-colors">{product.name}</p>
                <div className="mt-2 flex justify-center items-baseline space-x-2">
                    <p className="text-lg font-semibold text-brand-dark">₹{product.discountedPrice.toLocaleString()}</p>
                    <p className="text-sm text-gray-400 line-through">₹{product.originalPrice.toLocaleString()}</p>
                    <p className="text-xs font-bold text-green-600">{product.discountPercentage}% OFF</p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;