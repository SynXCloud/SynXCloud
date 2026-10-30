// src/components/common/WhatsAppFloat.jsx
import React, { useState, useEffect } from 'react';
import { brandConfig } from '../../data/siteContent';
import { WhatsAppIcon } from './SocialIcons';
import { X, Send, Sparkles, MessageCircle, Clock, ShieldCheck } from 'lucide-react';

export default function WhatsAppFloat() {
  const [isOpen, setIsOpen] = useState(false);
  const [hasPrompted, setHasPrompted] = useState(false);
  const [customMsg, setCustomMsg] = useState('');

  // Subtle nudge tooltip after 6 seconds on first page visit
  useEffect(() => {
    const timer = setTimeout(() => {
      setHasPrompted(true);
    }, 6000);
    return () => clearTimeout(timer);
  }, []);

  const quickTopics = [
    { label: "Book Free Consultation", text: "Hi SynXCloud! I would like to book a free 30-min architecture consultation." },
    { label: "Cloud & DevOps Scoping", text: "Hi SynXCloud! I need assistance with Cloud Migration & DevOps infrastructure." },
    { label: "Full-Stack App Development", text: "Hi SynXCloud! I am looking to build a bespoke web/mobile SaaS application." },
    { label: "AI & Autonomous Workflows", text: "Hi SynXCloud! I want to explore autonomous AI agentic workflows for my business." }
  ];

  const handleSend = (textToSend) => {
    const message = textToSend || customMsg || "Hello SynXCloud! I would like to enquire about your engineering services.";
    const url = `https://wa.me/${brandConfig.contact.whatsappClean}?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">
      
      {/* Floating Chat Popover Window */}
      {isOpen && (
        <div 
          className="mb-4 w-[340px] sm:w-[380px] max-w-[92vw] bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden animate-fadeIn"
          style={{
            boxShadow: '0 20px 50px rgba(15, 23, 42, 0.25), 0 0 0 1px rgba(0, 0, 0, 0.05)'
          }}
        >
          {/* Header with WhatsApp Brand Colors */}
          <div className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white p-5 flex items-start justify-between">
            <div className="flex items-center gap-3">
              <div className="w-11 h-11 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white border border-white/30 flex-shrink-0">
                <WhatsAppIcon size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h4 className="font-extrabold text-sm text-white">SynXCloud Solution Desk</h4>
                  <span className="w-2 h-2 rounded-full bg-emerald-300 animate-pulse" />
                </div>
                <div className="flex items-center gap-1.5 text-xs text-emerald-100 mt-0.5">
                  <Clock className="w-3 h-3" />
                  <span>Avg reply: &lt; 15 mins</span>
                </div>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="w-7 h-7 rounded-full bg-black/10 hover:bg-black/20 text-white flex items-center justify-center transition-colors"
              aria-label="Close WhatsApp chat popup"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Chat Body */}
          <div className="p-5 bg-slate-50 space-y-4 max-h-[360px] overflow-y-auto">
            
            {/* Automated Welcoming Bubble */}
            <div className="bg-white rounded-2xl p-3.5 border border-slate-200 shadow-sm text-xs text-slate-700 leading-relaxed">
              <p className="font-semibold text-slate-900 mb-1 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>Direct Access to Systems Architects</span>
              </p>
              <p>
                Have a question or looking to scope a project? Chat directly with our engineering team on WhatsApp for fast, direct technical feedback.
              </p>
              <div className="mt-2 pt-2 border-t border-slate-100 flex items-center gap-1.5 text-[10px] text-slate-400">
                <ShieldCheck className="w-3 h-3 text-emerald-500" />
                <span>Strict confidentiality &amp; mutual NDA protected</span>
              </div>
            </div>

            {/* Quick Topic Chips */}
            <div className="space-y-1.5">
              <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">
                Quick Enquiries:
              </span>
              <div className="flex flex-col gap-1.5">
                {quickTopics.map((item, idx) => (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSend(item.text)}
                    className="text-left text-xs bg-white hover:bg-emerald-50 hover:border-emerald-300 border border-slate-200 px-3 py-2 rounded-xl text-slate-700 font-medium transition-all flex items-center justify-between group shadow-2xs"
                  >
                    <span>{item.label}</span>
                    <Send className="w-3 h-3 text-slate-400 group-hover:text-emerald-600 group-hover:translate-x-0.5 transition-all" />
                  </button>
                ))}
              </div>
            </div>

            {/* Custom Input */}
            <div className="pt-2">
              <div className="flex items-center gap-2">
                <input
                  type="text"
                  placeholder="Type your question..."
                  value={customMsg}
                  onChange={(e) => setCustomMsg(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      e.preventDefault();
                      handleSend();
                    }
                  }}
                  className="text-xs bg-white border border-slate-200 rounded-xl px-3 py-2.5 flex-1 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                />
                <button
                  type="button"
                  onClick={() => handleSend()}
                  className="bg-emerald-600 hover:bg-emerald-700 text-white p-2.5 rounded-xl transition-colors shadow-md flex-shrink-0"
                  aria-label="Send WhatsApp message"
                >
                  <Send className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

          {/* Footer Commitment Strip */}
          <div className="px-5 py-2.5 bg-slate-100 border-t border-slate-200/80 text-[11px] text-slate-500 text-center font-medium">
            Direct Line: <strong className="text-slate-700">{brandConfig.contact.phone}</strong>
          </div>
        </div>
      )}

      {/* Floating CTA Pill / Bubble */}
      <div className="flex items-center gap-3">
        
        {/* Persistent Nudge Bubble (Visible before opening if prompted) */}
        {!isOpen && hasPrompted && (
          <div 
            onClick={() => setIsOpen(true)}
            className="hidden sm:flex items-center gap-2.5 bg-white text-slate-800 px-4 py-2 rounded-full shadow-xl border border-slate-200/90 text-xs font-bold cursor-pointer hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 animate-fadeIn"
          >
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
            <span>Chat on WhatsApp</span>
            <span className="text-slate-400 font-normal">| &lt; 15 min reply</span>
          </div>
        )}

        {/* Main Floating WhatsApp Button */}
        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Chat on WhatsApp"
          className="relative w-14 h-14 rounded-full bg-gradient-to-br from-emerald-500 to-teal-600 text-white flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 group focus:outline-none focus:ring-4 focus:ring-emerald-300"
          style={{
            boxShadow: '0 8px 30px rgba(16, 185, 129, 0.45)'
          }}
        >
          {/* Pulsing ring */}
          <span className="absolute -inset-1 rounded-full bg-emerald-400 opacity-40 animate-ping pointer-events-none" />
          
          {isOpen ? (
            <X className="w-6 h-6 transition-transform rotate-0 group-hover:rotate-90" />
          ) : (
            <WhatsAppIcon size={30} className="transition-transform group-hover:scale-105" />
          )}

          {/* Online status indicator */}
          <span className="absolute top-0 right-0 w-4 h-4 bg-emerald-400 border-2 border-white rounded-full shadow-sm" />
        </button>

      </div>

    </div>
  );
}
