'use client';

import { Zap, Sparkles } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Completed', value: '15+' },
    { label: 'Technologies', value: '20+' },
    { label: 'Happy Clients', value: '10+' }
  ];

  return (
    <section id="about" className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <Zap className="text-cyan-400" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
            <p className="text-lg text-gray-300 leading-relaxed mb-6">
              Senior Front-End Engineer with <span className="text-cyan-400 font-semibold">3+ years</span> of experience in modern JavaScript, TypeScript, React, and Angular. 
            </p>
            <p className="text-lg text-gray-300 leading-relaxed">
              Skilled in architecting scalable, component-based interfaces with a focus on <span className="text-cyan-400 font-semibold">performance</span>, <span className="text-cyan-400 font-semibold">accessibility</span>, and responsive design.
            </p>
          </div>

          <div className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20">
            <div className="flex items-start gap-3 mb-4">
              <Sparkles className="text-cyan-400 mt-1 flex-shrink-0" size={24} />
              <p className="text-lg text-gray-300 leading-relaxed">
                I specialize in leveraging <span className="text-cyan-400 font-semibold">AI</span> to build intelligent, user-centric web applications that solve real-world problems and deliver exceptional user experiences.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          {stats.map((stat, index) => (
            <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-500/50 transition-all">
              <div className="text-3xl font-bold text-cyan-400 mb-2">{stat.value}</div>
              <div className="text-sm text-gray-400">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
