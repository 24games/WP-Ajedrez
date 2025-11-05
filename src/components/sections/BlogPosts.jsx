import React from 'react'

export default function BlogPosts() {
  const posts = [
    {
      image: 'https://images.unsplash.com/photo-1518546305927-5a555bb7020c?q=80&w=900&auto=format&fit=crop',
      title: 'Fundamentos de aberturas: controle do centro',
      description: 'Entenda por que lances como e4/d4 e o rápido desenvolvimento criam posições saudáveis e chances de ataque.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1544672280-9e57a3a0f2b2?q=80&w=900&auto=format&fit=crop',
      title: 'Táticas essenciais: garfo, cravada e raio-X',
      description: 'Domine padrões táticos que decidem partidas, com exemplos práticos e exercícios.',
      link: '#'
    },
    {
      image: 'https://images.unsplash.com/photo-1518544801976-3e3b78c5f9a5?q=80&w=900&auto=format&fit=crop',
      title: 'Estratégias de médio-jogo',
      description: 'Transforme vantagens pequenas em vitórias com planos claros e boa coordenação de peças.',
      link: '#'
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

