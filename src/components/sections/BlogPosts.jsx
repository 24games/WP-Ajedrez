import React from 'react'

export default function BlogPosts() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1560174038-da43ac74f01b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=857',
      title: 'Fundamentos de aberturas: controle do centro',
      description: 'Entenda por que lances como e4/d4 e o rápido desenvolvimento criam posições saudáveis e chances de ataque.',
      link: '/artigo-aberturas.html'
    },
    {
      image: 'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471',
      title: 'Táticas essenciais: garfo, cravada e raio-X',
      description: 'Domine padrões táticos que decidem partidas, com exemplos práticos e exercícios.',
      link: '/artigo-taticas.html'
    },
    {
      image: 'https://www.chesshouse.com/cdn/shop/products/regulation-chess-set-timer-combo-28273249714263.jpg?v=1628340168&width=700',
      title: 'Estratégias de médio-jogo',
      description: 'Transforme vantagens pequenas em vitórias com planos claros e boa coordenação de peças.',
      link: '/artigo-meiojogo.html'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Artigos em destaque
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {posts.map((post, index) => (
            <article 
              key={index}
              className="rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 overflow-hidden shadow-lg hover:shadow-xl transition-shadow flex flex-col"
            >
              <img 
                src={post.image}
                alt={post.title}
                className="w-full aspect-video object-cover"
                loading="lazy"
              />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                  {post.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed mb-4 flex-grow">
                  {post.description}
                </p>
                <a 
                  href={post.link}
                  className="text-gold font-semibold hover:underline inline-block"
                >
                  Ler mais →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

