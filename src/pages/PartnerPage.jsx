// src/pages/PartnerPage.jsx
import React, { useState } from 'react';
import { partnerTiers } from '../data/partnersData';
import { Link } from 'react-router-dom';
import { Handshake, CheckCircle2, ArrowRight, ShieldCheck, DollarSign, Sparkles, Send } from 'lucide-react';

export default function PartnerPage() {
  const [partnerForm, setPartnerForm] = useState({
    name: '',
    company: '',
    email: '',
    tier: 'solution-partner',
    website: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Handshake className="w-3.5 h-3.5" />
            <span>Global Partner Ecosystem</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Grow Your Business With SynXcloud Engineering
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Join our ecosystem of agencies, consultants, and enterprise systems integrators. Earn generous recurring commissions or deliver world-class cloud and AI solutions under your own brand.
          </p>
        </div>
      </section>

      {/* 2. Partner Tiers Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        <div className="text-center max-w-2xl mx-auto">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
            Ecosystem Tiers
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Choose Your Partnership Path
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
          <p className="text-sm text-slate-600">
            Transparent commission schedules and white-glove engineering support for every tier.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {partnerTiers.map((tier) => (
            <div 
              key={tier.id}
              className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-indigo-50 text-indigo-600">
                    {tier.badge}
                  </span>
                  <DollarSign className="w-5 h-5 text-emerald-500" />
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1">{tier.name}</h3>
                <div className="text-sm font-extrabold text-indigo-600 mb-3">{tier.commission}</div>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">{tier.tagline}</p>

                <div className="space-y-3 pt-4 border-t border-slate-100 mb-6">
                  {tier.benefits.map((ben, bIdx) => (
                    <div key={bIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100 text-[11px] text-slate-500 mb-6">
                  <strong className="text-slate-700 block mb-0.5">Ideal For:</strong>
                  {tier.idealFor}
                </div>
              </div>

              <a
                href="#partner-form"
                onClick={() => setPartnerForm(prev => ({ ...prev, tier: tier.id }))}
                className="w-full text-center py-3.5 rounded-full font-bold text-xs text-white shadow-md transition-transform hover:-translate-y-0.5"
                style={{
                  background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)'
                }}
              >
                Apply for {tier.name.split(' ')[0]} &rarr;
              </a>
            </div>
          ))}
        </div>

      </section>

      {/* 3. Partner Registration Form */}
      <section id="partner-form" className="py-20 bg-white border-t border-slate-200">
        <div className="max-w-3xl mx-auto px-4">
          
          <div className="text-center mb-12">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Application
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Join the Partner Network
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
            <p className="text-sm text-slate-600">
              Submit your details to receive our official Partner Agreement and schedule an onboarding session with our partnership leads.
            </p>
          </div>

          <div className="bg-slate-50 p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="text-center py-10 animate-fadeIn">
                <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-2">Partner Application Received!</h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto mb-6">
                  Thank you, <strong>{partnerForm.name}</strong>. Our Global Alliance Director will review your organization's details and reach out within 24 business hours.
                </p>
                <button
                  type="button"
                  onClick={() => setSubmitted(false)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold"
                >
                  Submit Another Application
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Your Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Alex Mercer"
                      value={partnerForm.name}
                      onChange={e => setPartnerForm({ ...partnerForm, name: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Company / Agency Name</label>
                    <input 
                      type="text" 
                      required 
                      placeholder="Mercer Advisory Group"
                      value={partnerForm.company}
                      onChange={e => setPartnerForm({ ...partnerForm, company: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Work Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="alex@merceradvisory.com"
                      value={partnerForm.email}
                      onChange={e => setPartnerForm({ ...partnerForm, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Partner Tier</label>
                    <select
                      value={partnerForm.tier}
                      onChange={e => setPartnerForm({ ...partnerForm, tier: e.target.value })}
                    >
                      <option value="referral-partner">Referral Affiliate (10-15% Commission)</option>
                      <option value="solution-partner">Certified Solution Partner (20-25% Margin)</option>
                      <option value="system-integrator">Strategic System Integrator (Custom Alliance)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Website URL</label>
                  <input 
                    type="url" 
                    placeholder="https://www.merceradvisory.com"
                    value={partnerForm.website}
                    onChange={e => setPartnerForm({ ...partnerForm, website: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">How can we collaborate?</label>
                  <textarea 
                    rows="3" 
                    placeholder="Describe your current client portfolio, typical deal size, or target integration..."
                    value={partnerForm.message}
                    onChange={e => setPartnerForm({ ...partnerForm, message: e.target.value })}
                  />
                </div>

                <button type="submit" className="w-full pill-btn mt-2">
                  Submit Partner Registration &rarr;
                </button>
              </form>
            )}
          </div>

        </div>
      </section>

    </div>
  );
}
