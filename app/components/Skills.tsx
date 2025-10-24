'use client';

import { Wrench, Server } from 'lucide-react';
import SkillCategory from './SkillCategory';
import SkillBadge from './SkillBadge';

const skills = {
  'Frontend Technologies': ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)'],
  'APIs & Tools': ['RESTful APIs', 'Axios', 'Postman', 'Swagger/OpenAPI'],
  'State Management': ['Redux Toolkit', 'Context API', 'ngRx'],
  'UI/Styling': ['Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5', 'CSS3'],
  'Backend Development': ['Node.js', 'Express.js', 'REST API Design', 'Middleware'],
  'Databases': ['PostgreSQL', 'MySQL', 'Neon Serverless', 'Drizzle ORM'],
  'Soft Skills': ['Team Collaboration', 'Problem Solving', 'Adaptability', 'Communication'],
  'Collaboration Tools': ['GitHub', 'Agile/Scrum', 'Jira', 'ClickUp'],
  'Leadership & Mentoring': [
    'Team Leadership',
    'Cross-Team Collaboration',
    'Mentoring Junior Developers',
    'Project Coordination',
    'Decision Making',
  ],
};

const expertiseLevels = [
  { title: 'Frontend Development', level: 'Advanced', icon: '💻' },
  { title: 'UI/UX Implementation', level: 'Advanced', icon: '🎨' },
  { title: 'Backend Development', level: 'Beginner', icon: '🧠' },
  { title: 'Database Design', level: 'Beginner', icon: '🗄️' },
  { title: 'State Management', level: 'Intermediate', icon: '⚙️' },
  { title: 'System Design & Scalability', level: 'Intermediate', icon: '🚀' },
  { title: 'Problem Solving & Analytical Thinking', level: 'Advanced', icon: '🧩' },
  { title: 'Team Collaboration & Communication', level: 'Advanced', icon: '💬' },
  { title: 'Leadership & Mentoring', level: 'Intermediate', icon: '🧭' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Section Title */}
        <div className="flex items-center gap-3 mb-12">
          <Wrench className="text-cyan-400" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory key={category} category={category} items={items} index={index} />
          ))}
        </div>

        {/* Expertise Overview */}
        <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <Server size={24} />
            Technical & Professional Expertise
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {expertiseLevels.map((exp, index) => (
              <SkillBadge key={index} title={exp.title} level={exp.level} icon={exp.icon} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
