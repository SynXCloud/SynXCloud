// src/pages/CareersPage.jsx
import React, { useState } from 'react';
import { engagementModels, openJobs } from '../data/careersData';
import { Link } from 'react-router-dom';
import { Users, Briefcase, CheckCircle2, ArrowRight, ShieldCheck, Clock, Send, Upload, Sparkles } from 'lucide-react';

export default function CareersPage() {
  const [activeTab, setActiveTab] = useState('hire'); // 'hire' | 'join'
  const [applyModalJob, setApplyModalJob] = useState(null);
  const [applySubmitted, setApplySubmitted] = useState(false);

  const [applicant, setApplicant] = useState({
    name: '',
    email: '',
    phone: '',
    linkedin: '',
    portfolio: '',
    notes: ''
  });

  const handleApplySubmit = (e) => {
    e.preventDefault();
    setApplySubmitted(true);
  };

  return (
    <div className="bg-slate-50 min-h-screen">
      
      {/* 1. Hero Banner with Dual-Intent Toggle */}
      <section className="pt-36 pb-20 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center relative overflow-hidden">
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/5 border border-white/10 mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>Global Engineering Talent & Augmentation</span>
          </div>

          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight mb-6 leading-tight">
            {activeTab === 'hire' ? 'Hire Dedicated Engineering Pods' : 'Join Our High-Agency Engineering Team'}
          </h1>

          <p className="text-base sm:text-lg text-slate-300 max-w-2xl mx-auto leading-relaxed mb-8">
            {activeTab === 'hire' 
              ? 'Inject senior cloud architects, full-stack engineers, and autonomous AI developers directly into your product sprints within 48 hours.'
              : 'Work on cutting-edge distributed systems, multi-cloud migrations, and agentic LLMs with a high-trust, fully remote team.'}
          </p>

          {/* Dual Intent Segmented Toggle */}
          <div className="inline-flex items-center bg-white/10 p-1.5 rounded-full border border-white/20 backdrop-blur-md">
            <button
              onClick={() => setActiveTab('hire')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'hire' 
                  ? 'bg-white text-slate-900 shadow-lg' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Briefcase className="w-4 h-4" />
              <span>For Enterprise: Hire Developers</span>
            </button>

            <button
              onClick={() => setActiveTab('join')}
              className={`px-6 py-2.5 rounded-full text-xs font-bold transition-all flex items-center gap-2 ${
                activeTab === 'join' 
                  ? 'bg-white text-slate-900 shadow-lg' 
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              <Users className="w-4 h-4" />
              <span>For Engineers: Open Positions</span>
            </button>
          </div>

        </div>
      </section>

      {/* 2. INTENT 1: Staff Augmentation Models */}
      {activeTab === 'hire' && (
        <section className="py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Engagement Models
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Flexible, High-Velocity Scaling
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
            <p className="text-sm text-slate-600">
              No recruitment fees, zero hardware overhead, and seamless integration into your existing GitHub and Jira workflows.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {engagementModels.map((model) => (
              <div 
                key={model.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider bg-indigo-50 text-indigo-600">
                      {model.badge}
                    </span>
                    <Clock className="w-4 h-4 text-slate-400" />
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 mb-2">{model.title}</h3>
                  <p className="text-xs text-indigo-600 font-semibold mb-4">{model.tagline}</p>
                  <p className="text-xs text-slate-500 mb-6 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <strong className="text-slate-700">Best for:</strong> {model.bestFor}
                  </p>

                  <div className="space-y-3 pt-2 mb-8">
                    {model.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-start gap-2.5 text-xs text-slate-700">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <Link
                  to={`/contact?service=hire-developers&model=${model.id}`}
                  className="w-full text-center py-3.5 rounded-full font-bold text-xs text-white shadow-md transition-transform hover:-translate-y-0.5"
                  style={{
                    background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)'
                  }}
                >
                  {model.ctaText} &rarr;
                </Link>
              </div>
            ))}
          </div>

          {/* Vetting SLA Banner */}
          <div className="bg-slate-900 text-white rounded-3xl p-10 md:p-12 border border-white/10 shadow-xl grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-black text-indigo-400 mb-1">48 Hours</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Interview Turnaround</h4>
              <p className="text-[11px] text-slate-400 mt-1">Review candidate resumes and interview leads within 2 business days.</p>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-400 mb-1">Top 1%</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">Vetted Senior Talent</h4>
              <p className="text-[11px] text-slate-400 mt-1">Rigorous algorithmic, system architecture, and communication screening.</p>
            </div>
            <div>
              <div className="text-3xl font-black text-indigo-400 mb-1">100% Risk-Free</div>
              <h4 className="text-xs font-bold uppercase tracking-wider text-white">2-Week Trial Period</h4>
              <p className="text-[11px] text-slate-400 mt-1">If an engineer is not the perfect fit, we replace them at no additional cost.</p>
            </div>
          </div>

        </section>
      )}

      {/* 3. INTENT 2: Talent Careers / Open Roles */}
      {activeTab === 'join' && (
        <section className="py-20 max-w-6xl mx-auto px-4 space-y-12">
          
          <div className="text-center max-w-2xl mx-auto">
            <span className="text-xs font-bold uppercase tracking-widest text-indigo-600 mb-2 block">
              Join SynXcloud
            </span>
            <h2 className="text-3xl font-extrabold text-slate-900 mb-3">
              Open Engineering Roles
            </h2>
            <div className="w-16 h-1 bg-indigo-600 mx-auto rounded-full mb-4" />
            <p className="text-sm text-slate-600">
              We offer remote flexibility, competitive compensation, and the opportunity to work directly with founders on architecture challenges.
            </p>
          </div>

          <div className="space-y-6">
            {openJobs.map((job) => (
              <div 
                key={job.id}
                className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-6"
              >
                <div className="space-y-2 max-w-2xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="text-[11px] font-bold px-3 py-1 rounded-full uppercase bg-indigo-50 text-indigo-600">
                      {job.department}
                    </span>
                    <span className="text-xs text-slate-500 font-semibold">&bull; {job.location}</span>
                    <span className="text-xs text-slate-500 font-semibold">&bull; {job.type}</span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-900">{job.title}</h3>
                  <div className="text-xs font-bold text-emerald-600">Compensation: {job.salary}</div>

                  <ul className="space-y-1 pt-2">
                    {job.requirements.map((req, rIdx) => (
                      <li key={rIdx} className="text-xs text-slate-600 flex items-start gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500 flex-shrink-0 mt-0.5" />
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <button
                  type="button"
                  onClick={() => {
                    setApplyModalJob(job);
                    setApplySubmitted(false);
                  }}
                  className="pill-btn flex-shrink-0 text-xs py-3 px-6"
                >
                  Apply For Role &rarr;
                </button>
              </div>
            ))}
          </div>

        </section>
      )}

      {/* Application Form Modal */}
      {applyModalJob && (
        <div className="modal-overlay" onClick={() => setApplyModalJob(null)}>
          <div 
            className="bg-white rounded-3xl p-8 max-w-lg w-full shadow-2xl relative animate-fadeIn"
            onClick={e => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-4">
              <div>
                <span className="text-[10px] font-bold uppercase tracking-wider text-indigo-600">
                  Role Application
                </span>
                <h3 className="text-xl font-bold text-slate-900">{applyModalJob.title}</h3>
              </div>
              <button 
                onClick={() => setApplyModalJob(null)}
                className="text-slate-400 hover:text-slate-800 font-bold text-xl"
              >
                &times;
              </button>
            </div>

            {applySubmitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle2 className="w-8 h-8" />
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">Application Received!</h4>
                <p className="text-xs text-slate-600 mb-6">
                  Thank you for applying, {applicant.name}. Our technical founders review all submissions and will follow up via email within 3 business days.
                </p>
                <button
                  onClick={() => setApplyModalJob(null)}
                  className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold"
                >
                  Close Modal
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplySubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Full Name</label>
                  <input 
                    type="text" 
                    required 
                    placeholder="Jane Doe"
                    value={applicant.name}
                    onChange={e => setApplicant({ ...applicant, name: e.target.value })}
                  />
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      required 
                      placeholder="jane@example.com"
                      value={applicant.email}
                      onChange={e => setApplicant({ ...applicant, email: e.target.value })}
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Phone</label>
                    <input 
                      type="tel" 
                      placeholder="+1 (555) 000-1122"
                      value={applicant.phone}
                      onChange={e => setApplicant({ ...applicant, phone: e.target.value })}
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">LinkedIn Profile or GitHub URL</label>
                  <input 
                    type="url" 
                    required 
                    placeholder="https://linkedin.com/in/janedoe"
                    value={applicant.linkedin}
                    onChange={e => setApplicant({ ...applicant, linkedin: e.target.value })}
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase text-slate-700 mb-1">Brief Note / Key Projects</label>
                  <textarea 
                    rows="3" 
                    placeholder="Tell us about the most complex system or architecture you've built..."
                    value={applicant.notes}
                    onChange={e => setApplicant({ ...applicant, notes: e.target.value })}
                  />
                </div>

                <button type="submit" className="w-full pill-btn mt-2">
                  Submit Application &rarr;
                </button>
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  );
}
