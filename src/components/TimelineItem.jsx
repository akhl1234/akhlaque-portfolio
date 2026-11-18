import React from 'react';

export default function TimelineItem({ item, isLast }) {
  return (
    <div className="relative pl-8 sm:pl-10 pb-8 last:pb-0">
      {/* Vertical guide rail styled in 1px #1F1F2E */}
      {!isLast && (
        <span
          aria-hidden="true"
          className="absolute left-[4.5px] top-3 bottom-0 w-px bg-[#1F1F2E]"
        />
      )}

      {/* Milestone node: 10px circular marker with 2px #8B5CF6 ring and #0B0B10 core */}
      <span
        aria-hidden="true"
        className={`absolute left-0 top-1.5 w-[10px] h-[10px] rounded-full bg-[#0B0B10] border-2 border-[#8B5CF6] ${
          item.isCurrent ? 'shadow-[0_0_10px_rgba(139,92,246,0.65)]' : ''
        }`}
      />

      <div className="card-obsidian rounded-xl p-6">
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
          <div>
            <span className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C4B5FD]">
              {item.type}
            </span>
            <h3 className="mt-1 text-[1.125rem] font-semibold leading-[1.4] tracking-[-0.01em] text-[#F8FAFC]">
              {item.role}
            </h3>
            <p className="text-[14px] font-medium text-[#94A3B8]">
              {item.organization}
            </p>
          </div>

          <time className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B] whitespace-nowrap shrink-0 tabular-nums">
            {item.period}
          </time>
        </div>

        <p className="text-[15px] leading-[1.6] text-[#94A3B8] mb-3">
          {item.description}
        </p>

        {item.points && item.points.length > 0 && (
          <ul className="space-y-1.5 text-[14px] leading-[1.55] text-[#94A3B8] border-t border-[#1F1F2E] pt-3">
            {item.points.map((point, idx) => (
              <li key={idx} className="flex items-start gap-2">
                <span className="text-[#8B5CF6] font-mono text-xs mt-1" aria-hidden="true">
                  —
                </span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
