export interface Skill {
  name: string;
  description: string;
}

export const skills: Skill[] = [
  {
    name: 'llm_engineering',
    description: 'Production LLM features — Claude & GPT APIs, streaming, structured outputs, tool use, and evals.',
  },
  {
    name: 'agents_and_rag',
    description: 'Autonomous agents, retrieval pipelines, vector search, and MCP integrations that actually ship.',
  },
  {
    name: 'prompt_engineering',
    description: 'Wrote the cookbook on it. System prompts, guardrails, and squeezing reliability out of nondeterministic models.',
  },
  {
    name: 'full_stack',
    description: 'TypeScript, React, Astro, Node, Python, Postgres. From idea to deployed product, solo.',
  },
  {
    name: 'security',
    description: 'Penetration testing background. Builds with an attacker’s mindset — including against LLM apps.',
  },
  {
    name: 'zero_to_one',
    description: 'Founder reps: scoping, building, launching, and iterating on SaaS products end to end.',
  },
];

export interface Project {
  slug: string;
  name: string;
  role: string;
  description: string;
  url: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    slug: 'pourmath',
    name: 'PourMath',
    role: 'Founder & Sole Developer',
    description: 'Pour cost and pricing math for bars and restaurants — price drinks, track margins, and keep every pour profitable.',
    url: 'https://pourmath.com',
    tags: ['saas', 'hospitality'],
  },
  {
    slug: 'linkstreaks',
    name: 'LinkStreaks',
    role: 'Founder & Sole Developer',
    description: 'Gamified link-in-bio SaaS where fans earn points, build streaks, and unlock exclusive content. Turning passive followers into engaged communities.',
    url: 'https://linkstreaks.com',
    tags: ['saas', 'gamification'],
  },
  {
    slug: 'airjust',
    name: 'Airjust',
    role: 'Co-Founder & Lead Developer',
    description: 'Flight compensation platform helping passengers claim up to £520 for delayed or cancelled flights under EU/UK regulations. No win, no fee.',
    url: 'https://airjust.co',
    tags: ['saas', 'legal-tech'],
  },
  {
    slug: 'shwrk',
    name: 'SHWRK',
    role: 'Founder',
    description: 'Development hub hosting a suite of innovative web applications across sports analytics, developer tooling, and data utilities.',
    url: 'https://shwrk.com',
    tags: ['platform'],
  },
  {
    slug: 'lnch-ctrl',
    name: 'LNCH CTRL',
    role: 'Sole Developer',
    description: 'Retro mission-control dashboard for live rocket launch tracking. Pulls from The Space Devs API with real-time launch status and space news.',
    url: 'https://nshiffer.github.io/space-tracker/',
    tags: ['realtime', 'api'],
  },
  {
    slug: 'dev-converter',
    name: 'Dev Converter',
    role: 'Sole Developer',
    description: '40 privacy-first developer utility tools — encoding, hashing, formatting, and more. Runs 100% client-side. Your data never leaves the browser.',
    url: 'https://converter.shwrk.com',
    tags: ['dev-tools', 'client-side'],
  },
  {
    slug: 'fantasy-dashboard',
    name: 'Fantasy Dashboard',
    role: 'Sole Developer',
    description: 'Dynasty fantasy football analytics dashboard for Sleeper leagues. Surfaces standings, matchups, roster analysis, and draft data beyond the native app.',
    url: 'https://fantasyfootball.shwrk.com',
    tags: ['analytics', 'api'],
  },
];

export interface Book {
  title: string;
  blurb: string;
  url: string;
}

export const books: Book[] = [
  {
    title: 'Mastering the Art of Generative Design',
    blurb: 'A comprehensive guide to generative AI and the craft of prompt engineering.',
    url: 'https://www.amazon.com/Mastering-Art-Generative-Comprehensive-Engineering/dp/B0C47DWL9C',
  },
  {
    title: 'Prompt Engineers Cookbook',
    blurb: 'Practical recipes and patterns for getting reliable results out of large language models.',
    url: 'https://www.amazon.com/Prompt-Engineers-Cookbook-Mastering-Generative-ebook/dp/B0C63VN3CT',
  },
  {
    title: 'AI Unleashed',
    blurb: 'Turbocharging business workflows with generative AI — strategy, use cases, and execution.',
    url: 'https://www.amazon.com/AI-Unleased-Turbocharge-Business-Generative/dp/B0C87VK67Q',
  },
];

export interface Social {
  name: string;
  url: string;
}

export const socials: Social[] = [
  { name: 'github', url: 'https://github.com/nshiffer' },
  { name: 'linkedin', url: 'https://www.linkedin.com/in/nicholas-shiffer-9593a6175' },
];
