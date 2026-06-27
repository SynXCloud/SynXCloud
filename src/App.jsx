import { useState, useEffect, useRef } from 'react'
import emailjs from '@emailjs/browser'
import './App.css'

/* ===== SVG ICONS LIBRARY ===== */
function Icon({ name, className = '', size = 20, style = {} }) {
  const icons = {
    calendar: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
        <line x1="16" y1="2" x2="16" y2="6" />
        <line x1="8" y1="2" x2="8" y2="6" />
        <line x1="3" y1="10" x2="21" y2="10" />
      </svg>
    ),
    phone: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
      </svg>
    ),
    shield: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
    clock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
    headset: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M3 18v-6a9 9 0 0 1 18 0v6" />
        <path d="M21 19a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3zM3 19a2 2 0 0 0 2 2h1a2 2 0 0 0 2-2v-3a2 2 0 0 0-2-2H3z" />
      </svg>
    ),
    checkSquare: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <polyline points="9 11 12 14 22 4" />
        <path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11" />
      </svg>
    ),
    users: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    trendingUp: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
        <polyline points="17 6 23 6 23 12" />
      </svg>
    ),
    gitBranch: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <line x1="6" y1="3" x2="6" y2="15" />
        <circle cx="18" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <path d="M18 9a9 9 0 0 1-9 9" />
      </svg>
    ),
    fileText: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
    lock: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
      </svg>
    ),
    messageSquare: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    ),
    arrowRight: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <line x1="5" y1="12" x2="19" y2="12" />
        <polyline points="12 5 19 12 12 19" />
      </svg>
    ),
    arrowLeft: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <line x1="19" y1="12" x2="5" y2="12" />
        <polyline points="12 19 5 12 12 5" />
      </svg>
    ),
    rocket: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M4.5 16.5c-1.5 1.25-2.5 3.5-2.5 3.5s2.25-1 3.5-2.5" />
        <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm1 10c0 .55-.45 1-1 1s-1-.45-1-1 .45-1 1-1 1 .45 1 1z" />
        <path d="M19 5l-4 4" />
      </svg>
    ),
    folder: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    ),
    target: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <circle cx="12" cy="12" r="10" />
        <circle cx="12" cy="12" r="6" />
        <circle cx="12" cy="12" r="2" />
      </svg>
    ),
    award: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <circle cx="12" cy="8" r="7" />
        <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88" />
      </svg>
    ),
    linkedin: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
    facebook: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
    twitter: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M23 3a10.9 10.9 0 0 1-3.14 1.53 4.48 4.48 0 0 0-7.86 3v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z" />
      </svg>
    ),
    github: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
      </svg>
    ),
    instagram: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
    ),
    chevronDown: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <polyline points="6 9 12 15 18 9" />
      </svg>
    ),
    close: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={style}>
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    )
  }
  return icons[name] || null
}

