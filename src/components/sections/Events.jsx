import React from 'react'

export default function Events() {
  return (
    <section id="eventos" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6">
          Noticias y Eventos
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-4 max-w-2xl mx-auto">
          Sigue campeonatos como el Campeonato Mundial de Ajedrez, circuitos profesionales
          y torneos locales con actualizaciones regulares.
        </p>
        <button className="px-6 py-3 bg-gradient-to-r from-gold to-accent text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg">
          Ver noticias y agenda
        </button>
      </div>
    </section>
  )
}

