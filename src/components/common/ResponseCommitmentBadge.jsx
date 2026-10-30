// src/components/common/ResponseCommitmentBadge.jsx
import React from 'react';
import { Clock, ShieldCheck, Zap, FileText, CheckCircle2 } from 'lucide-react';
import { brandConfig } from '../../data/siteContent';

export default function ResponseCommitmentBadge({ variant = 'card' }) {
  if (variant === 'compact') {
    return (
      <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-800 border border-emerald-200 shadow-2xs">
        <Zap className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
        <span><strong>Response Commitment:</strong> Within 4 business hours guaranteed</span>
      </div>
    );
  }

  const commitments = [
    {
      time: "< 15 Mins",
      label: "Live WhatsApp Desk",
      desc: "Instant direct connection with a solutions engineer during active business hours.",
      icon: Zap,
      color: "#10b981",
      bgColor: "#ecfdf5"
    },
    {
      time: "Within 4 Hours",
      label: "Email Acknowledgement & NDA",
      desc: "Signed mutual NDA sent automatically to protect all your proprietary specifications.",
      icon: ShieldCheck,
      color: "#6366f1",
      bgColor: "#eef2ff"
    },
    {
      time: "Within 24 Hours",
      label: "Architecture Assessment",
      desc: "Senior systems architect conducts preliminary review of your stack & technical objectives.",
      icon: Clock,
      color: "#3b82f6",
      bgColor: "#eff6ff"
    },
    {
      time: "Within 48 Hours",
      label: "Milestone Roadmap & SOW",
      desc: "Transparent scope of work, pod sizing, deliverable milestones, and fixed pricing options.",
      icon: FileText,
      color: "#8b5cf6",
      bgColor: "#f5f3ff"
    }
  ];

  return (
    <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl overflow-hidden relative">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-100">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-[11px] font-bold uppercase tracking-wider text-emerald-700 bg-emerald-50 border border-emerald-200 mb-2">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
            <span>Strict Engineering Service Level Agreement (SLA)</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 tracking-tight">
            Our Response-Time Commitment
          </h3>
          <p className="text-xs sm:text-sm text-slate-500 mt-1">
            We value your engineering timeline. Every inquiry triggers our four-phase guarantee.
          </p>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-slate-50 border border-slate-200 flex-shrink-0">
          <div className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-ping" />
          <span className="text-xs font-bold text-slate-700">Team Active &bull; Global Delivery</span>
        </div>
      </div>

      {/* 4-Phase Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {commitments.map((c, idx) => {
          const IconComp = c.icon;
          return (
            <div 
              key={idx}
              className="p-5 rounded-2xl border border-slate-100 transition-all hover:border-slate-300 hover:shadow-md flex flex-col justify-between"
              style={{ backgroundColor: c.bgColor }}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div 
                    className="w-10 h-10 rounded-xl flex items-center justify-center text-white shadow-sm"
                    style={{ backgroundColor: c.color }}
                  >
                    <IconComp className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-extrabold px-2.5 py-1 rounded-full bg-white text-slate-900 shadow-2xs border border-slate-100">
                    Phase {idx + 1}
                  </span>
                </div>

                <div className="text-lg font-black tracking-tight" style={{ color: c.color }}>
                  {c.time}
                </div>
                <div className="text-xs font-bold text-slate-900 mt-0.5 mb-2">
                  {c.label}
                </div>
                <p className="text-[11px] text-slate-600 leading-relaxed">
                  {c.desc}
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Bottom Trust Note */}
      <div className="mt-6 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-500">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>If our team cannot meet these delivery timelines on your project, we communicate upfront before kickoff.</span>
        </div>
        <div className="font-semibold text-slate-700">
          Need immediate support? Call <a href={`tel:${brandConfig.contact.phone}`} className="text-indigo-600 hover:underline">{brandConfig.contact.phone}</a>
        </div>
      </div>
    </div>
  );
}
