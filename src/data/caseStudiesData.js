// src/data/caseStudiesData.js
// Client success stories with quantifiable metrics and sector outcomes

export const caseStudiesData = [
  {
    id: "fintech-cloud-migration",
    slug: "fintech-cloud-migration",
    title: "Zero-Downtime Migration for Tier-1 FinTech Platform",
    clientIndustry: "Financial Services & Banking",
    pillarSlug: "cloud-infrastructure",
    pillarName: "Cloud & DevOps Architecture",
    themeColor: "#ea580c",
    summary: "Modernized on-premise transactional monolith to AWS multi-region Kubernetes with real-time replication and zero customer impact.",
    challenge: "The client suffered from frequent latency spikes during market opening hours and exorbitant on-premise hardware maintenance costs totaling over $1.2M annually.",
    solution: "Engineered an automated blue-green migration pipeline utilizing Terraform, Amazon EKS, and dual-write database synchronization to ensure 100% data integrity.",
    metrics: [
      { value: "62%", label: "Infrastructure Cost Reduction" },
      { value: "99.995%", label: "Measured Uptime" },
      { value: "< 18ms", label: "Global P99 Latency" },
      { value: "0 hrs", label: "Production Downtime" }
    ],
    quote: {
      text: "SynXcloud delivered our most complex infrastructure migration two weeks ahead of schedule with zero transaction loss. Their engineers are simply world-class.",
      author: "Marcus Vance",
      title: "CTO, GlobalPay Solutions"
    },
    techStack: ["AWS EKS", "Terraform", "PostgreSQL", "Kafka", "Datadog", "Istio"]
  },
  {
    id: "healthcare-agentic-rag",
    slug: "healthcare-agentic-rag",
    title: "Autonomous Medical Record Triage & HIPAA-Compliant RAG",
    clientIndustry: "Healthcare & Life Sciences",
    pillarSlug: "ai-automation",
    pillarName: "Autonomous AI & Intelligent Automation",
    themeColor: "#7c3aed",
    summary: "Built a private, multi-agent medical document reasoning engine that reduced physician review overhead while strictly observing HIPAA protocols.",
    challenge: "Clinical staff spent an average of 3.5 hours per patient cross-referencing legacy electronic health records, lab reports, and radiological findings.",
    solution: "Deployed private Llama-3 & Claude instances with hybrid vector search (Pinecone) and multi-agent verification pipelines with strict de-identification safeguards.",
    metrics: [
      { value: "78%", label: "Reduction in Chart Review Time" },
      { value: "99.6%", label: "Entity Extraction Accuracy" },
      { value: "100%", label: "HIPAA & SOC-2 Compliance" },
      { value: "24/7", label: "Automated Clinical Indexing" }
    ],
    quote: {
      text: "Our doctors can now focus on patient care instead of endless paperwork. SynXcloud's AI solution transformed our clinical workflow.",
      author: "Dr. Elena Rostova",
      title: "Chief Medical Officer, Horizon Care Network"
    },
    techStack: ["Python", "FastAPI", "Pinecone", "Claude 3.5", "Docker", "AWS GovCloud"]
  },
  {
    id: "ecommerce-saas-platform",
    slug: "ecommerce-saas-platform",
    title: "Global Multi-Tenant B2B E-Commerce Marketplace",
    clientIndustry: "Retail & E-Commerce",
    pillarSlug: "software-engineering",
    pillarName: "Full-Stack Software Engineering",
    themeColor: "#2563eb",
    summary: "Architected a distributed Next.js and Go microservices platform serving 400,000+ active enterprise buyers with sub-second catalog search.",
    challenge: "Legacy Magento implementation could not scale past 2,000 concurrent transactions, suffering from checkout failures during major promotional campaigns.",
    solution: "Rebuilt the entire core commerce engine using React 19, Go microservices, Redis distributed caching, and Stripe Connect multi-currency settlement.",
    metrics: [
      { value: "+340%", label: "Peak Checkout Concurrency" },
      { value: "320ms", label: "Average Page Load Time" },
      { value: "$45M+", label: "Annual GMV Processed" },
      { value: "4.9/5", label: "Buyer Satisfaction Score" }
    ],
    quote: {
      text: "The speed and reliability of our new platform allowed us to expand into 6 international markets within our first quarter of launch.",
      author: "Julian Davies",
      title: "VP of Product, OmniTrade Direct"
    },
    techStack: ["React 19", "Next.js", "Go", "PostgreSQL", "Redis", "Stripe Connect"]
  },
  {
    id: "logistics-iot-automation",
    slug: "logistics-iot-automation",
    title: "Real-Time Fleet Telemetry & Predictive Dispatch AI",
    clientIndustry: "Supply Chain & Logistics",
    pillarSlug: "ai-automation",
    pillarName: "Autonomous AI & Intelligent Automation",
    themeColor: "#7c3aed",
    summary: "Engineered an edge IoT ingestion system coupled with predictive ML routing algorithms across 3,500 commercial freight vehicles.",
    challenge: "Unplanned vehicle breakdowns and inefficient routing resulted in over $2.4M in wasted fuel and contractual SLA penalties per quarter.",
    solution: "Implemented an event-driven telemetry stream with Apache Kafka, MQTT edge brokers, and automated route re-optimization models.",
    metrics: [
      { value: "31%", label: "Fuel Consumption Drop" },
      { value: "94%", label: "On-Time Delivery Rate" },
      { value: "42%", label: "Decrease in Unscheduled Repairs" },
      { value: "3,500+", label: "Vehicles Connected" }
    ],
    quote: {
      text: "SynXcloud combined deep distributed systems knowledge with cutting-edge ML to deliver measurable ROI in under four months.",
      author: "Samantha Ward",
      title: "Operations Director, TransContinental Freight"
    },
    techStack: ["Kafka", "Python", "MQTT", "TimescaleDB", "Kubernetes", "React Dashboard"]
  },
  {
    id: "enterprise-saas-security",
    slug: "enterprise-saas-security",
    title: "Automated DevSecOps Pipeline for Enterprise FinTech",
    clientIndustry: "Financial Services & Banking",
    pillarSlug: "cloud-infrastructure",
    pillarName: "Cloud & DevOps Architecture",
    themeColor: "#ea580c",
    summary: "Created a zero-trust CI/CD deployment system with automated static analysis, container scanning, and compliance-as-code.",
    challenge: "Manual security reviews delayed production release cycles to once every six weeks, hampering the product team's competitive velocity.",
    solution: "Instituted GitOps deployment pipelines with GitHub Actions, HashiCorp Vault, and automated security policies, enabling 15 daily production releases.",
    metrics: [
      { value: "15x", label: "Increase in Deployment Frequency" },
      { value: "100%", label: "Audit Pass Rate (SOC-2 Type II)" },
      { value: "< 5min", label: "End-to-End Build & Scan Pipeline" },
      { value: "0", label: "Critical Vulnerabilities in Prod" }
    ],
    quote: {
      text: "Security is non-negotiable for us. SynXcloud gave us both ironclad security and high release velocity.",
      author: "Arjun Nair",
      title: "Head of Engineering, Apex Ledger"
    },
    techStack: ["GitHub Actions", "HashiCorp Vault", "Terraform", "Snyk", "AWS", "ArgoCD"]
  },
  {
    id: "telehealth-mobile-suite",
    slug: "telehealth-mobile-suite",
    title: "High-Availability Telehealth Video & Prescription Suite",
    clientIndustry: "Healthcare & Life Sciences",
    pillarSlug: "software-engineering",
    pillarName: "Full-Stack Software Engineering",
    themeColor: "#2563eb",
    summary: "Built a cross-platform React Native iOS/Android app with WebRTC encrypted video consultations and automated pharmacy prescription routing.",
    challenge: "The client needed a frictionless patient-provider mobile application capable of operating reliably on low-bandwidth rural mobile networks.",
    solution: "Designed an adaptive bitrate WebRTC architecture with end-to-end encryption, biometric authentication, and offline record caching.",
    metrics: [
      { value: "1.2M+", label: "Consultations Completed" },
      { value: "99.98%", label: "Call Connection Reliability" },
      { value: "4.8/5", label: "App Store Rating (15k+ reviews)" },
      { value: "< 2sec", label: "Doctor Connection Latency" }
    ],
    quote: {
      text: "Patient feedback has been overwhelmingly positive. The intuitive interface and rock-solid video connection make healthcare accessible to anyone.",
      author: "Claire Sterling",
      title: "Co-Founder, CareDirect Health"
    },
    techStack: ["React Native", "WebRTC", "Node.js", "Redis", "AWS", "Twilio API"]
  }
];
