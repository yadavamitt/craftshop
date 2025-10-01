
// // import React from 'react';
// // import { Link } from 'react-router-dom';

// // const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
// //     <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors duration-300">
// //         {children}
// //     </a>
// // );

// // const Footer: React.FC = () => {
// //     return (
// //         <footer className="bg-gray-50 border-t border-gray-200">
// //             <div className="container mx-auto px-6 py-12">
// //                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
// //                     {/* About Us */}
// //                     <div className="col-span-1 md:col-span-2 lg:col-span-1">
// //                         <h3 className="font-serif text-xl font-bold mb-4">craftshop</h3>
// //                         <p className="text-gray-600 text-sm">Crafting tools for a balanced life, where ambition and well-being coexist.</p>
// //                     </div>

// //                     {/* Policies */}
// //                     <div>
// //                         <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Policies</h4>
// //                         <ul className="space-y-2 text-sm text-gray-600">
// //                             <li><Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
// //                             <li><Link to="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
// //                             <li><Link to="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
// //                             <li><Link to="/shipping-returns" className="hover:text-brand-accent transition-colors">Shipping & Returns</Link></li>
// //                         </ul>
// //                     </div>

// //                     {/* Newsletter */}
// //                     <div>
// //                         <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Join our journey</h4>
// //                         <p className="text-sm text-gray-600 mb-3">Get exclusive offers and news about our latest products.</p>
// //                         <form className="flex">
// //                             <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-brand-accent focus:border-brand-accent transition bg-white text-brand-dark" />
// //                             <button type="submit" className="bg-brand-accent text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
// //                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
// //                             </button>
// //                         </form>
// //                     </div>

// //                     {/* Social Media */}
// //                     <div>
// //                         <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Follow Us</h4>
// //                         <div className="flex space-x-4">
// //                             <SocialIcon href="#">
// //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
// //                             </SocialIcon>
// //                              <SocialIcon href="#">
// //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
// //                             {/* FIX: Corrected closing tag from </Icon> to </SocialIcon> */}
// //                             </SocialIcon>
// //                             <SocialIcon href="#">
// //                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
// //                             </SocialIcon>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
// //                     <p>&copy; {new Date().getFullYear()} craftshop. All Rights Reserved.</p>
// //                 </div>
// //             </div>
// //         </footer>
// //     );
// // };

// // export default Footer;



// import React from 'react';
// import { Link } from 'react-router-dom';

// const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
//     <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors duration-300">
//         {children}
//     </a>
// );

// const Footer: React.FC = () => {
//     return (
//         <footer className="bg-gray-50 border-t border-gray-200">
//             <div className="container mx-auto px-6 py-12">
//                 <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
//                     {/* About Us */}
//                     <div className="col-span-1 md:col-span-2 lg:col-span-1">
//                         <h3 className="font-serif text-xl font-bold mb-4">craftshop</h3>
//                         <p className="text-gray-600 text-sm">Crafting tools for a balanced life, where ambition and well-being coexist.</p>
//                     </div>

//                     {/* Policies */}
//                     <div>
//                         <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Policies</h4>
//                         <ul className="space-y-2 text-sm text-gray-600">
//                             <li><Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
//                             <li><Link to="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
//                             <li><Link to="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
//                             <li><Link to="/shipping-returns" className="hover:text-brand-accent transition-colors">Shipping & Returns</Link></li>
//                         </ul>
//                     </div>

//                     {/* Newsletter */}
//                     <div>
//                         <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Join our journey</h4>
//                         <p className="text-sm text-gray-600 mb-3">Get exclusive offers and news about our latest products.</p>
//                         <form className="flex">
//                             <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-sm border border-gray-300 rounded-l-md focus:ring-brand-accent focus:border-brand-accent transition bg-white text-brand-dark" />
//                             <button type="submit" className="bg-brand-accent text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
//                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
//                             </button>
//                         </form>
//                     </div>

//                     {/* Social Media */}
//                     <div>
//                         <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Follow Us</h4>
//                         <div className="flex space-x-4">
//                             <SocialIcon href="#">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
//                             </SocialIcon>
//                              <SocialIcon href="#">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
//                             {/* FIX: Corrected closing tag from </Icon> to </SocialIcon> */}
//                             </SocialIcon>
//                             <SocialIcon href="#">
//                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
//                             </SocialIcon>
//                         </div>
//                     </div>
//                 </div>

//                 <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
//                     <p>&copy; {new Date().getFullYear()} craftshop. All Rights Reserved.</p>
//                 </div>
//             </div>
//         </footer>
//     );
// };

// export default Footer;



import React from 'react';
import { Link } from 'react-router-dom';

const SocialIcon: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
    <a href={href} target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-brand-accent transition-colors duration-300">
        {children}
    </a>
);

const Footer: React.FC = () => {
    return (
        <footer className="bg-gray-50 border-t border-gray-200">
            <div className="container mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* About Us */}
                    <div className="col-span-1 md:col-span-2 lg:col-span-1">
                        <h3 className="font-serif text-xl font-bold mb-4">craftshop</h3>
                        <p className="text-gray-600 text-sm">Crafting tools for a balanced life, where ambition and well-being coexist.</p>
                    </div>

                    {/* Policies */}
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Policies</h4>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li><Link to="/privacy-policy" className="hover:text-brand-accent transition-colors">Privacy Policy</Link></li>
                            <li><Link to="/terms-of-service" className="hover:text-brand-accent transition-colors">Terms of Service</Link></li>
                            <li><Link to="/cookie-policy" className="hover:text-brand-accent transition-colors">Cookie Policy</Link></li>
                            <li><Link to="/shipping-returns" className="hover:text-brand-accent transition-colors">Shipping & Returns</Link></li>
                        </ul>
                    </div>

                    {/* Newsletter */}
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Join our journey</h4>
                        <p className="text-sm text-gray-600 mb-3">Get exclusive offers and news about our latest products.</p>
                        <form className="flex">
                            <input type="email" placeholder="Your email" className="w-full px-4 py-2 text-sm bg-white border border-gray-300 rounded-l-md text-brand-dark placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-brand-accent/50 focus:border-brand-accent transition" />
                            <button type="submit" className="bg-brand-accent text-white px-4 py-2 rounded-r-md hover:bg-opacity-90 transition-colors">
                               <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                            </button>
                        </form>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="font-semibold tracking-wider uppercase text-gray-800 mb-4">Follow Us</h4>
                        <div className="flex space-x-4">
                            <SocialIcon href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
                            </SocialIcon>
                             <SocialIcon href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
                            {/* FIX: Corrected closing tag from </Icon> to </SocialIcon> */}
                            </SocialIcon>
                            <SocialIcon href="#">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path></svg>
                            </SocialIcon>
                        </div>
                    </div>
                </div>

                <div className="mt-12 border-t border-gray-200 pt-6 text-center text-sm text-gray-500">
                    <p>&copy; {new Date().getFullYear()} craftshop. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;