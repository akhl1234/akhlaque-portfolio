import React from 'react';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';
import TechBadge from './TechBadge';

export default function ProjectCard({ project, onSelect }) {
  const isInternalLiveDemo = project.liveDemoUrl && project.liveDemoUrl.startsWith('#');

  const handleLiveDemoClick = (e) => {
    if (isInternalLiveDemo) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <article className="card-obsidian rounded-xl p-6 flex flex-col justify-between h-full">
      <div>
        {/* Card Header: Category + Year & External Links */}
        <div className="flex items-start justify-between gap-4 mb-4">
          <div className="min-w-0">
            <div className="flex items-center gap-2 font-mono text-[12px] text-[#64748B] mb-1.5 tabular-nums">
              <span>{project.year}</span>
              <span aria-hidden="true">·</span>
              <span className="text-[#C4B5FD]">{project.category}</span>
            </div>
            <h3 className="text-[1.25rem] font-semibold leading-[1.35] tracking-[-0.015em] text-[#F8FAFC]">
              <button
                type="button"
                onClick={() => onSelect(project)}
                className="text-left hover:text-[#C4B5FD] transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[#8B5CF6] rounded"
              >
                {project.title}
              </button>
            </h3>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} on GitHub`}
                title="GitHub"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#1F1F2E] bg-[#0E0E15] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors"
              >
                <Github className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
            {project.liveDemoUrl && (
              <a
                href={project.liveDemoUrl}
                target={isInternalLiveDemo ? undefined : '_blank'}
                rel={isInternalLiveDemo ? undefined : 'noopener noreferrer'}
                onClick={handleLiveDemoClick}
                aria-label={`Open ${project.title} live preview`}
                title="Live Preview"
                className="inline-flex items-center justify-center w-9 h-9 rounded-lg border border-[#1F1F2E] bg-[#0E0E15] text-[#94A3B8] hover:text-[#F8FAFC] hover:border-[#8B5CF6] transition-colors"
              >
                <ExternalLink className="w-4 h-4" aria-hidden="true" />
              </a>
            )}
          </div>
        </div>

        {/* Summary */}
        <p className="text-[15px] leading-[1.6] text-[#94A3B8] mb-5">
          {project.summary}
        </p>
      </div>

      {/* Footer: Tech Stack & Detail Trigger */}
      <div className="pt-4 border-t border-[#1F1F2E] space-y-4">
        <div className="flex flex-wrap gap-2">
          {project.techStack.map((tech) => (
            <TechBadge key={tech} label={tech} />
          ))}
        </div>

        <div className="flex items-center justify-between pt-1">
          <button
            type="button"
            onClick={() => onSelect(project)}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-[#C4B5FD] hover:text-[#F8FAFC] transition-colors cursor-pointer"
          >
            <span>Inspect details</span>
            <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
          </button>
        </div>
      </div>
    </article>
  );
}
