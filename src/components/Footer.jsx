import React from 'react'
import { 
  FaPhone, 
  FaEnvelope, 
  FaLocationDot, 
  FaClock, 
  FaArrowUpRightFromSquare,
  FaFacebookF,
  FaWhatsapp
} from 'react-icons/fa6'
import logo from '../assets/logo/logo.png'

function Footer() {
  const brandDark = '#071d46'
  const brandOrange = '#ff5722'
  const currentYear = new Date().getFullYear()

  const facebookUrl = "https://web.facebook.com/bestonprojects/?_rdc=1&_rdr"
  const whatsappUrl = "https://wa.me/27658641093"

  return (
    <footer className="w-full border-t border-slate-800 pt-16 pb-8" style={{ backgroundColor: brandDark }}>
      <div className="w-full mx-auto px-6 md:px-10 lg:px-[50px]" style={{ maxWidth: '1440px' }}>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          
          <div className="flex flex-col gap-6">
            <div className="flex items-center gap-3 cursor-pointer">
              <img 
                src={logo} 
                alt="Beston Construction Logo" 
                className="object-contain"
                style={{ height: '40px', width: 'auto' }} 
              />
              <span className="text-xl font-bold tracking-tight text-white whitespace-nowrap">
                Construction<span className="font-black" style={{ color: brandOrange }}>.</span>
              </span>
            </div>
            <p className="text-slate-400 text-sm leading-relaxed">
              Premium roofing, painting, structural frameworks, and torch-on waterproofing specialists offering engineering excellence across South Africa.
            </p>
            <div className="flex items-center gap-3">
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full text-white bg-slate-800 hover:bg-[#3b5998] transition-colors flex items-center justify-center text-xs"
              >
                <FaFacebookF />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="w-8 h-8 rounded-full text-white bg-slate-800 hover:bg-[#25D366] transition-colors flex items-center justify-center text-sm"
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Contact Channels
            </h4>
            <ul className="space-y-4">
              <li>
                <a href="tel:+27658641093" className="flex items-center gap-3 group text-slate-300 hover:text-white text-sm font-medium transition-colors">
                  <FaPhone size={13} className="transform -scale-x-100" style={{ color: brandOrange }} />
                  <span>+27 65 864 1093</span>
                </a>
              </li>
              <li>
                <a href="mailto:bestonconstruct@gmail.com" className="flex items-center gap-3 group text-slate-300 hover:text-white text-sm font-medium transition-colors">
                  <FaEnvelope size={13} style={{ color: brandOrange }} />
                  <span className="break-all">bestonconstruct@gmail.com</span>
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Operating Hours & Hub
            </h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3 text-slate-300 text-sm font-medium">
                <FaClock size={13} className="mt-1" style={{ color: brandOrange }} />
                <span>Always open</span>
              </li>
              <li className="flex items-start gap-3 text-slate-300 text-sm font-medium leading-relaxed">
                <FaLocationDot size={13} className="mt-1" style={{ color: brandOrange }} />
                <span>Grandflora, Milnerton, Cape Town, South Africa, 7441</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-wider text-white mb-5">
              Interior Division
            </h4>
            <div className="p-4 rounded-2xl bg-[#0c2556] border border-slate-800">
              <p className="text-xs text-slate-300 font-medium leading-relaxed mb-4">
                Looking for specialised carpentry, high-end kitchens, or internal transformations?
              </p>
              <a 
                href="https://bestonprojectsinteriors.co.za" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-flex items-center gap-2 text-xs font-bold transition-colors hover:opacity-80"
                style={{ color: brandOrange }}
              >
                <span>bestonprojectsinteriors.co.za</span>
                <FaArrowUpRightFromSquare size={10} />
              </a>
            </div>
          </div>

        </div>

        <div className="border-t border-slate-800/60 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs font-medium text-slate-500 text-center sm:text-left">
            &copy; {currentYear} Beston Projects. All rights reserved.
          </p>
          <div className="flex gap-6 text-xs font-medium text-slate-500">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  )
}

export default Footer