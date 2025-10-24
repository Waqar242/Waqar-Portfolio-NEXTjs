'use client';

interface SkillProgressProps {
  skill: string;
  level: number;
}

export default function SkillProgress({ skill, level }: SkillProgressProps) {
  return (
    <div className="group">
      <div className="flex justify-between mb-2">
        <span className="text-gray-300 font-medium group-hover:text-cyan-400 transition-colors">
          {skill}
        </span>
        <span className="text-cyan-400 font-bold">{level}%</span>
      </div>
      <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full transition-all duration-1000 ease-out"
          style={{ width: `${level}%` }}
        />
      </div>
    </div>
  );
}