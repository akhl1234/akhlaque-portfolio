import React from 'react';
import { Code2, Layout, Database, Wrench } from 'lucide-react';
import { CORE_COMPETENCIES, PROFILE } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import TechBadge from '../components/TechBadge';

const CATEGORY_ICONS = {
  languages: Code2,
  frontend: Layout,
  database: Database,
  tools: Wrench,
};

export default function AboutSection() {
  return (
    <section id="about" className="py-14 md:py-24 border-t border-[#1F1F2E]/70 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        {/* About Narrative Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 mb-16 md:mb-20">
          <div className="lg:col-span-5">
            <SectionHeader
              eyebrow="About Me"
              title="Crafting solutions with curiosity and code"
            />
          </div>

          <div className="lg:col-span-7 space-y-6">
            <div className="space-y-4 text-[15px] md:text-[16px] leading-[1.7] text-[#94A3B8]">
              {PROFILE.aboutParagraphs.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-5 border-t border-[#1F1F2E]">
              {PROFILE.aboutHighlights.map((item) => (
                <div key={item.label}>
                  <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#64748B]">
                    {item.label}
                  </p>
                  <p className="mt-1 text-[14px] font-medium text-[#F8FAFC]">
                    {item.value}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Core Competencies Sub-section */}
        <div id="competencies" className="scroll-mt-24">
          <SectionHeader
            eyebrow="Technical Skills"
            title="Core technologies and proficiencies I work with"
            description="Languages, frontend tools, databases, and IT systems fundamentals applied across academic and practical projects."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {CORE_COMPETENCIES.map((group) => {
              const IconComponent = CATEGORY_ICONS[group.id] || Code2;
              return (
                <article key={group.id} className="card-obsidian rounded-xl p-6 flex flex-col justify-between">
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD]">
                        <IconComponent className="w-4 h-4" aria-hidden="true" />
                      </div>
                      <h3 className="text-[1.125rem] font-semibold tracking-[-0.01em] text-[#F8FAFC]">
                        {group.category}
                      </h3>
                    </div>

                    <p className="text-[14px] md:text-[15px] leading-[1.6] text-[#94A3B8] mb-5">
                      {group.description}
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-2 pt-4 border-t border-[#1F1F2E]">
                    {group.skills.map((skill) => (
                      <TechBadge key={skill} label={skill} />
                    ))}
                  </div>
                </article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
