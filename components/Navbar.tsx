import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const NavItem: React.FC<{ to: string; children: React.ReactNode }> = ({ to, children }) => {
    const location = useLocation();
    const isActive = location.pathname === to;

    return (
        <NavLink
            to={to}
            className={`text-sm tracking-wider uppercase relative transition-colors duration-300 ${isActive ? 'text-brand-dark' : 'text-gray-500 hover:text-brand-dark'
                }`}
        >
            {children}
            <span
                className={`absolute bottom-[-4px] left-0 w-full h-[1px] bg-brand-accent transform transition-transform duration-300 ${isActive ? 'scale-x-100' : 'scale-x-0'
                    }`}
            />
        </NavLink>
    );
};


const Navbar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setIsOpen(false);
            }
        };
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);
    
    return (
        <header className="sticky top-0 bg-white bg-opacity-90 backdrop-blur-sm shadow-sm z-50">
            <nav className="container mx-auto px-6 py-4">
                <div className="flex items-center justify-between">
                    <div className="hidden md:flex items-center space-x-8 lg:space-x-12">
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/shop">Shop</NavItem>
                        <NavItem to="/our-journey">Our Journey</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                    </div>
                    <div className="md:absolute md:left-1/2 md:-translate-x-1/2">
                        <NavLink to="/" className="font-serif text-3xl font-bold text-brand-dark">
                            craftshop
                        </NavLink>
                    </div>
                    <div className="hidden md:flex items-center justify-end">
                        <button className="text-gray-500 hover:text-brand-dark transition-colors duration-300">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                        </button>
                    </div>
                    <div className="md:hidden flex items-center">
                        <button onClick={() => setIsOpen(!isOpen)} className="text-brand-dark">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                {isOpen ? <line x1="18" y1="6" x2="6" y2="18"></line> : <line x1="3" y1="12" x2="21" y2="12"></line>}
                                {isOpen ? <line x1="6" y1="6" x2="18" y2="18"></line> : <line x1="3" y1="6" x2="21" y2="6"></line>}
                                {isOpen ? null : <line x1="3" y1="18" x2="21" y2="18"></line>}
                            </svg>
                        </button>
                    </div>
                </div>
                 {/* Mobile Menu */}
                <div className={`md:hidden mt-4 transition-all duration-300 ease-in-out ${isOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
                    <div 
                        className="flex flex-col items-center space-y-4 pt-4 border-t border-gray-200"
                        onClick={() => setIsOpen(false)}
                    >
                        <NavItem to="/">Home</NavItem>
                        <NavItem to="/shop">Shop</NavItem>
                        <NavItem to="/our-journey">Our Journey</NavItem>
                        <NavItem to="/contact">Contact</NavItem>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Navbar;