import React from 'react'

export default function Hero() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <section className="pt-32 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              Domina el tablero
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              El ajedrez es un laboratorio de pensamiento. Desarrolla el razonamiento lógico, la memoria
              y la creatividad mientras aprendes aperturas, tácticas y estrategias con nuestra
              comunidad.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => scrollToSection('introducao')}
                className="px-6 py-3 bg-gradient-to-r from-gold to-accent text-gray-900 font-semibold rounded-lg hover:opacity-90 transition-opacity shadow-lg"
              >
                Explorar el ajedrez
              </button>
              <button
                onClick={() => scrollToSection('iniciante')}
                className="px-6 py-3 border-2 border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-100 font-semibold rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              >
                Empezar desde cero
              </button>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-700">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chess-king.JPG/960px-Chess-king.JPG?20100812210716" 
              alt="Piezas de ajedrez con enfoque en el rey"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

