import React from 'react'

export default function Strategies() {
  const strategies = [
    {
      title: 'Abertura Espanhola (Ruy Lopez)',
      description: 'Visa pressionar o cavalo em f6 e o peão e5 após 1.e4 e5 2.Cf3 Cc6 3.Bb5, buscando controle central e desenvolvimento harmonioso.'
    },
    {
      title: 'Defesa Siciliana',
      description: 'Após 1.e4 c5, as pretas lutam pelo centro de forma dinâmica, criando assimetrias e chances táticas com planos na coluna c e alas opostas.'
    },
    {
      title: 'Planos Clássicos',
      description: 'Dominar estruturas de peões, aproveitar colunas abertas com torres e usar motivos táticos como garfo, cravada e tática de descoberta.'
    }
  ]

  return (
    <section id="estrategias" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Estratégias e Táticas
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

