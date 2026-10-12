import { PortfolioData } from "@/types/portfolio";

export const portfolioData: PortfolioData = {
  name: "Akshat Jain",
  title: "Full Stack Developer (Backend-focused)",
  intro:
    "I build reliable backend systems and ship full-stack products with clean APIs, clear data models, and practical user experiences.",
  seo: {
    title: "Akshat Jain | Full Stack Developer",
    description:
      "Backend-focused full stack developer portfolio featuring API architecture, scalable systems, and product-focused engineering work.",
    canonicalPath: "/",
  },
  socialLinks: [
    {
      label: "GitHub",
      href: "https://github.com/akshat-jjain/",
    },
    {
      label: "LeetCode",
      href: "https://leetcode.com/u/akshat_jain/",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/akshat-jjain",
    },
  ],
  skillGroups: [
    {
      title: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "JWT Auth", "Microservices", "Queues & background jobs"],
    },
    {
      title: "Databases & Caching",
      items: ["MongoDB", "MySQL", "Redis", "Data modeling", "Query optimization"],
    },
    {
      title: "Frontend",
      items: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Accessible UI patterns"],
    },
    {
      title: "Cloud & Infrastructure",
      items: ["AWS", "Vercel", "CI workflows", "Observability foundations"],
    },
    {
      title: "Programming Languages",
      items: ["JavaScript", "TypeScript", "Python"],
    },
  ],
  projects: [
    {
      title: "CRM for Landing Pages",
      slug: "crm-landing-pages",
      summary: "Internal CRM workflows to manage landing page operations with less manual effort.",
      category: "fullstack",
      problem: "Landing page operations were heavily manual and repetitive.",
      approach:
        "Built structured workflows for request tracking, approvals, and update execution through API-backed interfaces.",
      architecture: [
        "Role-aware API endpoints for operational actions",
        "Normalized data modeling for campaigns and page metadata",
        "Queue-ready workflow design for asynchronous processing",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "React", "REST APIs"],
      verifiedImpact: [],
      pendingVerification: [
        "Claim to confirm: reduced manual effort by approximately 30%",
      ],
      imageAlt: "Dashboard-style CRM workflow view for landing page operations",
      featured: true,
      caseStudyNotes:
        "High-level architecture is documented here; implementation metrics and final numbers require confirmation.",
    },
    {
      title: "Floor Booking & Event Ticketing System",
      slug: "floor-booking-ticketing",
      summary: "Scheduling and ticketing flows for facility booking and event participation.",
      category: "fullstack",
      problem: "Coordinating booking slots and event seat allocation required centralized control.",
      approach:
        "Designed booking lifecycle states and event ticket issuance workflows with clear domain boundaries.",
      architecture: [
        "Booking lifecycle state transitions",
        "Authentication-backed booking ownership",
        "Validation layer for scheduling conflicts",
      ],
      techStack: ["Node.js", "Express.js", "MySQL", "React", "JWT"],
      verifiedImpact: ["Operational complexity reduced through centralized booking and ticket management"],
      imageAlt: "Calendar and booking controls for floor reservation and event tickets",
      featured: true,
    },
    {
      title: "Dictionary Platform Optimization",
      slug: "dictionary-optimization",
      summary: "Performance and infrastructure optimization work for a dictionary website.",
      category: "backend",
      problem: "Hosting and traffic growth required careful cost/performance balancing.",
      approach:
        "Applied infrastructure and backend optimization techniques with performance-focused deployment adjustments.",
      architecture: [
        "Cache-aware response strategy",
        "API and delivery performance tuning",
        "Cost-focused hosting adjustments",
      ],
      techStack: ["Node.js", "Redis", "AWS", "Monitoring"],
      verifiedImpact: [],
      pendingVerification: [
        "Claim to confirm: approximately 40% hosting-cost reduction",
        "Claim to confirm: approximately 20% traffic growth",
      ],
      imageAlt: "Performance-oriented architecture diagram for dictionary platform optimization",
    },
    {
      title: "Jain Community Management Application",
      slug: "jain-community-management",
      summary: "Domain model for managing mahasanghs, sanghs, families, and members.",
      category: "fullstack",
      problem: "Community hierarchy and records needed a structured and searchable digital system.",
      approach:
        "Modeled hierarchical entities with role-based access and relationship-safe operations.",
      architecture: [
        "Hierarchy-aware data model",
        "Role-scoped read/write access",
        "Search and filter flows for community data",
      ],
      techStack: ["Node.js", "Express.js", "MongoDB", "React"],
      verifiedImpact: ["Structured records and hierarchy tracking for community operations"],
      imageAlt: "Hierarchy tree for community entities and member management",
    },
    {
      title: "Cricket Score Tracker",
      slug: "cricket-score-tracker",
      summary: "Client-side score tracking interface for quick match updates.",
      category: "frontend",
      problem: "Need for lightweight score tracking without backend complexity.",
      approach:
        "Implemented local-state and local-storage backed update flow for live-like scoreboard usage.",
      architecture: [
        "React component state for score events",
        "Local storage persistence",
        "Responsive Tailwind-first UI",
      ],
      techStack: ["React", "Vite", "Tailwind CSS", "Local Storage"],
      verifiedImpact: ["Fast local score management without server dependencies"],
      imageAlt: "Cricket scoreboard UI with batting and bowling controls",
      githubUrl: "https://github.com/akshat-jjain",
    },
    {
      title: "Backend API Starter",
      slug: "backend-api-starter",
      summary: "Starter template for backend APIs with auth and production-ready structure.",
      category: "backend",
      problem: "New backend projects required repeated setup for auth, structure, and standards.",
      approach:
        "Created a reusable API starter baseline with clear layering and environment-safe configuration.",
      architecture: [
        "Modular route/controller/service setup",
        "Auth-ready middleware pipeline",
        "Environment-driven configuration",
      ],
      techStack: ["Node.js", "Express.js", "JWT", "MongoDB"],
      verifiedImpact: ["Reduced setup time for API-first project starts"],
      imageAlt: "Code architecture view for API starter project",
      githubUrl: "https://github.com/akshat-jjain",
    },
  ],
  experiences: [
    {
      role: "Full Stack Developer",
      company: "Professional experience details pending confirmation",
      period: "~3-4 years (exact timeline to be updated)",
      technologies: ["Node.js", "Express.js", "MongoDB", "MySQL", "Redis", "React", "AWS"],
      highlights: [
        "Designed and delivered backend-heavy features with full-stack ownership",
        "Worked across API design, authentication, data modeling, and performance improvements",
      ],
      needsVerification: true,
    },
  ],
  principles: [
    {
      title: "Reliability by default",
      description:
        "Design APIs with explicit contracts, strong input validation, and failure-aware behavior before scaling concerns are introduced.",
    },
    {
      title: "Performance with product context",
      description:
        "Prioritize bottlenecks that affect users or cost. Use caching, indexing, and async jobs where they produce measurable value.",
    },
    {
      title: "Security in implementation details",
      description:
        "Treat auth, authorization, and secret handling as core architecture decisions, not post-release patches.",
    },
    {
      title: "Maintainability over novelty",
      description:
        "Prefer simple, testable modules and clear ownership boundaries so new features can be shipped safely.",
    },
  ],
  contact: {
    email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || undefined,
    location: "India",
  },
};

export const featuredProjects = portfolioData.projects.filter((project) => project.featured);

export const projectBySlug = Object.fromEntries(
  portfolioData.projects.map((project) => [project.slug, project])
);
