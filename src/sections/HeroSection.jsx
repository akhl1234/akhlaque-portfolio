import React, { useState } from 'react';
import {
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Copy,
  Check,
  Terminal,
  MapPin,
  Phone,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { copyToClipboard } from '../utils/resumeDownload';
import Button from '../components/Button';

export default function HeroSection({ onDownloadResume }) {
  const [copied, setCopied] = useState(false);

  const handleScrollToProjects = (e) => {
    e.preventDefault();
    const el = document.getElementById('projects');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const handleCopyEmail = async () => {
    const ok = await copyToClipboard(PROFILE.email);
    if (ok) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-14 pb-20 md:pt-20 md:pb-28 lg:pt-24 lg:pb-32"
    >
      {/* Subtle Ambient Violet Radial Glow */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 -translate-x-1/2 w-[780px] h-[420px] rounded-full opacity-90"
        style={{
          background:
            'radial-gradient(ellipse at center, rgba(139, 92, 246, 0.14) 0%, rgba(139, 92, 246, 0.03) 55%, transparent 75%)',
        }}
      />

      <div className="relative max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column: Identity & Primary CTAs */}
          <div className="lg:col-span-7 space-y-6">
            <div className="flex flex-wrap items-center gap-x-2.5 gap-y-1 font-mono text-[13px] font-medium tracking-[0.02em]">
              <span className="text-[#C4B5FD]">{PROFILE.fullName}</span>
              <span aria-hidden="true" className="text-[#64748B]">·</span>
              <span className="text-[#94A3B8]">{PROFILE.role}</span>
            </div>

            <h1 className="text-[2.25rem] sm:text-[2.875rem] lg:text-[3.5rem] font-bold leading-[1.14] tracking-[-0.03em] text-[#F8FAFC] text-balance">
              {PROFILE.headline}
            </h1>

            <p className="max-w-xl text-[1rem] md:text-[1.125rem] leading-[1.65] text-[#94A3B8]">
              {PROFILE.summary}
            </p>

            {/* Location & Direct Contact Metadata */}
            <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-[13px] text-[#94A3B8]">
              <span className="inline-flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#8B5CF6]" aria-hidden="true" />
                <span>{PROFILE.location}</span>
              </span>
              <a
                href={`tel:${PROFILE.phone.replace(/\s+/g, '')}`}
                className="inline-flex items-center gap-1.5 font-mono hover:text-[#F8FAFC] transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-[#8B5CF6]" aria-hidden="true" />
                <span>{PROFILE.phone}</span>
              </a>
            </div>

            {/* Primary & Secondary Actions */}
            <div className="flex flex-wrap items-center gap-3 pt-1">
              <Button
                href="#projects"
                onClick={handleScrollToProjects}
                variant="primary"
                size="lg"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" aria-hidden="true" />
              </Button>

              <Button
                onClick={onDownloadResume}
                variant="secondary"
                size="lg"
              >
                <Download className="w-4 h-4" aria-hidden="true" />
                <span>Download Resume</span>
              </Button>
            </div>

            {/* Social & Direct Links */}
            <div className="flex flex-wrap items-center gap-5 pt-3 border-t border-[#1F1F2E]/80">
              <a
                href={PROFILE.socials.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <Github className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                <span>GitHub</span>
              </a>

              <a
                href={PROFILE.socials.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors"
              >
                <Linkedin className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                <span>LinkedIn</span>
              </a>

              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 text-[14px] font-medium text-[#94A3B8] hover:text-[#F8FAFC] transition-colors cursor-pointer"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-[#C4B5FD]" aria-hidden="true" />
                    <span className="text-[#C4B5FD]">Email copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4 text-[#64748B]" aria-hidden="true" />
                    <span className="font-mono text-[13px]">{PROFILE.email}</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Obsidian Violet Code Frame */}
          <div className="lg:col-span-5">
            <div className="rounded-2xl bg-[#14141D] border border-[#1F1F2E] shadow-[0_0_40px_-12px_rgba(139,92,246,0.16)] overflow-hidden">
              {/* Terminal Chrome Header */}
              <div className="flex items-center justify-between px-4 py-3 bg-[#0E0E15] border-b border-[#1F1F2E]">
                <div className="flex items-center gap-2">
                  <Terminal className="w-3.5 h-3.5 text-[#8B5CF6]" aria-hidden="true" />
                  <span className="font-mono text-[12px] text-[#94A3B8]">
                    akhlaque.config.js
                  </span>
                </div>
                <span className="font-mono text-[11px] uppercase tracking-[0.06em] text-[#64748B]">
                  ES6
                </span>
              </div>

              {/* Code Body */}
              <div className="p-5 sm:p-6 font-mono text-[13px] leading-[1.7] overflow-x-auto">
                <pre className="text-[#94A3B8]">
                  <code>
                    <span className="text-[#C4B5FD]">const</span>{' '}
                    <span className="text-[#F8FAFC]">developer</span>{' '}
                    <span className="text-[#64748B]">=</span> {'{\n'}
                    {'  '}name:{' '}
                    <span className="text-[#C4B5FD]">'{PROFILE.fullName}'</span>,{'\n'}
                    {'  '}role:{' '}
                    <span className="text-[#C4B5FD]">'{PROFILE.role}'</span>,{'\n'}
                    {'  '}location:{' '}
                    <span className="text-[#C4B5FD]">'{PROFILE.location}'</span>,{'\n'}
                    {'  '}focus: [{'\n'}
                    {'    '}<span className="text-[#C4B5FD]">'Frontend Development'</span>,{'\n'}
                    {'    '}<span className="text-[#C4B5FD]">'Problem Solving'</span>,{'\n'}
                    {'    '}<span className="text-[#C4B5FD]">'Practical Applications'</span>{'\n'}
                    {'  '}],{'\n'}
                    {'  '}stack: [
                    <span className="text-[#C4B5FD]">'React.js'</span>,{' '}
                    <span className="text-[#C4B5FD]">'JS'</span>,{' '}
                    <span className="text-[#C4B5FD]">'C++'</span>,{' '}
                    <span className="text-[#C4B5FD]">'Python'</span>],{'\n'}
                    {'  '}availability:{' '}
                    <span className="text-[#C4B5FD]">'{PROFILE.availability}'</span>{'\n'}
                    {'}'};
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
