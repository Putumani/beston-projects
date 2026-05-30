import React from 'react'
import { FaArrowRight, FaTrowel, FaHelmetSafety, FaScrewdriverWrench, FaHouseChimneyCrack, FaTrowelBricks, FaPaintRoller } from 'react-icons/fa6'

import boundaryWallImg from '../assets/home/services/boundary-wall.jpg'
import concreteCastingImg from '../assets/home/services/concrete-casting.jpg'
import staircaseImg from '../assets/home/services/staircase.jpg'
import roofingImg from '../assets/home/services/roofing.jpg'
import pavingImg from '../assets/home/services/paving.jpg'
import parallaxBg from '../assets/home/parallax-image.jpg'

function Services({ navigateTo, isPreview }) {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'

  const servicesData = [
    {
      title: 'Boundary Walls & Brickwork',
      icon: <FaTrowelBricks className="text-white text-xl" />,
      image: boundaryWallImg,
      bullets: ['All brickwork', 'New boundary walls', 'Pillar extensions', 'Plastering services', 'Arc and bench designs', 'Nutec gates installation'],
      isFeatured: true 
    },
    {
      title: 'Concrete Works & Excavations',
      icon: <FaHelmetSafety className="text-white text-xl" />,
      image: concreteCastingImg,
      bullets: ['Setting out', 'Excavations', 'Concrete casting', 'Slab floor casting', 'Trench casting'],
      isFeatured: false
    },
    {
      title: 'Structural Repairs',
      icon: <FaScrewdriverWrench className="text-white text-xl" />,
      image: staircaseImg,
      bullets: ['Staircase installation', 'Structural crack repairs', 'House extensions', 'Wall openings'],
      isFeatured: false
    },
    {
      title: 'Roofing & Waterproofing',
      icon: <FaHouseChimneyCrack className="text-white text-xl" />,
      image: roofingImg,
      bullets: ['Silver coating', 'Roofing installations', 'Roof replacement', 'Torch-on waterproofing'],
      isFeatured: false
    },
    {
      title: 'Paving & External Finishes',
      icon: <FaTrowel className="text-white text-xl" />, 
      image: pavingImg,
      bullets: ['High pressure cleaning', 'Paving (R120/m²)'],
      isFeatured: false
    },
    {
      title: 'Painting (External)',
      icon: <FaPaintRoller className="text-white text-xl" />,
      image: 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600',
      bullets: ['External crack filling & painting', 'Exterior painting', 'Boundary wall painting', 'Parapet painting'],
      isFeatured: false
    }
  ]

  return (
    <>
      <section className="w-full py-20 lg:py-28 bg-[#f9fafb] select-none">
        <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px]" style={{ maxWidth: '1440px' }}>
          
          {/* Section Headings */}
          <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-24">
            <div className="flex items-center justify-center gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ backgroundColor: brandOrange }} />
              <span className="text-xs font-bold tracking-wider uppercase opacity-75" style={{ color: brandDark, letterSpacing: '0.15em' }}>
                {isPreview ? 'OUR SERVICES' : 'FULL PORTFOLIO SPECIALITIES'}
              </span>
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-[44px] font-black tracking-tight leading-[1.15]" style={{ color: brandDark }}>
              Comprehensive <br />
              <span style={{ color: brandOrange }}>Exterior Solutions</span>
            </h2>
            <p className="text-gray-500 text-sm sm:text-[15px] mt-4 font-medium leading-relaxed">
              From foundation to finishing touches, we deliver quality craftsmanship for all your exterior construction needs.
            </p>
          </div>

          {/* Cards Portfolio Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 xl:gap-10 items-stretch mb-16">
            {servicesData.map((service, idx) => (
              <div 
                key={idx}
                className={`bg-white rounded-3xl overflow-hidden flex flex-col justify-between transition-all duration-300 hover:shadow-xl relative border ${
                  service.isFeatured 
                    ? 'border-b-[6px] shadow-md' 
                    : 'border-gray-100 hover:border-gray-200'
                }`}
                style={{ 
                  borderBottomColor: service.isFeatured ? brandOrange : undefined 
                }}
              >
                <div className="relative w-full h-[200px] bg-gray-100">
                  <div className="absolute inset-0 rounded-tl-[60px] overflow-hidden">
                    <img 
                      src={service.image} 
                      alt={service.title} 
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent pointer-events-none" />
                  
                  <div 
                    className="absolute -bottom-7 left-8 w-14 h-14 rounded-full flex items-center justify-center border-4 border-white shadow-md z-20"
                    style={{ backgroundColor: brandDark }}
                  >
                    {service.icon}
                  </div>
                </div>

                <div className="p-8 pt-12 flex-grow flex flex-col justify-between bg-white relative z-10">
                  <div>
                    <h3 className="text-xl font-extrabold tracking-tight mb-4" style={{ color: brandDark }}>
                      {service.title}
                    </h3>
                    
                    <ul className="space-y-2 mb-8">
                      {service.bullets.map((bullet, bIdx) => (
                        <li key={bIdx} className="flex items-center gap-2 text-gray-500 text-xs sm:text-sm font-medium">
                          <span className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ backgroundColor: brandOrange }} />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Card Actions Container */}
                  <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                    <button 
                      onClick={() => navigateTo('services')}
                      className="text-xs sm:text-sm font-bold flex items-center gap-1.5 transition-colors group bg-transparent border-none p-0 cursor-pointer" 
                      style={{ color: brandOrange }}
                    >
                      <span>Learn More</span>
                      <FaArrowRight size={11} className="transform transition-transform group-hover:translate-x-0.5" />
                    </button>
                    
                    <a 
                      href="#quote" 
                      className="text-xs font-bold px-4 py-2 rounded-full border border-gray-200 hover:border-gray-900 hover:bg-gray-900 hover:text-white transition-all"
                      style={{ color: brandDark, textDecoration: 'none' }}
                    >
                      Request Quote
                    </a>
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Conditional Bottom Section CTA Trigger (Only visible on Home preview) */}
          {isPreview && (
            <div className="flex items-center justify-center">
              <div 
                onClick={() => navigateTo('services')}
                className="inline-flex items-center bg-white rounded-full p-1.5 shadow-md border border-gray-100 group cursor-pointer hover:shadow-lg transition-all"
              >
                <span 
                  className="text-xs sm:text-sm font-bold text-white px-6 py-3 rounded-full transition-transform duration-200"
                  style={{ backgroundColor: brandOrange }}
                >
                  View All Services
                </span>
                <div 
                  className="w-10 h-10 rounded-full flex items-center justify-center text-white ml-2 transition-transform duration-300 group-hover:translate-x-0.5"
                  style={{ backgroundColor: brandDark }}
                >
                  <FaArrowRight size={12} />
                </div>
              </div>
            </div>
          )}

        </div>
      </section>

      {/* Parallax Feature Backdrop Section */}
      <section 
        className="relative w-full h-[320px] sm:h-[400px] md:h-[480px] z-0 overflow-hidden select-none"
        style={{ clipPath: 'inset(0 0 0 0)' }}
      >
        <div 
          className="fixed inset-0 w-full h-full bg-no-repeat pointer-events-none"
          style={{ 
            backgroundImage: `url(${parallaxBg})`,
            backgroundPosition: 'center 35%',
            backgroundSize: 'cover',
            backgroundAttachment: 'fixed',
            zIndex: -1
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#071d46]/70 via-[#071d46]/40 to-transparent pointer-events-none" />
        <div className="absolute inset-0 bg-black/40 pointer-events-none" />
        
        <div className="absolute inset-0 z-10 flex items-center justify-center text-center px-6 pointer-events-none">
          <div className="max-w-3xl">
            <p className="text-white text-xs tracking-[0.3em] font-bold uppercase mb-3 opacity-90">
              Safety & Quality First
            </p>
            <h3 className="text-2xl sm:text-4xl font-black text-white tracking-tight leading-tight drop-shadow-md">
              Building Exterior Spaces That Last For Generations
            </h3>
          </div>
        </div>
      </section>
    </>
  )
}

export default Services