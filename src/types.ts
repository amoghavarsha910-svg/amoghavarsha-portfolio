export interface Project {
  id: string;
  number: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  goals: string[];
  githubUrl: string;
  liveDemoUrl?: string;
  iconName: 'shield-alert' | 'database' | 'radio';
  accentColor: 'emerald' | 'cyan' | 'indigo';
}

export interface Skill {
  id: string;
  name: string;
  description: string;
  category: 'Programming' | 'Web & Database' | 'Hardware & Logic';
  icon: string;
  color: string;
}

export interface EducationItem {
  degree: string;
  institution: string;
  period: string;
  cgpa: string;
  status: string;
  location: string;
  highlights: string[];
}

export interface CertificationPlatform {
  id: string;
  name: string;
  description: string;
  badge: string;
  certificateUrl: string; // Placeholder or real URL
  icon: string;
}

export interface Activity {
  title: string;
  category: string;
  description: string;
  icon: string;
  values: string[];
}

export interface Language {
  name: string;
  level: string;
  nativeName?: string;
}

export interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  stargazers_count: number;
  forks_count: number;
  language: string | null;
  updated_at: string;
}
