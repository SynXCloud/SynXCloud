import { useState, useEffect, useCallback, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

/* ===== CLIENT REVIEWS ===== */
const REVIEWS = [
  {
    name: 'Amit Verma',
    role: 'Startup Founder',
    text: 'SynXCloud delivered a clean, modern business website with fast turnaround and strong communication. Great experience working with the team.',
    img: 'https://i.pravatar.cc/150?img=12',
    rating: 5,
  },
  {
    name: 'Neha Kapoor',
    role: 'Retail Business Owner',
    text: 'We needed a professional website to grow online presence. SynXCloud built a responsive site that matched our brand perfectly.',
    img: 'https://i.pravatar.cc/150?img=32',
    rating: 5,
  },
  {
    name: 'Rohit Malhotra',
    role: 'Consultant',
    text: 'Their team understood our requirements quickly and delivered a polished website with smooth performance and great design.',
    img: 'https://i.pravatar.cc/150?img=15',
    rating: 5,
  },
  {
    name: 'Pooja Nair',
    role: 'Small Business Owner',
    text: 'Professional service, clear communication, and timely delivery. SynXCloud helped us launch our website confidently.',
    img: 'https://i.pravatar.cc/150?img=41',
    rating: 5,
  },
]

/* ===== DATA ===== */
const NAV_ITEMS = [
  { id: 'home', label: 'Home' },
  { id: 'solutions', label: 'Solutions' },
  { id: 'approach', label: 'Approach' },
  { id: 'expertise', label: 'Expertise' },
  { id: 'case-studies', label: 'Case Studies' },
  { id: 'contact', label: 'Contact' },
]

const TRINITY = [
  {
    icon: 'build',
    title: 'Build',
    desc: 'We develop pixel-perfect web applications, native mobile apps, and robust backend systems tailored precisely to your business needs.',
    tag: 'Development',
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: 'innovate',
    title: 'Innovate',
    desc: 'Transform your operations with AI automation, smart chatbots, and custom integrations that give you a competitive edge.',
    tag: 'Intelligence',
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?q=80&w=1000&auto=format&fit=crop',
  },
  {
    icon: 'grow',
    title: 'Grow',
    desc: 'From e-commerce platforms to scalable learning management systems (LMS), we build digital assets that drive revenue and growth.',
    tag: 'Scalability',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1000&auto=format&fit=crop',
  },
]

const SERVICES = [
  {
    icon: 'code',
    title: 'Web & Mobile App Development',
    desc: 'High-performance websites and mobile applications built with modern tech stacks like React, Next.js, and React Native.',
    tag: 'Development',
    features: ['Custom Web Applications', 'iOS & Android Mobile Apps', 'Responsive Landing Pages'],
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: 'cloud',
    title: 'Custom Software & E-Commerce',
    desc: 'Scalable backend systems, complex software solutions, and high-converting e-commerce platforms tailored to your niche.',
    tag: 'Solutions',
    features: ['E-Commerce Stores', 'Learning Platforms (LMS)', 'Custom ERP/CRM Systems'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: 'innovate',
    title: 'AI Automation & Chatbots',
    desc: 'Harness the power of AI to automate repetitive tasks, qualify leads with smart chatbots, and improve customer experience.',
    tag: 'AI-First',
    features: ['Intelligent Chatbots', 'Workflow Automation', 'AI Integrations'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=1200&auto=format&fit=crop',
  },
  {
    icon: 'scale',
    title: 'Software Maintenance & Management',
    desc: 'We don\'t just build; we maintain. Ensuring your software is always secure, updated, and running at peak performance.',
    tag: 'Support',
    features: ['Ongoing Maintenance', 'Performance Optimization', 'Security Updates'],
    image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?q=80&w=1200&auto=format&fit=crop',
  },
]

const TECH_STACK = [
  { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
  { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
  { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
  { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
  { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
  { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
  { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
  { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
  { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
  { name: 'GraphQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg' },
  { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  { name: 'Terraform', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg' },
]

const STATS = [
  { value: '50+', label: 'Projects Delivered' },
  { value: '99%', label: 'Client Satisfaction' },
  { value: '24/7', label: 'Support & Maintenance' },
  { value: '10+', label: 'Years Combined Experience' },
]

const TRUSTED_BY = [
  'Fortis Health',
  'NovaFin',
  'Astra Retail',
  'BlueWave',
  'Verto Systems',
  'QuantumApps',
]

const CASE_STUDIES = [
  {
    title: 'E-Commerce Platform Launch',
    outcome: 'Increased online sales by 150% and improved mobile conversion rates.',
    description: 'Designed and developed a custom high-performance e-commerce store with seamless payment gateway integration.',
    tag: 'E-Commerce',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?q=80&w=1200&auto=format&fit=crop',
  },
  {
    title: 'AI Customer Support Bot',
    outcome: 'Reduced manual support tickets by 60% with instant automated responses.',
    description: 'Integrated a custom AI chatbot trained on the client\'s knowledge base to handle 24/7 customer inquiries.',
    tag: 'AI Automation',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?q=80&w=1000&auto=format&fit=crop',
  },
  {
    title: 'Custom Learning Platform (LMS)',
    outcome: 'Successfully onboarded 5,000+ students within the first month of launch.',
    description: 'Built a scalable online learning platform featuring video courses, progress tracking, and automated certifications.',
    tag: 'EdTech',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1200&auto=format&fit=crop',
  },
]

const PROCESS = [
  {
    step: '01',
    title: 'Discovery & Planning',
    desc: 'We start by understanding your business goals, target audience, and specific requirements to outline the perfect solution.',
  },
  {
    step: '02',
    title: 'UI/UX Design',
    desc: 'Creating intuitive, modern, and engaging user interfaces that provide an exceptional experience across all devices.',
  },
  {
    step: '03',
    title: 'Development & Testing',
    desc: 'Writing clean, scalable code and conducting rigorous testing to ensure your software is bug-free and performant.',
  },
  {
    step: '04',
    title: 'Launch & Support',
    desc: 'Deploying your project seamlessly and providing ongoing maintenance to keep everything running smoothly.',
  },
]

const PREMIUM_FEATURES = [
  {
    icon: 'innovate',
    title: 'Dedicated delivery partner',
    desc: 'A single technical lead coordinates architecture, delivery, and support for your premium engagement.',
    image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: 'scale',
    title: 'Security-first execution',
    desc: 'Every solution includes threat protection, compliance readiness, and continuous monitoring.',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=1200&auto=format&fit=crop'
  },
  {
    icon: 'grow',
    title: 'Business impact focus',
    desc: 'We align engineering work to measurable revenue, retention, and operational efficiency goals.',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1200&auto=format&fit=crop'
  },
]

/* ===== SVG ICONS ===== */
function Icon({ name, className = '', size = 24 }) {
  const icons = {
    build: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="12" rx="2" /><path d="M12 12h.01" /><path d="M17 12h.01" /><path d="M7 12h.01" />
      </svg>
    ),
    innovate: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4m0 12v4M4.93 4.93l2.83 2.83m8.48 8.48l2.83 2.83M2 12h4m12 0h4M4.93 19.07l2.83-2.83m8.48-8.48l2.83-2.83" />
        <circle cx="12" cy="12" r="4" />
      </svg>
    ),
    grow: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
      </svg>
    ),
    cloud: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 10h-1.26A8 8 0 1 0 9 20h9a5 5 0 0 0 0-10z" />
      </svg>
    ),
    code: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
      </svg>
    ),
    scale: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
        <polyline points="3.27 6.96 12 12.01 20.73 6.96" /><line x1="12" y1="22.08" x2="12" y2="12" />
      </svg>
    ),
    sun: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" /><line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" /><line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" /><line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" /><line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
      </svg>
    ),
    moon: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
      </svg>
    ),
    globe: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><line x1="2" y1="12" x2="22" y2="12" /><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
    ),
    twitter: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
      </svg>
    ),
    linkedin: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" />
      </svg>
    ),
    facebook: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    arrowLeft: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="19" y1="12" x2="5" y2="12" /><polyline points="12 19 5 12 12 5" />
      </svg>
    ),
    arrowRight: (
      <svg className={`icon ${className}`} width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="5" y1="12" x2="19" y2="12" /><polyline points="12 5 19 12 12 19" />
      </svg>
    ),
  }
  return icons[name] || null
}

/* ===== PIXEL DUST COMPONENT ===== */
function PixelDust() {
  const pixels = Array.from({ length: 30 }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 2,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 12,
    duration: Math.random() * 8 + 8,
  }))
  return (
    <div className="pixel-dust">
      {pixels.map(p => (
        <div
          key={p.id}
          className="pixel"
          style={{
            width: `${p.size}px`,
            height: `${p.size}px`,
            left: `${p.x}%`,
            top: `${p.y}%`,
            animationDelay: `${p.delay}s`,
            animationDuration: `${p.duration}s`,
          }}
        />
      ))}
    </div>
  )
}

