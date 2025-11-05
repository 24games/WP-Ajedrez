import React from 'react'
import { ThemeProvider } from './contexts/ThemeContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Footer from './components/Footer'
import TableOfContents from './components/sections/TableOfContents'
import Introduction from './components/sections/Introduction'
import History from './components/sections/History'
import Strategies from './components/sections/Strategies'
import Beginners from './components/sections/Beginners'
import Masters from './components/sections/Masters'
import CognitiveBenefits from './components/sections/CognitiveBenefits'
import Benefits from './components/sections/Benefits'
import BlogPosts from './components/sections/BlogPosts'
import VisualGuide from './components/sections/VisualGuide'
import Testimonials from './components/sections/Testimonials'

function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        <a 
          href="#main" 
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-gold focus:text-gray-900 focus:rounded-lg"
        >
          Pular para o conteúdo
        </a>
        <Header />
        <main id="main">
          <Hero />
          <TableOfContents />
          <Introduction />
          <History />
          <Strategies />
          <Beginners />
          <Masters />
          <CognitiveBenefits />
          <Benefits />
          <BlogPosts />
          <VisualGuide />
          <Testimonials />
        </main>
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default App

