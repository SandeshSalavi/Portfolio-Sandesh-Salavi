import React from 'react';
import { 
  X, 
  ExternalLink, 
  AlertTriangle, 
  Layers, 
  Cpu, 
  FileCode, 
  CheckCircle, 
  Clock, 
  ShieldAlert,
  Database,
  Workflow
} from 'lucide-react';
import { GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose, onOpenPlaceholder }) {
  if (!isOpen || !project) return null;

  const isNeuroStage = project.id === 'neurostage';
  const f = project.fields;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/80 backdrop-blur-md overflow-y-auto">
      <div 
        className="relative w-full max-w-4xl bg-dark-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-8"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Header Bar */}
        <div className="flex items-center justify-between p-5 sm:p-6 border-b border-slate-800 bg-dark-950/80 sticky top-0 z-20 backdrop-blur-md">
          <div className="flex items-center gap-3">
            <span className="px-2.5 py-1 rounded-md bg-blue-500/10 border border-blue-500/30 text-blue-400 font-mono text-xs font-semibold">
              {project.category}
            </span>
            <span className="px-2.5 py-1 rounded-md bg-amber-500/10 border border-amber-500/30 text-amber-300 font-mono text-xs">
              {project.badge}
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-slate-400 hover:text-white hover:bg-slate-800 transition focus:outline-none"
            aria-label="Close project modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[75vh] overflow-y-auto">
          
          {/* Title & Short Description */}
          <div>
            <h2 id="modal-title" className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
              {project.title}
            </h2>
            <p className="text-base text-slate-300 leading-relaxed">
              {project.shortDescription}
            </p>
          </div>

          {/* Clinical / Research Disclaimer Banner */}
          <div className="p-4 rounded-xl bg-amber-950/20 border border-amber-500/40 flex items-start gap-3">
            <ShieldAlert className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
            <div className="text-xs text-amber-200/90 leading-relaxed">
              <strong className="font-semibold block text-amber-300 mb-0.5">Important Engineering Notice:</strong>
              {project.disclaimer}
            </div>
          </div>

          {/* Links & Repository Status */}
          <div className="p-4 rounded-xl bg-dark-950 border border-slate-800 flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {/* GitHub Link or Placeholder */}
              {f.github?.isAvailable && f.github?.url ? (
                <a
                  href={f.github.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-white border border-slate-600 transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>Open GitHub Repo</span>
                </a>
              ) : (
                <button
                  onClick={() => onOpenPlaceholder('github-placeholder', f.github?.note)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800/40 text-slate-400 border border-dashed border-slate-700 hover:border-slate-500 transition"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>GitHub: Pending Publish</span>
                </button>
              )}

              {/* Live Demo or Placeholder */}
              {f.liveDemo?.isAvailable && f.liveDemo?.url ? (
                <a
                  href={f.liveDemo.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-blue-600 hover:bg-blue-500 text-white shadow-glow-blue transition"
                >
                  <span>Launch Live Demo</span>
                  <ExternalLink className="w-4 h-4" />
                </a>
              ) : (
                <button
                  onClick={() => onOpenPlaceholder('demo-placeholder', f.liveDemo?.note)}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-slate-800/40 text-slate-400 border border-dashed border-slate-700 hover:border-slate-500 transition"
                >
                  <ExternalLink className="w-4 h-4" />
                  <span>Live Demo: Staging Pending</span>
                </button>
              )}
            </div>

            <span className="text-[11px] font-mono text-slate-400">
              ID: {project.id}
            </span>
          </div>

          {/* Editable Fields Breakdown Grid */}
          <div className="space-y-4">
            <h3 className="text-sm font-mono uppercase tracking-wider text-slate-400 border-b border-slate-800 pb-2 flex items-center gap-2">
              <FileCode className="w-4 h-4 text-blue-400" />
              <span>Specification &amp; Editable Field Schema</span>
            </h3>

            {/* Field: Problem Statement */}
            <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
              <div className="text-xs font-mono text-blue-400 mb-1">Field 01: Problem Statement</div>
              <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                {f.problemStatement}
              </p>
            </div>

            {/* Field: My Contribution */}
            <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
              <div className="text-xs font-mono text-violet-400 mb-1">Field 02: My Contribution</div>
              <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                {f.myContribution}
              </p>
            </div>

            {/* NeuroStage specific fields */}
            {isNeuroStage && (
              <>
                {/* Field: Dataset & Preprocessing */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 mb-1">Field 03: Dataset and Preprocessing</div>
                  <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                    {f.datasetAndPreprocessing}
                  </p>
                </div>

                {/* Field: Model Architecture */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-blue-400 mb-1">Field 04: Model Architecture</div>
                  <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                    {f.modelArchitecture}
                  </p>
                </div>

                {/* Field: Training and Evaluation */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-violet-400 mb-1">Field 05: Training and Evaluation</div>
                  <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                    {f.trainingAndEvaluation}
                  </p>
                </div>

                {/* Field: Results */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-emerald-400 mb-1">Field 06: Results</div>
                  <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                    {f.results}
                  </p>
                </div>

                {/* Architecture Visual Preview */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-violet-400 mb-2">Architecture &amp; Pipeline Diagram</div>
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-dark-900">
                    <img 
                      src="/assets/projects/neurostage-architecture.svg" 
                      alt="NeuroStage Architecture Pipeline" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 mt-1.5 block text-center">
                    Technical schematic showing multi-channel EEG ingestion, filtering, and deep neural inference
                  </span>
                </div>
              </>
            )}

            {/* Advocate Advisory System specific fields */}
            {!isNeuroStage && (
              <>
                {/* Field: Features */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 mb-2">Field 03: Features</div>
                  <ul className="space-y-1.5">
                    {f.features?.map((feature, i) => (
                      <li key={i} className="text-sm text-slate-200 font-mono bg-dark-900/50 p-2 rounded-lg border border-slate-800/80 flex items-start gap-2">
                        <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Field: Technology Stack */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-blue-400 mb-2">Field 04: Technology Stack</div>
                  <div className="flex flex-wrap gap-2">
                    {f.technologyStack?.map((tech) => (
                      <span key={tech} className="px-2.5 py-1 rounded bg-blue-500/10 border border-blue-500/30 text-blue-300 text-xs font-mono">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Field: Architecture */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-violet-400 mb-1">Field 05: Architecture</div>
                  <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                    {f.architecture}
                  </p>
                </div>

                {/* Field: Screenshots */}
                <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
                  <div className="text-xs font-mono text-cyan-400 mb-2">Field 06: Screenshots &amp; Mockups</div>
                  <div className="rounded-xl overflow-hidden border border-slate-800 bg-dark-900 mb-2">
                    <img 
                      src="/assets/projects/advocate-dashboard-placeholder.svg" 
                      alt="Advocate Advisory System Dashboard Schematic" 
                      className="w-full h-auto object-cover"
                      loading="lazy"
                    />
                  </div>
                  <span className="text-[11px] font-mono text-slate-400 block text-center">
                    Dashboard architecture preview. To display real screenshots, save image files to <code className="text-blue-300">client/public/assets/projects/</code>.
                  </span>
                </div>
              </>
            )}

            {/* Field: Limitations */}
            <div className="p-4 rounded-xl bg-dark-950/70 border border-slate-800">
              <div className="text-xs font-mono text-amber-400 mb-1">Field: Limitations</div>
              <p className="text-sm text-slate-200 leading-relaxed font-mono whitespace-pre-line bg-dark-900/50 p-2.5 rounded-lg border border-slate-800/80">
                {f.limitations}
              </p>
            </div>

          </div>

          {/* Quick Edit Guidance Note */}
          <div className="p-4 rounded-xl bg-blue-950/20 border border-blue-500/30 text-xs text-blue-300 font-mono">
            <strong>How to update:</strong> Open <code className="bg-slate-800 px-1.5 py-0.5 rounded text-white">client/src/data/portfolioData.js</code> to edit any field in real-time.
          </div>

        </div>

        {/* Modal Footer */}
        <div className="p-5 border-t border-slate-800 bg-dark-950/90 flex justify-end">
          <button
            onClick={onClose}
            className="px-5 py-2.5 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-white transition"
          >
            Close Details
          </button>
        </div>
      </div>
    </div>
  );
}
