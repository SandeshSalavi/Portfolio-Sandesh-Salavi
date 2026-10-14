import React from 'react';
import { GraduationCap, Calendar, BookOpen, Award, CheckCircle2, MapPin, Building2, HelpCircle } from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Education() {
  const edu = portfolioData.education;

  return (
    <section id="education" className="py-20 relative bg-dark-900/30 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>04 / ACADEMIC FOUNDATION</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Education
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Undergraduate engineering degree program at KIT College of Engineering. Coursework and performance metrics are maintained with honest, verified placeholders.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-3" />
        </div>

        {/* Education Detailed Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card relative overflow-hidden">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left Column: Degree & Institution Overview */}
            <div className="lg:col-span-5 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-2xl bg-blue-500/10 border border-blue-500/30 text-blue-400 shadow-glow-blue">
                  <GraduationCap className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                    {edu.degree}
                  </h3>
                  <div className="flex items-center gap-1.5 text-slate-300 font-medium text-sm mt-0.5">
                    <Building2 className="w-4 h-4 text-violet-400" />
                    <span>{edu.institution}</span>
                  </div>
                </div>
              </div>

              {/* Institution metadata */}
              <div className="p-4 rounded-xl bg-dark-950/80 border border-slate-800 space-y-2.5 text-xs font-mono">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-blue-400" />
                    Expected Graduation:
                  </span>
                  <span className="text-white font-semibold bg-blue-950/60 px-2 py-0.5 rounded border border-blue-500/40">
                    {edu.expectedGraduation}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Branch / Specialization:</span>
                  <span className="text-amber-300/90">{edu.branch}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Start Year:</span>
                  <span className="text-slate-400">{edu.startYear}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400">Cumulative Performance / CGPA:</span>
                  <span className="text-amber-300/90">{edu.grades}</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-dark-950/40 border border-slate-800/80 text-xs text-slate-400 leading-relaxed font-mono">
                <HelpCircle className="w-4 h-4 text-blue-400 inline mr-1.5 -mt-0.5" />
                <span>Branch, coursework, and grades will update dynamically as academic semesters are completed.</span>
              </div>
            </div>

            {/* Right Column: Coursework & Academic Milestones Placeholders */}
            <div className="lg:col-span-7 space-y-6">
              
              {/* Relevant Coursework */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2 font-mono">
                  <BookOpen className="w-4 h-4 text-violet-400" />
                  <span>Key Engineering Coursework (Curriculum)</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {edu.coursework.map((course, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80 flex items-start gap-2 text-xs font-mono text-slate-300"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                      <span>{course}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Academic Milestones / Honors Placeholder */}
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2 font-mono">
                  <Award className="w-4 h-4 text-cyan-400" />
                  <span>Academic Honors &amp; Department Activities</span>
                </h4>
                <div className="space-y-2">
                  {edu.academicAchievements.map((item, idx) => (
                    <div 
                      key={idx}
                      className="p-3 rounded-xl bg-dark-950/60 border border-slate-800/80 text-xs font-mono text-slate-400"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
