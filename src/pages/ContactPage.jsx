// src/pages/ContactPage.jsx
import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { brandConfig } from '../data/siteContent';
import QuickContactForm from '../components/common/QuickContactForm';
import ProjectEnquiryForm from '../components/common/ProjectEnquiryForm';
import ResponseCommitmentBadge from '../components/common/ResponseCommitmentBadge';
import BookConsultationModal from '../components/common/BookConsultationModal';
import { 
  Mail, Phone, MapPin, ShieldCheck, Clock, Headset, 
  Calendar, Zap, Globe2, ArrowRight 
} from 'lucide-react';
import { LinkedinIcon, FacebookIcon, GithubIcon, TwitterIcon, WhatsAppIcon } from '../components/common/SocialIcons';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service') || '';
  const initialMode = searchParams.get('mode') === 'quick' ? 'quick' : 'project';
  
  const [formMode, setFormMode] = useState(initialMode); // 'quick' | 'project'
  const [consultationOpen, setConsultationOpen] = useState(false);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Header Banner */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4 shadow-sm">
            <Headset className="w-3.5 h-3.5" />
            <span>Direct Technical Access &bull; No Middlemen</span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight mb-4 leading-tight">
            Schedule a Technical Consultation
          </h1>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto mb-8">
            Collaborate directly with our Principal Architects and Practice Leads. Receive a signed mutual NDA and preliminary architecture assessment within <strong>4 to 24 business hours</strong>.
          </p>

          {/* Quick Consultation & WhatsApp Header Action Bar */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              type="button"
              onClick={() => setConsultationOpen(true)}
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)'
              }}
            >
              <Calendar className="w-3.5 h-3.5" />
              <span>Book a Free 30-Min Consultation</span>
            </button>

            <a
              href={`https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent("Hi SynXCloud! I'd like to quickly enquire about a project.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 shadow-md transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <WhatsAppIcon size={14} />
              <span>WhatsApp Instant Desk (&lt; 15 min reply)</span>
            </a>

            <Link
              to="/international-clients"
              className="px-6 py-2.5 rounded-full text-xs font-bold text-slate-200 bg-white/10 hover:bg-white/20 border border-white/15 shadow-sm transition-all flex items-center gap-2"
            >
              <Globe2 className="w-3.5 h-3.5 text-indigo-400" />
              <span>International Clients Hub &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* 2. Form & Enquiry Section */}
      <section className="py-16 max-w-6xl mx-auto px-4 -mt-10 relative z-20">
        
        {/* 2-Column Contact & Enquiry Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5 mb-16">
          
          {/* Left Dark Info Panel (2 cols) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-8 sm:p-10 flex flex-col justify-between space-y-8">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-400 block mb-2">
                Engineering Headquarters
              </span>
              <h2 className="text-2xl font-bold mb-3 tracking-tight">
                Direct Practice Engagement
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                {brandConfig.companyName} provides full-lifecycle multi-cloud topology design, bespoke software systems, and autonomous AI automation.
              </p>

              {/* Fast WhatsApp Callout Card */}
              <div className="p-4 rounded-2xl bg-emerald-950/60 border border-emerald-500/30 mb-8 space-y-3">
                <div className="flex items-center gap-2 text-emerald-400 text-xs font-bold">
                  <div className="w-2 h-2 rounded-full bg-emerald-400 animate-ping" />
                  <span>WhatsApp Live Desk Active</span>
                </div>
                <p className="text-[11px] text-slate-300 leading-snug">
                  Need immediate architecture guidance? Chat directly with our engineering team on WhatsApp.
                </p>
                <a
                  href={`https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent("Hello SynXCloud! I would like to enquire about your engineering services.")}`}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full py-2 rounded-xl text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-colors flex items-center justify-center gap-2 shadow-sm"
                >
                  <WhatsAppIcon size={14} />
                  <span>Open WhatsApp Chat</span>
                </a>
              </div>

              {/* Contact Channels */}
              <div className="space-y-5 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs">Global Delivery Locations</strong>
                    <span className="text-slate-300 leading-snug text-xs">{brandConfig.contact.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs">Direct Email</strong>
                    <a href={`mailto:${brandConfig.contact.email}`} className="text-slate-300 hover:text-white transition-colors block text-xs">
                      {brandConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white text-xs">Direct Phone &amp; WhatsApp</strong>
                    <a href={`tel:${brandConfig.contact.phone}`} className="text-slate-300 hover:text-white transition-colors block text-xs">
                      {brandConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Protection & Socials */}
            <div>
              {/* International Hub Promotion Card */}
              <Link
                to="/international-clients"
                className="block p-3.5 rounded-2xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs text-slate-300 mb-6 transition-all group"
              >
                <div className="flex items-center justify-between font-bold text-white mb-1">
                  <span className="flex items-center gap-1.5 text-indigo-300">
                    <Globe2 className="w-3.5 h-3.5" />
                    <span>International Clients</span>
                  </span>
                  <ArrowRight className="w-3 h-3 text-slate-400 group-hover:translate-x-1 transition-transform" />
                </div>
                <p className="text-[11px] text-slate-400">
                  See timezone overlap windows for US, UK, Europe, Australia &amp; Gulf.
                </p>
              </Link>

              <div className="p-3 rounded-2xl bg-white/5 border border-white/10 text-[11px] text-slate-300 mb-5 flex items-center gap-2.5">
                <ShieldCheck className="w-4 h-4 text-emerald-400 flex-shrink-0" />
                <span>Protected under mutual NDA before technical discovery.</span>
              </div>

              <div className="flex items-center gap-2.5">
                <a 
                  href={brandConfig.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="LinkedIn"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <LinkedinIcon size={14} />
                </a>
                <a 
                  href={brandConfig.socials.whatsapp} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="WhatsApp"
                  className="w-8 h-8 rounded-full bg-emerald-600/50 hover:bg-emerald-600 flex items-center justify-center text-white transition-colors"
                >
                  <WhatsAppIcon size={14} />
                </a>
                <a 
                  href={brandConfig.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Facebook"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <FacebookIcon size={14} />
                </a>
                <a 
                  href={brandConfig.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="GitHub"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <GithubIcon size={14} />
                </a>
                <a 
                  href={brandConfig.socials.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  aria-label="Twitter"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <TwitterIcon size={14} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Lead Capture Panel (3 cols) */}
          <div className="lg:col-span-3 p-6 sm:p-10 md:p-12">
            
            {/* Form Mode Tab Switcher */}
            <div className="flex items-center p-1.5 bg-slate-100 rounded-2xl mb-8 border border-slate-200">
              <button
                type="button"
                onClick={() => setFormMode('project')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  formMode === 'project'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <span>📋 Project Scoping &amp; Budget</span>
                <span className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] rounded-full bg-indigo-50 text-indigo-700 font-bold">
                  Recommended
                </span>
              </button>

              <button
                type="button"
                onClick={() => setFormMode('quick')}
                className={`flex-1 py-2.5 px-3 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer ${
                  formMode === 'quick'
                    ? 'bg-white text-slate-900 shadow-sm border border-slate-200/80'
                    : 'text-slate-600 hover:text-slate-900'
                }`}
              >
                <Zap className="w-3.5 h-3.5 text-indigo-600" />
                <span>⚡ Quick Contact (&lt; 30s)</span>
              </button>
            </div>

            {/* Render Selected Form */}
            {formMode === 'quick' ? (
              <QuickContactForm />
            ) : (
              <ProjectEnquiryForm initialProjectType={preselected} />
            )}

          </div>

        </div>

        {/* Response-Time Commitment SLA Component */}
        <ResponseCommitmentBadge variant="card" />

      </section>

      {/* Free Consultation Booking Modal */}
      <BookConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTopic="Technical Architecture Consultation & Roadmap"
      />

    </div>
  );
}
