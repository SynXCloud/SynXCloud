// src/pages/ServicesHubPage.jsx
import React, { useState } from 'react';
import { servicePillars, brandConfig } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, CheckCircle2, Cloud, Code, Cpu, TrendingUp, Users, Star } from 'lucide-react';
import FAQAccordion from '../components/common/FAQAccordion';

const iconMap = {
  Cloud: Cloud,
  Code: Code,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Users: Users
};

export default function ServicesHubPage() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredPillars = activeFilter === 'all' 
    ? servicePillars 
    : activeFilter === 'main'
    ? servicePillars.filter(p => p.isMainOffering)
    : servicePillars.filter(p => p.slug === activeFilter);

  const hubFaqs = [
    {
      q: "How does SynXcloud structure client engagements?",
      a: "We offer three engagement models: Dedicated Engineering Pods (monthly dedicated squads), Time & Materials (sprint-based staff augmentation), and Fixed-Scope Milestone projects with strict deliverable SLAs."
    },
    {
      q: "How quickly can an engineering pod begin work?",
      a: "Our core senior pods can onboard within 48 to 72 hours following the execution of our mutual NDA and initial architecture discovery call."
    },
    {
      q: "Can we combine Cloud Infrastructure with Bespoke Software, AI Automation, and Marketing?",
      a: "Yes! Over 65% of our enterprise clients leverage cross-practice engagements, such as deploying bespoke React/Next.js portals on hardened Kubernetes clusters with embedded Agentic AI and technical SEO growth funnels."
    },
    {
      q: "Who owns the intellectual property (IP)?",
      a: "You do. 100% of code, architecture diagrams, container configurations, and proprietary workflows belong to your company upon milestone acceptance."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Comprehensive Enterprise Service Directory</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Specialized Engineering &amp; Growth Practices
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Explore our prioritized 5 service practices engineered to win enterprise clients, accelerate product velocity, and scale qualified demand.
          </p>

          {/* Interactive Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setActiveFilter('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer ${
                activeFilter === 'all' 
                  ? 'bg-white text-slate-900 shadow-lg' 
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All 5 Practices (20+ Capabilities)
            </button>

            <button
              onClick={() => setActiveFilter('main')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all cursor-pointer flex items-center gap-1.5 ${
                activeFilter === 'main' 
                  ? 'bg-amber-400 text-slate-950 shadow-lg font-black' 
                  : 'bg-white/10 text-amber-300 hover:bg-white/20 border border-amber-400/30'
              }`}
            >
              <Star className="w-3.5 h-3.5 fill-current" />
              <span>Main Sales Offerings (3)</span>
            </button>

            {servicePillars.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveFilter(p.slug)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all cursor-pointer ${
                  activeFilter === p.slug 
                    ? 'text-white shadow-lg' 
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                style={{
                  backgroundColor: activeFilter === p.slug ? p.themeColor : undefined
                }}
              >
                {p.name}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Pillars & Child Capabilities Directory */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {filteredPillars.map(pillar => {
          const PillarIcon = iconMap[pillar.icon] || Sparkles;

          return (
            <div key={pillar.id} className="space-y-8">
              
              {/* Pillar Header Bar */}
              <div 
                className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-6"
                style={{ borderLeft: `8px solid ${pillar.themeColor}` }}
              >
                <div className="flex items-start gap-4">
                  <div 
                    className="w-14 h-14 rounded-2xl flex items-center justify-center text-white flex-shrink-0 shadow-md"
                    style={{ backgroundColor: pillar.themeColor }}
                  >
                    <PillarIcon className="w-7 h-7" />
                  </div>
                  <div>
                    <div className="flex flex-wrap items-center gap-2.5 mb-1">
                      <h2 className="text-2xl font-extrabold text-slate-900">{pillar.name}</h2>
                      {pillar.isMainOffering && (
                        <span className="text-[10px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-200 flex items-center gap-1 shadow-2xs">
                          <Star className="w-2.5 h-2.5 fill-amber-500 text-amber-500" />
                          <span>Main Offering #{pillar.offeringTier}</span>
                        </span>
                      )}
                      <span 
                        className="text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase"
                        style={{ backgroundColor: `${pillar.themeColor}18`, color: pillar.themeColor }}
                      >
                        {pillar.badge}
                      </span>
                    </div>
                    <p className="text-sm text-slate-600 max-w-2xl">{pillar.longDesc}</p>
                  </div>
                </div>

                <Link
                  to={`/services/${pillar.slug}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-xs font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 flex-shrink-0"
                  style={{ backgroundColor: pillar.themeColor }}
                >
                  <span>Practice Overview</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

              {/* Sub-Services Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {pillar.subservices.map(sub => (
                  <div 
                    key={sub.slug}
                    className="bg-white rounded-2xl p-7 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between mb-3">
                        <h3 className="text-lg font-bold text-slate-900">{sub.title}</h3>
                        <span 
                          className="w-2.5 h-2.5 rounded-full" 
                          style={{ backgroundColor: pillar.themeColor }} 
                        />
                      </div>
                      
                      <p className="text-xs text-slate-600 mb-6 leading-relaxed">
                        {sub.desc}
                      </p>

                      {/* Capabilities */}
                      <div className="space-y-2 mb-6">
                        <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                          Included Capabilities
                        </span>
                        {sub.capabilities.map((cap, idx) => (
                          <div key={idx} className="flex items-center gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 flex-shrink-0" style={{ color: pillar.themeColor }} />
                            <span>{cap}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Badges */}
                      {sub.techStack && (
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {sub.techStack.map((tech, idx) => (
                            <span 
                              key={idx} 
                              className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-slate-100 text-slate-600"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                      <Link 
                        to={`/services/${pillar.slug}/${sub.slug}`}
                        className="text-xs font-bold flex items-center gap-1.5 hover:underline"
                        style={{ color: pillar.themeColor }}
                      >
                        <span>Deep Dive Specifications</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>

                      <Link 
                        to={`/contact?service=${sub.slug}`}
                        className="text-xs font-semibold text-slate-400 hover:text-slate-700"
                      >
                        Request Quote &rarr;
                      </Link>
                    </div>

                  </div>
                ))}
              </div>

            </div>
          );
        })}
      </section>

      {/* 3. FAQ Accordion */}
      <section className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Commercial Clarity
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Frequently Asked Questions
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <FAQAccordion items={hubFaqs} />
        </div>
      </section>

    </div>
  );
}
