import React from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800 mt-16">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ♛ Xadrez <span className="text-gold">Brilhante</span>
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Estratégia, aprendizado e diversão em um só lugar.
            </p>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="/politicas.html" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="/termos.html" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Termos de Uso</a></li>
            </ul>
          </div>
          <div>
            <p className="text-gray-600 dark:text-gray-400">© {currentYear} Xadrez Brilhante</p>
          </div>
        </div>
        <div className="container mx-auto px-4 mt-8 pt-8 border-t border-gray-200 dark:border-gray-800">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400 max-w-3xl mx-auto">
            <strong>Aviso:</strong> Este site é apenas informativo e educacional. Não há ganho financeiro, monetização ou qualquer forma de receita associada a este projeto. Todo o conteúdo é fornecido gratuitamente para fins de aprendizado e entretenimento.
          </p>
        </div>
      </div>
    </footer>
  )
}

