// src/components/home/AboutOverview.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { brandConfig } from '../../data/siteContent';
import { CheckCircle2, ArrowRight, ShieldCheck, Award, Users } from 'lucide-react';

export default function AboutOverview() {
  return (
    <section className="py-24 bg-slate-50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Narrative */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 mb-4">
              <Award className="w-3.5 h-3.5" />
              <span>Enterprise Engineering Philosophy</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 leading-tight">
              High-Velocity Cloud Architecture & Custom Software Engineering
            </h2>

            <div className="w-16 h-1 bg-indigo-600 rounded-full mb-6" />

            <p className="text-base text-slate-600 leading-relaxed mb-5">
              Founded by software engineers and systems architects, <strong>{brandConfig.companyName}</strong> bridges the critical divide between legacy enterprise reliability and modern autonomous AI delivery. We eliminate technical debt before it compounds.
            </p>

            <p className="text-sm text-slate-600 leading-relaxed mb-8">
              Whether orchestrating petabyte-scale multi-cloud migrations, building bespoke full-stack applications with sub-second responsiveness, or embedding private LLM agents into internal knowledge bases, our pods operate with senior-level agency and strict SLA guarantees.
            </p>

            {/* Checklist */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {[
                "100% Zero-Downtime Migration Record",
                "Strict Mutual NDA & Enterprise Security",
                "Senior Engineers Only (No Juniors)",
                "Full IP Ownership Transferred"
              ].map((item, idx) => (
                <div key={idx} className="flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Dual CTAs */}
            <div className="flex flex-wrap items-center gap-4">
              <Link
                to="/about-us"
                className="pill-btn flex items-center gap-2 shadow-lg"
              >
                <span>Discover Our Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/services"
                className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-sm"
              >
                View Services Hub
              </Link>
            </div>
          </div>

          {/* Right Column: Visual Showcase Card */}
          <div className="relative">
            {/* Ambient Back Glow */}
            <div className="absolute -inset-4 bg-gradient-to-r from-indigo-500/10 to-blue-500/10 rounded-3xl blur-2xl pointer-events-none" />

            <div className="relative bg-white rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-3">
              {/* Autoplay Loop Video or Tech Mockup */}
              <div className="relative rounded-2xl overflow-hidden bg-slate-950 aspect-video flex items-center justify-center">
                <video 
                  src="/vid.mp4" 
                  autoPlay 
                  loop 
                  muted 
                  playsInline 
                  className="w-full h-full object-cover opacity-90"
                  poster="/hero_dashboard_mockup.png"
                />
                
                {/* Overlay Badge */}
                <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1.5 rounded-full border border-white/10 flex items-center gap-2 text-white text-[11px] font-bold">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Live Engineering Operations
                </div>
              </div>

              {/* Bottom Card Strip */}
              <div className="p-6 grid grid-cols-2 gap-4 bg-slate-50 rounded-xl mt-3 border border-slate-100">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Primary Partner</h4>
                    <p className="text-[11px] text-slate-500">Tier-1 Cloud Certified Architecture</p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-600 flex items-center justify-center flex-shrink-0">
                    <Users className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-slate-900">Global Pods</h4>
                    <p className="text-[11px] text-slate-500">24/7 Follow-the-Sun Coverage</p>
                  </div>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
