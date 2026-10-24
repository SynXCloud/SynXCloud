// src/pages/ContactPage.jsx
import React from 'react';
import { useSearchParams } from 'react-router-dom';
import { brandConfig } from '../data/siteContent';
import ContactForm from '../components/common/ContactForm';
import { Mail, Phone, MapPin, ShieldCheck, Clock, Headset } from 'lucide-react';
import { LinkedinIcon, FacebookIcon, GithubIcon, TwitterIcon } from '../components/common/SocialIcons';

export default function ContactPage() {
  const [searchParams] = useSearchParams();
  const preselected = searchParams.get('service') || '';

  return (
    <div className="bg-slate-50 min-h-screen pt-36 pb-24">
      <div className="max-w-6xl mx-auto px-4">
        
        {/* Page Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-600 bg-indigo-50 border border-indigo-100 mb-3">
            <Headset className="w-3.5 h-3.5" />
            <span>Direct Technical Access</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            Schedule a Technical Consultation
          </h1>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed">
            Speak directly with our senior systems architects and practice leads. We respond within 24 business hours with an NDA and preliminary assessment.
          </p>
        </div>

        {/* 2-Column Contact Card */}
        <div className="bg-white rounded-3xl border border-slate-200 shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-5">
          
          {/* Left Dark Info Panel (2 cols) */}
          <div className="lg:col-span-2 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white p-10 flex flex-col justify-between space-y-10">
            <div>
              <h2 className="text-2xl font-bold mb-4 tracking-tight">
                Engineering Headquarters
              </h2>
              <p className="text-slate-300 text-xs sm:text-sm leading-relaxed mb-8">
                {brandConfig.companyName} partners with enterprises globally to build resilient multi-cloud topologies and bespoke AI platforms.
              </p>

              <div className="space-y-6 text-xs sm:text-sm">
                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white">Global Delivery Locations</strong>
                    <span className="text-slate-300 leading-snug">{brandConfig.contact.location}</span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white">Direct Email</strong>
                    <a href={`mailto:${brandConfig.contact.email}`} className="text-slate-300 hover:text-white transition-colors block text-sm">
                      {brandConfig.contact.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center flex-shrink-0 text-indigo-400">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <strong className="block text-white">Direct Phone</strong>
                    <a href={`tel:${brandConfig.contact.phone}`} className="text-slate-300 hover:text-white transition-colors block text-sm">
                      {brandConfig.contact.phone}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA Protection & Socials */}
            <div>
              <div className="p-4 rounded-2xl bg-white/5 border border-white/10 text-xs text-slate-300 mb-6 flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-400 flex-shrink-0" />
                <span>Protected under mutual Non-Disclosure Agreement before technical discovery.</span>
              </div>

              <div className="flex items-center gap-3">
                <a 
                  href={brandConfig.socials.linkedin} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <LinkedinIcon size={16} />
                </a>
                <a 
                  href={brandConfig.socials.facebook} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <FacebookIcon size={16} />
                </a>
                <a 
                  href={brandConfig.socials.github} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <GithubIcon size={16} />
                </a>
                <a 
                  href={brandConfig.socials.twitter} 
                  target="_blank" 
                  rel="noreferrer"
                  className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-indigo-600 transition-colors"
                >
                  <TwitterIcon size={16} />
                </a>
              </div>
            </div>

          </div>

          {/* Right Lead Capture Form (3 cols) */}
          <div className="lg:col-span-3 p-8 sm:p-12 md:p-14">
            <ContactForm preselectedService={preselected} />
          </div>

        </div>

      </div>
    </div>
  );
}
