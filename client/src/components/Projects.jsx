import React, { useState } from 'react';
import { 
  Activity, 
  Scale, 
  ExternalLink, 
  Layers, 
  AlertCircle, 
  FileText, 
  Sliders, 
  ShieldCheck, 
  ArrowRight,
  ShieldAlert
} from 'lucide-react';
import { GithubIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import ProjectModal from './ProjectModal';

export default function Projects({ onOpenPlaceholder }) {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = portfolioData.projects;

  return (
    <section id="projects" className="py-20 relative bg-dark-950/70 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>03 / FEATURED WORK</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Projects &amp; Prototypes
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-2xl">
            Featured technical projects spanning AI/ML research prototypes and full-stack software development systems. Structured with clearly documented architectures and editable specification fields.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-3" />
        </div>

        {/* Featured Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          {/* Project 1: NeuroStage */}
          <div className="group rounded-2xl bg-dark-900/90 border border-slate-800/90 hover:border-violet-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-glow-card">
            
            {/* Visual Header: Neuroscience-Inspired Visual */}
            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-dark-950 via-[#0c1222] to-dark-900 p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
              {/* EEG Time-Series Wave Graphic SVG */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-35 pointer-events-none" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 150" 
                preserveAspectRatio="none"
              >
                <path 
                  d="M0,75 Q25,20 50,75 T100,75 T150,110 T200,30 T250,90 T300,60 T350,120 T400,40 T450,85 T500,75" 
                  fill="none" 
                  stroke="#8b5cf6" 
                  strokeWidth="2.5" 
                />
                <path 
                  d="M0,75 Q30,60 60,75 T120,40 T180,95 T240,65 T300,100 T360,50 T420,80 T500,75" 
                  fill="none" 
                  stroke="#38bdf8" 
                  strokeWidth="1.5" 
                  strokeDasharray="4 4"
                />
              </svg>

              {/* Category & Status */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/30 text-violet-300 font-mono text-xs font-semibold">
                  <Activity className="w-3.5 h-3.5 text-violet-400" />
                  <span>AI / Machine Learning</span>
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-amber-300">
                  Research Prototype
                </span>
              </div>

              {/* Title & Micro-badges */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>NeuroStage</span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Sleep-related EEG Time-Series Analysis &amp; Classifier
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              
              {/* Short Description */}
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                An AI-focused project involving sleep-related EEG data and machine-learning-based analysis.
              </p>

              {/* Clinical Disclaimer */}
              <div className="p-3 rounded-xl bg-amber-950/20 border border-amber-500/30 flex items-start gap-2.5">
                <ShieldAlert className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-amber-200/90 leading-tight">
                  <strong className="text-amber-300">Disclaimer:</strong> Research prototype — Not a clinically certified diagnostic system. Designed for experimental and academic exploration only.
                </p>
              </div>

              {/* Editable Fields Summary */}
              <div className="space-y-2 bg-dark-950/60 p-3.5 rounded-xl border border-slate-800/80 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="font-mono text-violet-400 shrink-0">Contribution:</span>
                  <span className="text-slate-400 line-clamp-1">Data pipeline, signal filtering, epoch segmentation, model experimentation</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="font-mono text-blue-400 shrink-0">Architecture:</span>
                  <span className="text-slate-400 line-clamp-1">Feature extraction, CNN/LSTM/Transformer/ML classifiers</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="font-mono text-slate-400 shrink-0">Validation:</span>
                  <span className="text-slate-400 line-clamp-1">[Pending finalized benchmarks — No unverified metrics]</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(projects[0])}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-violet-600/15 hover:bg-violet-600/25 text-violet-300 border border-violet-500/30 transition"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Inspect All 8 Fields</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenPlaceholder('github-placeholder', projects[0].fields.github.note)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-950 border border-slate-800 hover:border-slate-700 transition"
                    title="GitHub Repository (Pending)"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenPlaceholder('demo-placeholder', projects[0].fields.liveDemo.note)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-950 border border-slate-800 hover:border-slate-700 transition"
                    title="Live Demo (Pending Deployment)"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

          {/* Project 2: Advocate Advisory System */}
          <div className="group rounded-2xl bg-dark-900/90 border border-slate-800/90 hover:border-blue-500/40 transition-all duration-300 flex flex-col overflow-hidden shadow-glow-card">
            
            {/* Visual Header: Legal-Tech Inspired Visual */}
            <div className="relative h-48 sm:h-56 bg-gradient-to-br from-dark-950 via-[#0a1628] to-dark-900 p-6 flex flex-col justify-between border-b border-slate-800/80 overflow-hidden">
              {/* Legal Tech Scales & Workflow Graphic SVG */}
              <svg 
                className="absolute inset-0 w-full h-full opacity-30 pointer-events-none" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 500 150" 
                preserveAspectRatio="none"
              >
                <circle cx="250" cy="45" r="25" fill="none" stroke="#3b82f6" strokeWidth="2" />
                <path d="M225,45 L150,90 M275,45 L350,90 M250,70 L250,130" stroke="#3b82f6" strokeWidth="2" />
                <path d="M125,90 L175,90 M325,90 L375,90" stroke="#60a5fa" strokeWidth="3" />
                <rect x="50" y="100" width="80" height="35" rx="6" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
                <rect x="370" y="100" width="80" height="35" rx="6" fill="none" stroke="#64748b" strokeWidth="1.5" strokeDasharray="3 3" />
              </svg>

              {/* Category & Status */}
              <div className="relative z-10 flex items-center justify-between">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-300 font-mono text-xs font-semibold">
                  <Scale className="w-3.5 h-3.5 text-blue-400" />
                  <span>Software Development</span>
                </span>
                <span className="text-xs font-mono px-2.5 py-1 rounded bg-slate-800/80 border border-slate-700 text-blue-300">
                  Full-Stack Application
                </span>
              </div>

              {/* Title & Micro-badges */}
              <div className="relative z-10">
                <h3 className="text-2xl font-bold text-white tracking-tight flex items-center gap-2">
                  <span>Advocate Advisory System</span>
                </h3>
                <p className="text-xs font-mono text-slate-400 mt-1">
                  Legal Practice Management &amp; Case Workflow Platform
                </p>
              </div>
            </div>

            {/* Card Body */}
            <div className="p-6 flex-1 flex flex-col justify-between space-y-5">
              
              {/* Short Description */}
              <p className="text-sm text-slate-200 leading-relaxed font-normal">
                A software development project focused on an advocate advisory application.
              </p>

              {/* Advisory Disclaimer */}
              <div className="p-3 rounded-xl bg-blue-950/20 border border-blue-500/30 flex items-start gap-2.5">
                <ShieldCheck className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <p className="text-[11px] text-blue-200/90 leading-tight">
                  <strong className="text-blue-300">Operational Scope:</strong> Designed as an administrative and advisory workflow tool for legal practitioners.
                </p>
              </div>

              {/* Editable Fields Summary */}
              <div className="space-y-2 bg-dark-950/60 p-3.5 rounded-xl border border-slate-800/80 text-xs">
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="font-mono text-blue-400 shrink-0">Tech Stack:</span>
                  <span className="text-slate-400 line-clamp-1">React.js, Node.js, Express.js, MongoDB, REST APIs, JWT</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="font-mono text-violet-400 shrink-0">Features:</span>
                  <span className="text-slate-400 line-clamp-1">Hearing calendar, client advisory notes, document indexing</span>
                </div>
                <div className="flex items-start gap-2 text-slate-300">
                  <span className="font-mono text-slate-400 shrink-0">Screenshots:</span>
                  <span className="text-slate-400 line-clamp-1">[Mockup placeholder ready in /client/public/assets]</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="pt-2 border-t border-slate-800/80 flex items-center justify-between gap-3">
                <button
                  onClick={() => setSelectedProject(projects[1])}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600/15 hover:bg-blue-600/25 text-blue-300 border border-blue-500/30 transition"
                >
                  <Sliders className="w-3.5 h-3.5" />
                  <span>Inspect All 9 Fields</span>
                </button>

                <div className="flex items-center gap-2">
                  <button
                    onClick={() => onOpenPlaceholder('github-placeholder', projects[1].fields.github.note)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-950 border border-slate-800 hover:border-slate-700 transition"
                    title="GitHub Repository (Pending)"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => onOpenPlaceholder('demo-placeholder', projects[1].fields.liveDemo.note)}
                    className="p-2 rounded-xl text-slate-400 hover:text-white bg-dark-950 border border-slate-800 hover:border-slate-700 transition"
                    title="Live Demo (Pending Staging)"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* Project In-Depth Field Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
        onOpenPlaceholder={onOpenPlaceholder}
      />
    </section>
  );
}
