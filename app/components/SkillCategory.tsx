'use client';

interface SkillCategoryProps {
  category: string;
  items: string[];
  index: number;
}

export default function SkillCategory({ category, items, index }: SkillCategoryProps) {
  return (
    <div
      className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex items-center gap-2 mb-4">
        <div className="w-2 h-2 rounded-full bg-cyan-400 group-hover:animate-ping" />
        <h3 className="text-xl font-bold text-cyan-400">{category}</h3>
      </div>
      <div className="flex flex-wrap gap-2">
        {items.map((skill, idx) => (
          <span
            key={idx}
            className="px-3 py-1.5 bg-slate-700/50 rounded-full text-sm text-gray-300 hover:bg-gradient-to-r hover:from-cyan-500/20 hover:to-blue-500/20 hover:text-cyan-400 hover:border-cyan-400/30 border border-transparent transition-all cursor-default"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}