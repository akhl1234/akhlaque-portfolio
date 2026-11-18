import React, { useState, useEffect } from 'react';
import { Menu, X, Download } from 'lucide-react';
import { NAV_LINKS, PROFILE } from '../data/portfolioData';
import Button from './Button';

export default function Navbar({ activeSection, onDownloadResume }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileOpen(false);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    const targetId = href.replace('#', '');
    const el = document.getElementById(targetId);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 glass-nav">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16 h-16 flex items-center justify-between gap-8">
        {/* Zone 1: Brand Wordmark */}
        <a
          href="#top"
          onClick={(e) => {
            e.preventDefault();
            setMobileOpen(false);
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          aria-label={`${PROFILE.fullName} — Back to top`}
          className="font-mono text-[16px] font-bold tracking-[-0.02em] text-[#F8FAFC] hover:text-[#C4B5FD] transition-colors whitespace-nowrap shrink-0"
        >
          {PROFILE.brandName}
        </a>

        {/* Zone 2: Desktop Navigation Links */}
        <nav aria-label="Primary navigation" className="hidden md:flex items-center gap-7">
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                data-active={isActive}
                className={`nav-link-underline text-[14px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 ${
                  isActive ? 'text-[#F8FAFC]' : 'text-[#94A3B8] hover:text-[#F8FAFC]'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Zone 3: Primary Action & Mobile Drawer Trigger */}
        <div className="flex items-center gap-3 shrink-0">
          <Button
            onClick={onDownloadResume}
            variant="primary"
            size="sm"
            className="hidden md:inline-flex"
          >
            <Download className="w-4 h-4" aria-hidden="true" />
            <span>Resume</span>
          </Button>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-controls="mobile-navigation-drawer"
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="md:hidden inline-flex items-center justify-center w-11 h-11 rounded-lg border border-[#2A2A3D] bg-[#14141D] text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors cursor-pointer"
          >
            {mobileOpen ? (
              <X className="w-5 h-5" aria-hidden="true" />
            ) : (
              <Menu className="w-5 h-5" aria-hidden="true" />
            )}
          </button>
        </div>
      </div>

      {/* Responsive Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          id="mobile-navigation-drawer"
          aria-label="Mobile navigation"
          className="md:hidden border-t border-[#1F1F2E] bg-[#14141D]/95 backdrop-blur-xl px-5 py-4 space-y-1"
        >
          {NAV_LINKS.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`flex items-center justify-between px-3 py-3 rounded-lg text-[15px] font-medium transition-colors ${
                  isActive
                    ? 'bg-[#8B5CF6]/15 text-[#F8FAFC] border border-[#8B5CF6]/30'
                    : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1F1F2E]/50'
                }`}
              >
                <span>{link.label}</span>
              </a>
            );
          })}
          <div className="pt-3 border-t border-[#1F1F2E]">
            <Button
              variant="primary"
              size="md"
              className="w-full"
              onClick={() => {
                setMobileOpen(false);
                onDownloadResume();
              }}
            >
              <Download className="w-4 h-4" aria-hidden="true" />
              <span>Download Resume</span>
            </Button>
          </div>
        </nav>
      )}
    </header>
  );
}
