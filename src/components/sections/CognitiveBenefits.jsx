import React from 'react'

export default function CognitiveBenefits() {
  return (
    <section id="cerebro" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 order-2 md:order-1">
            <img 
              src="https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470" 
              alt="Tablero de ajedrez con iluminación dramática"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Cómo el Ajedrez Puede Mejorar Tu Cerebro
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Estudios asocian el ajedrez a ganancias en funciones ejecutivas: planificación,
              inhibición, actualización de la memoria de trabajo y flexibilidad cognitiva.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              El entrenamiento constante fortalece patrones de reconocimiento, acelera la toma de
              decisiones y amplía el repertorio de soluciones para problemas complejos.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

