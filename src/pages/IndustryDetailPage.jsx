// src/pages/IndustryDetailPage.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { industriesData } from '../data/industriesData';
import { caseStudiesData } from '../data/caseStudiesData';
import { Landmark, Activity, Truck, ShoppingBag, Server, Cpu, ArrowRight, CheckCircle2, AlertCircle, Building2, ShieldCheck } from 'lucide-react';

const iconMap = {
  Landmark: Landmark,
  Activity: Activity,
  Truck: Truck,
  ShoppingBag: ShoppingBag,
  Server: Server,
  Cpu: Cpu
};

export default function IndustryDetailPage() {
  const { id: sectorSlug } = useParams();
  const industry = industriesData.find(i => i.slug === sectorSlug) || industriesData[0];
  const Icon = iconMap[industry.icon] || Building2;

  // Find related case study
  const relatedCase = caseStudiesData.find(c => c.clientIndustry.toLowerCase().includes(industry.name.split(' ')[0].toLowerCase())) || caseStudiesData[0];

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-24 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white relative overflow-hidden">
        <div className="max-w-6xl mx-auto px-4 relative z-10">
          
          <div className="text-xs uppercase tracking-widest text-slate-400 mb-4 flex items-center gap-2">
            <Link to="/" className="hover:text-white">Home</Link>
            <span>/</span>
            <Link to="/industries" className="hover:text-white">Industries</Link>
            <span>/</span>
            <span className="text-indigo-400 font-semibold">{industry.name}</span>
          </div>

          <div className="flex items-center gap-4 mb-4">
            <div className="w-14 h-14 rounded-2xl bg-indigo-600/30 border border-indigo-400/30 text-indigo-400 flex items-center justify-center">
              <Icon className="w-7 h-7" />
            </div>
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 bg-white/5 border border-white/10 px-3 py-1 rounded-full">
              Industry Vertical Focus
            </span>
          </div>

          <h1 className="text-4xl md:text-5xl font-extrabold mb-5 leading-tight">
            {industry.name}
          </h1>

          <p className="text-lg text-slate-300 max-w-3xl mb-8 leading-relaxed font-normal">
            {industry.heroDesc}
          </p>

          <Link
            to={`/contact?service=${industry.slug}`}
            className="pill-btn inline-flex items-center gap-2"
          >
            <span>Consult with {industry.name.split(' ')[0]} Specialist</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

        </div>
      </section>

      {/* 2. Challenges vs Solutions Grid */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          
          {/* Challenges Box */}
          <div className="bg-white p-8 rounded-3xl border border-red-100 shadow-sm">
            <div className="flex items-center gap-2 text-red-600 font-bold text-sm uppercase tracking-wider mb-4">
              <AlertCircle className="w-4 h-4" />
              <span>Core Industry Bottlenecks</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">What Holds Teams Back</h3>
            <ul className="space-y-4">
              {industry.challenges.map((ch, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                  <span className="w-2 h-2 rounded-full bg-red-400 flex-shrink-0 mt-1.5" />
                  <span>{ch}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Solutions Box */}
          <div className="bg-white p-8 rounded-3xl border border-emerald-100 shadow-sm">
            <div className="flex items-center gap-2 text-emerald-600 font-bold text-sm uppercase tracking-wider mb-4">
              <CheckCircle2 className="w-4 h-4" />
              <span>SynXcloud Solution Framework</span>
            </div>
            <h3 className="text-xl font-bold text-slate-900 mb-4">How We Solve It</h3>
            <ul className="space-y-4">
              {industry.solutions.map((sol, idx) => (
                <li key={idx} className="flex items-start gap-3 text-xs text-slate-600 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                  <span>{sol}</span>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </section>

      {/* 3. Deliverables Grid */}
      <section className="py-20 bg-white border-y border-slate-200">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Proven Architecture
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">Key Solved Deliverables</h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {industry.deliverables.map((deliv, idx) => (
              <div key={idx} className="p-6 bg-slate-50 rounded-2xl border border-slate-200 text-center flex flex-col items-center justify-center">
                <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center mb-4">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h4 className="text-sm font-bold text-slate-900 leading-snug">{deliv}</h4>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Highlighted Case Study */}
      <section className="py-20 max-w-6xl mx-auto px-4">
        <div className="bg-gradient-to-br from-slate-900 to-indigo-950 text-white p-10 md:p-12 rounded-3xl border border-white/10 shadow-xl">
          <span className="text-xs font-bold uppercase tracking-widest text-indigo-400 mb-2 block">
            Relevant Case Study
          </span>
          <h3 className="text-2xl font-bold mb-3">{relatedCase.title}</h3>
          <p className="text-slate-300 text-xs sm:text-sm mb-6 max-w-2xl leading-relaxed">
            {relatedCase.summary}
          </p>
          <Link 
            to="/case-studies"
            className="text-xs font-bold text-indigo-400 hover:text-indigo-300 flex items-center gap-1.5"
          >
            <span>Explore Full Case Study Details</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
