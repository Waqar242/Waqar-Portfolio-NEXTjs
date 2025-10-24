'use client';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  icon: string;
  color: string;
  achievements: string[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  icon,
  color,
  achievements
}: ExperienceCardProps) {
  return (
    <div className="group relative bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      {/* Gradient accent */}
      <div className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${color} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity`} />
      
      <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
        <div className="flex items-start gap-4">
          <div className="text-4xl">{icon}</div>
          <div>
            <h3 className="text-2xl font-bold text-cyan-400 mb-1">{company}</h3>
            <p className="text-lg text-gray-300 font-semibold">{role}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-gray-400 font-medium">{period}</p>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>
      
      <ul className="space-y-4">
        {achievements.map((achievement, i) => (
          <li key={i} className="text-gray-300 flex gap-3 items-start group/item">
            <span className="text-cyan-400 mt-1.5 text-xl flex-shrink-0">→</span>
            <span className="group-hover/item:text-white transition-colors">{achievement}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}