import React from 'react'
import { FaArrowRight, FaPlay } from 'react-icons/fa6'
import heroVideo from '../assets/home/hero/hero.mp4'

function Hero() {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'

  const servicesTags = [
    'Structural work',
    'Concrete Work',
    'Roofing',
    'Civil Works',
    'Painting',
    'External Works'
  ]

  return (
    <section className="w-full relative bg-[#f9fafb] select-none overflow-hidden">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px] pt-16 pb-16 relative z-10" style={{ maxWidth: '1440px' }}>
        <div className="flex items-center gap-3 mb-6">
          <span className="w-8 h-[2px]" style={{ backgroundColor: brandOrange }} />
          <span className="text-xs font-bold tracking-wider uppercase opacity-75" style={{ color: brandDark, letterSpacing: '0.15em' }}>
            CONSTRUCTION EXCELLENCE
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-12 items-start mb-10 relative">
          <div className="lg:col-span-7">
            <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-black tracking-tight leading-[1.1]" style={{ color: brandDark }}>
              Where Innovation Drives <br />
              <span style={{ color: brandOrange }}>Structural Perfection</span>
            </h1>
          </div>
          
          <div className="lg:col-span-5 flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6 lg:pt-4 text-center sm:text-left">
            <p className="text-gray-500 text-sm sm:text-[15px] leading-relaxed font-medium max-w-sm">
              Professional exterior construction services including boundary walls, concrete works, 
              and complete building extensions. Quality craftsmanship guaranteed.
            </p>

            <div className="relative w-20 h-20 sm:w-24 sm:h-24 flex items-center justify-center flex-shrink-0 group cursor-pointer lg:-mt-6 mt-2 sm:mt-0">
              <div className="absolute inset-0 rounded-full bg-[#071d46] scale-90 transition-transform duration-300 group-hover:scale-95 shadow-md" />
              
              <svg className="absolute w-full h-full animate-[spin_12s_linear_infinite]" viewBox="0 0 100 100">
                <defs>
                  <path
                    id="circlePath"
                    d="M 50, 50 m -34, 0 a 34,34 0 1,1 68,0 a 34,34 0 1,1 -68,0"
                  />
                </defs>
                <text fill="#ffffff" className="text-[9px] font-bold tracking-[0.18em] uppercase">
                  <textPath xlinkHref="#circlePath" startOffset="0%">
                    • get in touch • get in touch 
                  </textPath>
                </text>
              </svg>

              <div className="absolute w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#ff5722] flex items-center justify-center text-white shadow-md z-10 transition-transform duration-300 group-hover:scale-110">
                <FaArrowRight size={12} className="transform transition-transform group-hover:translate-x-0.5" />
              </div>
            </div>

          </div>
        </div>
        
        <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 max-w-4xl mb-14">
          {servicesTags.map((tag, idx) => (
            <span
              key={idx}
              className="px-5 py-2 rounded-full text-xs sm:text-sm font-bold bg-white border border-gray-200 shadow-xs text-[#071d46] transition-all hover:border-gray-300 hover:bg-gray-50 cursor-pointer"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 w-full shadow-[0_25px_60px_-15px_rgba(7,29,70,0.12)] rounded-3xl overflow-hidden bg-white relative z-20">
          
          <div className="lg:col-span-8 relative h-[250px] sm:h-[450px] bg-gray-900 group">
            <video
              src={heroVideo}
              autoPlay
              loop
              muted
              playsInline
              className="w-full h-full object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.02]"
            />
            
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center bg-white/20 backdrop-blur-md border border-white/30 shadow-2xl transition-transform duration-300 hover:scale-110 cursor-pointer">
                <div className="w-10 h-10 sm:w-11 sm:h-11 bg-white rounded-full flex items-center justify-center shadow-md">
                  <FaPlay size={11} className="text-[#ff5722] ml-0.5" />
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-4 p-8 sm:p-12 flex flex-col justify-center gap-8 text-white relative" style={{ backgroundColor: brandOrange }}>
            
            <div>
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight mb-1">500+</h3>
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider">Projects Completed</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight mb-1">15+</h3>
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider">Years of Experience</p>
            </div>

            <div className="border-t border-white/20 pt-6">
              <h3 className="text-4xl sm:text-5xl font-black tracking-tight mb-1">98%</h3>
              <p className="text-xs sm:text-sm font-bold text-white/80 uppercase tracking-wider">Satisfaction Rate</p>
            </div>

          </div>

        </div>

      </div>

      <div 
        className="absolute bottom-0 left-0 w-full z-0 h-[150px] sm:h-[240px]" 
        style={{ backgroundColor: brandDark }}
      >
        <div className="w-full h-full relative opacity-15">
          <div className="absolute top-12 left-[6%] text-white text-2xl select-none">✦</div>
          <div className="absolute top-24 left-[9%] text-white text-sm select-none opacity-60">✦</div>
        </div>
      </div>

    </section>
  )
}

export default Hero