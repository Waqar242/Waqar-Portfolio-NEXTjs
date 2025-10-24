'use client';

import { Mail, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-slate-800/50 backdrop-blur-sm">
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-4">
          {/* Copyright Text */}
          <div className="text-gray-400">
            <p>© 2025 Muhammad Waqar Aslam. All rights reserved.</p>
          </div>

          {/* Social Icons */}
          <div className="flex items-center justify-center md:justify-end gap-6">
            <a
              href="mailto:waslamawan@gmail.com"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
            <a
              href="https://linkedin.com/in/waqar-aslam"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-cyan-400 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
