// import React from 'react';
// import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
// import HomePage from './pages/HomePage';
// import ShopPage from './pages/ShopPage';
// import OurJourneyPage from './pages/OurJourneyPage';
// import ContactPage from './pages/ContactPage';
// import ProductDetailPage from './pages/ProductDetailPage';

// const ScrollToTop: React.FC = () => {
//   const { pathname } = useLocation();

//   React.useEffect(() => {
//     window.scrollTo(0, 0);
//   }, [pathname]);

//   return null;
// };

// const App: React.FC = () => {
//   return (
//     <HashRouter>
//       <ScrollToTop />
//       <div className="bg-white text-brand-dark font-sans">
//         <Navbar />
//         <main>
//           <Routes>
//             <Route path="/" element={<HomePage />} />
//             <Route path="/shop" element={<ShopPage />} />
//             <Route path="/our-journey" element={<OurJourneyPage />} />
//             <Route path="/contact" element={<ContactPage />} />
//             <Route path="/product/:id" element={<ProductDetailPage />} />
//           </Routes>
//         </main>
//         <Footer />
//       </div>
//     </HashRouter>
//   );
// };

// export default App;

import React from "react";
import { HashRouter, Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import ShopPage from "./pages/ShopPage";
import OurJourneyPage from "./pages/OurJourneyPage";
import ContactPage from "./pages/ContactPage";
import ProductDetailPage from "./pages/ProductDetailPage";
import PrivacyPolicyPage from "./pages/PrivacyPolicyPage";
import TermsOfServicePage from "./pages/TermsOfServicePage";
import CookiePolicyPage from "./pages/CookiePolicyPage";
import ShippingReturnsPage from "./pages/ShippingReturnsPage";

const ScrollToTop: React.FC = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="bg-white text-brand-dark font-sans">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/shop" element={<ShopPage />} />
            <Route path="/our-journey" element={<OurJourneyPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/privacy-policy" element={<PrivacyPolicyPage />} />
            <Route path="/terms-of-service" element={<TermsOfServicePage />} />
            <Route path="/cookie-policy" element={<CookiePolicyPage />} />
            <Route path="/shipping-returns" element={<ShippingReturnsPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </HashRouter>
  );
};

export default App;
