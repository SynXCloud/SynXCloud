// src/components/home/HeroWaveDivider.jsx
import React from 'react';

export default function HeroWaveDivider({ themeColor = '#5c5de8' }) {
  // Seamless repeating wave path across 2880px (4 periods of 720px each)
  // Perfectly C1 continuous so translating by -720px creates an infinite seamless fluid loop
  const wavePathForeground = "M 0,55 C 180,20 360,90 540,55 C 720,20 900,90 1080,55 C 1260,20 1440,90 1620,55 C 1800,20 1980,90 2160,55 C 2340,20 2520,90 2700,55 C 2880,20 2880,55 2880,55 L 2880,120 L 0,120 Z";
  
  // Upper glowing crest line (only the curve, no fill, stroked with luminous neon gradient)
  const waveCrestLine = "M 0,55 C 180,20 360,90 540,55 C 720,20 900,90 1080,55 C 1260,20 1440,90 1620,55 C 1800,20 1980,90 2160,55 C 2340,20 2520,90 2700,55 C 2880,20 2880,55 2880,55";

  // Mid-layer drifting ambient wave with slightly different amplitude and offset
  const wavePathMid = "M 0,70 C 240,35 480,95 720,70 C 960,35 1200,95 1440,70 C 1680,35 1920,95 2160,70 C 2400,35 2640,95 2880,70 L 2880,120 L 0,120 Z";

  return (
    <div 
      className="absolute bottom-0 left-0 right-0 w-full overflow-hidden pointer-events-none leading-none z-10 h-16 sm:h-20 md:h-24 lg:h-28"
      aria-hidden="true"
    >
      {/* SVG Definitions for Gradients & Glow Filters */}
      <svg className="absolute w-0 h-0" aria-hidden="true" focusable="false">
        <defs>
          {/* Dynamic Luminous Crest Stroke Gradient */}
          <linearGradient id="heroNeonCrest" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.9" />
            <stop offset="35%" stopColor={themeColor} stopOpacity="1" />
            <stop offset="70%" stopColor="#818cf8" stopOpacity="0.95" />
            <stop offset="100%" stopColor="#c084fc" stopOpacity="0.85" />
          </linearGradient>

          {/* Ambient Glow Fill Gradient for Mid Wave */}
          <linearGradient id="heroMidWaveGlow" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={themeColor} stopOpacity="0.35" />
            <stop offset="70%" stopColor="#3b82f6" stopOpacity="0.15" />
            <stop offset="100%" stopColor="#f8fafc" stopOpacity="0.8" />
          </linearGradient>
        </defs>
      </svg>

      {/* Mid Layer: Fluid Ambient Floating Wave */}
      <div className="absolute inset-0 w-[2880px] h-full animate-wave-flow-2 opacity-60">
        <svg 
          viewBox="0 0 2880 120" 
          preserveAspectRatio="none" 
          className="w-full h-full block"
        >
          <path 
            d={wavePathMid} 
            fill="url(#heroMidWaveGlow)" 
          />
        </svg>
      </div>

      {/* Foreground Layer: Fluid Solid Wave transitioning into #f8fafc (Slate 50) */}
      <div className="absolute inset-0 w-[2880px] h-full animate-wave-flow-1">
        <svg 
          viewBox="0 0 2880 120" 
          preserveAspectRatio="none" 
          className="w-full h-full block"
        >
          {/* Solid fill matching the next section's background (slate-50) */}
          <path 
            d={wavePathForeground} 
            fill="#f8fafc" 
          />

          {/* Luminous Neon Edge Beam along the wave crest */}
          <path 
            d={waveCrestLine} 
            fill="none" 
            stroke="url(#heroNeonCrest)" 
            strokeWidth="3"
            strokeLinecap="round"
            className="animate-neon-pulse"
          />
        </svg>
      </div>
    </div>
  );
}
