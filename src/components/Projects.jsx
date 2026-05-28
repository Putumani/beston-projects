import React from 'react'
import { FaArrowRight, FaLocationDot } from 'react-icons/fa6'

import roofingImg from '../assets/home/projects/camps-bay-roofing.jpg'
import waterproofingImg from '../assets/home/projects/waterproofing.jpg'
import aluminiumDoorImg from '../assets/home/projects/aluminium-door.jpeg'
import awardImg from '../assets/home/award.jpg'

function Projects() {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'

  const projectsData = [
    {
      title: 'Camps Bay Roof Slates & Painting',
      image: roofingImg, 
      description: 'Premium coastal tile and slate roof rehabilitation featuring high-durability liquid membrane waterproofing layers, structural slate replacement, and protective exterior weatherproofing coat applications.',
      location: 'Camps Bay, Cape Town',
      category: 'Roofing & Painting'
    },
    {
      title: 'Torch-on Waterproofing & Silver Coating',
      image: waterproofingImg,
      description: 'Professional installation of premium 4mm torch-on bitumen waterproofing membranes finished with a protective bitumen silver aluminum paint coating for optimal UV reflection and long-term weather defense.',
      location: 'Gauteng, South Africa',
      category: 'Waterproofing'
    },
    {
      title: 'Premium Aluminium Door Installation',
      image: aluminiumDoorImg,
      description: 'Custom structural engineering and precise installation of heavy-duty architectural aluminum glass doors, customized layout matching modern high-security estate entry specifications.',
      location: 'Milnerton, Cape Town',
      category: 'Aluminium Fittings'
    }
  ]

  return (
    <>
      <section 
        className="w-full py-24 select-none relative z-10" 
        style={{ backgroundColor: brandDark }}
      >
        <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px]" style={{ maxWidth: '1440px' }}>
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <div className="flex items-center justify-center gap-2 mb-3">
              <span className="w-6 h-[1.5px]" style={{ backgroundColor: brandOrange }} />
              <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                Recent Projects
              </p>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[45px] font-black tracking-tight text-white">
              Our <span style={{ color: brandOrange }}>Completed Projects</span>
            </h2>
          </div>

          <div className="space-y-12 max-w-5xl mx-auto mb-16">
            {projectsData.map((project, idx) => {
              const isEven = idx % 2 === 0
              return (
                <div 
                  key={idx}
                  className={`w-full bg-[#0c2556] rounded-[32px] overflow-hidden p-6 md:p-8 flex flex-col lg:flex-row items-center gap-8 lg:gap-12 border border-slate-800 transition-transform duration-300 hover:-translate-y-1 ${
                    isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="w-full lg:w-1/2 relative h-[260px] sm:h-[320px] rounded-2xl overflow-hidden bg-slate-900 group">
                    <div 
                      className={`absolute inset-0 w-full h-full transition-transform duration-700 group-hover:scale-105 overflow-hidden ${
                        isEven ? 'rounded-tl-[45px]' : 'rounded-tr-[45px]'
                      }`}
                    >
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover"
                      />
                    </div>
                    
                    <div className="absolute bottom-4 left-4 flex items-center gap-2 z-10">
                      <span className="text-[11px] font-bold text-white px-3 py-1.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <div className="w-full lg:w-1/2 flex flex-col justify-center">
                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-sm sm:text-[15px] font-medium leading-relaxed mb-6 opacity-95">
                      {project.description}
                    </p>

                    <div className="space-y-3.5 mb-8">
                      <div className="flex items-center gap-3">
                        <div className="w-8 h-8 rounded-full flex items-center justify-center bg-[#ff5722]/10 text-[#ff5722]">
                          <FaLocationDot size={13} />
                        </div>
                        <p className="text-xs sm:text-sm font-semibold text-slate-200">
                          <span className="text-slate-400 font-medium">Location :</span> {project.location}
                        </p>
                      </div>
                    </div>

                    <div>
                      <a 
                        href="#project-details" 
                        className="inline-flex items-center gap-2 text-xs sm:text-sm font-bold tracking-wide transition-colors group"
                        style={{ color: brandOrange }}
                      >
                        <span>Learn more</span>
                        <FaArrowRight size={11} className="transform transition-transform group-hover:translate-x-1" />
                      </a>
                    </div>
                  </div>

                </div>
              )
            })}
          </div>

          <div className="flex justify-center">
            <button 
              className="text-xs sm:text-sm font-bold text-white px-8 py-3.5 rounded-full shadow-md transition-transform duration-200 hover:scale-[1.02]"
              style={{ backgroundColor: brandOrange }}
            >
              View All Projects
            </button>
          </div>

        </div>
      </section>

      <div 
        className="w-full h-[400px] sm:h-[500px] bg-fixed bg-center bg-no-repeat bg-contain"
        style={{ 
          backgroundImage: `url(${awardImg})`,
          backgroundColor: '#ffffff'
        }}
      />
    </>
  )
}

export default Projects