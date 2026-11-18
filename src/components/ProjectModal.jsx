import React, { useEffect } from 'react';
import { X, Github, ExternalLink, CheckCircle2 } from 'lucide-react';
import TechBadge from './TechBadge';
import Button from './Button';

export default function ProjectModal({ project, onClose }) {
  useEffect(() => {
    if (!project) return undefined;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  const isInternalLiveDemo = project.liveDemoUrl && project.liveDemoUrl.startsWith('#');

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0B0B10]/80 backdrop-blur-sm"
      role="dialog"
      aria-modal="true"
      aria-labelledby="project-modal-title"
      onClick={onClose}
    >
      <div
        className="glass-modal w-full max-w-2xl rounded-2xl p-6 sm:p-8 max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-[#1F1F2E]">
          <div>
            <div className="flex items-center gap-2 font-mono text-[12px] text-[#64748B] mb-2 tabular-nums">
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C4B5FD]">{project.category}</span>
            </div>
            <h3
              id="project-modal-title"
              className="text-[1.5rem] font-semibold tracking-[-0.02em] text-[#F8FAFC]"
            >
              {project.title}
            </h3>
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close project details"
            className="inline-flex items-center justify-center w-10 h-10 rounded-lg border border-[#2A2A3D] bg-[#14141D] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors cursor-pointer shrink-0"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>
        </div>

        <div className="py-6 space-y-6">
          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-2">
              Overview
            </h4>
            <p className="text-[15px] leading-[1.65] text-[#94A3B8]">
              {project.summary}
            </p>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-3">
              Key Features
            </h4>
            <ul className="space-y-2.5">
              {project.highlights.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-[14px] leading-[1.6] text-[#94A3B8]">
                  <CheckCircle2
                    className="w-4 h-4 text-[#8B5CF6] shrink-0 mt-1"
                    aria-hidden="true"
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] mb-3">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.techStack.map((tech) => (
                <TechBadge key={tech} label={tech} />
              ))}
            </div>
          </div>
        </div>

        <div className="pt-5 border-t border-[#1F1F2E] flex flex-wrap items-center gap-3">
          {project.githubUrl && (
            <Button
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              variant="secondary"
              size="md"
            >
              <Github className="w-4 h-4" aria-hidden="true" />
              <span>GitHub Profile</span>
            </Button>
          )}
          {project.liveDemoUrl && (
            <Button
              href={project.liveDemoUrl}
              target={isInternalLiveDemo ? undefined : '_blank'}
              rel={isInternalLiveDemo ? undefined : 'noopener noreferrer'}
              onClick={
                isInternalLiveDemo
                  ? (e) => {
                      e.preventDefault();
                      onClose();
                      window.scrollTo({ top: 0, behavior: 'smooth' });
                    }
                  : undefined
              }
              variant="primary"
              size="md"
            >
              <ExternalLink className="w-4 h-4" aria-hidden="true" />
              <span>Live Preview</span>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
