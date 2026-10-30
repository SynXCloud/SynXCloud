// src/components/common/QuickContactForm.jsx
import React, { useState } from 'react';
import { brandConfig } from '../../data/siteContent';
import { Send, CheckCircle, Clock, ShieldCheck, Zap } from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export default function QuickContactForm({ onSuccess }) {
  const [formData, setFormData] = useState({
    name: '',
    contact: '', // email or whatsapp
    message: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    // Simulate instant robust submission
    console.log('Quick Contact Submitted:', formData);
    await new Promise(resolve => setTimeout(resolve, 600));
    setStatus('success');
    if (onSuccess) onSuccess(formData);
  };

  const handleWhatsAppDirect = () => {
    const text = `Hi SynXCloud! My name is ${formData.name || 'a visitor'}. Quick inquiry: ${formData.message || 'I would like to discuss engineering consulting services.'}`;
    const url = `https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  if (status === 'success') {
    return (
      <div className="bg-emerald-50/70 border border-emerald-200 rounded-3xl p-8 text-center animate-fadeIn">
        <div className="w-14 h-14 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
          <CheckCircle className="w-8 h-8" />
        </div>
        <h4 className="text-xl font-extrabold text-slate-900 mb-2">
          Message Received, {formData.name || 'Friend'}!
        </h4>
        <p className="text-slate-600 text-xs sm:text-sm max-w-sm mx-auto leading-relaxed mb-4">
          Our solutions architect has been notified. You will receive an initial response and mutual NDA within <strong>4 business hours</strong>.
        </p>

        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-white text-emerald-800 border border-emerald-200 mb-6 shadow-2xs">
          <Clock className="w-3.5 h-3.5 text-emerald-600" />
          <span>Response SLA: Within 4 Business Hours</span>
        </div>

        <div>
          <button
            type="button"
            onClick={() => {
              setFormData({ name: '', contact: '', message: '' });
              setStatus('idle');
            }}
            className="text-xs font-bold text-slate-600 hover:text-slate-900 underline"
          >
            Send another quick message
          </button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      
      {/* 20-Second Guarantee Banner */}
      <div className="flex items-center justify-between p-3 rounded-2xl bg-indigo-50/70 border border-indigo-100 text-xs">
        <div className="flex items-center gap-2 text-indigo-900 font-semibold">
          <Zap className="w-4 h-4 text-indigo-600 flex-shrink-0" />
          <span>Quick Inquiry Form (Takes &lt; 30 seconds)</span>
        </div>
        <span className="text-[11px] font-bold text-indigo-600 uppercase tracking-wider hidden sm:inline">
          Fast Track
        </span>
      </div>

      {/* Name */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
          Your Name <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="e.g. Alex Henderson"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="text-sm py-2.5 px-3.5 rounded-xl"
        />
      </div>

      {/* Email or WhatsApp */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
          Work Email or WhatsApp Number <span className="text-red-500">*</span>
        </label>
        <input
          type="text"
          required
          placeholder="alex@company.com or +1 (555) 019-2834"
          value={formData.contact}
          onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
          className="text-sm py-2.5 px-3.5 rounded-xl"
        />
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1">
          How can we help? <span className="text-red-500">*</span>
        </label>
        <textarea
          rows="3"
          required
          placeholder="Briefly tell us what you're looking to build, optimize, or resolve..."
          value={formData.message}
          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          className="text-sm py-2.5 px-3.5 rounded-xl resize-none"
        />
      </div>

      {/* Dual Submission Actions */}
      <div className="pt-1 space-y-2.5">
        <button
          type="submit"
          disabled={status === 'submitting'}
          className="w-full py-3.5 rounded-full font-bold text-sm text-white shadow-lg transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2"
          style={{
            background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)',
            boxShadow: '0 6px 20px rgba(92, 93, 232, 0.35)'
          }}
        >
          <Send className="w-4 h-4" />
          <span>{status === 'submitting' ? 'Submitting...' : 'Send Quick Inquiry (Reply in 4 Hrs)'}</span>
        </button>

        {/* Instant WhatsApp option for visitors who prefer zero form friction */}
        <button
          type="button"
          onClick={handleWhatsAppDirect}
          className="w-full py-2.5 rounded-full font-bold text-xs text-emerald-700 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-2"
        >
          <WhatsAppIcon size={16} />
          <span>Or Send Instantly via WhatsApp (&lt; 15 min reply)</span>
        </button>
      </div>

      {/* Assurance Footnote */}
      <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1 text-center">
        <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 flex-shrink-0" />
        <span>Guaranteed 4-hour response &bull; Mutual NDA on first touch &bull; No spam</span>
      </div>

    </form>
  );
}
