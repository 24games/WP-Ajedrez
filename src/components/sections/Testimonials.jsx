import React from 'react'

export default function Testimonials() {
  const testimonials = [
    {
      quote: 'O xadrez é a ginástica da inteligência.',
      author: 'Blaise Pascal'
    },
    {
      quote: 'Xadrez ensina que cada decisão tem consequências.',
      author: 'Garry Kasparov'
    },
    {
      quote: 'Estudar finais é o atalho para evoluir no jogo.',
      author: 'José Capablanca'
    }
  ]

  return (
    <section className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-12 text-center">
          Depoimentos
        </h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <blockquote 
              key={index}
              className="p-6 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg"
            >
              <p className="text-lg text-gray-700 dark:text-gray-300 italic mb-4">
                "{testimonial.quote}"
              </p>
              <footer className="text-gray-600 dark:text-gray-400 font-medium">
                — {testimonial.author}
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  )
}

