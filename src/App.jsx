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

/* ===== DATA MODELS ===== */
const TEAM_MEMBERS = [
  {
    name: 'Karan Purkait',
    role: 'Founder & CEO',
    bio: 'Software engineer and system designer with a passion for building scalable, high-performance web applications and cloud architecture.',
    image: '/karan_purkait.jpg',
    linkedin: 'https://www.linkedin.com/in/karan-purkait/'
  },
  {
    name: 'Shuvadeep Mondal',
    role: 'Co-Founder & COO',
    bio: 'Operations strategist focused on streamlining delivery workflows, scaling organizational capability, and managing global client relations.',
    image: '/shuvadeep_mondal.jpg',
    linkedin: 'https://www.linkedin.com/in/shuvadeepmondal/'
  },
  {
    name: 'Puskar Roy',
    role: 'Co-Founder & CTO',
    bio: 'Full-stack engineer and cloud developer specialized in scalable systems, Kubernetes orchestration, and robust backend services.',
    image: '/puskar_roy.jpg',
    linkedin: 'https://www.linkedin.com/in/puskar-roy/'
  }
]

const JOBS = [
  {
    id: 'business-dev',
    title: 'Business Development & Sales Executive',
    department: 'Sales & Growth',
    location: 'Work From Home (Remote)',
    type: 'Flexible',
    salary: 'Not Disclosed',
    requirements: [
      'Proven track record in client acquisition, lead generation, or sales for custom software agencies.',
      'Excellent verbal and written communication, active listening, and relationship management skills.',
      'Highly motivated, self-driven individual capable of initiating conversations and scheduling discovery calls with international leads.'
    ]
  },
  {
    id: 'lead-gen',
    title: 'Outbound Outreach & Lead Generation Specialist',
    department: 'Sales & Growth',
    location: 'Work From Home (Remote)',
    type: 'Flexible',
    salary: 'Not Disclosed',
    requirements: [
      'Experience setting up and managing cold email outreach campaigns, LinkedIn automation, and lead databases.',
      'Proficiency in prospect research, scraping/enriching lists, and writing high-converting outreach sequences.',
      'Strong organizational skills to qualify replies and hand off warm leads to the sales team.'
    ]
  },
  {
    id: 'account-manager',
    title: 'Client Success & Account Manager',
    department: 'Client Operations',
    location: 'Work From Home (Remote)',
    type: 'Flexible',
    salary: 'Not Disclosed',
    requirements: [
      'Experience managing relationships and project milestones between engineering teams and enterprise clients.',
      'Strong communication skills to translate business needs into technical scope, address feedback, and ensure smooth delivery.',
      'Ability to identify expansion opportunities within existing client accounts and drive retention.'
    ]
  }
]

const BLOG_POSTS = [
  {
    id: 1,
    title: 'The Future of Web Development with AI Automation in 2026',
    category: 'Technology',
    author: 'Karan Purkait',
    date: 'July 10, 2026',
    readTime: '5 min read',
    excerpt: 'Explore how generative AI and modern frameworks are reshaping custom software development, enabling high agency and faster delivery times.',
    image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?q=80&w=800&auto=format&fit=crop',
    content: (
      <>
        <p>AI automation is no longer just a futuristic concept; it is actively reshaping how modern web applications are designed, developed, and deployed. In 2026, developers leverage AI subagents to perform styling, asset generations, and repetitive coding tasks, shifting the focus to high-agency engineering and creative problem-solving.</p>
        <h2>Why AI Collaboration is Key</h2>
        <p>Instead of replacing software engineers, AI tools act as powerful pair programmers. By automating routing, boilerplate configurations, and basic testing, they allow developers to spend more time refining user experiences and scaling system architectures.</p>
        <h2>The Shift to Custom SaaS Solutions</h2>
        <p>With accelerated development cycles, businesses can now build completely bespoke SaaS products at a fraction of the traditional cost and time, making generic off-the-shelf software obsolete.</p>
      </>
    )
  },
  {
    id: 2,
    title: 'AWS vs. GCP: Choosing the Right Cloud Provider for Scaling SaaS',
    category: 'Cloud & DevOps',
    author: 'David Kim',
    date: 'July 05, 2026',
    readTime: '7 min read',
    excerpt: 'A comprehensive comparative guide on cloud infrastructure, scalability, disaster recovery, and cost-efficiency for international applications.',
    image: 'https://images.unsplash.com/photo-1600132806370-bf17e65e942f?q=80&w=800&auto=format&fit=crop',
    content: (
      <>
        <p>Deciding where to host your scaling software is one of the most critical decisions for any tech organization. Both Amazon Web Services (AWS) and Google Cloud Platform (GCP) offer outstanding features, but their strengths differ in compute, storage, and developer workflows.</p>
        <h2>AWS: The Industry Standard for Enterprise</h2>
        <p>AWS provides the most comprehensive suite of services. Its mature Infrastructure-as-Code (Terraform) integration and extensive security tools make it the go-to choice for enterprise-level custom software that requires complex compliance architectures.</p>
        <h2>GCP: The Container & Kubernetes Champion</h2>
        <p>For startups and modern SaaS companies that rely heavily on Docker and Kubernetes, Google Cloud's Google Kubernetes Engine (GKE) provides an unparalleled user experience, simple networking, and top-tier analytics integration.</p>
      </>
    )
  },
  {
    id: 3,
    title: 'Why Clean UI/UX Design Directs Client Conversion Rates',
    category: 'Product Design',
    author: 'Sarah Jenkins',
    date: 'June 28, 2026',
    readTime: '4 min read',
    excerpt: 'How modern micro-animations, curated color palettes, and clear visual hierarchies elevate brand trust and drive higher business conversion.',
    image: 'https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?q=80&w=800&auto=format&fit=crop',
    content: (
      <>
        <p>A beautiful user interface is much more than just eye candy; it is a critical component of your conversion funnel. When a user lands on your website or dashboard, they make a subconscious decision to trust your brand within seconds.</p>
        <h2>The Power of CURATED Colors and Fonts</h2>
        <p>Using generic colors and default browser typography immediately cheapens the experience. High-end brands use carefully selected palettes, rich gradients, and custom modern typography (like Outfit or Montserrat) to stand out.</p>
        <h2>Micro-Animations & Visual Hierarchy</h2>
        <p>Subtle hover states, glowing gradients, and smooth spring-based transitions keep the user engaged and navigate them naturally toward primary CTA buttons (like "Start Your Project"), directly driving higher signups and sales.</p>
      </>
    )
  }
]

const SERVICES = [
  {
    id: 'dev',
    tag: 'Development',
    title: 'Web, Mobile & Custom Software',
    desc: 'High-performance custom websites, tailored software solutions, and mobile apps built using React, Next.js, and React Native.',
    features: ['Custom Web & Mobile Apps', 'Bespoke Software & SaaS', 'Responsive & Modern UI'],
    image: '/service_development.png'
  },
  {
    id: 'ai',
    tag: 'AI Automation',
    title: 'AI Automation & Chatbots',
    desc: 'Leverage AI to automate workflows, qualify leads and enhance customer experience globally.',
    features: ['Intelligent Chatbots', 'Workflow Automation', 'AI Integrations'],
    image: '/service_ai_automation.png'
  },
  {
    id: 'uiux-design',
    tag: 'Product Design',
    title: 'UI/UX & Product Strategy',
    desc: 'Stunning user interfaces and seamless user journeys crafted to elevate your brand globally.',
    features: ['Figma Wireframes & Prototypes', 'Design Systems for Brands', 'User Research & Strategy'],
    image: '/service_uiux_design.png'
  },
  {
    id: 'cloud-devops',
    tag: 'Cloud Architecture',
    title: 'AWS/GCP Cloud & DevOps',
    desc: 'High availability, auto-scaling, and secure serverless setups built for cross-continental low latency applications.',
    features: ['Infrastructure as Code (Terraform)', 'CI/CD Deployment Pipelines', 'Auto-scaling & Disaster Recovery'],
    image: '/service_cloud_devops.png'
  },
  {
    id: 'support',
    tag: 'Support',
    title: 'Software Maintenance & Management',
    desc: "We don't just build; we maintain. Ensuring your software systems are always secure, updated & optimized for global clients.",
    features: ['Ongoing Maintenance & Support', 'Performance Optimization', 'Security Audits & Updates'],
    image: '/service_support.png'
  }
]

