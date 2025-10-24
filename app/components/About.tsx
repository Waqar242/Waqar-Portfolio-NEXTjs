'use client';

import { Zap, Sparkles, Code2, Rocket, Brain, Award, Server, Database } from 'lucide-react';

export default function About() {
  const stats = [
    { label: 'Years Experience', value: '3+', icon: '🚀' },
    { label: 'Projects Delivered', value: '20+', icon: '✨' },
    { label: 'Technologies Mastered', value: '25+', icon: '⚡' },
    { label: 'Client Satisfaction', value: '100%', icon: '🎯' }
  ];

  const highlights = [
    {
      icon: <Code2 className="text-cyan-400" size={24} />,
      title: 'Senior JavaScript Engineer',
      description:
        'Experienced in building scalable and high-performing applications using modern JavaScript technologies, including Angular, React, Next.js, and TypeScript. Adept at crafting clean architectures and delivering seamless user experiences across the full stack.'
    },
    {
      icon: <Server className="text-green-400" size={24} />,
      title: 'API Design & Integration',
      description:
        'Hands-on experience designing and integrating RESTful APIs using Node.js and Express, ensuring smooth data flow between frontend and backend systems.'
    },
    {
      icon: <Database className="text-yellow-400" size={24} />,
      title: 'Structured Data Management',
      description:
        'Proficient in working with relational databases like PostgreSQL and MySQL, using schema-based approaches and ORMs like Drizzle for clean, maintainable data models.'
    },
    {
      icon: <Award className="text-purple-400" size={24} />,
      title: 'Enterprise-Grade Solutions',
      description:
        'Proven track record in delivering scalable, maintainable solutions for global enterprises and high-growth startups.'
    }
  ];

  return (
    <section id="about" className="py-20 px-4 relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <div className="flex items-center gap-3 mb-4">
          <Zap className="text-cyan-400 animate-pulse" size={36} />
          <h2 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            About Me
          </h2>
        </div>

        <p className="text-xl text-gray-400 mb-12 max-w-3xl text-justify hyphens-auto break-words">
          Transforming ideas into exceptional digital experiences through code, creativity, and innovation.
        </p>

        {/* Main content cards */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {/* Card 1 - JavaScript Engineer */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative h-full flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/20">
              <div className="flex items-start gap-3 mb-4">
                <Sparkles className="text-cyan-400 mt-1 flex-shrink-0 animate-pulse" size={28} />
                <h3 className="text-2xl font-bold text-cyan-400">JavaScript Engineer</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4 text-justify hyphens-auto break-words">
                With <span className="text-cyan-400 font-bold">3+ years</span> of professional experience, I specialize in building robust, scalable, and visually engaging applications using modern JavaScript frameworks.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed text-justify hyphens-auto break-words mt-auto">
                My core expertise lies in <span className="text-cyan-400 font-semibold">Angular</span>, <span className="text-cyan-400 font-semibold">React</span>, and <span className="text-cyan-400 font-semibold">TypeScript</span> — combining strong architectural understanding with clean, maintainable code to craft delightful user experiences.
              </p>
            </div>
          </div>

          {/* Card 2 - AI */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative h-full flex flex-col bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm rounded-2xl p-8 border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-500/30">
              <div className="flex items-start gap-3 mb-4">
                <Brain className="text-purple-400 mt-1 flex-shrink-0" size={28} />
                <h3 className="text-2xl font-bold text-purple-400">AI-Powered Innovation</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4 text-justify hyphens-auto break-words">
                At the forefront of the <span className="text-purple-400 font-semibold">AI revolution</span>, I specialize in seamlessly integrating cutting-edge artificial intelligence into web applications, creating experiences that are intuitive, adaptive, and truly intelligent.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed text-justify hyphens-auto break-words mt-auto">
                From <span className="text-cyan-400 font-semibold">conversational interfaces</span> to <span className="text-cyan-400 font-semibold">intelligent recommendations</span>, I build solutions that leverage AI to solve real-world problems and deliver measurable business value.
              </p>
            </div>
          </div>

          {/* Card 3 - Backend & Databases */}
          <div className="relative group h-full">
            <div className="absolute inset-0 bg-gradient-to-r from-green-400/20 to-emerald-500/20 rounded-2xl blur-xl group-hover:blur-2xl transition-all" />
            <div className="relative h-full flex flex-col bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-green-500/30 hover:border-green-400/50 transition-all duration-300 hover:shadow-2xl hover:shadow-green-500/30">
              <div className="flex items-start gap-3 mb-4">
                <Server className="text-green-400 mt-1 flex-shrink-0" size={28} />
                <h3 className="text-2xl font-bold text-green-400">Backend & Database Foundations</h3>
              </div>
              <p className="text-lg text-gray-300 leading-relaxed mb-4 text-justify hyphens-auto break-words">
                Beyond frontend mastery, I have foundational experience in <span className="text-green-400 font-semibold">Node.js</span> and <span className="text-green-400 font-semibold">Express.js</span>, allowing me to build APIs, middleware, and handle server-side logic efficiently.
              </p>
              <p className="text-lg text-gray-300 leading-relaxed text-justify hyphens-auto break-words mt-auto">
                I work confidently with structured databases like <span className="text-green-400 font-semibold">PostgreSQL</span> and <span className="text-green-400 font-semibold">MySQL</span>, following schema-first approaches and using modern tools like <span className="text-green-400 font-semibold">Drizzle ORM</span> for clean, maintainable systems.
              </p>
            </div>
          </div>
        </div>

        {/* Highlights grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="group bg-slate-800/30 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-2"
            >
              <div className="mb-4 transform group-hover:scale-110 transition-transform">
                {highlight.icon}
              </div>
              <h4 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                {highlight.title}
              </h4>
              <p className="text-sm text-gray-400 leading-relaxed text-justify hyphens-auto break-words">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>

        {/* Stats */}
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-blue-500/10 rounded-2xl blur-2xl" />
          <div className="relative bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <h3 className="text-2xl font-bold text-center mb-8 bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
              By The Numbers
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="group relative bg-slate-900/50 backdrop-blur-sm rounded-xl p-6 border border-slate-700/50 text-center hover:border-cyan-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-cyan-500/20 hover:-translate-y-1"
                >
                  <div className="text-4xl mb-3">{stat.icon}</div>
                  <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform">
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-400 font-medium">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-300 mb-4 text-justify hyphens-auto break-words">
            Ready to bring your vision to life with cutting-edge full-stack development?
          </p>
          <div className="flex items-center justify-center gap-2 text-cyan-400">
            <span className="text-lg font-semibold">Let's create something extraordinary together</span>
            <Rocket className="animate-bounce" size={24} />
          </div>
        </div>
      </div>
    </section>
  );
}
