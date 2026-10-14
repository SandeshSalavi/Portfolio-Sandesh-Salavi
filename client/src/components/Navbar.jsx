import React, { useState, useEffect } from 'react';
import { Menu, X, Mail, ExternalLink, Code2 } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';

export default function Navbar({ onOpenPlaceholder }) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Education', href: '#education' },
    { name: 'Resume', href: '#resume' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled 
          ? 'bg-dark-950/85 backdrop-blur-md border-b border-slate-800/80 py-3 shadow-lg' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Monogram Brand */}
        <a 
          href="#top" 
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-blue-500 rounded-lg p-1"
        >
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-600 to-violet-600 p-[1px] shadow-glow-blue transition group-hover:scale-105">
            <div className="w-full h-full bg-dark-900 rounded-[11px] flex items-center justify-center font-mono font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-violet-400">
              SS
            </div>
          </div>
          <div className="flex flex-col">
            <span className="font-bold text-white tracking-tight text-base sm:text-lg group-hover:text-blue-300 transition">
              Sandesh Salavi
            </span>
            <span className="text-[11px] font-mono text-slate-400 leading-none">
              AI &amp; Software Dev
            </span>
          </div>
        </a>

        {/* Desktop Nav Links */}
        <nav className="hidden md:flex items-center gap-1 bg-dark-900/60 p-1.5 rounded-full border border-slate-800/80 backdrop-blur-sm">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/70 rounded-full transition"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action icons & CTA */}
        <div className="hidden lg:flex items-center gap-3">
          <a
            href="https://github.com/SandeshSalavi"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/70 border border-slate-800 transition"
            title="GitHub: SandeshSalavi"
            aria-label="GitHub Profile"
          >
            <GithubIcon className="w-4 h-4" />
          </a>

          <button
            onClick={() => onOpenPlaceholder('linkedin')}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800/70 border border-slate-800 transition"
            title="LinkedIn Profile (Placeholder)"
            aria-label="LinkedIn Profile"
          >
            <LinkedinIcon className="w-4 h-4" />
          </button>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider bg-blue-600/10 hover:bg-blue-600/20 text-blue-400 border border-blue-500/30 hover:border-blue-500/60 shadow-glow-blue transition"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Get in Touch</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-dark-900 border border-slate-800 text-slate-300 hover:text-white focus:outline-none"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="md:hidden bg-dark-900/95 border-b border-slate-800/90 backdrop-blur-xl px-4 pt-3 pb-6 animate-fadeIn">
          <nav className="flex flex-col space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="px-4 py-2.5 text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800/60 rounded-xl transition"
              >
                {link.name}
              </a>
            ))}
            <div className="pt-4 mt-2 border-t border-slate-800 flex items-center justify-around">
              <a
                href="https://github.com/SandeshSalavi"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>
              <button
                onClick={() => {
                  setIsOpen(false);
                  onOpenPlaceholder('linkedin');
                }}
                className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium text-slate-300 bg-slate-800/50 border border-slate-700"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn</span>
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