/* ===== APP COMPONENT ===== */
function App() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('discovery') // 'discovery', 'strategy', 'project'
  const [formStatus, setFormStatus] = useState('')
  const [projectIndex, setProjectIndex] = useState(0)
  const [serviceIndex, setServiceIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(3)
  const formRef = useRef(null)

  // Navigation Items
  const NAV_ITEMS = [
    { id: 'home', label: 'Home' },
    { id: 'services', label: 'Services' },
    { id: 'portfolio', label: 'Portfolio' },
    { id: 'technologies', label: 'Technologies' },
    { id: 'about', label: 'About' },
    { id: 'contact', label: 'Contact' },
  ]

  // Stats Data
  const STATS = [
    { value: '50+', label: 'Projects Delivered', icon: 'folder' },
    { value: '99%', label: 'Client Satisfaction', icon: 'target' },
    { value: '24/7', label: 'Support & Maintenance', icon: 'shield' },
    { value: '10+', label: 'Years Combined Experience', icon: 'award' },
  ]

  // Services Data
  const SERVICES = [
    {
      id: 'dev',
      tag: 'Development',
      title: 'Web, Mobile & Custom Software',
      desc: 'High-performance custom websites, tailored software solutions, and mobile apps built using React, Next.js, and React Native.',
      features: ['Custom Web & Mobile Apps', 'Bespoke Software & SaaS', 'Responsive & Modern UI'],
    },
    {
      id: 'ai',
      tag: 'AI Automation',
      title: 'AI Automation & Chatbots',
      desc: 'Leverage AI to automate workflows, qualify leads and enhance customer experience globally.',
      features: ['Intelligent Chatbots', 'Workflow Automation', 'AI Integrations'],
    },
    {
      id: 'cloud-devops',
      tag: 'Cloud Architecture',
      title: 'AWS/GCP Cloud & DevOps',
      desc: 'High availability, auto-scaling, and secure serverless setups built for cross-continental low latency applications.',
      features: ['Infrastructure as Code (Terraform)', 'CI/CD Deployment Pipelines', 'Auto-scaling & Disaster Recovery'],
    },
    {
      id: 'uiux-design',
      tag: 'Product Design',
      title: 'UI/UX & Product Strategy',
      desc: 'Stunning user interfaces and seamless user journeys crafted to elevate your brand globally.',
      features: ['Figma Wireframes & Prototypes', 'Design Systems for Brands', 'User Research & Strategy'],
    },
    {
      id: 'support',
      tag: 'Support',
      title: 'Software Maintenance & Management',
      desc: 'We don\'t just build; we maintain. Ensuring your software systems are always secure, updated & optimized for global clients.',
      features: ['Ongoing Maintenance & Support', 'Performance Optimization', 'Security Audits & Updates'],
    },
  ]

  // Why Choose Benefits
  const BENEFITS = [
    { title: 'Transparent Pricing', desc: 'No hidden fees, honest and clear estimates.', icon: 'checkSquare' },
    { title: 'Dedicated Team', desc: 'Experienced developers dedicated to your project.', icon: 'users' },
    { title: 'Daily Updates', desc: 'Stay informed with daily progress updates.', icon: 'trendingUp' },
    { title: 'Agile Process', desc: 'Iterative delivery for faster results and feedback.', icon: 'gitBranch' },
    { title: 'Source Code Ownership', desc: 'Full ownership of code and assets.', icon: 'fileText' },
    { title: 'NDA Protection', desc: 'Your ideas and data are always confidential.', icon: 'lock' },
    { title: 'Post Launch Support', desc: 'Ongoing support even after project delivery.', icon: 'messageSquare' },
    { title: 'Enterprise Security', desc: 'Security-first approach with best practices.', icon: 'shield' },
  ]

  // Technologies
  const TECH_STACK = [
    { name: 'React', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' },
    { name: 'Next.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg' },
    { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
    { name: 'TypeScript', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg' },
    { name: 'Python', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg' },
    { name: 'AWS', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg' },
    { name: 'Docker', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg' },
    { name: 'Kubernetes', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg' },
    { name: 'PostgreSQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg' },
    { name: 'Redis', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg' },
  ]
  const halfTech = Math.ceil(TECH_STACK.length / 2)
  const techRow1 = TECH_STACK.slice(0, halfTech)
  const techRow2 = TECH_STACK.slice(halfTech)

  // Partners Data
  const PARTNERS = [
    {
      name: 'Fortis',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: 'NovaFin',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <polygon points="12 2 2 22 22 22" />
        </svg>
      )
    },
    {
      name: 'Astra Retail',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      name: 'BlueWave',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      name: 'Verto Systems',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    },
    {
      name: 'QuantumApps',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ]

  // Featured Projects
  const PROJECTS = [
    {
      title: 'E-Commerce Platform',
      tag: 'E-Commerce',
      desc: 'Custom e-commerce platform with advanced features and payment integrations.',
      stack: ['Next.js', 'AWS'],
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
      stats: [
        { val: '150%', lbl: 'Increase in Sales' },
        { val: '2.5x', lbl: 'ROI Growth' }
      ]
    },
    {
      title: 'AI Customer Support Bot',
      tag: 'AI Automation',
      desc: 'Intelligent chatbot that handles customer queries and reduces support workload.',
      stack: ['Python', 'OpenAI', 'AWS'],
      image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop',
      stats: [
        { val: '60%', lbl: 'Support Tickets Reduced' },
        { val: '24/7', lbl: 'Instant Response' }
      ]
    },
    {
      title: 'Learning Management System',
      tag: 'Edtech',
      desc: 'Scalable LMS platform with video courses, quizzes, and progress tracking.',
      stack: ['React', 'PostgreSQL', 'AWS'],
      image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
      stats: [
        { val: '5K+', lbl: 'Active Students' },
        { val: '98%', lbl: 'Satisfaction Rate' }
      ]
    },
    {
      title: 'FinTech Payment Gateway',
      tag: 'Fintech',
      desc: 'Secure payment engine integrated with localized multi-currency conversion and fraud detection.',
      stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
      stats: [
        { val: '99.99%', lbl: 'Uptime SLA' },
        { val: '$2.4M', lbl: 'Processed Monthly' }
      ]
    },
    {
      title: 'Real-time IoT Telemetry Panel',
      tag: 'IoT & Cloud',
      desc: 'High-frequency telemetry data streaming dashboard with sub-50ms rendering latency.',
      stack: ['React', 'Node.js', 'AWS ECS', 'Redis'],
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
      stats: [
        { val: '<50ms', lbl: 'Stream Latency' },
        { val: '10M+', lbl: 'Daily Events' }
      ]
    },
    {
      title: 'Supply Chain Automation ERP',
      tag: 'Enterprise Software',
      desc: 'Automated warehouse management system syncing inventory tracking with demand forecasting.',
      stack: ['React', 'Python', 'Docker', 'PostgreSQL'],
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
      stats: [
        { val: '40%', lbl: 'Lead Time Cut' },
        { val: '0.01%', lbl: 'Inventory Error Rate' }
      ]
    }
  ]

  // Testimonials
  const TESTIMONIALS = [
    {
      quote: "SynXCloud delivered a clean, modern website with fast turnaround and strong communication. Highly recommended!",
      name: "Amit Verma",
      role: "Start-up Founder",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "Their team understood our requirements perfectly and delivered a high-performing solution beyond our expectations.",
      name: "Neha Kapoor",
      role: "Retail Business Owner",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "Professional, reliable and skilled team. They helped us launch our platform successfully and on time.",
      name: "Rohit Malhotra",
      role: "Consultant",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop"
    }
  ]

  // Open modal handler
  const openModal = (type = 'discovery') => {
    setModalType(type)
    setIsModalOpen(true)
    document.body.style.overflow = 'hidden'
  }

  // Close modal handler
  const closeModal = () => {
    setIsModalOpen(false)
    setFormStatus('')
    document.body.style.overflow = ''
  }

  // EmailJS submission
  const handleFormSubmit = (e) => {
    e.preventDefault()
    setFormStatus('Sending...')

    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS config missing', { serviceId, templateId, publicKey })
      setFormStatus('Configuration incomplete. Please check back later.')
      return
    }

    emailjs.sendForm(serviceId, templateId, formRef.current, publicKey)
      .then(() => {
        setFormStatus('success')
        setTimeout(() => {
          closeModal()
        }, 2000)
      })
      .catch((error) => {
        console.error('EmailJS error', error)
        setFormStatus('error')
      })
  }

  // Sticky header scroll listener
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Auto transition testimonials
  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [TESTIMONIALS.length])

  // Track window size for visible project & service carousel cards
  useEffect(() => {
    const handleResize = () => {
      let currentVisible = 3
      if (window.innerWidth <= 768) {
        currentVisible = 1
      } else if (window.innerWidth <= 1120) {
        currentVisible = 2
      }
      setVisibleItems(currentVisible)
      setProjectIndex((prev) => Math.min(prev, PROJECTS.length - currentVisible))
      setServiceIndex((prev) => Math.min(prev, SERVICES.length - currentVisible))
    }
    handleResize()
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [PROJECTS.length, SERVICES.length])

  const nextProject = () => {
    setProjectIndex((prev) => (prev + 1) % (PROJECTS.length - visibleItems + 1))
  }

  const prevProject = () => {
    setProjectIndex((prev) => (prev - 1 + (PROJECTS.length - visibleItems + 1)) % (PROJECTS.length - visibleItems + 1))
  }

  const nextService = () => {
    setServiceIndex((prev) => (prev + 1) % (SERVICES.length - visibleItems + 1))
  }

  const prevService = () => {
    setServiceIndex((prev) => (prev - 1 + (SERVICES.length - visibleItems + 1)) % (SERVICES.length - visibleItems + 1))
  }

  // Scrollspy & reveal observer
  useEffect(() => {
    const sections = ['home', 'services', 'portfolio', 'technologies', 'about', 'contact']
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
            if (sections.includes(entry.target.id)) {
              setActiveSection(entry.target.id)
            }
          }
        })
      },
      { threshold: 0.15, rootMargin: '0px' }
    )

    sections.forEach(id => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])

  return (
    <div className="site-shell">

      {/* ===== HEADER ===== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrap">
          <a href="#home" className="brand" onClick={() => setMobileOpen(false)}>
            <img src="/officialLogo-removebg-preview.png" alt="SynXCloud Logo" className="brand-logo" />
            <div className="brand-text">
              <span className="brand-name">
                <span className="brand-syn">SYN</span>
                <span className="brand-x">X</span>
                <span className="brand-cloud">CLOUD</span>
              </span>
              <span className="brand-tagline">Build. Innovate. Grow.</span>
            </div>
          </a>

          <div className="nav-right-cluster">
            <nav className="nav" aria-label="Primary navigation">
              {NAV_ITEMS.map((item) => (
                <div key={item.id} className="nav-item-wrapper">
                  <a
                    href={`#${item.id}`}
                    className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.label}
                    {item.hasDropdown && <Icon name="chevronDown" size={12} className="dropdown-chevron" />}
                  </a>
                </div>
              ))}
            </nav>

            <button onClick={() => openModal('discovery')} className="btn btn-primary btn-sm btn-discovery">
              <Icon name="calendar" size={15} />
              Book Discovery Call
            </button>

            <button
              className={`mobile-toggle ${mobileOpen ? 'open' : ''}`}
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle navigation"
            >
              <span /><span /><span />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Nav Overlay */}
      <div className={`mobile-nav ${mobileOpen ? 'open' : ''}`}>
        {NAV_ITEMS.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className={`nav-link ${activeSection === item.id ? 'active' : ''}`}
            onClick={() => setMobileOpen(false)}
          >
            {item.label}
          </a>
        ))}
        <button
          onClick={() => {
            setMobileOpen(false)
            openModal('discovery')
          }}
          className="btn btn-primary btn-block"
          style={{ marginTop: '1rem' }}
        >
          <Icon name="calendar" size={16} />
          Book Discovery Call
        </button>
      </div>

      <main id="main-content">

        {/* ===== HERO SECTION ===== */}
        <section className="hero" id="home">
          <div className="hero-radial-glows" />
          <div className="container hero-grid">
            <div className="hero-content reveal">
              <div className="hero-badge-eyebrow">
                <span className="badge-text">Your Trusted Technology Partner</span>
              </div>
              <h1>
                Build Scalable Software For <span className="highlight-blue">Global</span> Businesses.
              </h1>
              <p className="hero-desc">
                We help ambitious companies build, launch and scale powerful digital products with modern technology, AI automation and cloud solutions.
              </p>

              <div className="hero-buttons">
                <button onClick={() => openModal('project')} className="btn btn-primary btn-lg">
                  Start Your Project
                  <Icon name="arrowRight" size={16} />
                </button>
                <button onClick={() => openModal('strategy')} className="btn btn-outline btn-lg">
                  Book a Strategy Call
                  <Icon name="phone" size={16} />
                </button>
              </div>

              {/* Trust & Features Panel */}
              <div className="hero-trust-panel">
                {/* Social Proof */}
                <div className="hero-social-proof">
                  <div className="avatar-stack">
                    <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=100&auto=format&fit=crop" alt="User 1" />
                    <img src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?q=80&w=100&auto=format&fit=crop" alt="User 2" />
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=100&auto=format&fit=crop" alt="User 3" />
                  </div>
                  <div className="proof-details">
                    <div className="stars">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star-gold">★</span>
                      ))}
                    </div>
                    <p className="proof-text">Trusted by 50+ businesses worldwide</p>
                  </div>
                </div>

                {/* Features USP bar */}
                <div className="hero-usp-row">
                  <div className="usp-item">
                    <div className="usp-icon-wrap"><Icon name="shield" size={16} /></div>
                    <span>Secure & Reliable</span>
                  </div>
                  <div className="usp-item">
                    <div className="usp-icon-wrap"><Icon name="clock" size={16} /></div>
                    <span>On-time Delivery</span>
                  </div>
                  <div className="usp-item">
                    <div className="usp-icon-wrap"><Icon name="headset" size={16} /></div>
                    <span>24/7 Expert Support</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Right side: Mockups */}
            <div className="hero-visual reveal">
              <div className="hero-mockup-container">
                {/* 3D Devices Mockup Image */}
                <img src="/hero_dashboard_mockup.png" alt="SynXCloud Devices Mockup" className="hero-devices-img" />

                {/* HTML Screen Overlays */}
                <div className="html-screen-laptop">
                  <video
                    src="/vid.mp4"
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="lap-screen-video"
                  />
                </div>

                <div className="html-screen-mobile">
                  <div className="mobile-logo-only-wrapper">
                    <img src="/officialLogo-removebg-preview.png" alt="SynXCloud company logo" className="mob-company-logo" />
                  </div>
                </div>




              </div>
            </div>
          </div>
        </section>

        {/* ===== PARTNERS SECTION ===== */}
        <section className="partners-section">
          <div className="container partners-grid">
            <div className="partners-title">
              Trusted by<br />growing companies
            </div>
            <div className="partners-logos-wrapper">
              <div className="partners-logos-slide">
                {PARTNERS.map((p, i) => (
                  <div key={i} className="partner-logo">
                    {p.icon}
                    <span>{p.name}</span>
                  </div>
                ))}
              </div>
              <div className="partners-logos-slide" aria-hidden="true">
                {PARTNERS.map((p, i) => (
                  <div key={`dup-${i}`} className="partner-logo">
                    {p.icon}
                    <span>{p.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== STATISTICS GRID ===== */}
        <section className="stats-section">
          <div className="container stats-grid">
            {STATS.map((s, idx) => (
              <div key={idx} className="stat-card reveal">
                <div className="stat-icon-box">
                  <Icon name={s.icon} size={22} className="stat-icon" />
                </div>
                <div className="stat-numbers">
                  <div className="stat-value">{s.value}</div>
                  <div className="stat-label">{s.label}</div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ===== SERVICES SECTION ("WHAT WE DELIVER") ===== */}
        <section className="services-section" id="services">
          <div className="container">
            <div className="services-header reveal">
              <div className="services-title-area">
                <span className="eyebrow">WHAT WE DELIVER</span>
                <h2>End-to-end Software Solutions That Drive Real Results</h2>
                <p className="services-subtitle">From idea to launch and beyond, we build scalable, secure and high-performing digital products.</p>
              </div>
              <div className="services-controls-wrap">
                <div className="service-controls">
                  <button
                    onClick={prevService}
                    className="control-btn"
                    aria-label="Previous service"
                  >
                    <Icon name="arrowLeft" size={18} />
                  </button>
                  <button
                    onClick={nextService}
                    className="control-btn"
                    aria-label="Next service"
                  >
                    <Icon name="arrowRight" size={18} />
                  </button>
                </div>
                <a href="#portfolio" className="services-link">
                  View all services
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </div>

            <div className="services-carousel-container">
              <div
                className="services-track"
                style={{
                  transform: `translateX(calc(-${serviceIndex} * (100% + var(--grid-gap)) / var(--visible-items)))`
                }}
              >
                {SERVICES.map((s) => (
                  <div key={s.id} className="service-card reveal">
                    {/* Custom CSS/HTML Illustration mockup at top */}
                    <div className={`service-mockup-graphic ${s.id}`}>
                      {s.id === 'dev' && (
                        <div className="dev-graphic">
                          <div className="g-laptop"><div className="g-screen"><span className="g-line" /><span className="g-line" /><span className="g-line" /></div></div>
                          <div className="g-phone"><div className="g-screen"><span className="g-dot" /></div></div>
                        </div>
                      )}

                      {s.id === 'support' && (
                        <div className="support-graphic">
                          <div className="g-shield">🛡️</div>
                          <div className="g-gear gear-1">⚙️</div>
                          <div className="g-gear gear-2">⚙️</div>
                        </div>
                      )}
                      {s.id === 'ai' && (
                        <div className="ai-graphic">
                          <div className="g-robot">🤖</div>
                          <div className="g-bubble bubble-l">Hi!</div>
                          <div className="g-bubble bubble-r">✦</div>
                        </div>
                      )}

                      {s.id === 'cloud-devops' && (
                        <div className="cloud-devops-graphic">
                          <div className="g-cloud">☁️</div>
                          <div className="g-db">🗄️</div>
                          <div className="g-nodes">⚡</div>
                        </div>
                      )}
                      {s.id === 'uiux-design' && (
                        <div className="uiux-design-graphic">
                          <div className="g-palette">🎨</div>
                          <div className="g-brush">🖌️</div>
                          <div className="g-spark">✦</div>
                        </div>
                      )}
                    </div>

                    <div className="service-card-body">
                      <span className="service-badge">{s.tag}</span>
                      <h3>{s.title}</h3>
                      <p className="service-desc">{s.desc}</p>

                      <ul className="service-bullets">
                        {s.features.map((f, i) => (
                          <li key={i}>
                            <span className="bullet-dash">-</span>
                            {f}
                          </li>
                        ))}
                      </ul>

                      <button onClick={() => openModal('project')} className="btn-explore-solution">
                        Explore Solution
                        <Icon name="arrowRight" size={14} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="service-dot-indicators">
              {Array.from({ length: SERVICES.length - visibleItems + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setServiceIndex(idx)}
                  className={`indicator-dot ${serviceIndex === idx ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== WHY CHOOSE SECTION ===== */}
        <section className="why-choose-section" id="about">
          <div className="container why-choose-grid">
            <div className="why-choose-info reveal">
              <span className="eyebrow">WHY CHOOSE SYNXCLOUD</span>
              <h2>Committed to Your Success at Every Step</h2>
            </div>

            <div className="why-choose-benefits-grid">
              {BENEFITS.map((b, idx) => (
                <div key={idx} className="benefit-card reveal">
                  <div className="benefit-icon-wrap">
                    <Icon name={b.icon} size={20} />
                  </div>
                  <div className="benefit-texts">
                    <h3>{b.title}</h3>
                    <p>{b.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ===== TECHNOLOGIES WE MASTER ===== */}
        <section className="tech-section" id="technologies">
          <div className="container tech-grid">
            <div className="tech-info reveal">
              <span className="eyebrow">TECHNOLOGIES WE MASTER</span>
              <h2>Modern Tech Stack for Modern Solutions</h2>
            </div>

            <div className="tech-logos-wrapper reveal">
              {/* Desktop view */}
              <div className="tech-scroll-container desktop-only">
                {TECH_STACK.map((t, idx) => (
                  <div key={idx} className="tech-item-card">
                    <img src={t.logo} alt={t.name} className="tech-logo-img" />
                    <span>{t.name}</span>
                  </div>
                ))}
              </div>

              {/* Mobile view: two rows of sliding marquees */}
              <div className="tech-mobile-marquee mobile-only">
                {/* Row 1: slide left to right */}
                <div className="marquee-row marquee-left-to-right">
                  <div className="marquee-track">
                    <div className="marquee-group">
                      {techRow1.map((t, idx) => (
                        <div key={`r1-g1-${idx}`} className="tech-item-card">
                          <img src={t.logo} alt={t.name} className="tech-logo-img" />
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="marquee-group" aria-hidden="true">
                      {techRow1.map((t, idx) => (
                        <div key={`r1-g2-${idx}`} className="tech-item-card">
                          <img src={t.logo} alt={t.name} className="tech-logo-img" />
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Row 2: slide right to left */}
                <div className="marquee-row marquee-right-to-left">
                  <div className="marquee-track">
                    <div className="marquee-group">
                      {techRow2.map((t, idx) => (
                        <div key={`r2-g1-${idx}`} className="tech-item-card">
                          <img src={t.logo} alt={t.name} className="tech-logo-img" />
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                    <div className="marquee-group" aria-hidden="true">
                      {techRow2.map((t, idx) => (
                        <div key={`r2-g2-${idx}`} className="tech-item-card">
                          <img src={t.logo} alt={t.name} className="tech-logo-img" />
                          <span>{t.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <a href="#contact" className="tech-view-all-link">
                View all technologies
                <Icon name="arrowRight" size={16} />
              </a>
            </div>
          </div>
        </section>

        {/* ===== FEATURED PROJECTS ===== */}
        <section className="projects-section" id="portfolio">
          <div className="container">
            <div className="projects-header reveal">
              <div className="projects-title-area">
                <span className="eyebrow">FEATURED PROJECTS</span>
                <h2>Delivering Impact Through Innovation</h2>
              </div>
              <div className="projects-controls-wrap">
                <div className="project-controls">
                  <button
                    onClick={prevProject}
                    className="control-btn"
                    aria-label="Previous project"
                  >
                    <Icon name="arrowLeft" size={18} />
                  </button>
                  <button
                    onClick={nextProject}
                    className="control-btn"
                    aria-label="Next project"
                  >
                    <Icon name="arrowRight" size={18} />
                  </button>
                </div>
                <a href="#contact" className="projects-view-all">
                  View all case studies
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </div>

            <div className="projects-carousel-container">
              <div
                className="projects-track"
                style={{
                  transform: `translateX(calc(-${projectIndex} * (100% + var(--grid-gap)) / var(--visible-items)))`
                }}
              >
                {PROJECTS.map((p, idx) => (
                  <div key={idx} className="project-card reveal">
                    <div className="project-image-wrapper">
                      <img src={p.image} alt={p.title} className="project-img" />
                      <span className="project-tag-badge">{p.tag}</span>
                    </div>

                    <div className="project-body-grid">
                      <div className="project-left-col">
                        <h3>{p.title}</h3>
                        <p className="project-desc">{p.desc}</p>

                        <div className="project-stack-tags">
                          {p.stack.map((s, i) => (
                            <span key={i} className="stack-tag">{s}</span>
                          ))}
                        </div>
                      </div>

                      <div className="project-divider-line" />

                      <div className="project-right-col">
                        {p.stats.map((s, i) => (
                          <div key={i} className="project-stat-block">
                            <span className="proj-stat-val">{s.val}</span>
                            <span className="proj-stat-lbl">{s.lbl}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="project-dot-indicators">
              {Array.from({ length: PROJECTS.length - visibleItems + 1 }).map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setProjectIndex(idx)}
                  className={`indicator-dot ${projectIndex === idx ? 'active' : ''}`}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* ===== TESTIMONIALS SECTION ===== */}
        <section className="testimonials-section" id="process">
          <div className="container testimonials-grid">
            <div className="testimonials-left-col reveal">
              <span className="eyebrow">CLIENT SUCCESS STORIES</span>
              <h2>Loved by Founders and Teams</h2>

              <div className="testimonial-controls">
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}
                  className="control-btn"
                  aria-label="Previous testimonial"
                >
                  <Icon name="arrowLeft" size={18} />
                </button>
                <button
                  onClick={() => setTestimonialIndex((prev) => (prev + 1) % TESTIMONIALS.length)}
                  className="control-btn"
                  aria-label="Next testimonial"
                >
                  <Icon name="arrowRight" size={18} />
                </button>
              </div>
            </div>

            <div className="testimonials-right-col reveal">
              <div className="testimonial-slider-viewport">
                {TESTIMONIALS.map((t, idx) => (
                  <div
                    key={idx}
                    className={`testimonial-slide-card ${testimonialIndex === idx ? 'active' : 'inactive'}`}
                  >
                    <div className="stars-row">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className="star-gold">★</span>
                      ))}
                    </div>

                    <p className="testimonial-quote">"{t.quote}"</p>

                    <div className="testimonial-author">
                      <img src={t.avatar} alt={t.name} className="author-avatar" />
                      <div className="author-details">
                        <div className="author-name">{t.name}</div>
                        <div className="author-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="testimonial-dot-indicators">
                {TESTIMONIALS.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setTestimonialIndex(idx)}
                    className={`indicator-dot ${testimonialIndex === idx ? 'active' : ''}`}
                    aria-label={`Go to slide ${idx + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* ===== CTA BANNER ===== */}
        <section className="cta-section" id="contact">
          <div className="container">
            <div className="cta-banner reveal">
              <div className="cta-stars-bg" />
              <div className="cta-content-grid">
                <div className="cta-left">
                  <div className="cta-rocket-box">
                    <Icon name="rocket" size={40} className="cta-rocket-icon" />
                  </div>
                  <div className="cta-texts">
                    <h2>Ready to Build Your Next Big Thing?</h2>
                    <p>Let's turn your idea into a powerful digital product.</p>
                  </div>
                </div>

                <div className="cta-buttons">
                  <button onClick={() => openModal('discovery')} className="btn btn-primary-white">
                    Book Discovery Call
                  </button>
                  <button onClick={() => openModal('project')} className="btn btn-outline-white">
                    Start Your Project
                    <Icon name="arrowRight" size={16} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* ===== FOOTER ===== */}
      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand-col">
            <div className="brand">
              <img src="/officialLogo-removebg-preview.png" alt="SynXCloud Logo" className="footer-logo" />
              <div className="brand-text">
                <span className="brand-name footer-brand-name">
                  <span className="brand-syn">SYN</span>
                  <span className="brand-x">X</span>
                  <span className="brand-cloud">CLOUD</span>
                </span>
                <span className="brand-tagline text-muted">Build. Innovate. Grow.</span>
              </div>
            </div>
            <p className="footer-desc">
              We build scalable cloud infrastructure and intelligent software systems for the next generation of digital products.
            </p>
            <div className="footer-socials">
              <a href="https://www.linkedin.com/company/synxcloud/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="social-link"><Icon name="linkedin" size={16} /></a>
              <a href="https://www.facebook.com/people/Synxcloud/61589674294047/" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="social-link"><Icon name="facebook" size={16} /></a>
              <a href="https://www.instagram.com/synxcloud/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="social-link"><Icon name="instagram" size={16} /></a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Company</h4>
            <div className="links-group">
              <a href="#about">About Us</a>
              <a href="#about">Careers</a>
              <a href="#about">Our Team</a>
              <a href="#portfolio">Blog</a>
              <a href="#contact">Contact</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Services</h4>
            <div className="links-group">
              <a href="#services">Web Development</a>
              <a href="#services">Mobile App Development</a>
              <a href="#services">AI Automation</a>
              <a href="#services">E-Commerce</a>
              <a href="#services">Maintenance & Support</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Solutions</h4>
            <div className="links-group">
              <a href="#services">Cloud Solutions</a>
              <a href="#services">Custom Software</a>
              <a href="#services">LMS Solutions</a>
              <a href="#services">ERP/CRM Solutions</a>
              <a href="#services">Chatbot Solutions</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Resources</h4>
            <div className="links-group">
              <a href="#portfolio">Case Studies</a>
              <a href="#portfolio">Blog</a>
              <a href="#technologies">Tech Stack</a>
              <a href="#process">Process</a>
              <a href="#about">FAQs</a>
            </div>
          </div>

          <div className="footer-links-col contact-col">
            <h4>Contact Us</h4>
            <div className="contact-details">
              <div className="contact-item">
                <span className="contact-icon">📧</span>
                <a href="mailto:info@synxcloud.in">info@synxcloud.in</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📞</span>
                <a href="tel:+918972209802">+91 89722 09802</a>
              </div>
              <div className="contact-item">
                <span className="contact-icon">📍</span>
                <span>Hooghly, West Bengal, 712403</span>
              </div>
            </div>
          </div>
        </div>

        <div className="container footer-bottom">
          <div className="footer-copyright">
            © {new Date().getFullYear()} SynXCloud. All rights reserved.
          </div>
          <div className="footer-legal">
            <a href="#about">Privacy Policy</a>
            <a href="#about">Terms of Service</a>
            <a href="#about">Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING ACTION BUTTON ===== */}
      <button onClick={() => openModal('discovery')} className="floating-fab" aria-label="Book Discovery Call">
        <Icon name="calendar" size={24} />
      </button>

      {/* ===== POPUP CONTACT/BOOKING MODAL ===== */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className="modal-card" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              <Icon name="close" size={18} />
            </button>

            <div className="modal-header">
              {modalType === 'discovery' && <h2>Book a Discovery Call</h2>}
              {modalType === 'strategy' && <h2>Book a Strategy Call</h2>}
              {modalType === 'project' && <h2>Start Your Project</h2>}
              <p>Fill out the form below and our technical leads will reach out to you within 12 hours.</p>
            </div>

            {formStatus === 'success' ? (
              <div className="modal-success-screen">
                <div className="success-icon-check">✓</div>
                <h3>Message Sent Successfully!</h3>
                <p>Thank you for reaching out. We will connect with you shortly.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleFormSubmit} className="modal-form">
                <input type="hidden" name="subject" value={`SynXCloud - ${modalType.toUpperCase()} Request`} />

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
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="+1 (555) 000-0000" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="modal_type_display">Inquiry Type</label>
                    <input type="text" id="modal_type_display" value={modalType.toUpperCase() + ' CALL'} disabled className="input-disabled" />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Project Brief / Goals</label>
                  <textarea id="message" name="message" placeholder="Tell us about your project requirements, timeline, or business goals..." rows="4" required />
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={formStatus === 'Sending...'}>
                  {formStatus === 'Sending...' ? 'Sending Request...' : 'Submit Request'}
                  <Icon name="arrowRight" size={16} />
                </button>

                {formStatus === 'error' && (
                  <div className="form-error-msg">
                    Unable to send the message. Please try again later or contact us directly at info@synxcloud.in.
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      )}

    </div>
  )
}

export default App
