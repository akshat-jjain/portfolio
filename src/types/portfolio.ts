export type SocialLink = {
  label: string;
  href: string;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Project = {
  title: string;
  slug: string;
  summary: string;
  category: "backend" | "fullstack" | "frontend";
  problem: string;
  approach: string;
  architecture: string[];
  techStack: string[];
  verifiedImpact: string[];
  pendingVerification?: string[];
  githubUrl?: string;
  liveUrl?: string;
  imageAlt: string;
  featured?: boolean;
  caseStudyNotes?: string;
};

export type Experience = {
  role: string;
  company: string;
  period: string;
  technologies: string[];
  highlights: string[];
  needsVerification?: boolean;
};

export type Principle = {
  title: string;
  description: string;
};

export type ContactConfig = {
  email?: string;
  location?: string;
};

export type PortfolioData = {
  name: string;
  title: string;
  intro: string;
  seo: {
    title: string;
    description: string;
    canonicalPath: string;
  };
  socialLinks: SocialLink[];
  skillGroups: SkillGroup[];
  projects: Project[];
  experiences: Experience[];
  principles: Principle[];
  contact: ContactConfig;
};
