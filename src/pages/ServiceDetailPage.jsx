// src/pages/ServiceDetailPage.jsx
import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { servicePillars, brandConfig } from '../data/siteContent';
import { caseStudiesData } from '../data/caseStudiesData';
import { CheckCircle2, ArrowRight, ShieldCheck, Sparkles, Layers, Cpu, Server, Code, Zap, Calendar, Clock } from 'lucide-react';
import FAQAccordion from '../components/common/FAQAccordion';
import { WhatsAppIcon } from '../components/common/SocialIcons';
import BookConsultationModal from '../components/common/BookConsultationModal';

export default function ServiceDetailPage() {
  const { pillar: pillarSlug, id: subserviceSlug } = useParams();
  const [consultationOpen, setConsultationOpen] = useState(false);

  // Find corresponding pillar or fallback to Pillar 1
  const pillar = servicePillars.find(p => p.slug === pillarSlug) || servicePillars[0];
  
  // Find subservice if present in URL
  const subservice = subserviceSlug 
    ? pillar.subservices.find(s => s.slug === subserviceSlug) || pillar.subservices[0]
    : null;

  const title = subservice ? subservice.title : pillar.name;
  const desc = subservice ? subservice.desc : pillar.tagline;
  const capabilities = subservice ? subservice.capabilities : pillar.subservices.map(s => s.title);
  const techStack = subservice?.techStack || ["AWS", "Kubernetes", "Docker", "Terraform", "PostgreSQL", "React 19"];

  // Find matching case study or fallback to related
  const relatedCase = caseStudiesData.find(c => c.pillarSlug === pillar.slug) || caseStudiesData[0];

  // Cross-cluster recommendation (different pillar)
  const adjacentPillar = servicePillars.find(p => p.id !== pillar.id) || servicePillars[1];

  const detailFaqs = [
    {
      q: `What is the estimated timeline for delivering ${title}?`,
      a: "Depending on system scope, initial architecture discovery takes 3-5 business days. Production sprints are typically structured into 2-week milestones, with most deployments shipping within 4 to 8 weeks."
    },
    {
      q: "How do you guarantee zero downtime during migrations or deployments?",
      a: "We utilize active-active replication, blue-green deployment pipelines, automated health probes, and automated canary rollouts with zero-second rollback gates."
    },
    {
      q: "Can our existing in-house developers collaborate with your engineers?",
      a: "Absolutely. We routinely operate in co-development models where our senior architects pair-program with internal engineering leads to accelerate velocity and ensure thorough knowledge transfer."
    },
    {
      q: "What security compliance frameworks are supported?",
      a: "Our architectures conform to SOC-2 Type II, ISO 27001, HIPAA, PCI-DSS Level 1, and GDPR standards, with automated compliance guardrails built directly into our Infrastructure as Code (IaC)."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section 
        className="pt-36 pb-24 text-white relative overflow-hidden"
        style={{
          background: `radial-gradient(circle at 85% 15%, ${pillar.themeColor}35 0%, transparent 65%), linear-gradient(135deg, #0f172a 0%, #1e1b4b 100%)`
        }}
      >
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          {/* Breadcrumb Navigation */}
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-4 flex flex-wrap items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/services" className="hover:text-white">Services</Link>
            <span>/</span>
            <Link to={`/services/${pillar.slug}`} className="hover:text-white" style={{ color: pillar.themeColor }}>
              {pillar.name}
            </Link>
            {subservice && (
              <>
                <span>/</span>
                <span className="text-white font-semibold">{subservice.title}</span>
              </>
            )}
          </div>

          <div className="inline-block mb-3">
            <span 
              className="text-xs font-bold uppercase tracking-wider px-3.5 py-1 rounded-full"
              style={{ backgroundColor: `${pillar.themeColor}25`, color: pillar.themeColor, border: `1px solid ${pillar.themeColor}40` }}
            >
              {pillar.badge}
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight max-w-4xl">
            {title}
          </h1>

          <p className="text-lg text-slate-300 max-w-2xl mb-8 leading-relaxed font-normal">
            {desc} Built with enterprise-grade resilience, automated telemetry, and rigorous compliance standards.
          </p>

          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3.5">
              <button 
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full text-white font-bold text-sm shadow-2xl transition-all transform hover:-translate-y-0.5 cursor-pointer"
                style={{ 
                  backgroundColor: pillar.themeColor,
                  boxShadow: `0 8px 25px ${pillar.themeColor}45`
                }}
              >
                <Calendar className="w-4 h-4" />
                <span>Book Free Consultation</span>
              </button>

              <a
                href={brandConfig.contact.whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-emerald-300 font-bold text-sm bg-emerald-950/40 border border-emerald-500/40 hover:bg-emerald-900/50 transition-colors shadow-md"
              >
                <WhatsAppIcon size={16} />
                <span>WhatsApp Desk (&lt; 15m)</span>
              </a>

              <Link
                to={`/contact?service=${subserviceSlug || pillarSlug}`}
                className="inline-flex items-center gap-2 px-6 py-4 rounded-full text-white font-bold text-sm border border-white/20 hover:bg-white/10 transition-colors"
              >
                <span>Project Scoping Form</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>

            <div className="flex flex-wrap items-center gap-x-5 gap-y-1 text-xs text-slate-300">
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5 text-indigo-400" />
                <span>Guaranteed 4-hour response SLA</span>
              </span>
              <span className="flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                <span>Mutual NDA on first touch</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Zap className="w-3.5 h-3.5 text-amber-400" />
                <span>Zero sales pressure</span>
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Overview Section: Bottlenecks vs Solution */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Architectural Overview
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
              Eliminate Bottlenecks & Accelerate Operational Velocity
            </h2>
            <div className="w-16 h-1 rounded-full mb-6" style={{ backgroundColor: pillar.themeColor }} />
            
            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Legacy architectures and fragile manual deployments throttle enterprise growth. When systems cannot auto-scale or lack automated failure recovery, minor outages cause massive customer disruption and cost thousands per minute.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              Our <strong>{title}</strong> framework implements declarative infrastructure, zero-trust security postures, and continuous telemetry pipelines, allowing your organization to ship updates rapidly while maintaining 99.99% availability.
            </p>

            {/* Tech Stack Badges */}
            <div className="pt-4 border-t border-slate-200">
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-3">
                Core Technologies Employed
              </span>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech, idx) => (
                  <span 
                    key={idx}
                    className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200 text-slate-700 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* SLA & Guarantees Card */}
          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl space-y-6">
            <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5" style={{ color: pillar.themeColor }} />
              Enterprise Service Level Agreement
            </h3>

            <div className="space-y-4">
              {[
                { label: "Guaranteed Production Uptime", value: "99.99% SLA" },
                { label: "Incident Escalation Response", value: "< 15 Minutes L3" },
                { label: "Security & Code Audits", value: "SOC-2 & ISO 27001" },
                { label: "IP Rights & Source Code", value: "100% Client Owned" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-center justify-between p-3.5 rounded-xl bg-slate-50 border border-slate-100 text-xs">
                  <span className="font-semibold text-slate-600">{item.label}</span>
                  <strong className="text-slate-900 font-extrabold">{item.value}</strong>
                </div>
              ))}
            </div>

            <Link
              to={`/contact?service=${subserviceSlug || pillarSlug}`}
              className="w-full text-center block py-3 rounded-xl font-bold text-xs text-white transition-opacity hover:opacity-90"
              style={{ backgroundColor: pillar.themeColor }}
            >
              Request Custom SLA Proposal
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Core Capabilities Grid (Feature Cards) */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Execution Scope
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Core Engineering Deliverables</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: pillar.themeColor }} />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((item, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between"
                style={{ borderTop: `4px solid ${pillar.themeColor}` }}
              >
                <div>
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                    style={{ backgroundColor: `${pillar.themeColor}18`, color: pillar.themeColor }}
                  >
                    <CheckCircle2 className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    Enterprise-grade implementation tailored for high concurrency, strict security compliance, and measurable operational velocity.
                  </p>
                </div>
                <div className="text-[11px] font-bold uppercase tracking-wider flex items-center gap-1" style={{ color: pillar.themeColor }}>
                  <span>Verified Deliverable</span>
                  <CheckCircle2 className="w-3.5 h-3.5" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Real-World Case Study Highlight Box */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white rounded-3xl p-10 md:p-14 border border-white/10 shadow-2xl relative overflow-hidden">
          <div className="max-w-3xl relative z-10">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 block flex items-center gap-2">
              <Sparkles className="w-4 h-4" />
              Proven Production Impact Case Study
            </span>
            <h3 className="text-2xl md:text-3xl font-bold mb-4 leading-tight">
              {relatedCase.title}
            </h3>
            <p className="text-slate-300 text-sm md:text-base mb-8 leading-relaxed">
              {relatedCase.challenge} {relatedCase.solution}
            </p>

            {/* Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 mb-8">
              {relatedCase.metrics.map((m, idx) => (
                <div key={idx}>
                  <div className="text-xl sm:text-2xl font-black text-indigo-400">{m.value}</div>
                  <div className="text-[10px] text-slate-400 uppercase tracking-wider font-semibold">{m.label}</div>
                </div>
              ))}
            </div>

            <Link 
              to="/case-studies"
              className="inline-flex items-center gap-2 font-bold text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Read Full Case Study & Client Quote</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 5. Cross-Cluster / Upsell Callout Box */}
      <section className="pb-20 max-w-6xl mx-auto px-4">
        <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-md flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-start gap-4">
            <div 
              className="w-12 h-12 rounded-xl flex items-center justify-center text-white flex-shrink-0"
              style={{ backgroundColor: adjacentPillar.themeColor }}
            >
              <Zap className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-slate-400 block mb-1">
                Cross-Practice Synergy
              </span>
              <h4 className="text-lg font-bold text-slate-900">
                Pair with {adjacentPillar.name}
              </h4>
              <p className="text-xs text-slate-600 max-w-xl mt-1">
                Combine infrastructure resiliency with {adjacentPillar.tagline.toLowerCase()} for an end-to-end modernization strategy.
              </p>
            </div>
          </div>

          <Link
            to={`/services/${adjacentPillar.slug}`}
            className="px-6 py-3 rounded-full text-xs font-bold text-white shadow-md transition-transform hover:-translate-y-0.5 flex-shrink-0"
            style={{ backgroundColor: adjacentPillar.themeColor }}
          >
            Explore {adjacentPillar.name} &rarr;
          </Link>
        </div>
      </section>

      {/* 6. FAQ Accordion */}
      <section className="py-20 bg-slate-100 border-t border-slate-200">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-14">
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Service FAQs</h2>
            <div className="w-16 h-1 mx-auto rounded-full" style={{ backgroundColor: pillar.themeColor }} />
          </div>
          <FAQAccordion items={detailFaqs} accentColor={pillar.themeColor} />
        </div>
      </section>

      {/* 7. Bottom Conversion Banner */}
      <section className="py-20 bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 block">
            Next Steps For Your Project
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Ready to Scope Your {title} Initiative?
          </h2>
          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed">
            Collaborate directly with our Principal Architects. We provide a preliminary architecture review, sprint sizing, and deliverable roadmap within 24 to 48 hours.
          </p>

          <div className="flex flex-wrap items-center justify-center gap-3.5">
            <button
              type="button"
              onClick={() => setConsultationOpen(true)}
              className="px-8 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-white text-slate-900 hover:bg-slate-100 shadow-xl transition-all flex items-center gap-2 cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-indigo-600" />
              <span>Book a Free Consultation</span>
            </button>

            <a
              href={brandConfig.contact.whatsappUrl}
              target="_blank"
              rel="noreferrer"
              className="px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-xl transition-all flex items-center gap-2"
            >
              <WhatsAppIcon size={16} />
              <span>Chat on WhatsApp (&lt; 15m reply)</span>
            </a>

            <Link
              to="/international-clients"
              className="px-7 py-3.5 rounded-full font-bold text-xs sm:text-sm text-slate-300 border border-white/20 hover:bg-white/10 transition-colors"
            >
              <span>International Delivery Hub &rarr;</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Free Consultation Booking Modal */}
      <BookConsultationModal
        isOpen={consultationOpen}
        onClose={() => setConsultationOpen(false)}
        defaultTopic={`${title} (${pillar.name})`}
      />

    </div>
  );
}
