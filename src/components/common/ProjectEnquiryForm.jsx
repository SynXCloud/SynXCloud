// src/components/common/ProjectEnquiryForm.jsx
import React, { useState } from 'react';
import { brandConfig } from '../../data/siteContent';
import { 
  Cloud, Code, Cpu, ShieldCheck, Clock, Send, 
  CheckCircle, Smartphone, Users, Zap, Layers, DollarSign, Calendar
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

const resolveInitialProjectType = (val) => {
  if (!val) return 'Full-Stack Software Engineering';
  const lower = val.toLowerCase();
  if (lower.includes('software') || lower.includes('web') || lower.includes('saas') || lower.includes('api') || lower.includes('mobile')) {
    return 'Full-Stack Software Engineering';
  }
  if (lower.includes('ai') || lower.includes('agent') || lower.includes('auto') || lower.includes('llm') || lower.includes('rag')) {
    return 'Autonomous AI & Workflow Automation';
  }
  if (lower.includes('cloud') || lower.includes('devops') || lower.includes('infra') || lower.includes('sre') || lower.includes('k8s')) {
    return 'Cloud & DevOps';
  }
  if (lower.includes('market') || lower.includes('seo') || lower.includes('growth') || lower.includes('acquisition')) {
    return 'Digital Marketing & Growth Engineering';
  }
  if (lower.includes('staff') || lower.includes('pod') || lower.includes('hire') || lower.includes('talent')) {
    return 'Tech Staffing & Dedicated Pods';
  }
  if (lower.includes('audit') || lower.includes('sec')) {
    return 'Architecture & Security Audit';
  }
  return val;
};

export default function ProjectEnquiryForm({ initialProjectType = '', initialBudget = '', onSuccess }) {
  const [projectType, setProjectType] = useState(() => resolveInitialProjectType(initialProjectType));
  const [budget, setBudget] = useState(initialBudget || '$10,000 – $25,000');
  const [timeline, setTimeline] = useState('Within 1 Month');
  const [requireNda, setRequireNda] = useState(true);
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    brief: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const projectTypes = [
    { id: 'software', name: 'Full-Stack Software Engineering', icon: Code, desc: 'React, Next.js, Node, Go, Microservices & SaaS' },
    { id: 'ai', name: 'Autonomous AI & Workflow Automation', icon: Cpu, desc: 'LLMs, RAG, Multi-Agent Automation & Workflows' },
    { id: 'cloud', name: 'Cloud & DevOps', icon: Cloud, desc: 'Deployment pipelines, cloud infrastructure & 24/7 maintenance' },
    { id: 'marketing', name: 'Digital Marketing & Growth Engineering', icon: Zap, desc: 'Technical SEO, Paid Acquisition & Funnel CRO' },
    { id: 'staffing', name: 'Tech Staffing & Dedicated Pods', icon: Users, desc: 'Senior Vetted Engineers & Turnkey Pods' },
    { id: 'audit', name: 'Architecture & Security Audit', icon: ShieldCheck, desc: 'Zero-trust security, performance & reliability audit' }
  ];

  const budgetTiers = [
    { label: '< $10,000', sub: 'Discovery / Prototype' },
    { label: '$10,000 – $25,000', sub: 'Sprint Kickoff / MVP' },
    { label: '$25,000 – $50,000', sub: 'Production Build' },
    { label: '$50,000 – $100,000', sub: 'Enterprise Architecture' },
    { label: '$100,000+', sub: 'Multi-Quarter Retainer' }
  ];

  const timelineOptions = [
    'Immediate (< 2 Weeks)',
    'Within 1 Month',
    '1 – 3 Months',
    'Exploratory / Flexible'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const payload = {
      ...formData,
      projectType,
      budget,
      timeline,
      requireNda
    };

    console.log('Project Enquiry Submitted:', payload);
    await new Promise(resolve => setTimeout(resolve, 800));
    setStatus('success');
    if (onSuccess) onSuccess(payload);
  };

  const handleWhatsAppInstant = () => {
    const text = `Hi SynXCloud! I'd like to enquire about a project.\n\n*Project Type:* ${projectType}\n*Budget:* ${budget}\n*Timeline:* ${timeline}\n*Client:* ${formData.name || 'Not provided'} (${formData.company || 'Company'})\n*Email:* ${formData.email || 'Via WhatsApp'}\n*Brief:* ${formData.brief || 'Looking to discuss specifications.'}`;
    const url = `https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-8 sm:p-12 text-center animate-fadeIn">
        <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-5 shadow-sm">
          <CheckCircle className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-black text-slate-900 mb-2">
          Project Specifications Received!
        </h3>
        <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
          Thank you, <strong>{formData.name}</strong>. Our Practice Leads have received your <strong>{projectType}</strong> project requirements ({budget}).
        </p>

        {/* Response SLA reminder */}
        <div className="p-4 rounded-2xl bg-white border border-emerald-200/80 max-w-md mx-auto mb-8 text-left space-y-2 text-xs">
          <div className="flex items-center gap-2 font-bold text-emerald-800">
            <Clock className="w-4 h-4 text-emerald-600" />
            <span>Guaranteed Next Steps Timeline:</span>
          </div>
          <div className="text-slate-600 pl-6 space-y-1">
            <p>&bull; <strong>Within 4 Hours:</strong> NDA execution &amp; email confirmation</p>
            <p>&bull; <strong>Within 24 Hours:</strong> Preliminary technical architecture review</p>
            <p>&bull; <strong>Within 48 Hours:</strong> Milestone roadmap &amp; deliverable estimation</p>
          </div>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              setFormData({ name: '', email: '', phone: '', company: '', brief: '' });
              setStatus('idle');
            }}
            className="px-6 py-2.5 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-md"
          >
            Submit Another Project Brief
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      
      {/* 1. Project Type Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
            1. Select Project Type <span className="text-red-500">*</span>
          </label>
          <span className="text-[11px] text-slate-400 font-semibold">
            Choose closest match
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2.5">
          {projectTypes.map((pt) => {
            const Icon = pt.icon;
            const isSelected = projectType === pt.name;
            return (
              <button
                key={pt.id}
                type="button"
                onClick={() => setProjectType(pt.name)}
                className={`p-3.5 rounded-2xl text-left border transition-all flex items-start gap-3 cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-50/80 border-indigo-600 ring-2 ring-indigo-500/20 shadow-sm'
                    : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div 
                  className={`w-8 h-8 rounded-xl flex items-center justify-center flex-shrink-0 transition-colors ${
                    isSelected ? 'bg-indigo-600 text-white' : 'bg-slate-100 text-slate-600'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                </div>
                <div className="min-w-0">
                  <div className={`text-xs font-bold truncate ${isSelected ? 'text-indigo-900' : 'text-slate-900'}`}>
                    {pt.name}
                  </div>
                  <div className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                    {pt.desc}
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 2. Estimated Budget Selector */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 flex items-center gap-1.5">
            <DollarSign className="w-3.5 h-3.5 text-indigo-600" />
            <span>2. Estimated Budget Range (USD) <span className="text-red-500">*</span></span>
          </label>
          <span className="text-[11px] text-slate-400 font-semibold">
            Helps scope right pod size
          </span>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2.5">
          {budgetTiers.map((b, idx) => {
            const isSelected = budget === b.label;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setBudget(b.label)}
                className={`p-3 rounded-2xl text-center border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-indigo-600 text-white border-indigo-600 shadow-md ring-2 ring-indigo-500/30'
                    : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50'
                }`}
              >
                <div className={`text-xs font-extrabold ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                  {b.label}
                </div>
                <div className={`text-[10px] mt-0.5 ${isSelected ? 'text-indigo-100' : 'text-slate-400'}`}>
                  {b.sub}
                </div>
              </button>
            );
          })}
        </div>
      </div>

      {/* 3. Target Launch Timeline */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2 flex items-center gap-1.5">
          <Calendar className="w-3.5 h-3.5 text-indigo-600" />
          <span>3. Target Kickoff / Launch Timeline</span>
        </label>
        <div className="flex flex-wrap gap-2">
          {timelineOptions.map((t, idx) => {
            const isSelected = timeline === t;
            return (
              <button
                key={idx}
                type="button"
                onClick={() => setTimeline(t)}
                className={`px-4 py-2 rounded-xl text-xs font-bold border transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-slate-900 text-white border-slate-900 shadow-sm'
                    : 'bg-white border-slate-200 text-slate-600 hover:border-slate-300'
                }`}
              >
                {t}
              </button>
            );
          })}
        </div>
      </div>

      {/* 4. Client & Contact Details */}
      <div className="pt-2 border-t border-slate-100">
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-3">
          4. Contact Information &amp; Project Brief
        </label>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">
              Full Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="e.g. Rachel Adams"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              className="text-sm py-2.5 px-3.5 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">
              Work Email <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="rachel@enterprise.com"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              className="text-sm py-2.5 px-3.5 rounded-xl"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">
              Phone / WhatsApp (with Country Code)
            </label>
            <input
              type="tel"
              placeholder="+1 (555) 019-2834"
              value={formData.phone}
              onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              className="text-sm py-2.5 px-3.5 rounded-xl"
            />
          </div>

          <div>
            <label className="block text-xs font-bold text-slate-600 mb-1">
              Company / Organization
            </label>
            <input
              type="text"
              placeholder="e.g. Acme Health Corp"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
              className="text-sm py-2.5 px-3.5 rounded-xl"
            />
          </div>
        </div>

        <div>
          <label className="block text-xs font-bold text-slate-600 mb-1">
            Project Objectives &amp; Technical Requirements <span className="text-red-500">*</span>
          </label>
          <textarea
            rows="4"
            required
            placeholder="Describe your current tech stack, key deliverables, architectural challenges, and any specific deadlines..."
            value={formData.brief}
            onChange={(e) => setFormData({ ...formData, brief: e.target.value })}
            className="text-sm py-2.5 px-3.5 rounded-xl"
          />
        </div>

        {/* NDA Assurance Checkbox */}
        <div className="pt-3">
          <label className="flex items-center gap-2.5 cursor-pointer text-xs text-slate-700 select-none">
            <input
              type="checkbox"
              checked={requireNda}
              onChange={(e) => setRequireNda(e.target.checked)}
              className="w-4 h-4 rounded text-indigo-600 focus:ring-indigo-500 border-slate-300 cursor-pointer"
            />
            <span className="font-semibold">
              Send signed mutual Non-Disclosure Agreement (NDA) with your initial response
            </span>
          </label>
        </div>
      </div>

      {/* Dual Submission Bar */}
      <div className="pt-2 space-y-3">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-4 rounded-full font-bold text-sm text-white shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)',
            boxShadow: '0 8px 24px rgba(92, 93, 232, 0.4)'
          }}
        >
          <Send className="w-4 h-4" />
          <span>{status === 'submitting' ? 'Submitting Specifications...' : 'Submit Project Brief & Request Roadmap'}</span>
        </button>

        {/* WhatsApp Fast Channel */}
        <button
          type="button"
          onClick={handleWhatsAppInstant}
          className="w-full py-3 rounded-full font-bold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-2 shadow-2xs"
        >
          <WhatsAppIcon size={16} />
          <span>Send Brief Directly to Lead Architect via WhatsApp (&lt; 15 min reply)</span>
        </button>
      </div>

      {/* Response Guarantee Bar */}
      <div className="p-3.5 rounded-2xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
        <div className="flex items-center gap-2">
          <Clock className="w-4 h-4 text-indigo-600 flex-shrink-0" />
          <span><strong>Guaranteed SLA:</strong> 4-Hour Response &bull; 24-Hour Architecture Review &bull; 48-Hour Scope</span>
        </div>
        <div className="flex items-center gap-1.5 text-emerald-700 font-semibold text-[11px]">
          <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
          <span>100% IP Ownership Guarantee</span>
        </div>
      </div>

    </form>
  );
}
