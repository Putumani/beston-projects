import React from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa6'

function CTA() {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'

  return (
    <section className="w-full py-20 bg-[#051432] relative overflow-hidden">
      <div className="absolute inset-0 opacity-5 mix-blend-overlay pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-white blur-3xl" />
      </div>

      <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px] relative z-10" style={{ maxWidth: '1440px' }}>
        <div 
          className="w-full max-w-4xl mx-auto rounded-[32px] p-8 md:p-12 lg:p-16 text-center border border-slate-800 shadow-2xl"
          style={{ backgroundColor: brandDark }}
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="w-6 h-[1.5px]" style={{ backgroundColor: brandOrange }} />
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-gray-300">
              Get In Touch
            </p>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight text-white mb-6 leading-tight">
            Ready to Build, Protect, or <span style={{ color: brandOrange }}>Renovate Your Property?</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base max-w-2xl mx-auto mb-10 leading-relaxed opacity-95">
            From heavy-duty torch-on waterproofing systems to premium roofing installations and structural aluminum frameworks, our team delivers uncompromised durability and precision craftsmanship. Contact us today to discuss your project requirements.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <a
              href="tel:+27658641093"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-white px-8 py-4 rounded-full shadow-lg transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ backgroundColor: brandOrange }}
            >
              <FaPhone size={14} />
              <span>Call +27 65 864 1093</span>
            </a>

            <a
              href="mailto:bestonconstruct@gmail.com"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-3 text-xs sm:text-sm font-bold text-white px-8 py-4 rounded-full border border-slate-700 bg-slate-900/40 backdrop-blur-sm transition-all duration-200 hover:bg-slate-900 hover:border-slate-600 active:scale-[0.98]"
            >
              <FaEnvelope size={14} style={{ color: brandOrange }} />
              <span>bestonconstruct@gmail.com</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default CTA