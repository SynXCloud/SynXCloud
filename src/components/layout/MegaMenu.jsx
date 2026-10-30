// src/components/layout/MegaMenu.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { servicePillars } from '../../data/siteContent';
import { 
  ArrowRight, Sparkles, Cloud, Code, Cpu, Calendar, 
  Globe2, TrendingUp, Users, Star 
} from 'lucide-react';

const iconMap = {
  Cloud: Cloud,
  Code: Code,
  Cpu: Cpu,
  TrendingUp: TrendingUp,
  Users: Users
};

export default function MegaMenu({ onClose }) {
  const mainPillars = servicePillars.filter(p => p.isMainOffering);
  const additionalPillars = servicePillars.filter(p => !p.isMainOffering);

  return (
    <div 
      className="fixed left-1/2 -translate-x-1/2 top-[68px] w-[95vw] max-w-6xl bg-white text-slate-800 rounded-3xl shadow-2xl border border-slate-200/90 p-7 animate-fadeIn z-50 overflow-hidden"
      style={{
        boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
      }}
      onMouseLeave={onClose}
    >
      {/* Top Banner: Core Sales Offerings */}
      <div className="flex items-center justify-between pb-3 mb-5 border-b border-slate-100">
        <div className="flex items-center gap-2">
          <Star className="w-4 h-4 fill-amber-500 text-amber-500" />
          <span className="text-xs font-black uppercase tracking-wider text-slate-900">
            Main Sales Offerings &bull; Core Practices
          </span>
        </div>
        <span className="text-[11px] font-semibold text-slate-400">
          Prioritized to accelerate your engineering roadmap
        </span>
      </div>

      {/* 3 Core Pillars Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {mainPillars.map((pillar) => {
          const PillarIcon = iconMap[pillar.icon] || Sparkles;

          return (
            <div 
              key={pillar.id} 
              className="border-r last:border-r-0 border-slate-100 pr-0 md:pr-6 flex flex-col justify-between"
            >
              <div>
                {/* Pillar Header Card */}
                <Link
                  to={`/services/${pillar.slug}`}
                  onClick={onClose}
                  className="block p-4 rounded-2xl mb-4 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-sm"
                  style={{ backgroundColor: `${pillar.themeColor}10` }}
                >
                  <div className="flex items-center justify-between mb-2.5">
                    <div 
                      className="w-8 h-8 rounded-xl flex items-center justify-center text-white shadow-sm flex-shrink-0"
                      style={{ backgroundColor: pillar.themeColor }}
                    >
                      <PillarIcon className="w-4 h-4" />
                    </div>
                    <span 
                      className="text-[10px] font-extrabold px-2.5 py-0.5 rounded-full uppercase tracking-wider bg-white text-slate-800 shadow-2xs border border-slate-100"
                    >
                      #{pillar.offeringTier} {pillar.badge}
                    </span>
                  </div>

                  <h3 className="font-extrabold text-sm mb-1 leading-snug" style={{ color: pillar.themeColor }}>
                    {pillar.name}
                  </h3>
                  <p className="text-xs text-slate-500 leading-relaxed line-clamp-2">
                    {pillar.tagline}
                  </p>
                </Link>

                {/* Subservice Link List */}
                <ul className="space-y-1">
                  {pillar.subservices.map((sub) => (
                    <li key={sub.slug}>
                      <Link 
                        to={`/services/${pillar.slug}/${sub.slug}`}
                        onClick={onClose}
                        className="group flex items-start gap-2.5 p-2 rounded-xl hover:bg-slate-50 transition-all text-xs"
                      >
                        <div 
                          className="w-4 h-4 rounded-full mt-0.5 flex items-center justify-center flex-shrink-0 transition-transform group-hover:translate-x-0.5"
                          style={{ backgroundColor: `${pillar.themeColor}15`, color: pillar.themeColor }}
                        >
                          <ArrowRight className="w-2.5 h-2.5" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="font-bold text-slate-900 group-hover:text-indigo-600 transition-colors truncate">
                            {sub.title}
                          </div>
                          <div className="text-[11px] text-slate-500 line-clamp-1">
                            {sub.desc}
                          </div>
                        </div>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Pillar Footer Hub Link */}
              <div className="pt-3.5 mt-4 border-t border-slate-100">
                <Link
                  to={`/services/${pillar.slug}`}
                  onClick={onClose}
                  className="text-xs font-bold flex items-center justify-between transition-colors hover:underline"
                  style={{ color: pillar.themeColor }}
                >
                  <span>Explore Practice &amp; Deliverables</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Additional 2 Services: Digital Marketing & Staffing Strip */}
      <div className="mt-6 pt-5 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-4">
        {additionalPillars.map((p) => {
          const Icon = iconMap[p.icon] || Sparkles;
          return (
            <Link
              key={p.id}
              to={`/services/${p.slug}`}
              onClick={onClose}
              className="p-3.5 rounded-2xl bg-slate-50 hover:bg-slate-100/80 border border-slate-200 transition-all flex items-center justify-between group"
            >
              <div className="flex items-center gap-3">
                <div 
                  className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-xs flex-shrink-0"
                  style={{ backgroundColor: p.themeColor }}
                >
                  <Icon className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="text-xs font-bold text-slate-900 group-hover:text-indigo-600 transition-colors">
                      {p.name}
                    </h4>
                    <span 
                      className="text-[9px] font-bold px-2 py-0.5 rounded-full uppercase"
                      style={{ backgroundColor: `${p.themeColor}15`, color: p.themeColor }}
                    >
                      {p.badge}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {p.tagline}
                  </p>
                </div>
              </div>

              <ArrowRight className="w-4 h-4 text-slate-400 group-hover:text-indigo-600 group-hover:translate-x-1 transition-all flex-shrink-0" />
            </Link>
          );
        })}
      </div>

      {/* Bottom Hub Bar */}
      <div className="mt-6 -mx-7 -mb-7 p-4 bg-slate-100/70 rounded-b-3xl border-t border-slate-200 flex flex-wrap items-center justify-between text-xs text-slate-600 px-8 gap-3">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-indigo-600" />
          <span className="font-medium">Need a custom technical roadmap or dedicated squad?</span>
        </div>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/international-clients" 
            onClick={onClose}
            className="text-slate-600 hover:text-indigo-600 flex items-center gap-1 font-semibold transition-colors"
          >
            <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
            <span>International Clients</span>
          </Link>

          <Link 
            to="/contact" 
            onClick={onClose}
            className="text-indigo-600 hover:text-indigo-700 flex items-center gap-1 font-bold transition-colors"
          >
            <Calendar className="w-3.5 h-3.5" />
            <span>Book Consultation</span>
          </Link>

          <Link 
            to="/services" 
            onClick={onClose}
            className="font-bold text-slate-900 hover:text-indigo-600 flex items-center gap-1 transition-colors"
          >
            <span>All Services Hub (5 Practices)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
}
