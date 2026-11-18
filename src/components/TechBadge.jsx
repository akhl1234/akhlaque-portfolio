import React from 'react';

export default function TechBadge({ label }) {
  return (
    <span className="inline-flex items-center px-2.5 py-1 rounded-md font-mono text-[13px] font-medium leading-[1.25] tracking-[0.02em] bg-[#1F1F2E]/50 border border-[#2A2A3D]/80 text-[#94A3B8] hover:border-[#8B5CF6] hover:text-[#F8FAFC] transition-colors duration-150 whitespace-nowrap shrink-0">
      {label}
    </span>
  );
}
