import React from 'react'

export default function Strategies() {
  const strategies = [
    {
      title: 'Apertura Española (Ruy Lopez)',
      description: 'Busca presionar el caballo en f6 y el peón e5 tras 1.e4 e5 2.Cf3 Cc6 3.Ab5, buscando control central y desarrollo armonioso.'
    },
    {
      title: 'Defensa Siciliana',
      description: 'Tras 1.e4 c5, las negras luchan por el centro de forma dinámica, creando asimetrías y oportunidades tácticas con planes en la columna c y flancos opuestos.'
    },
    {
      title: 'Planes Clásicos',
      description: 'Dominar estructuras de peones, aprovechar columnas abiertas con torres y usar motivos tácticos como horquilla, clavada y táctica de descubierta.'
    }
  ]

  return (
    <section id="estrategias" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Estrategias y Tácticas
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {strategies.map((strategy, index) => (
            <article 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {strategy.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {strategy.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

