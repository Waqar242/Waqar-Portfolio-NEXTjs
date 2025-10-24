'use client';

import { Mail, Linkedin, Sparkles, Zap } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />
      
      <div className="max-w-4xl mx-auto text-center relative">
        <div className="mb-8">
          <Sparkles className="text-cyan-400 mx-auto mb-4 animate-pulse" size={40} />
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
            Let's Build Something Amazing
          </h2>
          <p className="text-xl text-gray-300 leading-relaxed">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 mb-8">
          <a
            href="mailto:waslamawan@gmail.com"
            className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50 text-lg font-semibold"
          >
            <Mail size={24} />
            <span>waslamawan@gmail.com</span>
            <Zap size={20} className="group-hover:rotate-12 transition-transform" />
          </a>
          <a
            href="https://linkedin.com/in/waqar-aslam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-xl transition-all hover:shadow-xl hover:shadow-cyan-500/25 text-lg font-semibold"
          >
            <Linkedin size={24} />
            <span>LinkedIn Profile</span>
          </a>
        </div>
        
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-slate-800/50 backdrop-blur-sm rounded-full border border-slate-700">
          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
          <span className="text-gray-300">Available for Freelance & Full-time</span>
        </div>
        
        <p className="mt-8 text-gray-400 flex items-center justify-center gap-2">
          <span>📱</span>
          <span>+92 323 8056480</span>
        </p>
      </div>
    </section>
  );
}