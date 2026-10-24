// src/components/home/HeroSlider.jsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { servicePillars, brandConfig } from '../../data/siteContent';
import ParticleCanvas from './ParticleCanvas';
import HeroWaveDivider from './HeroWaveDivider';
import { ArrowRight, ChevronLeft, ChevronRight, Play, ShieldCheck, Sparkles } from 'lucide-react';

export default function HeroSlider() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % servicePillars.length);
    }, 7000);
    return () => clearInterval(timer);
  }, []);

  const currentPillar = servicePillars[activeSlide];

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + servicePillars.length) % servicePillars.length);
  };

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % servicePillars.length);
  };

  return (
    <header className="relative bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white min-h-[740px] flex items-center justify-center pt-32 pb-28 sm:pb-32 overflow-hidden">
      
      {/* Interactive Background Particle Mesh */}
      <ParticleCanvas />

      {/* Ambient Radial Gradient Lights */}
      <div 
        className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[750px] h-[550px] rounded-full pointer-events-none blur-3xl opacity-20 transition-all duration-700"
        style={{
          background: `radial-gradient(circle, ${currentPillar.themeColor} 0%, transparent 70%)`
        }}
      />

      {/* Prev / Next Navigation Arrows */}
      <button 
        type="button"
        onClick={prevSlide}
        className="hidden md:flex absolute left-6 lg:left-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 items-center justify-center text-white transition-all hover:scale-110 shadow-lg cursor-pointer"
        aria-label="Previous Slide"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button 
        type="button"
        onClick={nextSlide}
        className="hidden md:flex absolute right-6 lg:right-12 top-1/2 -translate-y-1/2 z-20 w-12 h-12 rounded-full bg-white/10 hover:bg-white/20 border border-white/15 items-center justify-center text-white transition-all hover:scale-110 shadow-lg cursor-pointer"
        aria-label="Next Slide"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        
        {/* Animated Badge */}
        <div className="mb-5 inline-block animate-fadeIn" key={`badge-${activeSlide}`}>
          <span 
            className="text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full inline-flex items-center gap-2 shadow-lg"
            style={{ 
              backgroundColor: `${currentPillar.themeColor}22`,
              color: currentPillar.themeColor,
              border: `1px solid ${currentPillar.themeColor}55`
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            {currentPillar.badge}
          </span>
        </div>

        {/* Main H1 Headline */}
        <h1 
          key={`title-${activeSlide}`}
          className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight animate-fadeIn"
        >
          {currentPillar.name}
        </h1>

        {/* Subtitle Descriptor */}
        <p 
          key={`desc-${activeSlide}`}
          className="text-base sm:text-lg md:text-xl text-slate-300 max-w-3xl mx-auto mb-10 leading-relaxed font-normal animate-fadeIn"
        >
          {currentPillar.tagline} {currentPillar.longDesc}
        </p>

        {/* Dual Call To Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link 
            to={`/services/${currentPillar.slug}`}
            className="px-8 py-4 rounded-full font-bold text-sm text-white transition-all transform hover:-translate-y-1 shadow-xl flex items-center gap-2 cursor-pointer"
            style={{ 
              backgroundColor: currentPillar.themeColor,
              boxShadow: `0 8px 24px ${currentPillar.themeColor}45`
            }}
          >
            <span>Explore Practice</span>
            <ArrowRight className="w-4 h-4" />
          </Link>

          <Link 
            to={`/contact?service=${currentPillar.slug}`}
            className="px-8 py-4 rounded-full font-bold text-sm text-white border border-white/25 bg-white/5 hover:bg-white/15 transition-all transform hover:-translate-y-1 shadow-md cursor-pointer"
          >
            Request Free Assessment
          </Link>
        </div>

        {/* Pillar Highlight Badges with Animated Cyber Beam Divider */}
        <div className="relative mt-12 max-w-2xl mx-auto pt-6">
          {/* Animated Glowing Cyber Beam Line */}
          <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-white/20 to-transparent overflow-hidden">
            <div 
              className="absolute top-0 h-[2px] w-36 rounded-full animate-beamScan"
              style={{
                background: `linear-gradient(90deg, transparent, ${currentPillar.themeColor}, transparent)`,
                boxShadow: `0 0 14px ${currentPillar.themeColor}`
              }}
            />
          </div>

          <div className="grid grid-cols-3 gap-3">
            {currentPillar.stats?.map((stat, idx) => (
              <div key={idx} className="p-2 text-center">
                <div className="text-xl md:text-2xl font-extrabold text-white" style={{ color: currentPillar.themeColor }}>
                  {stat.value}
                </div>
                <div className="text-[11px] text-slate-400 font-semibold uppercase tracking-wider mt-0.5">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Slide Indicators */}
        <div className="flex items-center justify-center gap-3 mt-8">
          {servicePillars.map((p, idx) => (
            <button 
              key={idx}
              onClick={() => setActiveSlide(idx)}
              className={`h-2.5 rounded-full transition-all duration-300 flex items-center cursor-pointer ${
                activeSlide === idx ? 'w-10' : 'w-3 bg-white/25 hover:bg-white/50'
              }`}
              style={{
                backgroundColor: activeSlide === idx ? p.themeColor : undefined
              }}
              aria-label={`Jump to ${p.name}`}
            />
          ))}
        </div>

      </div>

      {/* Animated Multi-Layered Flowing Wave Divider */}
      <HeroWaveDivider themeColor={currentPillar.themeColor} />
    </header>
  );
}
