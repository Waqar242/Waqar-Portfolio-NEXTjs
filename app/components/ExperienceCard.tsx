'use client';

interface ExperienceCardProps {
  company: string;
  role: string;
  period: string;
  location: string;
  logo: string;
  color: string;
  achievements: string[];
}

export default function ExperienceCard({
  company,
  role,
  period,
  location,
  logo,
  color,
  achievements
}: ExperienceCardProps) {
  return (
    <div className="group relative bg-slate-800/40 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-500 hover:shadow-2xl hover:shadow-cyan-500/10 hover:-translate-y-1">
      {/* Gradient accent bar */}
      <div
        className={`absolute top-0 left-0 w-2 h-full bg-gradient-to-b ${color} rounded-l-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
      />

      {/* Header */}
      <div className="flex flex-wrap justify-between items-start mb-6 gap-4">
        <div className="flex items-start gap-4">
          {/* Logo */}
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-slate-100/90 dark:bg-white/10 border border-white/20 shadow-md">
            <img
              src={logo}
              alt={`${company} logo`}
              className="w-14 h-14 object-contain drop-shadow-md"
            />
          </div>

          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
              {company}
            </h3>
            <p className="text-lg text-gray-300 font-semibold">{role}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-gray-400 font-medium">{period}</p>
          <p className="text-gray-500">{location}</p>
        </div>
      </div>

      {/* Achievements */}
      <ul className="space-y-4">
        {achievements.map((achievement, i) => (
          <li
            key={i}
            className="text-gray-300 flex gap-3 items-start group/item transition-all duration-300"
          >
            <span className="text-cyan-400 mt-1.5 text-xl flex-shrink-0">→</span>
            <span
              className="text-gray-300 group-hover/item:text-white transition-colors duration-300 text-justify leading-relaxed"
              dangerouslySetInnerHTML={{ __html: achievement }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
