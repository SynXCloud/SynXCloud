// src/data/productsData.js
// Proprietary software and enterprise tooling products

export const productsData = [
  {
    id: "synx-cloudmesh",
    slug: "synx-cloudmesh",
    name: "SynX CloudMesh™",
    tagline: "Autonomous Multi-Cloud Topology Orchestrator & FinOps Engine",
    badge: "Flagship Software",
    category: "Cloud Infrastructure",
    image: "/service_cloud_devops.png",
    description: "An enterprise-grade control plane that unifies AWS, Azure, and Google Cloud telemetry into a single automated dashboard. Features self-healing failover and predictive cloud spend throttling.",
    specs: [
      { label: "Deployment", value: "Helm Chart / Kubernetes Operator / SaaS" },
      { label: "Supported Clouds", value: "AWS, Azure, GCP, OCI, Bare Metal" },
      { label: "Security", value: "mTLS Zero-Trust, SOC2 Type II, ISO 27001" },
      { label: "Latency Overhead", value: "< 0.4ms across mesh proxies" },
      { label: "FinOps Automation", value: "Real-time spot instance bidding & waste auto-purge" }
    ],
    features: [
      "Dynamic Multi-Region Traffic Balancing",
      "Automated Cost Anomaly Kill-Switches",
      "Single-Click GitOps Canary Rollouts",
      "Full OpenTelemetry Distributed Tracing"
    ],
    whitepaperUrl: "#whitepaper-cloudmesh"
  },
  {
    id: "synx-agentflow",
    slug: "synx-agentflow",
    name: "SynX AgentFlow™",
    tagline: "Enterprise Multi-Agent LLM Orchestrator & Knowledge Gateway",
    badge: "AI Product",
    category: "Artificial Intelligence",
    image: "/service_ai_automation.png",
    description: "A production-hardened multi-agent workflow runtime for enterprise environments. Connects private enterprise data stores with autonomous agents featuring deterministic guardrails and human verification.",
    specs: [
      { label: "Runtime", value: "Python 3.12 / Rust Core Engine / WebAssembly" },
      { label: "LLM Support", value: "Claude 3.5, OpenAI GPT-4o, Llama 3, Local Ollama" },
      { label: "Vector Engines", value: "Pinecone, Qdrant, Milvus, pgvector" },
      { label: "Guardrails", value: "Automated PII scrubbing, Hallucination checks" },
      { label: "Auditability", value: "Complete step-by-step reasoning transcript replay" }
    ],
    features: [
      "Visual Agent Workflow Designer",
      "Role-Based Vector Document Slicing",
      "Autonomous Tool & API Integration Hub",
      "Air-Gapped On-Premise Deployment Option"
    ],
    whitepaperUrl: "#whitepaper-agentflow"
  },
  {
    id: "synx-securevault",
    slug: "synx-securevault",
    name: "SynX SecureVault™",
    tagline: "Zero-Knowledge Secret & API Gateway with Quantum-Safe Encryption",
    badge: "Security & DevSecOps",
    category: "Cybersecurity",
    image: "/service_support.png",
    description: "Eliminates hardcoded API credentials and leaked secrets across distributed developer fleets. Features dynamic ephemeral credentials, automatic token rotation, and hardware security module (HSM) backing.",
    specs: [
      { label: "Cryptography", value: "AES-256-GCM + Post-Quantum Kyber-768" },
      { label: "Integration", value: "Native Kubernetes Secrets Webhook, Docker, CLI" },
      { label: "Credential Rotation", value: "Automatic every 15 minutes to 24 hours" },
      { label: "Audit Standards", value: "FIPS 140-3 Level 3 compliance" },
      { label: "High Availability", value: "Raft consensus with 99.999% SLA guarantee" }
    ],
    features: [
      "Dynamic Just-In-Time Database Credentials",
      "Automated Git Repository Secret Leak Shield",
      "Centralized Multi-Cloud Key Management",
      "Biometric Developer Authentication"
    ],
    whitepaperUrl: "#whitepaper-securevault"
  }
];
