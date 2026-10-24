// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brandConfig, servicePillars } from '../../data/siteContent';
import MegaMenu from './MegaMenu';
import { ChevronDown, Headset, Menu, X, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [megaOpen, setMegaOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on route change
  useEffect(() => {
    setMegaOpen(false);
    setMobileOpen(false);
    setMobileServicesOpen(false);
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Industries', path: '/industries' },
    { name: 'Case Studies', path: '/case-studies' },
    { name: 'Products', path: '/products' },
    { name: 'Blog', path: '/blog' },
    { name: 'Careers', path: '/careers' },
    { name: 'Partner', path: '/partner' },
    { name: 'Contact', path: '/contact' }
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-slate-900/95 shadow-2xl border-b border-white/10 py-3' 
          : 'bg-slate-900/80 backdrop-blur-md border-b border-white/5 py-4'
      }`}
      style={{
        backdropFilter: 'blur(16px)',
        WebkitBackdropFilter: 'blur(16px)'
      }}
    >
      <div className="max-w-[1536px] mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Brand Logo & Name - Left-Shift Oriented */}
        <Link to="/" className="flex items-center gap-3.5 group flex-shrink-0">
          <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center p-1 shadow-md border-2 border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden">
            <img 
              src={brandConfig.logoLight} 
              alt={brandConfig.companyName} 
              className="w-full h-full object-contain scale-110"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>
          <div className="flex flex-col">
            <span className="text-lg xl:text-xl font-extrabold text-white tracking-tight flex items-center gap-0.5">
              SynX<span className="text-indigo-400">Cloud</span>
            </span>
            <span className="text-[9px] uppercase font-bold text-slate-300 tracking-wider hidden sm:block -mt-0.5">
              Consultancy Services
            </span>
          </div>
        </Link>

        {/* Right-Shift Oriented: Desktop Navigation Links + CTA Button */}
        <div className="hidden lg:flex items-center gap-3 xl:gap-5 ml-auto">
          <Link 
            to="/" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname === '/' ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Home
          </Link>

          <Link 
            to="/about-us" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname === '/about-us' ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            About Us
          </Link>

          {/* Services with Mega Menu Trigger */}
          <div 
            className="relative"
            onMouseEnter={() => setMegaOpen(true)}
          >
            <button 
              type="button"
              onClick={() => setMegaOpen(!megaOpen)}
              className={`flex items-center gap-1 text-xs xl:text-sm font-semibold py-1 px-1.5 rounded-lg transition-colors ${
                location.pathname.startsWith('/services') ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
              }`}
            >
              <span>Services</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${megaOpen ? 'rotate-180' : ''}`} />
            </button>

            {megaOpen && <MegaMenu onClose={() => setMegaOpen(false)} />}
          </div>

          <Link 
            to="/industries" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname.startsWith('/industries') ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Industries
          </Link>

          <Link 
            to="/case-studies" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname === '/case-studies' ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Case Studies
          </Link>

          <Link 
            to="/products" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname === '/products' ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Products
          </Link>

          <Link 
            to="/blog" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname.startsWith('/blog') ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Blog
          </Link>

          <Link 
            to="/careers" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname === '/careers' ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Careers
          </Link>

          <Link 
            to="/partner" 
            className={`text-xs xl:text-sm font-semibold transition-colors py-1 px-1.5 rounded-lg ${
              location.pathname === '/partner' ? 'text-indigo-400 font-bold bg-white/5' : 'text-slate-300 hover:text-white'
            }`}
          >
            Partner
          </Link>

          {/* Right CTA Button */}
          <Link 
            to="/contact" 
            className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-white px-4 xl:px-5 py-2.5 rounded-full shadow-lg transition-transform hover:-translate-y-0.5 flex-shrink-0 ml-1"
            style={{
              background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)',
              boxShadow: '0 4px 16px rgba(92, 93, 232, 0.4)'
            }}
          >
            <Headset className="w-3.5 h-3.5" />
            <span>Talk to an Expert</span>
          </Link>
        </div>

        {/* Mobile Hamburger Button */}
        <button 
          type="button"
          className="lg:hidden text-white p-2 focus:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label="Toggle Navigation Menu"
        >
          {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

      </div>

      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="lg:hidden bg-slate-900 border-b border-white/10 px-6 pt-4 pb-8 space-y-3 animate-fadeIn max-h-[85vh] overflow-y-auto">
          <Link 
            to="/" 
            className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5"
          >
            Home
          </Link>
          <Link 
            to="/about-us" 
            className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5"
          >
            About Us
          </Link>

          {/* Mobile Collapsible Services */}
          <div className="border-b border-white/5 pb-2">
            <button 
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between py-2 text-base font-semibold text-white hover:text-indigo-400"
            >
              <span>Services Practices</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileServicesOpen && (
              <div className="pl-3 mt-2 space-y-3">
                <Link to="/services" className="block text-xs font-bold text-indigo-400 uppercase tracking-wider">
                  View Full Services Hub &rarr;
                </Link>
                {servicePillars.map((p) => (
                  <div key={p.id} className="pt-2">
                    <Link 
                      to={`/services/${p.slug}`}
                      className="font-bold text-sm block mb-1"
                      style={{ color: p.themeColor }}
                    >
                      {p.name}
                    </Link>
                    <div className="space-y-1 pl-2">
                      {p.subservices.map((sub) => (
                        <Link 
                          key={sub.slug}
                          to={`/services/${p.slug}/${sub.slug}`}
                          className="block text-xs text-slate-300 hover:text-white py-1"
                        >
                          &bull; {sub.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <Link to="/industries" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Industries
          </Link>
          <Link to="/case-studies" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Case Studies
          </Link>
          <Link to="/products" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Products
          </Link>
          <Link to="/blog" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Blog
          </Link>
          <Link to="/careers" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Careers
          </Link>
          <Link to="/partner" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Partner Program
          </Link>
          <Link to="/contact" className="block py-2 text-base font-semibold text-white hover:text-indigo-400 border-b border-white/5">
            Contact
          </Link>

          <Link 
            to="/contact" 
            className="w-full text-center block py-3.5 rounded-full font-bold text-sm text-white shadow-xl mt-4"
            style={{
              background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)'
            }}
          >
            Talk to an Expert
          </Link>
        </div>
      )}
    </nav>
  );
}
