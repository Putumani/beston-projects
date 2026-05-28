import React from 'react'
import Navigation from './components/Navigation'
import Hero from './components/Hero'
import About from './components/About' // Imported the clean new section

function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      <Navigation />
      <Hero />
      <About /> {/* Mounted cleanly below your Hero header layout */}
    </div>
  )
}

export default App