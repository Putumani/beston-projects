import React from 'react'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="min-h-screen bg-[#f9fafb]">
      {/* 2-tier Custom Brand Navigation Bar */}
      <Navigation />

      {/* Hero / Main Body Structural Spacer */}
      <main className="pt-32">
        <div className="container-custom py-12">
          <div className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 max-w-2xl mx-auto text-center">
            <h1 className="text-2xl font-bold text-[#071d46] mb-3">
              Workspace Initialized Successfully!
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              Your split navigation bar with Tailwind v4 engine is live. Drop your 
              Hero and Main Layout sections right here to continue building out 
              the rest of your application.
            </p>
          </div>
        </div>
      </main>
    </div>
  )
}

export default App