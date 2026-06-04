import React from 'react';
import { FaLocationDot, FaArrowRight } from 'react-icons/fa6';

export default function ProjectCard({ project, onClick, brandDark, brandOrange }) {
  return (
    <div 
      onClick={() => onClick(project)}
      className="bg-white rounded-3xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer flex flex-col group"
    >
      <div className="w-full aspect-[16/10] bg-gray-100 overflow-hidden relative">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-lg text-[10px] font-black uppercase tracking-wider text-slate-800 shadow-sm">
          {project.category}
        </div>
      </div>
      
      <div className="p-6 flex flex-col justify-between flex-grow">
        <div>
          <div className="flex items-center gap-1 text-gray-400 font-bold text-xs mb-2">
            <FaLocationDot size={10} style={{ color: brandOrange }} />
            <span>{project.location}</span>
          </div>
          <h3 className="text-xl font-black text-gray-900 tracking-tight group-hover:text-blue-950 transition-colors line-clamp-2 leading-snug">
            {project.title}
          </h3>
          <p className="text-gray-500 text-sm mt-3 font-medium line-clamp-2 leading-relaxed">
            {project.details}
          </p>
        </div>
        
        <div className="mt-6 pt-4 border-t border-gray-50 flex items-center justify-between">
          <span className="text-[11px] font-black uppercase tracking-wider text-gray-400">
            View Project Gallery
          </span>
          <div 
            className="p-2.5 rounded-xl text-white transition-all transform group-hover:translate-x-1"
            style={{ backgroundColor: brandDark }}
          >
            <FaArrowRight size={12} />
          </div>
        </div>
      </div>
    </div>
  );
}