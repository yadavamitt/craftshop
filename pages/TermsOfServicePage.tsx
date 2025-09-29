
import React from 'react';

const PageSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
        </div>
    </div>
);

const TermsOfServicePage: React.FC = () => {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold">Terms of Service</h1>
                    <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="prose lg:prose-lg max-w-none">
                    <PageSection title="1. Agreement to Terms">
                        <p>By using our website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our site. We reserve the right to modify these terms at any time. Your continued use of the site following the posting of changes will mean that you accept and agree to the changes.</p>
                    </PageSection>

                    <PageSection title="2. Products and Services">
                        <p>All products are subject to availability, and we reserve the right to impose quantity limits on any order, to reject all or part of an order, and to discontinue products without notice, even if you have already placed your order. All prices are shown in INR and are subject to change without notice.</p>
                    </PageSection>

                    <PageSection title="3. User Accounts">
                        <p>You may be required to create an account to access some features of our website. You are responsible for maintaining the confidentiality of your account information and for all activities that occur under your account. You agree to notify us immediately of any unauthorized use of your account.</p>
                    </PageSection>

                    <PageSection title="4. Intellectual Property">
                        <p>All content on this website, including text, graphics, logos, and images, is the property of craftshop or its content suppliers and is protected by international copyright laws. The compilation of all content on this site is the exclusive property of craftshop.</p>
                    </PageSection>

                    <PageSection title="5. Governing Law">
                         <p>These Terms of Service and any separate agreements whereby we provide you Services shall be governed by and construed in accordance with the laws of India and jurisdiction of New Delhi.</p>
                    </PageSection>
                </div>
            </div>
        </div>
    );
};

export default TermsOfServicePage;
