import React from 'react'

export default function TableOfContents() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  const sections = [
    { id: 'introducao', label: 'Introdução' },
    { id: 'historia', label: 'História' },
    { id: 'estrategias', label: 'Estratégias e Táticas' },
    { id: 'iniciante', label: 'Dicas para Iniciantes' },
    { id: 'mestres', label: 'Jogadores Famosos' },
    { id: 'cerebro', label: 'Benefícios Cognitivos' },
    { id: 'eventos', label: 'Notícias e Eventos' },
    { id: 'guia-visual', label: 'Guia Visual' },
  ]

  return (
    <nav className="py-12 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700" aria-label="Sumário">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">Sumário</h2>
        <ul className="flex flex-wrap gap-3 list-none p-0">
          {sections.map((section) => (
            <li key={section.id}>
              <button
                onClick={() => scrollToSection(section.id)}
                className="px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300 hover:bg-gold hover:text-gray-900 font-medium transition-colors"
              >
                {section.label}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

