
import React from 'react';

const PageSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
        </div>
    </div>
);

const PrivacyPolicyPage: React.FC = () => {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold">Privacy Policy</h1>
                    <p className="mt-2 text-gray-600">Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
                </div>

                <div className="prose lg:prose-lg max-w-none">
                    <PageSection title="1. Introduction">
                        <p>Welcome to craftshop. We are committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website. Please read this privacy policy carefully. If you do not agree with the terms of this privacy policy, please do not access the site.</p>
                    </PageSection>

                    <PageSection title="2. Information We Collect">
                        <p>We may collect information about you in a variety of ways. The information we may collect on the Site includes:</p>
                        <ul className="list-disc pl-6">
                            <li><strong>Personal Data:</strong> Personally identifiable information, such as your name, shipping address, email address, and telephone number, and demographic information, such as your age, gender, hometown, and interests, that you voluntarily give to us when you register with the Site or when you choose to participate in various activities related to the Site, such as online chat and message boards.</li>
                            <li><strong>Derivative Data:</strong> Information our servers automatically collect when you access the Site, such as your IP address, your browser type, your operating system, your access times, and the pages you have viewed directly before and after accessing the Site.</li>
                        </ul>
                    </PageSection>

                    <PageSection title="3. Use of Your Information">
                        <p>Having accurate information about you permits us to provide you with a smooth, efficient, and customized experience. Specifically, we may use information collected about you via the Site to:</p>
                        <ul className="list-disc pl-6">
                            <li>Create and manage your account.</li>
                            <li>Email you regarding your account or order.</li>
                            <li>Fulfill and manage purchases, orders, payments, and other transactions related to the Site.</li>
                            <li>Process payments and refunds.</li>
                            <li>Request feedback and contact you about your use of the Site.</li>
                        </ul>
                    </PageSection>
                    
                     <PageSection title="4. Data Security">
                        <p>We use administrative, technical, and physical security measures to help protect your personal information. While we have taken reasonable steps to secure the personal information you provide to us, please be aware that despite our efforts, no security measures are perfect or impenetrable, and no method of data transmission can be guaranteed against any interception or other type of misuse.</p>
                    </PageSection>

                    <PageSection title="5. Contact Us">
                        <p>If you have questions or comments about this Privacy Policy, please contact us at:</p>
                        <p>
                            craftshop<br />
                            123 Craft Lane, New Delhi, 110001, India<br />
                            <a href="mailto:hello@craftshop.com" className="text-brand-accent hover:underline">hello@craftshop.com</a>
                        </p>
                    </PageSection>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicyPage;
