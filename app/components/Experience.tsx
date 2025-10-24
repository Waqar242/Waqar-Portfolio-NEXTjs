'use client';

import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    company: 'Nessovo',
    role: 'Frontend Engineer',
    period: '10/2025 – Present',
    location: 'Lahore',
    icon: '🚀',
    color: 'from-cyan-500 to-blue-500',
    achievements: [
      'Architected and developed a full-scale claims management system for a car rental service with scalable frontend architecture, modular components, centralized state management, and role-based routing for multi-role workflows.',
      'Created an AI-powered e-commerce application with a ChatGPT-like conversational interface that enables natural language product search and personalized recommendations.'
    ]
  },
  {
    company: 'TenX',
    role: 'Senior Software Engineer',
    period: '07/2024 – 09/2024',
    location: 'Lahore',
    icon: '⚡',
    color: 'from-purple-500 to-pink-500',
    achievements: [
      'Built a performant React-based frontend for a global media agency, integrating cutting-edge APIs (audio separation, OCR, chat engines) using Axios for data fetching.',
      'Engineered the full frontend architecture of an AI-driven cancer detection platform in Angular, integrating advanced visualization for medical imaging and optimizing client-side performance for large-scale data processing.'
    ]
  },
  {
    company: 'TenX',
    role: 'Software Engineer',
    period: '10/2022 – 06/2024',
    location: 'Lahore',
    icon: '💻',
    color: 'from-green-500 to-teal-500',
    achievements: [
      'Migrated a legacy Angular application to the latest Angular framework version, revamping the UI with a modern design system and enhancing performance, usability, and maintainability.',
      'Integrated RESTful APIs and implemented JWT-based authentication, ensuring secure and reliable client-server communication.'
    ]
  },
  {
    company: 'PostEx',
    role: 'Software Engineer',
    period: '06/2022 – 09/2022',
    location: 'Lahore',
    icon: '📦',
    color: 'from-orange-500 to-red-500',
    achievements: [
      'Developed React components for PostEx core platforms.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Briefcase className="text-cyan-400" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Professional Journey
          </h2>
        </div>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <ExperienceCard key={index} {...exp} />
          ))}
        </div>
      </div>
    </section>
  );
}