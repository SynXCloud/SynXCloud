// src/pages/IndustriesPage.jsx
import React from 'react';
import { industriesData } from '../data/industriesData';
import { Link } from 'react-router-dom';
import { Landmark, Activity, Truck, ShoppingBag, Server, Cpu, ArrowRight, CheckCircle2, AlertCircle, Building2 } from 'lucide-react';

const iconMap = {
  Landmark: Landmark,
  Activity: Activity,
  Truck: Truck,
  ShoppingBag: ShoppingBag,
  Server: Server,
  Cpu: Cpu
};

export default function IndustriesPage() {
  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Building2 className="w-3.5 h-3.5" />
            <span>Enterprise Industry Verticals</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Tailored Engineering for Regulated & High-Growth Sectors
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Every industry faces unique compliance mandates, transaction volumes, and data security hurdles. Explore how SynXcloud solves domain-specific bottlenecks.
          </p>
        </div>
      </section>

      {/* 2. Industry Grid */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {industriesData.map((ind) => {
            const Icon = iconMap[ind.icon] || Building2;

            return (
              <div 
                key={ind.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="w-14 h-14 rounded-2xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 shadow-sm">
                    <Icon className="w-7 h-7" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">
                    {ind.name}
                  </h3>
                  
                  <p className="text-xs text-indigo-600 font-semibold mb-4">
                    {ind.tagline}
                  </p>

                  <p className="text-xs text-slate-600 leading-relaxed mb-6">
                    {ind.heroDesc}
                  </p>

                  {/* Solved Deliverables */}
                  <div className="pt-4 border-t border-slate-100 mb-6">
                    <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block mb-2.5">
                      Key Solved Deliverables
                    </span>
                    <ul className="space-y-2">
                      {ind.deliverables.slice(0, 3).map((deliv, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                          <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                          <span>{deliv}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <Link 
                    to={`/industries/${ind.slug}`}
                    className="text-xs font-bold text-indigo-600 hover:text-indigo-800 flex items-center gap-1.5 transition-transform hover:translate-x-1"
                  >
                    <span>Sector Deep Dive</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>

                  <Link 
                    to={`/contact?service=${ind.slug}`}
                    className="text-xs font-semibold text-slate-400 hover:text-slate-700"
                  >
                    Schedule Call &rarr;
                  </Link>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* 3. Bottom Consultation Strip */}
      <section className="py-20 bg-slate-900 text-white text-center">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-extrabold mb-4">Operating in a Specialized or Niche Sector?</h2>
          <p className="text-sm text-slate-300 mb-8 leading-relaxed">
            Our systems architects analyze your specific regulatory frameworks, data flows, and concurrency demands to engineer a custom solution.
          </p>
          <Link
            to="/contact"
            className="pill-btn"
          >
            Speak with an Industry Practice Lead &rarr;
          </Link>
        </div>
      </section>

    </div>
  );
}
