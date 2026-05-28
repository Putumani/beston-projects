import React from 'react'
import { FaArrowUpRightFromSquare } from 'react-icons/fa6'
import interiorImg from '../assets/home/interior-reference.jpg'

function InteriorsReference() {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'

  return (
    <section className="w-full bg-[#051432] py-20 border-t border-slate-900">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px]" style={{ maxWidth: '1440px' }}>
        <div className="bg-[#071d46] rounded-[32px] overflow-hidden border border-slate-800 p-8 md:p-12 lg:p-16">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
            
            {/* Left Content Column */}
            <div className="w-full lg:w-7/12">
              <div className="flex items-center gap-2 mb-4">
                <span className="w-6 h-[1.5px]" style={{ backgroundColor: brandOrange }} />
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
                  Interior Division
                </p>
              </div>
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-6">
                Bespoke Carpentry & <span style={{ color: brandOrange }}>Interior Renovations</span>
              </h3>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-8 opacity-95">
                Specialised Interior Upgrades — From custom TV units to high-end kitchen transformations. Our dedicated interior division delivers flawless finishes, custom cabinetry, corporate fit-outs, and modern internal structural modifications crafted to international design standards.
              </p>
              <div className="flex flex-wrap gap-4 items-center">
                <a 
                  href="https://www.bestonprojectsinteriors.co.za/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-3 text-xs sm:text-sm font-bold text-white px-8 py-4 rounded-full shadow-lg transition-all duration-200 hover:opacity-90 active:scale-95 group"
                  style={{ backgroundColor: brandOrange }}
                >
                  <span>Explore Interior Services</span>
                  <FaArrowUpRightFromSquare size={13} className="transform transition-transform group-hover:translate-y-[-1px] group-hover:translate-x-[1px]" />
                </a>
              </div>
            </div>

            {/* Right Showcase Card Column */}
            <div className="w-full lg:w-5/12 flex justify-center items-center">
              <div className="relative w-full max-w-[380px] h-[450px] sm:h-[480px] lg:h-auto lg:aspect-square rounded-[24px] border border-slate-700 bg-[#0c2556] shadow-2xl overflow-hidden group">
                <div className="absolute inset-0 w-full h-full bg-slate-900">
                  <img 
                    src={interiorImg} 
                    alt="Beston Projects Interiors Showcase" 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-40 group-hover:opacity-50"
                  />
                </div>
                
                <div className="relative w-full h-full p-8 flex flex-col justify-between z-10 backdrop-blur-[2px]">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-[#ff5722]/10 rounded-full blur-2xl transform translate-x-8 -translate-y-8" />
                  
                  <div>
                    <div className="w-12 h-12 rounded-2xl bg-white/10 flex items-center justify-center border border-white/20 text-white font-black text-xl mb-6 shadow-md">
                      B
                    </div>
                    <h4 className="text-xl font-bold text-white mb-2 tracking-tight drop-shadow-md">Beston Projects Interiors</h4>
                    <p className="text-xs text-slate-300 font-semibold tracking-wide uppercase drop-shadow-sm">
                      Carpentry • Kitchens • Custom Units
                    </p>
                  </div>

                  <div className="pt-6 border-t border-white/10 flex items-center justify-between">
                    <span className="text-xs font-semibold text-slate-200 drop-shadow-sm">Official Branch Website</span>
                    <a 
                      href="https://www.bestonprojectsinteriors.co.za/" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="w-10 h-10 rounded-full bg-white/10 border border-white/20 flex items-center justify-center text-white transition-all hover:bg-[#ff5722] hover:border-[#ff5722] shadow-md"
                    >
                      <FaArrowUpRightFromSquare size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}

export default InteriorsReference