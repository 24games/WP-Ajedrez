import React from 'react'

export default function History() {
  return (
    <section id="historia" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 order-2 md:order-1">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chess-king.JPG/960px-Chess-king.JPG?20100812210716" 
              alt="Piezas de ajedrez con destaque histórico"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Historia del Ajedrez</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Los orígenes del ajedrez se remontan al <em className="italic text-gold">Chaturanga</em>, juego indio del siglo VI.
              A lo largo de los siglos, el juego se expandió por Oriente Medio y Europa, adquiriendo
              las reglas modernas entre los siglos XV y XIX. Su impacto cultural es vasto,
              presente en literatura, cine, educación y deportes de alto rendimiento.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Con la popularización de los torneos y la computación, el ajedrez se convirtió en un campo
              fértil para la ciencia de datos, IA y estudios cognitivos, sin perder su esencia
              humana: creatividad y estrategia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

