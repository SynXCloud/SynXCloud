// src/pages/CaseStudiesPage.jsx
import React, { useState } from 'react';
import { caseStudiesData } from '../data/caseStudiesData';
import { servicePillars } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowRight, Quote, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function CaseStudiesPage() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filtered = activeCategory === 'all'
    ? caseStudiesData
    : caseStudiesData.filter(c => c.pillarSlug === activeCategory);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proven Enterprise Impact & Metrics</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Case Studies & Quantifiable ROI
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Real-world architectures engineered by SynXcloud pods. Discover how we deliver measurable cost reductions, zero-downtime migrations, and high concurrency.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-10">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                activeCategory === 'all'
                  ? 'bg-white text-slate-900 shadow-lg'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              All Engagements ({caseStudiesData.length})
            </button>
            {servicePillars.map(p => (
              <button
                key={p.id}
                onClick={() => setActiveCategory(p.slug)}
                className={`px-5 py-2.5 rounded-full text-xs font-bold transition-all ${
                  activeCategory === p.slug
                    ? 'text-white shadow-lg'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
                style={{
                  backgroundColor: activeCategory === p.slug ? p.themeColor : undefined
                }}
              >
                {p.name}
              </button>
            ))}
          </div>

        </div>
      </section>

      {/* 2. Case Studies List */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        {filtered.map(cs => (
          <div 
            key={cs.id}
            className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            style={{ borderLeft: `8px solid ${cs.themeColor}` }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              
              {/* Narrative: 7 Cols */}
              <div className="lg:col-span-7 space-y-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span 
                    className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider"
                    style={{ backgroundColor: `${cs.themeColor}18`, color: cs.themeColor }}
                  >
                    {cs.clientIndustry}
                  </span>
                  <span className="text-xs font-semibold text-slate-400">
                    &bull; {cs.pillarName}
                  </span>
                </div>

                <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-snug">
                  {cs.title}
                </h2>

                <p className="text-sm text-slate-600 leading-relaxed font-medium">
                  {cs.summary}
                </p>

                {/* Challenge & Solution */}
                <div className="space-y-3 pt-2">
                  <div className="p-4 rounded-2xl bg-red-50/60 border border-red-100 text-xs leading-relaxed text-slate-700">
                    <strong className="text-red-700 block mb-1 uppercase tracking-wider text-[11px]">The Challenge:</strong>
                    {cs.challenge}
                  </div>

                  <div className="p-4 rounded-2xl bg-emerald-50/60 border border-emerald-100 text-xs leading-relaxed text-slate-700">
                    <strong className="text-emerald-700 block mb-1 uppercase tracking-wider text-[11px]">The Engineered Solution:</strong>
                    {cs.solution}
                  </div>
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-2 pt-2">
                  <span className="text-xs font-bold text-slate-400 uppercase tracking-wider mr-2">Tech:</span>
                  {cs.techStack.map((tech, idx) => (
                    <span key={idx} className="px-2.5 py-1 rounded-md text-xs font-semibold bg-slate-100 text-slate-700">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Metrics & Testimonial: 5 Cols */}
              <div className="lg:col-span-5 flex flex-col justify-between space-y-6 lg:border-l lg:border-slate-100 lg:pl-8">
                
                {/* 2x2 Metrics Grid */}
                <div className="grid grid-cols-2 gap-4">
                  {cs.metrics.map((m, idx) => (
                    <div key={idx} className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-center">
                      <div className="text-2xl sm:text-3xl font-black mb-1" style={{ color: cs.themeColor }}>
                        {m.value}
                      </div>
                      <div className="text-[11px] font-bold text-slate-500 uppercase tracking-wider">
                        {m.label}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Client Quote Card */}
                {cs.quote && (
                  <div className="p-6 rounded-2xl bg-slate-900 text-white relative">
                    <Quote className="w-8 h-8 text-indigo-400/40 mb-2" />
                    <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed mb-4">
                      "{cs.quote.text}"
                    </p>
                    <div className="border-t border-white/10 pt-3">
                      <strong className="block text-xs font-bold text-white">{cs.quote.author}</strong>
                      <span className="text-[11px] text-indigo-300">{cs.quote.title}</span>
                    </div>
                  </div>
                )}

                <Link
                  to={`/contact?service=${cs.pillarSlug}`}
                  className="w-full text-center py-3.5 rounded-full font-bold text-xs text-white shadow-md transition-transform hover:-translate-y-0.5"
                  style={{ backgroundColor: cs.themeColor }}
                >
                  Schedule Technical Review For Similar Scope &rarr;
                </Link>

              </div>

            </div>
          </div>
        ))}
      </section>

      {/* 3. Bottom CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Need Architectural Validation For Your System?</h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Our practice leads provide complimentary architecture assessments with quantifiable cost-savings estimates.
          </p>
          <Link
            to="/contact"
            className="pill-btn"
          >
            Request Free Assessment Call &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
