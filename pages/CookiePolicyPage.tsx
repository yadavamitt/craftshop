
import React from 'react';

const PageSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
        </div>
    </div>
);

const CookiePolicyPage: React.FC = () => {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold">Cookie Policy</h1>
                    <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="prose lg:prose-lg max-w-none">
                    <PageSection title="1. What Are Cookies?">
                        <p>Cookies are small text files that are placed on your computer or mobile device when you visit a website. They are widely used to make websites work, or work more efficiently, as well as to provide information to the owners of the site.</p>
                    </PageSection>

                    <PageSection title="2. How We Use Cookies">
                        <p>We use cookies to enhance your browsing experience by:</p>
                        <ul className="list-disc pl-6">
                            <li>Remembering your preferences and settings.</li>
                            <li>Keeping you signed in.</li>
                            <li>Understanding how you use our website.</li>
                            <li>Helping us to improve our website and services.</li>
                        </ul>
                    </PageSection>

                    <PageSection title="3. Types of Cookies We Use">
                         <p>We use both session cookies (which expire once you close your web browser) and persistent cookies (which stay on your device for a set period of time or until you delete them). We use the following types of cookies:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Essential Cookies:</strong> These cookies are necessary for the website to function and cannot be switched off in our systems. They are usually only set in response to actions made by you which amount to a request for services, such as setting your privacy preferences, logging in or filling in forms.</li>
                            <li><strong>Performance Cookies:</strong> These cookies allow us to count visits and traffic sources so we can measure and improve the performance of our site.</li>
                            <li><strong>Functionality Cookies:</strong> These cookies enable the website to provide enhanced functionality and personalization.</li>
                        </ul>
                    </PageSection>

                    <PageSection title="4. Managing Cookies">
                        <p>You can control and/or delete cookies as you wish. You can delete all cookies that are already on your computer and you can set most browsers to prevent them from being placed. If you do this, however, you may have to manually adjust some preferences every time you visit a site and some services and functionalities may not work.</p>
                    </PageSection>
                </div>
            </div>
        </div>
    );
};

export default CookiePolicyPage;
