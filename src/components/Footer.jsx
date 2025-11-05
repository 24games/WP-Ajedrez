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
            <div className="flex gap-4">
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors" aria-label="Instagram">Instagram</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors" aria-label="YouTube">YouTube</a>
              <a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors" aria-label="Twitter">Twitter</a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Links</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Política de Privacidade</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Termos de Uso</a></li>
              <li><a href="#" className="text-gray-600 dark:text-gray-400 hover:text-gold transition-colors">Contato</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4">Contato</h4>
            <p className="text-gray-600 dark:text-gray-400 mb-2">Email: contato@xadrezbrilhante.com</p>
            <p className="text-gray-600 dark:text-gray-400">© {currentYear} Xadrez Brilhante</p>
          </div>
        </div>
      </div>
    </footer>
  )
}

