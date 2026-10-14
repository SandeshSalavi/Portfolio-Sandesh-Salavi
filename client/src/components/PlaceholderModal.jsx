import React from 'react';
import { X, ExternalLink, Info, FileText, CheckCircle2 } from 'lucide-react';

export default function PlaceholderModal({ isOpen, onClose, title, message, actionLabel, actionUrl, type = 'info' }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm animate-fadeIn">
      <div 
        className="relative w-full max-w-md bg-dark-900 border border-slate-700/80 rounded-2xl p-6 shadow-2xl text-slate-100"
        role="dialog"
        aria-modal="true"
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
            {type === 'resume' ? <FileText className="w-5 h-5" /> : <Info className="w-5 h-5" />}
          </div>
          <div>
            <h3 className="text-lg font-bold text-white tracking-tight">{title}</h3>
            <p className="text-xs text-slate-400 font-mono">Status &amp; Integration Notice</p>
          </div>
        </div>

        <div className="space-y-3 text-sm text-slate-300 leading-relaxed bg-dark-950/70 p-4 rounded-xl border border-slate-800">
          {message}
        </div>

        <div className="mt-6 flex items-center justify-end gap-3">
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl text-sm font-medium text-slate-300 hover:text-white hover:bg-slate-800/80 border border-slate-700 transition"
          >
            Close
          </button>
          {actionUrl && (
            <a
              href={actionUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-semibold bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-glow-blue transition"
            >
              <span>{actionLabel || 'Proceed'}</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
