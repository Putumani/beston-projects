import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'
import Projects from './components/Projects'
import InteriorsReference from './components/InteriorsReference'
import CTA from './components/CTA'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation />
      <Hero />
      <About />
      <Services /> 
      <Projects />
      <InteriorsReference />
      <CTA />
      <Footer />
      
    </div>
  )
}

export default App