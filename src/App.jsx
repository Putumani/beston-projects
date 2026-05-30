import React, { useState } from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services' // Your standard homepage preview section
import ServicesPage from './pages/ServicesPage' // Your brand new image-driven page
import Projects from './components/Projects'
import InteriorsReference from './components/InteriorsReference'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  const [currentView, setCurrentView] = useState('home') // 'home' or 'services'

  // Standard smooth reset to top when interacting with single-page views
  const navigateTo = (viewName) => {
    setCurrentView(viewName)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* Passing state variables directly into your navigation component */}
      <Navigation currentView={currentView} navigateTo={navigateTo} />
      
      {currentView === 'home' ? (
        <>
          <Hero />
          <About />
          <Services navigateTo={navigateTo} /> 
          <Projects />
          <InteriorsReference />
          <CTA />
        </>
      ) : (
        /* Standalone target screen rendering all 10 custom service scopes with active media displays */
        <ServicesPage navigateTo={navigateTo} />
      )}
      
      <Footer navigateTo={navigateTo} />
    </div>
  )
}

export default App