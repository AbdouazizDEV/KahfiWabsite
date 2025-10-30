import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Solutions from './components/Solutions'
import Advantages from './components/Advantages'
import Team from './components/Team'
import Testimonials from './components/Testimonials'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <About />
              <Solutions />
              <Advantages />
              <Team />
              <Testimonials />
              <Contact />
            </>
          } />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
