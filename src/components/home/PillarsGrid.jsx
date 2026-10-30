// src/components/home/PillarsGrid.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { servicePillars } from '../../data/siteContent';
import { Cloud, Code, Cpu, TrendingUp, Users, ArrowRight, CheckCircle2, Sparkles, Star, Zap } from 'lucide-react';

const iconMap = {
  Cloud: Cloud,
  Code: Code,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Users: Users
};

export default function PillarsGrid() {
  const [selectedTab, setSelectedTab] = useState('main'); // 'main' | 'all'

  const mainOfferings = servicePillars.filter(p => p.isMainOffering);
  const additionalOfferings = servicePillars.filter(p => !p.isMainOffering);
  const displayedOfferings = selectedTab === 'main' ? mainOfferings : servicePillars;

  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 mb-3 shadow-2xs">
            <Star className="w-3.5 h-3.5 fill-indigo-600 text-indigo-600" />
            <span>Prioritized Client Offerings</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            High-Impact Services Built to Win Clients
          </h2>

          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />

          <p className="text-base text-slate-600">
            We focus our core engineering practices on full-stack software, autonomous AI systems, and cloud infrastructure, backed by performance digital marketing and dedicated staffing.
          </p>

          {/* Toggle Pills: Main Sales Offerings vs All 5 Practices */}
          <div className="flex items-center justify-center gap-2 mt-8">
            <button
              type="button"
              onClick={() => setSelectedTab('main')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedTab === 'main'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              ⭐ Main Sales Offerings (3 Core Practices)
            </button>

            <button
              type="button"
              onClick={() => setSelectedTab('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                selectedTab === 'all'
                  ? 'bg-slate-900 text-white shadow-md'
                  : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
              }`}
            >
              All 5 Client Services (Including Growth &amp; Staffing)
            </button>
          </div>
        </div>

        {/* Dynamic Services Grid */}
        <div className={`grid gap-8 ${
          selectedTab === 'main' ? 'grid-cols-1 md:grid-cols-3' : 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3'
        }`}>
          {displayedOfferings.map((pillar) => {
            const PillarIcon = iconMap[pillar.icon] || Sparkles;

            return (
              <div 
                key={pillar.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between relative group"
                style={{
                  borderTop: `5px solid ${pillar.themeColor}`
                }}
              >
                <div>
                  {/* Pillar Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105"
                      style={{ backgroundColor: pillar.themeColor }}
                    >
                      <PillarIcon className="w-7 h-7" />
                    </div>

                    <div className="flex items-center gap-1.5">
                      {pillar.isMainOffering && (
                        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1">
                          <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                          <span>Main Offering #{pillar.offeringTier}</span>
                        </span>
                      )}
                      <span 
                        className="text-[11px] font-bold px-3 py-0.5 rounded-full uppercase tracking-wider"
                        style={{ backgroundColor: `${pillar.themeColor}18`, color: pillar.themeColor }}
                      >
                        {pillar.badge}
                      </span>
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-2.5">
                    {pillar.name}
                  </h3>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pillar.longDesc}
                  </p>

                  {/* Metric Chips */}
                  <div className="grid grid-cols-3 gap-2 p-3 rounded-xl bg-slate-50 border border-slate-100 mb-6 text-center">
                    {pillar.stats.map((s, idx) => (
                      <div key={idx}>
                        <div className="text-xs font-black" style={{ color: pillar.themeColor }}>
                          {s.value}
                        </div>
                        <div className="text-[9px] uppercase font-bold text-slate-400 mt-0.5 truncate">
                          {s.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* 3 Key Capabilities */}
                  <div className="space-y-3 mb-8 pt-4 border-t border-slate-100">
                    {pillar.subservices.slice(0, 3).map((sub) => (
                      <div key={sub.slug} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 
                          className="w-4 h-4 flex-shrink-0 mt-0.5" 
                          style={{ color: pillar.themeColor }} 
                        />
                        <div>
                          <strong className="block text-slate-900">{sub.title}</strong>
                          <span className="text-[11px] text-slate-500 line-clamp-1">{sub.desc}</span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Link */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/services/${pillar.slug}`}
                    className="text-xs font-bold flex items-center gap-1.5 transition-transform hover:translate-x-1"
                    style={{ color: pillar.themeColor }}
                  >
                    <span>Explore Practice</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link
                    to={`/contact?service=${pillar.slug}`}
                    className="text-[11px] font-semibold text-slate-400 hover:text-slate-700"
                  >
                    Book Audit &rarr;
                  </Link>
                </div>

              </div>
            );
          })}
        </div>

        {/* Growth & Staffing Highlights Banner when viewing 'main' */}
        {selectedTab === 'main' && (
          <div className="mt-12 p-8 rounded-3xl bg-slate-50 border border-slate-200 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-emerald-600 block">
                Also Offering High-Velocity Growth &amp; Staffing
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Need Digital Marketing or On-Demand Engineering Staffing?
              </h4>
              <p className="text-xs text-slate-500 max-w-2xl">
                We also offer <strong>Performance Digital Marketing</strong> (SEO, paid ads &amp; CRO funnels) and <strong>Tech Staff Augmentation</strong> (dedicated senior engineering pods embedded in 48h).
              </p>
            </div>

            <div className="flex flex-wrap items-center gap-3 flex-shrink-0">
              <Link
                to="/services/digital-marketing"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors shadow-sm"
              >
                Digital Marketing &rarr;
              </Link>
              <Link
                to="/services/tech-staffing"
                className="px-5 py-2.5 rounded-full text-xs font-bold text-white bg-pink-600 hover:bg-pink-500 transition-colors shadow-sm"
              >
                Tech Staffing &rarr;
              </Link>
            </div>
          </div>
        )}

        {/* Center Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="pill-btn inline-flex items-center gap-2"
          >
            <span>Explore All 5 Practices &amp; 20+ Subservices in Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
