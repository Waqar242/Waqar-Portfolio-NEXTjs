'use client';

import { Terminal, Menu, X, Download } from 'lucide-react';

interface NavigationProps {
  isScrolled: boolean;
  activeSection: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (value: boolean) => void;
  scrollToSection: (id: string) => void;
}

export default function Navigation({
  isScrolled,
  activeSection,
  isMenuOpen,
  setIsMenuOpen,
  scrollToSection
}: NavigationProps) {
  const menuItems = ['Home', 'About', 'Experience', 'Skills', 'Contact'];

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-900/95 backdrop-blur-md shadow-xl shadow-cyan-500/5'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo / Brand */}
          <div className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent flex items-center gap-2">
            <Terminal className="text-cyan-400" size={28} />
            WA
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {menuItems.map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`relative transition-colors group ${
                  activeSection === item.toLowerCase()
                    ? 'text-cyan-400'
                    : 'text-gray-300 hover:text-cyan-400'
                }`}
              >
                {item}
                <span
                  className={`absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 transform origin-left transition-transform ${
                    activeSection === item.toLowerCase()
                      ? 'scale-x-100'
                      : 'scale-x-0 group-hover:scale-x-100'
                  }`}
                />
              </button>
            ))}

            {/* ✅ Resume Button */}
            <a
              href="/Muhammad-Waqar-Aslam-Frontend-Dev.pdf"
              download
              className="flex items-center gap-2 text-gray-200 bg-gradient-to-r from-cyan-500 to-blue-600 px-4 py-2 rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/20 transition-all duration-300"
            >
              <Download size={18} />
              Resume
            </a>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900/95 backdrop-blur-md border-t border-slate-800">
          {menuItems.map((item) => (
            <button
              key={item}
              onClick={() => scrollToSection(item.toLowerCase())}
              className="block w-full text-left px-4 py-3 hover:bg-slate-800 transition-colors"
            >
              {item}
            </button>
          ))}

          {/* ✅ Mobile Resume Button */}
          <a
            href="/Muhammad-Waqar-Aslam-Frontend-Dev.pdf"
            download
            className="block w-full text-left px-4 py-3 text-cyan-400 font-semibold border-t border-slate-800 hover:bg-slate-800 transition-colors flex items-center gap-2"
          >
            <Download size={18} />
            Download Resume
          </a>
        </div>
      )}
    </nav>
  );
}
