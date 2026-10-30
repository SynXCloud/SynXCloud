// src/data/siteContent.js
// MASTER CONTENT ADAPTER: Global brand configurations, pillars, and metrics

export const brandConfig = {
  companyName: "SynXCloud Consultancy Services",
  legalName: "SynXCloud Consultancy Services Ltd.",
  tagline: "Cloud Native Solutions, Autonomous Systems & Enterprise Engineering",
  description: "SynXCloud Consultancy Services partners with high-growth startups and global enterprises to engineer resilient multi-cloud architectures, bespoke full-stack software, and autonomous AI automation.",
  logoLight: "/synxcloud-logo-zoomed.png",
  logoDark: "/synxcloud-logo-zoomed.png",
  contact: {
    email: "info@synxcloud.in",
    phone: "+91 8972209802",
    whatsapp: "+91 8972209802",
    whatsappClean: "918972209802",
    whatsappUrl: "https://wa.me/918972209802?text=Hello%20SynXCloud!%20I%20would%20like%20to%20enquire%20about%20a%20project.",
    location: "Kolkata, India / Global Remote Delivery",
    hours: "24/7 Global Engineering Delivery",
    ndaGuaranteed: true,
    responseSla: "Within 4 Business Hours (or < 15 mins via WhatsApp)",
    commitments: {
      instantReply: "< 15 Mins via WhatsApp",
      emailAcknowledgment: "Within 4 Business Hours",
      ndaTurnaround: "Immediate with First Response",
      technicalScoping: "Within 24 Hours",
      milestoneRoadmap: "Within 48 Hours"
    }
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/synxcloud/",
    facebook: "https://www.facebook.com/people/Synxcloud/61589674294047/",
    github: "https://github.com/synxcloud",
    twitter: "https://twitter.com/synxcloud",
    whatsapp: "https://wa.me/918972209802?text=Hello%20SynXCloud!%20I%20would%20like%20to%20enquire%20about%20a%20project."
  },
  team: [
    {
      name: "Karan Purkait",
      role: "Founder & CEO",
      bio: "Software engineer and system designer with a passion for building scalable, high-performance web applications and cloud architecture.",
      image: "/karan_purkait.jpg",
      linkedin: "https://www.linkedin.com/in/karan-purkait/"
    },
    {
      name: "Shuvadeep Mondal",
      role: "Co-Founder & COO",
      bio: "Operations strategist focused on streamlining delivery workflows, scaling organizational capability, and managing global client relations.",
      image: "/shuvadeep_mondal.jpg",
      linkedin: "https://www.linkedin.com/in/shuvadeepmondal/"
    },
    {
      name: "Puskar Roy",
      role: "Co-Founder & CTO",
      bio: "Full-stack engineer and cloud developer specialized in scalable systems, Kubernetes orchestration, and robust backend services.",
      image: "/puskar_roy.jpg",
      linkedin: "https://www.linkedin.com/in/puskar-roy/"
    }
  ]
};

