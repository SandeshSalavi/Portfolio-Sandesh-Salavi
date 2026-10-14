import React, { useState } from 'react';
import { 
  Code2, 
  BrainCircuit, 
  Sparkles, 
  Server, 
  Check, 
  Layers, 
  Terminal, 
  Database,
  Cpu
} from 'lucide-react';
import { portfolioData } from '../data/portfolioData';

export default function Skills() {
  const [activeTab, setActiveTab] = useState('All');

  const categories = portfolioData.skills;

  const getIconForCategory = (name) => {
    switch (name) {
      case 'Programming':
        return <Code2 className="w-5 h-5 text-blue-400" />;
      case 'AI and machine learning':
        return <BrainCircuit className="w-5 h-5 text-violet-400" />;
      case 'Generative AI':
        return <Sparkles className="w-5 h-5 text-cyan-400" />;
      case 'Web and backend development':
        return <Server className="w-5 h-5 text-indigo-400" />;
      default:
        return <Layers className="w-5 h-5 text-slate-400" />;
    }
  };

  const getBorderColor = (accent) => {
    switch (accent) {
      case 'blue':
        return 'border-blue-500/20 group-hover:border-blue-500/40 hover:shadow-glow-blue';
      case 'violet':
        return 'border-violet-500/20 group-hover:border-violet-500/40 hover:shadow-glow-violet';
      case 'cyan':
        return 'border-cyan-500/20 group-hover:border-cyan-500/40';
      case 'indigo':
        return 'border-indigo-500/20 group-hover:border-indigo-500/40';
      default:
        return 'border-slate-800';
    }
  };

  const getBadgeStyle = (accent) => {
    switch (accent) {
      case 'blue':
        return 'bg-blue-500/10 text-blue-300 border-blue-500/30';
      case 'violet':
        return 'bg-violet-500/10 text-violet-300 border-violet-500/30';
      case 'cyan':
        return 'bg-cyan-500/10 text-cyan-300 border-cyan-500/30';
      case 'indigo':
        return 'bg-indigo-500/10 text-indigo-300 border-indigo-500/30';
      default:
        return 'bg-slate-800 text-slate-300 border-slate-700';
    }
  };

  const filteredCategories = activeTab === 'All' 
    ? categories 
    : categories.filter(c => c.category === activeTab);

  return (
    <section id="skills" className="py-20 relative bg-dark-900/40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-violet-500/10 border border-violet-500/20 text-violet-400 text-xs font-mono mb-3">
            <span>02 / TECHNICAL COMPETENCIES</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Technical Skills &amp; Stack
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Core competencies organized by engineering domain without arbitrary percentage bars. Focuses on demonstrated technologies in AI/ML and software systems.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-violet-500 to-blue-500 rounded-full mt-3" />
        </div>

        {/* Category Tabs for fast navigation */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <button
            onClick={() => setActiveTab('All')}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
              activeTab === 'All'
                ? 'bg-blue-600 text-white shadow-glow-blue'
                : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
            }`}
          >
            All Disciplines
          </button>
          {categories.map((cat) => (
            <button
              key={cat.category}
              onClick={() => setActiveTab(cat.category)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-medium transition ${
                activeTab === cat.category
                  ? 'bg-blue-600 text-white shadow-glow-blue'
                  : 'bg-dark-900 text-slate-400 hover:text-white border border-slate-800'
              }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredCategories.map((group) => (
            <div
              key={group.category}
              className={`group p-6 rounded-2xl bg-dark-900/90 border transition-all duration-300 ${getBorderColor(
                group.accentColor
              )}`}
            >
              {/* Card Header */}
              <div className="flex items-center justify-between mb-5 pb-4 border-b border-slate-800/80">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-dark-850 border border-slate-800 shadow-sm">
                    {getIconForCategory(group.category)}
                  </div>
                  <div>
                    <h3 className="text-base sm:text-lg font-bold text-white tracking-tight">
                      {group.category}
                    </h3>
                    <span className="text-xs font-mono text-slate-400">
                      {group.skills.length} core technologies
                    </span>
                  </div>
                </div>

                <span className="text-[11px] font-mono uppercase px-2.5 py-1 rounded bg-slate-800/60 border border-slate-700/60 text-slate-400">
                  Verified Stack
                </span>
              </div>

              {/* Skills Badges Container */}
              <div className="flex flex-wrap gap-2.5">
                {group.skills.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col p-3 rounded-xl bg-dark-950/80 border border-slate-800/90 hover:border-slate-700 transition flex-1 min-w-[140px]"
                  >
                    <div className="flex items-center justify-between gap-2 mb-1">
                      <span className="text-sm font-semibold text-slate-100">
                        {skill.name}
                      </span>
                      <span className={`text-[10px] font-mono px-1.5 py-0.5 rounded border ${getBadgeStyle(group.accentColor)}`}>
                        {skill.tag}
                      </span>
                    </div>
                    {skill.focus && (
                      <span className="text-[11px] text-slate-400 leading-tight">
                        {skill.focus}
                      </span>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Transparency callout */}
        <div className="mt-8 p-4 rounded-xl bg-dark-950/70 border border-slate-800/80 flex items-center justify-between text-xs text-slate-400 font-mono">
          <div className="flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>Honest Engineering Policy: Skill listings reflect dedicated hands-on project and coursework application.</span>
          </div>
          <span className="hidden sm:inline text-slate-400">No arbitrary percentages or fake ratings</span>
        </div>

      </div>
    </section>
  );
}
