import React from 'react';
import ProjectCard from './ProjectCard';

export default function ProjectsGrid({ projects, onProjectClick, brandDark, brandOrange }) {
  return (
    <main className="w-full mx-auto px-4 md:px-8 mt-8" style={{ maxWidth: '1200px' }}>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {projects.map((project) => (
          <ProjectCard 
            key={project.id}
            project={project}
            onClick={onProjectClick}
            brandDark={brandDark}
            brandOrange={brandOrange}
          />
        ))}
      </div>
    </main>
  );
}