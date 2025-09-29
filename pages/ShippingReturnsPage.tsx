
import React from 'react';

const PageSection: React.FC<{ title: string; children: React.ReactNode }> = ({ title, children }) => (
    <div className="mb-8">
        <h2 className="font-serif text-2xl font-bold text-brand-dark mb-4">{title}</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
            {children}
        </div>
    </div>
);

const ShippingReturnsPage: React.FC = () => {
    return (
        <div className="bg-white py-16 md:py-24">
            <div className="container mx-auto px-6 max-w-4xl">
                <div className="text-center mb-12">
                    <h1 className="font-serif text-5xl font-bold">Shipping & Returns</h1>
                     <p className="mt-2 text-gray-600">Information about our shipping and return policies.</p>
                </div>

                <div className="prose lg:prose-lg max-w-none">
                    <PageSection title="Shipping Policy">
                        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Order Processing</h3>
                        <p>All orders are processed within 1-3 business days. Orders are not shipped or delivered on weekends or holidays. Please note that pre-launch items have a specific shipping date mentioned on the product page.</p>
                        
                        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Shipping Rates & Delivery Estimates</h3>
                        <p>Shipping charges for your order will be calculated and displayed at checkout. Delivery estimates will be provided once your order is shipped.</p>

                        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Shipment Confirmation & Order Tracking</h3>
                        <p>You will receive a shipment confirmation email once your order has shipped containing your tracking number(s). The tracking number will be active within 24 hours.</p>
                    </PageSection>

                    <PageSection title="Returns Policy">
                        <p>We want you to be happy with your purchase. If you are not completely satisfied, you may return the item within 14 days of receiving it for a full refund or exchange, provided it is in its original, unused condition.</p>
                        
                        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Return Process</h3>
                        <p>To initiate a return, please email us at <a href="mailto:hello@craftshop.com" className="text-brand-accent hover:underline">hello@craftshop.com</a> with your order number and reason for return. We will provide you with instructions on how to send back your item.</p>

                        <h3 className="text-xl font-semibold text-brand-dark mt-6 mb-2">Refunds</h3>
                        <p>Once we receive your item, we will inspect it and notify you that we have received your returned item. We will immediately notify you on the status of your refund after inspecting the item. If your return is approved, we will initiate a refund to your original method of payment.</p>
                    </PageSection>
                </div>
            </div>
        </div>
    );
};

export default ShippingReturnsPage;
