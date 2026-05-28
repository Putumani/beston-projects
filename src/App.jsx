import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About'
import Services from './components/Services'

function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation />
      <Hero />
      <About />
      <Services /> 
    </div>
  )
}

export default App