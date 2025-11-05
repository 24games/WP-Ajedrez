import React from 'react'

export default function Introduction() {
  return (
    <section id="introducao" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Introducción</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              El ajedrez es un juego milenario de estrategia y mente que desafía a los jugadores a
              tomar decisiones bajo presión, anticipar planes adversarios y optimizar recursos.
              Al practicarlo, desarrollas memoria, concentración, disciplina y competencias
              de resolución de problemas que se aplican a la vida cotidiana.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Además del aspecto competitivo, el ajedrez es un lenguaje universal que conecta
              culturas y generaciones, promoviendo el pensamiento crítico y la resiliencia.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            <img 
              src="https://www.chesshouse.com/cdn/shop/products/regulation-chess-set-timer-combo-28273249714263.jpg?v=1628340168&width=700" 
              alt="Reloj y tablero de ajedrez en partida"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

