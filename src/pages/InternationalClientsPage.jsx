// src/pages/InternationalClientsPage.jsx
import React, { useState } from 'react';
import { brandConfig } from '../data/siteContent';
import { 
  Globe2, Clock, ShieldCheck, DollarSign, CheckCircle2, 
  ArrowRight, Sparkles, MessageSquare, Video, FileText, Zap, 
  Building2, Users, Layers
} from 'lucide-react';
import { WhatsAppIcon } from '../components/common/SocialIcons';
import ProjectEnquiryForm from '../components/common/ProjectEnquiryForm';
import ResponseCommitmentBadge from '../components/common/ResponseCommitmentBadge';
import BookConsultationModal from '../components/common/BookConsultationModal';

export default function InternationalClientsPage() {
  const [selectedRegion, setSelectedRegion] = useState('na'); // na | uk-eu | anz | mea
  const [consultationOpen, setConsultationOpen] = useState(false);

  const regions = [
    {
      id: 'na',
      name: 'North America (US & Canada)',
      flag: '🇺🇸 🇨🇦',
      timezones: 'EST (UTC-5) / CST (UTC-6) / PST (UTC-8)',
      overlap: '4 – 5 Hours Daily Real-Time Overlap',
      hours: '08:00 AM – 01:00 PM EST synchronous collaboration',
      currency: 'Invoiced in USD ($) via ACH / Stripe / Wire',
      advantage: 'Follow-the-Sun Speed: Sprint tasks assigned in your evening are completed, unit-tested, and deployed by your morning.'
    },
    {
      id: 'uk-eu',
      name: 'United Kingdom & Europe',
      flag: '🇬🇧 🇪🇺',
      timezones: 'GMT / BST (UTC+0/+1) / CET (UTC+1)',
      overlap: '6 – 8 Hours Daily Real-Time Overlap',
      hours: '08:30 AM – 04:30 PM London / Berlin working window',
      currency: 'Invoiced in GBP (£) or EUR (€) via SEPA / SWIFT',
      advantage: 'Near-Total Working Day Overlap: Real-time Slack huddles, instant code reviews, and pair-programming during normal European hours.'
    },
    {
      id: 'anz',
      name: 'Australia & New Zealand',
      flag: '🇦🇺 🇳🇿',
      timezones: 'AEST (UTC+10) / NZST (UTC+12)',
      overlap: '5 – 7 Hours Daytime Overlap',
      hours: '11:00 AM – 06:00 PM Sydney / Melbourne time',
      currency: 'Invoiced in AUD (A$) via Wise / Direct Wire',
      advantage: 'Same-Day Sprint Execution: Australian and New Zealand tech leaders enjoy smooth afternoon alignment and rapid turnaround.'
    },
    {
      id: 'mea',
      name: 'Middle East & Singapore',
      flag: '🇦🇪 🇸🇬',
      timezones: 'GST (UTC+4) / SGT (UTC+8)',
      overlap: '7 – 9 Hours Complete Working Day Overlap',
      hours: 'Full synchronous overlap with Dubai and Singapore',
      currency: 'Invoiced in AED or USD via SWIFT / Direct Wire',
      advantage: 'Direct Geographic Alignment: Fast on-demand sync, live operational monitoring, and rapid deployment cycles.'
    }
  ];

  const activeRegionData = regions.find(r => r.id === selectedRegion) || regions[0];

  const internationalGuarantees = [
    {
      title: "100% Intellectual Property Ownership",
      desc: "All source code, infrastructure as code, design tokens, and documentation belong exclusively to your business. We execute an airtight IP assignment agreement upon project commencement.",
      icon: ShieldCheck,
      badge: "Legal Security"
    },
    {
      title: "Mutual NDA Before Technical Scoping",
      desc: "We sign an enforceable international mutual Non-Disclosure Agreement before receiving your architecture blueprints, API schemas, or business logic.",
      icon: FileText,
      badge: "Zero Risk"
    },
    {
      title: "Multi-Currency Billing & Direct Rails",
      desc: "Pay in your local currency (USD, GBP, EUR, AUD, AED). We support SWIFT wires, US ACH, European SEPA, Stripe, and Wise Business with zero currency friction.",
      icon: DollarSign,
      badge: "Commercial Simplicity"
    },
    {
      title: "Senior English-Fluent Engineering Leads",
      desc: "No communication bottlenecks or middle-management phone tag. You collaborate directly with principal cloud architects and senior full-stack developers in fluent English.",
      icon: Users,
      badge: "Direct Access"
    },
    {
      title: "Asynchronous Transparency & Demos",
      desc: "Daily Slack or Microsoft Teams standups, Loom video feature walkthroughs, and live staging URLs for every sprint milestone so you never wonder what was shipped.",
      icon: Video,
      badge: "Full Visibility"
    },
    {
      title: "40% – 60% Cost Efficiency vs Local Hiring",
      desc: "Access tier-1 engineering talent comparable to Silicon Valley or London standards at a fraction of the cost, without employer taxes, recruitment fees, or hardware overhead.",
      icon: Zap,
      badge: "High ROI"
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white pt-36 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Glow ambient */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-indigo-600/15 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-5xl mx-auto text-center relative z-10">
          
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/10 border border-white/10 mb-6 shadow-md">
            <Globe2 className="w-4 h-4 text-indigo-400" />
            <span>Global Engineering Delivery Desk</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight">
            Enterprise Cloud &amp; AI Engineering <br className="hidden sm:inline" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-sky-300 to-blue-300">
              For International Clients
            </span>
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal">
            SynXCloud partners with high-growth companies across the US, UK, Europe, Australia, and the Middle East. Experience seamless timezone overlap, strict IP ownership, and senior-led technical execution.
          </p>

          {/* Dual CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-4 mb-12">
            <button
              type="button"
              onClick={() => setConsultationOpen(true)}
              className="px-8 py-4 rounded-full font-bold text-sm text-white shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer"
              style={{
                background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)',
                boxShadow: '0 8px 24px rgba(92, 93, 232, 0.45)'
              }}
            >
              <Video className="w-4 h-4" />
              <span>Book Timezone-Matched Consultation</span>
            </button>

            <a
              href={`https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent("Hi SynXCloud! I am an international client looking to discuss an engineering engagement.")}`}
              target="_blank"
              rel="noreferrer"
              className="px-8 py-4 rounded-full font-bold text-sm text-white bg-emerald-600 hover:bg-emerald-700 shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center gap-2"
            >
              <WhatsAppIcon size={18} />
              <span>Chat on WhatsApp (&lt; 15 min reply)</span>
            </a>
          </div>

          {/* Quick Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto pt-6 border-t border-white/10 text-center">
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-indigo-400">14+</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Countries Served</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-sky-400">4 – 8 Hrs</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Daily Timezone Overlap</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-emerald-400">100%</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">IP Rights Transferred</div>
            </div>
            <div className="p-3">
              <div className="text-2xl sm:text-3xl font-black text-purple-400">&lt; 4 Hours</div>
              <div className="text-xs text-slate-400 font-semibold uppercase tracking-wider mt-1">Guaranteed Response SLA</div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Interactive Timezone Overlap Matrix */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
            Timezone Alignment
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            How We Overlap With Your Working Hours
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-3 mb-4" />
          <p className="text-slate-600 text-sm sm:text-base">
            Select your region to see our synchronous collaboration windows and cross-border currency capabilities.
          </p>
        </div>

        {/* Region Selector Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {regions.map((reg) => (
            <button
              key={reg.id}
              onClick={() => setSelectedRegion(reg.id)}
              className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 cursor-pointer shadow-sm ${
                selectedRegion === reg.id
                  ? 'bg-slate-900 text-white ring-2 ring-indigo-500 shadow-md'
                  : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <span>{reg.flag}</span>
              <span>{reg.name}</span>
            </button>
          ))}
        </div>

        {/* Selected Region Detailed Spotlight Card */}
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
          
          <div className="lg:col-span-2 space-y-6">
            <div className="flex items-center gap-3">
              <span className="text-3xl">{activeRegionData.flag}</span>
              <div>
                <h3 className="text-2xl font-black text-slate-900">{activeRegionData.name}</h3>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider">
                  {activeRegionData.timezones}
                </span>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-4 rounded-2xl bg-indigo-50/70 border border-indigo-100">
                <div className="flex items-center gap-2 text-xs font-bold text-indigo-900 mb-1">
                  <Clock className="w-4 h-4 text-indigo-600" />
                  <span>Real-Time Daily Overlap</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">
                  {activeRegionData.overlap}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  {activeRegionData.hours}
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-emerald-50/70 border border-emerald-100">
                <div className="flex items-center gap-2 text-xs font-bold text-emerald-900 mb-1">
                  <DollarSign className="w-4 h-4 text-emerald-600" />
                  <span>Currency &amp; Invoicing</span>
                </div>
                <div className="text-sm font-extrabold text-slate-900">
                  {activeRegionData.currency}
                </div>
                <div className="text-xs text-slate-600 mt-1">
                  Zero currency-conversion friction
                </div>
              </div>
            </div>

            <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-700 leading-relaxed flex items-start gap-3">
              <Sparkles className="w-4 h-4 text-indigo-600 flex-shrink-0 mt-0.5" />
              <div>
                <strong className="block text-slate-900 mb-0.5">Velocity Advantage:</strong>
                <span>{activeRegionData.advantage}</span>
              </div>
            </div>
          </div>

          {/* Region Action Panel */}
          <div className="bg-gradient-to-br from-indigo-900 to-slate-900 text-white p-7 rounded-2xl flex flex-col justify-between space-y-6">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-widest text-indigo-300 block mb-2">
                Dedicated International Desk
              </span>
              <h4 className="text-lg font-extrabold text-white mb-2">
                Ready to review specifications?
              </h4>
              <p className="text-xs text-slate-300 leading-relaxed">
                Schedule a 30-min architecture consultation matched to your local working hours.
              </p>
            </div>

            <div className="space-y-3">
              <button
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="w-full py-3 rounded-full font-bold text-xs bg-white text-indigo-900 hover:bg-slate-100 transition-colors shadow-md text-center block cursor-pointer"
              >
                Schedule Free Consultation
              </button>

              <a
                href={`https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent(`Hi SynXCloud! I am inquiring from ${activeRegionData.name} regarding engineering services.`)}`}
                target="_blank"
                rel="noreferrer"
                className="w-full py-3 rounded-full font-bold text-xs text-white bg-emerald-600 hover:bg-emerald-700 transition-colors shadow-md text-center flex items-center justify-center gap-2"
              >
                <WhatsAppIcon size={14} />
                <span>Chat on WhatsApp Instantly</span>
              </a>
            </div>

            <div className="text-[11px] text-slate-400 text-center flex items-center justify-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
              <span>Mutual NDA provided on first contact</span>
            </div>
          </div>

        </div>
      </section>

      {/* 3. International Guarantees & Why SynXCloud */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              International Delivery Standards
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
              Airtight Legal, Communication &amp; Quality Assurances
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mt-3 mb-4" />
            <p className="text-slate-600 text-sm sm:text-base">
              Hiring offshore should never mean compromising on IP protection, transparency, or engineering precision.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {internationalGuarantees.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div
                  key={idx}
                  className="p-7 rounded-3xl bg-slate-50 border border-slate-200 hover:border-indigo-400 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-12 h-12 rounded-2xl bg-indigo-100 text-indigo-600 flex items-center justify-center shadow-2xs">
                        <Icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-extrabold uppercase px-3 py-1 rounded-full bg-white text-indigo-700 border border-slate-200 shadow-2xs">
                        {item.badge}
                      </span>
                    </div>

                    <h3 className="text-base font-extrabold text-slate-900 mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* 4. Strict Response-Time Commitment */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResponseCommitmentBadge variant="card" />
      </section>

      {/* 5. International Project Enquiry & Sizing Form */}
      <section className="py-20 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl p-8 sm:p-12 border border-slate-200 shadow-2xl">
          <div className="text-center max-w-xl mx-auto mb-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              International Project Scoping
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 mb-3">
              Request Your Global Engineering Proposal
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Submit your project specifications below. Our Senior Practice Leads will deliver a detailed technical assessment and milestone estimate within <strong>24 business hours</strong>.
            </p>
          </div>

          <ProjectEnquiryForm onSuccess={() => {}} />
        </div>
      </section>

      {/* Consultation Booking Modal */}
      <BookConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTopic="International Engineering Engagement & Timezone Alignment"
      />

    </div>
  );
}
