import React from 'react'

export default function VisualGuide() {
  const guides = [
    {
      image: 'https://www.chesshouse.com/cdn/shop/products/regulation-chess-set-timer-combo-28273249714263.jpg?v=1628340168&width=700',
      title: 'O Tabuleiro',
      description: '64 casas alternadas. Lembre-se: a casa clara à direita de cada jogador.',
      link: 'https://unsplash.com/s/photos/chess-board'
    },
    {
      image: 'https://images.unsplash.com/photo-1604948501466-4e9c339b9c24?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1470',
      title: 'As Peças',
      description: 'Rei, Dama, Torres, Bispos, Cavalos e Peões: movimentos e valor relativo.',
      link: 'https://unsplash.com/s/photos/chess-pieces'
    },
    {
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471',
      title: 'Partidas em Ação',
      description: 'Observe padrões de abertura, meio-jogo e finais em partidas reais.',
      link: '#eventos'
    }
  ]

  return (
    <section id="guia-visual" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 text-center">
          Guia Visual: Tabuleiro e Peças
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto">
          Reconheça o tabuleiro, entenda a disposição inicial e as funções de cada peça.
          Use estas imagens como referência rápida ao estudar.
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
                  Ver referência →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

