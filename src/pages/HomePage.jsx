import React, { useState } from 'react';
import HeroSlider from '../components/home/HeroSlider';
import AboutOverview from '../components/home/AboutOverview';
import PillarsGrid from '../components/home/PillarsGrid';
import TargetClients from '../components/home/TargetClients';
import { caseStudiesData } from '../data/caseStudiesData';
import { brandConfig } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { ArrowRight, Star, ShieldCheck, Sparkles, CheckCircle2, Globe2, Calendar, Clock, Zap } from 'lucide-react';
import { WhatsAppIcon } from '../components/common/SocialIcons';
import BookConsultationModal from '../components/common/BookConsultationModal';

export default function HomePage() {
  const [consultationOpen, setConsultationOpen] = useState(false);
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

      {/* 6. International Clients & Global Delivery Spotlight */}
      <section className="py-20 bg-slate-900 text-white relative overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 p-8 sm:p-12 rounded-3xl border border-white/10 shadow-2xl flex flex-col lg:flex-row lg:items-center justify-between gap-8">
            
            <div className="max-w-2xl space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 shadow-2xs">
                <Globe2 className="w-3.5 h-3.5" />
                <span>Global Remote Delivery &bull; 14+ Countries</span>
              </div>

              <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white tracking-tight leading-snug">
                Building for US, UK, European &amp; Global Enterprises
              </h2>

              <p className="text-sm text-slate-300 leading-relaxed">
                Experience seamless 4 to 8 hours daily timezone overlap with US EST/PST, UK GMT, and European CET. Guaranteed 100% IP ownership, mutual NDA protection, and multi-currency billing (USD, GBP, EUR, AUD).
              </p>

              {/* Timezone Badges */}
              <div className="flex flex-wrap gap-2 pt-1 text-xs font-semibold text-slate-300">
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🇺🇸 🇨🇦 US EST &amp; PST Overlap</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🇬🇧 🇪🇺 UK &amp; European CET Overlap</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🇦🇺 🇳🇿 Australia AEST Overlap</span>
                <span className="px-3 py-1 rounded-full bg-white/5 border border-white/10">🇦🇪 🇸🇬 Gulf &amp; Singapore</span>
              </div>
            </div>

            {/* Right Action Box */}
            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 flex-shrink-0">
              <Link
                to="/international-clients"
                className="px-7 py-3.5 rounded-full font-bold text-xs bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg transition-all text-center flex items-center justify-center gap-2"
              >
                <Globe2 className="w-4 h-4" />
                <span>View International Clients Guide &rarr;</span>
              </Link>

              <button
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="px-7 py-3.5 rounded-full font-bold text-xs bg-white text-slate-900 hover:bg-slate-100 shadow-md transition-all text-center flex items-center justify-center gap-2 cursor-pointer"
              >
                <Calendar className="w-4 h-4 text-indigo-600" />
                <span>Book Global Consultation</span>
              </button>

              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="px-7 py-3 rounded-full font-bold text-xs bg-emerald-600/90 hover:bg-emerald-600 text-white shadow-md transition-all text-center flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={14} />
                <span>WhatsApp Global Desk</span>
              </a>
            </div>

          </div>
        </div>
      </section>

      {/* 7. Ready-to-Build Conversion CTA Strip */}
      <section className="py-20 bg-gradient-to-r from-indigo-700 via-indigo-600 to-blue-600 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-200 bg-white/10 border border-white/15 mb-4 shadow-sm">
            <Zap className="w-3.5 h-3.5 text-amber-300" />
            <span>Fast-Track Engineering Discovery</span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4 leading-tight">
            Ready to Engineer Your Modern Cloud or AI Architecture?
          </h2>

          <p className="text-base text-indigo-100 max-w-2xl mx-auto mb-8 leading-relaxed">
            Schedule a free 30-min technical consultation. We review your requirements, sign a mutual NDA, and deliver a detailed architecture blueprint within <strong>24 to 48 hours</strong>.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5 mb-6">
            <button
              type="button"
              onClick={() => setConsultationOpen(true)}
              className="px-8 py-4 rounded-full font-bold text-sm bg-white text-indigo-900 hover:bg-slate-100 shadow-2xl transition-all transform hover:-translate-y-1 flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>Book a Free Consultation</span>
            </button>

            <a
              href={brandConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-4 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-500 shadow-xl transition-all transform hover:-translate-y-1 flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>WhatsApp Quick Chat (&lt; 15m)</span>
            </a>

            <Link
              to="/contact"
              className="px-7 py-4 rounded-full font-bold text-sm text-white border border-white/30 hover:bg-white/10 transition-all flex items-center gap-2"
            >
              <span>Project Scoping Form</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Response Commitment Microcopy */}
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-indigo-100 pt-2 border-t border-white/15 max-w-2xl mx-auto">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3.5 h-3.5 text-amber-300" />
              <span>Guaranteed Response within 4 Hours</span>
            </span>
            <span className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-300" />
              <span>Mutual NDA Guaranteed</span>
            </span>
            <span className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-sky-300" />
              <span>100% Free Architecture Review</span>
            </span>
          </div>

        </div>
      </section>

      {/* Free Consultation Booking Modal */}
      <BookConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTopic="Architecture Feasibility & System Engineering"
      />

    </div>
  );
}
