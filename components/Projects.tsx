import React, { useState } from 'react';
import { Section } from './ui/Section';
import { PROJECTS } from '../constants';
import { ProjectCard } from './ProjectCard';
import { Project } from '../types';

export const Projects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>(PROJECTS);

  const handleUpdateProject = (updatedProject: Project) => {
    setProjects(prevProjects => 
      prevProjects.map(p => p.id === updatedProject.id ? updatedProject : p)
    );
  };

  return (
    <Section id="projects" className="bg-dyai-base relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/40 to-transparent pointer-events-none"></div>
      
      <div className="grid md:grid-cols-12 gap-12">
        {/* Section Label */}
        <div className="md:col-span-3 md:sticky md:top-32 h-fit">
          <h2 className="text-sm font-mono tracking-widest text-dyai-muted uppercase mb-4 flex items-center gap-2">
            <span className="w-8 h-[1px] bg-dyai-accent"></span>
            02. Projekte
          </h2>
          <p className="hidden md:block text-xs text-dyai-muted/60 max-w-[200px] leading-relaxed mt-4">
            Ausgewählte Arbeiten aus den Bereichen Autonomous Agents, Productivity Tools und Generative Design.
          </p>
          <div className="hidden md:block mt-8 p-4 rounded-lg bg-dyai-surface border border-dyai-line/50">
            <p className="text-[10px] font-mono text-dyai-muted uppercase tracking-wider mb-2">System Status</p>
            <div className="flex items-center gap-2 text-xs text-dyai-accent">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              EDIT_MODE_ENABLED
            </div>
          </div>
        </div>

        {/* Project Grid */}
        <div className="md:col-span-9">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <ProjectCard 
                key={project.id} 
                project={project} 
                onUpdate={handleUpdateProject}
              />
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
};