import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeAchievements from './components/ResumeAchievements';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PlaceholderModal from './components/PlaceholderModal';
import { portfolioData } from './data/portfolioData';
import { checkResumeStatus } from './services/api';

export default function App() {
  const [modalState, setModalState] = useState({
    isOpen: false,
    title: '',
    message: null,
    actionLabel: '',
    actionUrl: '',
    type: 'info'
  });

  const [resumeAvailable, setResumeAvailable] = useState(false);

  useEffect(() => {
    // Check if resume.pdf exists in public directory
    checkResumeStatus().then((status) => {
      if (status.isAvailable) {
        setResumeAvailable(true);
      }
    });
  }, []);

  const handleOpenPlaceholder = (key, customNote) => {
    switch (key) {
      case 'linkedin':
        setModalState({
          isOpen: true,
          title: 'LinkedIn Profile Status',
          type: 'info',
          message: (
            <div className="space-y-2">
              <p>
                The username handle <code className="text-blue-300 font-bold">SandeshSalavi</code> is configured as requested.
              </p>
              <p className="text-slate-400">
                To connect your verified profile, open <code className="text-slate-200">client/src/data/portfolioData.js</code> and replace the placeholder URL with your live LinkedIn profile link.
              </p>
            </div>
          ),
          actionLabel: 'Preview Profile Search',
          actionUrl: 'https://www.linkedin.com/search/results/all/?keywords=Sandesh%20Salavi'
        });
        break;

      case 'resume':
        if (resumeAvailable) {
          window.open('/resume.pdf', '_blank');
          return;
        }
        setModalState({
          isOpen: true,
          title: 'Resume Document Placeholder',
          type: 'resume',
          message: (
            <div className="space-y-3">
              <p>
                To maintain transparency, broken or dummy resume links are avoided until an official document is supplied.
              </p>
              <div className="p-3 bg-dark-900 rounded-lg border border-slate-800 text-xs font-mono space-y-1">
                <div className="text-blue-400 font-semibold">How to activate your resume:</div>
                <div>1. Save your resume as <span className="text-emerald-400">resume.pdf</span></div>
                <div>2. Place it in <span className="text-emerald-400">client/public/resume.pdf</span></div>
                <div>3. Refresh the page to enable instant download &amp; view!</div>
              </div>
            </div>
          ),
          actionLabel: 'Contact via Email',
          actionUrl: `mailto:${portfolioData.profile.email}?subject=Resume%20Request`
        });
        break;

      case 'github-placeholder':
        setModalState({
          isOpen: true,
          title: 'Repository Placeholder',
          type: 'info',
          message: (
            <div className="space-y-2">
              <p>{customNote || 'This repository link will be activated once the source code is published on GitHub.'}</p>
              <p className="text-slate-400 text-xs font-mono">
                You can edit repository links at any time in <code className="text-slate-200">client/src/data/portfolioData.js</code>.
              </p>
            </div>
          ),
          actionLabel: 'View GitHub Profile',
          actionUrl: portfolioData.profile.github
        });
        break;

      case 'demo-placeholder':
        setModalState({
          isOpen: true,
          title: 'Live Demo Deployment Status',
          type: 'info',
          message: (
            <div className="space-y-2">
              <p>{customNote || 'The live interactive service is pending production hosting and staging deployment.'}</p>
              <p className="text-slate-400 text-xs font-mono">
                Updates will be published once the inference model or container cluster is deployed.
              </p>
            </div>
          ),
          actionLabel: 'Inquire via Email',
          actionUrl: `mailto:${portfolioData.profile.email}?subject=Live%20Demo%20Inquiry`
        });
        break;

      default:
        setModalState({
          isOpen: true,
          title: 'Information',
          message: customNote || 'Placeholder content.',
          actionLabel: '',
          actionUrl: ''
        });
        break;
    }
  };

  const closeModal = () => {
    setModalState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="min-h-screen bg-[#060911] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-blue-200">
      
      {/* Navigation Bar */}
      <Navbar onOpenPlaceholder={handleOpenPlaceholder} />

      {/* Main Content Sections */}
      <main className="flex-1">
        <Hero onOpenPlaceholder={handleOpenPlaceholder} />
        <About />
        <Skills />
        <Projects onOpenPlaceholder={handleOpenPlaceholder} />
        <Education />
        <ResumeAchievements onOpenPlaceholder={handleOpenPlaceholder} />
        <Contact onOpenPlaceholder={handleOpenPlaceholder} />
      </main>

      {/* Footer */}
      <Footer onOpenPlaceholder={handleOpenPlaceholder} />

      {/* Interactive Modal for Placeholders & Resume Status */}
      <PlaceholderModal
        isOpen={modalState.isOpen}
        onClose={closeModal}
        title={modalState.title}
        message={modalState.message}
        actionLabel={modalState.actionLabel}
        actionUrl={modalState.actionUrl}
        type={modalState.type}
      />

    </div>
  );
}
