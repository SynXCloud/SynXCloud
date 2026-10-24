// src/components/common/SectionHeader.jsx
import React from 'react';
import { Sparkles } from 'lucide-react';

export default function SectionHeader({
  badge,
  title,
  subtitle,
  center = true,
  dark = false,
  accentColor = '#5c5de8'
}) {
  return (
    <div className={`max-w-3xl mb-14 ${center ? 'mx-auto text-center' : 'text-left'}`}>
      {badge && (
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-3 shadow-sm"
          style={{
            backgroundColor: dark ? 'rgba(255, 255, 255, 0.08)' : `${accentColor}15`,
            color: dark ? '#a5b4fc' : accentColor,
            border: `1px solid ${dark ? 'rgba(255, 255, 255, 0.12)' : `${accentColor}30`}`
          }}
        >
          <Sparkles className="w-3.5 h-3.5" />
          <span>{badge}</span>
        </div>
      )}

      <h2 className={`text-3xl sm:text-4xl font-extrabold mb-4 tracking-tight leading-tight ${dark ? 'text-white' : 'text-slate-900'}`}>
        {title}
      </h2>

      <div 
        className={`w-16 h-1 rounded-full mb-4 ${center ? 'mx-auto' : ''}`}
        style={{ backgroundColor: accentColor }}
      />

      {subtitle && (
        <p className={`text-base sm:text-lg leading-relaxed ${dark ? 'text-slate-300' : 'text-slate-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
