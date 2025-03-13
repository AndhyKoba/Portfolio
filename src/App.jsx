import React from 'react'
import Hero from './components/hero.jsx'
import About from './components/About.jsx'
import Projects from './components/Projects.jsx'
import ContactMe from './components/ContactMe.jsx'

const App = () => {
  return (
    <main className="relative min-h-screen min-w-screen bg-white">
      <Hero />
      <About />
      <Projects />
      <ContactMe />
    </main>
    
  )
}

export default App