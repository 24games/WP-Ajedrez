import React from 'react'

export default function Benefits() {
  const benefits = [
    {
      title: 'Razonamiento estratégico',
      description: 'Planea varios movimientos por delante y evalúa riesgos de forma objetiva.'
    },
    {
      title: 'Memoria y patrones',
      description: 'Reconoce patrones de tácticas, estructuras de peones y finales ganadores.'
    },
    {
      title: 'Creatividad',
      description: 'Encuentra recursos inesperados y crea combinaciones brillantes en el tablero.'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          ¿Por qué ajedrez?
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <article 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {benefit.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

