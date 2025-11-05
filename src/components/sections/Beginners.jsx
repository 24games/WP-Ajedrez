import React from 'react'

export default function Beginners() {
  const tips = [
    'Aprenda as regras: movimentos das peças, xeque, xeque-mate e empate.',
    'Controle o centro com peões e desenvolva as peças rapidamente.',
    'Rocheie cedo para proteger o rei e conectar as torres.',
    'Evite mover a mesma peça muitas vezes na abertura.',
    'Pratique táticas básicas diariamente.'
  ]

  return (
    <section id="iniciante" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Dicas para Iniciantes</h2>
            <ul className="space-y-4 list-none pl-0">
              {tips.map((tip, index) => (
                <li key={index} className="flex items-start gap-3">
                  <span className="text-gold text-xl font-bold mt-1">♟</span>
                  <span className="text-lg text-gray-600 dark:text-gray-300">{tip}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            <img 
              src="https://images.unsplash.com/photo-1529699211952-734e80c4d42b?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1471" 
              alt="Peças de xadrez em perspectiva para iniciantes"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

