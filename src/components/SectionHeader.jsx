import React from 'react';

export default function SectionHeader({ eyebrow, title, description, align = 'left' }) {
  const alignment = align === 'center' ? 'text-center mx-auto' : 'text-left';

  return (
    <div className={`max-w-2xl mb-10 md:mb-12 ${alignment}`}>
      {eyebrow && (
        <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C4B5FD] mb-3">
          {eyebrow}
        </p>
      )}
      <h2 className="text-[1.75rem] md:text-[2rem] font-semibold leading-[1.25] tracking-[-0.02em] text-[#F8FAFC] text-balance">
        {title}
      </h2>
      {description && (
        <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-[#94A3B8]">
          {description}
        </p>
      )}
    </div>
  );
}
