// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { brandConfig, servicePillars } from '../../data/siteContent';
import { Mail, Phone, MapPin, ArrowRight, ShieldCheck } from 'lucide-react';
import { LinkedinIcon, FacebookIcon, GithubIcon, TwitterIcon } from '../common/SocialIcons';

export default function Footer() {
  const p1 = servicePillars[0];
  const p2 = servicePillars[1];
  const p3 = servicePillars[2];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 pb-16 border-b border-white/10">
          
          {/* Column 1: Company Profile (Spans 2 on large screens) */}
          <div className="lg:col-span-2 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-14 h-14 rounded-full bg-white flex items-center justify-center p-1 shadow-md border-2 border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden">
                <img 
                  src={brandConfig.logoLight} 
                  alt={brandConfig.companyName} 
                  className="w-full h-full object-contain scale-110"
                  onError={(e) => { e.currentTarget.style.display = 'none'; }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-2xl font-extrabold text-white tracking-tight flex items-center gap-0.5">
                  SynX<span className="text-indigo-400">Cloud</span>
                </span>
                <span className="text-[10px] uppercase font-bold text-slate-300 tracking-wider">
                  Consultancy Services
                </span>
              </div>
            </Link>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {brandConfig.description}
            </p>

            <div className="space-y-3 text-xs text-slate-400">
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <span>{brandConfig.contact.location}</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a href={`mailto:${brandConfig.contact.email}`} className="hover:text-white transition-colors">
                  {brandConfig.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-indigo-400 flex-shrink-0" />
                <a href={`tel:${brandConfig.contact.phone}`} className="hover:text-white transition-colors">
                  {brandConfig.contact.phone}
                </a>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-3 pt-2">
              <a 
                href={brandConfig.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud LinkedIn"
                className="w-9 h-9 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <LinkedinIcon size={16} />
              </a>
              <a 
                href={brandConfig.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud Facebook"
                className="w-9 h-9 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <FacebookIcon size={16} />
              </a>
              <a 
                href={brandConfig.socials.github} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud GitHub"
                className="w-9 h-9 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <GithubIcon size={16} />
              </a>
              <a 
                href={brandConfig.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud Twitter"
                className="w-9 h-9 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <TwitterIcon size={16} />
              </a>
            </div>
          </div>

          {/* Column 2: Pillar 1 Practice */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p1.themeColor }} />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {p1.name}
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {p1.subservices.map(sub => (
                <li key={sub.slug}>
                  <Link 
                    to={`/services/${p1.slug}/${sub.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{sub.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link to="/careers" className="text-orange-400 hover:underline font-semibold flex items-center gap-1">
                  &rarr; Hire DevOps Architects
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Pillar 2 Practice */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p2.themeColor }} />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {p2.name}
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {p2.subservices.map(sub => (
                <li key={sub.slug}>
                  <Link 
                    to={`/services/${p2.slug}/${sub.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{sub.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link to="/careers" className="text-blue-400 hover:underline font-semibold flex items-center gap-1">
                  &rarr; Hire Full-Stack Squads
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Pillar 3 Practice & Navigation */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: p3.themeColor }} />
              <h4 className="text-sm font-bold text-white uppercase tracking-wider">
                {p3.name}
              </h4>
            </div>
            <ul className="space-y-2.5 text-xs text-slate-400">
              {p3.subservices.map(sub => (
                <li key={sub.slug}>
                  <Link 
                    to={`/services/${p3.slug}/${sub.slug}`}
                    className="hover:text-white transition-colors flex items-center gap-1.5 group"
                  >
                    <ArrowRight className="w-3 h-3 text-slate-600 group-hover:text-indigo-400 transition-transform group-hover:translate-x-0.5" />
                    <span>{sub.title}</span>
                  </Link>
                </li>
              ))}
              <li className="pt-2 border-t border-white/5">
                <Link to="/partner" className="text-purple-400 hover:underline font-semibold flex items-center gap-1">
                  &rarr; Join Partner Network
                </Link>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>&copy; {new Date().getFullYear()} {brandConfig.companyName}. All Rights Reserved.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link to="/about-us" className="hover:text-slate-300">About Us</Link>
            <Link to="/case-studies" className="hover:text-slate-300">Case Studies</Link>
            <Link to="/products" className="hover:text-slate-300">Products</Link>
            <Link to="/blog" className="hover:text-slate-300">Engineering Blog</Link>
            <Link to="/contact" className="hover:text-slate-300">NDA & Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}
