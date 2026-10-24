// src/data/partnersData.js
// Partner ecosystem tiers, incentives, and qualifications

export const partnerTiers = [
  {
    id: "referral-partner",
    name: "Referral Affiliate Partner",
    badge: "Fast Start",
    commission: "10% - 15% Recurring",
    tagline: "Introduce enterprise clients seeking cloud migration or custom software engineering.",
    benefits: [
      "Up to 15% recurring commission for the first 12 months of client contract",
      "Dedicated Partner Portal to track deal registrations and payout milestones",
      "Sales enablement collateral, pitch decks, and co-branded one-pagers",
      "Zero technical delivery obligations—SynXcloud handles 100% of execution",
      "Payouts wired bi-weekly upon client invoicing"
    ],
    idealFor: "Independent consultants, boutique advisory firms, and technology influencers."
  },
  {
    id: "solution-partner",
    name: "Certified Solutions Partner",
    badge: "Most Popular",
    commission: "20% - 25% Margin",
    tagline: "Co-sell and bundle SynXcloud engineering capabilities into your client engagements.",
    benefits: [
      "Substantial co-selling margins and discounted wholesale engineering rates",
      "Direct Slack/Teams channel with SynXcloud Practice Leads and Solutions Architects",
      "Joint go-to-market marketing, co-hosted webinars, and published case studies",
      "Lead sharing: SynXcloud routes regional inbound requests to local Solution Partners",
      "Priority SLA and dedicated pre-sales technical architecture support"
    ],
    idealFor: "Digital marketing agencies, regional IT consultancies, and SaaS resellers."
  },
  {
    id: "system-integrator",
    name: "Strategic Global System Integrator",
    badge: "Enterprise Tier",
    commission: "Custom Strategic Alliance",
    tagline: "Enterprise consortium delivering multi-million dollar digital transformation contracts.",
    benefits: [
      "Custom Master Services Agreement (MSA) with dedicated engineering squads",
      "Executive sponsorship from SynXcloud Founders & Chief Technology Officer",
      "Deep integration with SynX CloudMesh and proprietary AI workflow accelerators",
      "Joint IP development and specialized vertical solutions collaboration",
      "Tier-1 enterprise RFP co-bidding and sovereign cloud clearance"
    ],
    idealFor: "Large system integrators, management consultancies, and multi-national telcos."
  }
];
