// src/data/careersData.js
// Dual intent: Staff augmentation models + Open careers hiring

export const engagementModels = [
  {
    id: "dedicated-team",
    title: "Dedicated Engineering Pod",
    badge: "Most Popular",
    tagline: "Autonomous full-stack squad dedicated 100% to your product roadmap.",
    bestFor: "High-growth startups & scaleups building complex multi-quarter features.",
    features: [
      "Senior Full-Stack Developers, DevOps Engineer & Tech Lead",
      "Seamless integration into your Jira, Slack & GitHub workflows",
      "Timezone overlap guaranteed (minimum 4-6 hours daily)",
      "Zero recruitment, benefits, or hardware procurement overhead",
      "Scale up or ramp down team size with 30 days notice"
    ],
    ctaText: "Hire a Dedicated Pod"
  },
  {
    id: "time-and-materials",
    title: "Flexible Staff Augmentation",
    badge: "Agile Extension",
    tagline: "Inject specialized senior specialists directly into your existing in-house teams.",
    bestFor: "Teams needing niche expertise (Kubernetes, AI Agentic RAG, FinOps).",
    features: [
      "Top 1% vetted senior engineers available within 48 hours",
      "Hourly or monthly sprint-based billing with transparent timesheets",
      "Direct code commits into your repositories with PR reviews",
      "Immediate knowledge transfer and architecture documentation",
      "No long-term commitments; pause or terminate whenever needed"
    ],
    ctaText: "Request Staff Augmentation"
  },
  {
    id: "fixed-scope-delivery",
    title: "Fixed-Scope Milestone Project",
    badge: "Guaranteed SLA",
    tagline: "End-to-end milestone delivery with fixed budget and strict timeline commitment.",
    bestFor: "Cloud migrations, MVPs, compliance audits, or legacy modernization.",
    features: [
      "Rigorous technical specification and architecture blueprint upfront",
      "Milestone-based payment schedule tied to accepted deliverables",
      "Dedicated Project Manager providing bi-weekly sprint demos",
      "Comprehensive post-launch warranty and bug-fix SLA included",
      "Clear IP ownership transfer upon project sign-off"
    ],
    ctaText: "Scope Your Project"
  }
];

export const openJobs = [
  {
    id: "lead-devops-engineer",
    title: "Lead Cloud & Kubernetes Architect",
    department: "Cloud & DevOps",
    location: "Remote / Hybrid (India / Global)",
    type: "Full-Time",
    experience: "5+ Years",
    salary: "$40,000 - $75,000 / ₹25L - ₹45L",
    requirements: [
      "Deep expertise with AWS/Azure enterprise architectures and Terraform IaC.",
      "Proven track record deploying and managing production Kubernetes clusters (EKS/GKE).",
      "Experience with Istio service mesh, Prometheus/Grafana telemetry, and ArgoCD GitOps.",
      "Strong background in cloud cost optimization (FinOps) and DevSecOps compliance."
    ]
  },
  {
    id: "senior-fullstack-engineer",
    title: "Senior Full-Stack Engineer (React 19 / Go / Node)",
    department: "Software Engineering",
    location: "Remote",
    type: "Full-Time",
    experience: "4+ Years",
    salary: "$35,000 - $65,000 / ₹20L - ₹38L",
    requirements: [
      "Mastery of modern React, TypeScript, Next.js, and serverless distributed architectures.",
      "Strong backend capabilities in Go, Node.js, and relational database tuning (PostgreSQL).",
      "Experience with high-throughput event streaming (Kafka/RabbitMQ) and distributed caching.",
      "Obsession with performance: sub-second page loads, bundle optimization, and clean code."
    ]
  },
  {
    id: "ai-solutions-architect",
    title: "Autonomous AI & RAG Solutions Architect",
    department: "Artificial Intelligence",
    location: "Remote",
    type: "Full-Time",
    experience: "3+ Years",
    salary: "$45,000 - $80,000 / ₹28L - ₹50L",
    requirements: [
      "Production experience building Agentic LLM workflows using LangChain, LlamaIndex, or CrewAI.",
      "Deep familiarity with vector databases (Pinecone, Qdrant, Milvus) and embedding techniques.",
      "Proficiency in Python, FastAPI, Docker, and prompt engineering with evaluation benchmarks.",
      "Demonstrated ability to implement strict enterprise guardrails and hallucination mitigations."
    ]
  },
  {
    id: "business-development-executive",
    title: "Business Development & Enterprise Partnerships Lead",
    department: "Sales & Growth",
    location: "Remote",
    type: "Full-Time / Flexible",
    experience: "2+ Years",
    salary: "Base + High-Incentive Commission",
    requirements: [
      "Proven track record in international B2B tech consulting or custom software sales.",
      "Exceptional verbal and written communication; ability to talk architecture with CTOs.",
      "Experience conducting outbound prospecting, qualifying inbound leads, and closing contracts.",
      "Self-driven entrepreneurial mindset with high accountability."
    ]
  }
];
