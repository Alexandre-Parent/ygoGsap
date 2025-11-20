import React from 'react'
import Hero from './components/Hero'
import About from './components/About'
import Navbar from './components/Navbar'
import Features from './components/Features'
import FloatingImage from './components/Story'
import Product from './components/Products'

const App = () => {
  return (
    <main className='relative min-h-screen w-screen overflow-x-hidden'>
      <Navbar/>
      <Hero />
      <About/>
      <Features/>
      <FloatingImage/>
      <Product/>
    </main>
  )
}

export default App