// src/App.jsx
import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

// Layout
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';

// Pages
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesHubPage from './pages/ServicesHubPage';
import ServiceDetailPage from './pages/ServiceDetailPage';
import IndustriesPage from './pages/IndustriesPage';
import IndustryDetailPage from './pages/IndustryDetailPage';
import CaseStudiesPage from './pages/CaseStudiesPage';
import ProductsPage from './pages/ProductsPage';
import BlogPage from './pages/BlogPage';
import BlogDetailPage from './pages/BlogDetailPage';
import CareersPage from './pages/CareersPage';
import PartnerPage from './pages/PartnerPage';
import ContactPage from './pages/ContactPage';
import NotFoundPage from './pages/NotFoundPage';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant'
    });
  }, [pathname]);

  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50 text-slate-900 selection:bg-indigo-500 selection:text-white">
        <Navbar />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about-us" element={<AboutPage />} />
            
            {/* Services Hub & Dynamic Pillar / Subservice Detail Routes */}
            <Route path="/services" element={<ServicesHubPage />} />
            <Route path="/services/:pillar" element={<ServiceDetailPage />} />
            <Route path="/services/:pillar/:id" element={<ServiceDetailPage />} />

            {/* Industries Hub & Sector Detail Routes */}
            <Route path="/industries" element={<IndustriesPage />} />
            <Route path="/industries/:id" element={<IndustryDetailPage />} />

            {/* Case Studies */}
            <Route path="/case-studies" element={<CaseStudiesPage />} />

            {/* Products & Whitepapers */}
            <Route path="/products" element={<ProductsPage />} />

            {/* Blog Hub & Article Detail */}
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:slug" element={<BlogDetailPage />} />

            {/* Careers & Staff Augmentation */}
            <Route path="/careers" element={<CareersPage />} />

            {/* Partner Program */}
            <Route path="/partner" element={<PartnerPage />} />

            {/* Contact & Consultation */}
            <Route path="/contact" element={<ContactPage />} />

            {/* 404 Fallback */}
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