/* ===== MARQUEE COMPONENT ===== */
function Marquee({ items, renderItem, speed = '30s', reverse = false }) {
  const doubled = [...items, ...items]
  return (
    <div className={`marquee-wrapper ${reverse ? 'reverse' : ''}`}>
      <div className="marquee-track" style={{ animationDuration: speed }}>
        {doubled.map((item, idx) => (
          <div key={idx} className="marquee-item">
            {renderItem(item)}
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== PIXEL BURST (for service cards) ===== */
function PixelBurst() {
  const sizes = [4, 3, 5, 3, 4]
  return (
    <div className="pixel-burst">
      {sizes.map((s, i) => (
        <div key={i} className="pb" style={{ width: s, height: s, top: `${20 + i * 12}%`, left: `${10 + i * 15}%` }} />
      ))}
    </div>
  )
}

/* ===== REVIEW CAROUSEL (Horizontal Marquee) ===== */
function ReviewCarousel({ reviews }) {
  const renderReview = (r) => (
    <div className="review-marquee-item">
      <div className="review-card">
        <div className="review-quote-icon">“</div>
        <div className="review-stars">
          {Array.from({ length: r.rating }, (_, j) => (
            <svg key={j} viewBox="0 0 24 24" fill="#f59e0b" width="14" height="14" aria-hidden="true">
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
          ))}
        </div>
        <p className="review-text">{r.text}</p>
        <div className="review-author">
          <img src={r.img} alt={r.name} className="review-avatar" loading="lazy" />
          <div>
            <div className="review-name">{r.name}</div>
            <div className="review-role">{r.role}</div>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <div className="review-marquee-section">
      <Marquee items={reviews} renderItem={renderReview} speed="40s" />
    </div>
  )
}

/* ===== CLOUD ORBIT ANIMATION ===== */
const ORBIT_SERVICES = [
  { label: 'AWS', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg', color: '#FF9900', radius: 95, speed: '12s', dir: 1 },
  { label: 'Docker', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg', color: '#2496ED', radius: 110, speed: '18s', dir: -1 },
  { label: 'Kubernetes', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg', color: '#326CE5', radius: 125, speed: '15s', dir: 1 },
  { label: 'React', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg', color: '#61DAFB', radius: 140, speed: '22s', dir: -1 },
  { label: 'TypeScript', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg', color: '#3178C6', radius: 155, speed: '20s', dir: 1 },
  { label: 'Next.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg', color: '#FFFFFF', radius: 170, speed: '28s', dir: -1 },
  { label: 'Node.js', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg', color: '#339933', radius: 185, speed: '24s', dir: 1 },
  { label: 'Python', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg', color: '#3776AB', radius: 200, speed: '26s', dir: -1 },
  { label: 'PostgreSQL', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg', color: '#4169E1', radius: 215, speed: '30s', dir: 1 },
  { label: 'Redis', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg', color: '#DC382D', radius: 230, speed: '32s', dir: -1 },
  { label: 'GCP', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/googlecloud/googlecloud-original.svg', color: '#4285F4', radius: 130, speed: '23s', dir: -1 },
  { label: 'Terraform', icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/terraform/terraform-original.svg', color: '#7B42BC', radius: 185, speed: '19s', dir: -1 },
]

function CloudOrbit() {
  const uniqueRadii = Array.from(new Set(ORBIT_SERVICES.map(s => s.radius)))

  return (
    <div className="cloud-orbit">
      {/* Visual background rings for each unique path */}
      {uniqueRadii.map((radius, i) => (
        <div
          key={`ring-${i}`}
          className="orbit-ring"
          style={{ width: radius * 2, height: radius * 2 }}
        />
      ))}

      {/* Central cloud */}
      <div className="orbit-center">
        <svg viewBox="0 0 64 64" width="48" height="48" fill="none">
          <path d="M52 34a12 12 0 0 0-11.4-12A16 16 0 0 0 12 28a10 10 0 0 0 0 20h36a12 12 0 0 0 4-14z" fill="url(#cg)" stroke="rgba(255,255,255,0.3)" strokeWidth="1" />
          <defs><linearGradient id="cg" x1="0" y1="0" x2="64" y2="64"><stop offset="0%" stopColor="#007BFF" /><stop offset="100%" stopColor="#00BFFF" /></linearGradient></defs>
        </svg>
        <span className="orbit-center-label">SynXCloud</span>
      </div>

      {/* Orbiting service icons on separate paths */}
      {ORBIT_SERVICES.map((s, i) => {
        const startAngle = (360 / ORBIT_SERVICES.length) * i
        return (
          <div
            key={s.label}
            className="orbit-item"
            style={{
              '--radius': `${s.radius}px`,
              '--speed': s.speed,
              '--dir': s.dir,
              '--startAngle': `${startAngle}deg`,
              '--color': s.color,
            }}
          >
            <div className="orbit-bubble" style={{ '--color': s.color }}>
              <img src={s.icon} alt={s.label} className="orbit-icon-img" loading="lazy" />
            </div>
          </div>
        )
      })}

      <div className="orbit-pulse-ring" />
    </div>
  )
}
/* ===== SERVICE SHOWCASE COMPONENT ===== */
function ServiceShowcase({ services }) {
  const [activeIndex, setActiveIndex] = useState(0)
  const [direction, setDirection] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const [expanded, setExpanded] = useState(false)

  const nextSlide = useCallback(() => {
    setDirection(1)
    setActiveIndex((prev) => (prev + 1) % services.length)
  }, [services.length])

  const prevSlide = () => {
    setDirection(-1)
    setActiveIndex((prev) => (prev - 1 + services.length) % services.length)
  }

  useEffect(() => {
    if (isPaused) return
    const timer = setInterval(() => {
      nextSlide()
    }, 5000)
    return () => clearInterval(timer)
  }, [nextSlide, isPaused])

  useEffect(() => {
    setExpanded(false)
  }, [activeIndex])

  return (
    <div
      className="service-showcase-container reveal"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="service-navigation-wrap">
        <button className="nav-btn prev" onClick={prevSlide} aria-label="Previous service">
          <Icon name="arrowLeft" size={24} />
        </button>

        <div className="service-slider-viewport">
          <div className="service-cards-track">
            {services.map((s, i) => {
              const isPrev = (activeIndex - 1 + services.length) % services.length === i
              const isActive = activeIndex === i
              const isNext = (activeIndex + 1) % services.length === i

              let status = 'hidden'
              if (isActive) status = 'active'
              else if (isPrev) status = 'prev'
              else if (isNext) status = 'next'

              return (
                <div key={s.title} className={`service-showcase-card ${status}`}>
                  <div className="card-inner">
                    <div className="service-content-side">
                      <div className="service-icon-glow">
                        <Icon name={s.icon} size={32} />
                      </div>
                      <span className="service-tag-pill">{s.tag}</span>
                      <h3>{s.title}</h3>
                      <button
                        type="button"
                        className="learn-more-toggle"
                        onClick={() => setExpanded((prev) => !prev)}
                        aria-expanded={expanded}
                      >
                        {expanded ? 'Hide details' : 'Learn more'}
                      </button>
                      <div className={`service-card-details ${expanded ? 'expanded' : 'collapsed'}`}>
                        <p>{s.desc}</p>
                        <ul className="showcase-features">
                          {s.features.map(f => (
                            <li key={f}><Icon name="arrowRight" size={14} style={{ marginRight: '8px', color: 'var(--electric-blue)' }} /> {f}</li>
                          ))}
                        </ul>
                        <div className="service-card-footer">
                          <a href="#contact" className="btn btn-outline btn-sm">Explore Solution</a>
                        </div>
                      </div>
                    </div>
                    <div className="service-visual-side">
                      <div className="visual-image-container">
                        <img src={s.image} alt={s.title} className="service-showcase-img" loading="lazy" />
                        <div className="image-overlay-gradient" />
                        <div className="visual-abstract">
                          <div className="abstract-shape shape-1" />
                          <div className="abstract-shape shape-2" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <button className="nav-btn next" onClick={nextSlide} aria-label="Next service">
          <Icon name="arrowRight" size={24} />
        </button>
      </div>

      <div className="service-progress-dots">
        {services.map((_, i) => (
          <button
            key={i}
            className={`dot ${activeIndex === i ? 'active' : ''}`}
            onClick={() => {
              setDirection(i > activeIndex ? 1 : -1)
              setActiveIndex(i)
            }}
          />
        ))}
      </div>
    </div>
  )
}

/* ===== MAIN APP ===== */
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [formStatus, setFormStatus] = useState('')
  const formRef = useRef(null)

  const sendEmail = (e) => {
    e.preventDefault()
    setFormStatus('Sending...')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS config missing', { serviceId, templateId, publicKey })
      setFormStatus('EmailJS configuration is incomplete. Check your .env values.')
      return
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus('Message sent successfully!')
        formRef.current.reset()
      })
      .catch((error) => {
        console.error('EmailJS error', error)
        setFormStatus('Unable to send the message. Please try again later.')
      })
  }

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Scroll-reveal and Scrollspy observer
  useEffect(() => {
    const sections = ['home', 'solutions', 'approach', 'expertise', 'case-studies', 'contact']

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Scroll-reveal
            entry.target.classList.add('visible')

            // Scrollspy
            if (sections.includes(entry.target.id)) {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      { threshold: 0.2, rootMargin: '0px' }
    )

    // Observe sections for scrollspy
    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    // Observe reveal elements
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const closeMenu = useCallback(() => setMobileOpen(false), [])

  // Hero pixel trail
  const heroPixels = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    size: Math.random() * 8 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    delay: Math.random() * 8,
  }))

  return (
    <div className="site-shell">
      <PixelDust />

      {/* ===== HEADER ===== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`} id="header">
        <div className="container nav-wrap">
          <a href="#home" className="brand" onClick={closeMenu}>
            <img src="/officialLogo-removebg-preview.png" alt="SynXCloud" className="brand-logo" loading="lazy" />
          </a>
          <div className="nav-right-cluster">
            <nav className="nav" aria-label="Primary navigation">
              {NAV_ITEMS.map(item => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div className="nav-actions">
              <a href="#contact" className="btn btn-gradient btn-sm">Get Started</a>
            </div>
            <button
              className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(o => !o)}
              aria-label="Toggle navigation"
              aria-expanded={mobileOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map(item => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={closeMenu}
          >
            {item.label}
          </a>
        ))}
        <a href="#contact" className="btn btn-gradient btn-block" onClick={closeMenu} style={{ marginTop: '1rem' }}>Get Started</a>
      </div>

      <main id="main-content">
        {/* ===== HERO ===== */}
        <section className="hero" id="home">
          <div className="hero-bg" />
          <div className="hero-mesh" />
          <div className="hero-grid-lines" />
          <div className="hero-pixel-trail">
            {heroPixels.map(p => (
              <div key={p.id} className="h-pixel" style={{
                width: p.size, height: p.size,
                left: `${p.x}%`, top: `${p.y}%`,
                animationDelay: `${p.delay}s`,
              }} />
            ))}
          </div>

          <div className="container">
            <div className="hero-content">
              <span className="eyebrow">Your Freelance Development Partner</span>
              <h1>
                Building Digital<br />
                <span className="gradient-text">Experiences</span><br />
                That Convert
              </h1>
              <p>
                Expert web development, mobile apps, custom software, e-commerce, and AI automation tailored to scale your business.
              </p>
              <ul className="hero-benefits">
                <li>Custom Web & Mobile App Development</li>
                <li>E-Commerce & Learning Platforms (LMS)</li>
                <li>AI Automation & Smart Chatbots</li>
              </ul>
              <div className="hero-buttons">
                <a href="#contact" className="btn btn-gradient btn-lg">
                  Get Started <Icon name="arrowRight" size={18} />
                </a>
                <a href="#contact" className="btn btn-outline btn-lg hero-btn-outline">
                  Book a strategy call
                </a>
              </div>
            </div>
            <div className="hero-visual">
              <div className="hero-glow-orb" />
              <CloudOrbit />
            </div>
          </div>
        </section>

        {/* ===== STATS SECTION ===== */}
        <section className="section" style={{ padding: '4rem 0', background: 'var(--bg-primary)' }}>
          <div className="container">
            <div className="stats-grid">
              {STATS.map((s) => (
                <div key={s.label} className="stat-card reveal">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TRUSTED BY ===== */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Trusted by ambitious teams</span>
              <h2>Partners scaling with SynXCloud</h2>
              <p>We help growth-stage companies and enterprise teams deliver secure cloud, AI, and product outcomes with confidence.</p>
            </div>
          </div>
          <div className="reveal">
            <Marquee
              items={TRUSTED_BY}
              speed="40s"
              renderItem={(name) => (
                <div className="trust-pill">
                  <span className="trust-pill-dot">•</span>
                  <span>{name}</span>
                </div>
              )}
            />
          </div>
        </section>

        {/* ===== SOLUTIONS (Services) ===== */}
        <section className="service-showcase reveal" id="solutions">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">What We Deliver</span>
              <h2>Comprehensive digital solutions for your business</h2>
              <p>From stunning landing pages to complex custom software and AI integrations, we deliver quality at every step.</p>
            </div>

            <ServiceShowcase services={SERVICES} />
          </div>
        </section>

        {/* ===== APPROACH (Trinity) ===== */}
        <section className="trinity" id="approach">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Why SynXCloud</span>
              <h2>Dedicated freelance experts committed to your success</h2>
              <p>We combine modern design, robust engineering, and AI automation to deliver measurable business results.</p>
            </div>
            <div className="trinity-grid">
              {TRINITY.map((item, i) => (
                <div key={item.title} className={`trinity-card reveal reveal-delay-${i + 1}`}>
                  <div className="trinity-card-image">
                    <img src={item.image} alt={item.title} loading="lazy" />
                    <div className="trinity-icon-overlay">
                      <Icon name={item.icon} size={24} />
                    </div>
                  </div>
                  <div className="trinity-card-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <span className="trinity-tag">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PROCESS SECTION ===== */}
        <section className="section">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Our Methodology</span>
              <h2>How We Engineer Excellence</h2>
              <p>A proven, four-phase delivery framework designed to minimize risk and maximize architectural integrity.</p>
            </div>
            <div className="process-grid">
              {PROCESS.map((p, i) => (
                <div key={p.step} className={`process-card reveal reveal-delay-${i + 1}`}>
                  <div className="process-step">{p.step}</div>
                  <div className="process-content">
                    <h3>{p.title}</h3>
                    <p>{p.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== PREMIUM EXPERIENCE ===== */}
        <section className="section section-alt">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Premium experience</span>
              <h2>High-touch delivery for ambitious teams</h2>
              <p>From kickoff to operations, we make every engagement feel strategic, transparent, and highly collaborative.</p>
            </div>
            <div className="premium-grid reveal">
              {PREMIUM_FEATURES.map((feature, index) => (
                <div key={feature.title} className={`premium-card reveal reveal-delay-${index + 1}`}>
                  <div className="premium-image">
                    <img src={feature.image} alt={feature.title} loading="lazy" />
                    <div className="premium-icon-badge">
                      <Icon name={feature.icon} size={20} />
                    </div>
                  </div>
                  <div className="premium-card-content">
                    <h3>{feature.title}</h3>
                    <p>{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ===== EXPERTISE (Tech Stack) ===== */}
        <section className="tech-stack section-padding reveal" id="expertise">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Partnerships & Stack</span>
              <h2>Technologies We Master</h2>
              <p>Battle-tested tools and frameworks powering thousands of production systems worldwide.</p>
            </div>
          </div>
          <Marquee
            items={TECH_STACK.slice(0, 6)}
            speed="30s"
            renderItem={(t) => (
              <div className="tech-pill">
                <img src={t.logo} alt={t.name} className="tech-pill-logo" loading="lazy" />
                <span>{t.name}</span>
              </div>
            )}
          />
          <Marquee
            items={TECH_STACK.slice(6)}
            speed="35s"
            reverse={true}
            renderItem={(t) => (
              <div className="tech-pill">
                <img src={t.logo} alt={t.name} className="tech-pill-logo" loading="lazy" />
                <span>{t.name}</span>
              </div>
            )}
          />
        </section>

        {/* ===== CLIENT REVIEWS ===== */}
        <section className="section" id="reviews">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Client Success</span>
              <h2>What Our Clients Say</h2>
              <p>Real results from real partnerships. Here are a few projects where we delivered measurable business impact.</p>
            </div>
          </div>
          <ReviewCarousel reviews={REVIEWS} />
        </section>

        {/* ===== CASE STUDIES ===== */}
        <section className="section section-alt" id="case-studies">
          <div className="container">
            <div className="section-header reveal">
              <span className="eyebrow">Proven outcomes</span>
              <h2>Featured results from premium engagements</h2>
              <p>These examples reflect our focus on secure deployment, strong ROI, and enterprise-grade reliability.</p>
            </div>
            <div className="case-grid reveal">
              {CASE_STUDIES.map((caseItem, index) => (
                <article key={caseItem.title} className={`case-card reveal reveal-delay-${index + 1}`}>
                  <div className="case-image">
                    <img src={caseItem.image} alt={caseItem.title} loading="lazy" />
                    <span className="case-tag-overlay">{caseItem.tag}</span>
                  </div>
                  <div className="case-content">
                    <h3>{caseItem.title}</h3>
                    <p className="case-outcome">{caseItem.outcome}</p>
                    <p>{caseItem.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ===== CONTACT SECTION ===== */}
        <section className="section" id="contact">
          <div className="container">
            <div className="contact-premium-card reveal">
              <div className="contact-grid">
                <div className="contact-info">
                  <span className="eyebrow">Get in touch</span>
                  <h2>Let's build your<br /><span className="gradient-text">digital legacy</span></h2>
                  <p>Ready to scale? Our senior architects are standing by to discuss your next breakthrough project.</p>

                  <div className="contact-meta">
                    <div className="contact-meta-item">
                      <div className="meta-icon"><Icon name="globe" size={18} /></div>
                      <div>
                        <div className="meta-label">Global Presence</div>
                        <div className="meta-value">Serving clients worldwide</div>
                      </div>
                    </div>
                    <div className="contact-meta-item">
                      <div className="meta-icon"><Icon name="grow" size={18} /></div>
                      <div>
                        <div className="meta-label">Response Time</div>
                        <div className="meta-value">Typically under 12 hours</div>
                      </div>
                    </div>
                  </div>

                  <div className="social-row" style={{ marginTop: 'auto', paddingTop: '2rem' }}>
                    <a href="https://www.linkedin.com/company/synxcloud/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Icon name="linkedin" size={18} /></a>
                    <a href="https://www.facebook.com/people/Synxcloud/61589674294047/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><Icon name="facebook" size={18} /></a>
                    <a href="https://synxcloud.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Website"><Icon name="globe" size={18} /></a>
                  </div>
                </div>

                <div className="contact-form-wrap">
                  <form ref={formRef} className="premium-contact-form" onSubmit={sendEmail}>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="user_name">Full Name</label>
                        <input type="text" id="user_name" name="user_name" placeholder="John Doe" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="user_email">Work Email</label>
                        <input type="email" id="user_email" name="user_email" placeholder="john@company.com" required />
                      </div>
                    </div>
                    <div className="form-row">
                      <div className="form-group">
                        <label htmlFor="subject">Subject</label>
                        <input type="text" id="subject" name="subject" placeholder="Project Inquiry" required />
                      </div>
                      <div className="form-group">
                        <label htmlFor="phone">Phone (Optional)</label>
                        <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                      </div>
                    </div>
                    <div className="form-group">
                      <label htmlFor="message">Project Brief</label>
                      <textarea id="message" name="message" placeholder="Tell us about your goals and technical requirements..." rows="4" required />
                    </div>
                    <button type="submit" className="btn btn-gradient btn-block btn-lg">
                      Send Inquiry <Icon name="arrowRight" size={18} />
                    </button>
                    {formStatus && (
                      <div className={`form-feedback ${formStatus.includes('success') ? 'success' : 'error'}`}>
                        {formStatus}
                      </div>
                    )}
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="section">
          <div className="cta-banner reveal">
            <div className="cta-inner">
              <span className="eyebrow" style={{ background: 'rgba(255,255,255,0.12)', borderColor: 'rgba(255,255,255,0.2)', color: '#fff' }}>Accelerate Growth</span>
              <h2>Ready to Transform Your Infrastructure?</h2>
              <p>Join the ranks of high-growth companies building their future on SynXCloud.</p>
              <a href="#contact" className="btn btn-gradient btn-lg">
                Start Your Project <Icon name="arrowRight" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand-col">
              <img src="/officialLogo-removebg-preview.png" alt="SynXCloud" className="footer-logo" loading="lazy" />
              <p className="footer-desc">
                Building scalable cloud infrastructure and intelligent software systems for the next generation of digital products.
              </p>
              <div className="social-row">
                <a href="https://www.linkedin.com/company/synxcloud/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="LinkedIn"><Icon name="linkedin" size={16} /></a>
                <a href="https://www.facebook.com/people/Synxcloud/61589674294047/" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Facebook"><Icon name="facebook" size={16} /></a>
                <a href="https://synxcloud.com" target="_blank" rel="noopener noreferrer" className="social-icon" aria-label="Website"><Icon name="globe" size={16} /></a>
              </div>
            </div>
            <div>
              <h4>Company</h4>
              <div className="footer-links">
                <a href="#home">About Us</a>
                <a href="#solutions">Services</a>
                <a href="#expertise">Tech Stack</a>
                <a href="#reviews">Testimonials</a>
                <a href="#">Careers</a>
              </div>
            </div>
            <div>
              <h4>Services</h4>
              <div className="footer-links">
                <a href="#services">Cloud Migration</a>
                <a href="#services">Product Engineering</a>
                <a href="#services">AI Automation</a>
                <a href="#services">Security Audit</a>
                <a href="#services">Consulting</a>
              </div>
            </div>
            <div>
              <h4>Newsletter</h4>
              <p className="footer-newsletter-text">Get the latest insights on cloud and AI directly to your inbox.</p>
              <form className="footer-newsletter-form" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email address" required aria-label="Email address" />
                <button type="submit" className="btn btn-gradient btn-sm">Join</button>
              </form>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-bottom-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms of Service</a>
              <a href="#">Cookie Policy</a>
            </div>
            <div className="footer-copy">
              &copy; {new Date().getFullYear()} SynXCloud. All rights reserved. &nbsp;|&nbsp; Built with precision.
            </div>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING ACTION BUTTON ===== */}
      <a href="#contact" className={`fab ${scrolled ? 'visible' : ''}`} aria-label="Contact Us">
        <Icon name="arrowRight" size={24} style={{ transform: 'rotate(-45deg)' }} />
        <span className="fab-tooltip">Start Your Project</span>
      </a>
    </div>
  )
}

export default App
