import React, { useState, useEffect } from 'react'
import ThemeToggle from './ThemeToggle'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isTocOpen, setIsTocOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const tocButtonRef = React.useRef(null)
  const tocMenuRef = React.useRef(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const toggleMenu = () => {
    setIsMenuOpen(prev => !prev)
  }

  const toggleToc = () => {
    setIsTocOpen(prev => {
      const willOpen = !prev
      if (willOpen && tocButtonRef.current && tocMenuRef.current) {
        setTimeout(() => {
          const buttonRect = tocButtonRef.current.getBoundingClientRect()
          const container = tocMenuRef.current.closest('.container')
          const containerRect = container?.getBoundingClientRect()
          if (containerRect) {
            const containerPadding = parseInt(getComputedStyle(container).paddingLeft) || 0
            const offsetLeft = buttonRect.left - containerRect.left - containerPadding
            const menuWrapper = tocMenuRef.current.querySelector('div > div')
            if (menuWrapper) {
              menuWrapper.style.marginLeft = `${Math.max(0, offsetLeft)}px`
            }
          }
        }, 0)
      }
      return willOpen
    })
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleLinkClick = (e) => {
    const href = e.currentTarget.getAttribute('href')
    if (href && href.startsWith('#')) {
      e.preventDefault()
      const target = document.querySelector(href)
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' })
        closeMenu()
      }
    } else {
      closeMenu()
    }
  }

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled 
        ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md' 
        : 'bg-white dark:bg-gray-900'
    } border-b border-gray-200 dark:border-gray-800`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="text-xl font-bold text-gray-900 dark:text-white hover:opacity-80 transition-opacity"
          >
            ♛ Xadrez <span className="text-gold">Brilhante</span>
          </button>
          
          <div className="flex items-center gap-4">
            <ThemeToggle />
            
            <button
              className="md:hidden p-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 hover:bg-gray-100 dark:hover:bg-gray-700"
              onClick={toggleMenu}
              aria-label="Abrir menu"
              aria-expanded={isMenuOpen}
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <nav className={`${isMenuOpen ? 'block' : 'hidden'} md:block absolute md:static top-16 left-0 right-0 md:top-auto bg-white dark:bg-gray-900 md:bg-transparent border-b md:border-0 border-gray-200 dark:border-gray-800 md:shadow-none shadow-lg`}>
            <ul className="flex flex-col md:flex-row md:gap-6 p-4 md:p-0 md:items-center">
              <li>
                <a 
                  href="#introducao" 
                  className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                  onClick={handleLinkClick}
                >
                  Início
                </a>
              </li>
              <li>
                <a 
                  href="#estrategias" 
                  className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                  onClick={handleLinkClick}
                >
                  Estratégias
                </a>
              </li>
              <li>
                <a 
                  href="#iniciante" 
                  className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                  onClick={handleLinkClick}
                >
                  Para Iniciantes
                </a>
              </li>
              <li>
                <a 
                  href="#mestres" 
                  className="block px-4 py-2 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 font-medium transition-colors"
                  onClick={handleLinkClick}
                >
                  Mestres
                </a>
              </li>
              <li className="md:ml-2">
                <button
                  ref={tocButtonRef}
                  onClick={toggleToc}
                  className="w-8 h-8 flex items-center justify-center p-0 border-none bg-transparent hover:-translate-y-0.5 transition-all duration-200 ease-in-out"
                  aria-label="Abrir sumário"
                  aria-expanded={isTocOpen}
                >
                  <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="rounded-md shadow-sm hover:shadow-md transition-shadow">
                    <rect width="32" height="32" rx="6" fill="url(#menuGradient)" />
                    <line x1="8" y1="11" x2="24" y2="11" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="16" x2="24" y2="16" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                    <line x1="8" y1="21" x2="24" y2="21" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
                    <defs>
                      <linearGradient id="menuGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f5f5f5" />
                        <stop offset="100%" stopColor="#e8e8e8" />
                      </linearGradient>
                    </defs>
                  </svg>
                </button>
              </li>
            </ul>
          </nav>
        </div>
        
        {isTocOpen && (
          <nav ref={tocMenuRef} className="bg-gray-50 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-2" aria-label="Sumário">
            <div className="container mx-auto px-4">
              <div className="inline-flex flex-col items-start">
                <ul className="flex flex-col gap-0.5 items-start">
                  {[
                    { id: 'introducao', label: 'Introdução' },
                    { id: 'historia', label: 'História' },
                    { id: 'estrategias', label: 'Estratégias e Táticas' },
                    { id: 'iniciante', label: 'Dicas para Iniciantes' },
                    { id: 'mestres', label: 'Jogadores Famosos' },
                    { id: 'cerebro', label: 'Benefícios Cognitivos' },
                    { id: 'guia-visual', label: 'Guia Visual' },
                  ].map((section) => (
                    <li key={section.id}>
                      <button
                        onClick={() => {
                          const element = document.getElementById(section.id)
                          if (element) {
                            element.scrollIntoView({ behavior: 'smooth', block: 'start' })
                            setIsTocOpen(false)
                          }
                        }}
                        className="group text-left px-2 py-1.5 rounded-r border-l-2 border-transparent bg-transparent text-xs text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gold hover:text-gray-900 dark:hover:text-white hover:pl-3 transition-all duration-200 ease-in-out whitespace-nowrap"
                      >
                        <span className="inline-block mr-1.5 opacity-0 group-hover:opacity-100 transition-opacity text-gold text-xs">→</span>
                        {section.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}

