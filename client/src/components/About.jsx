import React from 'react';
import { GraduationCap, Calendar, Sparkles, Code2, Brain, Database, ArrowUpRight } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 relative border-t border-slate-900 bg-dark-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>01 / ABOUT ME</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Engineering Background &amp; Focus
          </h2>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Main Statement Narrative */}
          <div className="lg:col-span-7 space-y-6">
            <div className="p-6 sm:p-8 rounded-2xl bg-dark-900/80 border border-slate-800/80 backdrop-blur-sm shadow-glow-card">
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal mb-4">
                I am pursuing a B.E./B.Tech degree at KIT College of Engineering, with an expected graduation year of 2027. My technical interests span AI engineering, machine learning, deep learning, Large Language Models, Retrieval-Augmented Generation, and full-stack software development.
              </p>
              <p className="text-base sm:text-lg text-slate-300 leading-relaxed font-normal">
                I enjoy exploring how AI models and software systems can be combined to build practical applications. My portfolio highlights my learning and project work across AI and software development.
              </p>
            </div>

            {/* Core Interest Pillars */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80 hover:border-blue-500/30 transition">
                <Brain className="w-5 h-5 text-blue-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">AI &amp; Deep Learning</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Neural network architectures, model training, and optimization.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80 hover:border-violet-500/30 transition">
                <Sparkles className="w-5 h-5 text-violet-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">LLMs &amp; RAG</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  Retrieval systems, knowledge grounding, and generative models.
                </p>
              </div>

              <div className="p-4 rounded-xl bg-dark-900/60 border border-slate-800/80 hover:border-cyan-500/30 transition">
                <Code2 className="w-5 h-5 text-cyan-400 mb-2" />
                <h4 className="text-sm font-semibold text-white mb-1">Full-Stack Systems</h4>
                <p className="text-xs text-slate-400 leading-relaxed">
                  MERN applications, robust APIs, and responsive frontends.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Small Education Card */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            
            {/* Small Education Card */}
            <div className="p-6 rounded-2xl bg-gradient-to-br from-dark-900 via-dark-850 to-dark-900 border border-slate-800/90 shadow-glow-card relative overflow-hidden group">
              <div className="absolute top-0 right-0 p-4 text-slate-800 group-hover:text-slate-700 transition">
                <GraduationCap className="w-16 h-16 opacity-30" />
              </div>

              <div className="relative z-10">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 mb-3">
                  <GraduationCap className="w-4 h-4" />
                  <span>EDUCATION CARD</span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-1">
                  KIT College of Engineering
                </h3>
                
                <p className="text-sm font-medium text-slate-300 mb-4">
                  B.E. / B.Tech Program
                </p>

                <div className="pt-4 border-t border-slate-800 flex items-center justify-between text-xs text-slate-400 font-mono">
                  <div className="flex items-center gap-1.5">
                    <Calendar className="w-3.5 h-3.5 text-violet-400" />
                    <span>Expected Graduation:</span>
                  </div>
                  <span className="font-semibold text-white bg-slate-800/80 px-2.5 py-1 rounded-md border border-slate-700">
                    2027
                  </span>
                </div>

                <a 
                  href="#education"
                  className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold text-blue-400 hover:text-blue-300 transition"
                >
                  <span>View detailed education breakdown</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>

            {/* Quick Profile Summary Badge */}
            <div className="p-5 rounded-2xl bg-dark-900/60 border border-slate-800/80 text-xs text-slate-400 space-y-2">
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="font-mono text-slate-400">Current Status:</span>
                <span className="text-slate-200 font-medium">Undergraduate Student</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-slate-800/60">
                <span className="font-mono text-slate-400">Location:</span>
                <span className="text-slate-200 font-medium">India</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="font-mono text-slate-400">Primary Objective:</span>
                <span className="text-slate-200 font-medium">Internships &amp; Entry-level AI/SWE</span>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
