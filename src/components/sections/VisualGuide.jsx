import React from 'react'

export default function VisualGuide() {
  const guides = [
    {
      image: 'https://www.chesshouse.com/cdn/shop/products/regulation-chess-set-timer-combo-28273249714263.jpg?v=1628340168&width=700',
      title: 'El Tablero',
      description: '64 casillas alternadas. Recuerda: la casilla clara a la derecha de cada jugador.',
      link: '/guia-tabuleiro.html'
    },
    {
      image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      title: 'Las Piezas',
      description: 'Rey, Dama, Torres, Alfiles, Caballos y Peones: movimientos y valor relativo.',
      link: '/guia-pecas.html'
    },
    {
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471',
      title: 'Partidas en Acción',
      description: 'Observa patrones de apertura, medio juego y finales en partidas reales.',
      link: '/noticias.html'
    }
  ]

  return (
    <section id="guia-visual" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Guía Visual: Tablero y Piezas
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Reconoce el tablero, entiende la disposición inicial y las funciones de cada pieza.
          Usa estas imágenes como referencia rápida al estudiar.
        </p>
        <div className="grid md:grid-cols-3 gap-6">
          {guides.map((guide, index) => (
            <article 
              key={index}
              className="rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <img 
                src={guide.image}
                alt={guide.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {guide.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                  {guide.description}
                </p>
                <a 
                  href={guide.link}
                  target={guide.link.startsWith('http') ? '_blank' : undefined}
                  rel={guide.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="text-gold font-semibold hover:underline inline-block"
                >
                  {guide.link.startsWith('http') ? 'Ver referencia →' : 'Leer más →'}
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

