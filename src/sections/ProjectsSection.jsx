import React, { useState } from 'react';
import { PROJECTS, PROJECT_CATEGORIES } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import ProjectModal from '../components/ProjectModal';

export default function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeProject, setActiveProject] = useState(null);

  const filteredProjects =
    selectedCategory === 'All'
      ? PROJECTS
      : PROJECTS.filter((project) => project.category === selectedCategory);

  return (
    <section id="projects" className="py-14 md:py-24 border-t border-[#1F1F2E]/70 scroll-mt-20">
      <div className="max-w-[1200px] mx-auto px-5 md:px-10 lg:px-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 md:mb-12">
          <div className="max-w-2xl">
            <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.08em] text-[#C4B5FD] mb-3">
              Featured Projects
            </p>
            <h2 className="text-[1.75rem] md:text-[2rem] font-semibold leading-[1.25] tracking-[-0.02em] text-[#F8FAFC] text-balance">
              Selected practical applications and engineering builds
            </h2>
            <p className="mt-3 text-[15px] md:text-[16px] leading-[1.6] text-[#94A3B8]">
              Applications built with React.js, JavaScript, REST APIs, and responsive dark-mode architecture.
            </p>
          </div>

          {/* Interactive Category Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter projects by category"
            className="inline-flex flex-wrap items-center gap-1 p-1 rounded-lg bg-[#14141D] border border-[#1F1F2E] self-start md:self-auto"
          >
            {PROJECT_CATEGORIES.map((category) => {
              const isSelected = selectedCategory === category;
              return (
                <button
                  key={category}
                  type="button"
                  role="tab"
                  aria-selected={isSelected}
                  onClick={() => setSelectedCategory(category)}
                  className={`px-3.5 py-2 rounded-md text-[13px] font-medium whitespace-nowrap shrink-0 transition-colors duration-150 cursor-pointer ${
                    isSelected
                      ? 'bg-[#8B5CF6] text-[#F8FAFC]'
                      : 'text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#1F1F2E]/60'
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredProjects.map((project) => (
            <ProjectCard
              key={project.id}
              project={project}
              onSelect={setActiveProject}
            />
          ))}
        </div>
      </div>

      {/* Glassmorphic Project Detail Modal */}
      <ProjectModal
        project={activeProject}
        onClose={() => setActiveProject(null)}
      />
    </section>
  );
}
