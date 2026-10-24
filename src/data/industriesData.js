// src/data/industriesData.js
// Industry sector vertical models, challenges, and tailored solutions

export const industriesData = [
  {
    id: "financial-services",
    slug: "financial-services",
    name: "Financial Services & FinTech",
    tagline: "High-frequency trading architectures, PCI-DSS compliance & automated fraud prevention.",
    icon: "Landmark",
    heroDesc: "We partner with global banks, neobanks, and fintech platforms to engineer ultra-low latency transaction systems and ironclad regulatory compliance pipelines.",
    challenges: [
      "Rigid legacy core banking mainframes incapable of real-time API integrations",
      "Strict data residency laws (GDPR, PCI-DSS, RBI, Dodd-Frank) demanding zero-trust security",
      "Sophisticated fraud attacks requiring sub-second decisioning without false positives",
      "Downtime costs exceeding $100k per minute during market volatility"
    ],
    solutions: [
      "Event-driven microservices architecture built for high concurrency and sub-millisecond execution",
      "Automated compliance guardrails and end-to-end encrypted ledger data storage",
      "Real-time machine learning fraud detection models integrated directly into transaction flows",
      "Multi-region active-active cloud deployments with automated disaster recovery"
    ],
    deliverables: [
      "Core Banking API Gateway & Middleware",
      "PCI-DSS Level 1 Compliant Cloud Infrastructure",
      "Real-Time Fraud & Anomaly Triage Engines",
      "White-Label Mobile Banking & Investment Apps"
    ]
  },
  {
    id: "healthcare-life-sciences",
    slug: "healthcare-life-sciences",
    name: "Healthcare & Life Sciences",
    tagline: "HIPAA-certified cloud infrastructure, EHR interoperability & clinical AI assistants.",
    icon: "Activity",
    heroDesc: "Empowering hospitals, clinical research organizations, and digital health startups with secure patient portals, FHIR standard pipelines, and diagnostic AI support.",
    challenges: [
      "Siloed legacy Electronic Health Record (EHR) systems with incompatible proprietary formats",
      "Stringent HIPAA, HITECH, and GDPR privacy mandates with severe non-compliance penalties",
      "High administrative burden on clinicians causing burnout and diagnostic delays",
      "Bandwidth constraints for remote rural telehealth and real-time medical imaging"
    ],
    solutions: [
      "HL7 and FHIR-compliant interoperability engines connecting heterogeneous hospital systems",
      "Zero-knowledge encrypted cloud environments with granular audit logging and access controls",
      "Context-aware clinical reasoning agents for automated chart summarization and coding",
      "Low-bandwidth WebRTC video consultation pipelines with automated prescription routing"
    ],
    deliverables: [
      "HIPAA-Compliant Patient Portals & Telehealth Mobile Apps",
      "FHIR Healthcare Interoperability Middleware",
      "AI Clinical Documentation Assistants",
      "Secure Medical Imaging (DICOM) Cloud Storage"
    ]
  },
  {
    id: "supply-chain-logistics",
    slug: "supply-chain-logistics",
    name: "Supply Chain & Logistics",
    tagline: "End-to-end cargo visibility, automated warehouse routing & predictive fleet maintenance.",
    icon: "Truck",
    heroDesc: "Building resilient logistics engines that connect IoT edge sensors, freight brokers, and distribution hubs with real-time predictive analytics.",
    challenges: [
      "Blind spots in global transit leading to cargo spoilage, theft, and delivery delays",
      "Manual dispatch scheduling resulting in empty return miles and wasted fuel",
      "Complex multi-party customs documentation and customs tariff classification bottlenecks",
      "Disjointed carrier communications causing supply chain friction"
    ],
    solutions: [
      "Kafka-driven real-time GPS and environmental sensor telemetry streaming at scale",
      "Automated dynamic route optimization algorithms incorporating live traffic and weather data",
      "Intelligent OCR parsing of shipping bills, airway bills, and customs declarations",
      "Automated customer tracking portals and automated milestone webhook alerts"
    ],
    deliverables: [
      "Real-Time Global Fleet Tracking Dashboards",
      "Automated Warehouse Dispatch & Allocation Software",
      "Document AI for Customs & Bill of Lading Triage",
      "Driver Mobile Applications with Offline Proof-of-Delivery"
    ]
  },
  {
    id: "retail-ecommerce",
    slug: "retail-ecommerce",
    name: "Retail & Modern E-Commerce",
    tagline: "Headless commerce, lightning-fast storefronts & hyper-personalized recommendation engines.",
    icon: "ShoppingBag",
    heroDesc: "Architecting omnichannel retail experiences that convert visitors into loyal customers through instant page loads and personalized shopping experiences.",
    challenges: [
      "Monolithic e-commerce platforms crashing under sudden promotional traffic spikes",
      "Slow page speeds causing cart abandonment and lowered search engine rankings",
      "Difficulty synchronizing online stock with physical brick-and-mortar inventories",
      "Generic customer journeys resulting in low repeat purchase rates"
    ],
    solutions: [
      "Headless React 19 storefronts backed by serverless microservices for infinite auto-scaling",
      "Sub-second global edge caching of dynamic catalogs and checkout flows",
      "Real-time omnichannel inventory reconciliation across warehouses and POS terminals",
      "Vector-based recommendation engines delivering personalized product bundles"
    ],
    deliverables: [
      "Custom Headless Next.js Storefronts",
      "Multi-Currency B2B & B2C Marketplace Engines",
      "Omnichannel POS & ERP Synchronization Middleware",
      "AI Search & Conversion Optimization Systems"
    ]
  },
  {
    id: "saas-cloud-platforms",
    slug: "saas-cloud-platforms",
    name: "SaaS & Cloud Platforms",
    tagline: "Multi-tenant scalability, automated metering, Stripe billing & GitOps continuous delivery.",
    icon: "Server",
    heroDesc: "Accelerating SaaS startup and enterprise product velocity from MVP architecture to enterprise-ready multi-tenant software with zero technical debt.",
    challenges: [
      "Architectural technical debt preventing rapid onboarding of enterprise tier customers",
      "Complex billing requirements (usage-based metering, seats, add-ons, international tax)",
      "Multi-tenant data isolation and role-based access control complexity",
      "High infrastructure burn rates eating into gross margins"
    ],
    solutions: [
      "Modular multi-tenant database schemas with automated tenant provisioning scripts",
      "Seamless Stripe Billing and webhook integration supporting tiered and metered pricing",
      "Comprehensive RBAC and audit logging satisfying enterprise security checklists",
      "FinOps optimization reducing cloud infrastructure costs by up to 50%"
    ],
    deliverables: [
      "End-to-End Enterprise SaaS Starter Frameworks",
      "Usage-Based Billing & Subscription Portals",
      "Automated Tenant Provisioning Pipelines",
      "Developer APIs, SDKs & Webhook Infrastructure"
    ]
  },
  {
    id: "manufacturing-iot",
    slug: "manufacturing-iot",
    name: "Manufacturing & Smart Industrial IoT",
    tagline: "Digital twins, predictive asset maintenance & automated factory quality inspection.",
    icon: "Cpu",
    heroDesc: "Connecting physical factory floors to the cloud with industrial edge computing, machine vision defect inspection, and downtime prevention algorithms.",
    challenges: [
      "Unplanned machinery downtime costing millions in lost assembly line output",
      "Manual quality control suffering from human fatigue and inconsistent defect detection",
      "Legacy machinery running proprietary serial protocols without network connectivity",
      "Overwhelming volumes of raw sensor data without actionable business insights"
    ],
    solutions: [
      "Predictive vibration and thermal ML models anticipating bearing failure before it occurs",
      "High-speed computer vision inspection systems detecting micrometer-level manufacturing defects",
      "IoT edge gateways translating Modbus/OPC-UA protocols into standardized cloud telemetry",
      "Digital twin dashboards giving plant managers real-time visibility into overall equipment effectiveness (OEE)"
    ],
    deliverables: [
      "Industrial IoT Edge Telemetry Gateways",
      "Computer Vision Quality Assurance Software",
      "Predictive Machinery Maintenance Portals",
      "Digital Twin Real-Time Factory Dashboards"
    ]
  }
];
