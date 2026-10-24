// src/components/home/PillarsGrid.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicePillars } from '../../data/siteContent';
import { Cloud, Code, Cpu, ArrowRight, CheckCircle2, Sparkles } from 'lucide-react';

const iconMap = {
  Cloud: Cloud,
  Code: Code,
  Cpu: Cpu
};

export default function PillarsGrid() {
  return (
    <section className="py-24 bg-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Three Core Engineering Pillars</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Comprehensive Enterprise Capabilities
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-base text-slate-600">
            From multi-cloud migrations to bespoke distributed systems and autonomous agentic AI, our specialized practices deliver measurable operational ROI.
          </p>
        </div>

        {/* 3 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {servicePillars.map((pillar) => {
            const PillarIcon = iconMap[pillar.icon] || Sparkles;

            return (
              <div 
                key={pillar.id}
                className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
                style={{
                  borderTop: `5px solid ${pillar.themeColor}`
                }}
              >
                <div>
                  {/* Pillar Icon & Badge */}
                  <div className="flex items-center justify-between mb-6">
                    <div 
                      className="w-14 h-14 rounded-2xl flex items-center justify-center text-white shadow-md"
                      style={{ backgroundColor: pillar.themeColor }}
                    >
                      <PillarIcon className="w-7 h-7" />
                    </div>
                    <span 
                      className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: `${pillar.themeColor}18`, color: pillar.themeColor }}
                    >
                      {pillar.badge}
                    </span>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="text-xl font-bold text-slate-900 mb-3">
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {pillar.longDesc}
                  </p>

                  {/* 3 Key Checklists */}
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

        {/* Center Bottom CTA */}
        <div className="mt-14 text-center">
          <Link
            to="/services"
            className="pill-btn inline-flex items-center gap-2"
          >
            <span>Explore All 21+ Capabilities in Services Hub</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
}
