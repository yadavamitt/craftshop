import React from 'react';

const ContactPage: React.FC = () => {
    return (
        <div className="bg-brand-light py-16 md:py-24">
            <div className="container mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold">Get in Touch</h1>
                    <p className="mt-2 text-gray-600">We'd love to hear from you. Drop us a line!</p>
                </div>

                <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 bg-white p-8 md:p-12 rounded-lg shadow-lg">
                    {/* Contact Form */}
                    {/* 
                      ACTION REQUIRED: 
                      1. Go to https://formspree.io/ and create a new form.
                      2. Replace "YOUR_UNIQUE_FORM_ID" in the action URL below with your actual form ID.
                    */}
                    <form 
                        action="https://formspree.io/f/YOUR_UNIQUE_FORM_ID" 
                        method="POST"
                        className="space-y-6"
                    >
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">Name</label>
                            <input 
                                type="text" 
                                id="name" 
                                name="name" 
                                placeholder="Enter your full name"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-300" 
                            />
                        </div>
                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">Email</label>
                            <input 
                                type="email" 
                                id="email" 
                                name="email" 
                                placeholder="you@example.com"
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-300" 
                            />
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                            <textarea 
                                id="message" 
                                name="message" 
                                rows={5} 
                                placeholder="Tell us how we can help..."
                                required
                                className="w-full px-4 py-3 bg-gray-50 border border-gray-200 rounded-lg focus:ring-2 focus:ring-brand-accent focus:border-transparent transition-colors duration-300"
                            ></textarea>
                        </div>
                        <div>
                            <button type="submit" className="w-full px-6 py-3 bg-brand-accent text-white font-semibold uppercase tracking-wider rounded-lg shadow-md hover:shadow-lg hover:bg-opacity-90 transition-all duration-300">
                                Send Message
                            </button>
                        </div>
                    </form>

                    {/* Contact Details */}
                    <div className="space-y-8">
                        <h2 className="font-serif text-2xl font-bold text-brand-dark">Contact Information</h2>
                        <div className="space-y-6 text-gray-700">
                            <div className="flex items-center space-x-4">
                               <div className="flex-shrink-0 bg-brand-light p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Email</h3>
                                    <a href="mailto:hello@craftshop.com" className="text-brand-accent hover:underline">hello@craftshop.com</a>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                 <div className="flex-shrink-0 bg-brand-light p-3 rounded-full">
                                 <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Phone</h3>
                                    <p>+91 123 456 7890</p>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <div className="flex-shrink-0 bg-brand-light p-3 rounded-full">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-accent"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                                </div>
                                <div>
                                    <h3 className="font-semibold text-lg">Address</h3>
                                    <p>123 Craft Lane, New Delhi, 110001, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;