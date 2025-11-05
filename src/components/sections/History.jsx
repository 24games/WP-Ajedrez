import React from 'react'

export default function History() {
  return (
    <section id="historia" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 dark:border-gray-700 order-2 md:order-1">
            <img 
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Chess-king.JPG/960px-Chess-king.JPG?20100812210716" 
              alt="Peças de xadrez com destaque histórico"
              className="w-full h-auto"
              loading="lazy"
            />
          </div>
          <div className="space-y-6 order-1 md:order-2">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">História do Xadrez</h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              As origens do xadrez remontam ao <em className="italic text-gold">Chaturanga</em>, jogo indiano do século VI.
              Ao longo dos séculos, o jogo se expandiu pelo Oriente Médio e Europa, ganhando
              as regras modernas entre os séculos XV e XIX. Seu impacto cultural é vasto,
              presente em literatura, cinema, educação e esportes de alto rendimento.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Com a popularização dos torneios e da computação, o xadrez tornou-se um campo
              fértil para a ciência de dados, IA e estudos cognitivos, sem perder sua essência
              humana: criatividade e estratégia.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

