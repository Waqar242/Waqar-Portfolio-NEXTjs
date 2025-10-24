'use client';

interface SkillBadgeProps {
  title: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced' | string;
  icon?: string;
}

export default function SkillBadge({ title, level, icon }: SkillBadgeProps) {
  const levelColor =
    level === 'Advanced'
      ? 'from-cyan-500 to-blue-500'
      : level === 'Intermediate'
      ? 'from-amber-400 to-yellow-500'
      : 'from-slate-500 to-slate-600';

  return (
    <div className="flex items-center justify-between bg-slate-800/40 rounded-xl p-4 border border-slate-700/50 hover:border-cyan-500/40 transition-all">
      <div className="flex items-center gap-3">
        <span className="text-2xl">{icon}</span>
        <span className="text-gray-300 font-medium">{title}</span>
      </div>
      <span
        className={`text-sm font-semibold text-white px-3 py-1 rounded-full bg-gradient-to-r ${levelColor}`}
      >
        {level}
      </span>
    </div>
  );
}