export const servicePillars = [
  {
    id: "software-engineering",
    slug: "software-engineering",
    name: "Full-Stack Software Engineering",
    badge: "Main Sales Offering",
    isMainOffering: true,
    offeringTier: 1,
    themeColor: "#2563eb", // Blue
    themeLight: "#dbeafe",
    themeDark: "#1e40af",
    themeBorder: "#bfdbfe",
    icon: "Code",
    tagline: "Cloud-native web applications, mobile platforms & high-throughput APIs.",
    longDesc: "End-to-end bespoke software engineering utilizing modern React 19, Next.js, Node.js, Python, and Go for high-velocity software delivery.",
    stats: [
      { label: "Deployment Velocity", value: "3x Faster" },
      { label: "Concurrent Users", value: "100k+" },
      { label: "Code Coverage", value: "95%+" }
    ],
    subservices: [
      {
        slug: "web-apps",
        title: "Modern Web Applications",
        desc: "High-scale React, Next.js, and serverless backend systems.",
        capabilities: [
          "React 19 & TypeScript Frontends",
          "High-Throughput GraphQL & REST APIs",
          "Distributed Edge Caching & SSR",
          "Micro-Frontend Architecture"
        ],
        techStack: ["React 19", "Next.js", "TypeScript", "TailwindCSS", "Node.js", "PostgreSQL"]
      },
      {
        slug: "mobile-apps",
        title: "Mobile App Development",
        desc: "Cross-platform iOS and Android apps built with React Native and Flutter.",
        capabilities: [
          "Native Device APIs & Background Sync",
          "Offline-First Architecture with SQLite",
          "Push Notification Workflows",
          "App Store & Play Store Compliance"
        ],
        techStack: ["React Native", "Flutter", "TypeScript", "Firebase", "Redux Toolkit"]
      },
      {
        slug: "saas-platforms",
        title: "Enterprise SaaS Platforms",
        desc: "Multi-tenant platforms with subscription billing, RBAC, and analytics.",
        capabilities: [
          "Multi-Tenant Database Isolation",
          "Stripe & Merchant Payment Workflows",
          "Granular Role-Based Access Controls",
          "Real-time Dashboards & Event Logs"
        ],
        techStack: ["Next.js", "NestJS", "Prisma", "Stripe", "Redis", "Docker"]
      },
      {
        slug: "api-microservices",
        title: "High-Throughput APIs & Services",
        desc: "Event-driven microservices engineered for millions of daily transactions.",
        capabilities: [
          "Kafka & RabbitMQ Messaging",
          "Distributed Redis Caching",
          "gRPC & WebSockets Real-Time Sync",
          "API Gateway & Rate Limiting"
        ],
        techStack: ["Go", "Node.js", "Apache Kafka", "Redis", "PostgreSQL", "Docker"]
      }
    ]
  },
  {
    id: "ai-automation",
    slug: "ai-automation",
    name: "Autonomous AI & Workflow Automation",
    badge: "Main Sales Offering",
    isMainOffering: true,
    offeringTier: 2,
    themeColor: "#7c3aed", // Purple
    themeLight: "#ede9fe",
    themeDark: "#6d28d9",
    themeBorder: "#ddd6fe",
    icon: "Cpu",
    tagline: "Agentic AI workflows, LLM orchestration, and enterprise document triage.",
    longDesc: "Transforming enterprise processes into self-healing, autonomous cognitive systems using multi-agent frameworks, proprietary vector indices, and private models.",
    stats: [
      { label: "Manual Effort Reduction", value: "78%" },
      { label: "Query Accuracy", value: "99.4%" },
      { label: "Time-to-Value", value: "4 Weeks" }
    ],
    subservices: [
      {
        slug: "agentic-ai",
        title: "Agentic AI Systems",
        desc: "Autonomous reasoning agents integrated into existing enterprise databases.",
        capabilities: [
          "Multi-Agent Orchestration & Planning",
          "Enterprise RAG & Private Knowledge Bases",
          "Autonomous Data Extraction & Triage",
          "Human-in-the-Loop Safeguards & Audit Logs"
        ],
        techStack: ["LangChain", "LlamaIndex", "Claude API", "OpenAI", "Pinecone", "Python"]
      },
      {
        slug: "rag-knowledge-bases",
        title: "Enterprise RAG & Knowledge Hubs",
        desc: "Instant, accurate question answering grounded in your internal documentation.",
        capabilities: [
          "Vector Database Ingestion & Chunking",
          "Hybrid Semantic & Keyword Search",
          "Private PDF, Notion & Confluence Parsers",
          "Strict Access-Level Filtering"
        ],
        techStack: ["Pinecone", "Milvus", "LangChain", "FastAPI", "Python", "React"]
      },
      {
        slug: "document-processing",
        title: "Intelligent Document Processing",
        desc: "Automated OCR extraction, classification, and ERP synchronization.",
        capabilities: [
          "Invoice & Contract Field Parsing",
          "Multi-Lingual Document Translation",
          "Fraud & Anomaly Detection",
          "Direct SAP & Salesforce Webhooks"
        ],
        techStack: ["AWS Textract", "Python", "OpenCV", "Transformers", "PostgreSQL"]
      },
      {
        slug: "ai-chatbots",
        title: "Conversational AI & Support Agents",
        desc: "24/7 autonomous support bots with sentiment analysis and ticketing escalation.",
        capabilities: [
          "Omnichannel WhatsApp, Web & Slack",
          "Real-Time Sentiment Monitoring",
          "Automated Zendesk & Jira Ticket Creation",
          "Context-Aware Fallback to Human Leads"
        ],
        techStack: ["React", "WebSockets", "Node.js", "GPT-4o", "Zendesk API"]
      }
    ]
  },
  {
    id: "cloud-infrastructure",
    slug: "cloud-infrastructure",
    name: "Cloud & DevOps",
    badge: "Main Sales Offering",
    isMainOffering: true,
    offeringTier: 3,
    themeColor: "#ea580c", // Orange
    themeLight: "#fef3c7",
    themeDark: "#b45309",
    themeBorder: "#fed7aa",
    icon: "Cloud",
    tagline: "Deployment pipelines, multi-cloud infrastructure & 24/7 maintenance.",
    longDesc: "Enterprise-grade cloud engineering for continuous deployment, resilient container orchestration, FinOps optimization, and proactive 24/7 cloud maintenance across AWS, Azure, and Google Cloud.",
    stats: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Cost Savings", value: "Up to 45%" },
      { label: "Migration Speed", value: "2x Faster" }
    ],
    subservices: [
      {
        slug: "aws-azure-migration",
        title: "Cloud Infrastructure & Deployment",
        desc: "Zero-downtime infrastructure transition and automated cloud deployment to AWS, Azure, and OCI.",
        capabilities: [
          "Cloud Readiness Assessment & Roadmap",
          "Automated Terraform Infrastructure as Code",
          "Zero-Downtime Data Synchronization",
          "FinOps Cost Optimization"
        ],
        techStack: ["AWS", "Azure", "Terraform", "PostgreSQL", "Docker", "Datadog"]
      },
      {
        slug: "kubernetes-orchestration",
        title: "Kubernetes & Microservices",
        desc: "Hardened cluster deployments, GitOps CI/CD pipelines, and service mesh.",
        capabilities: [
          "Production Cluster Hardening & RBAC",
          "Helm & ArgoCD GitOps Pipelines",
          "Istio & Linkerd Zero-Trust Mesh",
          "Auto-scaling & Disaster Recovery"
        ],
        techStack: ["Kubernetes", "EKS", "GKE", "ArgoCD", "Istio", "Helm"]
      },
      {
        slug: "devsecops-cicd",
        title: "DevSecOps & Deployment Pipelines",
        desc: "Continuous integration, automated deployment gates, and automated security scans.",
        capabilities: [
          "Automated Vulnerability & SAST/DAST Scans",
          "Infrastructure as Code (Terraform/Ansible)",
          "SOC2 & ISO 27001 Compliance Guardrails",
          "Automated Rollback & Canary Releases"
        ],
        techStack: ["GitHub Actions", "GitLab CI", "Terraform", "Snyk", "SonarQube"]
      },
      {
        slug: "cloud-maintenance",
        title: "24/7 Cloud Maintenance & SRE",
        desc: "Real-time telemetry, automated backups, OS patching, and rapid incident response.",
        capabilities: [
          "Prometheus & Grafana Enterprise Telemetry",
          "Multi-Cloud Spend Anomaly Detection",
          "SLA-Guaranteed 24/7 L3 Escalation",
          "Automated Backups & Self-Healing Runbooks"
        ],
        techStack: ["Prometheus", "Grafana", "AWS Cost Explorer", "PagerDuty", "OpenTelemetry"]
      }
    ]
  },
  {
    id: "digital-marketing",
    slug: "digital-marketing",
    name: "Digital Marketing & Growth Engineering",
    badge: "Growth Practice",
    isMainOffering: false,
    offeringTier: 4,
    themeColor: "#059669", // Emerald
    themeLight: "#d1fae5",
    themeDark: "#047857",
    themeBorder: "#a7f3d0",
    icon: "TrendingUp",
    tagline: "Performance marketing, technical SEO, conversion rate optimization & funnels.",
    longDesc: "Data-driven growth engineering for B2B tech and high-growth brands. We scale paid acquisition, dominate organic search through technical SEO, and build high-converting funnel landing pages.",
    stats: [
      { label: "Pipeline Growth", value: "+280%" },
      { label: "CAC Reduction", value: "38% Lower" },
      { label: "Conversion Lift", value: "2.4x" }
    ],
    subservices: [
      {
        slug: "technical-seo",
        title: "Technical SEO & Search Dominance",
        desc: "Core Web Vitals optimization, programmatic SEO architecture, and high-intent keyword dominance.",
        capabilities: [
          "Core Web Vitals & PageSpeed Architecture",
          "Programmatic Landing Page SEO",
          "High-Intent Commercial Keyword Mapping",
          "Technical Site Crawl Audits & Schema Markup"
        ],
        techStack: ["Google Search Console", "Ahrefs", "Semrush", "Next.js SSR", "Schema.org"]
      },
      {
        slug: "paid-acquisition",
        title: "Performance Paid Acquisition",
        desc: "High-ROI Google Ads, LinkedIn B2B campaigns, and Meta advertising engineered for qualified lead capture.",
        capabilities: [
          "Google Search & Intent-Based B2B Ads",
          "LinkedIn Account-Based Marketing (ABM)",
          "Audience Retargeting & Meta Remarketing",
          "Automated ROAS Tracking & Bid Sizing"
        ],
        techStack: ["Google Ads", "LinkedIn Ads", "Meta Pixel", "HubSpot", "Google Analytics 4"]
      },
      {
        slug: "cro-funnels",
        title: "Conversion Rate Optimization (CRO)",
        desc: "High-velocity landing page funnels, multi-variate A/B split testing, and user drop-off teardowns.",
        capabilities: [
          "Frictionless Lead Magnet Funnels",
          "Multi-Variant A/B Split Testing",
          "Heatmap Tracking & Drop-Off Audits",
          "Interactive Calculators & Demo Widgets"
        ],
        techStack: ["Hotjar", "VWO", "Google Optimize", "React", "TailwindCSS"]
      },
      {
        slug: "content-nurturing",
        title: "B2B Content & Lead Nurturing",
        desc: "High-authority technical playbooks, automated email drip sequences, and sales pipeline integration.",
        capabilities: [
          "Automated Drip Email Campaigns",
          "Technical Whitepapers & Case Study Funnels",
          "HubSpot & ActiveCampaign CRM Setup",
          "Lead Scoring & Sales Pipeline Hand-Off"
        ],
        techStack: ["HubSpot", "ActiveCampaign", "Klaviyo", "Postmark", "Zapier"]
      }
    ]
  },
  {
    id: "tech-staffing",
    slug: "tech-staffing",
    name: "Tech Staffing & Dedicated Engineering Pods",
    badge: "Staffing Practice",
    isMainOffering: false,
    offeringTier: 5,
    themeColor: "#db2777", // Rose/Pink
    themeLight: "#fce7f3",
    themeDark: "#be185d",
    themeBorder: "#fbcfe8",
    icon: "Users",
    tagline: "Pre-vetted senior software developers, DevOps engineers & AI specialists in 48h.",
    longDesc: "Scale your engineering capacity without recruitment delays or hiring overhead. We provide elite, pre-screened senior engineers and dedicated autonomous squads on flexible monthly retainers.",
    stats: [
      { label: "Deployment Time", value: "48 – 72 Hrs" },
      { label: "Client Retention", value: "98.4%" },
      { label: "Recruiting Savings", value: "Up to 50%" }
    ],
    subservices: [
      {
        slug: "dedicated-pods",
        title: "Dedicated Engineering Pods",
        desc: "Autonomous cross-functional squads (Tech Lead, Senior Developers, QA) dedicated exclusively to your roadmap.",
        capabilities: [
          "Complete Autonomous Squad Assembly",
          "Direct Daily Slack/Teams Standups",
          "Sprint Milestone Velocity Tracking",
          "Zero Employer Overhead or Severance"
        ],
        techStack: ["React", "Node.js", "Python", "Kubernetes", "AWS", "Jira", "GitHub"]
      },
      {
        slug: "staff-augmentation",
        title: "Senior Staff Augmentation",
        desc: "Seamlessly embed elite full-stack, frontend, and backend developers directly into your existing sprints.",
        capabilities: [
          "Top 3% Pre-Vetted Senior Engineers",
          "Direct Technical & Cultural Fit",
          "Timezone Overlap with US, UK & Europe",
          "Two-Week Risk-Free Trial Period"
        ],
        techStack: ["TypeScript", "Next.js", "Go", "Python", "React Native", "PostgreSQL"]
      },
      {
        slug: "cloud-devops-staffing",
        title: "Cloud & DevOps Contract Specialists",
        desc: "Certified AWS, Azure, and Kubernetes engineers for urgent infrastructure builds and on-call rotations.",
        capabilities: [
          "Certified AWS Solutions Architects",
          "Kubernetes & Terraform Engineers",
          "CI/CD Migration Specialists",
          "24/7 On-Call Infrastructure Support"
        ],
        techStack: ["AWS", "Kubernetes", "Terraform", "Docker", "GitLab CI", "Datadog"]
      },
      {
        slug: "ai-specialist-staffing",
        title: "AI & ML Specialist Placement",
        desc: "Prompt engineers, LangChain/RAG specialists, and ML pipeline architects for rapid AI product launches.",
        capabilities: [
          "LangChain & LlamaIndex Specialists",
          "Private Fine-Tuning & RAG Engineers",
          "Vector Database Architecture",
          "AI Product Prototyping in Sprints"
        ],
        techStack: ["Python", "FastAPI", "Pinecone", "Claude", "OpenAI", "PyTorch"]
      }
    ]
  }
];

export const metricsData = [
  { label: "Uptime Delivered", value: "99.99%", sub: "Enterprise SLA standard" },
  { label: "Cloud Migrations", value: "300+", sub: "Zero-downtime cutovers" },
  { label: "Enterprise Clients", value: "120+", sub: "Across 14 countries" },
  { label: "Managed Support", value: "24/7", sub: "Dedicated L3 engineers" }
];
