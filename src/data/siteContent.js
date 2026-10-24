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
    location: "Kolkata, India / Global Remote Delivery",
    hours: "24/7 Global Engineering Delivery",
    ndaGuaranteed: true
  },
  socials: {
    linkedin: "https://www.linkedin.com/company/synxcloud/",
    facebook: "https://www.facebook.com/people/Synxcloud/61589674294047/",
    github: "https://github.com/synxcloud",
    twitter: "https://twitter.com/synxcloud"
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
    id: "cloud-infrastructure",
    slug: "cloud-infrastructure",
    name: "Cloud & DevOps Architecture",
    badge: "Flagship Practice",
    themeColor: "#ea580c", // Pillar 1 Accent (Orange)
    themeLight: "#fef3c7",
    themeDark: "#b45309",
    themeBorder: "#fed7aa",
    icon: "Cloud",
    tagline: "High-availability multi-cloud migrations, Kubernetes & FinOps.",
    longDesc: "Enterprise-grade cloud engineering engineered for zero downtime, resilient container orchestration, and continuous security compliance across AWS, Azure, and Google Cloud.",
    stats: [
      { label: "Uptime SLA", value: "99.99%" },
      { label: "Cost Savings", value: "Up to 45%" },
      { label: "Migration Speed", value: "2x Faster" }
    ],
    subservices: [
      {
        slug: "aws-azure-migration",
        title: "Multi-Cloud Migration Services",
        desc: "Zero-downtime infrastructure transition to AWS, Azure, and OCI.",
        capabilities: [
          "Cloud Readiness Assessment & Roadmap",
          "Automated Database Replatforming",
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
        title: "DevSecOps & CI/CD Automation",
        desc: "Continuous integration, automated security audits, and compliance as code.",
        capabilities: [
          "Automated Vulnerability & SAST/DAST Scans",
          "Infrastructure as Code (Terraform/Ansible)",
          "SOC2 & ISO 27001 Compliance Guardrails",
          "Automated Rollback & Canary Releases"
        ],
        techStack: ["GitHub Actions", "GitLab CI", "Terraform", "Snyk", "SonarQube"]
      },
      {
        slug: "finops-monitoring",
        title: "FinOps & 24/7 Observability",
        desc: "Real-time telemetry, automated cost containment, and rapid incident response.",
        capabilities: [
          "Prometheus & Grafana Enterprise Telemetry",
          "Multi-Cloud Spend Anomaly Detection",
          "SLA-Guaranteed 24/7 L3 Escalation",
          "Self-Healing Alerting Runbooks"
        ],
        techStack: ["Prometheus", "Grafana", "AWS Cost Explorer", "PagerDuty", "OpenTelemetry"]
      }
    ]
  },
  {
    id: "bespoke-software",
    slug: "software-engineering",
    name: "Full-Stack Software Engineering",
    badge: "Core Engineering",
    themeColor: "#2563eb", // Pillar 2 Accent (Blue)
    themeLight: "#dbeafe",
    themeDark: "#1e40af",
    themeBorder: "#bfdbfe",
    icon: "Code",
    tagline: "Cloud-native web applications, mobile platforms & high-throughput APIs.",
    longDesc: "End-to-end bespoke product development utilizing modern TypeScript, React, Next.js, Python, and Go for high-velocity software delivery.",
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
          "React & TypeScript Frontends",
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
    id: "intelligent-automation",
    slug: "ai-automation",
    name: "Autonomous AI & Workflow Automation",
    badge: "AI-First Pillar",
    themeColor: "#7c3aed", // Pillar 3 Accent (Purple)
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
  }
];

export const metricsData = [
  { label: "Uptime Delivered", value: "99.99%", sub: "Enterprise SLA standard" },
  { label: "Cloud Migrations", value: "300+", sub: "Zero-downtime cutovers" },
  { label: "Enterprise Clients", value: "120+", sub: "Across 14 countries" },
  { label: "Managed Support", value: "24/7", sub: "Dedicated L3 engineers" }
];
