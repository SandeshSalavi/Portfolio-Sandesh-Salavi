import React, { useState } from 'react';
import { 
  Mail, 
  Send, 
  Copy, 
  Check, 
  ExternalLink, 
  AlertCircle, 
  CheckCircle2, 
  Loader2,
  Server
} from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './Icons';
import { portfolioData } from '../data/portfolioData';
import { sendContactMessage } from '../services/api';

export default function Contact({ onOpenPlaceholder }) {
  const profile = portfolioData.profile;

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [copied, setCopied] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [statusMessage, setStatusMessage] = useState(null);
  const [errors, setErrors] = useState({});

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(profile.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const validate = () => {
    const errs = {};
    if (!formData.name.trim() || formData.name.trim().length < 2) {
      errs.name = 'Please provide your full name (at least 2 characters).';
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email.trim() || !emailRegex.test(formData.email.trim())) {
      errs.email = 'Please provide a valid email address.';
    }
    if (!formData.subject.trim() || formData.subject.trim().length < 3) {
      errs.subject = 'Subject must be at least 3 characters.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      errs.message = 'Message must be at least 10 characters long.';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage(null);

    if (!validate()) return;

    setIsSubmitting(true);

    try {
      const res = await sendContactMessage(formData);

      if (res.ok && res.data?.success) {
        setStatusMessage({
          type: 'success',
          text: res.data.message || 'Message received successfully!',
          refId: res.data.referenceId,
          storage: res.data.storageType
        });
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        const errorList = res.data?.errors ? res.data.errors.join(' ') : null;
        setStatusMessage({
          type: 'error',
          text: errorList || res.data?.message || 'Failed to submit message to the backend. Please use the direct email button below.'
        });
      }
    } catch (err) {
      setStatusMessage({
        type: 'error',
        text: 'Network error communicating with the backend. Please email directly via sandeshsalavi3@gmail.com.'
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 relative bg-dark-900/60 border-t border-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-start mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-mono mb-3">
            <span>06 / GET IN TOUCH</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-white">
            Contact &amp; Professional Channels
          </h2>
          <p className="text-sm text-slate-400 mt-2 max-w-xl">
            Reach out regarding AI engineering opportunities, full-stack software development roles, or collaborative engineering inquiries.
          </p>
          <div className="h-1 w-16 bg-gradient-to-r from-blue-500 to-violet-500 rounded-full mt-3" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Column: Direct Contact Info (5 cols) */}
          <div className="lg:col-span-5 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold text-white">Direct Email</h3>
                  <span className="text-xs font-mono text-slate-400">Primary Channel</span>
                </div>
              </div>

              <div className="p-3 rounded-xl bg-dark-950 border border-slate-800 flex items-center justify-between mb-4">
                <span className="text-xs font-mono text-slate-200 select-all">
                  {profile.email}
                </span>
                <button
                  onClick={handleCopyEmail}
                  className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition"
                  title="Copy email to clipboard"
                  aria-label="Copy email"
                >
                  {copied ? <Check className="w-4 h-4 text-emerald-400" /> : <Copy className="w-4 h-4" />}
                </button>
              </div>

              <a
                href={`mailto:${profile.email}?subject=Engineering%20Inquiry%20via%20Portfolio`}
                className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold bg-blue-600/20 hover:bg-blue-600/30 text-blue-300 border border-blue-500/40 transition active:scale-95"
              >
                <Mail className="w-4 h-4" />
                <span>Launch Email Client (mailto)</span>
              </a>
            </div>

            {/* GitHub Card */}
            <div className="p-6 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-slate-800 border border-slate-700 flex items-center justify-center text-slate-200">
                    <GithubIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">GitHub Profile</h3>
                    <span className="text-xs font-mono text-slate-400">Public Repositories</span>
                  </div>
                </div>

                <a
                  href={profile.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition"
                >
                  <span>Visit</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-2">
                {profile.github}
              </p>
            </div>

            {/* LinkedIn Card (Placeholder) */}
            <div className="p-6 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card">
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center text-blue-400">
                    <LinkedinIcon className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-sm font-semibold text-white">LinkedIn Profile</h3>
                    <span className="text-xs font-mono text-amber-300/90">Placeholder Active</span>
                  </div>
                </div>

                <button
                  onClick={() => onOpenPlaceholder('linkedin')}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-dark-950 hover:bg-slate-800 text-slate-300 border border-slate-700 transition"
                >
                  <span>Details</span>
                </button>
              </div>
              <p className="text-xs font-mono text-slate-400 mt-2">
                User handle: <code className="text-slate-300">SandeshSalavi</code> (Update verified URL in config)
              </p>
            </div>

          </div>

          {/* Right Column: MERN Backend Contact Form (7 cols) */}
          <div className="lg:col-span-7 p-6 sm:p-8 rounded-2xl bg-dark-900/90 border border-slate-800/90 shadow-glow-card">
            
            <div className="flex items-center justify-between mb-6 pb-4 border-b border-slate-800">
              <div>
                <h3 className="text-lg font-bold text-white tracking-tight">
                  Send a Direct Message
                </h3>
                <p className="text-xs font-mono text-slate-400">
                  Backed by Node.js &amp; Express API
                </p>
              </div>
              <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-dark-950 border border-slate-800 text-[11px] font-mono text-slate-400">
                <Server className="w-3 h-3 text-emerald-400" />
                <span>MERN API Endpoint</span>
              </div>
            </div>

            {/* Status Notifications */}
            {statusMessage && (
              <div
                className={`p-4 rounded-xl mb-6 text-xs font-mono flex items-start gap-3 ${
                  statusMessage.type === 'success'
                    ? 'bg-emerald-950/30 border border-emerald-500/40 text-emerald-300'
                    : 'bg-rose-950/30 border border-rose-500/40 text-rose-300'
                }`}
              >
                {statusMessage.type === 'success' ? (
                  <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
                ) : (
                  <AlertCircle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                )}
                <div className="space-y-1">
                  <p className="font-semibold">{statusMessage.text}</p>
                  {statusMessage.refId && (
                    <p className="text-[11px] text-emerald-400/80">
                      Inquiry ID: <code className="bg-slate-900 px-1 py-0.5 rounded">{statusMessage.refId}</code> ({statusMessage.storage})
                    </p>
                  )}
                </div>
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4" noValidate>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Name <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g., Alex Reed"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.name ? 'border-rose-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.name && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.name}</p>}
                </div>

                {/* Email */}
                <div>
                  <label htmlFor="email" className="block text-xs font-mono text-slate-300 mb-1.5">
                    Your Email <span className="text-blue-400">*</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="alex@example.com"
                    className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                      errors.email ? 'border-rose-500/80' : 'border-slate-800'
                    }`}
                  />
                  {errors.email && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.email}</p>}
                </div>
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Subject <span className="text-blue-400">*</span>
                </label>
                <input
                  id="subject"
                  type="text"
                  required
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  placeholder="AI Engineering Internship / Project Discussion"
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition ${
                    errors.subject ? 'border-rose-500/80' : 'border-slate-800'
                  }`}
                />
                {errors.subject && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.subject}</p>}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-xs font-mono text-slate-300 mb-1.5">
                  Message <span className="text-blue-400">*</span>
                </label>
                <textarea
                  id="message"
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Hello Sandesh, I reviewed your AI and Software portfolio..."
                  className={`w-full px-3.5 py-2.5 rounded-xl bg-dark-950 border text-sm text-slate-100 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-blue-500 transition resize-none ${
                    errors.message ? 'border-rose-500/80' : 'border-slate-800'
                  }`}
                />
                {errors.message && <p className="text-[11px] text-rose-400 mt-1 font-mono">{errors.message}</p>}
              </div>

              {/* Submit Button */}
              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl font-semibold text-sm bg-gradient-to-r from-blue-600 to-violet-600 hover:from-blue-500 hover:to-violet-500 text-white shadow-glow-blue transition active:scale-95 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="w-4 h-4 animate-spin" />
                      <span>Transmitting Message to API...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Send Message via Express API</span>
                    </>
                  )}
                </button>
              </div>

              <div className="text-[11px] text-slate-400 text-center font-mono">
                Inputs are sanitized and validated against server schemas. No spam or unmonitored fake integrations.
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}
