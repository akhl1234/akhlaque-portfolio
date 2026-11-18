import React, { useEffect, useState } from 'react';
import { AlertCircle, X } from 'lucide-react';
import { NAV_LINKS } from './data/portfolioData';
import { handleResumeDownload } from './utils/resumeDownload';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HeroSection from './sections/HeroSection';
import AboutSection from './sections/AboutSection';
import ProjectsSection from './sections/ProjectsSection';
import ExperienceSection from './sections/ExperienceSection';
import ContactSection from './sections/ContactSection';

export default function App() {
  const [activeSection, setActiveSection] = useState('about');
  const [resumeNotice, setResumeNotice] = useState('');

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    if (elements.length === 0) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-20% 0px -55% 0px',
        threshold: [0.15, 0.4, 0.7],
      }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const onDownloadResume = () => {
    setResumeNotice('');
    handleResumeDownload((msg) => {
      setResumeNotice(msg);
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#0B0B10] text-[#F8FAFC]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:px-4 focus:py-2 focus:rounded-lg focus:bg-[#8B5CF6] focus:text-[#F8FAFC] focus:text-sm focus:font-medium"
      >
        Skip to main content
      </a>

      <Navbar activeSection={activeSection} onDownloadResume={onDownloadResume} />

      {resumeNotice && (
        <div
          role="status"
          className="fixed bottom-5 right-5 z-50 max-w-md glass-modal rounded-xl p-4 flex items-start gap-3"
        >
          <AlertCircle className="w-5 h-5 text-[#C4B5FD] shrink-0 mt-0.5" aria-hidden="true" />
          <p className="text-[13px] leading-[1.5] text-[#E4E1E9]">{resumeNotice}</p>
          <button
            type="button"
            onClick={() => setResumeNotice('')}
            aria-label="Dismiss resume notification"
            className="text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-4 h-4" aria-hidden="true" />
          </button>
        </div>
      )}

      <main id="main-content" className="flex-1">
        <HeroSection onDownloadResume={onDownloadResume} />
        <AboutSection />
        <ProjectsSection />
        <ExperienceSection />
        <ContactSection />
      </main>

      <Footer onDownloadResume={onDownloadResume} />
    </div>
  );
}
