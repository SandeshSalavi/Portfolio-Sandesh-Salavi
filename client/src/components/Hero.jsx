import React from 'react';
import { ArrowRight, Download, Mail, Sparkles, Terminal, Code, Cpu } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import AbstractAiVisual from './AbstractAiVisual';

export default function Hero({ onOpenPlaceholder }) {
  return (
    <section id="top" className="relative min-h-[92vh] pt-28 sm:pt-36 pb-16 flex items-center justify-center overflow-hidden">
      {/* Background ambient gradient glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-blue-600/10 via-violet-600/10 to-transparent rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Hero Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status Chip */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-dark-900 border border-slate-800 text-xs font-mono text-slate-300 mb-6 shadow-sm">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Aspiring AI Engineer &amp; Software Developer</span>
            </div>

            {/* Greeting */}
            <h2 className="text-xl sm:text-2xl font-medium text-slate-300 font-mono tracking-tight mb-2">
              Hi, I'm <span className="text-white font-bold">Sandesh Salavi</span>
            </h2>

            {/* Main Headline */}
            <h1 className="text-3xl sm:text-5xl lg:text-[3.25rem] font-extrabold tracking-tight text-white leading-[1.15] mb-6">
              Building Intelligent Solutions with{' '}
              <span className="text-gradient-blue-violet">
                AI &amp; Software Engineering
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl mb-8 font-normal">
              I'm an aspiring AI Engineer and Software Developer interested in machine learning, deep learning, generative AI, and full-stack application development.
            </p>

            {/* Target Roles Tags */}
            <div className="flex flex-wrap gap-2 mb-8 items-center">
              <span className="text-xs font-mono text-slate-400 mr-1">Target Roles:</span>
              {[
                'AI Engineer',
                'Machine Learning Engineer',
                'Software Developer',
                'AI-focused Full-Stack Developer'
              ].map((role) => (
                <span
                  key={role}
                  className="px-2.5 py-1 text-xs rounded-lg bg-dark-900/90 border border-slate-800 text-slate-300 font-medium hover:border-slate-700 transition"
                >
                  {role}
                </span>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 w-full sm:w-auto mb-8">
              {/* View Projects */}
              <a
                href="#projects"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-glow-blue transition active:scale-95"
              >
                <span>View My Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              {/* Download Resume Button */}
              <button
                onClick={() => onOpenPlaceholder('resume')}
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-dark-900 hover:bg-slate-800/80 text-slate-200 border border-slate-700/80 hover:border-slate-600 transition active:scale-95"
              >
                <Download className="w-4 h-4 text-blue-400" />
                <span>Download Resume</span>
              </button>

              {/* Contact Me Button */}
              <a
                href="#contact"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-xl font-medium text-sm bg-transparent hover:bg-slate-900 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition"
              >
                <Mail className="w-4 h-4 text-violet-400" />
                <span>Contact Me</span>
              </a>
            </div>

            {/* External Links */}
            <div className="flex items-center gap-4 pt-4 border-t border-slate-800/80 w-full">
              <span className="text-xs font-mono text-slate-400">Profiles:</span>

              <a
                href="https://github.com/SandeshSalavi"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-blue-400 transition"
              >
                <GithubIcon className="w-4 h-4" />
                <span>GitHub</span>
              </a>

              <button
                onClick={() => onOpenPlaceholder('linkedin')}
                className="inline-flex items-center gap-2 text-xs font-medium text-slate-300 hover:text-blue-400 transition"
              >
                <LinkedinIcon className="w-4 h-4" />
                <span>LinkedIn (Placeholder)</span>
              </button>
            </div>

          </div>

          {/* Right Column: AI Visual Illustration */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="w-full max-w-md lg:max-w-none">
              <AbstractAiVisual />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
