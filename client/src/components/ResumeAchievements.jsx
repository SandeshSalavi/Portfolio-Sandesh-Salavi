import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  Eye, 
  ShieldCheck, 
  Award, 
  Upload, 
  Info, 
  CheckCircle2, 
  AlertCircle,
  ExternalLink
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function ResumeAchievements({ onOpenPlaceholder }) {
  const resume = portfolioData.profile.resume;
  const achievements = portfolioData.achievements;

  return (
    <section id="resume" className="py-20 relative bg-dark-950/50 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
            <span>05 / CREDENTIALS</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Resume &amp; Certifications
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Access engineering resume documentation and verified credentials. Placeholder states protect accuracy until official files are linked.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Resume Card (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card relative">
            
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 rounded-2xl bg-violet-500/10 border border-violet-500/30 flex items-center justify-center text-violet-400 shadow-glow-violet">
                <FileText className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-lg sm:text-xl font-bold text-white tracking-tight">
                  Curriculum Vitae / Engineering Resume
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Target: AI Engineering &amp; Software Development Roles
                </span>
              </div>
            </div>

            {/* Resume Upload Status Banner */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 mb-6 space-y-3">
              <div className="flex items-center justify-between text-xs font-mono">
                <span className="text-slate-400">Current Resume Status:</span>
                <span className="px-2.5 py-1 rounded bg-amber-500/10 border border-amber-500/30 text-amber-300">
                  Placeholder Configured
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {resume.placeholderNote}
              </p>
            </div>

            {/* Resume Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 mb-6">
              {/* Download Resume */}
              <button
                onClick={() => onOpenPlaceholder('resume')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-glow-blue transition active:scale-95"
              >
                <Download className="w-4 h-4" />
                <span>Download Resume</span>
              </button>

              {/* View Resume */}
              <button
                onClick={() => onOpenPlaceholder('resume')}
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-medium bg-dark-950 hover:bg-slate-800 text-slate-200 border border-slate-800 hover:border-slate-700 transition active:scale-95"
              >
                <Eye className="w-4 h-4 text-slate-400" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Quick Upload Instructions for Sandesh */}
            <div className="p-4 rounded-xl bg-dark-950/50 border border-dashed border-slate-800 text-xs text-slate-400 font-mono space-y-1.5">
              <div className="text-slate-300 font-semibold flex items-center gap-1.5">
                <Upload className="w-3.5 h-3.5 text-blue-400" />
                <span>How to activate your resume:</span>
              </div>
              <p>1. Export your verified resume as <code className="text-blue-300">resume.pdf</code></p>
              <p>2. Save it to <code className="text-blue-300">client/public/resume.pdf</code></p>
              <p>3. Both Download and View buttons will automatically serve the file.</p>
            </div>

          </div>

          {/* Achievements & Certifications (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card relative">
            
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                  Verified Certifications &amp; Honors
                </h3>
                <span className="text-xs font-mono text-slate-400">
                  Strictly Verified Credentials
                </span>
              </div>
            </div>

            {/* Strict No-Fake-Badges Policy Callout */}
            <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800/80 space-y-3">
              <div className="flex items-center gap-2 text-xs font-mono text-cyan-400">
                <ShieldCheck className="w-4 h-4" />
                <span>Integrity First Policy</span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed font-mono">
                {achievements.notice}
              </p>
            </div>

            {/* Verified Items or Pending State */}
            <div className="mt-6">
              {achievements.items.length > 0 ? (
                <div className="space-y-3">
                  {achievements.items.map((item, idx) => (
                    <div key={idx} className="p-3.5 rounded-xl bg-dark-950 border border-slate-800 text-xs font-mono">
                      <div className="text-white font-semibold">{item.title}</div>
                      <div className="text-slate-400">{item.issuer} • {item.date}</div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="p-6 rounded-xl bg-dark-950/40 border border-dashed border-slate-800 text-center space-y-2">
                  <div className="w-8 h-8 rounded-full bg-slate-800/60 mx-auto flex items-center justify-center text-slate-400">
                    <Info className="w-4 h-4" />
                  </div>
                  <p className="text-xs font-mono text-slate-400">
                    Awaiting verified certification submissions.
                  </p>
                  <p className="text-[11px] font-mono text-slate-400">
                    (No fake badges or unearned certificates are displayed)
                  </p>
                </div>
              )}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
