// src/components/home/TargetClients.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { brandConfig, metricsData } from '../../data/siteContent';
import { CheckCircle2, ArrowRight, Building2, ShieldCheck, Clock, Layers, Sparkles } from 'lucide-react';

export default function TargetClients() {
  const sectors = [
    { title: "Financial Services & FinTech", desc: "PCI-DSS compliant low-latency transactional architectures." },
    { title: "Healthcare & Life Sciences", desc: "HIPAA-certified electronic health record integrations & clinical RAG." },
    { title: "Global Supply Chain & Logistics", desc: "Real-time fleet telemetry, Kafka event streams & predictive route ML." },
    { title: "High-Growth Enterprise SaaS", desc: "Multi-tenant scalability, automated Stripe metering & GitOps CI/CD." }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
      
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Who We Serve */}
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
              <Building2 className="w-3.5 h-3.5" />
              <span>Target Client Ecosystem</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold text-white mb-4 leading-tight">
              Engineered for Mission-Critical Enterprise Workloads
            </h2>

            <div className="w-16 h-1 bg-indigo-500 rounded-full mb-6" />

            <p className="text-base text-slate-300 leading-relaxed mb-8">
              We specialize in complex, high-concurrency environments where downtime is not an option. Our pods work side-by-side with your technical leadership to deliver resilient cloud architectures and scalable bespoke software.
            </p>

            <div className="space-y-4 mb-10">
              {sectors.map((sec, idx) => (
                <div key={idx} className="flex items-start gap-3.5 p-3 rounded-xl bg-white/5 border border-white/5 hover:border-white/15 transition-colors">
                  <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-sm text-white">{sec.title}</strong>
                    <span className="text-xs text-slate-400 leading-snug">{sec.desc}</span>
                  </div>
                </div>
              ))}
            </div>

            <Link 
              to="/industries"
              className="inline-flex items-center gap-2 font-bold text-sm text-indigo-400 hover:text-indigo-300 transition-colors"
            >
              <span>Explore All Industry Vertical Solutions</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          {/* Right Column: 2x2 Grid of Frosted Glass Stat Boxes */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {metricsData.map((item, idx) => (
              <div 
                key={idx}
                className="bg-white/5 backdrop-blur-md rounded-2xl p-8 border border-white/10 hover:border-indigo-500/40 transition-all duration-300 hover:-translate-y-1.5 shadow-xl flex flex-col justify-between"
              >
                <div>
                  <div className="text-4xl sm:text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-300 mb-2">
                    {item.value}
                  </div>
                  <h3 className="text-base font-bold text-white mb-1">
                    {item.label}
                  </h3>
                  <p className="text-xs text-slate-400">
                    {item.sub}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-[11px] text-slate-400">
                  <span className="flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Verified Metric
                  </span>
                  <span className="font-semibold text-indigo-300">SynXcloud SLA</span>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
