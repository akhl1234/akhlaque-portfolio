import React from 'react';
import { Github, Linkedin, ArrowUp, FileText } from 'lucide-react';
import { PROFILE, NAV_LINKS } from '../data/portfolioData';

export default function Footer({ onDownloadResume }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#1F1F2E] bg-[#0B0B10]">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2.5">
              <span className="font-mono text-[15px] font-bold text-[#F8FAFC]">
                {PROFILE.brandName}
              </span>
              <span aria-hidden="true" className="text-[#64748B]">·</span>
              <span className="text-[14px] font-medium text-[#F8FAFC]">
                {PROFILE.fullName}
              </span>
            </div>
            <p className="mt-1 text-[13px] text-[#64748B]">
              {PROFILE.role} · {PROFILE.location}
            </p>
          </div>

          <nav aria-label="Footer navigation" className="flex flex-wrap items-center gap-5">
            {NAV_LINKS.map((link) => (
              <a
                key={link.id}
                href={link.href}
                className="text-[13px] text-[#94A3B8] hover:text-[#F8FAFC] transition-colors whitespace-nowrap"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={PROFILE.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akhlaque Ansari on GitHub"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#1F1F2E] bg-[#14141D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
            </a>
            <a
              href={PROFILE.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Akhlaque Ansari on LinkedIn"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#1F1F2E] bg-[#14141D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors"
            >
              <Linkedin className="w-4 h-4" aria-hidden="true" />
            </a>
            <button
              type="button"
              onClick={onDownloadResume}
              aria-label="Download Resume PDF"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#1F1F2E] bg-[#14141D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors cursor-pointer"
            >
              <FileText className="w-4 h-4" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll back to top"
              className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#2A2A3D] bg-[#14141D] text-[#C4B5FD] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors cursor-pointer"
            >
              <ArrowUp className="w-4 h-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
