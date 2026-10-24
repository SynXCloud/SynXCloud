// src/components/layout/Navbar.jsx
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { brandConfig, servicePillars } from '../../data/siteContent';
import MegaMenu from './MegaMenu';
import { ChevronDown, Headset, Menu, X, ArrowRight, ShieldCheck, Sparkles, Mail, Phone } from 'lucide-react';

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

  // Lock body scroll when mobile side drawer is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileOpen]);

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
    <>
      <nav 
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
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
    </nav>

    {/* Mobile Side Navigation Backdrop Overlay */}
    <div 
      className={`fixed inset-0 z-50 bg-black/70 backdrop-blur-sm transition-opacity duration-300 lg:hidden ${
        mobileOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
      }`}
      onClick={() => setMobileOpen(false)}
      aria-hidden="true"
    />

    {/* Mobile Side Navigation Drawer Panel (Slides in from the right) */}
    <aside 
      className={`fixed top-0 right-0 bottom-0 z-50 w-full sm:w-[380px] max-w-[85vw] h-screen bg-slate-900 border-l border-white/10 shadow-2xl flex flex-col justify-between transform transition-transform duration-300 ease-in-out lg:hidden ${
        mobileOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
      aria-label="Mobile Navigation Sidebar"
    >
        {/* Top Header of Side Nav */}
        <div className="p-5 border-b border-white/10 flex items-center justify-between bg-slate-950/60">
          <Link to="/" onClick={() => setMobileOpen(false)} className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center p-1 shadow-md border-2 border-white/20 flex-shrink-0 overflow-hidden">
              <img 
                src={brandConfig.logoLight} 
                alt={brandConfig.companyName} 
                className="w-full h-full object-contain scale-110"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-extrabold text-white tracking-tight">
                SynX<span className="text-indigo-400">Cloud</span>
              </span>
              <span className="text-[8px] uppercase font-bold text-slate-400 tracking-wider">
                Consultancy Services
              </span>
            </div>
          </Link>

          <button
            type="button"
            onClick={() => setMobileOpen(false)}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-slate-300 hover:text-white flex items-center justify-center transition-colors"
            aria-label="Close Navigation Sidebar"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Navigation Links */}
        <div className="flex-1 overflow-y-auto px-6 py-5 space-y-1">
          <Link 
            to="/" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about-us" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/about-us' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            About Us
          </Link>

          {/* Collapsible Services Accordion in Sidebar */}
          <div className="py-1">
            <button 
              type="button"
              onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-semibold text-slate-200 hover:text-white hover:bg-white/5 transition-colors"
            >
              <span>Services Practices</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} />
            </button>
            
            {mobileServicesOpen && (
              <div className="pl-4 pr-2 mt-2 space-y-3 bg-slate-950/40 rounded-xl p-3 border border-white/5 animate-fadeIn">
                <Link 
                  to="/services" 
                  onClick={() => setMobileOpen(false)}
                  className="block text-xs font-bold text-indigo-400 uppercase tracking-wider hover:underline"
                >
                  View All Services Hub &rarr;
                </Link>
                {servicePillars.map((p) => (
                  <div key={p.id} className="pt-2 border-t border-white/5 first:border-0 first:pt-0">
                    <Link 
                      to={`/services/${p.slug}`}
                      onClick={() => setMobileOpen(false)}
                      className="font-bold text-xs block mb-1.5 hover:underline"
                      style={{ color: p.themeColor }}
                    >
                      {p.name}
                    </Link>
                    <div className="space-y-1.5 pl-2">
                      {p.subservices.map((sub) => (
                        <Link 
                          key={sub.slug}
                          to={`/services/${p.slug}/${sub.slug}`}
                          onClick={() => setMobileOpen(false)}
                          className="block text-[11px] text-slate-300 hover:text-white py-0.5"
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

          <Link 
            to="/industries" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname.startsWith('/industries') ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Industries
          </Link>
          <Link 
            to="/case-studies" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/case-studies' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Case Studies
          </Link>
          <Link 
            to="/products" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/products' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Products
          </Link>
          <Link 
            to="/blog" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname.startsWith('/blog') ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Blog & Insights
          </Link>
          <Link 
            to="/careers" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/careers' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Careers
          </Link>
          <Link 
            to="/partner" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/partner' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Partner Program
          </Link>
          <Link 
            to="/contact" 
            onClick={() => setMobileOpen(false)}
            className={`block px-3 py-2.5 rounded-xl text-sm font-semibold transition-colors ${
              location.pathname === '/contact' ? 'text-indigo-400 font-bold bg-white/10' : 'text-slate-200 hover:text-white hover:bg-white/5'
            }`}
          >
            Contact
          </Link>

          {/* Quick Contact Info in Sidebar */}
          <div className="pt-6 mt-4 border-t border-white/10 text-xs text-slate-400 space-y-2.5">
            <div className="flex items-center gap-2.5">
              <Mail className="w-3.5 h-3.5 text-indigo-400" />
              <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-white">
                {brandConfig.contact.email}
              </a>
            </div>
            <div className="flex items-center gap-2.5">
              <Phone className="w-3.5 h-3.5 text-indigo-400" />
              <a href={`tel:${brandConfig.contact.phone}`} className="hover:text-white">
                {brandConfig.contact.phone}
              </a>
            </div>
          </div>
        </div>

        {/* Bottom CTA Button in Sidebar */}
        <div className="p-5 border-t border-white/10 bg-slate-950/70">
          <Link 
            to="/contact" 
            onClick={() => setMobileOpen(false)}
            className="w-full text-center flex items-center justify-center gap-2 py-3.5 rounded-full font-bold text-sm text-white shadow-xl transition-transform hover:-translate-y-0.5"
            style={{
              background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)',
              boxShadow: '0 4px 16px rgba(92, 93, 232, 0.4)'
            }}
          >
            <Headset className="w-4 h-4" />
            <span>Talk to an Expert</span>
          </Link>
        </div>
      </aside>
    </>
  );
}
