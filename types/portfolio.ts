export interface PersonalInfo {
  name: string;
  title: string;
  email: string;
  phone: string;
  address: string;
  nationality: string;
  dateOfBirth: string;
  idNumber: string;
}

export interface Experience {
  id: string;
  title: string;
  company: string;
  duration: string;
  startDate: string;
  endDate: string | 'Present';
  achievements: string[];
  technologies?: string[];
  type: 'full-time' | 'internship' | 'contract' | 'volunteer';
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  duration: string;
  grade?: string;
}

export interface Skill {
  name: string;
  category: 'technical' | 'soft' | 'language' | 'certification';
  level: 'beginner' | 'intermediate' | 'advanced' | 'expert';
}

export interface Reference {
  name: string;
  title: string;
  company: string;
  contact: string;
  relationship: string;
}

export interface Certification {
  name: string;
  issuer: string;
  date?: string;
  credentialId?: string;
}

export interface Project {
  id: string;
  title: string;
  organization?: string;
  summary: string;
  impact?: string;
  metrics?: { label: string; value: string }[];
  tags: string[];
  period?: string;
  link?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  company: string;
  quote: string;
}

export interface SocialLink {
  label: 'Email' | 'Phone' | 'LinkedIn' | 'GitHub' | 'Website';
  href: string;
}