import React, { useState } from 'react';
import { 
  FaPhone, 
  FaEnvelope, 
  FaFacebookF, 
  FaWhatsapp,
  FaBars,
  FaXmark,
  FaClock,
  FaLocationDot
} from 'react-icons/fa6';
import logo from '../assets/logo/logo.png';

function Navigation({ currentView, navigateTo }) {
  const brandDark = '#071d46';
  const brandOrange = '#ff5722';
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const facebookUrl = "https://web.facebook.com/bestonprojects/?_rdc=1&_rdr";
  const whatsappUrl = "https://wa.me/27658641093";

  return (
    <header className="w-full bg-white border-b border-gray-200 select-none relative z-50">
      
      {/* Desktop Header */}
      <div className="hidden md:flex w-full mx-auto" style={{ maxWidth: '1440px', height: '110px' }}>
        
        <div 
          className="flex items-center shrink-0" 
          style={{ 
            paddingLeft: '40px', 
            paddingRight: '40px', 
            borderRight: '1px solid #e5e7eb',
            height: '100%'
          }}
        >
          <div onClick={() => navigateTo('home')} className="flex items-center cursor-pointer" style={{ gap: '12px' }}>
            <img 
              src={logo} 
              alt="beston construction Logo" 
              className="object-contain"
              style={{ height: '44px', width: 'auto' }} 
            />
            <span className="text-2xl font-bold tracking-tight whitespace-nowrap" style={{ color: brandDark }}>
              Construction<span className="font-black" style={{ color: brandOrange }}>.</span>
            </span>
          </div>
        </div>

        <div className="flex flex-1 flex-col h-full min-w-0">
          {/* Top Info Bar */}
          <div 
            className="w-full flex items-center justify-between shrink-0" 
            style={{ 
              height: '45px', 
              paddingLeft: '32px', 
              paddingRight: '40px', 
              borderBottom: '1px solid #e5e7eb' 
            }}
          >
            <div className="flex items-center text-xs" style={{ gap: '24px' }}>
              <a href="tel:+27658641093" className="flex items-center hover:opacity-80 transition-opacity font-semibold whitespace-nowrap" style={{ color: brandDark, gap: '6px', textDecoration: 'none' }}>
                <FaPhone size={12} className="transform -scale-x-100 shrink-0" style={{ color: brandOrange }} />
                <span>+27 65 864 1093</span>
              </a>
              <a href="mailto:bestonconstruct@gmail.com" className="flex items-center hover:opacity-80 transition-opacity font-semibold whitespace-nowrap" style={{ color: brandDark, gap: '6px', textDecoration: 'none' }}>
                <FaEnvelope size={12} className="shrink-0" style={{ color: brandOrange }} />
                <span>bestonconstruct@gmail.com</span>
              </a>
              <span className="flex items-center font-semibold text-gray-500 whitespace-nowrap" style={{ gap: '6px' }}>
                <FaClock size={12} style={{ color: brandOrange }} />
                <span>Always open</span>
              </span>
              <span className="hidden lg:flex items-center font-semibold text-gray-500 whitespace-nowrap truncate max-w-[320px]" style={{ gap: '6px' }} title="Grandflora, Milnerton, Cape Town, South Africa, 7441">
                <FaLocationDot size={12} style={{ color: brandOrange }} />
                <span>Grandflora, Milnerton, Cape Town, 7441</span>
              </span>
            </div>

            <div className="flex items-center shrink-0" style={{ gap: '10px' }}>
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ width: '26px', height: '26px', color: '#ffffff', backgroundColor: brandDark, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '11px' }}
              >
                <FaFacebookF />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ width: '26px', height: '26px', color: '#ffffff', backgroundColor: '#25D366', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none', fontSize: '13px' }}
              >
                <FaWhatsapp />
              </a>
            </div>
          </div>

          {/* Main Desktop Navbar Navigation */}
          <div className="w-full flex items-center justify-between flex-1" style={{ paddingLeft: '32px', paddingRight: '40px' }}>
            <nav className="flex items-center h-full text-[15px] font-bold" style={{ color: brandDark, gap: '32px' }}>
              <button 
                onClick={() => navigateTo('home')} 
                className="h-full flex items-center border-b-2 bg-transparent border-transparent px-0.5 font-bold cursor-pointer transition-colors"
                style={{ 
                  color: currentView === 'home' ? brandOrange : brandDark, 
                  borderColor: currentView === 'home' ? brandOrange : 'transparent'
                }}
              >
                Home
              </button>
              <a href="#about" className="hover:text-orange-500 transition-colors h-full flex items-center border-b-2 border-transparent px-0.5" style={{ textDecoration: 'none', color: brandDark }}>About Us</a>
              
              <button 
                onClick={() => navigateTo('services')} 
                className="h-full flex items-center border-b-2 bg-transparent border-transparent px-0.5 font-bold cursor-pointer transition-colors"
                style={{ 
                  color: currentView === 'services' ? brandOrange : brandDark, 
                  borderColor: currentView === 'services' ? brandOrange : 'transparent'
                }}
              >
                Services
              </button>

              <a href="#projects" className="hover:text-orange-500 transition-colors h-full flex items-center border-b-2 border-transparent px-0.5" style={{ textDecoration: 'none', color: brandDark }}>Projects</a>
              <a href="#contact" className="hover:text-orange-500 transition-colors h-full flex items-center border-b-2 border-transparent px-0.5" style={{ textDecoration: 'none', color: brandDark }}>Contact Us</a>
            </nav>

            <div className="flex items-center shrink-0">
              <a 
                href="#quote" 
                className="text-white font-bold rounded-full transition-transform hover:scale-105 duration-200 text-sm tracking-wide flex items-center justify-center whitespace-nowrap"
                style={{ 
                  backgroundColor: brandOrange,
                  paddingLeft: '32px',
                  paddingRight: '32px',
                  height: '46px',
                  textDecoration: 'none'
                }}
              >
                Get A Quote
              </a>
            </div>
          </div>

        </div>

      </div>
      
      {/* Mobile Top Header */}
      <div className="flex md:hidden items-center justify-between w-full" style={{ height: '80px', paddingLeft: '24px', paddingRight: '24px' }}>
        <div onClick={() => { navigateTo('home'); setIsMenuOpen(false); }} className="flex items-center cursor-pointer" style={{ gap: '12px' }}>
          <img 
            src={logo} 
            alt="Beston Projects Logo" 
            className="object-contain"
            style={{ height: '38px', width: 'auto' }} 
          />
          <span className="text-xl font-bold tracking-tight whitespace-nowrap" style={{ color: brandDark }}>
            Construction<span className="font-black" style={{ color: brandOrange }}>.</span>
          </span>
        </div>

        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="focus:outline-none transition-transform active:scale-95 flex items-center justify-center"
          style={{ 
            color: brandDark, 
            backgroundColor: '#f3f4f6',
            border: 'none',
            borderRadius: '8px',
            width: '42px',
            height: '42px',
            cursor: 'pointer'
          }}
          aria-label="Toggle Menu"
        >
          {isMenuOpen ? <FaXmark size={22} /> : <FaBars size={22} />}
        </button>
      </div>
      
      {/* Mobile Sidebar Dropdown */}
      {isMenuOpen && (
        <div 
          style={{
            position: 'fixed',
            top: '80px', 
            left: 0,
            width: '100vw',
            height: 'calc(100vh - 80px)',
            backgroundColor: '#ffffff',
            zIndex: 999,
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.1)',
            overflowY: 'auto'
          }}
        >
          <nav style={{ display: 'flex', flexDirection: 'column', width: '100%', borderBottom: '1px solid #f3f4f6' }}>
            <button 
              onClick={() => { navigateTo('home'); setIsMenuOpen(false); }}
              style={{ 
                padding: '18px 32px', 
                color: currentView === 'home' ? brandOrange : brandDark, 
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'left',
                backgroundColor: currentView === 'home' ? '#fffbf9' : 'transparent',
                border: 'none',
                borderLeft: currentView === 'home' ? `4px solid ${brandOrange}` : 'none',
                cursor: 'pointer'
              }}
            >
              Home
            </button>
            
            <a href="#about" onClick={() => setIsMenuOpen(false)} style={{ padding: '18px 32px', color: brandDark, fontWeight: '600', fontSize: '16px', textDecoration: 'none', borderBottom: '1px solid #fafafa' }}>About Us</a>
            
            <button 
              onClick={() => { navigateTo('services'); setIsMenuOpen(false); }}
              style={{ 
                padding: '18px 32px', 
                color: currentView === 'services' ? brandOrange : brandDark, 
                fontWeight: 'bold',
                fontSize: '16px',
                textAlign: 'left',
                backgroundColor: currentView === 'services' ? '#fffbf9' : 'transparent',
                border: 'none',
                borderLeft: currentView === 'services' ? `4px solid ${brandOrange}` : 'none',
                cursor: 'pointer'
              }}
            >
              Services
            </button>

            <a href="#projects" onClick={() => setIsMenuOpen(false)} style={{ padding: '18px 32px', color: brandDark, fontWeight: '600', fontSize: '16px', textDecoration: 'none', borderBottom: '1px solid #fafafa' }}>Projects</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} style={{ padding: '18px 32px', color: brandDark, fontWeight: '600', fontSize: '16px', textDecoration: 'none', borderBottom: '1px solid #fafafa' }}>Contact Us</a>
          </nav>

          <div 
            style={{ 
              display: 'flex', 
              flexDirection: 'column', 
              gap: '16px', 
              padding: '24px 32px',
              backgroundColor: '#f9fafb',
              borderBottom: '1px solid #f3f4f6'
            }}
          >
            <a href="tel:+27658641093" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: brandDark, fontSize: '15px', fontWeight: '500' }}>
              <FaPhone size={14} className="transform -scale-x-100" style={{ color: brandOrange }} />
              <span>+27 65 864 1093</span>
            </a>
            <a href="mailto:bestonconstruct@gmail.com" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', color: brandDark, fontSize: '15px', fontWeight: '500' }}>
              <FaEnvelope size={14} style={{ color: brandOrange }} />
              <span style={{ wordBreak: 'break-all' }}>bestonconstruct@gmail.com</span>
            </a>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', color: brandDark, fontSize: '14px', fontWeight: '500' }}>
              <FaClock size={14} style={{ color: brandOrange }} />
              <span>Always open</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px', color: brandDark, fontSize: '14px', fontWeight: '500' }}>
              <FaLocationDot size={14} style={{ color: brandOrange, marginTop: '3px', flexShrink: 0 }} />
              <span style={{ lineHeight: '1.4' }}>
                Grandflora, Milnerton, Cape Town, South Africa, 7441
              </span>
            </div>
          </div>

          <div style={{ padding: '28px 32px 40px 32px', display: 'flex', flexDirection: 'column', gap: '28px', backgroundColor: '#ffffff', flexGrow: 1 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <a 
                href={facebookUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ width: '38px', height: '38px', backgroundColor: brandDark, color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
              >
                <FaFacebookF size={14} />
              </a>
              <a 
                href={whatsappUrl} 
                target="_blank" 
                rel="noopener noreferrer" 
                style={{ width: '38px', height: '38px', backgroundColor: '#25D366', color: '#ffffff', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', textDecoration: 'none' }}
              >
                <FaWhatsapp size={16} />
              </a>
            </div>

            <div style={{ width: '100%' }}>
              <a 
                href="#quote" 
                onClick={() => setIsMenuOpen(false)}
                style={{ 
                  backgroundColor: brandOrange,
                  color: '#ffffff',
                  fontWeight: 'bold',
                  borderRadius: '9999px',
                  fontSize: '15px',
                  textDecoration: 'none',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '100%',
                  height: '52px',
                  boxShadow: '0 4px 6px -1px rgba(255, 87, 34, 0.2)'
                }}
              >
                Get A Quote
              </a>
            </div>
          </div>

        </div>
      )}
    </header>
  );
}

export default Navigation;