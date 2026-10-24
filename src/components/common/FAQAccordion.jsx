// src/components/common/FAQAccordion.jsx
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

export default function FAQAccordion({ items, accentColor = '#5c5de8' }) {
  const [openIdx, setOpenIdx] = useState(0);

  const toggle = (idx) => {
    setOpenIdx(openIdx === idx ? -1 : idx);
  };

  return (
    <div className="space-y-4 max-w-4xl mx-auto">
      {items.map((item, idx) => {
        const isOpen = openIdx === idx;
        return (
          <div 
            key={idx}
            className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm transition-all"
            style={{
              borderColor: isOpen ? accentColor : '#e2e8f0'
            }}
          >
            <button
              type="button"
              onClick={() => toggle(idx)}
              className="w-full text-left p-6 flex items-center justify-between gap-4 transition-colors"
            >
              <span className="font-bold text-base text-slate-900">
                {item.q}
              </span>
              <div 
                className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-200"
                style={{
                  backgroundColor: isOpen ? `${accentColor}18` : '#f1f5f9',
                  color: isOpen ? accentColor : '#64748b',
                  transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                }}
              >
                <ChevronDown className="w-4 h-4" />
              </div>
            </button>

            {isOpen && (
              <div className="px-6 pb-6 pt-1 text-sm text-slate-600 leading-relaxed border-t border-slate-100 animate-fadeIn">
                {item.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
