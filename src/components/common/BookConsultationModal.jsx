// src/components/common/BookConsultationModal.jsx
import React, { useState } from 'react';
import { brandConfig, servicePillars } from '../../data/siteContent';
import { 
  Calendar, Clock, ShieldCheck, Sparkles, X, CheckCircle, 
  Send, User, Mail, Globe2, Phone, Video
} from 'lucide-react';
import { WhatsAppIcon } from './SocialIcons';

export default function BookConsultationModal({ isOpen, onClose, defaultTopic = '' }) {
  const [topic, setTopic] = useState(defaultTopic || 'Full-Stack Web & SaaS Platform Engineering');
  const [preferredTime, setPreferredTime] = useState('Morning (09:00 - 12:00)');
  const [timezone, setTimezone] = useState('US Eastern (EST / UTC-5)');
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    notes: ''
  });

  const [status, setStatus] = useState('idle'); // idle | submitting | success

  if (!isOpen) return null;

  const consultationTopics = [
    'Full-Stack Web & SaaS Platform Engineering',
    'Autonomous AI & Enterprise LLM Workflows',
    'Cloud Migration, DevOps & 24/7 SRE',
    'Digital Marketing & Technical Growth Acquisition',
    'Tech Staffing & Dedicated Engineering Pods',
    'Architecture Audit & Scalability Review'
  ];

  const timeSlots = [
    'Morning (09:00 - 12:00)',
    'Afternoon (13:00 - 17:00)',
    'Evening (18:00 - 21:00)',
    'Anytime / Asynchronous First'
  ];

  const timezones = [
    'US Eastern (EST / UTC-5)',
    'US Pacific (PST / UTC-8)',
    'UK & London (GMT/BST / UTC+0)',
    'Central Europe (CET / UTC+1)',
    'Gulf & Dubai (GST / UTC+4)',
    'India Standard Time (IST / UTC+5:30)',
    'Australia (AEST / UTC+10)'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('submitting');
    
    const payload = {
      ...formData,
      topic,
      preferredTime,
      timezone,
      type: 'Free 30-Min Technical Consultation'
    };

    console.log('Consultation Booked:', payload);
    await new Promise(resolve => setTimeout(resolve, 800));
    setStatus('success');
  };

  const handleWhatsAppInstantBooking = () => {
    const text = `Hi SynXCloud! I'd like to book a Free 30-Min Architecture Consultation.\n\n*Topic:* ${topic}\n*Preferred Time:* ${preferredTime}\n*Timezone:* ${timezone}\n*Name:* ${formData.name || 'Not provided'}\n*Email:* ${formData.email || 'Via WhatsApp'}\n*Notes:* ${formData.notes || 'Looking forward to discussing.'}`;
    const url = `https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div 
        className="bg-white rounded-3xl max-w-2xl w-full max-h-[92vh] overflow-y-auto shadow-2xl border border-slate-200 relative animate-fadeIn"
        style={{
          boxShadow: '0 25px 60px -15px rgba(15, 23, 42, 0.4)'
        }}
      >
        
        {/* Top Header */}
        <div className="bg-gradient-to-r from-slate-950 via-slate-900 to-indigo-950 text-white p-6 sm:p-8 rounded-t-3xl relative">
          <button
            type="button"
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>

          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider text-indigo-400 bg-white/10 border border-white/10 mb-3">
            <Video className="w-3.5 h-3.5" />
            <span>1-on-1 Senior Engineering Session</span>
          </div>

          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight mb-2">
            Book a Free 30-Min Technical Consultation
          </h2>

          <p className="text-xs sm:text-sm text-slate-300 leading-relaxed max-w-xl">
            Meet directly with our Principal Architects. We review your architecture, discuss technical tradeoffs, and provide unbiased recommendations with zero sales pressure.
          </p>
        </div>

        {/* Content Body */}
        <div className="p-6 sm:p-8">
          
          {status === 'success' ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-4 shadow-sm">
                <CheckCircle className="w-9 h-9" />
              </div>
              <h3 className="text-2xl font-black text-slate-900 mb-2">
                Consultation Request Received!
              </h3>
              <p className="text-slate-600 text-sm max-w-md mx-auto leading-relaxed mb-6">
                Thank you, <strong>{formData.name}</strong>. Our Lead Architect has been notified and will send a calendar invite (Google Meet / Microsoft Teams) and signed mutual NDA to <strong>{formData.email}</strong> within <strong>4 business hours</strong>.
              </p>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-slate-50 text-slate-700 border border-slate-200 mb-8">
                <Clock className="w-4 h-4 text-indigo-600" />
                <span>Response SLA: Calendar invite confirmed in &lt; 4 business hours</span>
              </div>

              <div>
                <button
                  type="button"
                  onClick={onClose}
                  className="px-8 py-3 rounded-full text-xs font-bold bg-slate-900 text-white hover:bg-slate-800 transition-colors shadow-md"
                >
                  Done
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Consultation Topic */}
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-2">
                  1. What would you like to discuss? <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {consultationTopics.map((t, idx) => {
                    const isSelected = topic === t;
                    return (
                      <button
                        key={idx}
                        type="button"
                        onClick={() => setTopic(t)}
                        className={`p-3 rounded-xl text-left text-xs font-bold border transition-all cursor-pointer ${
                          isSelected
                            ? 'bg-indigo-50 border-indigo-600 text-indigo-900 ring-2 ring-indigo-500/20'
                            : 'bg-white border-slate-200 text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Timezone & Preferred Time */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Globe2 className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Your Timezone</span>
                  </label>
                  <select
                    value={timezone}
                    onChange={(e) => setTimezone(e.target.value)}
                    className="text-xs py-2.5 px-3 rounded-xl"
                  >
                    {timezones.map((tz, idx) => (
                      <option key={idx} value={tz}>{tz}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-indigo-600" />
                    <span>Preferred Time of Day</span>
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="text-xs py-2.5 px-3 rounded-xl"
                  >
                    {timeSlots.map((ts, idx) => (
                      <option key={idx} value={ts}>{ts}</option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Contact Information */}
              <div className="space-y-3 pt-2 border-t border-slate-100">
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-700">
                  2. Your Details
                </label>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="text"
                      required
                      placeholder="Your Name *"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="text-xs py-2.5 px-3.5 rounded-xl"
                    />
                  </div>

                  <div>
                    <input
                      type="email"
                      required
                      placeholder="Work Email *"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="text-xs py-2.5 px-3.5 rounded-xl"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <input
                      type="tel"
                      placeholder="Phone / WhatsApp Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="text-xs py-2.5 px-3.5 rounded-xl"
                    />
                  </div>

                  <div>
                    <input
                      type="text"
                      placeholder="Company / Project Name"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="text-xs py-2.5 px-3.5 rounded-xl"
                    />
                  </div>
                </div>

                <div>
                  <textarea
                    rows="2"
                    placeholder="Briefly describe what you'd like us to prepare for the call (optional)..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="text-xs py-2 px-3.5 rounded-xl resize-none"
                  />
                </div>
              </div>

              {/* Submission CTA Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  type="submit"
                  disabled={status === 'submitting'}
                  className="w-full py-3.5 rounded-full font-bold text-sm text-white shadow-xl transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 cursor-pointer"
                  style={{
                    background: 'linear-gradient(135deg, #5c5de8 0%, #3b82f6 100%)',
                    boxShadow: '0 8px 24px rgba(92, 93, 232, 0.4)'
                  }}
                >
                  <Calendar className="w-4 h-4" />
                  <span>{status === 'submitting' ? 'Confirming Booking...' : 'Confirm Free Consultation (Reply in 4 Hrs)'}</span>
                </button>

                <button
                  type="button"
                  onClick={handleWhatsAppInstantBooking}
                  className="w-full py-2.5 rounded-full font-bold text-xs text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <WhatsAppIcon size={16} />
                  <span>Or Schedule Instantly via WhatsApp (&lt; 15 min reply)</span>
                </button>
              </div>

              {/* SLA & Security Footer */}
              <div className="flex items-center justify-between text-[11px] text-slate-500 pt-1 border-t border-slate-100">
                <div className="flex items-center gap-1.5 text-emerald-700 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Protected by Mutual NDA</span>
                </div>
                <span>No obligation &bull; 100% Free architecture review</span>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}
