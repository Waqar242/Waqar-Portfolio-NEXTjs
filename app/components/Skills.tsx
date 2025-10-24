'use client';

import { Wrench, Code } from 'lucide-react';
import SkillCategory from './SkillCategory';
import SkillProgress from './SkillProgress';

const skills = {
  'Frontend Technologies': ['React.js', 'Angular', 'TypeScript', 'JavaScript (ES6+)'],
  'APIs & Tools': ['RESTful APIs', 'Axios', 'Postman', 'Swagger/OpenAPI'],
  'State Management': ['Redux Toolkit', 'Context API', 'ngRx'],
  'UI/Styling': ['Tailwind CSS', 'Bootstrap', 'Material UI', 'HTML5', 'CSS3'],
  'Performance Optimization': ['Code Splitting', 'Lazy Loading', 'Memoization'],
  'Collaboration': ['GitHub', 'Agile/Scrum', 'Jira', 'ClickUp']
};

const competencies = [
  { skill: 'React & Next.js', level: 95 },
  { skill: 'Angular', level: 90 },
  { skill: 'TypeScript', level: 92 },
  { skill: 'State Management', level: 88 },
  { skill: 'UI/UX Design', level: 85 },
  { skill: 'Performance Optimization', level: 90 }
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <div className="flex items-center gap-3 mb-12">
          <Wrench className="text-cyan-400" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skills).map(([category, items], index) => (
            <SkillCategory key={category} category={category} items={items} index={index} />
          ))}
        </div>

        {/* Additional Skills Visualization */}
        <div className="mt-12 bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
          <h3 className="text-2xl font-bold text-cyan-400 mb-6 flex items-center gap-2">
            <Code size={24} />
            Core Competencies
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {competencies.map((item, index) => (
              <SkillProgress key={index} skill={item.skill} level={item.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
