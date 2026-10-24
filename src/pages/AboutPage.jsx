// src/pages/AboutPage.jsx
import React from 'react';
import { brandConfig, metricsData } from '../data/siteContent';
import { Link } from 'react-router-dom';
import { ShieldCheck, Award, Users, Terminal, CheckCircle2, ArrowRight, Zap, Target, Lock, Layers, Cpu, GitBranch } from 'lucide-react';

export default function AboutPage() {
  const values = [
    {
      icon: Terminal,
      title: "Senior Engineering Agency",
      desc: "We do not assign junior trainees to enterprise codebases. Every engineer in our pods has shipped production software at scale."
    },
    {
      icon: Zap,
      title: "Zero Compounding Technical Debt",
      desc: "Speed without architecture creates friction. We build with modular design tokens, automated CI/CD pipelines, and type-safe systems."
    },
    {
      icon: Lock,
      title: "Ironclad Security & Mutual NDA",
      desc: "Enterprise data privacy and IP protection are non-negotiable. Full IP ownership is transferred upon milestone completion."
    },
    {
      icon: Target,
      title: "Quantifiable Business ROI",
      desc: "We measure success in reduced cloud bills, sub-second latency, higher checkout conversions, and 99.99% uptime guarantees."
    }
  ];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Our Origin & Engineering Mission</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Building High-Concurrence Cloud Systems & Autonomous Software
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            {brandConfig.companyName} was founded with a singular purpose: to replace slow, bureaucratic legacy consulting with agile, senior-only engineering squads.
          </p>
        </div>
      </section>

      {/* 2. Story Narrative */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Our Journey
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-4 leading-tight">
              From Infrastructure Optimization to Global Cloud & AI Pods
            </h2>
            <div className="w-16 h-1 bg-indigo-600 rounded-full mb-6" />

            <p className="text-sm text-slate-600 leading-relaxed mb-4">
              Modern enterprises face a relentless challenge: their existing systems are too slow and expensive to maintain, yet migrating to modern cloud architectures carries immense operational risk.
            </p>
            <p className="text-sm text-slate-600 leading-relaxed mb-6">
              At <strong>{brandConfig.companyName}</strong>, we eliminated this risk through automated migration blueprints, continuous synchronization pipelines, and senior-led pod delivery. Today, we partner with clients across North America, Europe, and Asia-Pacific to power high-frequency transactional backends and autonomous AI workflows.
            </p>

            <div className="grid grid-cols-2 gap-4 pt-4 border-t border-slate-200">
              <div>
                <div className="text-3xl font-black text-indigo-600">300+</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
                  Cloud Deployments
                </div>
              </div>
              <div>
                <div className="text-3xl font-black text-indigo-600">99.99%</div>
                <div className="text-xs text-slate-500 font-semibold uppercase tracking-wider mt-1">
                  Uptime Delivered
                </div>
              </div>
            </div>
          </div>

          <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-xl">
            <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-indigo-600" />
              Our Core Commitments
            </h3>
            <ul className="space-y-4">
              {[
                "Zero offshore subcontracting — all work done by certified core staff.",
                "Real-time transparent code repository access from day one.",
                "Guaranteed senior developer overlap for all US and European timezones.",
                "Enterprise SOC2 & ISO 27001 development compliance standards.",
                "Mutual Non-Disclosure Agreement signed before project discovery."
              ].map((item, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-700 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 3. Leadership Team - Commented out as requested */}
      {/*
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Leadership Team
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Founded & Driven By Engineers
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {brandConfig.team.map((member, idx) => (
              <div 
                key={idx}
                className="bg-slate-50 rounded-2xl p-8 border border-slate-200 text-center hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col items-center"
              >
                <div className="w-28 h-28 rounded-full overflow-hidden border-4 border-indigo-100 mb-5 shadow-md bg-white">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${encodeURIComponent(member.name)}&background=5c5de8&color=fff`;
                    }}
                  />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-1">{member.name}</h3>
                <span className="text-xs font-bold text-indigo-600 uppercase tracking-wider mb-4">
                  {member.role}
                </span>
                <p className="text-xs text-slate-600 leading-relaxed mb-6">
                  {member.bio}
                </p>
                <a 
                  href={member.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="mt-auto px-5 py-2 rounded-full text-xs font-bold text-indigo-600 bg-indigo-50 hover:bg-indigo-600 hover:text-white transition-colors"
                >
                  View LinkedIn Profile &rarr;
                </a>
              </div>
            ))}
          </div>

        </div>
      </section>
      */}

      {/* 3. Global Engineering Delivery Framework */}
      <section className="py-24 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Global Delivery Architecture
            </span>
            <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-4 tracking-tight">
              Dedicated Senior Engineering Pods
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
            <p className="text-slate-600 text-sm max-w-2xl mx-auto leading-relaxed">
              We do not bill for bloated management layers. Your organization pairs directly with a self-sufficient, multidisciplinary engineering squad engineered to deliver production-grade software.
            </p>
          </div>

          {/* 3-Column Pod Capability Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                <Layers className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-2">Practice Pod 01</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Multi-Cloud & DevOps Squad</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Certified AWS, Azure, and GCP architects specializing in Terraform IaC, zero-downtime Kubernetes clusters, and automated blue-green CI/CD deployment pipelines.
              </p>
              <ul className="space-y-2 mt-auto text-xs text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Kubernetes & Istio Mesh</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>FinOps 35%+ Cost Reduction</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>24/7 SRE Uptime Watch</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                <Cpu className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-2">Practice Pod 02</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Autonomous AI & Systems Squad</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                Specialized machine learning and agentic systems engineers building multi-agent autonomous orchestrations, enterprise RAG pipelines, and deterministic guardrails.
              </p>
              <ul className="space-y-2 mt-auto text-xs text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Agentic Tool Calling Workflows</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Strict PII & Privacy Guardrails</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>High-Throughput Vector DBs</span>
                </li>
              </ul>
            </div>

            <div className="bg-slate-50 rounded-2xl p-8 border border-slate-200 hover:shadow-xl transition-all hover:-translate-y-1.5 flex flex-col">
              <div className="w-12 h-12 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                <GitBranch className="w-6 h-6" />
              </div>
              <span className="text-[11px] font-bold uppercase tracking-wider text-indigo-600 mb-2">Practice Pod 03</span>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Enterprise Full-Stack Squad</h3>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">
                High-throughput React 19, Next.js, Go, Node.js, and Python backend engineers creating microservices, event-driven architectures, and frictionless digital products.
              </p>
              <ul className="space-y-2 mt-auto text-xs text-slate-700 pt-4 border-t border-slate-200">
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Sub-200ms API Latency SLAs</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Atomic Design Tokens & Microfrontends</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  <span>Complete IP & Code Transfer</span>
                </li>
              </ul>
            </div>
          </div>

          {/* 4-Step Agile Delivery Workflow */}
          <div className="bg-gradient-to-br from-slate-900 to-indigo-950 rounded-3xl p-8 sm:p-12 text-white border border-white/10 shadow-xl">
            <div className="text-center max-w-2xl mx-auto mb-10">
              <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 block">
                Execution Blueprint
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                How We Deliver: From Discovery to Scale
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { step: "01", title: "Architectural Audit", desc: "Comprehensive technical review of your existing infrastructure, bottlenecks, and security posture." },
                { step: "02", title: "Canary Blueprint", desc: "Prototyping isolated testbeds, defining SLA metrics, and validating migration pipelines." },
                { step: "03", title: "Production Cutover", desc: "Executing automated zero-downtime cutover with automated rollback safety triggers." },
                { step: "04", title: "Continuous SRE", desc: "Ongoing 24/7 telemetry monitoring, security auditing, and FinOps cloud spend optimization." }
              ].map((s, idx) => (
                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-indigo-400/50 transition-colors">
                  <div className="text-2xl font-black text-indigo-400 mb-2">{s.step}</div>
                  <h4 className="text-sm font-bold text-white mb-1.5">{s.title}</h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* 4. Engineering Principles Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
            Guiding Values
          </span>
          <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
            Our Engineering Principles
          </h2>
          <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div 
                key={idx}
                className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm flex items-start gap-5 hover:shadow-lg transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0">
                  <Icon className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{v.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed">{v.desc}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 5. Bottom CTA */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Ready to Accelerate Your Engineering Roadmap?</h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Reach out today to discuss your architecture roadmap or explore a dedicated engineering pod partnership.
          </p>
          <Link
            to="/contact"
            className="pill-btn"
          >
            Schedule Technical Discovery Call &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
