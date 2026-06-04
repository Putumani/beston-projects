import React from 'react';
import ProjectsGrid from './ProjectsGrid';

export default function PaintingTab({ projects, onProjectClick, brandDark, brandOrange }) {
  return (
    <ProjectsGrid 
      projects={projects}
      onProjectClick={onProjectClick}
      brandDark={brandDark}
      brandOrange={brandOrange}
    />
  );
}