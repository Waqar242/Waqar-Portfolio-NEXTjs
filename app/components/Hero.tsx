'use client';

import { Mail, Linkedin, ChevronDown, Sparkles, Rocket } from 'lucide-react';
import TechStack from './TechStack';

interface HeroProps {
  scrollToSection: (id: string) => void;
}

export default function Hero({ scrollToSection }: HeroProps) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 pt-32 md:pt-40 relative overflow-hidden"
    >
      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-cyan-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl animate-pulse" />
      </div>

      <div className="text-center max-w-5xl mx-auto relative">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-600 rounded-full blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-300 animate-pulse" />

            <div className="relative w-40 h-40 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 border-4 border-cyan-400/30 flex items-center justify-center overflow-hidden">
              <img
                src="/Waqar.png"
                alt="Waqar Aslam"
                className="w-full h-full object-cover object-top rounded-full scale-110"
              />

              {/* Fade effect overlay */}
              <div className="absolute bottom-0 w-full h-1/3 bg-gradient-to-t from-slate-900 via-slate-900/70 to-transparent pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="mb-6">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Sparkles className="text-cyan-400 animate-pulse" size={24} />
            <span className="text-cyan-400 text-sm font-semibold tracking-wider">
              FULL STACK JAVASCRIPT ENGINEER
            </span>
            <Sparkles className="text-cyan-400 animate-pulse" size={24} />
          </div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 relative">
            <span className="inline-block animate-gradient bg-gradient-to-r from-cyan-400 via-blue-500 via-purple-600 to-cyan-400 bg-[length:200%_auto] bg-clip-text text-transparent">
              Muhammad Waqar Aslam
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-6 leading-relaxed">
            Building Scalable, Performant, and Modern Web Applications with{' '}
            <span className="text-cyan-400 font-semibold">React</span>,{' '}
            <span className="text-red-400 font-semibold">Angular</span>,{' '}
            <span className="text-blue-400 font-semibold">TypeScript</span>,{' '}
            and <span className="text-green-400 font-semibold">Node.js</span>.
          </p>

          <p className="text-lg text-gray-400 mb-8 leading-relaxed max-w-3xl mx-auto">
            Experienced in designing clean frontends, building robust backends with{' '}
            <span className="text-green-400 font-semibold">Express.js</span>, and managing databases like{' '}
            <span className="text-green-400 font-semibold">PostgreSQL</span> and{' '}
            <span className="text-green-400 font-semibold">MySQL</span> using modern ORMs such as{' '}
            <span className="text-cyan-400 font-semibold">Drizzle</span>.
            I create full-stack systems that connect intuitive UIs with reliable, high-performing APIs.
          </p>

          <TechStack />
        </div>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          <a
            href="mailto:waslamawan@gmail.com"
            className="group flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 rounded-xl transition-all transform hover:scale-105 hover:shadow-xl hover:shadow-cyan-500/50 font-semibold"
          >
            <Mail size={20} />
            <span>Let's Talk</span>
            <Rocket
              size={20}
              className="group-hover:translate-x-1 transition-transform"
            />
          </a>
          <a
            href="https://linkedin.com/in/waqar-aslam"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-8 py-4 border-2 border-cyan-500 hover:bg-cyan-500/10 rounded-xl transition-all hover:shadow-lg hover:shadow-cyan-500/25 font-semibold"
          >
            <Linkedin size={20} />
            LinkedIn
          </a>
        </div>

        <button
          onClick={() => scrollToSection('about')}
          className="animate-bounce inline-block"
        >
          <ChevronDown size={40} className="text-cyan-400" />
        </button>

        <style jsx>{`
          @keyframes gradient {
            0% {
              background-position: 0% 50%;
            }
            50% {
              background-position: 100% 50%;
            }
            100% {
              background-position: 0% 50%;
            }
          }
          .animate-gradient {
            animation: gradient 3s ease infinite;
          }
        `}</style>
      </div>
    </section>
  );
}