function ServicesPage({ openModal }) {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Development', 'AI Automation', 'Product Design', 'Cloud Architecture', 'Support']
  
  const filteredServices = activeFilter === 'All'
    ? SERVICES
    : SERVICES.filter(service => service.tag === activeFilter)

  return (
    <div className="page-container services-page-container reveal visible">
      <div className="page-header">
        <h1>Our Expert Services</h1>
        <p>From strategic design to custom software engineering and intelligent cloud infrastructure, we build digital solutions that scale.</p>
      </div>

      <div className="portfolio-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="services-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem', padding: '1rem 0' }}>
        {filteredServices.map((service, index) => (
          <div key={index} className="service-card reveal visible" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            <div className="service-image-wrapper">
              <img src={service.image} alt={service.title} className="service-card-image" />
              <div className="service-image-overlay" />
            </div>

            <div className="service-card-body" style={{ flexGrow: '1', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
              <span className="service-badge" style={{ alignSelf: 'flex-start' }}>{service.tag}</span>
              <h3 style={{ marginTop: '0.75rem', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>{service.title}</h3>
              <p className="service-desc" style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.5rem', flexGrow: '1' }}>{service.desc}</p>

              <ul className="service-bullets" style={{ listStyle: 'none', padding: '0', margin: '0 0 2rem 0', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {service.features.map((feature, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', color: 'var(--text-dark)' }}>
                    <span className="bullet-dash" style={{ color: 'var(--primary-color)', fontWeight: '700' }}>✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button onClick={() => openModal('project')} className="btn btn-primary btn-sm btn-block" style={{ marginTop: 'auto' }}>
                Explore Solution
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function TermsPage() {
  return (
    <div className="page-container terms-container reveal visible" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>Terms & Conditions</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Last updated: July 12, 2026</p>
      </div>

      <div className="terms-content" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.975rem' }}>
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>1. Agreement to Terms</h2>
          <p>Welcome to SynXCloud. By accessing or using our website, services, and software solutions, you agree to be bound by these Terms and Conditions. If you do not agree to all of these terms, please do not use our services.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>2. Services Provided</h2>
          <p>SynXCloud provides custom software engineering, mobile application development, AI automation solutions, cloud infrastructure setup, and consulting services. All custom solutions are delivered based on independent statements of work (SOW) agreed between SynXCloud and the client.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>3. Intellectual Property Rights</h2>
          <p>Unless otherwise stated in an active service contract or statement of work, all pre-existing software libraries, proprietary algorithms, tools, and website designs developed by SynXCloud remain the exclusive intellectual property of SynXCloud. Upon full payment of services, intellectual property ownership of bespoke code specifically created for the client is fully transferred to the client.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>4. User Obligations</h2>
          <p>You agree to use our website and services only for lawful purposes. You must not attempt to breach security measures, distribute malware, or perform unauthorized testing of our infrastructure.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>5. Limitation of Liability</h2>
          <p>In no event shall SynXCloud, its directors, or partners be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services, or any security events beyond our reasonable control.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>6. Changes to Terms</h2>
          <p>We reserve the right to modify or replace these terms at any time. Your continued use of the website and services following any changes constitutes your acceptance of the updated terms.</p>
        </section>
      </div>
    </div>
  )
}

function PrivacyPage() {
  return (
    <div className="page-container privacy-container reveal visible" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>Privacy Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Last updated: July 12, 2026</p>
      </div>

      <div className="privacy-content" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.975rem' }}>
        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when filling out our contact forms, booking discovery calls, or applying for careers. This information typically includes your name, email address, phone number, company name, and details of your data or professional background.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>2. How We Use Your Information</h2>
          <p>We use the collected information to:
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li>Provide, maintain, and optimize our development services.</li>
              <li>Respond to inquiries, consultation requests, and support tickets.</li>
              <li>Evaluate job applications and resumes for career opportunities.</li>
              <li>Comply with regulatory requirements and ensure website security.</li>
            </ul>
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>3. Information Sharing and Disclosure</h2>
          <p>We do not sell, rent, or trade your personal information. We may share information with trusted third-party service providers (such as hosting, email delivery, and CRM tools) who assist us in operating our business under strict confidentiality agreements.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>4. Data Security</h2>
          <p>We implement industry-standard administrative, technical, and physical security measures to protect your personal data from unauthorized access, loss, or alteration. However, please note that no internet transmission is 100% secure.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>5. Your Privacy Rights</h2>
          <p>Depending on your location, you may have rights under regional regulations (such as GDPR or CCPA) to access, correct, delete, or limit the processing of your personal data. To exercise these rights, please contact us at info@synxcloud.in.</p>
        </section>
      </div>
    </div>
  )
}

function CookiePage() {
  return (
    <div className="page-container cookie-container reveal visible" style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 1.5rem' }}>
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3rem' }}>
        <h1 style={{ fontSize: '2.5rem', fontWeight: '800', color: 'var(--text-dark)' }}>Cookie Policy</h1>
        <p style={{ color: 'var(--text-muted)', marginTop: '0.5rem' }}>Last updated: July 12, 2026</p>
      </div>

      <div className="cookie-content" style={{ color: 'var(--text-muted)', lineHeight: '1.8', fontSize: '0.975rem' }}>
        <p>SynXCloud uses cookies and similar tracking technologies to improve performance, analyze website traffic, and enhance your overall browsing experience.</p>
        
        <section style={{ marginBottom: '2.5rem', marginTop: '1.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>1. What Are Cookies?</h2>
          <p>Cookies are small text files stored on your computer or mobile device when you visit a website. They are widely used by website owners to make their sites work, or work more efficiently, as well as to provide reporting information.</p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>2. Types of Cookies We Use</h2>
          <p>We use the following types of cookies:
            <ul style={{ paddingLeft: '1.5rem', marginTop: '0.5rem' }}>
              <li><strong>Essential Cookies:</strong> Required for the operation of the website, such as managing session state and security tokens.</li>
              <li><strong>Analytical Cookies:</strong> Help us analyze traffic patterns and user behavior so we can optimize website performance.</li>
              <li><strong>Preference Cookies:</strong> Remember your selected configuration, language settings, and active page views.</li>
            </ul>
          </p>
        </section>

        <section style={{ marginBottom: '2.5rem' }}>
          <h2 style={{ fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '1rem', fontWeight: '700' }}>3. Controlling Your Cookie Settings</h2>
          <p>Most browsers allow you to manage cookies through their settings settings. You can block or delete cookies, but doing so may impact the functionality and accessibility of certain sections of our website.</p>
        </section>
      </div>
    </div>
  )
}

const FAQS = [
  {
    category: 'General',
    q: 'What is SynXCloud?',
    a: 'SynXCloud is a high-performance software agency building bespoke web applications, mobile apps, artificial intelligence automation systems, and scalable cloud architectures. We cater to startups and enterprises looking to build, innovate, and grow their digital footprint globally.'
  },
  {
    category: 'General',
    q: 'Where is SynXCloud located and how do you operate?',
    a: 'Our core operations team is based in West Bengal, India, serving clients across the globe (US, Europe, Asia) with seamless remote collaboration. We align with our client’s local time zones for scheduling check-ins and delivery syncs.'
  },
  {
    category: 'Services',
    q: 'What technologies and frameworks do you specialize in?',
    a: 'We specialize in state-of-the-art frameworks, primarily React, Next.js, Node.js, Express, Python, and TypeScript. For databases and infrastructure, we work extensively with PostgreSQL, MongoDB, Redis, AWS (Amazon Web Services), Google Cloud Platform (GCP), Docker, and Kubernetes.'
  },
  {
    category: 'Services',
    q: 'Do you design and build mobile apps?',
    a: 'Yes, we design and build cross-platform mobile apps for both iOS and Android platforms using React Native, ensuring native-grade performance, fluid animations, and a single maintainable codebase.'
  },
  {
    category: 'Process',
    q: 'How do you ensure transparency and keep clients updated?',
    a: 'We follow Agile development methodologies. Clients receive daily or weekly updates (depending on scope) through platforms like Slack and Jira. We also host live staging environments where clients can review progress in real-time, accompanied by direct access to target GitHub/GitLab repositories.'
  },
  {
    category: 'Process',
    q: 'Do you sign Non-Disclosure Agreements (NDAs)?',
    a: 'Absolutely. Protecting client intellectual property and sensitive trade information is our top priority. We sign comprehensive, legally binding NDAs before exchanging any proprietary project requirements.'
  },
  {
    category: 'Pricing & IP',
    q: 'Who owns the project’s source code once it is complete?',
    a: 'You do. Upon project completion and settlement of outstanding invoices, complete intellectual property rights, database configurations, and git repositories are fully transferred to your company.'
  },
  {
    category: 'Pricing & IP',
    q: 'What are your engagement and billing models?',
    a: 'We offer two primary models: Fixed Price (best for clearly defined, milestone-based projects) and Dedicated Development Team (Time & Materials, billed weekly or monthly, ideal for ongoing, agile product development).'
  }
]

function FaqsPage() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [expandedIndex, setExpandedIndex] = useState(null)

  const categories = ['All', 'General', 'Services', 'Process', 'Pricing & IP']

  const filteredFaqs = activeCategory === 'All'
    ? FAQS
    : FAQS.filter(faq => faq.category === activeCategory)

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index)
  }

  return (
    <div className="page-container faqs-page-container reveal visible">
      <div className="page-header" style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
        <h1>Frequently Asked Questions</h1>
        <p>Find clear answers about our services, methodologies, pricing models, and intellectual property transfers.</p>
      </div>

      <div className="portfolio-filters" style={{ marginBottom: '3rem' }}>
        {categories.map((cat) => (
          <button
            key={cat}
            className={`portfolio-filter-btn ${activeCategory === cat ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(cat)
              setExpandedIndex(null)
            }}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="faq-accordion-container" style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
        {filteredFaqs.map((faq, index) => {
          const isExpanded = expandedIndex === index
          return (
            <div
              key={index}
              className={`faq-item-card ${isExpanded ? 'expanded' : ''}`}
              style={{
                background: 'var(--bg-white)',
                border: '1.5px solid var(--border-color)',
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                transition: 'all var(--transition-base)',
                boxShadow: isExpanded ? '0 10px 25px rgba(0, 31, 63, 0.05)' : 'var(--shadow-sm)'
              }}
            >
              <button
                onClick={() => toggleExpand(index)}
                className="faq-question-btn"
                style={{
                  width: '100%',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  padding: '1.75rem 2rem',
                  background: 'none',
                  border: 'none',
                  cursor: 'pointer',
                  textAlign: 'left',
                  outline: 'none'
                }}
              >
                <span style={{ fontSize: '1.1rem', fontWeight: '700', color: 'var(--text-dark)' }}>{faq.q}</span>
                <span className="faq-icon-indicator" style={{
                  color: 'var(--primary-color)',
                  fontSize: '1.5rem',
                  fontWeight: '700',
                  transform: isExpanded ? 'rotate(45deg)' : 'rotate(0deg)',
                  transition: 'transform var(--transition-fast)'
                }}>+</span>
              </button>

              <div
                className="faq-answer-wrapper"
                style={{
                  maxHeight: isExpanded ? '500px' : '0px',
                  opacity: isExpanded ? '1' : '0',
                  transition: 'all var(--transition-normal) ease-in-out',
                  overflow: 'hidden'
                }}
              >
                <div style={{ padding: '0 2rem 1.75rem 2rem', color: 'var(--text-muted)', lineHeight: '1.7', fontSize: '0.975rem', borderTop: isExpanded ? '1px solid var(--border-color)' : 'none', paddingTop: isExpanded ? '1.5rem' : '0' }}>
                  {faq.a}
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

const PROJECTS = [
  {
    id: 'ecommerce',
    title: 'E-Commerce Platform',
    tag: 'E-Commerce',
    category: 'Web App',
    desc: 'Custom e-commerce platform with advanced features and payment integrations.',
    challenge: 'The client needed a highly scalable checkout platform that could support up to 5,000 requests per minute during flash sales without layout shifts or server latency.',
    solution: 'Designed a Next.js frontend deployed to Vercel, utilizing incremental static regeneration (ISR) and a serverless AWS API cluster integrated with Redis for caching user carts.',
    stack: ['Next.js', 'AWS', 'Node.js', 'Redis'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=600&auto=format&fit=crop',
    stats: [
      { val: '150%', lbl: 'Increase in Sales' },
      { val: '2.5x', lbl: 'ROI Growth' }
    ]
  },
  {
    id: 'ai-chatbot',
    title: 'AI Customer Support Bot',
    tag: 'AI Automation',
    category: 'AI Automation',
    desc: 'Intelligent chatbot that handles customer queries and reduces support workload.',
    challenge: 'Customer support staff spent 80% of their time answering simple, repetitive questions about order tracking and refunds, delaying critical inquiries.',
    solution: 'Created an intelligent customer service agent using OpenAI GPT-4, coupled with LangChain and pinecone vector databases to fetch real-time documentation and resolve 60%+ queries autonomously.',
    stack: ['Python', 'OpenAI', 'AWS', 'LangChain'],
    image: 'https://images.unsplash.com/photo-1531747118685-ca8fa6e08806?q=80&w=600&auto=format&fit=crop',
    stats: [
      { val: '60%', lbl: 'Support Tickets Reduced' },
      { val: '24/7', lbl: 'Instant Response' }
    ]
  },
  {
    id: 'lms',
    title: 'Learning Management System',
    tag: 'Edtech',
    category: 'Web App',
    desc: 'Scalable LMS platform with video courses, quizzes, and progress tracking.',
    challenge: 'An online educational academy needed a multi-tenant portal with instant streaming video capability, course tracking, and localized quiz generation that worked on poor mobile networks.',
    solution: 'Developed a responsive single-page React app with video processing assets hosted in Amazon S3/CloudFront and PostgreSQL for robust user analytics.',
    stack: ['React', 'PostgreSQL', 'AWS', 'Node.js'],
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=600&auto=format&fit=crop',
    stats: [
      { val: '5K+', lbl: 'Active Students' },
      { val: '98%', lbl: 'Satisfaction Rate' }
    ]
  },
  {
    id: 'fintech',
    title: 'FinTech Payment Gateway',
    tag: 'Fintech',
    category: 'Fintech',
    desc: 'Secure payment engine integrated with localized multi-currency conversion and fraud detection.',
    challenge: 'A global travel service required credit card and local payment parsing with real-time conversion and strict compliance with PCI-DSS guidelines.',
    solution: 'Designed and deployed a highly encrypted payment gateway using Node.js/TypeScript, stripe integrations, and real-time fraud alerts using Redis telemetry filters.',
    stack: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1559526324-4b87b5e36e44?q=80&w=600&auto=format&fit=crop',
    stats: [
      { val: '99.99%', lbl: 'Uptime SLA' },
      { val: '$2.4M', lbl: 'Processed Monthly' }
    ]
  },
  {
    id: 'telemetry',
    title: 'Real-time IoT Telemetry Panel',
    tag: 'IoT & Cloud',
    category: 'Cloud & Enterprise',
    desc: 'High-frequency telemetry data streaming dashboard with sub-50ms rendering latency.',
    challenge: 'An industrial machinery supplier required real-time telemetry monitoring for their fleet of 200+ active robots sending 100 updates per second.',
    solution: 'Built a specialized telemetry platform leveraging WebSockets, AWS ECS container orchestration, and multi-threaded Web Workers to handle state rendering without UI lockups.',
    stack: ['React', 'Node.js', 'AWS ECS', 'Redis'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=600&auto=format&fit=crop',
    stats: [
      { val: '<50ms', lbl: 'Stream Latency' },
      { val: '10M+', lbl: 'Daily Events' }
    ]
  },
  {
    id: 'erp-system',
    title: 'Supply Chain Automation ERP',
    tag: 'Enterprise Software',
    category: 'Cloud & Enterprise',
    desc: 'Automated warehouse management system syncing inventory tracking with demand forecasting.',
    challenge: 'A regional logistics brand relied on manual inventory sheets, resulting in stockouts and high operating expenses.',
    solution: 'Engineered a central enterprise management dashboard syncing warehouse tracking, inventory forecasts, and sales pipelines in a single React admin panel.',
    stack: ['React', 'Python', 'Docker', 'PostgreSQL'],
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=600&auto=format&fit=crop',
    stats: [
      { val: '40%', lbl: 'Lead Time Cut' },
      { val: '0.01%', lbl: 'Inventory Error Rate' }
    ]
  }
]

function PortfolioPage({ setSelectedProject, openModal }) {
  const [activeFilter, setActiveFilter] = useState('All')
  
  const filters = ['All', 'Web App', 'AI Automation', 'Cloud & Enterprise', 'Fintech']
  
  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter(project => project.category === activeFilter)

  return (
    <div className="page-container portfolio-page-container reveal visible">
      <div className="page-header">
        <h1>Our Portfolio & Case Studies</h1>
        <p>Explore our successfully delivered custom software, AI automation pipelines, and scalable cloud solutions for international clients.</p>
      </div>

      <div className="portfolio-filters">
        {filters.map((filter) => (
          <button
            key={filter}
            className={`portfolio-filter-btn ${activeFilter === filter ? 'active' : ''}`}
            onClick={() => setActiveFilter(filter)}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="projects-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '2.5rem', padding: '1rem 0' }}>
        {filteredProjects.map((project, index) => (
          <div key={index} className="project-card reveal visible" style={{ display: 'flex', flexDirection: 'column' }}>
            <div className="project-image-wrapper">
              <span className="project-tag-badge" style={{ position: 'absolute', top: '1rem', left: '1rem', zIndex: '2' }}>
                {project.tag}
              </span>
              <img src={project.image} alt={project.title} className="project-img" />
            </div>
            <div className="project-body-grid" style={{ flexGrow: '1', display: 'flex', flexDirection: 'column', padding: '2rem' }}>
              <div className="project-left-col" style={{ width: '100%', borderRight: 'none', paddingRight: '0', display: 'flex', flexDirection: 'column', flexGrow: '1' }}>
                <h3 style={{ marginTop: '0', fontSize: '1.4rem', color: 'var(--text-dark)', marginBottom: '0.75rem' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '1.25rem' }}>{project.desc}</p>
                
                <div className="portfolio-card-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.5rem' }}>
                  {project.stack.map((tech, i) => (
                    <span key={i} className="stack-tag" style={{ background: 'var(--surface-light)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.25rem 0.6rem', fontSize: '0.75rem', color: 'var(--text-dark)' }}>{tech}</span>
                  ))}
                </div>
              </div>

              <div className="project-divider-line" style={{ width: '100%', height: '1px', background: 'var(--border-color)', margin: '1rem 0' }} />

              <div className="project-right-col" style={{ width: '100%', display: 'flex', justifyContent: 'space-between', gap: '1.5rem', marginBottom: '1.5rem' }}>
                {project.stats.map((stat, i) => (
                  <div key={i} className="project-stat-block" style={{ display: 'flex', flexDirection: 'column' }}>
                    <span className="proj-stat-val" style={{ fontSize: '1.4rem', fontWeight: '700', color: 'var(--primary-color)' }}>{stat.val}</span>
                    <span className="proj-stat-lbl" style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{stat.lbl}</span>
                  </div>
                ))}
              </div>

              <button 
                className="btn btn-outline btn-sm btn-block" 
                style={{ marginTop: 'auto' }}
                onClick={() => {
                  setSelectedProject(project);
                  openModal('project_detail');
                }}
              >
                View Case Study
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginLeft: '0.5rem' }}><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ===== PAGE SUB-COMPONENTS ===== */
function TeamPage() {
  return (
    <div className="page-container team-container reveal visible">
      <div className="page-header">
        <h1>Meet Our Team</h1>
        <p>A global team of passionate developers, designers, and cloud architects working together to deliver exceptional digital products.</p>
      </div>

      <div className="team-grid">
        {TEAM_MEMBERS.map((member, index) => (
          <div key={index} className="team-card">
            <div className="team-image-wrap">
              <img src={member.image} alt={member.name} className="team-image" />
            </div>
            <div className="team-info">
              <h3>{member.name}</h3>
              <div className="team-role">{member.role}</div>
              <p className="team-bio">{member.bio}</p>
              <div className="team-socials">
                {member.linkedin && (
                  <a href={member.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function BlogPage({ selectedBlogPost, setSelectedBlogPost }) {
  if (selectedBlogPost) {
    return (
      <div className="blog-post-view reveal visible">
        <div className="blog-post-back" onClick={() => setSelectedBlogPost(null)}>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="19" y1="12" x2="5" y2="12"></line><polyline points="12 19 5 12 12 5"></polyline></svg>
          Back to Blog
        </div>
        <div className="blog-post-header">
          <h1>{selectedBlogPost.title}</h1>
          <div className="blog-post-meta">
            <span>By {selectedBlogPost.author}</span>
            <span>•</span>
            <span>{selectedBlogPost.date}</span>
            <span>•</span>
            <span>{selectedBlogPost.readTime}</span>
            <span>•</span>
            <span style={{ color: 'var(--primary-color)', fontWeight: '600' }}>{selectedBlogPost.category}</span>
          </div>
        </div>
        <img src={selectedBlogPost.image} alt={selectedBlogPost.title} className="blog-post-hero-image" />
        <div className="blog-post-content">
          {selectedBlogPost.content}
        </div>
      </div>
    )
  }

  return (
    <div className="page-container blog-container reveal visible">
      <div className="page-header">
        <h1>Latest Insights & News</h1>
        <p>Stay updated with our latest thought leadership on software development, AI workflows, product design, and cloud technologies.</p>
      </div>

      <div className="blog-grid">
        {BLOG_POSTS.map((post) => (
          <div key={post.id} className="blog-card" onClick={() => {
            setSelectedBlogPost(post);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}>
            <div className="blog-card-image-wrap">
              <span className="blog-card-category">{post.category}</span>
              <img src={post.image} alt={post.title} className="blog-card-image" />
            </div>
            <div className="blog-card-body">
              <div className="blog-card-meta">
                <span>📅 {post.date}</span>
                <span>⏱ {post.readTime}</span>
              </div>
              <h3 className="blog-card-title">{post.title}</h3>
              <p className="blog-card-excerpt">{post.excerpt}</p>
              <div className="blog-card-footer">
                <span>Read Full Article</span>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function CareersPage({ selectedJob, setSelectedJob, openModal }) {
  return (
    <div className="page-container careers-container reveal visible">
      <div className="page-header">
        <h1>Join Our Mission</h1>
        <p>We are a remote-first, high-agency team building custom software and AI automation solutions. Work on challenging international projects from anywhere.</p>
      </div>

      <div className="careers-why-us">
        <div className="careers-why-card">
          <div className="careers-why-icon">🌍</div>
          <h3>Remote-First Work</h3>
          <p>Work from the comfort of your home, co-working space, or from anywhere in the world.</p>
        </div>
        <div className="careers-why-card">
          <div className="careers-why-icon">⚡</div>
          <h3>High Agency</h3>
          <p>We trust our team completely. Take ownership, manage your hours, and deliver outstanding results.</p>
        </div>
        <div className="careers-why-card">
          <div className="careers-why-icon">📚</div>
          <h3>Growth & Mentorship</h3>
          <p>Get access to premium courses, development workshops, and receive mentorship from senior tech leads.</p>
        </div>
      </div>

      <div className="careers-positions-section">
        <div className="careers-positions-header">
          <h2>Open Positions</h2>
          <p>Find your next challenge. We are always looking for ambitious and skilled tech professionals.</p>
        </div>

        <div className="job-list">
          {JOBS.map((job) => (
            <div key={job.id} className="job-card">
              <div className="job-card-left">
                <h3>{job.title}</h3>
                <div className="job-card-meta">
                  <span>💼 {job.department}</span>
                  <span>📍 {job.location}</span>
                  <span>⏱ {job.type}</span>
                  <span>💰 {job.salary}</span>
                </div>
              </div>
              <button 
                onClick={() => {
                  setSelectedJob(job);
                  openModal('careers_apply');
                }} 
                className="job-card-apply-btn"
              >
                Apply Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ===== APP COMPONENT ===== */
function App() {
  const [view, setView] = useState('home') // 'home', 'blog', 'careers', 'team', 'portfolio'
  const [selectedBlogPost, setSelectedBlogPost] = useState(null)
  const [selectedJob, setSelectedJob] = useState(null)
  const [selectedProject, setSelectedProject] = useState(null)
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('home')
  const [testimonialIndex, setTestimonialIndex] = useState(0)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [modalType, setModalType] = useState('discovery') // 'discovery', 'strategy', 'project'
  const [formStatus, setFormStatus] = useState('')
  const [projectIndex, setProjectIndex] = useState(0)
  const [serviceIndex, setServiceIndex] = useState(0)
  const [visibleItems, setVisibleItems] = useState(2)
  const formRef = useRef(null)
  
  // Touch refs for swipe support
  const projectTouchStart = useRef(null)
  const projectTouchEnd = useRef(null)
  const serviceTouchStart = useRef(null)
  const serviceTouchEnd = useRef(null)

  // Chatbot State Hooks
  const [isChatOpen, setIsChatOpen] = useState(false)
  const [showChatTooltip, setShowChatTooltip] = useState(false)
  const [tooltipTextIndex, setTooltipTextIndex] = useState(0)
  const [displayedTooltipText, setDisplayedTooltipText] = useState('')
  const TOOLTIP_MESSAGES = [
    "Let's build your project together! 🤖",
    "Looking for custom web or mobile apps? 📱",
    "Automate your workflow with AI agents! ⚡",
    "Get a project estimate in 2 minutes! 💼",
    "Let's chat about your tech stack! 🚀"
  ]
  const [chatStep, setChatStep] = useState(0) // 0: Name, 1: Email, 2: Service Type, 3: Budget, 4: Brief, 5: Phone, 6: Sending/Success
  const [chatMessages, setChatMessages] = useState([
    { sender: 'bot', text: 'Hi there! 👋 I am SynXBot, your automated digital assistant. I can help gather your project requirements and connect you directly with our tech team.' },
    { sender: 'bot', text: "Let's get started. May I know your name first?" }
  ])
  const [chatInput, setChatInput] = useState('')
  const [chatData, setChatData] = useState({
    name: '',
    email: '',
    projectType: '',
    budget: '',
    brief: '',
    phone: ''
  })
  const [isBotTyping, setIsBotTyping] = useState(false)
  const messagesEndRef = useRef(null)

  // Auto-scroll chat messages to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' })
    }
  }, [chatMessages, isBotTyping, isChatOpen])

  // Trigger welcome prompt tooltip bubble after 3 seconds when chat is closed
  useEffect(() => {
    if (!isChatOpen) {
      const timer = setTimeout(() => {
        setShowChatTooltip(true)
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [isChatOpen])

  // Cycle welcome suggestion bubble messages every 5 seconds
  useEffect(() => {
    if (!showChatTooltip || isChatOpen) return
    const interval = setInterval(() => {
      setTooltipTextIndex((prev) => (prev + 1) % TOOLTIP_MESSAGES.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [showChatTooltip, isChatOpen, TOOLTIP_MESSAGES.length])

  // Typewriter effect for welcome suggestion text
  useEffect(() => {
    if (!showChatTooltip || isChatOpen) {
      setDisplayedTooltipText('')
      return
    }
    const fullText = TOOLTIP_MESSAGES[tooltipTextIndex]
    setDisplayedTooltipText('')
    
    let currentString = ''
    let currentIndex = 0
    const interval = setInterval(() => {
      if (currentIndex < fullText.length) {
        currentString += fullText.charAt(currentIndex)
        setDisplayedTooltipText(currentString)
        currentIndex++
      } else {
        clearInterval(interval)
      }
    }, 45) // 45ms per character is organic and reliable
    return () => clearInterval(interval)
  }, [tooltipTextIndex, showChatTooltip, isChatOpen])

  // Chatbot form email submission
  const sendChatbotEmail = (data) => {
    const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID
    const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID
    const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY

    if (!serviceId || !templateId || !publicKey) {
      console.error('EmailJS config missing in chatbot', { serviceId, templateId, publicKey })
      setChatMessages(prev => [
        ...prev,
        { sender: 'bot', text: "Oops, we ran into an integration issue. Please contact us directly at info@synxcloud.in." }
      ])
      return
    }

    const templateParams = {
      user_name: data.name,
      user_email: data.email,
      phone: data.phone,
      subject: `SynXCloud - Chatbot Robot Lead`,
      message: `
New Lead Collected via Chatbot:
------------------------------
Name: ${data.name}
Email: ${data.email}
Phone: ${data.phone}
Service Type: ${data.projectType}
Budget Range: ${data.budget}
Project Description: ${data.brief}
      `
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then(() => {
        setChatMessages(prev => [
          ...prev,
          { sender: 'bot', text: `Success! 🎉 Your requirements have been securely delivered. A solution architect will reach out to you within 24 hours at ${data.email}. Have a great day!` }
        ])
      })
      .catch((error) => {
        console.error('Chatbot EmailJS error', error)
        setChatMessages(prev => [
          ...prev,
          { sender: 'bot', text: "There was a temporary network error. Don't worry, you can always write to us directly at info@synxcloud.in!" }
        ])
      })
  }

  // Chatbot conversational submit handler
  const handleChatSubmit = (e, customText = null) => {
    if (e) e.preventDefault()
    const text = customText || chatInput.trim()
    if (!text && chatStep !== 5) return // Allow empty for phone step (Skip)

    // Append user message
    if (text) {
      setChatMessages(prev => [...prev, { sender: 'user', text }])
    }
    setChatInput('')

    // Set bot typing indicator
    setIsBotTyping(true)

    // Simulate bot delay
    setTimeout(() => {
      setIsBotTyping(false)
      
      let nextStep = chatStep
      let nextMessages = []
      let updatedData = { ...chatData }

      if (chatStep === 0) {
        // We received the user's name
        updatedData.name = text
        setChatData(updatedData)
        nextStep = 1
        nextMessages = [
          { sender: 'bot', text: `Nice to meet you, ${text}! 😊` },
          { sender: 'bot', text: "Could you please share your email address so our solutions team can follow up?" }
        ]
      } else if (chatStep === 1) {
        // We received the email address
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
        if (!emailRegex.test(text)) {
          nextMessages = [
            { sender: 'bot', text: "Hmm, that doesn't look like a valid email address. Please double check and try again:" }
          ]
        } else {
          updatedData.email = text
          setChatData(updatedData)
          nextStep = 2
          nextMessages = [
            { sender: 'bot', text: "Got it! Thanks." },
            { sender: 'bot', text: "What type of service or solution are you looking for?" }
          ]
        }
      } else if (chatStep === 2) {
        // We received the service type
        updatedData.projectType = text
        setChatData(updatedData)
        nextStep = 3
        nextMessages = [
          { sender: 'bot', text: `Excellent. A ${text} project sounds exciting!` },
          { sender: 'bot', text: "What is your estimated budget range for this project?" }
        ]
      } else if (chatStep === 3) {
        // We received the budget
        updatedData.budget = text
        setChatData(updatedData)
        nextStep = 4
        nextMessages = [
          { sender: 'bot', text: "Perfect. Knowing the budget helps us design the best architecture for you." },
          { sender: 'bot', text: "Could you provide a brief description of what you'd like us to build? (e.g. features, goals, timeline)" }
        ]
      } else if (chatStep === 4) {
        // We received the project brief
        updatedData.brief = text
        setChatData(updatedData)
        nextStep = 5
        nextMessages = [
          { sender: 'bot', text: "Thank you for the description! This helps our engineers understand the scope." },
          { sender: 'bot', text: "Lastly (optional): Would you like to share your phone or WhatsApp number for quicker contact? Otherwise, click 'Skip'." }
        ]
      } else if (chatStep === 5) {
        // We received the phone number or clicked skip
        const phoneVal = text || 'N/A'
        updatedData.phone = phoneVal
        setChatData(updatedData)
        nextStep = 6
        
        nextMessages = [
          { sender: 'bot', text: "Great! I have gathered all your project details. Please review the summary below:" },
          { sender: 'bot', text: "", isSummaryCard: true }
        ]
      }

      setChatStep(nextStep)
      setChatMessages(prev => [...prev, ...nextMessages])
    }, 800)
  }

  // Triggered when user reviews summary and clicks Submit
  const handleChatFinalSubmit = () => {
    setIsBotTyping(true)
    setChatStep(7)

    setTimeout(() => {
      setIsBotTyping(false)
      setChatMessages(prev => [
        ...prev,
        { sender: 'bot', text: "Submitting details and establishing contact... 🚀" }
      ])
      sendChatbotEmail(chatData)
    }, 800)
  }

  // Navigation Items
  const NAV_ITEMS = [
    { id: 'home', label: 'Home', type: 'page' },
    { id: 'services', label: 'Services', type: 'page' },
    { id: 'portfolio', label: 'Portfolio', type: 'page' },
    // { id: 'team', label: 'Team', type: 'page' },
    { id: 'blog', label: 'Blog', type: 'page' },
    { id: 'careers', label: 'Careers', type: 'page' },
    { id: 'contact', label: 'Contact', type: 'section' },
  ]

  // Stats Data
  const STATS = [
    { value: '10+', label: 'Projects Delivered', icon: 'folder' },
    { value: '99%', label: 'Client Satisfaction', icon: 'target' },
    { value: '24/7', label: 'Support & Maintenance', icon: 'shield' },
    { value: '3+', label: 'Years Combined Experience', icon: 'award' },
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
      name: 'AWS Partner',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" />
        </svg>
      )
    },
    {
      name: 'Google Cloud',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <polygon points="12 2 2 22 22 22" />
        </svg>
      )
    },
    {
      name: 'Vercel',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <circle cx="12" cy="12" r="10" />
          <path d="M12 8v8M8 12h8" />
        </svg>
      )
    },
    {
      name: 'DigitalOcean',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      )
    },
    {
      name: 'Stripe',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9z" />
          <path d="M13.73 21a2 2 0 0 1-3.46 0" />
        </svg>
      )
    },
    {
      name: 'MongoDB',
      icon: (
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" className="partner-svg">
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      )
    }
  ]



  // Testimonials
  const TESTIMONIALS = [
    {
      quote: "SynXCloud completely transformed our infrastructure. Their expertise in AWS saved us 40% in monthly cloud costs while significantly improving application performance.",
      name: "Rahul Chatterjee",
      role: "CTO, TechCorp India",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "The custom ERP solution they built streamlined our entire supply chain. Their team's dedication, agile process, and technical proficiency are simply unmatched.",
      name: "Priya Sharma",
      role: "Operations Director, Logistics Pro",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop"
    },
    {
      quote: "We needed a scalable LMS platform and SynXCloud delivered beyond expectations. Their UI/UX design and robust backend handled our 10k+ user base flawlessly.",
      name: "Vikram Singh",
      role: "Founder, EduTech Solutions",
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

  // Handle SPA routing and scrolling
  const handleNavClick = (e, item) => {
    e.preventDefault()
    if (item.type === 'page') {
      setView(item.id)
      setSelectedBlogPost(null)
      setSelectedJob(null)
      setActiveSection(item.id)
      window.scrollTo({ top: 0, behavior: 'smooth' })
    } else {
      // Type is section
      if (view !== 'home') {
        setView('home')
        setActiveSection(item.id)
        setTimeout(() => {
          const el = document.getElementById(item.id)
          if (el) {
            const offset = 80
            const top = el.getBoundingClientRect().top + window.scrollY - offset
            window.scrollTo({ top, behavior: 'smooth' })
          }
        }, 150)
      } else {
        const el = document.getElementById(item.id)
        if (el) {
          const offset = 80
          const top = el.getBoundingClientRect().top + window.scrollY - offset
          window.scrollTo({ top, behavior: 'smooth' })
        }
        setActiveSection(item.id)
      }
    }
    setMobileOpen(false)
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
      let currentVisible = 2
      if (window.innerWidth <= 1024) {
        currentVisible = 1
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

  // Touch Swipe Handlers for Projects
  const onTouchStartProjects = (e) => {
    projectTouchEnd.current = null
    projectTouchStart.current = e.targetTouches[0].clientX
  }

  const onTouchMoveProjects = (e) => {
    projectTouchEnd.current = e.targetTouches[0].clientX
  }

  const onTouchEndProjects = () => {
    if (!projectTouchStart.current || !projectTouchEnd.current) return
    const distance = projectTouchStart.current - projectTouchEnd.current
    const minSwipeDistance = 50
    if (distance > minSwipeDistance) {
      nextProject()
    } else if (distance < -minSwipeDistance) {
      prevProject()
    }
  }

  // Touch Swipe Handlers for Services
  const onTouchStartServices = (e) => {
    serviceTouchEnd.current = null
    serviceTouchStart.current = e.targetTouches[0].clientX
  }

  const onTouchMoveServices = (e) => {
    serviceTouchEnd.current = e.targetTouches[0].clientX
  }

  const onTouchEndServices = () => {
    if (!serviceTouchStart.current || !serviceTouchEnd.current) return
    const distance = serviceTouchStart.current - serviceTouchEnd.current
    const minSwipeDistance = 50
    if (distance > minSwipeDistance) {
      nextService()
    } else if (distance < -minSwipeDistance) {
      prevService()
    }
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
  }, [view])

  return (
    <div className="site-shell">

      {/* ===== HEADER ===== */}
      <header className={`header ${scrolled ? 'scrolled' : ''}`}>
        <div className="container nav-wrap">
          <a href="#home" className="brand" onClick={(e) => handleNavClick(e, { id: 'home', type: 'page' })}>
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
                    onClick={(e) => handleNavClick(e, item)}
                  >
                    {item.label}
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
            onClick={(e) => handleNavClick(e, item)}
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
        {view === 'home' && (
          <>
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
                <div className="hero-social-proof" onClick={(e) => {
                  e.preventDefault();
                  const el = document.getElementById('process');
                  if (el) {
                    const offset = 80;
                    const top = el.getBoundingClientRect().top + window.scrollY - offset;
                    window.scrollTo({ top, behavior: 'smooth' });
                  }
                }} style={{ cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.03)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'} title="View Client Reviews">
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
                    <p className="proof-text">Trusted by 10+ businesses worldwide</p>
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
                <a href="#services" onClick={(e) => handleNavClick(e, { id: 'services', type: 'page' })} className="services-link">
                  View all services
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </div>

            <div className="carousel-wrapper" style={{ position: 'relative' }}>
              <button onClick={prevService} className="carousel-nav-btn prev-btn" aria-label="Previous service">
                <Icon name="arrowLeft" size={20} />
              </button>

              <div 
                className="services-carousel-container"
                onTouchStart={onTouchStartServices}
                onTouchMove={onTouchMoveServices}
                onTouchEnd={onTouchEndServices}
              >
                <div
                  className="services-track"
                  style={{
                    '--visible-items': visibleItems,
                    transform: `translateX(calc(-${serviceIndex} * (100% + var(--grid-gap)) / var(--visible-items)))`
                  }}
                >
                  {SERVICES.map((s) => (
                    <div key={s.id} className="service-card reveal">
                      {/* Service Feature Image */}
                      <div className="service-image-wrapper">
                        <img src={s.image} alt={s.title} className="service-card-image" />
                        <div className="service-image-overlay" />
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

              <button onClick={nextService} className="carousel-nav-btn next-btn" aria-label="Next service">
                <Icon name="arrowRight" size={20} />
              </button>
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
              <p className="why-choose-desc">
                We build secure, scalable, and high-performance digital solutions with transparent communication, dedicated teams, and long-term support.
              </p>
              <button onClick={() => openModal('project')} className="btn btn-primary btn-sm" style={{ marginTop: '1.5rem' }}>
                Start Your Project
                <Icon name="arrowRight" size={16} />
              </button>
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
                <a href="#portfolio" onClick={(e) => handleNavClick(e, { id: 'portfolio', type: 'page' })} className="projects-view-all">
                  View all case studies
                  <Icon name="arrowRight" size={16} />
                </a>
              </div>
            </div>

            <div className="carousel-wrapper" style={{ position: 'relative' }}>
              <button onClick={prevProject} className="carousel-nav-btn prev-btn" aria-label="Previous project">
                <Icon name="arrowLeft" size={20} />
              </button>

              <div 
                className="projects-carousel-container"
                onTouchStart={onTouchStartProjects}
                onTouchMove={onTouchMoveProjects}
                onTouchEnd={onTouchEndProjects}
              >
                <div
                  className="projects-track"
                  style={{
                    '--visible-items': visibleItems,
                    transform: `translateX(calc(-${projectIndex} * (100% + var(--grid-gap)) / var(--visible-items)))`
                  }}
                >
                  {PROJECTS.map((p, idx) => (
                    <div key={idx} className="project-card reveal" style={{ cursor: 'pointer' }} onClick={() => { setSelectedProject(p); openModal('project_detail'); }}>
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

              <button onClick={nextProject} className="carousel-nav-btn next-btn" aria-label="Next project">
                <Icon name="arrowRight" size={20} />
              </button>
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
          </>
        )}

        {view === 'blog' && (
          <BlogPage 
            selectedBlogPost={selectedBlogPost}
            setSelectedBlogPost={setSelectedBlogPost}
          />
        )}

        {view === 'careers' && (
          <CareersPage 
            selectedJob={selectedJob}
            setSelectedJob={setSelectedJob}
            openModal={openModal}
          />
        )}

        {/* {view === 'team' && (
          <TeamPage />
        )} */}

        {view === 'services' && (
          <ServicesPage openModal={openModal} />
        )}

        {view === 'portfolio' && (
          <PortfolioPage 
            setSelectedProject={setSelectedProject}
            openModal={openModal}
          />
        )}

        {view === 'terms' && (
          <TermsPage />
        )}

        {view === 'privacy' && (
          <PrivacyPage />
        )}

        {view === 'cookie' && (
          <CookiePage />
        )}

        {view === 'faqs' && (
          <FaqsPage />
        )}
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
              <a href="#about" onClick={(e) => handleNavClick(e, { id: 'about', type: 'section' })}>About Us</a>
              <a href="#careers" onClick={(e) => handleNavClick(e, { id: 'careers', type: 'page' })}>Careers</a>
              {/* <a href="#team" onClick={(e) => handleNavClick(e, { id: 'team', type: 'page' })}>Our Team</a> */}
              <a href="#blog" onClick={(e) => handleNavClick(e, { id: 'blog', type: 'page' })}>Blog</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, { id: 'contact', type: 'section' })}>Contact</a>
            </div>
          </div>

          <div className="footer-links-col">
            <h4>Services</h4>
            <div className="links-group">
              <a href="#services" onClick={(e) => handleNavClick(e, { id: 'services', type: 'page' })}>Web Development</a>
              <a href="#services" onClick={(e) => handleNavClick(e, { id: 'services', type: 'page' })}>Mobile App Development</a>
              <a href="#services" onClick={(e) => handleNavClick(e, { id: 'services', type: 'page' })}>AI Automation</a>
              <a href="#services" onClick={(e) => handleNavClick(e, { id: 'services', type: 'page' })}>E-Commerce</a>
              <a href="#services" onClick={(e) => handleNavClick(e, { id: 'services', type: 'page' })}>Maintenance & Support</a>
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
              <a href="#portfolio" onClick={(e) => handleNavClick(e, { id: 'portfolio', type: 'page' })}>Case Studies</a>
              <a href="#blog" onClick={(e) => handleNavClick(e, { id: 'blog', type: 'page' })}>Blog</a>
              <a href="#technologies">Tech Stack</a>
              <a href="#process">Process</a>
              <a href="#faqs" onClick={(e) => handleNavClick(e, { id: 'faqs', type: 'page' })}>FAQs</a>
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
            <a href="#privacy" onClick={(e) => handleNavClick(e, { id: 'privacy', type: 'page' })}>Privacy Policy</a>
            <a href="#terms" onClick={(e) => handleNavClick(e, { id: 'terms', type: 'page' })}>Terms & Conditions</a>
            <a href="#cookie" onClick={(e) => handleNavClick(e, { id: 'cookie', type: 'page' })}>Cookie Policy</a>
          </div>
        </div>
      </footer>

      {/* ===== FLOATING CHATBOT ROBOT (COMMENTED OUT) ===== */}
      {/* <div className="chatbot-widget-container" style={{ position: 'fixed', bottom: '30px', right: '30px', zIndex: '9999', display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        {isChatOpen && (
          <div className="chatbot-window reveal visible" style={{
            width: '380px',
            height: '540px',
            background: 'rgba(255, 255, 255, 0.92)',
            border: '1px solid rgba(0, 82, 255, 0.15)',
            borderRadius: '24px',
            boxShadow: '0 20px 50px rgba(0, 31, 63, 0.15)',
            display: 'flex',
            flexDirection: 'column',
            overflow: 'hidden',
            marginBottom: '15px',
            backdropFilter: 'blur(25px)',
            transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
          }}>
            <div className="chatbot-header" style={{
              background: 'linear-gradient(135deg, var(--primary-color), #002D8F)',
              padding: '1.25rem 1.5rem',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              boxShadow: '0 4px 15px rgba(0, 82, 255, 0.1)'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <div className="bot-avatar bot-avatar-floating" style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: 'rgba(255, 255, 255, 0.2)',
                  display: 'grid',
                  placeItems: 'center',
                  fontSize: '1.4rem',
                  boxShadow: '0 4px 10px rgba(0,0,0,0.1)'
                }}>
                  🤖
                </div>
                <div>
                  <h4 style={{ margin: '0', fontSize: '1.05rem', fontWeight: '700', letterSpacing: '0.3px' }}>SynXBot</h4>
                  <p style={{ margin: '0', fontSize: '0.75rem', opacity: '0.9', display: 'flex', alignItems: 'center', gap: '5px' }}>
                    <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#10B981', display: 'inline-block', boxShadow: '0 0 6px #10B981' }} />
                    Online • Assistant
                  </p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'center' }}>
                <button
                  onClick={() => {
                    setChatStep(0)
                    setChatMessages([
                      { sender: 'bot', text: 'Hi there! 👋 I am SynXBot, your automated digital assistant. I can help gather your project requirements and connect you directly with our tech team.' },
                      { sender: 'bot', text: "Let's get started. May I know your name first?" }
                    ])
                    setChatInput('')
                    setChatData({ name: '', email: '', projectType: '', budget: '', brief: '', phone: '' })
                  }}
                  title="Reset Conversation"
                  style={{ background: 'none', border: 'none', color: '#fff', opacity: '0.85', cursor: 'pointer', fontSize: '1rem', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.85'}
                >
                  🔄
                </button>
                <button
                  onClick={() => setIsChatOpen(false)}
                  style={{ background: 'none', border: 'none', color: '#fff', opacity: '0.85', cursor: 'pointer', fontSize: '1.25rem', fontWeight: '700', transition: 'opacity 0.2s' }}
                  onMouseEnter={(e) => e.target.style.opacity = '1'}
                  onMouseLeave={(e) => e.target.style.opacity = '0.85'}
                >
                  ×
                </button>
              </div>
            </div>

            <div className="chatbot-messages" style={{
              flexGrow: '1',
              padding: '1.25rem 1.5rem',
              overflowY: 'auto',
              display: 'flex',
              flexDirection: 'column',
              gap: '1rem',
              background: '#F8FAFC'
            }}>
              {chatMessages.map((msg, idx) => (
                <div key={idx} className="chatbot-msg-anim" style={{
                  alignSelf: msg.sender === 'user' ? 'flex-end' : 'flex-start',
                  maxWidth: msg.isSummaryCard ? '100%' : '82%',
                  background: msg.isSummaryCard ? 'transparent' : (msg.sender === 'user' ? 'var(--primary-color)' : '#ffffff'),
                  color: msg.sender === 'user' ? '#ffffff' : 'var(--text-dark)',
                  padding: msg.isSummaryCard ? '0' : '0.85rem 1.1rem',
                  borderRadius: msg.sender === 'user' ? '18px 18px 4px 18px' : '18px 18px 18px 4px',
                  boxShadow: msg.isSummaryCard ? 'none' : '0 4px 12px rgba(0, 0, 0, 0.03)',
                  fontSize: '0.9rem',
                  lineHeight: '1.5',
                  border: msg.isSummaryCard || msg.sender === 'user' ? 'none' : '1px solid rgba(0, 82, 255, 0.08)',
                  width: msg.isSummaryCard ? '100%' : 'auto'
                }}>
                  {msg.isSummaryCard ? (
                    <div style={{
                      background: '#ffffff',
                      border: '1.5px dashed rgba(0, 82, 255, 0.25)',
                      borderRadius: '20px',
                      padding: '1.25rem',
                      width: '100%',
                      boxShadow: '0 6px 20px rgba(0, 82, 255, 0.04)',
                      display: 'flex',
                      flexDirection: 'column',
                      gap: '0.85rem'
                    }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', borderBottom: '1px solid rgba(0,0,0,0.06)', paddingBottom: '0.5rem', marginBottom: '0.25rem' }}>
                        <span style={{ fontSize: '1.1rem' }}>📋</span>
                        <strong style={{ fontSize: '0.9rem', color: 'var(--text-dark)' }}>Project Specification</strong>
                      </div>
                      <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', lineHeight: '1.6' }}>
                        <div style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text-dark)' }}>Client Name:</strong> {chatData.name}</div>
                        <div style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text-dark)' }}>Work Email:</strong> {chatData.email}</div>
                        <div style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text-dark)' }}>Service Required:</strong> {chatData.projectType}</div>
                        <div style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text-dark)' }}>Budget range:</strong> {chatData.budget}</div>
                        <div style={{ marginBottom: '4px' }}><strong style={{ color: 'var(--text-dark)' }}>Contact Phone:</strong> {chatData.phone}</div>
                        <div style={{ marginTop: '0.5rem', padding: '0.5rem', background: '#F8FAFC', borderRadius: '8px', borderLeft: '3px solid var(--primary-color)' }}><strong style={{ color: 'var(--text-dark)' }}>Brief:</strong> {chatData.brief}</div>
                      </div>
                      
                      {chatStep === 6 && (
                        <button
                          onClick={() => handleChatFinalSubmit()}
                          style={{
                            background: 'var(--primary-color)',
                            color: '#ffffff',
                            border: 'none',
                            borderRadius: '99px',
                            padding: '0.7rem 1.5rem',
                            fontWeight: '700',
                            fontSize: '0.85rem',
                            cursor: 'pointer',
                            textAlign: 'center',
                            display: 'flex',
                            alignItems: 'center',
                            justifyContent: 'center',
                            gap: '0.5rem',
                            boxShadow: '0 4px 12px rgba(0, 82, 255, 0.2)',
                            transition: 'all 0.2s',
                            marginTop: '0.5rem'
                          }}
                          className="chatbot-submit-btn"
                        >
                          🚀 Submit Details
                        </button>
                      )}
                    </div>
                  ) : (
                    msg.text
                  )}
                </div>
              ))}
              
              {isBotTyping && (
                <div style={{
                  alignSelf: 'flex-start',
                  background: '#ffffff',
                  padding: '0.85rem 1.1rem',
                  borderRadius: '16px 16px 16px 4px',
                  boxShadow: '0 2px 6px rgba(0, 0, 0, 0.02)',
                  border: '1px solid rgba(0, 82, 255, 0.08)',
                  display: 'flex',
                  gap: '4px',
                  alignItems: 'center'
                }}>
                  <span className="dot-pulse" style={{ width: '6px', height: '6px', background: '#94A3B8', borderRadius: '50%', display: 'inline-block' }} />
                  <span className="dot-pulse" style={{ width: '6px', height: '6px', background: '#94A3B8', borderRadius: '50%', display: 'inline-block' }} />
                  <span className="dot-pulse" style={{ width: '6px', height: '6px', background: '#94A3B8', borderRadius: '50%', display: 'inline-block' }} />
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {chatStep === 2 && !isBotTyping && (
              <div className="quick-options" style={{ padding: '0.6rem 1.5rem', background: '#F8FAFC', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
                {['Web/Software', 'Mobile App', 'AI/Automation', 'DevOps/Cloud', 'Support'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleChatSubmit(null, option)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(0, 82, 255, 0.2)',
                      borderRadius: '99px',
                      padding: '0.45rem 1rem',
                      color: 'var(--primary-color)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                    }}
                    className="chatbot-pill-btn"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {chatStep === 3 && !isBotTyping && (
              <div className="quick-options" style={{ padding: '0.6rem 1.5rem', background: '#F8FAFC', display: 'flex', flexWrap: 'wrap', gap: '0.5rem', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
                {['Under $5k', '$5k - $15k', '$15k - $50k', 'Above $50k'].map(option => (
                  <button
                    key={option}
                    onClick={() => handleChatSubmit(null, option)}
                    style={{
                      background: '#ffffff',
                      border: '1px solid rgba(0, 82, 255, 0.2)',
                      borderRadius: '99px',
                      padding: '0.45rem 1rem',
                      color: 'var(--primary-color)',
                      fontSize: '0.8rem',
                      fontWeight: '600',
                      cursor: 'pointer',
                      boxShadow: '0 2px 5px rgba(0,0,0,0.02)'
                    }}
                    className="chatbot-pill-btn"
                  >
                    {option}
                  </button>
                ))}
              </div>
            )}

            {chatStep === 5 && !isBotTyping && (
              <div className="quick-options" style={{ padding: '0.6rem 1.5rem', background: '#F8FAFC', display: 'flex', justifyContent: 'flex-end', borderTop: '1px solid rgba(0,0,0,0.03)' }}>
                <button
                  onClick={() => handleChatSubmit(null, 'Skipped')}
                  style={{
                    background: '#94A3B8',
                    border: 'none',
                    borderRadius: '99px',
                    padding: '0.45rem 1.2rem',
                    color: '#ffffff',
                    fontSize: '0.8rem',
                    fontWeight: '600',
                    cursor: 'pointer',
                    transition: 'all 0.2s',
                    boxShadow: '0 2px 5px rgba(0,0,0,0.05)'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#64748B'}
                  onMouseLeave={(e) => e.target.style.background = '#94A3B8'}
                >
                  Skip Step
                </button>
              </div>
            )}

            <form onSubmit={(e) => handleChatSubmit(e)} style={{
              display: 'flex',
              borderTop: '1px solid rgba(0, 82, 255, 0.08)',
              background: '#ffffff',
              padding: '0.85rem 1.25rem',
              alignItems: 'center',
              gap: '0.5rem'
            }}>
              <input
                type="text"
                value={chatInput}
                onChange={(e) => setChatInput(e.target.value)}
                placeholder={
                  chatStep === 0 ? "Type your name..." :
                  chatStep === 1 ? "Type your work email..." :
                  chatStep === 2 ? "Specify custom service..." :
                  chatStep === 3 ? "Specify budget range..." :
                  chatStep === 4 ? "Describe requirements..." :
                  chatStep === 5 ? "Enter phone number..." :
                  "Reviewing specifications..."
                }
                disabled={chatStep >= 6 || isBotTyping}
                style={{
                  flexGrow: '1',
                  border: 'none',
                  outline: 'none',
                  fontSize: '0.9rem',
                  color: 'var(--text-dark)',
                  background: 'none'
                }}
              />
              <button
                type="submit"
                disabled={chatStep >= 6 || isBotTyping}
                style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--primary-color)',
                  cursor: 'pointer',
                  fontSize: '1.3rem',
                  display: 'flex',
                  alignItems: 'center',
                  opacity: chatStep >= 6 || isBotTyping ? '0.3' : '1',
                  transition: 'transform 0.2s'
                }}
                onMouseEnter={(e) => { if (chatStep < 6 && !isBotTyping) e.target.style.transform = 'translateX(2px)' }}
                onMouseLeave={(e) => { e.target.style.transform = 'none' }}
              >
                ➡️
              </button>
            </form>
          </div>
        )}

        {showChatTooltip && !isChatOpen && (
          <div className="chatbot-tooltip reveal visible" style={{
            position: 'absolute',
            right: '80px',
            bottom: '12px',
            background: 'var(--bg-white)',
            border: '1.5px solid var(--primary-color)',
            borderRadius: '16px',
            padding: '0.85rem 1.25rem',
            boxShadow: '0 8px 25px rgba(0, 82, 255, 0.12)',
            whiteSpace: 'normal',
            width: 'max-content',
            maxWidth: '280px',
            display: 'flex',
            alignItems: 'center',
            gap: '0.75rem',
            animation: 'chatbotPulse 2s infinite ease-in-out',
            zIndex: '9998'
          }}>
            <span style={{ fontSize: '0.9rem', fontWeight: '700', color: 'var(--text-dark)' }}>
              {displayedTooltipText}
              <span className="typewriter-cursor" style={{ fontWeight: 'normal', color: 'var(--primary-color)', marginLeft: '2px', animation: 'cursorBlink 0.8s infinite' }}>|</span>
            </span>
            <button
              onClick={(e) => {
                e.stopPropagation()
                setShowChatTooltip(false)
                setTimeout(() => {
                  setShowChatTooltip(true)
                }, 10000)
              }}
              style={{
                background: 'none',
                border: 'none',
                color: 'var(--text-muted)',
                cursor: 'pointer',
                fontSize: '0.9rem',
                fontWeight: '700',
                padding: '0 2px'
              }}
            >
              ×
            </button>
            <div style={{
              position: 'absolute',
              right: '-8px',
              bottom: '20px',
              width: '12px',
              height: '12px',
              background: 'var(--bg-white)',
              borderRight: '1.5px solid var(--primary-color)',
              borderTop: '1.5px solid var(--primary-color)',
              transform: 'rotate(45deg)'
            }} />
          </div>
        )}

        <button
          onClick={() => {
            setIsChatOpen(!isChatOpen)
            setShowChatTooltip(false)
          }}
          className={`chatbot-trigger-btn ${isChatOpen ? 'active' : ''}`}
          aria-label="Chat with SynXBot"
          style={{
            width: '64px',
            height: '64px',
            borderRadius: '50%',
            background: 'linear-gradient(135deg, var(--primary-color), #002D8F)',
            color: '#ffffff',
            border: 'none',
            cursor: 'pointer',
            boxShadow: '0 8px 30px rgba(0, 82, 255, 0.3)',
            display: 'grid',
            placeItems: 'center',
            fontSize: '2.4rem',
            transition: 'all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
          }}
        >
          {isChatOpen ? '💬' : '🤖'}
        </button>
      </div> */}

      {/* ===== FLOATING WHATSAPP CHAT BUTTON ===== */}
      <a
        href="https://wa.me/918972209802"
        target="_blank"
        rel="noopener noreferrer"
        className="whatsapp-float-btn"
        aria-label="Chat on WhatsApp"
      >
        <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
          <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.262 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.502-5.717-1.456L0 24zm6.59-4.846c1.6.95 3.188 1.449 4.825 1.451 5.436 0 9.86-4.37 9.864-9.799.002-2.63-1.023-5.101-2.885-6.97C16.388 2.017 13.916.99 11.288.99c-5.457 0-9.882 4.374-9.886 9.804-.001 1.734.475 3.424 1.378 4.92L1.722 21.8l6.234-1.614c.952-.256 1.952-.392 2.96-.392zm8.783-7.202c-.244-.122-1.44-.71-1.662-.792-.222-.082-.383-.122-.544.122-.162.244-.627.792-.769.954-.142.162-.284.183-.528.061-.244-.122-1.03-.38-1.961-1.21-.724-.646-1.213-1.444-1.355-1.688-.142-.244-.015-.376.107-.497.11-.11.244-.284.365-.426.122-.142.162-.244.244-.406.082-.162.041-.304-.02-.426-.062-.122-.544-1.31-.746-1.795-.197-.474-.399-.41-.544-.417-.14-.007-.3-.008-.46-.008-.162 0-.426.061-.649.304-.222.244-.85.83-.85 2.027 0 1.196.87 2.35 1.01 2.533.142.183 1.71 2.61 4.14 3.657.579.25 1.03.398 1.38.51.58.185 1.11.159 1.53.096.467-.07 1.44-.588 1.642-1.156.203-.568.203-1.055.142-1.156-.06-.101-.222-.162-.466-.284z" />
        </svg>
      </a>

      {/* ===== POPUP CONTACT/BOOKING MODAL ===== */}
      {isModalOpen && (
        <div className="modal-backdrop" onClick={closeModal}>
          <div className={`modal-card ${modalType === 'project_detail' ? 'modal-card-wide' : ''}`} onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-btn" onClick={closeModal} aria-label="Close modal">
              <Icon name="close" size={18} />
            </button>

            <div className="modal-header">
              {modalType === 'discovery' && <h2>Book a Discovery Call</h2>}
              {modalType === 'strategy' && <h2>Book a Strategy Call</h2>}
              {modalType === 'project' && <h2>Start Your Project</h2>}
              {modalType === 'clients' && <h2>Our Esteemed Clients</h2>}
              {modalType === 'careers_apply' && <h2>Apply for {selectedJob ? selectedJob.title : 'Position'}</h2>}
              {modalType === 'project_detail' && selectedProject && <h2>Case Study: {selectedProject.title}</h2>}
              
              {modalType !== 'clients' && modalType !== 'project_detail' ? (
                <p>
                  {modalType === 'careers_apply'
                    ? 'Please share your details and links to your resume/portfolio below.'
                    : 'Fill out the form below and our technical leads will reach out to you within 12 hours.'}
                </p>
              ) : modalType === 'project_detail' && selectedProject ? (
                <p style={{ color: 'var(--primary-color)', fontWeight: '600', textTransform: 'uppercase', letterSpacing: '0.05em', fontSize: '0.85rem', marginTop: '0.25rem' }}>{selectedProject.tag}</p>
              ) : (
                <p>Meet some of the industry leaders who trust SynXCloud for their digital transformation.</p>
              )}
            </div>

            {modalType === 'project_detail' && selectedProject ? (
              <div className="project-details-grid">
                <div className="project-details-media">
                  <img src={selectedProject.image} alt={selectedProject.title} className="project-details-hero" />
                </div>
                <div className="project-details-info">
                  <div className="project-details-section">
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>The Challenge</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{selectedProject.challenge}</p>
                  </div>
                  <div className="project-details-section">
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Our Solution</h3>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: '1.6' }}>{selectedProject.solution}</p>
                  </div>
                  <div className="project-details-section">
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Technologies Used</h3>
                    <div className="portfolio-card-tech" style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '0.5rem' }}>
                      {selectedProject.stack.map((tech, i) => (
                        <span key={i} className="stack-tag" style={{ background: 'var(--surface-light)', border: '1px solid var(--border-color)', borderRadius: '4px', padding: '0.25rem 0.6rem', fontSize: '0.75rem', color: 'var(--text-dark)' }}>{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-details-section">
                    <h3 style={{ fontSize: '1.2rem', color: 'var(--text-dark)', marginBottom: '0.5rem' }}>Business Impact</h3>
                    <div style={{ display: 'flex', gap: '2rem', marginTop: '0.75rem' }}>
                      {selectedProject.stats.map((stat, i) => (
                        <div key={i} className="project-stat-block" style={{ display: 'flex', flexDirection: 'column' }}>
                          <span className="proj-stat-val" style={{ fontSize: '1.6rem', fontWeight: '700', color: 'var(--primary-color)' }}>{stat.val}</span>
                          <span className="proj-stat-lbl" style={{ fontSize: '0.85rem', color: 'var(--text-muted)' }}>{stat.lbl}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : modalType === 'clients' ? (
              <div className="client-profiles-list" style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', marginTop: '1rem' }}>
                {TESTIMONIALS.map((t, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem', padding: '1rem', background: 'var(--surface-color)', borderRadius: '12px', border: '1px solid var(--border-color)' }}>
                    <img src={t.avatar} alt={t.name} style={{ width: '60px', height: '60px', borderRadius: '50%', objectFit: 'cover' }} />
                    <div>
                      <h4 style={{ margin: '0 0 0.25rem 0', color: 'var(--text-color)' }}>{t.name}</h4>
                      <p style={{ margin: '0', fontSize: '0.85rem', color: 'var(--text-muted)' }}>{t.role}</p>
                      <div style={{ marginTop: '0.5rem', display: 'flex', gap: '0.2rem' }}>
                        {Array.from({ length: 5 }).map((_, i) => (
                          <span key={i} className="star-gold" style={{ fontSize: '12px' }}>★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : formStatus === 'success' ? (
              <div className="modal-success-screen">
                <div className="success-icon-check">✓</div>
                <h3>{modalType === 'careers_apply' ? 'Application Submitted!' : 'Message Sent Successfully!'}</h3>
                <p>Thank you for reaching out. We will connect with you shortly.</p>
              </div>
            ) : modalType === 'careers_apply' ? (
              <form ref={formRef} onSubmit={handleFormSubmit} className="modal-form">
                <input type="hidden" name="subject" value={`SynXCloud - Careers Application - ${selectedJob ? selectedJob.title : 'General'}`} />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="user_name">Full Name</label>
                    <input type="text" id="user_name" name="user_name" placeholder="Rahul Sharma" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_email">Email Address</label>
                    <input type="email" id="user_email" name="user_email" placeholder="rahul@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="portfolio">Resume / Portfolio Link</label>
                    <input type="url" id="portfolio" name="portfolio" placeholder="https://github.com/rahul" required />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="message">Why do you want to join SynXCloud?</label>
                  <textarea id="message" name="message" placeholder="Briefly describe your experience and why you are a good fit for this role..." rows="4" required />
                </div>

                <button type="submit" className="btn btn-primary btn-block btn-lg" disabled={formStatus === 'Sending...'}>
                  {formStatus === 'Sending...' ? 'Submitting Application...' : 'Submit Application'}
                  <Icon name="arrowRight" size={16} />
                </button>

                {formStatus === 'error' && (
                  <div className="form-error-msg">
                    Unable to submit the application. Please try again later or contact us at info@synxcloud.in.
                  </div>
                )}
              </form>
            ) : (
              <form ref={formRef} onSubmit={handleFormSubmit} className="modal-form">
                <input type="hidden" name="subject" value={`SynXCloud - ${modalType.toUpperCase()} Request`} />

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="user_name">Full Name</label>
                    <input type="text" id="user_name" name="user_name" placeholder="Rahul Sharma" required />
                  </div>
                  <div className="form-group">
                    <label htmlFor="user_email">Work Email</label>
                    <input type="email" id="user_email" name="user_email" placeholder="rahul@example.com" required />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number (Optional)</label>
                    <input type="tel" id="phone" name="phone" placeholder="+91 98765 43210" />
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
