import React, { useState, useEffect, useMemo, useRef } from 'react';
import { Link } from 'react-router-dom';
import { PRODUCTS } from '../constants';
import type { Product } from '../types';

interface SearchModalProps {
    isOpen: boolean;
    onClose: () => void;
}

const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
    const [query, setQuery] = useState('');
    const inputRef = useRef<HTMLInputElement>(null);
    const modalContentRef = useRef<HTMLDivElement>(null);

    // Handle body scroll lock
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = 'hidden';
            // Auto-focus input when modal opens
            setTimeout(() => inputRef.current?.focus(), 100);
        } else {
            document.body.style.overflow = 'auto';
        }
        return () => {
            document.body.style.overflow = 'auto';
        };
    }, [isOpen]);

    // Handle Escape key press
    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === 'Escape') {
                onClose();
            }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [onClose]);

    // Memoize search results
    const filteredProducts = useMemo(() => {
        if (!query.trim()) {
            return [];
        }
        const lowercasedQuery = query.toLowerCase();
        return PRODUCTS.filter(product =>
            product.name.toLowerCase().includes(lowercasedQuery) ||
            product.description.toLowerCase().includes(lowercasedQuery)
        );
    }, [query]);

    if (!isOpen) {
        return null;
    }

    // Reset query on close
    const handleClose = () => {
        setQuery('');
        onClose();
    };

    return (
        <div
            className={`fixed inset-0 bg-black z-[100] flex justify-center items-start pt-20 sm:pt-24 transition-opacity duration-300 ease-in-out ${isOpen ? 'bg-opacity-50' : 'bg-opacity-0'}`}
            onClick={handleClose}
            aria-modal="true"
            role="dialog"
        >
            <div
                ref={modalContentRef}
                className={`relative bg-white w-11/12 max-w-2xl rounded-lg shadow-2xl p-6 transform transition-all duration-300 ease-in-out ${isOpen ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}`}
                onClick={e => e.stopPropagation()}
            >
                {/* Search Input */}
                <div className="relative">
                    <input
                        ref={inputRef}
                        type="text"
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        placeholder="Search for planners, journals..."
                        className="w-full pl-12 pr-12 py-3 text-base sm:text-lg bg-white border border-gray-300 rounded-md text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all"
                        aria-label="Search products"
                    />
                    <div className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                    </div>
                    <button onClick={handleClose} className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-brand-dark transition-colors" aria-label="Close search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                    </button>
                </div>

                {/* Search Results */}
                <div className="mt-6 max-h-[60vh] overflow-y-auto pr-2">
                    {query.trim() && filteredProducts.length === 0 && (
                        <div className="text-center py-8">
                            <p className="text-gray-600">No results found for "{query}"</p>
                            <p className="text-sm text-gray-400 mt-2">Try searching for something else.</p>
                        </div>
                    )}
                    {filteredProducts.length > 0 && (
                        <ul className="space-y-4">
                            {filteredProducts.map(product => (
                                <li key={product.id}>
                                    <Link
                                        to={`/product/${product.id}`}
                                        onClick={handleClose}
                                        className="flex items-center p-3 -m-3 rounded-lg hover:bg-brand-light transition-colors duration-200 group"
                                    >
                                        <img src={product.imageUrl} alt={product.name} className="w-16 h-20 object-cover rounded-md mr-4 flex-shrink-0" />
                                        <div>
                                            <p className="font-semibold text-brand-dark group-hover:text-brand-accent">{product.name}</p>
                                            <p className="text-sm text-gray-500">₹{product.discountedPrice.toLocaleString()}</p>
                                        </div>
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    )}
                    {!query.trim() && (
                        <div className="text-center py-8">
                            <p className="text-gray-600">Start typing to see results</p>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default SearchModal;