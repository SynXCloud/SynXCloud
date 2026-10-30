// src/components/layout/Footer.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { brandConfig, servicePillars } from '../../data/siteContent';
import { 
  Mail, 
  Phone, 
  MapPin, 
  ArrowRight, 
  ShieldCheck, 
  Globe2, 
  Code2, 
  Cpu, 
  Cloud, 
  ChevronRight 
} from 'lucide-react';
import { LinkedinIcon, FacebookIcon, GithubIcon, TwitterIcon, WhatsAppIcon } from '../common/SocialIcons';

export default function Footer() {
  const p1 = servicePillars[0];
  const p2 = servicePillars[1];
  const p3 = servicePillars[2];

  const practiceCards = [
    {
      pillar: p1,
      practiceNum: "01",
      category: "Engineering",
      title: "Full-Stack Software",
      icon: Code2,
      gradient: "from-blue-500 via-indigo-500 to-blue-600",
      badgeBg: "bg-blue-500/10 border-blue-500/20 text-blue-400",
      eyebrowColor: "text-blue-400",
      ctaText: "Hire Full-Stack Squads",
      ctaLink: "/contact?service=software-engineering",
      ctaStyle: "bg-blue-500/10 hover:bg-blue-500/20 text-blue-400 border border-blue-500/20 hover:border-blue-500/40"
    },
    {
      pillar: p2,
      practiceNum: "02",
      category: "AI & Agents",
      title: "Autonomous AI & Workflows",
      icon: Cpu,
      gradient: "from-purple-500 via-violet-500 to-pink-500",
      badgeBg: "bg-purple-500/10 border-purple-500/20 text-purple-400",
      eyebrowColor: "text-purple-400",
      ctaText: "Deploy Custom AI Agents",
      ctaLink: "/contact?service=ai-automation",
      ctaStyle: "bg-purple-500/10 hover:bg-purple-500/20 text-purple-400 border border-purple-500/20 hover:border-purple-500/40"
    },
    {
      pillar: p3,
      practiceNum: "03",
      category: "Cloud Ops",
      title: "Cloud & DevOps",
      icon: Cloud,
      gradient: "from-emerald-500 via-teal-500 to-cyan-500",
      badgeBg: "bg-emerald-500/10 border-emerald-500/20 text-emerald-400",
      eyebrowColor: "text-emerald-400",
      ctaText: "Hire DevOps Architects",
      ctaLink: "/contact?service=cloud-infrastructure",
      ctaStyle: "bg-emerald-500/10 hover:bg-emerald-500/20 text-emerald-400 border border-emerald-500/20 hover:border-emerald-500/40"
    }
  ];

  return (
    <footer className="bg-slate-950 text-slate-300 border-t border-white/10 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top 12-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 pb-14 border-b border-white/10">
          
          {/* Left Column: Company Profile (Spans 4 on lg, 3 on xl) */}
          <div className="lg:col-span-4 xl:col-span-3 space-y-6">
            <Link to="/" className="flex items-center gap-3.5 group">
              <div className="w-13 h-13 rounded-full bg-white flex items-center justify-center p-1 shadow-md border-2 border-white/20 flex-shrink-0 transition-transform group-hover:scale-105 overflow-hidden">
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

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
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
              <div className="flex items-center gap-3 text-emerald-400">
                <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">
                  <WhatsAppIcon size={14} />
                </div>
                <a 
                  href={brandConfig.contact.whatsappUrl} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="hover:text-emerald-300 transition-colors font-medium truncate"
                >
                  WhatsApp (&lt; 15m reply)
                </a>
              </div>
            </div>

            {/* Social Profile Links */}
            <div className="flex items-center gap-2.5 pt-1">
              <a 
                href={brandConfig.socials.linkedin} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud LinkedIn"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <LinkedinIcon size={15} />
              </a>
              <a 
                href={brandConfig.contact.whatsappUrl} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud WhatsApp"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-emerald-600 transition-colors"
              >
                <WhatsAppIcon size={15} />
              </a>
              <a 
                href={brandConfig.socials.facebook} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud Facebook"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <FacebookIcon size={15} />
              </a>
              <a 
                href={brandConfig.socials.github} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud GitHub"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <GithubIcon size={15} />
              </a>
              <a 
                href={brandConfig.socials.twitter} 
                target="_blank" 
                rel="noreferrer"
                aria-label="SynXcloud Twitter"
                className="w-8 h-8 rounded-full bg-slate-900 border border-white/10 flex items-center justify-center text-slate-300 hover:text-white hover:bg-indigo-600 transition-colors"
              >
                <TwitterIcon size={15} />
              </a>
            </div>
          </div>

          {/* Right Column: 3 Core Practices in Balanced Architectural Panels (Spans 8 on lg, 9 on xl) */}
          <div className="lg:col-span-8 xl:col-span-9 space-y-4">
            
            {/* Header banner above practice cards */}
            <div className="flex items-center justify-between pb-1">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-300">
                  Core Engineering &amp; AI Practices
                </span>
              </div>
              <span className="text-[11px] text-slate-500 hidden sm:inline">
                Dedicated client squads &bull; Fast delivery
              </span>
            </div>

            {/* 3 Balanced Cards Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
              {practiceCards.map(item => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={item.practiceNum}
                    className="relative flex flex-col justify-between p-5 rounded-2xl bg-white/[0.02] border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden group shadow-sm hover:shadow-indigo-500/5"
                  >
                    {/* Top Accent Gradient Border */}
                    <div className={`absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r ${item.gradient}`} />

                    <div>
                      {/* Card Header with Icon + Category Eyebrow + Title */}
                      <div className="flex items-start gap-3 pb-3.5 mb-4 border-b border-white/10 min-h-[58px]">
                        <div className={`w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0 border shadow-sm mt-0.5 ${item.badgeBg}`}>
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className={`text-[10px] uppercase font-bold tracking-wider mb-0.5 ${item.eyebrowColor}`}>
                            Practice {item.practiceNum} &bull; {item.category}
                          </div>
                          <h4 className="text-xs xl:text-sm font-bold text-white uppercase tracking-wider leading-snug">
                            {item.title}
                          </h4>
                        </div>
                      </div>

                      {/* Capabilities / Subservice List */}
                      <ul className="space-y-1.5">
                        {item.pillar.subservices.map(sub => (
                          <li key={sub.slug}>
                            <Link 
                              to={`/services/${item.pillar.slug}/${sub.slug}`}
                              className="hover:text-white transition-all flex items-start gap-2 group/link py-1 px-2 -mx-2 rounded-lg hover:bg-white/[0.05]"
                            >
                              <ChevronRight className="w-3.5 h-3.5 text-slate-500 group-hover/link:text-indigo-400 group-hover/link:translate-x-0.5 transition-all flex-shrink-0 mt-0.5" />
                              <span className="leading-snug text-xs text-slate-300 group-hover/link:text-white transition-colors">
                                {sub.title}
                              </span>
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Bottom CTA Action Button */}
                    <div className="mt-5 pt-3.5 border-t border-white/10">
                      <Link 
                        to={item.ctaLink} 
                        className={`w-full h-10 inline-flex items-center justify-between text-xs font-semibold px-3.5 rounded-xl transition-all group/btn ${item.ctaStyle}`}
                      >
                        <span className="truncate">{item.ctaText}</span>
                        <ArrowRight className="w-3.5 h-3.5 flex-shrink-0 ml-1.5 transition-transform group-hover/btn:translate-x-1" />
                      </Link>
                    </div>

                  </div>
                );
              })}
            </div>

          </div>
        </div>

        {/* Growth & Staffing Practice Bar */}
        <div className="py-4 px-6 my-6 rounded-2xl bg-white/[0.02] border border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold tracking-wider text-indigo-400">
              Additional Client Practices
            </span>
            <div className="text-xs text-slate-300 font-semibold flex flex-wrap items-center gap-3">
              <Link to="/services/digital-marketing" className="hover:text-white flex items-center gap-1.5 group transition-colors">
                <span className="w-2 h-2 rounded-full bg-orange-500 flex-shrink-0" />
                <span>Digital Marketing &amp; Growth</span>
                <span className="text-[10px] text-slate-500 group-hover:text-slate-300">&bull; SEO &amp; Acquisition</span>
              </Link>
              <span className="text-slate-600 hidden sm:inline">|</span>
              <Link to="/services/tech-staffing" className="hover:text-white flex items-center gap-1.5 group transition-colors">
                <span className="w-2 h-2 rounded-full bg-teal-500 flex-shrink-0" />
                <span>Tech Staffing &amp; Pods</span>
                <span className="text-[10px] text-slate-500 group-hover:text-slate-300">&bull; Vetted Senior Squads</span>
              </Link>
            </div>
          </div>

          <Link 
            to="/services" 
            className="px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all flex items-center gap-1.5 group flex-shrink-0"
          >
            <span>Explore All 5 Services</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>

        {/* Bottom Strip */}
        <div className="pt-6 flex flex-col md:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-500 flex-shrink-0" />
            <span>&copy; {new Date().getFullYear()} {brandConfig.companyName}. All Rights Reserved.</span>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-6">
            <Link to="/about-us" className="hover:text-slate-300 transition-colors">About Us</Link>
            <Link to="/international-clients" className="text-indigo-400 hover:text-indigo-300 font-semibold flex items-center gap-1 transition-colors">
              <Globe2 className="w-3.5 h-3.5" />
              <span>International Clients</span>
            </Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">Book Consultation</Link>
            <Link to="/case-studies" className="hover:text-slate-300 transition-colors">Case Studies</Link>
            <Link to="/products" className="hover:text-slate-300 transition-colors">Products</Link>
            <Link to="/blog" className="hover:text-slate-300 transition-colors">Blog</Link>
            <Link to="/contact" className="hover:text-slate-300 transition-colors">NDA &amp; Security</Link>
          </div>
        </div>

      </div>
    </footer>
  );
}

