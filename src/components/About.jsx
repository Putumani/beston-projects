import React from 'react'
import { FaCheck, FaArrowRight } from 'react-icons/fa6'
import aboutMainImg from '../assets/home/about/about-main.jpg' 
import aboutSubImg from '../assets/home/about/about-sub.jpg'

function About() {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'

  const features = [
    { title: 'Licensed & Insured', desc: 'Full regulatory compliance for complete peace of mind.' },
    { title: 'On-time Completion', desc: 'Rigorous project management ensuring deadlines are met.' },
    { title: 'Expert Team', desc: 'Skilled professionals dedicated to master craftsmanship.' },
    { title: 'Quality Guaranteed', desc: 'We use premium materials backed by strict standards.' }
  ]

  return (
    <section className="w-full py-20 lg:py-28 bg-white overflow-hidden select-none">
      <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px]" style={{ maxWidth: '1440px' }}>
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          <div className="lg:col-span-6 relative w-full h-[400px] sm:h-[500px] md:h-[550px]">
            <div className="absolute top-4 left-4 w-24 h-24 bg-gray-100 -z-10 rounded-2xl hidden sm:block" />
            <div className="absolute top-0 left-0 w-[75%] h-[85%] rounded-3xl overflow-hidden shadow-xl border border-gray-100">
              <img 
                src={aboutMainImg} 
                alt="Construction Site Structure" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=800' }}
              />
            </div>
            <div className="absolute bottom-0 right-0 w-[55%] h-[60%] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
              <img 
                src={aboutSubImg} 
                alt="Exterior Finishing Detail" 
                className="w-full h-full object-cover"
                onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600' }}
              />
            </div>

            <div 
              className="absolute bottom-8 left-8 p-6 rounded-2xl text-white shadow-xl flex flex-col items-center justify-center min-w-[120px]"
              style={{ backgroundColor: brandOrange }}
            >
              <span className="text-3xl font-black tracking-tight">15+</span>
              <span className="text-[10px] font-bold uppercase tracking-wider opacity-90 mt-0.5 text-center">Years of<br />Excellence</span>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col items-start">
            
            <div className="flex items-center gap-3 mb-4">
              <span className="w-8 h-[2px]" style={{ backgroundColor: brandOrange }} />
              <span className="text-xs font-bold tracking-wider uppercase opacity-75" style={{ color: brandDark, letterSpacing: '0.15em' }}>
                ABOUT OUR COMPANY
              </span>
            </div>

            {/* Section Main Title Line */}
            <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-black tracking-tight leading-[1.15] mb-6" style={{ color: brandDark }}>
              Built on Quality, <br />
              <span style={{ color: brandOrange }}>Trust & Excellence</span>
            </h2>

            <div className="text-gray-500 text-sm sm:text-[15px] leading-relaxed font-medium space-y-4 max-w-xl mb-10">
              <p>
                <strong style={{ color: brandDark }}>Beston Projects Construction</strong> is a premier construction company specializing in 
                exterior works. With over 15 years of experience, we've established ourselves as leaders in boundary walls, structural repairs, roofing, 
                painting, tiling, and complete building extensions.
              </p>
              <p>
                Our commitment to quality craftsmanship, attention to detail, and customer satisfaction sets us apart. We use only the finest materials and employ 
                skilled professionals who take pride in their work.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-xl mb-10 border-t border-gray-100 pt-8">
              {features.map((feat, idx) => (
                <div key={idx} className="flex gap-3.5 items-start">
                  <div 
                    className="w-5 h-5 rounded-full flex items-center justify-center text-white flex-shrink-0 mt-0.5"
                    style={{ backgroundColor: brandOrange }}
                  >
                    <FaCheck size={9} strokeWidth={2} />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold tracking-tight mb-0.5" style={{ color: brandDark }}>
                      {feat.title}
                    </h4>
                    <p className="text-xs text-gray-400 leading-normal font-medium">
                      {feat.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="group px-7 h-13 rounded-full text-white text-sm font-bold transition-all hover:scale-[1.03] duration-200 tracking-wide flex items-center justify-center gap-2.5 shadow-md"
              style={{ 
                backgroundColor: brandDark,
                boxShadow: '0 8px 20px -6px rgba(7, 29, 70, 0.25)'
              }}
            >
              <span>Get Free Consultation</span>
              <FaArrowRight size={12} className="transform transition-transform group-hover:translate-x-0.5" />
            </a>

          </div>

        </div>

      </div>
    </section>
  )
}

export default About