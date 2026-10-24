// src/pages/ProductsPage.jsx
import React, { useState } from 'react';
import { productsData } from '../data/productsData';
import { Link } from 'react-router-dom';
import { Sparkles, FileText, CheckCircle2, ArrowRight, ShieldCheck, Download, ExternalLink } from 'lucide-react';

export default function ProductsPage() {
  const [downloadModal, setDownloadModal] = useState(null);

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Proprietary Tooling & Enterprise Accelerators</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            Software Products & Enterprise Innovations
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed">
            Battle-tested proprietary engines built by SynXcloud to accelerate multi-cloud observability, multi-agent LLM orchestration, and zero-knowledge secret management.
          </p>
        </div>
      </section>

      {/* 2. Alternating Products Showcase */}
      <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {productsData.map((prod, idx) => {
          const isEven = idx % 2 === 0;

          return (
            <div 
              key={prod.id}
              className="bg-white rounded-3xl p-8 sm:p-14 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${isEven ? '' : 'lg:flex-row-reverse'}`}>
                
                {/* Visual Preview / Image (5 cols) */}
                <div className={`lg:col-span-5 ${isEven ? '' : 'lg:order-2'}`}>
                  <div className="relative rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 shadow-xl group">
                    <img 
                      src={prod.image} 
                      alt={prod.name}
                      className="w-full h-80 object-cover opacity-90 transition-transform duration-500 group-hover:scale-105"
                      onError={(e) => {
                        e.currentTarget.src = "/service_development.png";
                      }}
                    />
                    <div className="absolute top-4 left-4 bg-slate-900/80 backdrop-blur-md px-3 py-1 rounded-full border border-white/10 text-[11px] font-bold text-white uppercase tracking-wider">
                      {prod.badge}
                    </div>
                  </div>
                </div>

                {/* Product Narrative & Specs (7 cols) */}
                <div className={`lg:col-span-7 space-y-6 ${isEven ? '' : 'lg:order-1'}`}>
                  <div>
                    <span className="text-xs font-bold uppercase tracking-wider text-indigo-600 block mb-1">
                      {prod.category}
                    </span>
                    <h2 className="text-3xl font-extrabold text-slate-900 mb-2">
                      {prod.name}
                    </h2>
                    <p className="text-sm font-semibold text-slate-700">
                      {prod.tagline}
                    </p>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {prod.description}
                  </p>

                  {/* Specifications Grid */}
                  <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 space-y-2.5">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                      Technical Specifications & Compliance
                    </h4>
                    {prod.specs.map((sp, sIdx) => (
                      <div key={sIdx} className="flex flex-col sm:flex-row sm:items-center justify-between text-xs py-1 border-b border-slate-200/60 last:border-b-0 gap-1">
                        <span className="font-semibold text-slate-500">{sp.label}</span>
                        <strong className="text-slate-900 font-bold">{sp.value}</strong>
                      </div>
                    ))}
                  </div>

                  {/* Features List */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {prod.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2 text-xs font-semibold text-slate-800">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap items-center gap-4 pt-4">
                    <Link
                      to={`/contact?service=${prod.slug}`}
                      className="pill-btn flex items-center gap-2"
                    >
                      <span>Request Live Product Demo</span>
                      <ArrowRight className="w-4 h-4" />
                    </Link>

                    <button
                      type="button"
                      onClick={() => setDownloadModal(prod)}
                      className="px-6 py-3 rounded-full text-xs font-bold uppercase tracking-wider text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-sm flex items-center gap-2"
                    >
                      <Download className="w-4 h-4 text-indigo-600" />
                      <span>Download Whitepaper</span>
                    </button>
                  </div>

                </div>

              </div>
            </div>
          );
        })}
      </section>

      {/* Download Whitepaper Modal */}
      {downloadModal && (
        <div className="modal-overlay" onClick={() => setDownloadModal(null)}>
          <div 
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative animate-fadeIn" 
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-indigo-600">
                Technical Whitepaper
              </span>
              <button 
                onClick={() => setDownloadModal(null)} 
                className="text-slate-400 hover:text-slate-800 font-bold text-lg"
              >
                &times;
              </button>
            </div>

            <h3 className="text-xl font-bold text-slate-900 mb-2">
              {downloadModal.name} Architecture Whitepaper
            </h3>
            <p className="text-xs text-slate-600 mb-6">
              Enter your corporate email to receive the 28-page technical specification PDF including benchmark graphs and Kubernetes deployment manifests.
            </p>

            <form onSubmit={(e) => {
              e.preventDefault();
              alert(`Whitepaper for ${downloadModal.name} has been dispatched to your email.`);
              setDownloadModal(null);
            }} className="space-y-4">
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Work Email</label>
                <input type="email" required placeholder="name@enterprise.com" />
              </div>
              <div>
                <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Company / Organization</label>
                <input type="text" required placeholder="e.g. Acme Financial" />
              </div>

              <button type="submit" className="w-full pill-btn mt-2">
                Download PDF Now &rarr;
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}
