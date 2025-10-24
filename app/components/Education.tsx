'use client';

import { GraduationCap } from 'lucide-react';

export default function Education() {
  return (
    <section className="py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex items-center gap-3 mb-8">
          <GraduationCap className="text-cyan-400" size={32} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
            Education
          </h2>
        </div>
        
        <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10">
          <div className="flex items-start gap-4">
            <div className="w-16 h-16 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
              <GraduationCap size={32} className="text-white" />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-cyan-400 mb-2">
                Bachelor of Science in Computer Science
              </h3>
              <p className="text-lg text-gray-300 font-semibold">FAST - NUCES</p>
              <p className="text-gray-400 mt-2">National University of Computer and Emerging Sciences</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}