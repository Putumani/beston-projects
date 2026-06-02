import React, { useState } from 'react';
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

  const navigateTo = (viewName) => {
    setCurrentView(viewName);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation currentView={currentView} navigateTo={navigateTo} />
      
      {currentView === 'home' && (
        <>
          <Hero />
          <About />
          <Services navigateTo={navigateTo} /> 
          <Projects />
          <InteriorsReference />
          <CTA />
        </>
      )}

      {currentView === 'services' && <ServicesPage navigateTo={navigateTo} />}
      {currentView === 'projects' && <ProjectsPage navigateTo={navigateTo} />}
      {currentView === 'contact' && <ContactPage />}
      
      <Footer navigateTo={navigateTo} />
    </div>
  );
}

export default App;