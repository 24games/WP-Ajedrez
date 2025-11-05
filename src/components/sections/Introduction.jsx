import React from 'react'

export default function Introduction() {
  return (
    <section id="introducao" className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">Introdução</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              O xadrez é um jogo milenar de estratégia e mente que desafia jogadores a
              tomar decisões sob pressão, antecipar planos adversários e otimizar recursos.
              Ao praticá-lo, você desenvolve memória, concentração, disciplina e competências
              de resolução de problemas que se aplicam à vida cotidiana.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Além do aspecto competitivo, o xadrez é uma linguagem universal que conecta
              culturas e gerações, promovendo pensamento crítico e resiliência.
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700">
            <img 
              src="https://images.unsplash.com/photo-1518544801976-3e3b78c5f9a5?q=80&w=900&auto=format&fit=crop" 
              alt="Relógio e tabuleiro de xadrez em partida"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

