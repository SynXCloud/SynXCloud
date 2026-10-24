// src/pages/HomePage.jsx
import React from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AboutOverview from '../components/home/AboutOverview';
import PillarsGrid from '../components/home/PillarsGrid';
import TargetClients from '../components/home/TargetClients';
import { caseStudiesData } from '../data/caseStudiesData';
import { brandConfig } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2 } from 'lucide-react';

export default function HomePage() {
  const featuredCases = caseStudiesData.slice(0, 3);

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* 1. Hero Slider with Canvas Particle Mesh */}
      <HeroSlider />

      {/* 2. Company Overview & Live Video Showcase */}
      <AboutOverview />

      {/* 3. 3 Core Pillars Grid */}
      <PillarsGrid />

      {/* 4. Target Clients & Social Proof Metrics */}
      <TargetClients />

      {/* 5. Featured Case Studies Strip */}
      <section className="py-24 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 mb-3">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Proven Business Outcomes</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
                Featured Case Studies & ROI
              </h2>
              <div className="w-16 h-1 bg-indigo-600 rounded-full mt-3" />
            </div>

            <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 font-bold text-sm text-indigo-600 hover:text-indigo-700"
            >
              <span>View All Case Studies</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCases.map((cs) => (
              <div 
                key={cs.id}
                className="bg-slate-50 rounded-2xl p-7 border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span 
                      className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: `${cs.themeColor}18`, color: cs.themeColor }}
                    >
                      {cs.clientIndustry}
                    </span>
                    <span className="text-[11px] font-semibold text-slate-400">
                      {cs.pillarName}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-slate-900 mb-3 leading-snug">
                    {cs.title}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {cs.summary}
                  </p>

                  {/* Primary Metrics Highlight */}
                  <div className="grid grid-cols-2 gap-3 p-3.5 bg-white rounded-xl border border-slate-200 mb-6">
                    {cs.metrics.slice(0, 2).map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xl font-extrabold" style={{ color: cs.themeColor }}>
                          {m.value}
                        </div>
                        <div className="text-[10px] text-slate-500 font-semibold uppercase tracking-wider">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to="/case-studies"
                  className="text-xs font-bold flex items-center gap-1.5 hover:underline"
                  style={{ color: cs.themeColor }}
                >
                  <span>Read Full Architecture Breakdown</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 6. Executive Leadership Preview - Commented out as requested */}
      {/*
      <section className="py-24 bg-slate-900 text-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 block">
              Meet Our Founders
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4">
              Engineers Leading From The Front
            </h2>
            <div className="w-16 h-1 bg-indigo-500 mx-auto rounded-full mb-4" />
            <p className="text-slate-300 text-sm">
              No middle management bureaucracy. When you partner with {brandConfig.companyName}, you collaborate directly with seasoned systems architects and engineering leaders.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandConfig.team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-7 border border-white/10 hover:border-white/25 transition-all text-center flex flex-col items-center"
              >
                <div className="w-24 h-24 rounded-full overflow-hidden border-2 border-indigo-400 mb-4 shadow-lg bg-slate-800">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5c5de8&color=fff`;
                    }}
                  />
                </div>
                <h3 className="text-lg font-bold text-white mb-0.5">{member.name}</h3>
                <span className="text-xs font-semibold text-indigo-400 uppercase tracking-wider mb-3">
                  {member.role}
                </span>
                <p className="text-xs text-slate-300 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto px-4 py-2 rounded-full text-xs font-bold text-white bg-white/10 hover:bg-indigo-600 transition-colors inline-flex items-center gap-2"
                >
                  Connect on LinkedIn &rarr;
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
      */}

      {/* 7. Ready-to-Build CTA Strip */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Ready to Engineer Your Modern Cloud or AI Architecture?
          </h2>
          <p className="text-base text-indigo-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Schedule an introductory technical consultation. We review your requirements, sign a mutual NDA, and deliver a detailed architecture blueprint within 48 hours.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              to="/contact"
              className="px-8 py-4 rounded-full font-bold text-sm bg-white text-indigo-900 hover:bg-slate-100 shadow-2xl transition-all transform hover:-translate-y-1"
            >
              Book Technical Consultation
            </Link>
            <Link
              to="/careers"
              className="px-8 py-4 rounded-full font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all"
            >
              Hire Dedicated Engineering Pods
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
