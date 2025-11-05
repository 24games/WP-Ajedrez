import React from 'react'

export default function Masters() {
  const masters = [
    {
      name: 'Garry Kasparov',
      description: 'Campeão mundial (1985–2000), conhecido por preparação profunda e estilo combativo. Contribuiu para popularizar a análise assistida por computadores.'
    },
    {
      name: 'Magnus Carlsen',
      description: 'Campeão mundial múltiplas vezes desde 2013, famoso por técnica em finais, versatilidade de aberturas e consistência em diferentes controles de tempo.'
    },
    {
      name: 'Bobby Fischer',
      description: 'Campeão mundial (1972), inovador teórico e ícone cultural; sua vitória no Match do Século impulsionou o xadrez nos EUA e no mundo.'
    }
  ]

  return (
    <section id="mestres" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Jogadores Famosos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {masters.map((master, index) => (
            <article 
              key={index}
              className="p-6 rounded-xl bg-gradient-to-b from-gray-50 to-white dark:from-gray-800 dark:to-gray-900 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {master.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                {master.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

