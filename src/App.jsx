import React, { useState, useRef, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa6';
import Navigation from './components/Navigation';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import ServicesPage from './pages/ServicesPage';
import ProjectsPage from './pages/ProjectsPage';
import Projects from './components/Projects';
import InteriorsReference from './components/InteriorsReference';
import ContactPage from './pages/ContactPage';
import CTA from './components/CTA';
import Footer from './components/Footer';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    if (currentView !== 'home-about') {
      window.scrollTo({ top: 0, behavior: 'instant' });
    }
  }, [currentView]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateTo = (viewName) => {
    if (viewName === 'about') {
      setCurrentView('home');
      setTimeout(() => {
        aboutRef.current?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      setCurrentView(viewName);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation currentView={currentView} navigateTo={navigateTo} />
      
      {currentView === 'home' && (
        <>
          <Hero navigateTo={navigateTo} />
          <div ref={aboutRef}>
            <About navigateTo={navigateTo} />
          </div>
          <Services navigateTo={navigateTo} /> 
          <Projects navigateTo={navigateTo} /> 
          <InteriorsReference />
          <CTA />
        </>
      )}

      {currentView === 'services' && <ServicesPage navigateTo={navigateTo} />}
      {currentView === 'projects' && <ProjectsPage navigateTo={navigateTo} />}
      {currentView === 'contact' && <ContactPage />}
      
      <Footer navigateTo={navigateTo} />

      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 z-50 p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 border-none cursor-pointer"
          style={{
            backgroundColor: '#ff5722',
            color: 'white'
          }}
          aria-label="Back to top"
        >
          <FaArrowUp size={20} />
        </button>
      )}
    </div>
  );
}

export default App;