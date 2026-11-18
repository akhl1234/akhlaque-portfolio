import React from 'react';
import { Award } from 'lucide-react';
import { TIMELINE_ITEMS, CERTIFICATIONS } from '../data/portfolioData';
import SectionHeader from '../components/SectionHeader';
import TimelineItem from '../components/TimelineItem';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-14 md:py-24 border-t border-[#1F1F2E]/70 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          <div className="lg:col-span-4">
            <SectionHeader
              eyebrow="Background"
              title="Experience & Education"
              description="Professional internship, freelance web development work, and formal academic foundation in Information Technology."
            />
          </div>

          <div className="lg:col-span-8">
            <div className="relative">
              {TIMELINE_ITEMS.map((item, index) => (
                <TimelineItem
                  key={item.id}
                  item={item}
                  isLast={index === TIMELINE_ITEMS.length - 1}
                />
              ))}
            </div>
          </div>
        </div>

        {/* Certifications Subsection */}
        <div className="mt-16 md:mt-20 pt-14 border-t border-[#1F1F2E]/70">
          <SectionHeader
            eyebrow="Certifications"
            title="Continuous learning and technical credentials"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {CERTIFICATIONS.map((cert) => (
              <article key={cert.id} className="card-obsidian rounded-xl p-6 flex flex-col justify-between">
                <div>
                  <div className="inline-flex items-center justify-center w-9 h-9 rounded-lg bg-[#8B5CF6]/10 border border-[#8B5CF6]/30 text-[#C4B5FD] mb-4">
                    <Award className="w-4 h-4" aria-hidden="true" />
                  </div>
                  <h3 className="text-[1.0625rem] font-semibold leading-[1.4] tracking-[-0.01em] text-[#F8FAFC]">
                    {cert.title}
                  </h3>
                  <p className="mt-1 font-mono text-[12px] text-[#C4B5FD]">
                    {cert.issuer}
                  </p>
                  <p className="mt-3 text-[14px] leading-[1.6] text-[#94A3B8]">
                    {cert.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
