'use client';

import { Briefcase } from 'lucide-react';
import ExperienceCard from './ExperienceCard';

const experiences = [
  {
    company: 'Nessovo',
    role: 'Full Stack Engineer',
    period: '10/2025 – Present',
    location: 'Lahore',
    logo: '/nessovo.png',
    color: 'from-cyan-500 to-blue-500',
    achievements: [
      'Architected and developed a full-scale <span class="font-semibold text-cyan-400">Claims Management System</span> for a car rental service with scalable frontend architecture, modular components, centralized state management, and role-based routing for multi-role workflows.',
      'Created an <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">AI-powered e-commerce platform</span> with a ChatGPT-like conversational interface enabling natural language product discovery and personalized recommendations.',
      'Contributing to the development of a <span class="font-semibold text-cyan-400">Project Management Tool</span> inspired by Jira — implementing multi-tenant architecture, role-based access, task tracking, and real-time collaboration features to enhance productivity and cross-team coordination.'
    ]
  },
  {
    company: 'TenX',
    role: 'Senior Software Engineer',
    period: '07/2024 – 09/2024',
    location: 'Lahore',
    logo: '/tenx.png',
    color: 'from-purple-500 to-pink-500',
    achievements: [
      'Led frontend development for multiple projects under <span class="font-semibold text-cyan-400">Al Jazeera Media Network</span>, building React-based platforms that integrated advanced APIs including <span class="font-semibold text-cyan-400">audio separation</span>, <span class="font-semibold text-cyan-400">OCR</span>, and <span class="font-semibold text-cyan-400">chat intelligence engines</span> to enhance media workflow automation.',
      'Developed a <span class="font-semibold text-cyan-400">Microsoft Teams extension</span> enabling automated meeting recordings and post-session <span class="font-semibold text-cyan-400">Minutes of Meeting (MoM)</span> generation and distribution.',
      'Engineered the frontend architecture for an <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">AI-driven Cancer Detection Platform</span> in Angular — integrated high-resolution <span class="font-semibold text-cyan-400">medical image visualization</span> and optimized rendering performance for large-scale clinical datasets.'
    ]
  },
  {
    company: 'TenX',
    role: 'Software Engineer',
    period: '10/2022 – 06/2024',
    location: 'Lahore',
    logo: '/tenx.png',
    color: 'from-green-500 to-teal-500',
    achievements: [
      'Contributed to multiple large-scale enterprise projects across healthcare and banking domains, delivering modern, high-performance front-end solutions.',
      'Worked on <span class="font-semibold text-cyan-400">Ancera</span>, a data analytics platform providing Real-World Evidence (RWE) insights for pharmaceutical and life science clients — implemented dynamic data visualizations, modular UI components, and interactive dashboards using Angular.',
      'Developed core modules for <span class="font-semibold text-cyan-400">Connect360</span>, a digital transformation platform for banks designed to enhance operational efficiency and data-driven decision-making — collaborated closely with backend teams to integrate REST APIs and optimize client performance.',
      'Built rich interfaces for <span class="font-semibold text-cyan-400">Cash Optimization</span>, an <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">AI-driven</span> cash forecasting and management platform for banks — focused on visual data representation, seamless API integration, and real-time analytics to support <span class="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent font-semibold">AI-based predictions</span>.',
      'Migrated legacy Angular applications to modern architecture with improved design systems, performance, and maintainability while implementing JWT-based authentication and secure API handling.'
    ]
  },
  {
    company: 'PostEx',
    role: 'Software Engineer',
    period: '06/2022 – 09/2022',
    location: 'Lahore',
    logo: '/postex.png',
    color: 'from-orange-500 to-red-500',
    achievements: [
      'Joined PostEx as one of the early frontend engineers helping build their core platforms.',
      'Developed and shipped reusable React component libraries that powered three integrated business platforms, improving code reuse and UI consistency.',
      'Collaborated cross-functionally with UX designers, backend engineers, and product owners to deliver scalable frontend solutions for e-commerce and fintech workflows.'
    ]
  }
];

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 relative">
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-start gap-3 mb-12 text-center md:text-left">
          <Briefcase className="text-cyan-400 md:self-center" size={36} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent leading-tight">
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
