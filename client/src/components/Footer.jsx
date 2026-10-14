import React from 'react';
import { ArrowUp, Mail, Heart, Terminal, Database, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';

export default function Footer({ onOpenPlaceholder }) {
  const profile = portfolioData.profile;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-dark-950 border-t border-slate-900 py-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center pb-8 border-b border-slate-900">
          
          {/* Brand & Monogram (6 cols) */}
          <div className="md:col-span-6 space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px]">
                <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400 text-sm">
                  SS
                </div>
              </div>
              <span className="text-lg font-bold text-white tracking-tight">
                Sandesh Salavi
              </span>
            </div>
            <p className="text-xs text-slate-400 font-mono max-w-md">
              Aspiring AI Engineer &amp; Software Developer • KIT College of Engineering (2027)
            </p>
          </div>

          {/* Social Icons & Back to Top (6 cols) */}
          <div className="md:col-span-6 flex flex-wrap items-center justify-start md:justify-end gap-3">
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              title="GitHub Profile"
              aria-label="GitHub Profile"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            <button
              onClick={() => onOpenPlaceholder('linkedin')}
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              title="LinkedIn Placeholder"
              aria-label="LinkedIn Placeholder"
            >
              <LinkedinIcon className="w-4 h-4" />
            </button>

            <a
              href={`mailto:${profile.email}`}
              className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-400 hover:text-white hover:border-slate-700 transition"
              title="Direct Email"
              aria-label="Direct Email"
            >
              <Mail className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="p-2.5 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition ml-2"
              title="Scroll to Top"
              aria-label="Scroll to top of page"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Tech Stack & Legal Footer */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            &copy; {new Date().getFullYear()} Sandesh Salavi. All rights reserved.
          </div>

          <div className="flex items-center gap-2">
            <span>Built with</span>
            <span className="px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-blue-400">
              MERN Stack
            </span>
            <span>&amp;</span>
            <span className="px-2 py-0.5 rounded bg-dark-900 border border-slate-800 text-violet-400">
              Tailwind CSS
            </span>
          </div>
        </div>

      </div>
    </footer>
  );
}
