
// import React, { useState, useMemo } from 'react';
// import { PRODUCTS } from '../constants';
// import ProductCard from '../components/ProductCard';
// import type { Product } from '../types';

// enum SortOption {
//     None = "Default",
//     AlphaAsc = "Alphabetical, A-Z",
//     AlphaDesc = "Alphabetical, Z-A",
//     PriceAsc = "Price, low to high",
//     PriceDesc = "Price, high to low",
// }

// const ShopPage: React.FC = () => {
//     const [sortOption, setSortOption] = useState<SortOption>(SortOption.None);
//     const [inStockOnly, setInStockOnly] = useState(false); // Placeholder for availability filter

//     const sortedProducts = useMemo(() => {
//         let products: Product[] = [...PRODUCTS];

//         // This is a placeholder for actual availability logic
//         if (inStockOnly) {
//             products = products.slice(0, 3); // Mocking some products as out of stock
//         }

//         switch (sortOption) {
//             case SortOption.AlphaAsc:
//                 return products.sort((a, b) => a.name.localeCompare(b.name));
//             case SortOption.AlphaDesc:
//                 return products.sort((a, b) => b.name.localeCompare(a.name));
//             case SortOption.PriceAsc:
//                 return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
//             case SortOption.PriceDesc:
//                 return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
//             case SortOption.None:
//             default:
//                 return products;
//         }
//     }, [sortOption, inStockOnly]);

//     return (
//         <div className="bg-white">
//             <div className="bg-brand-light text-center p-3 text-sm text-brand-dark">
//                 <p>All pre-launch orders will be shipped after 10th July. Thank you for your patience!</p>
//             </div>
//             <div className="container mx-auto px-6 py-12">
//                 <div className="text-center mb-12">
//                     <h1 className="font-serif text-5xl font-bold">Shop</h1>
//                     <p className="mt-2 text-gray-600">Find your perfect tool for productivity and self-care.</p>
//                 </div>

//                 <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
//                     <div className="flex items-center space-x-4">
//                         <label htmlFor="availability" className="flex items-center space-x-2 cursor-pointer">
//                             <input
//                                 type="checkbox"
//                                 id="availability"
//                                 checked={inStockOnly}
//                                 onChange={(e) => setInStockOnly(e.target.checked)}
//                                 className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
//                             />
//                             <span className="text-sm text-gray-700">In Stock Only</span>
//                         </label>
//                     </div>
//                     <div>
//                         <select
//                             value={sortOption}
//                             onChange={(e) => setSortOption(e.target.value as SortOption)}
//                             className="border border-gray-300 rounded-md px-4 py-2 text-sm focus:ring-brand-accent focus:border-brand-accent"
//                         >
//                             {Object.values(SortOption).map(option => (
//                                 <option key={option} value={option}>{option}</option>
//                             ))}
//                         </select>
//                     </div>
//                 </div>

//                 <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//                     {sortedProducts.map(product => (
//                         <ProductCard key={product.id} product={product} />
//                     ))}
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default ShopPage;



import React, { useState, useMemo } from 'react';
import { PRODUCTS } from '../constants';
import ProductCard from '../components/ProductCard';
import type { Product } from '../types';

enum SortOption {
    None = "Default",
    AlphaAsc = "Alphabetical, A-Z",
    AlphaDesc = "Alphabetical, Z-A",
    PriceAsc = "Price, low to high",
    PriceDesc = "Price, high to low",
}

const ShopPage: React.FC = () => {
    const [sortOption, setSortOption] = useState<SortOption>(SortOption.None);
    const [inStockOnly, setInStockOnly] = useState(false); // Placeholder for availability filter

    const sortedProducts = useMemo(() => {
        let products: Product[] = [...PRODUCTS];

        // This is a placeholder for actual availability logic
        if (inStockOnly) {
            products = products.slice(0, 3); // Mocking some products as out of stock
        }

        switch (sortOption) {
            case SortOption.AlphaAsc:
                return products.sort((a, b) => a.name.localeCompare(b.name));
            case SortOption.AlphaDesc:
                return products.sort((a, b) => b.name.localeCompare(a.name));
            case SortOption.PriceAsc:
                return products.sort((a, b) => a.discountedPrice - b.discountedPrice);
            case SortOption.PriceDesc:
                return products.sort((a, b) => b.discountedPrice - a.discountedPrice);
            case SortOption.None:
            default:
                return products;
        }
    }, [sortOption, inStockOnly]);

    return (
        <div className="bg-white">
            <div className="bg-brand-light text-center p-3 text-sm text-brand-dark">
                <p>All pre-launch orders will be shipped after 10th July. Thank you for your patience!</p>
            </div>
            <div className="container mx-auto px-6 py-12">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold">Shop</h1>
                    <p className="mt-2 text-gray-600">Find your perfect tool for productivity and self-care.</p>
                </div>

                <div className="flex flex-col sm:flex-row justify-between items-center mb-8 gap-4">
                    <div className="flex items-center space-x-4">
                        <label htmlFor="availability" className="flex items-center space-x-2 cursor-pointer">
                            <input
                                type="checkbox"
                                id="availability"
                                checked={inStockOnly}
                                onChange={(e) => setInStockOnly(e.target.checked)}
                                className="h-4 w-4 rounded border-gray-300 text-brand-accent focus:ring-brand-accent"
                            />
                            <span className="text-sm text-gray-700">In Stock Only</span>
                        </label>
                    </div>
                    <div className="relative">
                        <select
                            value={sortOption}
                            onChange={(e) => setSortOption(e.target.value as SortOption)}
                            className="appearance-none bg-white border border-gray-300 text-brand-dark rounded-md py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition-all duration-300"
                        >
                            {Object.values(SortOption).map(option => (
                                <option key={option} value={option}>{option}</option>
                            ))}
                        </select>
                        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-500">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="6 9 12 15 18 9"></polyline>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                    {sortedProducts.map(product => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default ShopPage;